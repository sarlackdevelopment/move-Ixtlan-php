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

/***/ "./src/front/toggleNews.js":
/*!*********************************!*\
  !*** ./src/front/toggleNews.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var $toggleNews = $("#toggleNews");
var $main = $('main');
var $mainArea = $("#mainArea");

var toggleLeftBottom =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $mainArea.removeClass('col-8');
            $mainArea.addClass('col-12');
            $main.addClass('position-relative');
            $toggleNews.show();
            $mainArea.attr("isPushed", "0");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function toggleLeftBottom() {
    return _ref.apply(this, arguments);
  };
}();

var toggleRight =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            $mainArea.removeClass('col-12');
            $mainArea.addClass('col-8');
            $main.removeClass('position-relative');
            $toggleNews.hide();
            $mainArea.attr("isPushed", "1");

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function toggleRight() {
    return _ref2.apply(this, arguments);
  };
}();

var toggleTop =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            $mainArea.removeClass('col-8');
            $mainArea.addClass('col-12');
            $mainArea.removeClass('position-relative');
            $toggleNews.hide();
            $mainArea.attr("isPushed", "1");

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function toggleTop() {
    return _ref3.apply(this, arguments);
  };
}();

var newsesStateManager =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4($direction) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.t0 = $direction;
            _context4.next = _context4.t0 === 'left' ? 3 : _context4.t0 === 'right' ? 5 : _context4.t0 === 'bottom' ? 7 : _context4.t0 === 'top' ? 9 : 11;
            break;

          case 3:
            toggleLeftBottom();
            return _context4.abrupt("break", 11);

          case 5:
            toggleRight();
            return _context4.abrupt("break", 11);

          case 7:
            toggleLeftBottom();
            return _context4.abrupt("break", 11);

          case 9:
            toggleTop();
            return _context4.abrupt("break", 11);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function newsesStateManager(_x) {
    return _ref4.apply(this, arguments);
  };
}();

var toggleNews =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9($newsAreaIsHidden) {
    var $toggleNewsBottom, $mainNews, $newsAreaBottom, $newsArea, $delay;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            $toggleNewsBottom = $("#toggleNewsBottom");
            $mainNews = $("#mainNews");
            $newsAreaBottom = $("#newsAreaBottom");
            $newsArea = $("#newsArea");
            $delay = 150;

            if (!$newsAreaIsHidden) {
              _context9.next = 23;
              break;
            }

            if (!window.matchMedia('(max-width: 768px)').matches) {
              _context9.next = 15;
              break;
            }

            _context9.next = 9;
            return $newsAreaBottom.animate({
              bottom: 'toggle',
              opacity: "toggle"
            }, $delay);

          case 9:
            _context9.next = 11;
            return newsesStateManager('bottom');

          case 11:
            _context9.next = 13;
            return _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      $mainNews.hide();
                      $toggleNewsBottom.hide();
                      $toggleNews.removeClass("position-absolute");
                      $toggleNews.attr('style', '');
                      $toggleNews.addClass('container');
                      $toggleNews.detach();
                      $mainArea.prepend($toggleNews);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }))();

          case 13:
            _context9.next = 21;
            break;

          case 15:
            _context9.next = 17;
            return $newsArea.animate({
              left: 'toggle',
              opacity: "toggle"
            }, $delay);

          case 17:
            _context9.next = 19;
            return newsesStateManager('left');

          case 19:
            _context9.next = 21;
            return _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      $toggleNews.addClass("position-absolute");
                      $toggleNews.attr('style', 'top:25px;');
                      $toggleNews.removeClass('container');

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }))();

          case 21:
            _context9.next = 38;
            break;

          case 23:
            if (!window.matchMedia('(max-width: 768px)').matches) {
              _context9.next = 32;
              break;
            }

            _context9.next = 26;
            return $newsAreaBottom.animate({
              top: 'toggle',
              opacity: "toggle"
            }, $delay);

          case 26:
            _context9.next = 28;
            return newsesStateManager('top');

          case 28:
            _context9.next = 30;
            return _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      $mainNews.show();
                      $toggleNews.hide();
                      $toggleNewsBottom.show();

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }))();

          case 30:
            _context9.next = 38;
            break;

          case 32:
            _context9.next = 34;
            return $newsArea.animate({
              right: 'toggle',
              opacity: "toggle"
            }, $delay);

          case 34:
            _context9.next = 36;
            return newsesStateManager('right');

          case 36:
            _context9.next = 38;
            return _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", $toggleNews.hide());

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }))();

          case 38:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function toggleNews(_x2) {
    return _ref5.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (toggleNews); // $('.toggleNews').click(() => toggleNews(newsAreaIsHidden()));

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
};

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
/* harmony import */ var _front_toggleNews_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front/toggleNews.js */ "./src/front/toggleNews.js");
/* harmony import */ var _front_utils_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./front/utils/common.js */ "./src/front/utils/common.js");



