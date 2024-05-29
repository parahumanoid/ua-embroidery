let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('menu-active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})