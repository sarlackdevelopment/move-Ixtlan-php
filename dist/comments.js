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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/comments.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_dropzoneHandlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front/dropzoneHandlers.js */ "./src/front/dropzoneHandlers.js");
/* harmony import */ var _front_pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front/pagination.js */ "./src/front/pagination.js");

 // Инициализация дропзон отзывов

Object(_front_dropzoneHandlers_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Инициализация пагинации

Object(_front_pagination_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/front/dropzoneHandlers.js":
/*!***************************************!*\
  !*** ./src/front/dropzoneHandlers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/common.js */ "./src/front/utils/common.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var dropzoneHandlers =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var pagination_code, images;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pagination_code = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["get_pagination_code"])();
            Dropzone.autoDiscover = false;
            _context.next = 4;
            return fetchImg(pagination_code);

          case 4:
            images = _context.sent;
            _context.next = 7;
            return initAllDropzone(images, pagination_code);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function dropzoneHandlers() {
    return _ref.apply(this, arguments);
  };
}();

var initAllDropzone =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(images, pagination_code) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            initeOneDropzone(pagination_code);
            images.forEach(function (current_image) {
              return initeOneDropzone(pagination_code, current_image);
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function initAllDropzone(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var initeOneDropzone =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(pagination_code) {
    var current_image,
        field_index,
        idDropzone,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            current_image = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
            field_index = 0;

            if (current_image != null) {
              field_index = current_image.id;
            }

            idDropzone = "#my-dropzone-".concat(pagination_code).concat(field_index);
            new Dropzone(idDropzone, {
              acceptedFiles: "image/*",
              maxFiles: 1,
              init: function init() {
                var _this = this;

                this.on("sending", function (file, xhr, formData) {
                  formData.append("pagination_code", pagination_code);
                  formData.append("field_index", field_index);
                });
                this.on("addedfile", function (file) {
                  if (!file.initThumbnail && _this.files[1] != null) {
                    _this.removeFile(_this.files[0]);
                  }
                });
                this.on("success", function () {
                  return location.reload();
                });

                if (current_image != null) {
                  execThumbnail(this, current_image);
                }
              }
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function initeOneDropzone(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var fetchImg =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(pagination_code) {
    var current_url, current_inf, headers, images;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            current_url = 'src/DB/comment_CRUD/img_CRUD/get_comment_photo.php';
            current_inf = {
              pagination_code: pagination_code
            };
            headers = {
              'Content-Type': 'application/json'
            };
            _context4.next = 5;
            return fetch(current_url, {
              method: 'POST',
              body: JSON.stringify(current_inf),
              headers: headers
            });

          case 5:
            _context4.next = 7;
            return _context4.sent.json();

          case 7:
            images = _context4.sent;
            return _context4.abrupt("return", images);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchImg(_x4) {
    return _ref4.apply(this, arguments);
  };
}(); // DRY - перенести в утилиты


var execThumbnail = function execThumbnail(context, current_image) {
  var currentFile = {
    name: current_image.name,
    size: current_image.size,
    accepted: true,
    kind: 'image',
    upload: {
      filename: current_image.name
    },
    dataURL: current_image.url
  };
  context.files.push(currentFile);
  context.emit("addedfile", currentFile);
  context.createThumbnailFromUrl(currentFile, context.options.thumbnailWidth, context.options.thumbnailHeight, context.options.thumbnailMethod, context, function (thumbnail) {
    context.emit('thumbnail', currentFile, thumbnail);
    context.emit("complete", currentFile);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (dropzoneHandlers);

/***/ }),

/***/ "./src/front/pagination.js":
/*!*********************************!*\
  !*** ./src/front/pagination.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_common_server_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/common_server.js */ "./src/front/utils/common_server.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/common.js */ "./src/front/utils/common.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var init_pagination =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var countItems, pagination_code;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_utils_common_server_js__WEBPACK_IMPORTED_MODULE_0__["count_table_records"])('comments');

          case 2:
            countItems = _context.sent;
            pagination_code = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["get_pagination_code"])();
            $('#alt-style-pagination').pagination({
              items: countItems,
              displayedPages: 1,
              currentPage: pagination_code,
              prevText: '<span>&laquo;</span>',
              nextText: '<span>&raquo;</span>',
              hrefTextPrefix: '?p=',
              ellipsePageSet: false
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init_pagination() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (init_pagination);

/***/ }),

/***/ "./src/front/utils/common.js":
/*!***********************************!*\
  !*** ./src/front/utils/common.js ***!
  \***********************************/
/*! exports provided: newsAreaIsHidden, hideNews, showNewsOnSM, showNewsOnLG, hideNewsAsync, showNewsOnSMAsync, showNewsOnLGAsync, get_pagination_code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsAreaIsHidden", function() { return newsAreaIsHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNews", function() { return hideNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNewsOnSM", function() { return showNewsOnSM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNewsOnLG", function() { return showNewsOnLG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNewsAsync", function() { return hideNewsAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNewsOnSMAsync", function() { return showNewsOnSMAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNewsOnLGAsync", function() { return showNewsOnLGAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_pagination_code", function() { return get_pagination_code; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var $mainArea = $("#mainArea");
var $newsArea = $("#newsArea");
var $newsAreaBottom = $("#newsAreaBottom");
var $mainNews = $("#mainNews");
var newsAreaIsHidden = function newsAreaIsHidden() {
  var $isPushed = $mainArea.attr("isPushed");
  return $isPushed == undefined || $isPushed == "1";
};
var hideNews = function hideNews() {
  $newsArea.hide();
  $newsAreaBottom.hide();
  $mainNews.hide();
};
var showNewsOnSM = function showNewsOnSM() {
  $newsArea.hide();
  $newsAreaBottom.show();
  $mainNews.show();
};
var showNewsOnLG = function showNewsOnLG() {
  $newsArea.show();
  $newsAreaBottom.hide();
  $mainNews.hide();
};
var hideNewsAsync =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return $newsArea.fadeOut("slow");

          case 2:
            _context.next = 4;
            return $newsAreaBottom.fadeOut("slow");

          case 4:
            _context.next = 6;
            return $mainNews.fadeOut("slow");

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hideNewsAsync() {
    return _ref.apply(this, arguments);
  };
}();
var showNewsOnSMAsync =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return $newsArea.fadeOut("slow");

          case 2:
            _context2.next = 4;
            return $newsAreaBottom.fadeIn("slow");

          case 4:
            _context2.next = 6;
            return $mainNews.fadeIn("slow");

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function showNewsOnSMAsync() {
    return _ref2.apply(this, arguments);
  };
}();
var showNewsOnLGAsync =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return $newsArea.fadeIn("slow");

          case 2:
            _context3.next = 4;
            return $newsAreaBottom.fadeOut("slow");

          case 4:
            _context3.next = 6;
            return $mainNews.fadeOut("slow");

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function showNewsOnLGAsync() {
    return _ref3.apply(this, arguments);
  };
}();
var get_pagination_code = function get_pagination_code() {
  var params = window.location.search.replace('?', '').split('&').reduce(function (p, e) {
    var a = e.split('=');
    p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
    return p;
  }, {});
  return params['p'] === undefined ? 1 : params['p'];
};

/***/ }),

/***/ "./src/front/utils/common_server.js":
/*!******************************************!*\
  !*** ./src/front/utils/common_server.js ***!
  \******************************************/
/*! exports provided: count_table_records */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count_table_records", function() { return count_table_records; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var count_table_records =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(nameTable) {
    var url_for_common, data, headers, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url_for_common = '/Ixtlan-php/src/DB/utilsDB/common.php';
            data = {
              'goal': 'countTable',
              'tableName': nameTable
            };
            headers = {
              'Content-Type': 'application/json'
            };
            _context.next = 5;
            return fetch(url_for_common, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: headers
            });

          case 5:
            _context.next = 7;
            return _context.sent.json();

          case 7:
            result = _context.sent;
            return _context.abrupt("return", result.countTable);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function count_table_records(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZUhhbmRsZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbW1vbl9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiZHJvcHpvbmVIYW5kbGVycyIsImluaXRfcGFnaW5hdGlvbiIsInBhZ2luYXRpb25fY29kZSIsImdldF9wYWdpbmF0aW9uX2NvZGUiLCJEcm9wem9uZSIsImF1dG9EaXNjb3ZlciIsImZldGNoSW1nIiwiaW1hZ2VzIiwiaW5pdEFsbERyb3B6b25lIiwiaW5pdGVPbmVEcm9wem9uZSIsImZvckVhY2giLCJjdXJyZW50X2ltYWdlIiwiZmllbGRfaW5kZXgiLCJpZCIsImlkRHJvcHpvbmUiLCJhY2NlcHRlZEZpbGVzIiwibWF4RmlsZXMiLCJpbml0Iiwib24iLCJmaWxlIiwieGhyIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJpbml0VGh1bWJuYWlsIiwiZmlsZXMiLCJyZW1vdmVGaWxlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJleGVjVGh1bWJuYWlsIiwiY3VycmVudF91cmwiLCJjdXJyZW50X2luZiIsImhlYWRlcnMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImNvbnRleHQiLCJjdXJyZW50RmlsZSIsIm5hbWUiLCJzaXplIiwiYWNjZXB0ZWQiLCJraW5kIiwidXBsb2FkIiwiZmlsZW5hbWUiLCJkYXRhVVJMIiwidXJsIiwicHVzaCIsImVtaXQiLCJjcmVhdGVUaHVtYm5haWxGcm9tVXJsIiwib3B0aW9ucyIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidGh1bWJuYWlsTWV0aG9kIiwidGh1bWJuYWlsIiwiY291bnRfdGFibGVfcmVjb3JkcyIsImNvdW50SXRlbXMiLCIkIiwicGFnaW5hdGlvbiIsIml0ZW1zIiwiZGlzcGxheWVkUGFnZXMiLCJjdXJyZW50UGFnZSIsInByZXZUZXh0IiwibmV4dFRleHQiLCJocmVmVGV4dFByZWZpeCIsImVsbGlwc2VQYWdlU2V0IiwiJG1haW5BcmVhIiwiJG5ld3NBcmVhIiwiJG5ld3NBcmVhQm90dG9tIiwiJG1haW5OZXdzIiwibmV3c0FyZWFJc0hpZGRlbiIsIiRpc1B1c2hlZCIsImF0dHIiLCJ1bmRlZmluZWQiLCJoaWRlTmV3cyIsImhpZGUiLCJzaG93TmV3c09uU00iLCJzaG93Iiwic2hvd05ld3NPbkxHIiwiaGlkZU5ld3NBc3luYyIsImZhZGVPdXQiLCJzaG93TmV3c09uU01Bc3luYyIsImZhZGVJbiIsInNob3dOZXdzT25MR0FzeW5jIiwicGFyYW1zIiwid2luZG93Iiwic2VhcmNoIiwicmVwbGFjZSIsInNwbGl0IiwicmVkdWNlIiwicCIsImUiLCJhIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZVRhYmxlIiwidXJsX2Zvcl9jb21tb24iLCJkYXRhIiwicmVzdWx0IiwiY291bnRUYWJsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJB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O0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFuQjNDLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxHQUF6QixDIiwiZmlsZSI6Ii4vY29tbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb21tZW50cy5qc1wiKTtcbiIsImltcG9ydCBkcm9wem9uZUhhbmRsZXJzIGZyb20gJy4vZnJvbnQvZHJvcHpvbmVIYW5kbGVycy5qcydcbmltcG9ydCBpbml0X3BhZ2luYXRpb24gZnJvbSAnLi9mcm9udC9wYWdpbmF0aW9uLmpzJ1xuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQvtGC0LfRi9Cy0L7QslxuZHJvcHpvbmVIYW5kbGVycygpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC/0LDQs9C40L3QsNGG0LjQuFxuaW5pdF9wYWdpbmF0aW9uKCkiLCJpbXBvcnQgeyBnZXRfcGFnaW5hdGlvbl9jb2RlIH0gZnJvbSAnLi91dGlscy9jb21tb24uanMnXG5cbmNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBsZXQgcGFnaW5hdGlvbl9jb2RlID0gZ2V0X3BhZ2luYXRpb25fY29kZSgpXG5cbiAgICBEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCBmZXRjaEltZyhwYWdpbmF0aW9uX2NvZGUpIFxuICAgIGF3YWl0IGluaXRBbGxEcm9wem9uZShpbWFnZXMsIHBhZ2luYXRpb25fY29kZSlcblxufVxuXG5jb25zdCBpbml0QWxsRHJvcHpvbmUgPSBhc3luYyAoaW1hZ2VzLCBwYWdpbmF0aW9uX2NvZGUpID0+IHtcblxuICAgIGluaXRlT25lRHJvcHpvbmUocGFnaW5hdGlvbl9jb2RlKVxuICAgIGltYWdlcy5mb3JFYWNoKGN1cnJlbnRfaW1hZ2UgPT4gaW5pdGVPbmVEcm9wem9uZShwYWdpbmF0aW9uX2NvZGUsIGN1cnJlbnRfaW1hZ2UpKVxuXG59XG5cbmNvbnN0IGluaXRlT25lRHJvcHpvbmUgPSBhc3luYyAocGFnaW5hdGlvbl9jb2RlLCBjdXJyZW50X2ltYWdlID0gbnVsbCkgPT4ge1xuXG4gICAgbGV0IGZpZWxkX2luZGV4ID0gMFxuICAgIGlmIChjdXJyZW50X2ltYWdlICE9IG51bGwpIHtcbiAgICAgICAgZmllbGRfaW5kZXggPSBjdXJyZW50X2ltYWdlLmlkXG4gICAgfVxuICAgIGxldCBpZERyb3B6b25lID0gYCNteS1kcm9wem9uZS0ke3BhZ2luYXRpb25fY29kZX0ke2ZpZWxkX2luZGV4fWBcblxuICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG4gICAgICAgIG1heEZpbGVzOiAxLFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGFnaW5hdGlvbl9jb2RlXCIsIHBhZ2luYXRpb25fY29kZSlcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWVsZF9pbmRleFwiLCBmaWVsZF9pbmRleClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsZS5pbml0VGh1bWJuYWlsKSAmJiAodGhpcy5maWxlc1sxXSAhPSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZpbGUodGhpcy5maWxlc1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRfaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGV4ZWNUaHVtYm5haWwodGhpcywgY3VycmVudF9pbWFnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSlcblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jIChwYWdpbmF0aW9uX2NvZGUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2NvbW1lbnRfQ1JVRC9pbWdfQ1JVRC9nZXRfY29tbWVudF9waG90by5waHAnO1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgcGFnaW5hdGlvbl9jb2RlIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IGltYWdlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChjdXJyZW50X3VybCwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufVxuXG4vLyBEUlkgLSDQv9C10YDQtdC90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbmNvbnN0IGV4ZWNUaHVtYm5haWwgPSAoY29udGV4dCwgY3VycmVudF9pbWFnZSkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRGaWxlID0ge1xuICAgICAgICBuYW1lOiBjdXJyZW50X2ltYWdlLm5hbWUsXG4gICAgICAgIHNpemU6IGN1cnJlbnRfaW1hZ2Uuc2l6ZSxcbiAgICAgICAgYWNjZXB0ZWQ6IHRydWUsXG4gICAgICAgIGtpbmQ6ICdpbWFnZScsXG4gICAgICAgIHVwbG9hZDoge1xuICAgICAgICAgICAgZmlsZW5hbWU6IGN1cnJlbnRfaW1hZ2UubmFtZSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YVVSTDogY3VycmVudF9pbWFnZS51cmwsXG4gICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICBjb250ZXh0LmZpbGVzLnB1c2goY3VycmVudEZpbGUpO1xuICAgIGNvbnRleHQuZW1pdChcImFkZGVkZmlsZVwiLCBjdXJyZW50RmlsZSk7XG4gICAgY29udGV4dC5jcmVhdGVUaHVtYm5haWxGcm9tVXJsKFxuICAgICAgICBjdXJyZW50RmlsZSxcbiAgICAgICAgY29udGV4dC5vcHRpb25zLnRodW1ibmFpbFdpZHRoLFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsSGVpZ2h0LFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsTWV0aG9kLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICAodGh1bWJuYWlsKSA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmVtaXQoJ3RodW1ibmFpbCcsIGN1cnJlbnRGaWxlLCB0aHVtYm5haWwpO1xuICAgICAgICAgICAgY29udGV4dC5lbWl0KFwiY29tcGxldGVcIiwgY3VycmVudEZpbGUpO1xuICAgICAgICB9XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3B6b25lSGFuZGxlcnMiLCJpbXBvcnQgeyBjb3VudF90YWJsZV9yZWNvcmRzIH0gZnJvbSAnLi91dGlscy9jb21tb25fc2VydmVyLmpzJ1xuaW1wb3J0IHsgZ2V0X3BhZ2luYXRpb25fY29kZSB9IGZyb20gJy4vdXRpbHMvY29tbW9uLmpzJ1xuXG5jb25zdCBpbml0X3BhZ2luYXRpb24gPSBhc3luYyAoKSA9PiB7XG5cbiAgICBsZXQgY291bnRJdGVtcyA9IGF3YWl0IGNvdW50X3RhYmxlX3JlY29yZHMoJ2NvbW1lbnRzJylcbiAgICBsZXQgcGFnaW5hdGlvbl9jb2RlID0gZ2V0X3BhZ2luYXRpb25fY29kZSgpXG5cbiAgICAkKCcjYWx0LXN0eWxlLXBhZ2luYXRpb24nKS5wYWdpbmF0aW9uKHtcbiAgICAgICAgaXRlbXM6IGNvdW50SXRlbXMsXG4gICAgICAgIGRpc3BsYXllZFBhZ2VzOiAxLFxuICAgICAgICBjdXJyZW50UGFnZTogcGFnaW5hdGlvbl9jb2RlLFxuICAgICAgICBwcmV2VGV4dDogJzxzcGFuPiZsYXF1bzs8L3NwYW4+JyxcbiAgICAgICAgbmV4dFRleHQ6ICc8c3Bhbj4mcmFxdW87PC9zcGFuPicsXG4gICAgICAgIGhyZWZUZXh0UHJlZml4OiAnP3A9JyxcbiAgICAgICAgZWxsaXBzZVBhZ2VTZXQ6IGZhbHNlXG4gICAgfSlcblxufSBcblxuZXhwb3J0IGRlZmF1bHQgaW5pdF9wYWdpbmF0aW9uIiwibGV0ICRtYWluQXJlYSAgICAgICA9ICQoXCIjbWFpbkFyZWFcIik7XG5sZXQgJG5ld3NBcmVhICAgICAgID0gJChcIiNuZXdzQXJlYVwiKVxubGV0ICRuZXdzQXJlYUJvdHRvbSA9ICQoXCIjbmV3c0FyZWFCb3R0b21cIilcbmxldCAkbWFpbk5ld3MgICAgICAgPSAkKFwiI21haW5OZXdzXCIpXG5cbmV4cG9ydCBjb25zdCBuZXdzQXJlYUlzSGlkZGVuID0gKCkgPT4ge1xuICAgIGxldCAkaXNQdXNoZWQgPSAkbWFpbkFyZWEuYXR0cihcImlzUHVzaGVkXCIpO1xuICAgIHJldHVybiAoKCRpc1B1c2hlZCA9PSB1bmRlZmluZWQpIHx8ICgkaXNQdXNoZWQgPT0gXCIxXCIpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZGVOZXdzID0gKCkgPT4ge1xuICAgICRuZXdzQXJlYS5oaWRlKClcbiAgICAkbmV3c0FyZWFCb3R0b20uaGlkZSgpXG4gICAgJG1haW5OZXdzLmhpZGUoKVxufVxuXG5leHBvcnQgY29uc3Qgc2hvd05ld3NPblNNID0gKCkgPT4ge1xuICAgICRuZXdzQXJlYS5oaWRlKClcbiAgICAkbmV3c0FyZWFCb3R0b20uc2hvdygpXG4gICAgJG1haW5OZXdzLnNob3coKVxufVxuXG5leHBvcnQgY29uc3Qgc2hvd05ld3NPbkxHID0gKCkgPT4ge1xuICAgICRuZXdzQXJlYS5zaG93KClcbiAgICAkbmV3c0FyZWFCb3R0b20uaGlkZSgpXG4gICAgJG1haW5OZXdzLmhpZGUoKVxufVxuXG5leHBvcnQgY29uc3QgaGlkZU5ld3NBc3luYyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCAkbmV3c0FyZWEuZmFkZU91dChcInNsb3dcIilcbiAgICBhd2FpdCAkbmV3c0FyZWFCb3R0b20uZmFkZU91dChcInNsb3dcIilcbiAgICBhd2FpdCAkbWFpbk5ld3MuZmFkZU91dChcInNsb3dcIilcbn1cblxuZXhwb3J0IGNvbnN0IHNob3dOZXdzT25TTUFzeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0ICRuZXdzQXJlYS5mYWRlT3V0KFwic2xvd1wiKVxuICAgIGF3YWl0ICRuZXdzQXJlYUJvdHRvbS5mYWRlSW4oXCJzbG93XCIpXG4gICAgYXdhaXQgJG1haW5OZXdzLmZhZGVJbihcInNsb3dcIilcbn0gXG5cbmV4cG9ydCBjb25zdCBzaG93TmV3c09uTEdBc3luYyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCAkbmV3c0FyZWEuZmFkZUluKFwic2xvd1wiKVxuICAgIGF3YWl0ICRuZXdzQXJlYUJvdHRvbS5mYWRlT3V0KFwic2xvd1wiKVxuICAgIGF3YWl0ICRtYWluTmV3cy5mYWRlT3V0KFwic2xvd1wiKVxufSBcblxuZXhwb3J0IGNvbnN0IGdldF9wYWdpbmF0aW9uX2NvZGUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCcnKS5zcGxpdCgnJicpLnJlZHVjZShcbiAgICAgICAgKHAsIGUpID0+IHtcbiAgICAgICAgICAgIGxldCBhID0gZS5zcGxpdCgnPScpXG4gICAgICAgICAgICBwW2RlY29kZVVSSUNvbXBvbmVudChhWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQoYVsxXSlcbiAgICAgICAgICAgIHJldHVybiBwXG4gICAgICAgIH0sIHt9XG4gICAgKTsgXG5cbiAgICByZXR1cm4gKHBhcmFtc1sncCddID09PSB1bmRlZmluZWQpID8gMSA6IHBhcmFtc1sncCddXG5cbn0gIiwiZXhwb3J0IGNvbnN0IGNvdW50X3RhYmxlX3JlY29yZHMgPSBhc3luYyAobmFtZVRhYmxlKSA9PiB7XG5cbiAgICBsZXQgdXJsX2Zvcl9jb21tb24gPSAnL0l4dGxhbi1waHAvc3JjL0RCL3V0aWxzREIvY29tbW9uLnBocCdcbiAgICBsZXQgZGF0YSAgICAgICAgICAgPSB7ICdnb2FsJzogJ2NvdW50VGFibGUnLCAndGFibGVOYW1lJzogbmFtZVRhYmxlIH1cbiAgICBsZXQgaGVhZGVycyAgICAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IChhd2FpdCBmZXRjaCh1cmxfZm9yX2NvbW1vbiwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIHJlc3VsdC5jb3VudFRhYmxlXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9