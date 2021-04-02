'use strict';

const resNavBtn = document.querySelector('.res_nav');
const NavBar = document.querySelector('.navbar');

let condition = 1;


function changeImg() {
    if (condition) {
        resNavBtn.style.backgroundImage = 'url(\'./img/close.png\')';
        NavBar.classList.add('active');
        condition--;
    } else {
        resNavBtn.style.backgroundImage = "url('\./img/menu.png\')";
        NavBar.classList.remove('active');
        condition++;
    }
}


resNavBtn.addEventListener('click', changeImg)



// dream big section 
const dreamBigData = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are ",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney",
];

// select btn 

const dreamBtnList = document.querySelectorAll(
    "#platform_select #select_container li"
);
// select para tag 
const dreamBigPara = document.querySelector('#platform_select .para');

addEventAllChild(dreamBtnList, 'select_active');


// work list 
const workBtnList = document.querySelectorAll(
    "#work_list #select_container li"
);
addEventAllChild(workBtnList, 'select_active');


// globally used function 
function removeClass(list, className) {
    list.forEach((item, index) => {
        item.classList.remove(`${className}`);
    });
}

function addEventAllChild(list, className) {
    list.forEach((item, index) => {
        item.addEventListener('click', () => {
            removeClass(list, className);
            item.classList.add(`${className}`)
        })
    })
}