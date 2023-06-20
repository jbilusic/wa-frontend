<template>
    <div class="wallpaper-divider"></div>
    <div class="wallpaper-divider"></div>
    <article id="firstArticle1">
      <div class="contentContainer3">
        <div class="containerOfContainer">
          <div class="articleTitle2">
            <h3><input v-model="postData.title" type="text" id="naslovStylingInput" placeholder="Naslov" /></h3>
          </div>
          <div class="articleInfo">
            <h5>Technews, /</h5>
            <p>Zadnja nadopuna: / </p>
          </div>
          <div class="imgSide3">
            <div class="imgContainer3">
              <div class="circle-holder">
                <div class="circle-container preview">
                  <img id="avatar"  :src="imageUrl" alt="Article Image">
                 
                </div>
              </div>
            </div>
            <div class="choose-holder">
              <label for="image_uploads">Choose File</label>
              <input type="file" id="image_uploads" accept="image/png, image/jpeg" multiple hidden @change="handleFileUpload" />
            </div>
          </div>
          <div ref="textSide3" class="textSide4">
            <template v-for="(text, index) in article.content">
              <textarea placeholder="Upiši paragraf.." v-model="article.content[index]"></textarea>
            </template>
          </div>
          <div id="btnParagrafHolder">
            <button class="myButton2" @click="addTextarea">Dodaj paragraf</button>
            <button class="myButton2" @click="removeTextarea">Obriši paragraf</button>
          </div>
          <div class="line"></div>
          <button class="myButton3" @click="modifyPost">Završi</button>
        </div>
      </div>
    </article>
  </template>
  
  <script>
  import { onMounted, ref } from "vue";
  import Comments from "./Comments.vue";
  import { sayHello } from "./ImgChanger.js";
  
  export default {
    computed: {
          imageUrl() {
            const articleId = this.$route.params.id;
            if (articleId=== undefined) {
                return;
            }else{
              return `http://localhost:3000/images/${this.postData.img}`;
            }
          },
      },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        this.postData.img = file;
        this.imgUrl = URL.createObjectURL(file);
        console.log(this.postData.img);
      },
      async modifyPost() {
        try {
          const articleId = this.$route.params.id;
          const token = localStorage.getItem('token');
          const formData = new FormData();
            formData.append("username", this.postData.username);
           if (this.postData.title)formData.append("title", this.postData.title);
           if (this.postData.content){
              this.postData.content.forEach((paragraph, index) => {
              formData.append(`content[${index}]`, paragraph);
            });
           } 
           formData.append("img", this.postData.img)
           
          console.log(formData);
          const response = await fetch(`http://localhost:3000/protectedArticle/modify/${articleId}`, {
          method: 'PATCH',
          headers: {
          'Authorization': 'Bearer ' + token
          },
          body: formData,
          });
          const data = await response.json();
          if(response.ok){
            if (data.message) {
            this.error = data.message;
            this.success = '';
            window.alert('Article updated successfully!');
            this.$router.push(`/article/${articleId}`);
            }
          }
           else {
            window.alert('Article Not Updated!');
            this.success = 'Article Not Updated';
            this.error = '';
          }
        } catch (error) {
        console.error(error);
        this.error = 'Error updating article';
        this.success = '';
      }
      },
      
      
      addTextarea() {
        this.postData.content.push("");
      },
      removeTextarea() {
        this.postData.content.pop();
      },
    },
  
    components: {
      Comments,
    },
    mounted() {
      sayHello();
    },
  
      data() {
        return {
          postData: {
            username: "petra99",
            title: "",
            content: "",
            author: '',
            img: null,
          },
          article: {},
          error: "",
          success: '',
          mainArticle: [{}],
        };
      },
      async created() {
         try {
         const articleId = this.$route.params.id;
         if (articleId === undefined) {
            return;
         }
         const response = await fetch(`http://localhost:3000/article/getById/${articleId}`);
         const data = await response.json();
         this.article = data.article;
         this.postData.title = data.article.title;
         this.postData.content = data.article.content;
         this.postData.author = data.article.author;
         this.postData.img = data.article.img;
         } catch (error) {
         console.error(error);
         this.error = "Error retrieving article";
         }
      },
    
    };
  </script>
  