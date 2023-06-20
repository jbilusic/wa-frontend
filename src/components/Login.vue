<template>   
    <div class="wallpaper-divider"></div>
       <div class="wallpaper-divider"></div>
       <div class="login">
            <div class="loginMainContainer">
                <div class="loginBox">
                    <h2>Login</h2>
                    <form>
                        <input type="text" placeholder="Korisničko ime" v-model="newLogin.username">
                        <input type="password" placeholder="Lozinka" v-model="newLogin.password">
                        <input type="submit" value="Login" @click="login">
                    </form>
                    <a href="#">Zaboravljena lozinka?</a>
                    <h2></h2>
                    <div id="secondBtnDiv">
                        <router-link to="/register">
                        <input id="second" type="button"  value="Kreiraj račun">
                        </router-link>
                    </div>
                </div>
            </div>
       </div> 

</template>

<script>
import "../assets/login.css";

export default{
    components:{},
    methods: {
        async login(event) {
        event.preventDefault();

    try {
        const response = await fetch('http://localhost:3000/login/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.newLogin.username,
                password: this.newLogin.password,
            }),
            mode: 'cors', // Add this line to enable CORS
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token; // Assuming the token is received as part of the response data
            localStorage.setItem('token', token);
            console.log("Token stored in localStorage:", token);
        
            this.$router.push(`/`);
        } else {
            // Handle the normal response
            console.log('Bad credentials');
        }
    } catch (error) {
        console.error(error);
    }
},
        
    data(){
        return{
            mainArticle:{
                img:'1.jpg',
                title:"test"
            },
            newLogin: {
                username: '',
                password: '',
            },
                    
        };
    },
    },
};
</script>


