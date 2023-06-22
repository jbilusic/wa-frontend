<template>   
    <div class="wallpaper-divider"></div>
    <div class="wallpaper-divider"></div>
    <article v-for="(content, index) in mainArticle" :key="index" id="firstArticle1">
        <div class="contentContainer3">
            <div class="containerOfContainer">
                <div class="articleInfo2" v-if="isAdmin">
                    <router-link :to="`/articleMaker/${$route.params.id}`">
                        <img src="../assets/imgs/edit.png">
                    </router-link>
                    <img src="../assets/imgs/delete.png" @click="deleteArticle"> 
                </div>

                <div class="articleTitle2">
                    <h3>{{ article.title  }}</h3>
                </div>
                <div class="articleAndBookmark">
                    <div class="articleInfo">
                        <h5>Technews, {{ article.author }}</h5>
                        <p>{{ formatDate(article.postDate) }}</p>
                    </div>
                    
                    <div class="bookmark">
                        <img id="imgBookmark" src="../assets/imgs/crven.png" @click="addBookmark">
                    </div>
                </div>
                <div class="imgSide2">
                    <div class="imgContainer2">
                        <img id="sourceFile" :src="img" alt="Article image">                       
                    </div>
                </div>
                <div class="textSide3">
                    <p style="margin-bottom: 24px;" v-for="(content1, index1) in article.content" :key="index1">{{ content1 }}</p>
                </div>
                <Comments />
                <div class="line"></div>
            </div>
        </div> 
    </article> 
</template>

<script>
import Comments from './Comments.vue';

 export default{
    components:{
        Comments
    },
    data() {
        return {
            img: '../assets/imgs/slika.png',
            article: {},
            isAdmin: false,
            user:'',
            error: "",
            mainArticle:[{
                middleTitle:'Upozorenje vrhunskog fizičara: AI-u se ne smije dati tri stvari. Dali smo mu sve tri ', 
                p:["AKO SE NASTAVI nekontrolirani razvoj umjetne inteligencije (AI), vođen kompeticijom među kompanijama, ako ne pauziramo kako bismo odredili smjernice za njegov razvoj i neke regulacije, moglo bi nam se dogoditi da nas ona nadvlada i istisne kao što je Homo sapiens istisnuo neandertalce, upozorio je u nedavno objavljenom razgovoru fizičar i istraživač umjetne inteligencije Max Tegmark.",'U podcastu Lexa Fridmana, informatičara i istraživača umjetne inteligencije na Massachusetts Institute of Technologyju (MIT), Max Erik Tegmark, fizičar, kozmolog i istraživač strojnog učenja, profesor na MIT-ju i predsjednik Future of Life Instituta, objasnio je, među ostalim, zašto je zabrinut sadašnjim načinom razvoja umjetne inteligencije i zašto je sa skupinom znanstvenika, mislilaca i stručnjaka za umjetnu inteligenciju pokrenuo otvoreno pismo kojim traže šestomjesečni moratorij na daljnje unapređivanje sustava moćnijih nego što je GPT-4.', 
                    "U pismu, koje kritizira postojeći pristup u stilu - prvo izgradimo brod, a poslije ćemo ga popravljati - i upozorava da važnu utrku u razvoju AI-a vode čelnici kompanija koji nisu izabrani predstavnici ljudi, odnosno biračkog tijela, već čelnici tehnoloških kompanija, autori postavljaju pitanja:", 
                    "Trebamo li dopustiti strojevima da preplave naše informacijske kanale propagandom i neistinom?", 
                    "Pismo je do sada potpisalo više od 27.500 ljudi, među kojima su povjesničar i autor nekoliko bestselera kao što je Sapiens Yuval Noah Harari, suosnivač Applea Steve Wozniak, suosnivač Skypea Jaan Tallinn te brojni istraživači umjetne inteligencije kao što su Stuart Russell, Yoshua Bengio, Gary Marcus i Emad Mostaque.", 
                    "Teško je očekivati da bi pismo samo po sebi moglo zaustaviti ili usporiti kompanije poput Googlea i Microsofta, no njegove poruke možda bi mogle doprijeti do političara koji bi mogli nešto poduzeti u zakonodavnom smislu.", 
                    "Tegmark već godinama upozorava na AI"

                ],
                img:'1.jpg',
                title:"test",
                bookmark:false
            }]
        }
    },
    methods: {
    async getUsername() {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
        });
        const user = await response.json();
        this.isAdmin = user.response.admin
  
        this.user = user.response.username;
      } catch (error) {
        console.error(error);
        this.error = "Error getting token username";
      }
    },
        formatDate(timestamp) {
            const date = new Date(timestamp);
  
            const options = {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            };
  
            // Format the date according to the options
            return date.toLocaleDateString('hr-HR', options);
        },
        async getProfileData() {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3000/users/profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            });
            const user = await response.json();
        
            this.$nextTick(() => {
            this.bookmarks=  user.response.bookmarks;
            const articleId = this.$route.params.id;
            if(this.bookmarks.includes(articleId)){
                this.bookmark= true;
                document.getElementById("imgBookmark").src="/src/assets/imgs/zelen.png";
            }else{
                this.bookmark= false;
                document.getElementById("imgBookmark").src="/src/assets/imgs/crven.png";
            }
        
            this.user =  user.response.username;
            });
            
        } catch (error) {
            console.error(error);
            this.error = "Error getting token username";
        }
        },

        async addBookmark() {
            try {
                const token = localStorage.getItem('token');
                const articleId = this.$route.params.id;
                if(this.bookmark){
                this.bookmark= false;
                document.getElementById("imgBookmark").src="/src/assets/imgs/crven.png";
                try { 
                    const response = await fetch(`http://localhost:3000/users/bookmark/${articleId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                    });
                    const data = await response.json();
                } catch (error) {
                    console.error(error)
                }
                }else{
                    this.bookmark= true;
                    document.getElementById("imgBookmark").src="/src/assets/imgs/zelen.png";
                try { 
                    const response = await fetch(`http://localhost:3000/users/bookmark/${articleId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                    });
                    const data = await response.json();
                } catch (error) {
                    console.error(error)
                }
                }
            } catch (error) {
                console.error(error);
                this.error = "Error retrieving article";
            }
        },
  
        deleteArticle() {
            const articleId = this.$route.params.id;
            const token = localStorage.getItem('token');
            console.log(articleId);
  
        fetch(`http://localhost:3000/protectedArticle/delete/${articleId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        })
        .then(response => {
            if (response.ok) {
                console.log('Article deleted successfully');
                window.alert('Article deleted successfully');
                this.$router.push(`/`);
            } else {
                window.alert('Not an admin');
                console.error('Failed to delete article');
            }
        })
        .catch(error => {
            console.error('Error occurred during deletion', error);
        });
    }
},

    async created() {
        try {
            const articleId = this.$route.params.id;
            const response = await fetch(`http://localhost:3000/article/data/${articleId}`);
            const data = await response.json();
            this.getUsername()
            this.article = data.article;
            this.img = `http://localhost:3000/images/${this.article.img}`;
        } catch (error) {
            console.error(error);
            this.error = "Error retrieving article";
        }
        this.getProfileData();
    },
}
</script>