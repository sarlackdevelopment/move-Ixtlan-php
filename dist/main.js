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
let $mainArea = $("#mainArea");

const newsAreaIsHidden = () => {
    let $isPushed = $mainArea.attr("isPushed");
    return (($isPushed == undefined) || ($isPushed == "1"));
}

const MyResize = () => {

    let $newsArea         = $("#newsArea");
    let $newsAreaBottom   = $("#newsAreaBottom");
    let $mainNews         = $("#mainNews");
    let $toggleNews       = $("#toggleNews");
    let $toggleNewsBottom = $("#toggleNewsBottom");

    $newsAreaIsHidden = newsAreaIsHidden();

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

}

/* harmony default export */ __webpack_exports__["default"] = (MyResize);

//$(window).resize(MyResize);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2FkYXB0aXZlU2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBOztBQUVBLFM7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRWUsdUVBQVEsRUFBQzs7QUFFeEI7QUFDQSxjOzs7Ozs7Ozs7Ozs7QUNoR0E7QUFBQTtBQUEyQzs7QUFFM0MsaUJBQWlCLDJEQUFRLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibGV0ICRtYWluQXJlYSA9ICQoXCIjbWFpbkFyZWFcIik7XG5cbmNvbnN0IG5ld3NBcmVhSXNIaWRkZW4gPSAoKSA9PiB7XG4gICAgbGV0ICRpc1B1c2hlZCA9ICRtYWluQXJlYS5hdHRyKFwiaXNQdXNoZWRcIik7XG4gICAgcmV0dXJuICgoJGlzUHVzaGVkID09IHVuZGVmaW5lZCkgfHwgKCRpc1B1c2hlZCA9PSBcIjFcIikpO1xufVxuXG5jb25zdCBNeVJlc2l6ZSA9ICgpID0+IHtcblxuICAgIGxldCAkbmV3c0FyZWEgICAgICAgICA9ICQoXCIjbmV3c0FyZWFcIik7XG4gICAgbGV0ICRuZXdzQXJlYUJvdHRvbSAgID0gJChcIiNuZXdzQXJlYUJvdHRvbVwiKTtcbiAgICBsZXQgJG1haW5OZXdzICAgICAgICAgPSAkKFwiI21haW5OZXdzXCIpO1xuICAgIGxldCAkdG9nZ2xlTmV3cyAgICAgICA9ICQoXCIjdG9nZ2xlTmV3c1wiKTtcbiAgICBsZXQgJHRvZ2dsZU5ld3NCb3R0b20gPSAkKFwiI3RvZ2dsZU5ld3NCb3R0b21cIik7XG5cbiAgICAkbmV3c0FyZWFJc0hpZGRlbiA9IG5ld3NBcmVhSXNIaWRkZW4oKTtcblxuICAgICR0b2dnbGVOZXdzQm90dG9tLmhpZGUoKTtcblxuICAgIGlmICghJG5ld3NBcmVhSXNIaWRkZW4pIHtcblxuICAgICAgICAkdG9nZ2xlTmV3cy5zaG93KCk7XG5cbiAgICAgICAgaWYgKCRtYWluQXJlYS5oYXNDbGFzcygnY29sLTgnKSkge1xuICAgICAgICAgICAgJG1haW5BcmVhLnJlbW92ZUNsYXNzKCdjb2wtOCcpO1xuICAgICAgICAgICAgJG1haW5BcmVhLmFkZENsYXNzKCdjb2wtMTInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY4cHgpJykubWF0Y2hlcykge1xuXG4gICAgICAgICAgICAkdG9nZ2xlTmV3cy5yZW1vdmVDbGFzcyhcInBvc2l0aW9uLWFic29sdXRlXCIpO1xuICAgICAgICAgICAgJHRvZ2dsZU5ld3MuYXR0cignc3R5bGUnLCAnJyk7XG4gICAgICAgICAgICAkdG9nZ2xlTmV3cy5hZGRDbGFzcygnY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICR0b2dnbGVOZXdzLmRldGFjaCgpO1xuICAgICAgICAgICAgJG1haW5BcmVhLnByZXBlbmQoJHRvZ2dsZU5ld3MpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICR0b2dnbGVOZXdzLmFkZENsYXNzKFwicG9zaXRpb24tYWJzb2x1dGVcIik7XG4gICAgICAgICAgICAkdG9nZ2xlTmV3cy5hdHRyKCdzdHlsZScsICd0b3A6MjVweDsnKTtcbiAgICAgICAgICAgICR0b2dnbGVOZXdzLnJlbW92ZUNsYXNzKCdjb250YWluZXInKTtcblxuICAgICAgICAgICAgJHRvZ2dsZU5ld3MuZGV0YWNoKCk7XG4gICAgICAgICAgICAkbWFpbkFyZWEuYXBwZW5kKCR0b2dnbGVOZXdzKTtcblxuICAgICAgICB9IFxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAkdG9nZ2xlTmV3cy5oaWRlKCk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjhweCknKS5tYXRjaGVzKSB7XG5cbiAgICAgICAgICAgICR0b2dnbGVOZXdzQm90dG9tLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKCRuZXdzQXJlYS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgICAgICRuZXdzQXJlYS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJG1haW5OZXdzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRtYWluQXJlYS5oYXNDbGFzcygnY29sLTgnKSkge1xuICAgICAgICAgICAgICAgICRtYWluQXJlYS5yZW1vdmVDbGFzcygnY29sLTgnKTtcbiAgICAgICAgICAgICAgICAkbWFpbkFyZWEuYWRkQ2xhc3MoJ2NvbC0xMicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJG5ld3NBcmVhLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICAkbmV3c0FyZWFCb3R0b20uc2hvdygpO1xuICAgICAgICAgICAgICAgICRtYWluTmV3cy5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKCRuZXdzQXJlYS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgJG5ld3NBcmVhLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbWFpbk5ld3Muc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJG1haW5BcmVhLmhhc0NsYXNzKCdjb2wtMTInKSkge1xuICAgICAgICAgICAgICAgICRtYWluQXJlYS5yZW1vdmVDbGFzcygnY29sLTEyJyk7XG4gICAgICAgICAgICAgICAgJG1haW5BcmVhLmFkZENsYXNzKCdjb2wtOCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJG5ld3NBcmVhLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgJG5ld3NBcmVhQm90dG9tLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkbWFpbk5ld3MuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlSZXNpemU7XG5cbi8vJCh3aW5kb3cpLnJlc2l6ZShNeVJlc2l6ZSk7XG4vLyQoTXlSZXNpemUpOyIsImltcG9ydCBNeVJlc2l6ZSBmcm9tICcuL2Zyb250L2FkYXB0aXZlU2l6ZSdcblxuJCh3aW5kb3cpLnJlc2l6ZShNeVJlc2l6ZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==