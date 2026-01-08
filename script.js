"use strict";

let img1 = localStorage.setItem("img", "value");
let img2 = localStorage.setItem("img", "value");
let img3 = localStorage.setItem("img", "value");

function changeImage1() {

    document.getElementById("main-img"); changeImage1.localStorage.getitem("img"); src = "/Images/img1.jpg";
}
function changeImage2() {
    document.getElementById("main-img").src = "/Images/img2.jpg";
}
function changeImage3() {
    document.getElementById("main-img").src = "/Images/img3.jpg";
}
function resetImage() {
    document.getElementById("main-img").src = "/Images/main-img.jpg";
}
