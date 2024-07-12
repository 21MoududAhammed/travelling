const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".side_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList("active");
    navMenu.classList("active");
  })
);

var toggol_bar = document.querySelector(".toggol_bar");
var subMenu = document.querySelector(".sub_menu");

toggol_bar.addEventListener("click", () => {
  toggol_bar.classList.toggle("active");
  subMenu.classList.toggle("active");
});

// document.querySelectorAll(".sub_menu").forEach(n => n.addEventListener("click", () =>{
//   toggol_bar.classList.remove("active");
//   subMenu.classList.remove("active");
// }));

var toggle_bar = document.querySelector(".toggle_bar");
var sub_menu2 = document.querySelector(".sub_menu2");

toggle_bar.addEventListener("click", () => {
  toggle_bar.classList.toggle("active");
  sub_menu2.classList.toggle("active");
});

document.querySelectorAll(".sub_menu2").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar.classList("active");
    sub_menu2.classList("active");
  })
);

var toggle_bar3 = document.querySelector(".toggle_bar3");
var sub_menu3 = document.querySelector(".sub_menu3");

toggle_bar3.addEventListener("click", () => {
  toggle_bar3.classList.toggle("active");
  sub_menu3.classList.toggle("active");
});

document.querySelectorAll(".sub_menu3").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar3.classList("active");
    sub_menu3.classList("active");
  })
);

var toggle_bar4 = document.querySelector(".toggle_bar4");
var sub_menu4 = document.querySelector(".sub_menu4");

toggle_bar4.addEventListener("click", () => {
  toggle_bar4.classList.toggle("active");
  sub_menu4.classList.toggle("active");
});

document.querySelectorAll(".sub_menu4").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar4.classList("active");
    sub_menu4.classList("active");
  })
);

var toggle_bar5 = document.querySelector(".toggle_bar5");
var sub_menu5 = document.querySelector(".sub_menu5");

toggle_bar5.addEventListener("click", () => {
  toggle_bar5.classList.toggle("active");
  sub_menu5.classList.toggle("active");
});

document.querySelectorAll(".sub_menu5").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar5.classList("active");
    sub_menu5.classList("active");
  })
);

var toggle_bar6 = document.querySelector(".toggle_bar6");
var sub_menu6 = document.querySelector(".sub_menu6");

toggle_bar6.addEventListener("click", () => {
  toggle_bar6.classList.toggle("active");
  sub_menu6.classList.toggle("active");
});

document.querySelectorAll(".sub_menu6").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar6.classList("active");
    sub_menu6.classList("active");
  })
);

var toggle_bar7 = document.querySelector(".toggle_bar7");
var sub_menu7 = document.querySelector(".sub_menu7");

toggle_bar7.addEventListener("click", () => {
  toggle_bar7.classList.toggle("active");
  sub_menu7.classList.toggle("active");
});

document.querySelectorAll(".sub_menu7").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar7.classList("active");
    sub_menu7.classList("active");
  })
);

var toggle_bar8 = document.querySelector(".toggle_bar8");
var sub_menu8 = document.querySelector(".sub_menu8");

toggle_bar8.addEventListener("click", () => {
  toggle_bar8.classList.toggle("active");
  sub_menu8.classList.toggle("active");
});

document.querySelectorAll(".sub_menu8").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar8.classList("active");
    sub_menu8.classList("active");
  })
);

var toggle_bar9 = document.querySelector(".toggle_bar9");
var sub_menu9 = document.querySelector(".sub_menu9");

toggle_bar9.addEventListener("click", () => {
  toggle_bar9.classList.toggle("active");
  sub_menu9.classList.toggle("active");
});

document.querySelectorAll(".sub_menu9").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar9.classList("active");
    sub_menu9.classList("active");
  })
);

var toggle_bar10 = document.querySelector(".toggle_bar10");
var sub_menu10 = document.querySelector(".sub_menu10");

toggle_bar10.addEventListener("click", () => {
  toggle_bar10.classList.toggle("active");
  sub_menu10.classList.toggle("active");
});

document.querySelectorAll(".sub_menu10").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar10.classList("active");
    sub_menu10.classList("active");
  })
);

var toggle_bar11 = document.querySelector(".toggle_bar11");
var sub_menu11 = document.querySelector(".sub_menu11");

toggle_bar11.addEventListener("click", () => {
  toggle_bar11.classList.toggle("active");
  sub_menu11.classList.toggle("active");
});

