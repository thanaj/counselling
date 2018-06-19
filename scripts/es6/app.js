import variables from './variables.js';

let menuBtn = document.querySelector(variables.MENU_BTN_SELECTOR)
let menuList = document.querySelector(variables.MENU_LIST_SELECTOR)
let menuItems = document.querySelectorAll(variables.MENU_ITEM_SELECTOR)
let nav = document.querySelector(variables.NAV_SELECTOR)
menuBtn.addEventListener('click',showMenu)

function showMenu() {
  nav.classList.toggle('show-menu');
}
menuItems = Array.from(menuItems)
menuItems.forEach(item => {
  item.addEventListener('click',hideMenu);
})

function hideMenu() {
  nav.classList.toggle('show-menu');
}
