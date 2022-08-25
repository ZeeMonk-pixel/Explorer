




var hamburger = document.querySelector('.hamburger-menu')
var mobilelinks = document.querySelector('.mobile-menu-linkholder')
var backdrop = document.querySelector('.backdrop')


function Addclass() {
    hamburger.classList.toggle('show')
    mobilelinks.classList.toggle('showlinks')
    backdrop.classList.toggle('showlinks')
}