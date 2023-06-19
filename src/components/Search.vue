<template>   
    <div id="backgroundOfSearchFile">
        <div id="backgroundOfSearchFile2">
        <section class="searchContentHolder">
            <div class="searchContent">
                <div id="secondaryArticles">
                    <router-link v-for="(content, index) in articles" :key="index" :to="`/article/${content._id}`">
                        <article class="articles">
                            <div class="contentContainer2"> 
                                <div class="imgSide">
                                    <div class="imgContainer">
                                        <img :src="getImageUrl(content.img)">
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
                <div class="nothingToShow">
                  <h1>Nema artikl po tome imenu</h1>
                </div>
        
            </div>
        </section>
        </div>
    </div>
</template>
    
<script>

    export default{

        watch: {
            '$route.query.q': {
            immediate: true,
            handler(newValue, oldValue) {
                if (newValue !== oldValue) 
                    this.fetchArticles();
            },
            },
        },
           
        data() {
            return {
                articles: [],
            }
        },
        created() {
            this.fetchArticles();
        },
  
        methods: {
            async fetchArticles() {
                try {
                    const query=this.$route.query.q;
                    const response = await fetch(`http://localhost:3000/article/searchByQuery?q=${query}`);
                    const data = await response.json();
                    if(response.status == 204){
                        console.log("nema article");
                    }
                    this.articles = data;
                    let nothingToShow2 = document.getElementsByClassName("nothingToShow")[0]
                    nothingToShow2.style.display ="none";
                    /* window.location.reload(); */
                } catch (error) {
                    console.error(error);
                    let nothingToShow = document.getElementsByClassName("nothingToShow")[0]
                    nothingToShow.style.display ="block";
                    this.error = "Error retrieving articles";
          
                }
        
                // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: "smooth" });
            },
     
        
            getImageUrl(img) {
                if (!img) {
                    return "http://localhost:3000/images/slika.png";
                } else {
                    return `http://localhost:3000/images/${img}`;
                }
            },
        },
    }
</script>
    