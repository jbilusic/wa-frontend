<template>   
    <div class="wallpaper-divider"></div>
       <div class="wallpaper-divider"></div>
       <div class="login">
            <div class="loginMainContainer">
                <div class="loginBox">
                    <h2>Registracija</h2>
                    <form class="form-container">
                       
                        <div class="form-group">
                            <label for="name">Korisničko ime:</label>
                            <input type="text" id="name" name="name" placeholder="Unesi korisničko ime" required v-model="newReg.username">
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Unesi email" required v-model="newReg.email">
                        </div>
                        <div class="form-group">
                            <label for="password">Lozinka:</label>
                            <input type="password" id="password" name="password" placeholder="Unesi Lozinku" required v-model="newReg.password">
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">Potvrdi Lozinku:</label>
                            <input type="password" id="confirm-password" name="confirm-password" placeholder="Potvrdi svoju lozinku" required v-model="newReg.rePassword">
                        </div>
                        <input type="submit" value="Registriraj se" @click="register">
                    </form>
               
                    <h2></h2>
                    <div id="secondBtnDiv">
                        <router-link to="/login">
                        <input id="second" type="button"  value="Već imaš račun?">
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
            async register(event) {
            event.preventDefault();
        try {
            const response = await fetch('https://webnews-jbilusic.onrender.com/login/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.newReg.username,
                email: this.newReg.email,
                password: this.newReg.password,
                rePassword: this.newReg.rePassword,
            }),
            mode: 'cors', // Add this line to enable CORS
            });

            if (response.ok) {
            const data = await response.json();
                this.$router.push(`/login`);
            } else{
                console.log('Bad input');
            }
        } catch (error) {
                console.error(error);
        }
            },
        },
        
        data(){
            return{
                mainArticle:
                {
                        img:'1.jpg',
                        title:"test"
                },
                newReg: {
                    username: '',
                    email: '',
                    rePassword: '',
                    password: '',
                },
                    
            }
        }
    }
</script>


