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
                            <input type="text" id="name" name="name" placeholder="Unesi korisničko ime" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Unesi email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Lozinka:</label>
                            <input type="password" id="password" name="password" placeholder="Unesi Lozinku" required>
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">Potvrdi Lozinku:</label>
                            <input type="password" id="confirm-password" name="confirm-password" placeholder="Potvrdi svoju lozinku" required>
                        </div>
                        <input type="submit" value="Registriraj se">
                        
                    </form>
               
                    <h2 ></h2>
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


