
    //scroll per la navbar JQuery
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.navbar').addClass('changeColor')
            }
            if ($(this).scrollTop() < 50) {
                $('.navbar').removeClass('changeColor')
            }
        });
    });

    //burger menu

    const navSlide = ()=>{
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-ul');
        const navLinks = document.querySelectorAll('.nav-ul li')

        burger.addEventListener('click', ()=>{
            //toggle
            nav.classList.toggle('navbar-actve');

                    //animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');


        });


    }

    navSlide();


// const hamburger = document.getElementById('hamburger');
// const navUL = document.getElementById('nav-ul');

// hamburger.addEventListener('click', ()=>{
//     navUL.classList.toggle('show');
// });

// $('span').on('click', function() {
//     $('span').removeClass('active');
//     $(this).addClass('active');
//  });