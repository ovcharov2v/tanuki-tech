/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_form.js":
/*!*************************!*\
  !*** ./src/js/_form.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.section-vacancy__form');
  if (!form) return;

  // Input masks
  var phoneMask = Object(imask__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('#phone'), {
    mask: '+{7}(000) 000-00-00'
  });

  // Form submit
  if (form) {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      var data = new URLSearchParams(new FormData(form));
      fetch("https://ovcharov2v.github.io/tanuki-tech/index.html", {
        method: 'post',
        body: data
      }).then(function (response) {
        //response.json()
        // ----do something----
        showModal();
      });
      formReset();
    });
  }
  var formReset = function formReset() {
    phoneMask.updateValue();
    form.reset();
  };
  var modal = document.querySelector('.modal');
  var modalCloseBtn = modal.querySelector('.modal__close');
  var showModal = function showModal() {
    document.body.style.overflow = 'hidden';
    modal.style.display = 'flex';
    setTimeout(function () {
      modal.classList.add('modal--show');
    }, 50);
  };
  var closeModal = function closeModal() {
    modal.classList.remove('modal--show');
    setTimeout(function () {
      document.body.style.overflow = '';
      modal.style.display = '';
    }, 300);
  };
  modalCloseBtn.addEventListener('click', function () {
    return closeModal();
  });
  modal.addEventListener('click', function (evt) {
    if (!evt.target.closest('.modal__window')) {
      closeModal();
    }
  });
  var checkbox = document.querySelector('.section-vacancy__form-checkbox');
  var submitBtn = document.querySelector('.section-vacancy__form-submit');
  if (checkbox) {
    checkbox.addEventListener('change', function () {
      submitBtn.disabled = !checkbox.checked;
    });
  }
});

/***/ }),

/***/ "./src/js/_menu.js":
/*!*************************!*\
  !*** ./src/js/_menu.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.header__nav-link');
  if (links.length) {
    links.forEach(function (a) {
      a.addEventListener('click', function (event) {
        event.preventDefault();
        var hash = event.target.getAttribute('href');
        var scrollTarget = document.querySelector(hash);
        var headerHeight = document.querySelector('.header').scrollHeight;
        window.scrollTo({
          top: scrollTarget.offsetTop - headerHeight,
          left: 0,
          behavior: "smooth"
        });
      });
    });
  }
});

/***/ }),

/***/ "./src/js/_section-photo.js":
/*!**********************************!*\
  !*** ./src/js/_section-photo.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

document.addEventListener('DOMContentLoaded', function () {
  var mainSwipers = document.querySelectorAll('.slider__main');
  var thumbsSwipers = document.querySelectorAll('.slider__thumbs');
  mainSwipers.forEach(function (mainSwiper, index) {
    var thumbsSwiper = thumbsSwipers[index];
    var mainSwiperInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](mainSwiper, {
      spaceBetween: 10,
      thumbs: {
        swiper: new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](thumbsSwiper, {
          spaceBetween: 0,
          slidesPerView: 3.5,
          freeMode: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideActiveClass: 'section-photo__thumb-slide--active',
          slideToClickedSlide: true,
          breakpoints: {
            768: {
              spaceBetween: 4,
              slidesPerView: 5.8
            },
            1024: {
              spaceBetween: 10,
              slidesPerView: 6.4
            }
          }
        })
      }
    });
    var thumbsSlides = thumbsSwiper.querySelectorAll('.swiper-slide');
    thumbsSlides.forEach(function (slide, slideIndex) {
      slide.addEventListener('click', function () {
        mainSwiperInstance.slideTo(slideIndex);
        thumbsSlides.forEach(function (slide, slideIndex) {
          slide.classList.remove('section-photo__thumb-slide--active');
        });
        slide.classList.add('section-photo__thumb-slide--active');
      });
    });
  });
});

/***/ }),

/***/ "./src/js/_section-portfolio.js":
/*!**************************************!*\
  !*** ./src/js/_section-portfolio.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


document.addEventListener('DOMContentLoaded', function () {
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.section-portfolio__slider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"]],
    slidesPerView: 1.1,
    spaceBetween: 12,
    slidesPerGroup: 1,
    pagination: {
      el: '.section-portfolio__dots',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
        slidesPerGroup: 2
      },
      1024: {
        enabled: false
      }
    }
  });
});

/***/ }),

/***/ "./src/js/_tabs.js":
/*!*************************!*\
  !*** ./src/js/_tabs.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

document.addEventListener('DOMContentLoaded', function () {
  var tabsList = document.querySelectorAll('.tabs');
  if (tabsList.length) {
    tabsList.forEach(function (tabs) {
      var tabsNavs = tabs.querySelectorAll('.tabs__nav-item');
      var tabContents = tabs.querySelectorAll('.tabs__item');
      tabsNavs.forEach(function (tab, index) {
        var activeIndex = 0;
        if (tabs.classList.contains('tabs--with-hidden-mobile-content')) {
          activeIndex = window.innerWidth >= 1024 ? 0 : 1;
        }
        if (index === activeIndex) {
          tab.classList.add('tabs__nav-item--active');
        }
        tabContents.forEach(function (content, index) {
          if (index === activeIndex) content.classList.add('tabs__item--active');
        });
        tab.addEventListener('click', function () {
          var tabId = tab.getAttribute('data-tab');
          tabsNavs.forEach(function (t) {
            return t.classList.remove('tabs__nav-item--active');
          });
          tabContents.forEach(function (content) {
            return content.classList.remove('tabs__item--active');
          });
          tab.classList.add('tabs__nav-item--active');
          tabs.querySelector(".tabs__item[data-tab=\"".concat(tabId, "\"]")).classList.add('tabs__item--active');
        });
      });
    }); // Скролл вкладок
    var containerList = document.querySelectorAll('.tabs__nav');
    containerList.forEach(function (container) {
      var buttons = container.querySelectorAll('.tabs__nav-item');
      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          var buttonPosition = button.getBoundingClientRect().left + container.scrollLeft;
          var buttonWidth = button.offsetWidth;
          var containerCenter = container.clientWidth / 2;
          var scrollPosition = buttonPosition - containerCenter + buttonWidth / 2;
          container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        });
      });
    });
  }
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_menu */ "./src/js/_menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_tabs */ "./src/js/_tabs.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_form */ "./src/js/_form.js");
/* harmony import */ var _section_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_section-portfolio */ "./src/js/_section-portfolio.js");
/* harmony import */ var _section_photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_section-photo */ "./src/js/_section-photo.js");






/***/ })

/******/ });
//# sourceMappingURL=main.js.map