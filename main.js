document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase'); 
ScrollReveal().reveal('.news-cards', {delay:1000});
ScrollReveal().reveal('.cards-banners-one', {delay:1000});
ScrollReveal().reveal('.news-banners-two', {delay:1000}); 