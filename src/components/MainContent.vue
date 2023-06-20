<template>   
<router-link :to="`/article/${mainArticle[0]._id}`">
        <article v-for="(content, index) in mainArticle" :key="index" id="firstArticle">

            <div class="contentContainer"> 
                <div class="imgSide">
                    <div class="imgContainer">
                        <img :src="getImageUrl(mainArticle[0].img)">
                    </div>
                </div>
                <div class="textSide">
                    <h3>{{ mainArticle[0].title }}</h3>
                    <p>{{  mainArticle[0].content[0] }}</p>
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
                    mainArticle:[{
                            middleTitle:'',
                            content:[],
                            p:[''
                            ],
                            img:''
                    }]
            }
        },
        async created() {
            try {
                const response = await fetch(`http://localhost:3000/article/latest`,{
                method: 'GET',credentials: 'include',
            })
            const data = await response.json();
            this.mainArticle = data;
            } catch (error) {
            console.error(error);
            this.error = "Error retrieving article";
            }
        },
        methods: {
            getImageUrl(img) {
                if (!img) {
                    return "http://localhost:3000/images/slika.png";
                } else {
                    return `http://localhost:3000/images/${img}`;
                }
            }
         }
    }
</script>
    
    
    