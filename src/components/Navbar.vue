<template>
    <header :key="dataLoaded">
      <div v-if="!dataLoaded">
      Loading...
      </div>
      <div v-else>

        <div class="navigation-container">
        <div class="top-head">
          <router-link to="/">
            <div class="web-name">
              <h1>{{ title }}</h1>
            </div>
          </router-link>
          <div class="ham-btn">
            <span>
              <i class="fas fa-bars"></i>
            </span>
          </div>
          <div class="times-btn">
            <span>
              <i class="fas fa-times"></i>
            </span>
          </div>
        </div>
        <!-- nav bar -->
        <div class="nav-bar" id="nav-bar">
          <nav v-if="isAdmin">
            <ul>
              <li v-for="(link, index) in links" :key="index">
                <a :href="link.url">{{ link.text }}</a>
              </li>
            </ul>
          </nav>
        </div>
          <div class="top-head">

            <div class="loginContainer">
              <div class="loginIcon" v-if="user !== 'guest'">
                <router-link to="/login">

                  <img @click="logout" src="../assets/imgs/icon.png" />
                </router-link>
              </div>

              <div id="namePlace">
                <span>{{ user }}</span>
              </div>
             
              <div class="loginIcon">
            
                <router-link to="/login">
                  <img src="../assets/imgs/icon.png" />
                </router-link>
              </div>
            </div>
            <div class="search-container">
              <input type="text" placeholder="Search..." v-model="typedRoute" />
              <button @click="searchArticle" type="submit">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    <hr />
    </header>
</template>

<script>
  export default {

    data() {
      return {
        typedRoute: '',
        isAdmin: false,
        links: [
          { text: "Naslovna", url: "/" },
          { text: "Lifestyle", url: "#2" },
          { text: "Schi/Tech", url: "#3" },
          { text: "Sport", url: "#4" },
          { text: "Viral", url: "#5" },
          { text: "Artikl kreator", url: "/articleMaker" },
        ],
        links2: [
         { text: "Naslovna", url: "/" },
         { text: "Lifestyle", url: "#2" },
         { text: "Schi/Tech", url: "#3" },
         { text: "Sport", url: "#4" },
         { text: "Viral", url: "#5" },
       ],
        title: "WEBNEWS",
        search: "",
        user: 'guest',
        dataLoaded: false,
      };
    },
    watch: {
    $route(to, from) {
      // react to route changes...
      console.log("watch");
      this.getUsername();
    }
  },
   created() {
     this.getUsername();
   },
   methods: {
      searchArticle() {
        const query = encodeURIComponent(this.typedRoute);
        this.$router.push({
          path: '/search',
          query: { q: this.typedRoute },
        });
      },
      logout() {
        localStorage.removeItem('token');
        console.log("Token removed from localStorage");
      },
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
          this.isAdmin = user.response.admin=== true
          this.user = user.response.username;
          this.dataLoaded = true; // Mark data as loaded
        } catch (error) {
          console.error(error);
          this.error = "Error getting token username";
        }
      },
    },
  };
</script>