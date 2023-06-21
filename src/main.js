import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';
import './assets/article.css';

const app = createApp(App);

// Define the global variable
app.config.globalProperties.$username = '';

app.use(router);

/* // Create the created hook
app.mixin({
  created() {
    this.getUsername();
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
        this.$username = user.username;
      } catch (error) {
        console.error(error);
        this.error = "Error getting token username";
      }
    },
  },
});
*/

app.mount('#app');