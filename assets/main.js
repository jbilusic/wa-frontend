updateTime(); // Call the function to set the initial time

setInterval(updateTime, 60000); // Update the time every minute
        
 function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById("time");
    timeElement.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
const btnHam = document.querySelector('.ham-btn');
        const btnTimes = document.querySelector('.times-btn');
        const navBar = document.getElementById('nav-bar');
        
        btnHam.addEventListener('click', function(){
            if(btnHam.className !== ""){
                btnHam.style.display = "none";
                btnTimes.style.display = "block";
                navBar.classList.add("show-nav");
            }
        })
        
        btnTimes.addEventListener('click', function(){
            if(btnHam.className !== ""){
                this.style.display = "none";
                btnHam.style.display = "block";
                navBar.classList.remove("show-nav");
            }
        })