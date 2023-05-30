<template>   
        <div id="secondaryArticles">
  <router-link v-for="(content, index) in article" :key="index" :to="{ path: content.path }">
    <article class="articles">
      <div class="contentContainer2"> 
        <div class="imgSide">
          <div class="imgContainer">
            <img :src="'/src/assets/imgs/' + content.img" alt="Article image">
          </div>
        </div>
        <div class="textSide2">
          <h3>{{ content.middleTitle }}</h3>
          <a :href="content.path">Read More <span>>></span></a>
        </div>
      </div>
    </article>  
  </router-link>
</div>

               
</template>

<script>
    export default{
        
        data(){
            return{
                    article:[
                        {   
                            middleTitle:'Voditeljica se oprostila od RTL-a, a sada je poznato i gdje nastavlja svoju karijeru i na kojoj poziciji ',     
                            img:'2.jpeg',
                            path:"article/id2"
                        },
                        {   
                            middleTitle:'Žurio kod veterinara? Policija objavila urnebesnu fotografiju, traže vozača zbog prebrze vožnje ',
                            img:'3.png',
                            path:"article/id3"
                        }
                        
                    ]
            }
        }
    }
</script>


