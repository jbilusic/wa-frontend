<template>
    <main>
        <section class = "main-container-left">
            <h2 id="mainTitle">{{ vijesti }}</h2>
            <div class="holder">
                <div class="leftEmpty"></div>
                <div class="container-top-left">
                    <div class="news-log">
                        <div class="weather-forecast">
                            <h2 class="date">Subota,  3. Travanj</h2>
                            <h2 class="time">{{ time }}</h2>
                            </div>
                        <h3>{{ leftTitle }}</h3>
                        <div class="news-item" v-for="(content, index) in leftContent" :key="index">
                            <div class="ref">
                            <span class="topListNum">{{ index+=1 }}</span>
                            <p class="topListParag">{{ content }}</p>
                            </div>
                        </div>
                        </div>
                </div>
                <div class = "container-top-middle">
                    <MainContent />
                    <ContentBottom />
                    <ContentBottom />
                    <ContentBottom />
              
                   
                    <div class="wallpaper-divider"></div>
                    <button id="myButton">Učitaj još</button>
                </div>
                <div class="rightEmpty"></div>
                <div class="container-top-right">
                    <div class="news-log">
                        <div class = "social-icons">
                            <ul>
                                <li>
                                    <a href= "#"><i class = "fab fa-facebook fa-2x"></i></a>
                                    <a href= "#"><i class = "fab fa-twitter fa-2x"></i></a>
                                </li>
                                <li>
                                    <a href= "#"><i class = "fab fa-instagram fa-2x"></i></a>
                                    <a href= "#"><i class = "fab fa-youtube fa-2x"></i></a>
                                </li>
                            </ul>
                        </div>
                            <h3>{{ rightTitle }}</h3>
                            <div class="news-item"  v-for="(content, index) in rightContent" :key="index">
                            <div class="ref">
                                <span class="topListNum">{{ index+=1 }}</span>
                                <p class="topListParag">{{ content}}</p>
                            </div>
                            </div>
                        </div>
                        
                </div>
            </div>
            
        </section>
    </main>
</template>

<script>
import ContentBottom from './contentBottom.vue';
import MainContent from './MainContent.vue';


 

let timeElement;

  /*   updateTime(); // Call the function to set the initial time

    setInterval(updateTime, 60000); // Update the time every minute
        */
    function updateTime() {
    const now = new Date();

    timeElement = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    console.log(timeElement);
    }


    export default{
        components:{
            ContentBottom,
            MainContent
        },
    data() {
        return {
            vijesti: "VIJESTI",
            leftTitle: "Najčitanije",
            leftContent: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Etiam vel augue non velit euismod laoreet.",
                "Proin sodales sapien ac massa molestie imperdiet.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ],
            rightTitle: "Najnovije",
            rightContent: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Etiam vel augue non velit euismod laoreet.",
                "Proin sodales sapien ac massa molestie imperdiet.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ],
            time: "12:30"
        };
    } /* ,
    methods:{
    Msg:function(){
    return '$' + this.title
    }} */,
    components: { ContentBottom, MainContent }
}
</script>


