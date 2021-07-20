window.onload = function() {  
  let star0 = document.querySelector("#star0");
  let star1 = document.querySelector("#star1");
  let star2 = document.querySelector("#star2");
  let star3 = document.querySelector("#star3");
  let star4 = document.querySelector("#star4");
  let star5 = document.querySelector("#star5");
  let star6 = document.querySelector("#star6");
  let star7 = document.querySelector("#star7");
  let star8 = document.querySelector("#star8");
  let star9 = document.querySelector("#star9");
  let halo0 = document.querySelector("#halo0");
  let halo1 = document.querySelector("#halo1");
  let halo2 = document.querySelector("#halo2");
  let halo3 = document.querySelector("#halo3");
  let halo4 = document.querySelector("#halo4");
  let halo5 = document.querySelector("#halo5");
  let halo6 = document.querySelector("#halo6");
  let halo7 = document.querySelector("#halo7");
  let halo8 = document.querySelector("#halo8");
  let halo9 = document.querySelector("#halo9");
/*
  let screen = document.getElementById("screen");
  screen.style.animation= "dark ease-out 4s forwards";
  screen.addEventListener("mousedown", function(e) {
    document.getElementById('screen').remove();
  });*/
//coordinates
  let x = 0;
  let y = 0;  
  let mouseCursor = document.querySelector("#cuss");
  window.addEventListener("mousemove", function(e) {
    y=e.pageY+"px";
    x=e.pageX+"px";
    mouseCursor.style.top=y;
    mouseCursor.style.left=x;
  });

  window.addEventListener("mousedown", () => {
    mouseCursor.classList.add("shine");
  });
  
  window.addEventListener("mouseup", () => {
    mouseCursor.classList.remove("shine");
  });

  function mousemov(s,h) {
    var t=Date.now();
    s.style.top=y;
    s.style.left=x;
    h.style.top=y;  
    h.style.left=x;
   
    s.style.animation="none";
    h.style.animation="none";
    window.requestAnimationFrame(()=>{
      s.style.animation="starFade 1s linear"; 
      h.style.animation="haloFade 1s linear"; 
    });
  }

// the comic effects
   setInterval(function() {mousemov(star0,halo0);}, 1000);
   setTimeout(() => {
     setInterval(function() {mousemov(star1,halo1);}, 1000);
   },100);
  setTimeout(() => {
     setInterval(function() {mousemov(star2,halo2);}, 1000);
   },200);
  setTimeout(() => {
     setInterval(function() {mousemov(star3,halo3);}, 1000);
   },300);
  setTimeout(() => {
     setInterval(function() {mousemov(star4,halo4);}, 1000);
   },400);
  setTimeout(() => {
     setInterval(function() {mousemov(star5,halo5);}, 1000);
   },500);
  setTimeout(() => {
     setInterval(function() {mousemov(star6,halo6);}, 1000);
   },600);
  setTimeout(() => {
     setInterval(function() {mousemov(star7,halo7);}, 1000);
   },700);
  setTimeout(() => {
     setInterval(function() {mousemov(star8,halo8);}, 1000);
   },800);
  setTimeout(() => {
     setInterval(function() {mousemov(star9,halo9);}, 1000);
   },900);
  //the music player
    let moonPic = document.querySelector("#moon");
    let still = true;
    moonPic.classList.add("circle");
    moonPic.style.animationPlayState = "paused";
    moonPic.addEventListener("click", () => {
    if(still) {
      moonPic.style.animationPlayState = "running";
      document.querySelector("#music").play();
    }else{
      moonPic.style.animationPlayState = "paused";
      document.querySelector("#music").pause();
    }
    still = !still;
  });
}
