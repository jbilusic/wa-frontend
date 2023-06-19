<template>   
  <div class="comments-section">
    <h2>Komentari ({{ comments.length }})</h2>
    <ul>
      <li v-for="(comment, index) in comments" :key="index">
        <div class="comment">
          <img src="https://via.placeholder.com/50" alt="Avatar" />
          <div class="comment-body">
            <div class="comment-titlePart"><h3 class="comment-author">{{ comment.username }}</h3>
              <div class="comment-deletePart" @click="deleteComment(comment.id)"><span>X</span></div>
            </div>

            <p class="comment-text">{{ comment.content }}</p>
            <span class="comment-date">{{ formatDate(comment.timestamp) }}</span>
            <div class="comment-actions">
              <div class="comment-actions2">
                <div class="comment-action like" @click="likeComment(comment)"><i class="fas fa-thumbs-up"></i>{{ comment.likes.count }}</div>
                <div class="comment-action dislike" @click="dislikeComment(comment)"><i class="fas fa-thumbs-down"></i>{{ comment.dislikes.count }}</div>
              </div>

            </div>
          </div>
        </div>
      </li>
    </ul>
    <form @submit="submitComment">
      <h3>Napišite komentar</h3>
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea v-model="newComment.content" id="comment" name="comment" required></textarea>
      </div>
      <div class="commentDiv">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  let user= "user2";
  export default{
    data()  {
      return{
        comments:[],
        newComment: {
        username: 'user1',
        content: '',
        likes: {
          count: 0,
          users: []
        },
        dislikes: {
          count: 0,
          users: []
        }
        }
      }
    },
    async created() {
    try {
      const articleId = this.$route.params.id;
      const response = await fetch(`http://localhost:3000/article/getById/${articleId}`);
      const data = await response.json();
      this.comments = data.article.comments;
      let i = 0;
      this.$nextTick(() => {
        let like = document.querySelectorAll('.like');
        let dislike = document.querySelectorAll('.dislike');
        this.comments.forEach(element => {
          if(element.likes.users.includes(user)){
                  like[i].style.color = "#45a622";
              }else{
                like[i].style.color = "gray";
              }
              if(element.dislikes.users.includes(user)){
                dislike[i].style.color = "#a62222";
              }else{
                dislike[i].style.color = "gray";
              }
          i++;
        });
      });

    } catch (error) {
      console.error(error);
      this.error = "Error retrieving article";
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
    async submitComment(event) {
    event.preventDefault();
    try {
      const articleId = this.$route.params.id;
      const response = await fetch('http://localhost:3000/comments/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          articleId,
          comments: this.newComment
        })
      });
      const data = await response.json();
      const updatedResponse = await fetch(`http://localhost:3000/article/getById/${articleId}`);
      const updatedData = await updatedResponse.json();
      this.comments = updatedData.article.comments;
      let i = 0;
      this.$nextTick(() => {
        let like = document.querySelectorAll('.like');
        let dislike = document.querySelectorAll('.dislike');
        this.comments.forEach(element => {
          if(element.likes.users.includes(user)){
                  like[i].style.color = "#45a622";
              }else{
                like[i].style.color = "gray";
              }
              if(element.dislikes.users.includes(user)){
                dislike[i].style.color = "#a62222";
              }else{
                dislike[i].style.color = "gray";
              }
          i++;
        });
      });

      this.newComment.content = '';
    } catch (error) {
      console.error(error);
    }
    },
     async deleteComment(commentId) {
      try {
        const articleId = this.$route.params.id;
        const response = await fetch(`http://localhost:3000/comments/delete/${articleId}/${commentId}`, {
          method: 'DELETE'
        });

        if (response.status === 200) {
          const updatedResponse = await fetch(`http://localhost:3000/article/getById/${articleId}`);
          const updatedData = await updatedResponse.json();
          this.comments = updatedData.article.comments;
          let i = 0;
          this.$nextTick(() => {
            let like = document.querySelectorAll('.like');
            let dislike = document.querySelectorAll('.dislike');
            this.comments.forEach(element => {
              if(element.likes.users.includes(user)){
                  like[i].style.color = "#45a622";
              }else{
                like[i].style.color = "gray";
              }
              if(element.dislikes.users.includes(user)){
                dislike[i].style.color = "#a62222";
              }else{
                dislike[i].style.color = "gray";
              }
              i++;
            });
          });
        } else if (response.status === 404) {
          
          console.log('Comment not found');
        } else {
          
          console.log('Error deleting comment');
        }
      } catch (error) {
        console.error(error);
        
      }
    },
    async likeComment(comment) {
      try {
        const articleId = this.$route.params.id;
        const response = await fetch(`http://localhost:3000/comments/like`, {
          method: 'PUT',
          headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          articleId:articleId,
          commentId: comment.id,
          user: user
        })
        });

        if (response.status === 200) {
          const updatedResponse = await fetch(`http://localhost:3000/article/getById/${articleId}`);
          const updatedData = await updatedResponse.json();
          this.comments = updatedData.article.comments;
          let i = 0;
          this.$nextTick(() => {
            let like = document.querySelectorAll('.like');
            let dislike = document.querySelectorAll('.dislike');
            this.comments.forEach(element => {
              if(element.likes.users.includes(user)){
                  like[i].style.color = "#45a622";
              }else{
                like[i].style.color = "gray";
              }
              if(element.dislikes.users.includes(user)){
                dislike[i].style.color = "#a62222";
              }else{
                dislike[i].style.color = "gray";
              }
              i++;
            });
          });
        } else {
          console.log('Error liking comment');
        }
      } catch (error) {
        console.error(error);
        // Handle error
      } 
    },

    async dislikeComment(comment) {
       try {
        const articleId = this.$route.params.id;
        const response = await fetch(`http://localhost:3000/comments/dislike`, {
          method: 'PUT',
          headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          articleId:articleId,
          commentId: comment.id,
          user: user
        })
        });

        if (response.status === 200) {
          const updatedResponse = await fetch(`http://localhost:3000/article/getById/${articleId}`);
          const updatedData = await updatedResponse.json();
          this.comments = updatedData.article.comments;
          let i = 0;
          this.$nextTick(() => {
            let like = document.querySelectorAll('.like');
            let dislike = document.querySelectorAll('.dislike');
            this.comments.forEach(element => {
              if(element.likes.users.includes(user)){
                  like[i].style.color = "#45a622";
              }else{
                like[i].style.color = "gray";
              }
              if(element.dislikes.users.includes(user)){
                dislike[i].style.color = "#a62222";
              }else{
                dislike[i].style.color = "gray";
              }
              i++;
            });
          });
        } else {
          console.log('Error liking comment');
        }
      } catch (error) {
        console.error(error);
        // Handle error
      } 
    }


  }
};
</script>