$(window).resize(_front_adaptiveSize__WEBPACK_IMPORTED_MODULE_0__["default"]);
$(_front_adaptiveSize__WEBPACK_IMPORTED_MODULE_0__["default"]);
$('.toggleNews').click(function () {
  return Object(_front_toggleNews_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_front_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["newsAreaIsHidden"])());
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2FkYXB0aXZlU2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdG9nZ2xlTmV3cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNeVJlc2l6ZSIsIiRtYWluQXJlYSIsIiQiLCIkbmV3c0FyZWEiLCIkbmV3c0FyZWFCb3R0b20iLCIkbWFpbk5ld3MiLCIkdG9nZ2xlTmV3cyIsIiR0b2dnbGVOZXdzQm90dG9tIiwiJG5ld3NBcmVhSXNIaWRkZW4iLCJuZXdzQXJlYUlzSGlkZGVuIiwiaGlkZSIsInNob3ciLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImF0dHIiLCJkZXRhY2giLCJwcmVwZW5kIiwiYXBwZW5kIiwiaXMiLCIkbWFpbiIsInRvZ2dsZUxlZnRCb3R0b20iLCJ0b2dnbGVSaWdodCIsInRvZ2dsZVRvcCIsIm5ld3Nlc1N0YXRlTWFuYWdlciIsIiRkaXJlY3Rpb24iLCJ0b2dnbGVOZXdzIiwiJGRlbGF5IiwiYW5pbWF0ZSIsImJvdHRvbSIsIm9wYWNpdHkiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCIkaXNQdXNoZWQiLCJ1bmRlZmluZWQiLCJyZXNpemUiLCJjbGljayJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxr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LHFCQUFPLEVBQUU7QUFBM0IsYUFBbEIsRUFBd0RILE1BQXhELENBN0RDOztBQUFBO0FBQUE7QUFBQSxtQkE4RERILGtCQUFrQixDQUFDLE9BQUQsQ0E5RGpCOztBQUFBO0FBQUE7QUFBQSxtQkErREQ7QUFBQTtBQUFBLG9DQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFBWXJCLFdBQVcsQ0FBQ0ksSUFBWixFQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUQsSUEvREM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVm1CLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBc0VlQSx5RUFBZixFLENBRUEsZ0U7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUFBO0FBQUEsSUFBSTVCLFNBQVMsR0FBR0MsQ0FBQyxDQUFDLFdBQUQsQ0FBakI7QUFFTyxJQUFNTyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDbEMsTUFBSTRCLFNBQVMsR0FBR3BDLFNBQVMsQ0FBQ2lCLElBQVYsQ0FBZSxVQUFmLENBQWhCO0FBQ0EsU0FBU21CLFNBQVMsSUFBSUMsU0FBZCxJQUE2QkQsU0FBUyxJQUFJLEdBQWxEO0FBQ0gsQ0FITSxDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBbkMsQ0FBQyxDQUFDYSxNQUFELENBQUQsQ0FBVXdCLE1BQVYsQ0FBaUJ2QywyREFBakI7QUFDQUUsQ0FBQyxDQUFDRiwyREFBRCxDQUFEO0FBRUFFLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJzQyxLQUFqQixDQUF1QjtBQUFBLFNBQU1YLG9FQUFVLENBQUNwQiwrRUFBZ0IsRUFBakIsQ0FBaEI7QUFBQSxDQUF2QixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIGxldCAkbWFpbkFyZWEgPSAkKFwiI21haW5BcmVhXCIpO1xuXG5jb25zdCBuZXdzQXJlYUlzSGlkZGVuID0gKCkgPT4ge1xuICAgIGxldCAkaXNQdXNoZWQgPSAkbWFpbkFyZWEuYXR0cihcImlzUHVzaGVkXCIpO1xuICAgIHJldHVybiAoKCRpc1B1c2hlZCA9PSB1bmRlZmluZWQpIHx8ICgkaXNQdXNoZWQgPT0gXCIxXCIpKTtcbn0gKi9cblxuaW1wb3J0IHsgbmV3c0FyZWFJc0hpZGRlbiB9IGZyb20gJy4vdXRpbHMvY29tbW9uLmpzJ1xuXG5jb25zdCBNeVJlc2l6ZSA9ICgpID0+IHtcblxuICAgIGxldCAkbWFpbkFyZWEgICAgICAgICA9ICQoXCIjbWFpbkFyZWFcIik7XG4gICAgbGV0ICRuZXdzQXJlYSAgICAgICAgID0gJChcIiNuZXdzQXJlYVwiKTtcbiAgICBsZXQgJG5ld3NBcmVhQm90dG9tICAgPSAkKFwiI25ld3NBcmVhQm90dG9tXCIpO1xuICAgIGxldCAkbWFpbk5ld3MgICAgICAgICA9ICQoXCIjbWFpbk5ld3NcIik7XG4gICAgbGV0ICR0b2dnbGVOZXdzICAgICAgID0gJChcIiN0b2dnbGVOZXdzXCIpO1xuICAgIGxldCAkdG9nZ2xlTmV3c0JvdHRvbSA9ICQoXCIjdG9nZ2xlTmV3c0JvdHRvbVwiKTtcblxuICAgIGxldCAkbmV3c0FyZWFJc0hpZGRlbiA9IG5ld3NBcmVhSXNIaWRkZW4oKTtcblxuICAgICR0b2dnbGVOZXdzQm90dG9tLmhpZGUoKTtcblxuICAgIGlmICghJG5ld3NBcmVhSXNIaWRkZW4pIHtcblxuICAgICAgICAkdG9nZ2xlTmV3cy5zaG93KCk7XG5cbiAgICAgICAgaWYgKCRtYWluQXJlYS5oYXNDbGFzcygnY29sLTgnKSkge1xuICAgICAgICAgICAgJG1haW5BcmVhLnJlbW92ZUNsYXNzKCdjb2wtOCcpO1xuICAgICAgICAgICAgJG1haW5BcmVhLmFkZENsYXNzKCdjb2wtMTInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY4cHgpJykubWF0Y2hlcykge1xuXG4gICAgICAgICAgICAkdG9nZ2xlTmV3cy5yZW1vdmVDbGFzcyhcInBvc2l0aW9uLWFic29sdXRlXCIpO1xuICAgICAgICAgICAgJHRvZ2dsZU5ld3MuYXR0cignc3R5bGUnLCAnJyk7XG4gICAgICAgICAgICAkdG9nZ2xlTmV3cy5hZGRDbGFzcygnY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICR0b2dnbGVOZXdzLmRldGFjaCgpO1xuICAgICAgICAgICAgJG1haW5BcmVhLnByZXBlbmQoJHRvZ2dsZU5ld3MpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICR0b2dnbGVOZXdzLmFkZENsYXNzKFwicG9zaXRpb24tYWJzb2x1dGVcIik7XG4gICAgICAgICAgICAkdG9nZ2xlTmV3cy5hdHRyKCdzdHlsZScsICd0b3A6MjVweDsnKTtcbiAgICAgICAgICAgICR0b2dnbGVOZXdzLnJlbW92ZUNsYXNzKCdjb250YWluZXInKTtcblxuICAgICAgICAgICAgJHRvZ2dsZU5ld3MuZGV0YWNoKCk7XG4gICAgICAgICAgICAkbWFpbkFyZWEuYXBwZW5kKCR0b2dnbGVOZXdzKTtcblxuICAgICAgICB9IFxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAkdG9nZ2xlTmV3cy5oaWRlKCk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjhweCknKS5tYXRjaGVzKSB7XG5cbiAgICAgICAgICAgICR0b2dnbGVOZXdzQm90dG9tLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKCRuZXdzQXJlYS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgICAgICRuZXdzQXJlYS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJG1haW5OZXdzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRtYWluQXJlYS5oYXNDbGFzcygnY29sLTgnKSkge1xuICAgICAgICAgICAgICAgICRtYWluQXJlYS5yZW1vdmVDbGFzcygnY29sLTgnKTtcbiAgICAgICAgICAgICAgICAkbWFpbkFyZWEuYWRkQ2xhc3MoJ2NvbC0xMicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJG5ld3NBcmVhLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICAkbmV3c0FyZWFCb3R0b20uc2hvdygpO1xuICAgICAgICAgICAgICAgICRtYWluTmV3cy5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKCRuZXdzQXJlYS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgJG5ld3NBcmVhLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbWFpbk5ld3Muc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJG1haW5BcmVhLmhhc0NsYXNzKCdjb2wtMTInKSkge1xuICAgICAgICAgICAgICAgICRtYWluQXJlYS5yZW1vdmVDbGFzcygnY29sLTEyJyk7XG4gICAgICAgICAgICAgICAgJG1haW5BcmVhLmFkZENsYXNzKCdjb2wtOCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJG5ld3NBcmVhLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgJG5ld3NBcmVhQm90dG9tLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkbWFpbk5ld3MuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlSZXNpemU7XG5cbi8vJCh3aW5kb3cpLnJlc2l6ZShNeVJlc2l6ZSk7XG4vLyQoTXlSZXNpemUpOyIsImxldCAkdG9nZ2xlTmV3cyA9ICQoXCIjdG9nZ2xlTmV3c1wiKTtcbmxldCAkbWFpbiAgICAgICA9ICQoJ21haW4nKTtcbmxldCAkbWFpbkFyZWEgICA9ICQoXCIjbWFpbkFyZWFcIik7XG5cbmNvbnN0IHRvZ2dsZUxlZnRCb3R0b20gPSBhc3luYyAoKSA9PiB7XG5cbiAgICAkbWFpbkFyZWEucmVtb3ZlQ2xhc3MoJ2NvbC04Jyk7XG4gICAgJG1haW5BcmVhLmFkZENsYXNzKCdjb2wtMTInKTtcblxuICAgICRtYWluLmFkZENsYXNzKCdwb3NpdGlvbi1yZWxhdGl2ZScpO1xuICAgICR0b2dnbGVOZXdzLnNob3coKTtcblxuICAgICRtYWluQXJlYS5hdHRyKFwiaXNQdXNoZWRcIiwgXCIwXCIpO1xuXG59XG5cbmNvbnN0IHRvZ2dsZVJpZ2h0ID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgJG1haW5BcmVhLnJlbW92ZUNsYXNzKCdjb2wtMTInKTtcbiAgICAkbWFpbkFyZWEuYWRkQ2xhc3MoJ2NvbC04Jyk7XG4gICAgICAgICAgICBcbiAgICAkbWFpbi5yZW1vdmVDbGFzcygncG9zaXRpb24tcmVsYXRpdmUnKTtcbiAgICAkdG9nZ2xlTmV3cy5oaWRlKCk7XG5cbiAgICAkbWFpbkFyZWEuYXR0cihcImlzUHVzaGVkXCIsIFwiMVwiKTtcblxufVxuXG5jb25zdCB0b2dnbGVUb3AgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAkbWFpbkFyZWEucmVtb3ZlQ2xhc3MoJ2NvbC04Jyk7XG4gICAgJG1haW5BcmVhLmFkZENsYXNzKCdjb2wtMTInKTtcblxuICAgICRtYWluQXJlYS5yZW1vdmVDbGFzcygncG9zaXRpb24tcmVsYXRpdmUnKTtcbiAgICAkdG9nZ2xlTmV3cy5oaWRlKCk7XG5cbiAgICAkbWFpbkFyZWEuYXR0cihcImlzUHVzaGVkXCIsIFwiMVwiKTtcblxufVxuXG5jb25zdCBuZXdzZXNTdGF0ZU1hbmFnZXIgPSBhc3luYyAoJGRpcmVjdGlvbikgPT4ge1xuXG4gICAgc3dpdGNoKCRkaXJlY3Rpb24pIHtcblxuICAgICAgICBjYXNlICdsZWZ0JzpcblxuICAgICAgICAgICAgdG9nZ2xlTGVmdEJvdHRvbSgpO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgIFxuICAgICAgICBjYXNlICdyaWdodCc6XG5cbiAgICAgICAgICAgIHRvZ2dsZVJpZ2h0KCk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2JvdHRvbSc6XG5cbiAgICAgICAgICAgIHRvZ2dsZUxlZnRCb3R0b20oKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICBcbiAgICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICAgICAgdG9nZ2xlVG9wKCk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG59XG5cbmNvbnN0IHRvZ2dsZU5ld3MgPSBhc3luYyAoJG5ld3NBcmVhSXNIaWRkZW4pID0+IHtcblxuICAgIGxldCAkdG9nZ2xlTmV3c0JvdHRvbSA9ICQoXCIjdG9nZ2xlTmV3c0JvdHRvbVwiKTtcbiAgICBsZXQgJG1haW5OZXdzICAgICAgICAgPSAkKFwiI21haW5OZXdzXCIpO1xuICAgIGxldCAkbmV3c0FyZWFCb3R0b20gICA9ICQoXCIjbmV3c0FyZWFCb3R0b21cIik7XG4gICAgbGV0ICRuZXdzQXJlYSAgICAgICAgID0gJChcIiNuZXdzQXJlYVwiKTtcbiAgICBsZXQgJGRlbGF5ICAgICAgICAgICAgPSAxNTA7XG5cbiAgICBpZiAoJG5ld3NBcmVhSXNIaWRkZW4pIHtcblxuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpLm1hdGNoZXMpIHtcblxuICAgICAgICAgICAgYXdhaXQgJG5ld3NBcmVhQm90dG9tLmFuaW1hdGUoe2JvdHRvbTogJ3RvZ2dsZScsIG9wYWNpdHk6IFwidG9nZ2xlXCJ9LCAkZGVsYXkpO1xuICAgICAgICAgICAgYXdhaXQgbmV3c2VzU3RhdGVNYW5hZ2VyKCdib3R0b20nKTtcblxuICAgICAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IHsgXG4gICAgICAgICAgICAgICAgJG1haW5OZXdzLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICR0b2dnbGVOZXdzQm90dG9tLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICR0b2dnbGVOZXdzLnJlbW92ZUNsYXNzKFwicG9zaXRpb24tYWJzb2x1dGVcIik7XG4gICAgICAgICAgICAgICAgJHRvZ2dsZU5ld3MuYXR0cignc3R5bGUnLCAnJyk7XG4gICAgICAgICAgICAgICAgJHRvZ2dsZU5ld3MuYWRkQ2xhc3MoJ2NvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgJHRvZ2dsZU5ld3MuZGV0YWNoKCk7XG4gICAgICAgICAgICAgICAgJG1haW5BcmVhLnByZXBlbmQoJHRvZ2dsZU5ld3MpO1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBhd2FpdCAkbmV3c0FyZWEuYW5pbWF0ZSh7bGVmdDogJ3RvZ2dsZScsIG9wYWNpdHk6IFwidG9nZ2xlXCJ9LCAkZGVsYXkpO1xuICAgICAgICAgICAgYXdhaXQgbmV3c2VzU3RhdGVNYW5hZ2VyKCdsZWZ0Jyk7XG5cbiAgICAgICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAkdG9nZ2xlTmV3cy5hZGRDbGFzcyhcInBvc2l0aW9uLWFic29sdXRlXCIpO1xuICAgICAgICAgICAgICAgICR0b2dnbGVOZXdzLmF0dHIoJ3N0eWxlJywgJ3RvcDoyNXB4OycpO1xuICAgICAgICAgICAgICAgICR0b2dnbGVOZXdzLnJlbW92ZUNsYXNzKCdjb250YWluZXInKTsgXG5cbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpLm1hdGNoZXMpIHtcblxuICAgICAgICAgICAgYXdhaXQgJG5ld3NBcmVhQm90dG9tLmFuaW1hdGUoe3RvcDogJ3RvZ2dsZScsIG9wYWNpdHk6IFwidG9nZ2xlXCJ9LCAkZGVsYXkpO1xuICAgICAgICAgICAgYXdhaXQgbmV3c2VzU3RhdGVNYW5hZ2VyKCd0b3AnKTtcblxuICAgICAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgICRtYWluTmV3cy5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAkdG9nZ2xlTmV3cy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJHRvZ2dsZU5ld3NCb3R0b20uc2hvdygpO1xuXG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGF3YWl0ICRuZXdzQXJlYS5hbmltYXRlKHtyaWdodDogJ3RvZ2dsZScsIG9wYWNpdHk6IFwidG9nZ2xlXCJ9LCAkZGVsYXkpO1xuICAgICAgICAgICAgYXdhaXQgbmV3c2VzU3RhdGVNYW5hZ2VyKCdyaWdodCcpO1xuICAgICAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+ICR0b2dnbGVOZXdzLmhpZGUoKSkoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZU5ld3NcblxuLy8gJCgnLnRvZ2dsZU5ld3MnKS5jbGljaygoKSA9PiB0b2dnbGVOZXdzKG5ld3NBcmVhSXNIaWRkZW4oKSkpOyIsImxldCAkbWFpbkFyZWEgPSAkKFwiI21haW5BcmVhXCIpO1xuXG5leHBvcnQgY29uc3QgbmV3c0FyZWFJc0hpZGRlbiA9ICgpID0+IHtcbiAgICBsZXQgJGlzUHVzaGVkID0gJG1haW5BcmVhLmF0dHIoXCJpc1B1c2hlZFwiKTtcbiAgICByZXR1cm4gKCgkaXNQdXNoZWQgPT0gdW5kZWZpbmVkKSB8fCAoJGlzUHVzaGVkID09IFwiMVwiKSk7XG59IiwiaW1wb3J0IE15UmVzaXplIGZyb20gJy4vZnJvbnQvYWRhcHRpdmVTaXplJ1xuaW1wb3J0IHRvZ2dsZU5ld3MgZnJvbSAnLi9mcm9udC90b2dnbGVOZXdzLmpzJ1xuaW1wb3J0IHsgbmV3c0FyZWFJc0hpZGRlbiB9IGZyb20gJy4vZnJvbnQvdXRpbHMvY29tbW9uLmpzJ1xuXG4kKHdpbmRvdykucmVzaXplKE15UmVzaXplKTtcbiQoTXlSZXNpemUpO1xuXG4kKCcudG9nZ2xlTmV3cycpLmNsaWNrKCgpID0+IHRvZ2dsZU5ld3MobmV3c0FyZWFJc0hpZGRlbigpKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==