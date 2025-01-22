const navBtn=document.querySelector(".nav__btn")
const navMenu=document.querySelector(".nav_menu")
const menulinks=document.querySelectorAll(".menu_link")
const mobileMenus=document.querySelectorAll(".mobile_menu_link")
let navopen=false
navBtn.addEventListener("click",function () {
    if(navopen){
        navBtn.classList.remove("nav__btn_open")
        navMenu.classList.remove("nav_menu_effect")
        navopen=false
    }
    else{navBtn.classList.add("nav__btn_open")
        navMenu.classList.add("nav_menu_effect")
        navopen=true
    }
})

menulinks.forEach(function (menulink) {
    menulink.addEventListener("click",function () {
        menulinks.forEach(function (link) {
            link.classList.remove("menu_link__acttive")
            
        })
        menulink.classList.add("menu_link__acttive")
    })
    
})

