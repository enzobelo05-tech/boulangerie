let nbPanier = 0;
let number;
var nb = 1;
var hamburgerMenu = false;
let btnHamburger;
let navHamburger;
let hamburgerContainer;
let inputPanier;

document.addEventListener("DOMContentLoaded", function () {
  // Initialiser toutes les variables
  number = document.querySelector(".quantity-number");
  btnHamburger = document.querySelector(".btn-hamburger");
  navHamburger = document.querySelector(".nav-hamburger");
  hamburgerContainer = document.querySelector(".hamburger");
  inputPanier = document.querySelector('input[class="panierInput"]');

  if (inputPanier) {
    inputPanier.value = 0;
  }

  // ========== CARROUSEL ==========
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  if (slides.length > 0) {
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.opacity = "0";
        slide.style.zIndex = "0";
        if (i === index) {
          slide.style.opacity = "1";
          slide.style.zIndex = "1";
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    showSlide(0);
    setInterval(nextSlide, 5000);
  }
  // ========== FIN CARROUSEL ==========

  // Thumbnails
  document.querySelectorAll(".petite-thumb")?.forEach((img) => {
    img.addEventListener("click", function () {
      document.querySelectorAll(".petite-thumb").forEach((item) => {
        item.classList.remove("active");
      });
      this.classList.add("active");

      document.querySelectorAll(".grande-image").forEach((imgGrande) => {
        if (imgGrande.id == this.id) {
          imgGrande.classList.add("activate");
        } else {
          imgGrande.classList.remove("activate");
        }
      });
    });
  });

  // Cases
  document.querySelectorAll(".case")?.forEach((element) => {
    element.addEventListener("click", function () {
      document.querySelectorAll(".case").forEach((item) => {
        item.classList.remove("selected");
      });
      this.classList.add("selected");
    });
  });

  // Quantity minus
  document
    .querySelector(".quantity-minus")
    ?.addEventListener("click", function quantityMinus() {
      if (nb > 1) {
        nb--;
        number.textContent = nb;
      }
    });

  // Quantity plus
  document
    .querySelector(".quantity-plus")
    ?.addEventListener("click", function quantityPlus() {
      nb++;
      number.textContent = nb;
    });

  document
    .querySelector(".add-to-cart")
    ?.addEventListener("click", function addCart() {
      let bulle = document.querySelector(".panierNb");
      bulle.style.display = "flex";

      nbPanier += nb;
      bulle.textContent = nbPanier;
      inputPanier.value = nbPanier;
      console.log("valeur de panier :" + inputPanier.value);
    });

  // Hamburger menu
  document
    .querySelector(".btn-hamburger")
    ?.addEventListener("click", function () {
      if (!hamburgerMenu) {
        document.querySelector(".nav-hamburger").style.display = "flex";
        document.querySelectorAll(".span").forEach((item) => {
          document.querySelector(".btn-hamburger").style.marginLeft = "240px";
          item.style.backgroundColor = "black";
        });
        hamburgerMenu = true;
        document.body.style.overflow = "hidden";
        document.querySelector(".overlay")?.classList.add("activeBlur");
      } else {
        document.querySelector(".nav-hamburger").style.display = "none";
        document.querySelectorAll(".span").forEach((item) => {
          document.querySelector(".btn-hamburger").style.marginLeft = "0px";
          item.style.backgroundColor = "white";
        });
        hamburgerMenu = false;
        document.body.style.overflow = "";
        document.querySelector(".overlay")?.classList.remove("activeBlur");
      }
    });

  // Click outside hamburger
  document.addEventListener("click", function (e) {
    if (
      hamburgerMenu &&
      navHamburger &&
      !navHamburger.contains(e.target) &&
      hamburgerContainer &&
      !hamburgerContainer.contains(e.target)
    ) {
      navHamburger.style.display = "none";
      document.querySelectorAll(".span").forEach((item) => {
        btnHamburger.style.marginLeft = "0px";
        item.style.backgroundColor = "white";
      });
      hamburgerMenu = false;
      document.body.style.overflow = "";
      document.querySelector(".overlay")?.classList.remove("activeBlur");
    }
  });
});
