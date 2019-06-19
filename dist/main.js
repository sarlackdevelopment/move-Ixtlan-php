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
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/common.js */ "./src/front/utils/common.js");
/* let $mainArea = $("#mainArea");

const newsAreaIsHidden = () => {
    let $isPushed = $mainArea.attr("isPushed");
    return (($isPushed == undefined) || ($isPushed == "1"));
} */


var MyResize = function MyResize() {
  var $mainArea = $("#mainArea");
  var $newsArea = $("#newsArea");
  var $newsAreaBottom = $("#newsAreaBottom");
  var $mainNews = $("#mainNews");
  var $toggleNews = $("#toggleNews");
  var $toggleNewsBottom = $("#toggleNewsBottom");
  var $newsAreaIsHidden = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["newsAreaIsHidden"])();
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

/***/ "./src/front/utils/common.js":
/*!***********************************!*\
  !*** ./src/front/utils/common.js ***!
  \***********************************/
/*! exports provided: newsAreaIsHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsAreaIsHidden", function() { return newsAreaIsHidden; });
var $mainArea = $("#mainArea");
var newsAreaIsHidden = function newsAreaIsHidden() {
  var $isPushed = $mainArea.attr("isPushed");
  return $isPushed == undefined || $isPushed == "1";
}; //export default newsAreaIsHidden;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2FkYXB0aXZlU2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNeVJlc2l6ZSIsIiRtYWluQXJlYSIsIiQiLCIkbmV3c0FyZWEiLCIkbmV3c0FyZWFCb3R0b20iLCIkbWFpbk5ld3MiLCIkdG9nZ2xlTmV3cyIsIiR0b2dnbGVOZXdzQm90dG9tIiwiJG5ld3NBcmVhSXNIaWRkZW4iLCJuZXdzQXJlYUlzSGlkZGVuIiwiaGlkZSIsInNob3ciLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImF0dHIiLCJkZXRhY2giLCJwcmVwZW5kIiwiYXBwZW5kIiwiaXMiLCIkaXNQdXNoZWQiLCJ1bmRlZmluZWQiLCJyZXNpemUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FB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Q0FBQ21CLEVBQVYsQ0FBYSxVQUFiLENBQUosRUFBOEI7QUFDMUJsQix1QkFBZSxDQUFDTSxJQUFoQjtBQUNBTCxpQkFBUyxDQUFDSyxJQUFWO0FBQ0g7QUFFSjtBQUNKO0FBRUosQ0FyRkQ7O0FBdUZlVix1RUFBZixFLENBRUE7QUFDQSxjOzs7Ozs7Ozs7Ozs7QUNuR0E7QUFBQTtBQUFBLElBQUlDLFNBQVMsR0FBR0MsQ0FBQyxDQUFDLFdBQUQsQ0FBakI7QUFFTyxJQUFNTyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDbEMsTUFBSWMsU0FBUyxHQUFHdEIsU0FBUyxDQUFDaUIsSUFBVixDQUFlLFVBQWYsQ0FBaEI7QUFDQSxTQUFTSyxTQUFTLElBQUlDLFNBQWQsSUFBNkJELFNBQVMsSUFBSSxHQUFsRDtBQUNILENBSE0sQyxDQUtQLGtDOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFFQXJCLENBQUMsQ0FBQ2EsTUFBRCxDQUFELENBQVVVLE1BQVYsQ0FBaUJ6QiwyREFBakI7QUFDQUUsQ0FBQyxDQUFDRiwyREFBRCxDQUFELEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyogbGV0ICRtYWluQXJlYSA9ICQoXCIjbWFpbkFyZWFcIik7XG5cbmNvbnN0IG5ld3NBcmVhSXNIaWRkZW4gPSAoKSA9PiB7XG4gICAgbGV0ICRpc1B1c2hlZCA9ICRtYWluQXJlYS5hdHRyKFwiaXNQdXNoZWRcIik7XG4gICAgcmV0dXJuICgoJGlzUHVzaGVkID09IHVuZGVmaW5lZCkgfHwgKCRpc1B1c2hlZCA9PSBcIjFcIikpO1xufSAqL1xuXG5pbXBvcnQgeyBuZXdzQXJlYUlzSGlkZGVuIH0gZnJvbSAnLi91dGlscy9jb21tb24uanMnXG5cbmNvbnN0IE15UmVzaXplID0gKCkgPT4ge1xuXG4gICAgbGV0ICRtYWluQXJlYSAgICAgICAgID0gJChcIiNtYWluQXJlYVwiKTtcbiAgICBsZXQgJG5ld3NBcmVhICAgICAgICAgPSAkKFwiI25ld3NBcmVhXCIpO1xuICAgIGxldCAkbmV3c0FyZWFCb3R0b20gICA9ICQoXCIjbmV3c0FyZWFCb3R0b21cIik7XG4gICAgbGV0ICRtYWluTmV3cyAgICAgICAgID0gJChcIiNtYWluTmV3c1wiKTtcbiAgICBsZXQgJHRvZ2dsZU5ld3MgICAgICAgPSAkKFwiI3RvZ2dsZU5ld3NcIik7XG4gICAgbGV0ICR0b2dnbGVOZXdzQm90dG9tID0gJChcIiN0b2dnbGVOZXdzQm90dG9tXCIpO1xuXG4gICAgbGV0ICRuZXdzQXJlYUlzSGlkZGVuID0gbmV3c0FyZWFJc0hpZGRlbigpO1xuXG4gICAgJHRvZ2dsZU5ld3NCb3R0b20uaGlkZSgpO1xuXG4gICAgaWYgKCEkbmV3c0FyZWFJc0hpZGRlbikge1xuXG4gICAgICAgICR0b2dnbGVOZXdzLnNob3coKTtcblxuICAgICAgICBpZiAoJG1haW5BcmVhLmhhc0NsYXNzKCdjb2wtOCcpKSB7XG4gICAgICAgICAgICAkbWFpbkFyZWEucmVtb3ZlQ2xhc3MoJ2NvbC04Jyk7XG4gICAgICAgICAgICAkbWFpbkFyZWEuYWRkQ2xhc3MoJ2NvbC0xMicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjhweCknKS5tYXRjaGVzKSB7XG5cbiAgICAgICAgICAgICR0b2dnbGVOZXdzLnJlbW92ZUNsYXNzKFwicG9zaXRpb24tYWJzb2x1dGVcIik7XG4gICAgICAgICAgICAkdG9nZ2xlTmV3cy5hdHRyKCdzdHlsZScsICcnKTtcbiAgICAgICAgICAgICR0b2dnbGVOZXdzLmFkZENsYXNzKCdjb250YWluZXInKTtcblxuICAgICAgICAgICAgJHRvZ2dsZU5ld3MuZGV0YWNoKCk7XG4gICAgICAgICAgICAkbWFpbkFyZWEucHJlcGVuZCgkdG9nZ2xlTmV3cyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgJHRvZ2dsZU5ld3MuYWRkQ2xhc3MoXCJwb3NpdGlvbi1hYnNvbHV0ZVwiKTtcbiAgICAgICAgICAgICR0b2dnbGVOZXdzLmF0dHIoJ3N0eWxlJywgJ3RvcDoyNXB4OycpO1xuICAgICAgICAgICAgJHRvZ2dsZU5ld3MucmVtb3ZlQ2xhc3MoJ2NvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAkdG9nZ2xlTmV3cy5kZXRhY2goKTtcbiAgICAgICAgICAgICRtYWluQXJlYS5hcHBlbmQoJHRvZ2dsZU5ld3MpO1xuXG4gICAgICAgIH0gXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgICR0b2dnbGVOZXdzLmhpZGUoKTtcblxuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpLm1hdGNoZXMpIHtcblxuICAgICAgICAgICAgJHRvZ2dsZU5ld3NCb3R0b20uc2hvdygpO1xuXG4gICAgICAgICAgICBpZiAoJG5ld3NBcmVhLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgJG5ld3NBcmVhLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkbWFpbk5ld3MuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJG1haW5BcmVhLmhhc0NsYXNzKCdjb2wtOCcpKSB7XG4gICAgICAgICAgICAgICAgJG1haW5BcmVhLnJlbW92ZUNsYXNzKCdjb2wtOCcpO1xuICAgICAgICAgICAgICAgICRtYWluQXJlYS5hZGRDbGFzcygnY29sLTEyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbmV3c0FyZWEuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgICRuZXdzQXJlYUJvdHRvbS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJG1haW5OZXdzLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoJG5ld3NBcmVhLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICAkbmV3c0FyZWEuc2hvdygpO1xuICAgICAgICAgICAgICAgICRtYWluTmV3cy5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbWFpbkFyZWEuaGFzQ2xhc3MoJ2NvbC0xMicpKSB7XG4gICAgICAgICAgICAgICAgJG1haW5BcmVhLnJlbW92ZUNsYXNzKCdjb2wtMTInKTtcbiAgICAgICAgICAgICAgICAkbWFpbkFyZWEuYWRkQ2xhc3MoJ2NvbC04Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbmV3c0FyZWEuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICAkbmV3c0FyZWFCb3R0b20uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtYWluTmV3cy5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNeVJlc2l6ZTtcblxuLy8kKHdpbmRvdykucmVzaXplKE15UmVzaXplKTtcbi8vJChNeVJlc2l6ZSk7IiwibGV0ICRtYWluQXJlYSA9ICQoXCIjbWFpbkFyZWFcIik7XG5cbmV4cG9ydCBjb25zdCBuZXdzQXJlYUlzSGlkZGVuID0gKCkgPT4ge1xuICAgIGxldCAkaXNQdXNoZWQgPSAkbWFpbkFyZWEuYXR0cihcImlzUHVzaGVkXCIpO1xuICAgIHJldHVybiAoKCRpc1B1c2hlZCA9PSB1bmRlZmluZWQpIHx8ICgkaXNQdXNoZWQgPT0gXCIxXCIpKTtcbn1cblxuLy9leHBvcnQgZGVmYXVsdCBuZXdzQXJlYUlzSGlkZGVuOyIsImltcG9ydCBNeVJlc2l6ZSBmcm9tICcuL2Zyb250L2FkYXB0aXZlU2l6ZSdcblxuJCh3aW5kb3cpLnJlc2l6ZShNeVJlc2l6ZSk7XG4kKE15UmVzaXplKTsiXSwic291cmNlUm9vdCI6IiJ9