document.querySelectorAll(".sub_menu11").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar11.classList("active");
    sub_menu11.classList("active");
  })
);

var toggle_bar12 = document.querySelector(".toggle_bar12");
var sub_menu12 = document.querySelector(".sub_menu12");

toggle_bar12.addEventListener("click", () => {
  toggle_bar12.classList.toggle("active");
  sub_menu12.classList.toggle("active");
});

document.querySelectorAll(".sub_menu12").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar12.classList("active");
    sub_menu12.classList("active");
  })
);

var toggle_bar13 = document.querySelector(".toggle_bar13");
var sub_menu13 = document.querySelector(".sub_menu13");

toggle_bar13.addEventListener("click", () => {
  toggle_bar13.classList.toggle("active");
  sub_menu13.classList.toggle("active");
});

document.querySelectorAll(".sub_menu13").forEach((n) =>
  n.addEventListener("click", () => {
    toggle_bar13.classList("active");
    sub_menu13.classList("active");
  })
);

document.getElementById("appButton").addEventListener("click", function () {
  document.querySelector(".approve").style.display = "block";
});

document.getElementById("item").addEventListener("click", function () {
  document.querySelector(".ap_content").style.display = "block";
});

document.querySelector(".colse").addEventListener("click", function () {
  document.querySelector(".approve").style.display = "none";
});

document.querySelector(".colse1").addEventListener("click", function () {
  document.querySelector(".approve").style.display = "none";
});

document.getElementById("appButton2").addEventListener("click", function () {
  document.querySelector(".approve2").style.display = "block";
});

document.getElementById("item2").addEventListener("click", function () {
  document.querySelector(".ap_content2").style.display = "block";
});

document.querySelector(".colse2").addEventListener("click", function () {
  document.querySelector(".approve2").style.display = "none";
});

document.querySelector(".colse12").addEventListener("click", function () {
  document.querySelector(".approve2").style.display = "none";
});

document.getElementById("Image").addEventListener("click", function () {
  document.querySelector(".image_ovarlye2").style.left = "0px";
});

document.querySelector(".colse_image").addEventListener("click", function () {
  document.querySelector(".image_ovarlye2").style.left = "-10000px";
});

document.getElementById("Image2").addEventListener("click", function () {
  document.querySelector(".image_ovarlye3").style.left = "0px";
});

document.querySelector(".colse_image2").addEventListener("click", function () {
  document.querySelector(".image_ovarlye3").style.left = "-10000px";
});

document.getElementById("Image3").addEventListener("click", function () {
  document.querySelector(".image_ovarlye4").style.left = "0px";
});

document.getElementById("Image3.1").addEventListener("click", function () {
  document.querySelector(".image_ovarlye4").style.left = "0px";
});

document.getElementById("Image3.2").addEventListener("click", function () {
  document.querySelector(".image_ovarlye4").style.left = "0px";
});

document.getElementById("Image3.3").addEventListener("click", function () {
  document.querySelector(".image_ovarlye4").style.left = "0px";
});

document.getElementById("Image3.4").addEventListener("click", function () {
  document.querySelector(".image_ovarlye4").style.left = "0px";
});

document.querySelector(".colse_image3").addEventListener("click", function () {
  document.querySelector(".image_ovarlye4").style.left = "-10000px";
});

document.getElementById("Image4").addEventListener("click", function () {
  document.querySelector(".image_ovarlye5").style.left = "0px";
});

document.getElementById("Image4.1").addEventListener("click", function () {
  document.querySelector(".image_ovarlye5").style.left = "0px";
});

document.getElementById("Image4.2").addEventListener("click", function () {
  document.querySelector(".image_ovarlye5").style.left = "0px";
});

document.getElementById("Image4.3").addEventListener("click", function () {
  document.querySelector(".image_ovarlye5").style.left = "0px";
});

document.getElementById("Image4.4").addEventListener("click", function () {
  document.querySelector(".image_ovarlye5").style.left = "0px";
});

document.querySelector(".colse_image4").addEventListener("click", function () {
  document.querySelector(".image_ovarlye5").style.left = "-10000px";
});

document.getElementById("Image5").addEventListener("click", function () {
  document.querySelector(".image_ovarlye6").style.left = "0px";
});

document.querySelector(".colse_image5").addEventListener("click", function () {
  document.querySelector(".image_ovarlye6").style.left = "-10000px";
});

