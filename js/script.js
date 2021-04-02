'use strict';

const resNavBtn = document.querySelector('.res_nav');
const NavBar = document.querySelector('.navbar');

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



// ------------------------------------------------------------ 
            // dream big 
// ---------------------------------------------------------
const dreamBtnList = document.querySelectorAll(
    "#platform_select #select_container li"
);



dreamBtnList.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        removeClass(dreamBtnList)
        item.classList.add("select_active");
    })
})

// -----------------------------------
// work list 
// -------------------------------------

const workBtnList = document.querySelectorAll(
    "#work_list #platform_select #select_container li"
);

console.log(workBtnList)


// ----------------------------------------------------
// globally used function 
// ----------------------------------------------------

function removeClass(list) {
    list.forEach((item, index) => {
        item.classList.remove("select_active");
    });
}
