function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navlinks");
    const navli = document.querySelectorAll('.navlinks li');

    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active')

        // Animate Links

        navli.forEach(function(link, index) {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navlink-fade 0.5s ease forwards ${index/7+0.5}s`
            }
        });
    });
}

var preloader = document.getElementById("loading");

function preLoaderFunction() {
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 2000);
}

navSlide()