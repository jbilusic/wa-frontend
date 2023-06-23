import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';
import './assets/article.css';

const app = createApp(App);

// Define the global variable
app.config.globalProperties.$username = '';

app.use(router);



app.mount('#app');