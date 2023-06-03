<template>
  <header>
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
        <nav>
          <ul>
            <li v-for="(link, index) in links" :key="index">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="top-head">
        <div class="loginContainer">
          <div class="loginIcon">
            <router-link to="/login">
              <img src="../assets/imgs/icon.png" />
            </router-link>
          </div>
        </div>
        <div class="search-container">
          <input type="text" placeholder="Search..." v-model="search" />
          <button @click="searchArticle" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <hr />
  </header>
</template>
<script>
  export default {
    methods: {
      async searchArticle() {
        try {
          const response = await fetch("http://localhost:3000/article/search", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ search: this.search }), // add curly braces and property name to send object in the body
          });
          const data = await response.json();
        } catch (error) {
          console.error(error);
        }
      },
      

    },
    data() {
      return {
        links: [
          { text: "Naslovna", url: "/" },
          { text: "Lifestyle", url: "#2" },
          { text: "Schi/Tech", url: "#3" },
          { text: "Sport", url: "#4" },
          { text: "Viral", url: "#5" },
        ],
        title: "TECHNEWS",
        search: "",
      };
    },
  };
</script>