function addEventOnElements(elements, eventType, callback) {
  elements.forEach(element => element.addEventListener(eventType, callback));
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

function toggleNavbar() {
  navbar.classList.toggle("config");
  overlay.classList.toggle("config");
  document.body.classList.toggle("nav-config");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

function hideHeader() {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScrollPos = window.scrollY;
}

function handleScroll() {
  if (window.scrollY >= 50) {
    header.classList.add("config");
    hideHeader();
  } else {
    header.classList.remove("config");
  }
}

window.addEventListener("scroll", handleScroll);


const botonVerMas = document.querySelector('.boton-ver-mas');
const divContenido = document.querySelector('.contmenu');
const divContenido2 = document.querySelector('.contmenu2');

botonVerMas.addEventListener('click', () => {
  divContenido.classList.remove('contenido');
  divContenido2.classList.remove('contenido');
  botonVerMas.classList.add('boton-none');
});



