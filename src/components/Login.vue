<template>   
    <div class="wallpaper-divider"></div>
       <div class="wallpaper-divider"></div>
       <div class="login">
            <div class="loginMainContainer">
                <div class="loginBox">
                    <h2>Login</h2>
                    <form>
                        <input type="text" placeholder="Korisničko ime">
                        <input type="password" placeholder="Lozinka">
                        <input type="submit" value="Login">
                    </form>
                    <a href="#">Zaboravljena lozinka?</a>
                    <h2 ></h2>
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
        components:{
            
        },
        
        data(){
            return{
                    mainArticle:
                    {
                            img:'1.jpg',
                            title:"test"
                    }
                    
            }
        }
    }
</script>


