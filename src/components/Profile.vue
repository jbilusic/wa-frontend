<template>
  <div class="wallpaper-divider"></div>
  <div class="wallpaper-divider"></div>
  <article  id="firstArticle1">
    <div class="contentContainer3">
      <div class="containerOfContainer">
        <div class="articleTitle2">
          <h3>Profil</h3>
        </div>
        <div class="containerOfSides">
            
          <div class="leftSideOfProfile">
            <div class="imgContainer4">
                <img id="sourceFile" src="../assets/imgs/icon.png" alt="Article image">
            </div>
            <h3>{{ this.user }}</h3>
            <div class="infoProfile"> 
              <p>Član od: </p>
              <p>{{  }} {{ formatDate(this.date) }}</p>
              <p>Ukupno komentara: </p>
              <p>{{ this.comments }}</p>
              <p>Ukupno reakcija: </p>
              <p>{{ this.reactions }}</p>
            </div>
           
          </div>
          <div class="rightSideOfProfile">
            <h3>Bookmarks:</h3>
            <div class="profileCells">
              <router-link v-for="(content, index) in bookmarks" :key="index" :to="`/article/${content}`">
              <div class="cellProfile"> <h5> {{  content }}</h5></div>
            </router-link>
            </div>
          </div>
        </div>
       
        <div class="textSide3">
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      img: '../assets/imgs/slika.png',
      date:'',
      comments:'',
      reactions:'',
      bookmarks:[],
      isAdmin: false,
      user:'',
      error: "",
    }
  },
  methods: {
    formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
    },

   /*  async getUsername() {
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
     } catch (error) {
       console.error(error);
       this.error = "Error getting token username";
     }
   }, */
    async getProfileData() {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://webnews-jbilusic.onrender.com/users/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
        });
        const user = await response.json();
      
        this.$nextTick(() => {
          this.date = user.response.created;
        this.comments=  user.response.comments;
        this.reactions=  user.response.reactions;
        this.bookmarks=  user.response.bookmarks;
        this.user =  user.response.username;
        });
      } catch (error) {
        console.error(error);
        this.error = "Error getting token username";
      }
    },
  },
    async created() {
      try {
        this.getProfileData();
      } catch (error) {
        console.error(error);
        this.error = "Error retrieving profile";
      }
    },
};
</script>
