<template>   
    <div>
     <h1>TEST</h1>
     <h2>{{ article.title }}</h2>
     <p>{{ article.content }}</p>
     <p>Author: {{ article.author }}</p>
   </div> 
 </template>
 
 <script>
 export default {
   data() {
     return {
       article: {},
       error: "",
     };
   },
   async created() {
     try {
       const articleId = this.$route.params.id;
       const response = await fetch(`http://localhost:3000/article/getById/${articleId}`);
       const data = await response.json();
       this.article = data.article;
     } catch (error) {
       console.error(error);
       this.error = "Error retrieving article";
     }
   },
 };
 </script>