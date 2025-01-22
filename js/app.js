let Btn = document.querySelector('.menu')
let menuBtn = document.querySelector('.menu-btn')
let sideNav = document.querySelector('.side-nav')


sideNav.style.right = '-200px'

menuBtn.addEventListener('click',()=>{
    if(sideNav.style.right == '-200px'){
        sideNav.style.right = '0'
        Btn.src = 'img/closebtn.png';
    }else{
        sideNav.style.right = '-200px'
        Btn.src = 'img/menu.png';
    }
})

let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 700,
	speedAsDuration: true
});