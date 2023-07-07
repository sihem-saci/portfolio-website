const hamburger= document.querySelector("#header .nav-list .hamburger");

const mobile_menu= document.querySelector(" #header .nav-list ul");


const header= document.querySelector(" #header");

const faders= document.querySelector('#services ');


hamburger.addEventListener('click', () => { 
hamburger.classList.toggle('active');
mobile_menu.classList.toggle('active');
menu_list.classList.toggle('active');
});

