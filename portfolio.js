const header= document.getElementById("header");
const hamburger= document.querySelector("#header .nav-list .hamburger");
const mobile_menu= document.querySelector(" #header .nav-list ul");

const faders= document.querySelector('#services ');
const sectionOne = document.getElementById('main');

const sectionOneOptions = {
    rootMargin: "0px 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
           header.classList.add("nav-scrolled"); 
        
        }
        else {
            header.classList.remove("nav-scrolled");
        }
    });
}, sectionOneOptions);
sectionOneObserver.observe(sectionOne);
// triggering the hamburger menu to open the NavBar
hamburger.addEventListener('click', () => { 
hamburger.classList.toggle('active');
mobile_menu.classList.toggle('active');
menu_list.classList.toggle('active');
});

