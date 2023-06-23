<template>
  <div class="wallpaper-divider"></div>
  <div class="wallpaper-divider"></div>
  <article v-for="(content, index) in mainArticle" :key="index" id="firstArticle1">
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
                <img id="avatar" src="../assets/imgs/slika.png" alt="Profile Image" />
              </div>
            </div>
          </div>
          <div class="choose-holder">
            <label for="image_uploads">Choose File</label>
            <input type="file" id="image_uploads" accept="image/png, image/jpeg" multiple hidden @change="handleFileUpload" />
          </div>
        </div>
        <div ref="textSide3" class="textSide4">
          <template v-for="(text, index) in postData.content">
            <textarea placeholder="Upiši paragraf.." v-model="postData.content[index]"></textarea>
          </template>
        </div>
        <div id="btnParagrafHolder">
          <button class="myButton2" @click="addTextarea">Dodaj paragraf</button>
          <button class="myButton2" @click="removeTextarea">Obriši paragraf</button>
        </div>
        <div class="line"></div>
        <button class="myButton3" @click="setPost">Završi</button>
      </div>
    </div>
  </article>
</template>

<script>
import { onMounted, ref } from "vue";
import Comments from "./Comments.vue";
import { sayHello } from "./ImgChanger.js";

export default {
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.postData.img = file;
      this.imgUrl = URL.createObjectURL(file);
    },

    async setPost() {
      try {
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append("username", this.postData.username);
        formData.append("title", this.postData.title);
        this.postData.content.forEach((paragraph, index) => {
          formData.append(`content[${index}]`, paragraph);
        });
        formData.append("img", this.postData.img);
        const response = await fetch("https://webnews-jbilusic.onrender.com/protectedArticle/add", {
          method: "POST",
          headers: {
            'Authorization': 'Bearer ' + token
          },
          body: formData
        });
        const data = await response.json();
        console.log(data);
        window.alert('Article created successfully!');
        if (response.status === 201) 
          this.$router.push(`/article/${data.id}`);
        else{
          alert("greska ")
        }

      } catch (error) {
        console.error(error);
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
          content: [],
          img: "",
        },
        mainArticle: [{}],
      };
    },
  };
</script>
