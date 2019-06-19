/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/front/adaptiveSize.js":
/*!***********************************!*\
  !*** ./src/front/adaptiveSize.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $mainArea = $("#mainArea");

var newsAreaIsHidden = function newsAreaIsHidden() {
  var $isPushed = $mainArea.attr("isPushed");
  return $isPushed == undefined || $isPushed == "1";
};

var MyResize = function MyResize() {
  var $newsArea = $("#newsArea");
  var $newsAreaBottom = $("#newsAreaBottom");
  var $mainNews = $("#mainNews");
  var $toggleNews = $("#toggleNews");
  var $toggleNewsBottom = $("#toggleNewsBottom");
  var $newsAreaIsHidden = newsAreaIsHidden();
  $toggleNewsBottom.hide();

  if (!$newsAreaIsHidden) {
    $toggleNews.show();

    if ($mainArea.hasClass('col-8')) {
      $mainArea.removeClass('col-8');
      $mainArea.addClass('col-12');
    }

    if (window.matchMedia('(max-width: 768px)').matches) {
      $toggleNews.removeClass("position-absolute");
      $toggleNews.attr('style', '');
      $toggleNews.addClass('container');
      $toggleNews.detach();
      $mainArea.prepend($toggleNews);
    } else {
      $toggleNews.addClass("position-absolute");
      $toggleNews.attr('style', 'top:25px;');
      $toggleNews.removeClass('container');
      $toggleNews.detach();
      $mainArea.append($toggleNews);
    }
  } else {
    $toggleNews.hide();

    if (window.matchMedia('(max-width: 768px)').matches) {
      $toggleNewsBottom.show();

      if ($newsArea.is(':visible')) {
        $newsArea.hide();
        $mainNews.hide();
      }

      if ($mainArea.hasClass('col-8')) {
        $mainArea.removeClass('col-8');
        $mainArea.addClass('col-12');
      }

      if ($newsArea.is(':hidden')) {
        $newsAreaBottom.show();
        $mainNews.show();
      }
    } else {
      if ($newsArea.is(':hidden')) {
        $newsArea.show();
        $mainNews.show();
      }

      if ($mainArea.hasClass('col-12')) {
        $mainArea.removeClass('col-12');
        $mainArea.addClass('col-8');
      }

      if ($newsArea.is(':visible')) {
        $newsAreaBottom.hide();
        $mainNews.hide();
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (MyResize); //$(window).resize(MyResize);
//$(MyResize);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_adaptiveSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front/adaptiveSize */ "./src/front/adaptiveSize.js");

