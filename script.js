let myMenu = document.getElementById('menu');
let close_btn = document.getElementById('close');
let navi = document.getElementById('navbar');
const welcome_modal = document.getElementById("modal");

function menu() {
    myMenu.style.display = "none";
    navi.style.display = "block";
}

function menu_exit() {
    myMenu.style.display = "block";
    navi.style.display = "none";
}
function modal_display(){
    welcome_modal.style.display = "flex";
}
setTimeout(modal_display, 1500);
function exit() {
    welcome_modal.style.display = "none";
}