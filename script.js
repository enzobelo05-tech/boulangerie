let nbPanier = 0;
let number = document.querySelector('.quantity-number');
var nb = 1;
var hamburgerMenu = false;
const btnHamburger = document.querySelector('.btn-hamburger');
const navHamburger = document.querySelector('.nav-hamburger');
const hamburgerContainer = document.querySelector('.hamburger');

// ========== CARROUSEL ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = '0';
        slide.style.zIndex = '0';

        if (i === index) {
            slide.style.opacity = '1';
            slide.style.zIndex = '1';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Initialiser le carrousel
if (slides.length > 0) {
    showSlide(0);

    // Changement automatique toutes les 5 secondes
    setInterval(nextSlide, 5000);
}

// ========== FIN CARROUSEL ==========

document.querySelectorAll('.petite-thumb')?.forEach((img) => {
    img.addEventListener('click', function () {
        document.querySelectorAll('.petite-thumb').forEach((item) => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        document.querySelectorAll('.grande-image').forEach((imgGrande) => {
            if (imgGrande.id == this.id) {
                imgGrande.classList.add('activate');
            } else {
                imgGrande.classList.remove('activate');
            }
        });
    });
});

document.querySelectorAll('.case')?.forEach((element) => {
    element.addEventListener('click', function () {
        document.querySelectorAll('.case').forEach((item) => {
            item.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});

document.querySelector('.quantity-minus')?.addEventListener('click', function quantityMinus() {
    if (nb > 1) {
        nb--;
        number.textContent = nb;
    }
});

document.querySelector('.quantity-plus')?.addEventListener('click', function quantityPlus() {
    nb++;
    number.textContent = nb;
});

document.querySelector('.add-to-cart')?.addEventListener('click', function addCart() {
    let bulle = document.querySelector('.panierNb');
    bulle.style.display = 'flex';
    nbPanier += nb;
    bulle.textContent = nbPanier;
});

document.querySelector('.btn-hamburger').addEventListener('click', function () {
    if (!hamburgerMenu) {
        document.querySelector('.nav-hamburger').style.display = 'flex';
        document.querySelectorAll('.span').forEach((item) => {
            document.querySelector('.btn-hamburger').style.marginLeft = '240px';
            item.style.backgroundColor = 'black';
        });
        hamburgerMenu = true;
        document.body.style.overflow = 'hidden';
        document.querySelector('.overlay').classList.add('activeBlur');
    } else {
        document.querySelector('.nav-hamburger').style.display = 'none';
        document.querySelectorAll('.span').forEach((item) => {
            document.querySelector('.btn-hamburger').style.marginLeft = '0px';
            item.style.backgroundColor = 'white';
        });
        hamburgerMenu = false;
        document.body.style.overflow = '';
        document.querySelector('.overlay').classList.remove('activeBlur');
    }
});

document.addEventListener('click', function (e) {
    if (hamburgerMenu && !navHamburger.contains(e.target) && !hamburgerContainer.contains(e.target)) {
        navHamburger.style.display = 'none';
        document.querySelectorAll('.span').forEach((item) => {
            btnHamburger.style.marginLeft = '0px';
            item.style.backgroundColor = 'white';
        });
        hamburgerMenu = false;
        document.body.style.overflow = '';
        document.querySelector('.overlay').classList.remove('activeBlur');
    }
});
