<template>
    <header>
        <div class = "navigation-container">
                <div class = "top-head">
                    <router-link to="/">
                    <div class = "web-name">
                        
                        <h1>{{ title }}</h1>
                        
                    </div>
                </router-link>
                    <div class = "ham-btn">
                        <span>
                            <i class = "fas fa-bars"></i>
                        </span>
                    </div>
                    <div class = "times-btn">
                        <span>
                            <i class = "fas fa-times"></i>
                        </span>
                    </div>
                </div>
                <!-- nav bar -->
                <div class = "nav-bar" id = "nav-bar">
                    <nav>
                        <ul>
                            <li v-for="(link, index) in links" :key="index">
                                <a :href="link.url" @click="">
                                    {{ link.text }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class = "top-head">
                    <div class="loginContainer">
                        <div class="loginIcon">
                            <router-link to="/login">
                            <img src = "../assets/imgs/icon.png">
                             </router-link>
                        </div>
                    </div>
                    <div class="search-container">
                        <input type="text" placeholder="Search...">
                        <button type="submit"><i class="fa fa-search"></i></button>
                      </div>  
                </div>
    </div>
    </header>
    
    <hr>
</template>

<script>
    export default{
        data(){
            return{
                links:[
                            {text:'Naslovna', url:'/'},
                            {text:'Lifestyle', url:'#2'},
                            {text:'Schi/Tech', url:'#3'},
                            {text:'Sport', url:'#4'},
                            {text:'Viral', url:'#5'},
                             ],
                 title:'TECHNEWS'
            }
        }
    }
</script>
