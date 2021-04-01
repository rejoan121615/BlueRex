'use strict';

const resNavBtn = document.querySelector('.res_nav');
const NavBar = document.querySelector('#navbar');

let condition = 1;


function changeImg() {
    if (condition) {
        resNavBtn.style.backgroundImage = 'url(\'../img/close.png\')';
        NavBar.classList.add('active');
        condition--;
    } else {
        resNavBtn.style.backgroundImage = "url('\../img/menu.png\')";
        NavBar.classList.remove('active');
        condition++;
    }
}


resNavBtn.addEventListener('click', changeImg)