$(window).resize(_front_adaptiveSize__WEBPACK_IMPORTED_MODULE_0__["default"]);
$(_front_adaptiveSize__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2FkYXB0aXZlU2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiJG1haW5BcmVhIiwiJCIsIm5ld3NBcmVhSXNIaWRkZW4iLCIkaXNQdXNoZWQiLCJhdHRyIiwidW5kZWZpbmVkIiwiTXlSZXNpemUiLCIkbmV3c0FyZWEiLCIkbmV3c0FyZWFCb3R0b20iLCIkbWFpbk5ld3MiLCIkdG9nZ2xlTmV3cyIsIiR0b2dnbGVOZXdzQm90dG9tIiwiJG5ld3NBcmVhSXNIaWRkZW4iLCJoaWRlIiwic2hvdyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZGV0YWNoIiwicHJlcGVuZCIsImFwcGVuZCIsImlzIiwicmVzaXplIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztB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QUFKLEVBQWtDO0FBQzlCZixpQkFBUyxDQUFDZ0IsV0FBVixDQUFzQixRQUF0QjtBQUNBaEIsaUJBQVMsQ0FBQ2lCLFFBQVYsQ0FBbUIsT0FBbkI7QUFDSDs7QUFFRCxVQUFJVixTQUFTLENBQUNpQixFQUFWLENBQWEsVUFBYixDQUFKLEVBQThCO0FBQzFCaEIsdUJBQWUsQ0FBQ0ssSUFBaEI7QUFDQUosaUJBQVMsQ0FBQ0ksSUFBVjtBQUNIO0FBRUo7QUFDSjtBQUVKLENBcEZEOztBQXNGZVAsdUVBQWYsRSxDQUVBO0FBQ0EsYzs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQUE7QUFBQTtBQUVBTCxDQUFDLENBQUNpQixNQUFELENBQUQsQ0FBVU8sTUFBVixDQUFpQm5CLDJEQUFqQjtBQUNBTCxDQUFDLENBQUNLLDJEQUFELENBQUQsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJsZXQgJG1haW5BcmVhID0gJChcIiNtYWluQXJlYVwiKTtcblxuY29uc3QgbmV3c0FyZWFJc0hpZGRlbiA9ICgpID0+IHtcbiAgICBsZXQgJGlzUHVzaGVkID0gJG1haW5BcmVhLmF0dHIoXCJpc1B1c2hlZFwiKTtcbiAgICByZXR1cm4gKCgkaXNQdXNoZWQgPT0gdW5kZWZpbmVkKSB8fCAoJGlzUHVzaGVkID09IFwiMVwiKSk7XG59IFxuXG5jb25zdCBNeVJlc2l6ZSA9ICgpID0+IHtcblxuICAgIGxldCAkbmV3c0FyZWEgICAgICAgICA9ICQoXCIjbmV3c0FyZWFcIik7XG4gICAgbGV0ICRuZXdzQXJlYUJvdHRvbSAgID0gJChcIiNuZXdzQXJlYUJvdHRvbVwiKTtcbiAgICBsZXQgJG1haW5OZXdzICAgICAgICAgPSAkKFwiI21haW5OZXdzXCIpO1xuICAgIGxldCAkdG9nZ2xlTmV3cyAgICAgICA9ICQoXCIjdG9nZ2xlTmV3c1wiKTtcbiAgICBsZXQgJHRvZ2dsZU5ld3NCb3R0b20gPSAkKFwiI3RvZ2dsZU5ld3NCb3R0b21cIik7XG5cbiAgICBsZXQgJG5ld3NBcmVhSXNIaWRkZW4gPSBuZXdzQXJlYUlzSGlkZGVuKCk7XG5cbiAgICAkdG9nZ2xlTmV3c0JvdHRvbS5oaWRlKCk7XG5cbiAgICBpZiAoISRuZXdzQXJlYUlzSGlkZGVuKSB7XG5cbiAgICAgICAgJHRvZ2dsZU5ld3Muc2hvdygpO1xuXG4gICAgICAgIGlmICgkbWFpbkFyZWEuaGFzQ2xhc3MoJ2NvbC04JykpIHtcbiAgICAgICAgICAgICRtYWluQXJlYS5yZW1vdmVDbGFzcygnY29sLTgnKTtcbiAgICAgICAgICAgICRtYWluQXJlYS5hZGRDbGFzcygnY29sLTEyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpLm1hdGNoZXMpIHtcblxuICAgICAgICAgICAgJHRvZ2dsZU5ld3MucmVtb3ZlQ2xhc3MoXCJwb3NpdGlvbi1hYnNvbHV0ZVwiKTtcbiAgICAgICAgICAgICR0b2dnbGVOZXdzLmF0dHIoJ3N0eWxlJywgJycpO1xuICAgICAgICAgICAgJHRvZ2dsZU5ld3MuYWRkQ2xhc3MoJ2NvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAkdG9nZ2xlTmV3cy5kZXRhY2goKTtcbiAgICAgICAgICAgICRtYWluQXJlYS5wcmVwZW5kKCR0b2dnbGVOZXdzKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAkdG9nZ2xlTmV3cy5hZGRDbGFzcyhcInBvc2l0aW9uLWFic29sdXRlXCIpO1xuICAgICAgICAgICAgJHRvZ2dsZU5ld3MuYXR0cignc3R5bGUnLCAndG9wOjI1cHg7Jyk7XG4gICAgICAgICAgICAkdG9nZ2xlTmV3cy5yZW1vdmVDbGFzcygnY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICR0b2dnbGVOZXdzLmRldGFjaCgpO1xuICAgICAgICAgICAgJG1haW5BcmVhLmFwcGVuZCgkdG9nZ2xlTmV3cyk7XG5cbiAgICAgICAgfSBcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgJHRvZ2dsZU5ld3MuaGlkZSgpO1xuXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY4cHgpJykubWF0Y2hlcykge1xuXG4gICAgICAgICAgICAkdG9nZ2xlTmV3c0JvdHRvbS5zaG93KCk7XG5cbiAgICAgICAgICAgIGlmICgkbmV3c0FyZWEuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICAkbmV3c0FyZWEuaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtYWluTmV3cy5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbWFpbkFyZWEuaGFzQ2xhc3MoJ2NvbC04JykpIHtcbiAgICAgICAgICAgICAgICAkbWFpbkFyZWEucmVtb3ZlQ2xhc3MoJ2NvbC04Jyk7XG4gICAgICAgICAgICAgICAgJG1haW5BcmVhLmFkZENsYXNzKCdjb2wtMTInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRuZXdzQXJlYS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgJG5ld3NBcmVhQm90dG9tLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbWFpbk5ld3Muc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICgkbmV3c0FyZWEuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgICRuZXdzQXJlYS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJG1haW5OZXdzLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRtYWluQXJlYS5oYXNDbGFzcygnY29sLTEyJykpIHtcbiAgICAgICAgICAgICAgICAkbWFpbkFyZWEucmVtb3ZlQ2xhc3MoJ2NvbC0xMicpO1xuICAgICAgICAgICAgICAgICRtYWluQXJlYS5hZGRDbGFzcygnY29sLTgnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRuZXdzQXJlYS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgICAgICRuZXdzQXJlYUJvdHRvbS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJG1haW5OZXdzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15UmVzaXplO1xuXG4vLyQod2luZG93KS5yZXNpemUoTXlSZXNpemUpO1xuLy8kKE15UmVzaXplKTsiLCJpbXBvcnQgTXlSZXNpemUgZnJvbSAnLi9mcm9udC9hZGFwdGl2ZVNpemUnXG5cbiQod2luZG93KS5yZXNpemUoTXlSZXNpemUpO1xuJChNeVJlc2l6ZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==