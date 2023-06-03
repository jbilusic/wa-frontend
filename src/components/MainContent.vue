<template>   
    <router-link to="article/645ec67d28142f170712e76d">
            <article v-for="(content, index) in mainArticle" :key="index" id="firstArticle">
                <div class="articleTitle">
                    
                </div>
                <div class="contentContainer"> 
                    <div class="imgSide">
                        <div class="imgContainer">
                            <!-- <img v-bind:src="'../assets/imgs/' + content.img"> -->
                            <img src="../assets/imgs/1.jpg">
                        </div>
                    </div>
                    <div class="textSide">
                        <h3>{{ content.middleTitle }}</h3>
                        
                        <p v-for="(content1, index1) in mainArticle[index].p" :key="index1">{{ content1 }}</p>
                        <a href = "#">Read More <span>>></span></a>
                    </div>
                </div>
            </article> 
        </router-link>
    </template>
    
    <script>
        export default{
           
            data(){
                return{
                        
                       
                        mainArticle:[
                        {
                                middleTitle:'Upozorenje vrhunskog fizičara: AI-u se ne smije dati tri stvari. Dali smo mu sve tri ',
    
                                p:['U podcastu Lexa Fridmana, informatičara i istraživača umjetne inteligencije na Massachusetts Institute of Technologyju (MIT), Max Erik Tegmark, fizičar, kozmolog i istraživač strojnog učenja, profesor na MIT-ju i predsjednik Future of Life Instituta, objasnio je, među ostalim, zašto je zabrinut sadašnjim načinom razvoja umjetne inteligencije i zašto je sa skupinom znanstvenika, mislilaca i stručnjaka za umjetnu inteligenciju pokrenuo otvoreno pismo kojim traže šestomjesečni moratorij na daljnje unapređivanje sustava moćnijih nego što je GPT-4.'
                                ],
                                img:'1.jpg'
                            }
                        ]
                }
            }
        }
    </script>
    
    
    