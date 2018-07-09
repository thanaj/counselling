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
obj.WITAJ_SELECTOR = '[data-target-nav="menu-item-witaj"]';
obj.NOT_WITAJ_ITEM_SELECTOR = '[data-target-nav="menu-item-not-witaj"]';
obj.HEADER_SELECTOR = '[data-target="header"]';
exports.default = obj;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2VzNi9hcHAuanMiLCJzY3JpcHRzL2VzNi92YXJpYWJsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxJQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLG9CQUFVLGlCQUFqQyxDQUFkO0FBQ0EsSUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixvQkFBVSxrQkFBakMsQ0FBZjtBQUNBLElBQUksWUFBWSxTQUFTLGdCQUFULENBQTBCLG9CQUFVLGtCQUFwQyxDQUFoQjtBQUNBLElBQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsb0JBQVUsWUFBakMsQ0FBVjtBQUNBOzs7Ozs7QUFPQSxRQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFFBQWxDOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLFlBQVksTUFBTSxJQUFOLENBQVcsU0FBWCxDQUFaO0FBQ0EsVUFBVSxPQUFWLENBQWtCLGdCQUFRO0FBQ3hCLE9BQUssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsUUFBL0I7QUFDRCxDQUZEOztBQUtBLFNBQVMsUUFBVCxHQUFvQjtBQUNsQixNQUFJLFNBQUosQ0FBYyxNQUFkLENBQXFCLFdBQXJCO0FBQ0Q7O0FBRUQsU0FBUyxRQUFULEdBQW9CO0FBQ2xCLE1BQUksU0FBSixDQUFjLE1BQWQsQ0FBcUIsV0FBckI7QUFDRDs7QUFFRCxPQUFPLFFBQVAsR0FBa0IsWUFBVztBQUFDO0FBQWEsQ0FBM0M7QUFDQSxJQUFJLFNBQVMsSUFBSSxTQUFqQjtBQUNBLFNBQVMsVUFBVCxHQUFxQjtBQUNuQixNQUFJLE9BQU8sV0FBUCxJQUFzQixNQUExQixFQUFrQztBQUNoQyxRQUFJLFNBQUosQ0FBYyxHQUFkLENBQWtCLFFBQWxCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSSxTQUFKLENBQWMsTUFBZCxDQUFxQixRQUFyQjtBQUNEO0FBQ0Y7Ozs7Ozs7O0FDdERELElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksaUJBQUosR0FBd0IsMEJBQXhCO0FBQ0EsSUFBSSxrQkFBSixHQUF5QiwyQkFBekI7QUFDQSxJQUFJLGtCQUFKLEdBQXdCLDJCQUF4QjtBQUNBLElBQUksWUFBSixHQUFrQixxQkFBbEI7QUFDQSxJQUFJLGNBQUosR0FBcUIscUNBQXJCO0FBQ0EsSUFBSSx1QkFBSixHQUE4Qix5Q0FBOUI7QUFDQSxJQUFJLGVBQUosR0FBcUIsd0JBQXJCO2tCQUNlLEciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgdmFyaWFibGVzIGZyb20gJy4vdmFyaWFibGVzLmpzJztcclxuXHJcbmxldCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2YXJpYWJsZXMuTUVOVV9CVE5fU0VMRUNUT1IpO1xyXG5sZXQgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHZhcmlhYmxlcy5NRU5VX0xJU1RfU0VMRUNUT1IpO1xyXG5sZXQgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YXJpYWJsZXMuTUVOVV9JVEVNX1NFTEVDVE9SKTtcclxubGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodmFyaWFibGVzLk5BVl9TRUxFQ1RPUik7XHJcbi8qXHJcbmxldCBtZW51V2l0YWpJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2YXJpYWJsZXMuV0lUQUpfU0VMRUNUT1IpO1xyXG5sZXQgbWVudU5vdFdpdGFqSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodmFyaWFibGVzLk5PVF9XSVRBSl9JVEVNX1NFTEVDVE9SKTtcclxubGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodmFyaWFibGVzLkhFQURFUl9TRUxFQ1RPUik7XHJcbiovXHJcblxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNZW51KVxyXG5cclxuLypcclxubWVudU5vdFdpdGFqSXRlbSA9IEFycmF5LmZyb20obWVudU5vdFdpdGFqSXRlbSlcclxubWVudU5vdFdpdGFqSXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdhZGRlZCcpXHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVIZWFkZXIpXHJcbn0pO1xyXG5tZW51V2l0YWpJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzaG93SGVhZGVyKVxyXG5mdW5jdGlvbiBoaWRlSGVhZGVyKCkge1xyXG4gIGNvbnNvbGUubG9nKCdjbGlja2VkIG1lbnUgbm90IHdpdGFqJylcclxuICBuYXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWhlYWRlcicpO1xyXG59O1xyXG5mdW5jdGlvbiBzaG93SGVhZGVyKCl7XHJcbiAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1oZWFkZXInKTtcclxufVxyXG4qL1xyXG5cclxuXHJcbm1lbnVJdGVtcyA9IEFycmF5LmZyb20obWVudUl0ZW1zKVxyXG5tZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1lbnUpO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcclxuICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tZW51Jyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoaWRlTWVudSgpIHtcclxuICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tZW51Jyk7XHJcbn07XHJcblxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtteUZ1bmN0aW9uKCl9XHJcbmxldCBzdGlja3kgPSBuYXYub2Zmc2V0VG9wO1xyXG5mdW5jdGlvbiBteUZ1bmN0aW9uKCl7XHJcbiAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBzdGlja3kpIHtcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpXHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBvYmogPSB7fVxyXG5cclxub2JqLk1FTlVfQlROX1NFTEVDVE9SID0gJ1tkYXRhLXRhcmdldD1cIm1lbnUtYnRuXCJdJ1xyXG5vYmouTUVOVV9MSVNUX1NFTEVDVE9SID0gJ1tkYXRhLXRhcmdldD1cIm1lbnUtbGlzdFwiXSdcclxub2JqLk1FTlVfSVRFTV9TRUxFQ1RPUiA9J1tkYXRhLXRhcmdldD1cIm1lbnUtaXRlbVwiXSdcclxub2JqLk5BVl9TRUxFQ1RPUiA9J1tkYXRhLXRhcmdldD1cIm5hdlwiXSdcclxub2JqLldJVEFKX1NFTEVDVE9SID0gJ1tkYXRhLXRhcmdldC1uYXY9XCJtZW51LWl0ZW0td2l0YWpcIl0nXHJcbm9iai5OT1RfV0lUQUpfSVRFTV9TRUxFQ1RPUiA9ICdbZGF0YS10YXJnZXQtbmF2PVwibWVudS1pdGVtLW5vdC13aXRhalwiXSdcclxub2JqLkhFQURFUl9TRUxFQ1RPUiA9J1tkYXRhLXRhcmdldD1cImhlYWRlclwiXSdcclxuZXhwb3J0IGRlZmF1bHQgb2JqO1xyXG4iXX0=
