<template>   
  <div id="secondaryArticles">
    <router-link v-for="(content, index) in articles" :key="index" :to="`/article/${content._id}`">
      <article class="articles">
        <div class="contentContainer2"> 
          <div class="imgSide">
            <div class="imgContainer">
              <img :src="getImageUrl(content.img)">
            <!--  <img :src="'/src/assets/imgs/' + content.img" alt="Article image"> -->
            </div>
          </div>
          <div class="texSideContainer">
            <div class="textSide2">
              <h3>{{ content.title }}</h3>
           
            </div>
          </div>

        </div>
      </article>

    </router-link>
  </div>
    <div class="wallpaper-divider"></div>
    <div class="loadMoreStuff"> <button id="myButton" @click="addArticles">Učitaj još</button>  </div>


</template>

<script>
    export default{

        data(){
            return{
                    articles:[],
                    num: 1
            }
        },

        async created() {

          try {
            const response = await fetch(
              `http://localhost:3000/article/latestArticles?start=${this.num}`
            );
            const data = await response.json();
            this.articles = data;
            /* console.log(this.articles); */
            this.num += 4;
            /* console.log(this.num); */
          } catch (error) {
            console.error(error);
            this.error = "Error retrieving articles";
          }
          
        },
        methods: {
          getImageUrl(img) {
            if (!img) {
              return "http://localhost:3000/images/slika.png";
            } else {
              return `http://localhost:3000/images/${img}`;
            }
          },
          async addArticles() {
            /* console.log("dodaj 4 nova"); */
            try {
              const response = await fetch(
                `http://localhost:3000/article/latestArticles?start=${this.num}`
              );
              const data = await response.json();
              this.articles = [...this.articles, ...data];
              this.num += 4;
            } catch (error) {
              console.error(error);
              this.error = "Error retrieving articles";
            }
          },
        },

    }
</script>


