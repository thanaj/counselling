(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _variables = require('./variables.js');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuBtn = document.querySelector(_variables2.default.MENU_BTN_SELECTOR);
var menuList = document.querySelector(_variables2.default.MENU_LIST_SELECTOR);
var menuItems = document.querySelectorAll(_variables2.default.MENU_ITEM_SELECTOR);
var nav = document.querySelector(_variables2.default.NAV_SELECTOR);
/*
let menuWitajItem = document.querySelector(variables.WITAJ_SELECTOR);
let menuNotWitajItem = document.querySelectorAll(variables.NOT_WITAJ_ITEM_SELECTOR);
let header = document.querySelector(variables.HEADER_SELECTOR);
*/

menuBtn.addEventListener('click', showMenu);

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

menuItems = Array.from(menuItems);
menuItems.forEach(function (item) {
  item.addEventListener('click', hideMenu);
});

function showMenu() {
  nav.classList.toggle('show-menu');
};

function hideMenu() {
  nav.classList.toggle('show-menu');
};

window.onscroll = function () {
  myFunction();
};
var sticky = nav.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

},{"./variables.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var obj = {};

obj.MENU_BTN_SELECTOR = '[data-target="menu-btn"]';
obj.MENU_LIST_SELECTOR = '[data-target="menu-list"]';
obj.MENU_ITEM_SELECTOR = '[data-target="menu-item"]';
obj.NAV_SELECTOR = '[data-target="nav"]';
exports.default = obj;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2VzNi9hcHAuanMiLCJzY3JpcHRzL2VzNi92YXJpYWJsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxJQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLG9CQUFVLGlCQUFqQyxDQUFkO0FBQ0EsSUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixvQkFBVSxrQkFBakMsQ0FBZjtBQUNBLElBQUksWUFBWSxTQUFTLGdCQUFULENBQTBCLG9CQUFVLGtCQUFwQyxDQUFoQjtBQUNBLElBQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsb0JBQVUsWUFBakMsQ0FBVjtBQUNBOzs7Ozs7QUFPQSxRQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFFBQWxDOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLFlBQVksTUFBTSxJQUFOLENBQVcsU0FBWCxDQUFaO0FBQ0EsVUFBVSxPQUFWLENBQWtCLGdCQUFRO0FBQ3hCLE9BQUssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsUUFBL0I7QUFDRCxDQUZEOztBQUtBLFNBQVMsUUFBVCxHQUFvQjtBQUNsQixNQUFJLFNBQUosQ0FBYyxNQUFkLENBQXFCLFdBQXJCO0FBQ0Q7O0FBRUQsU0FBUyxRQUFULEdBQW9CO0FBQ2xCLE1BQUksU0FBSixDQUFjLE1BQWQsQ0FBcUIsV0FBckI7QUFDRDs7QUFFRCxPQUFPLFFBQVAsR0FBa0IsWUFBVztBQUFDO0FBQWEsQ0FBM0M7QUFDQSxJQUFJLFNBQVMsSUFBSSxTQUFqQjtBQUNBLFNBQVMsVUFBVCxHQUFxQjtBQUNuQixNQUFJLE9BQU8sV0FBUCxJQUFzQixNQUExQixFQUFrQztBQUNoQyxRQUFJLFNBQUosQ0FBYyxHQUFkLENBQWtCLFFBQWxCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSSxTQUFKLENBQWMsTUFBZCxDQUFxQixRQUFyQjtBQUNEO0FBQ0Y7Ozs7Ozs7O0FDdERELElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksaUJBQUosR0FBd0IsMEJBQXhCO0FBQ0EsSUFBSSxrQkFBSixHQUF5QiwyQkFBekI7QUFDQSxJQUFJLGtCQUFKLEdBQXdCLDJCQUF4QjtBQUNBLElBQUksWUFBSixHQUFrQixxQkFBbEI7a0JBQ2UsRyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB2YXJpYWJsZXMgZnJvbSAnLi92YXJpYWJsZXMuanMnO1xyXG5cclxubGV0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHZhcmlhYmxlcy5NRU5VX0JUTl9TRUxFQ1RPUik7XHJcbmxldCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodmFyaWFibGVzLk1FTlVfTElTVF9TRUxFQ1RPUik7XHJcbmxldCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHZhcmlhYmxlcy5NRU5VX0lURU1fU0VMRUNUT1IpO1xyXG5sZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2YXJpYWJsZXMuTkFWX1NFTEVDVE9SKTtcclxuLypcclxubGV0IG1lbnVXaXRhakl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHZhcmlhYmxlcy5XSVRBSl9TRUxFQ1RPUik7XHJcbmxldCBtZW51Tm90V2l0YWpJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YXJpYWJsZXMuTk9UX1dJVEFKX0lURU1fU0VMRUNUT1IpO1xyXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2YXJpYWJsZXMuSEVBREVSX1NFTEVDVE9SKTtcclxuKi9cclxuXHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01lbnUpXHJcblxyXG4vKlxyXG5tZW51Tm90V2l0YWpJdGVtID0gQXJyYXkuZnJvbShtZW51Tm90V2l0YWpJdGVtKVxyXG5tZW51Tm90V2l0YWpJdGVtLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2FkZGVkJylcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUhlYWRlcilcclxufSk7XHJcbm1lbnVXaXRhakl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHNob3dIZWFkZXIpXHJcbmZ1bmN0aW9uIGhpZGVIZWFkZXIoKSB7XHJcbiAgY29uc29sZS5sb2coJ2NsaWNrZWQgbWVudSBub3Qgd2l0YWonKVxyXG4gIG5hdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4taGVhZGVyJyk7XHJcbn07XHJcbmZ1bmN0aW9uIHNob3dIZWFkZXIoKXtcclxuICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWhlYWRlcicpO1xyXG59XHJcbiovXHJcblxyXG5cclxubWVudUl0ZW1zID0gQXJyYXkuZnJvbShtZW51SXRlbXMpXHJcbm1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTWVudSk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dNZW51KCkge1xyXG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1lbnUnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhpZGVNZW51KCkge1xyXG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1lbnUnKTtcclxufTtcclxuXHJcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge215RnVuY3Rpb24oKX1cclxubGV0IHN0aWNreSA9IG5hdi5vZmZzZXRUb3A7XHJcbmZ1bmN0aW9uIG15RnVuY3Rpb24oKXtcclxuICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHN0aWNreSkge1xyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIilcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IG9iaiA9IHt9XHJcblxyXG5vYmouTUVOVV9CVE5fU0VMRUNUT1IgPSAnW2RhdGEtdGFyZ2V0PVwibWVudS1idG5cIl0nXHJcbm9iai5NRU5VX0xJU1RfU0VMRUNUT1IgPSAnW2RhdGEtdGFyZ2V0PVwibWVudS1saXN0XCJdJ1xyXG5vYmouTUVOVV9JVEVNX1NFTEVDVE9SID0nW2RhdGEtdGFyZ2V0PVwibWVudS1pdGVtXCJdJ1xyXG5vYmouTkFWX1NFTEVDVE9SID0nW2RhdGEtdGFyZ2V0PVwibmF2XCJdJ1xyXG5leHBvcnQgZGVmYXVsdCBvYmo7XHJcbiJdfQ==
