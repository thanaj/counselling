(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _variables = require('./variables.js');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuBtn = document.querySelector(_variables2.default.MENU_BTN_SELECTOR);
var menuList = document.querySelector(_variables2.default.MENU_LIST_SELECTOR);
var menuItems = document.querySelectorAll(_variables2.default.MENU_ITEM_SELECTOR);
var nav = document.querySelector(_variables2.default.NAV_SELECTOR);
menuBtn.addEventListener('click', showMenu);

function showMenu() {
  nav.classList.toggle('show-menu');
}
menuItems = Array.from(menuItems);
menuItems.forEach(function (item) {
  item.addEventListener('click', hideMenu);
});

function hideMenu() {
  nav.classList.toggle('show-menu');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2VzNi9hcHAuanMiLCJzY3JpcHRzL2VzNi92YXJpYWJsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxJQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLG9CQUFVLGlCQUFqQyxDQUFkO0FBQ0EsSUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixvQkFBVSxrQkFBakMsQ0FBZjtBQUNBLElBQUksWUFBWSxTQUFTLGdCQUFULENBQTBCLG9CQUFVLGtCQUFwQyxDQUFoQjtBQUNBLElBQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsb0JBQVUsWUFBakMsQ0FBVjtBQUNBLFFBQVEsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBaUMsUUFBakM7O0FBRUEsU0FBUyxRQUFULEdBQW9CO0FBQ2xCLE1BQUksU0FBSixDQUFjLE1BQWQsQ0FBcUIsV0FBckI7QUFDRDtBQUNELFlBQVksTUFBTSxJQUFOLENBQVcsU0FBWCxDQUFaO0FBQ0EsVUFBVSxPQUFWLENBQWtCLGdCQUFRO0FBQ3hCLE9BQUssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBOEIsUUFBOUI7QUFDRCxDQUZEOztBQUlBLFNBQVMsUUFBVCxHQUFvQjtBQUNsQixNQUFJLFNBQUosQ0FBYyxNQUFkLENBQXFCLFdBQXJCO0FBQ0Q7Ozs7Ozs7O0FDbEJELElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksaUJBQUosR0FBd0IsMEJBQXhCO0FBQ0EsSUFBSSxrQkFBSixHQUF5QiwyQkFBekI7QUFDQSxJQUFJLGtCQUFKLEdBQXdCLDJCQUF4QjtBQUNBLElBQUksWUFBSixHQUFrQixxQkFBbEI7a0JBQ2UsRyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB2YXJpYWJsZXMgZnJvbSAnLi92YXJpYWJsZXMuanMnO1xyXG5cclxubGV0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHZhcmlhYmxlcy5NRU5VX0JUTl9TRUxFQ1RPUilcclxubGV0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2YXJpYWJsZXMuTUVOVV9MSVNUX1NFTEVDVE9SKVxyXG5sZXQgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YXJpYWJsZXMuTUVOVV9JVEVNX1NFTEVDVE9SKVxyXG5sZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2YXJpYWJsZXMuTkFWX1NFTEVDVE9SKVxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzaG93TWVudSlcclxuXHJcbmZ1bmN0aW9uIHNob3dNZW51KCkge1xyXG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1lbnUnKTtcclxufVxyXG5tZW51SXRlbXMgPSBBcnJheS5mcm9tKG1lbnVJdGVtcylcclxubWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaGlkZU1lbnUpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gaGlkZU1lbnUoKSB7XHJcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbWVudScpO1xyXG59XHJcbiIsImNvbnN0IG9iaiA9IHt9XHJcblxyXG5vYmouTUVOVV9CVE5fU0VMRUNUT1IgPSAnW2RhdGEtdGFyZ2V0PVwibWVudS1idG5cIl0nXHJcbm9iai5NRU5VX0xJU1RfU0VMRUNUT1IgPSAnW2RhdGEtdGFyZ2V0PVwibWVudS1saXN0XCJdJ1xyXG5vYmouTUVOVV9JVEVNX1NFTEVDVE9SID0nW2RhdGEtdGFyZ2V0PVwibWVudS1pdGVtXCJdJ1xyXG5vYmouTkFWX1NFTEVDVE9SID0nW2RhdGEtdGFyZ2V0PVwibmF2XCJdJ1xyXG5leHBvcnQgZGVmYXVsdCBvYmo7XHJcbiJdfQ==
