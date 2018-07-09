import variables from './variables.js';

let menuBtn = document.querySelector(variables.MENU_BTN_SELECTOR);
let menuList = document.querySelector(variables.MENU_LIST_SELECTOR);
let menuItems = document.querySelectorAll(variables.MENU_ITEM_SELECTOR);
let nav = document.querySelector(variables.NAV_SELECTOR);
/*
let menuWitajItem = document.querySelector(variables.WITAJ_SELECTOR);
let menuNotWitajItem = document.querySelectorAll(variables.NOT_WITAJ_ITEM_SELECTOR);
let header = document.querySelector(variables.HEADER_SELECTOR);
*/


menuBtn.addEventListener('click', showMenu)

/*
menuNotWitajItem = Array.from(menuNotWitajItem)
menuNotWitajItem.forEach(item => {
  console.log('added')
  item.addEventListener('click', hideHeader)
});
menuWitajItem.addEventListener('click',showHeader)
function hideHeader() {
  console.log('clicked menu not witaj')
  nav.classList.add('hidden-header');
};
function showHeader(){
  nav.classList.remove('hidden-header');
}
*/


menuItems = Array.from(menuItems)
menuItems.forEach(item => {
  item.addEventListener('click', hideMenu);
});


function showMenu() {
  nav.classList.toggle('show-menu');
};

function hideMenu() {
  nav.classList.toggle('show-menu');
};

window.onscroll = function() {myFunction()}
let sticky = nav.offsetTop;
function myFunction(){
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}