document.getElementById("Image6").addEventListener("click", function () {
  document.querySelector(".image_ovarlye7").style.left = "0px";
});

document.getElementById("Image6.1").addEventListener("click", function () {
  document.querySelector(".image_ovarlye7").style.left = "0px";
});

document.getElementById("Image6.2").addEventListener("click", function () {
  document.querySelector(".image_ovarlye7").style.left = "0px";
});

document.getElementById("Image6.3").addEventListener("click", function () {
  document.querySelector(".image_ovarlye7").style.left = "0px";
});

document.getElementById("Image6.4").addEventListener("click", function () {
  document.querySelector(".image_ovarlye7").style.left = "0px";
});

document.querySelector(".colse_image6").addEventListener("click", function () {
  document.querySelector(".image_ovarlye7").style.left = "-10000px";
});

document.getElementById("Image7").addEventListener("click", function () {
  document.querySelector(".image_ovarlye8").style.left = "0px";
});

document.getElementById("Image7.1").addEventListener("click", function () {
  document.querySelector(".image_ovarlye8").style.left = "0px";
});

document.getElementById("Image7.2").addEventListener("click", function () {
  document.querySelector(".image_ovarlye8").style.left = "0px";
});

document.getElementById("Image7.3").addEventListener("click", function () {
  document.querySelector(".image_ovarlye8").style.left = "0px";
});

document.getElementById("Image7.4").addEventListener("click", function () {
  document.querySelector(".image_ovarlye8").style.left = "0px";
});

document.querySelector(".colse_image7").addEventListener("click", function () {
  document.querySelector(".image_ovarlye8").style.left = "-10000px";
});

document.getElementById("Image8").addEventListener("click", function () {
  document.querySelector(".image_ovarlye9").style.left = "0px";
});

document.getElementById("Image8.1").addEventListener("click", function () {
  document.querySelector(".image_ovarlye9").style.left = "0px";
});

document.getElementById("Image8.2").addEventListener("click", function () {
  document.querySelector(".image_ovarlye9").style.left = "0px";
});

document.getElementById("Image8.3").addEventListener("click", function () {
  document.querySelector(".image_ovarlye9").style.left = "0px";
});

document.getElementById("Image8.4").addEventListener("click", function () {
  document.querySelector(".image_ovarlye9").style.left = "0px";
});

document.querySelector(".colse_image8").addEventListener("click", function () {
  document.querySelector(".image_ovarlye9").style.left = "-10000px";
});

document.getElementById("Image9").addEventListener("click", function () {
  document.querySelector(".image_ovarlye10").style.left = "0px";
});

document.getElementById("Image9.1").addEventListener("click", function () {
  document.querySelector(".image_ovarlye10").style.left = "0px";
});

document.getElementById("Image9.2").addEventListener("click", function () {
  document.querySelector(".image_ovarlye10").style.left = "0px";
});

document.getElementById("Image9.3").addEventListener("click", function () {
  document.querySelector(".image_ovarlye10").style.left = "0px";
});

document.getElementById("Image9.4").addEventListener("click", function () {
  document.querySelector(".image_ovarlye10").style.left = "0px";
});

document.querySelector(".colse_image9").addEventListener("click", function () {
  document.querySelector(".image_ovarlye10").style.left = "-10000px";
});

document.getElementById("Image10").addEventListener("click", function () {
  document.querySelector(".image_ovarlye11").style.left = "0px";
});

document.querySelector(".colse_image10").addEventListener("click", function () {
  document.querySelector(".image_ovarlye11").style.left = "-10000px";
});

var menu_icon = document.querySelector(".menu_icon");
var side_menu = document.querySelector(".side_menu");

menu_icon.addEventListener("click", () => {
  menu_icon.classList.toggle("active");
  side_menu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach((n) =>
  n.addEventListener("click", () => {
    menu_icon.classList("active");
    side_menu.classList("active");
  })
);

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});

// document.querySelector(".colse_im").addEventListener("click", function(){
//   document.querySelector(".colse_ima").style.background = "red";
// });

var devis1 = document.querySelector(".devis1");
var devis = document.querySelector(".devis");

devis1.addEventListener("click", () => {
  devis1.classList("active");
  devis.classList("active");
});

document.querySelectorAll(".devis").forEach((n) =>
  n.addEventListener("click", () => {
    devis1.classList("active");
    devis.classList("active");
  })
);
