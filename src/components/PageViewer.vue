<template>
    <main>
        <section class = "main-container-left">
            <h2 id="mainTitle">{{ vijesti }}</h2>
            <div class="holder">
                <div class="leftEmpty"></div>
                <div class="container-top-left">
                    <div class="news-log">
                        <div class="weather-forecast">
                            <h2 class="date">{{ day }},  {{ date }}</h2>
                            <h2 class="time">{{ time }}</h2>
                            </div>
                        <h3 style="font-size: 14px;">{{ leftTitle }}</h3>
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
                    <!-- <div class="wallpaper-divider"></div>
                    <button id="myButton" @click="addArticles">Učitaj još</button> -->
                </div>
                <div class="rightEmpty"></div>
                <div class="container-top-right">
                    <div class="news-log">
                        <div class = "social-icons">
                            <ul>
                                <li>
                                    <a href= "#"><i class = "fab fa-facebook fa-1x"></i></a>
                                    <a href= "#"><i class = "fab fa-twitter fa-1x"></i></a>
                                </li>
                                <li>
                                    <a href= "#"><i class = "fab fa-instagram fa-1x"></i></a>
                                    <a href= "#"><i class = "fab fa-youtube fa-1x"></i></a>
                                </li>
                            </ul>
                        </div>
                            <h3 style="font-size: 14px;">{{ rightTitle }}</h3>
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
const dayNames = ["Ponedjeljak", "Utorak", "Srijeda", "Cetvrtak", "Petak", "Subota", "Nedjelja" ];
const monthNames = ["Sječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj",
  "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
];
    export default{

        components:{
            ContentBottom,
            MainContent
        },
        created() {
            this.updateTime(); // Call the function to set the initial time

            setInterval(this.updateTime, 30000); // Update the time every half minute
        },
        methods: {
            updateTime() {
            const now = new Date();
            this.day = dayNames[now.getDay()-1];
            this.date= now.getUTCDate() + ". " + monthNames[(now.getUTCMonth())];
            this.time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            }
        },
        data() {
            return {
                vijesti: "VIJESTI",
                leftTitle: "Najčitanije",
                leftContent: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Etiam vel augue non velit euismod laoreet.",
                    "Proin sodales sapien ac massa molestie imperdiet."
                    
                ],
                rightTitle: "Najnovije",
                rightContent: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Etiam vel augue non velit euismod laoreet.",
                    "Proin sodales sapien ac massa molestie imperdiet."
                
                ],
                time: "12:30",
                day:"Subota",
                date:"4. Travanj"
            };
        },
    components: { ContentBottom, MainContent }
}
</script>


