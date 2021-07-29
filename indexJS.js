var time= new Date();
var daytime = time.getHours();
var isDaytime = 8<=daytime && daytime <= 20;
var toggle=true;
var swt=document.getElementById("switch");
if(!isDaytime) {
  nightMode();
  toggle=false;//change triggered
}
swt.addEventListener("click", () => {
	if(toggle){ //no change has occurred
    nightMode();
  }else{ //already night mode
    dayMode();
  }
  toggle=!toggle;
});
function nightMode() {
  swt.classList.remove("sun");
  swt.classList.add("moon");
  document.querySelector("#header").classList.remove("dayheader");
  document.querySelector("#header").classList.add("moonheader");
  document.querySelector("#main").style.background="rgb(30, 30, 20)";
  document.body.style.color="rgb(190, 190, 185)";
      var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = "rgb(190, 190, 185)";  
        }
    }  
}
function dayMode() {
  swt.classList.remove("moon");
  swt.classList.add("sun");
  document.querySelector("#header").classList.remove("moonheader");
  document.querySelector("#header").classList.add("dayheader");
  document.querySelector("#main").style.background="rgb(250, 220, 110)";
  document.body.style.color="black";
      var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = "blue";  
        }
    }  
}
