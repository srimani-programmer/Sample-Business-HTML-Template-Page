"use strict";

const hamburgerMenu = document.getElementById('hamburger-menu');
const closeButton = document.getElementById('close-btn');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.remove('hamburgerMenuActive');
    hamburgerMenu.classList.add('hambugerMenuHide');
    closeButton.classList.add('hamburgerMenuActive');
    closeButton.classList.remove('hambugerMenuHide')

    const menuItem = document.querySelector('.header__container .section__navbar');
    menuItem.classList.add('showMenuSection')
    menuItem.classList.remove('hideMenuSection');
});

closeButton.addEventListener('click', () => {
    closeButton.classList.remove('hamburgerMenuActive');
    closeButton.classList.add('hambugerMenuHide');
    hamburgerMenu.classList.add('hamburgerMenuActive');
    hamburgerMenu.classList.remove('hambugerMenuHide');

    const menuItem = document.querySelector('.header__container .section__navbar');
    
    menuItem.classList.add('hideMenuSection')
    menuItem.classList.remove('showMenuSection');
});