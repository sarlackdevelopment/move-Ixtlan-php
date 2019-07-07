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


Object(_front_dropzoneHandlers_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
            images.forEach(function (current_image) {
              return initeOneDropzone(pagination_code, current_image);
            });
            initeOneDropzone(pagination_code);

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
}();

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
/*! exports provided: newsAreaIsHidden, get_pagination_code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsAreaIsHidden", function() { return newsAreaIsHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_pagination_code", function() { return get_pagination_code; });
var $mainArea = $("#mainArea");
var newsAreaIsHidden = function newsAreaIsHidden() {
  var $isPushed = $mainArea.attr("isPushed");
  return $isPushed == undefined || $isPushed == "1";
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZUhhbmRsZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbW1vbl9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiZHJvcHpvbmVIYW5kbGVycyIsImluaXRfcGFnaW5hdGlvbiIsInBhZ2luYXRpb25fY29kZSIsImdldF9wYWdpbmF0aW9uX2NvZGUiLCJEcm9wem9uZSIsImF1dG9EaXNjb3ZlciIsImZldGNoSW1nIiwiaW1hZ2VzIiwiaW5pdEFsbERyb3B6b25lIiwiZm9yRWFjaCIsImN1cnJlbnRfaW1hZ2UiLCJpbml0ZU9uZURyb3B6b25lIiwiZmllbGRfaW5kZXgiLCJpZCIsImlkRHJvcHpvbmUiLCJhY2NlcHRlZEZpbGVzIiwibWF4RmlsZXMiLCJpbml0Iiwib24iLCJmaWxlIiwieGhyIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJpbml0VGh1bWJuYWlsIiwiZmlsZXMiLCJyZW1vdmVGaWxlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJleGVjVGh1bWJuYWlsIiwiY3VycmVudF91cmwiLCJjdXJyZW50X2luZiIsImhlYWRlcnMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImNvbnRleHQiLCJjdXJyZW50RmlsZSIsIm5hbWUiLCJzaXplIiwiYWNjZXB0ZWQiLCJraW5kIiwidXBsb2FkIiwiZmlsZW5hbWUiLCJkYXRhVVJMIiwidXJsIiwicHVzaCIsImVtaXQiLCJjcmVhdGVUaHVtYm5haWxGcm9tVXJsIiwib3B0aW9ucyIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidGh1bWJuYWlsTWV0aG9kIiwidGh1bWJuYWlsIiwiY291bnRfdGFibGVfcmVjb3JkcyIsImNvdW50SXRlbXMiLCIkIiwicGFnaW5hdGlvbiIsIml0ZW1zIiwiZGlzcGxheWVkUGFnZXMiLCJjdXJyZW50UGFnZSIsInByZXZUZXh0IiwibmV4dFRleHQiLCJocmVmVGV4dFByZWZpeCIsImVsbGlwc2VQYWdlU2V0IiwiJG1haW5BcmVhIiwibmV3c0FyZWFJc0hpZGRlbiIsIiRpc1B1c2hlZCIsImF0dHIiLCJ1bmRlZmluZWQiLCJwYXJhbXMiLCJ3aW5kb3ciLCJzZWFyY2giLCJyZXBsYWNlIiwic3BsaXQiLCJyZWR1Y2UiLCJwIiwiZSIsImEiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuYW1lVGFibGUiLCJ1cmxfZm9yX2NvbW1vbiIsImRhdGEiLCJyZXN1bHQiLCJjb3VudFRhYmxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtB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QUksQ0FBQ0MsU0FBTCxDQUFlZ0QsSUFBZixDQUZzQztBQUc1Q3JELHFCQUFPLEVBQUVBO0FBSG1DLGFBQWpCLENBTkE7O0FBQUE7QUFBQTtBQUFBLGlDQVUzQk0sSUFWMkI7O0FBQUE7QUFNM0JnRCxrQkFOMkI7QUFBQSw2Q0FZeEJBLE1BQU0sQ0FBQ0MsVUFaaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbkI5QixtQkFBbUI7QUFBQTtBQUFBO0FBQUEsR0FBekIsQyIsImZpbGUiOiIuL2NvbW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29tbWVudHMuanNcIik7XG4iLCJpbXBvcnQgZHJvcHpvbmVIYW5kbGVycyBmcm9tICcuL2Zyb250L2Ryb3B6b25lSGFuZGxlcnMuanMnXG5pbXBvcnQgaW5pdF9wYWdpbmF0aW9uIGZyb20gJy4vZnJvbnQvcGFnaW5hdGlvbi5qcydcblxuZHJvcHpvbmVIYW5kbGVycygpXG5cbmluaXRfcGFnaW5hdGlvbigpIiwiaW1wb3J0IHsgZ2V0X3BhZ2luYXRpb25fY29kZSB9IGZyb20gJy4vdXRpbHMvY29tbW9uLmpzJ1xuXG5jb25zdCBkcm9wem9uZUhhbmRsZXJzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgbGV0IHBhZ2luYXRpb25fY29kZSA9IGdldF9wYWdpbmF0aW9uX2NvZGUoKVxuXG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgZmV0Y2hJbWcocGFnaW5hdGlvbl9jb2RlKSBcbiAgICBhd2FpdCBpbml0QWxsRHJvcHpvbmUoaW1hZ2VzLCBwYWdpbmF0aW9uX2NvZGUpXG5cbn1cblxuY29uc3QgaW5pdEFsbERyb3B6b25lID0gYXN5bmMgKGltYWdlcywgcGFnaW5hdGlvbl9jb2RlKSA9PiB7XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoY3VycmVudF9pbWFnZSkgPT4gaW5pdGVPbmVEcm9wem9uZShwYWdpbmF0aW9uX2NvZGUsIGN1cnJlbnRfaW1hZ2UpKVxuICAgIGluaXRlT25lRHJvcHpvbmUocGFnaW5hdGlvbl9jb2RlKVxuXG59XG5cbmNvbnN0IGluaXRlT25lRHJvcHpvbmUgPSBhc3luYyAocGFnaW5hdGlvbl9jb2RlLCBjdXJyZW50X2ltYWdlID0gbnVsbCkgPT4ge1xuXG4gICAgbGV0IGZpZWxkX2luZGV4ID0gMFxuICAgIGlmIChjdXJyZW50X2ltYWdlICE9IG51bGwpIHtcbiAgICAgICAgZmllbGRfaW5kZXggPSBjdXJyZW50X2ltYWdlLmlkXG4gICAgfVxuICAgIGxldCBpZERyb3B6b25lICA9IGAjbXktZHJvcHpvbmUtJHtwYWdpbmF0aW9uX2NvZGV9JHtmaWVsZF9pbmRleH1gXG5cbiAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuICAgICAgICBtYXhGaWxlczogMSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm9uKFwic2VuZGluZ1wiLCAoZmlsZSwgeGhyLCBmb3JtRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBhZ2luYXRpb25fY29kZVwiLCBwYWdpbmF0aW9uX2NvZGUpXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmllbGRfaW5kZXhcIiwgZmllbGRfaW5kZXgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5vbihcImFkZGVkZmlsZVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGZpbGUuaW5pdFRodW1ibmFpbCkgJiYgKHRoaXMuZmlsZXNbMV0gIT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKHRoaXMuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgIGlmIChjdXJyZW50X2ltYWdlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBleGVjVGh1bWJuYWlsKHRoaXMsIGN1cnJlbnRfaW1hZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pXG5cbn1cblxuY29uc3QgZmV0Y2hJbWcgPSBhc3luYyAocGFnaW5hdGlvbl9jb2RlKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJ3NyYy9EQi9jb21tZW50X0NSVUQvaW1nX0NSVUQvZ2V0X2NvbW1lbnRfcGhvdG8ucGhwJztcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IHBhZ2luYXRpb25fY29kZSB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyBcbiAgICB9KSkuanNvbigpXG5cbiAgICByZXR1cm4gaW1hZ2VzXG5cbn1cblxuY29uc3QgZXhlY1RodW1ibmFpbCA9IChjb250ZXh0LCBjdXJyZW50X2ltYWdlKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudEZpbGUgPSB7XG4gICAgICAgIG5hbWU6IGN1cnJlbnRfaW1hZ2UubmFtZSxcbiAgICAgICAgc2l6ZTogY3VycmVudF9pbWFnZS5zaXplLFxuICAgICAgICBhY2NlcHRlZDogdHJ1ZSxcbiAgICAgICAga2luZDogJ2ltYWdlJyxcbiAgICAgICAgdXBsb2FkOiB7XG4gICAgICAgICAgICBmaWxlbmFtZTogY3VycmVudF9pbWFnZS5uYW1lLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhVVJMOiBjdXJyZW50X2ltYWdlLnVybCxcbiAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgIGNvbnRleHQuZmlsZXMucHVzaChjdXJyZW50RmlsZSk7XG4gICAgY29udGV4dC5lbWl0KFwiYWRkZWRmaWxlXCIsIGN1cnJlbnRGaWxlKTtcbiAgICBjb250ZXh0LmNyZWF0ZVRodW1ibmFpbEZyb21VcmwoXG4gICAgICAgIGN1cnJlbnRGaWxlLFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsV2lkdGgsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxIZWlnaHQsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxNZXRob2QsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgICh0aHVtYm5haWwpID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuZW1pdCgndGh1bWJuYWlsJywgY3VycmVudEZpbGUsIHRodW1ibmFpbCk7XG4gICAgICAgICAgICBjb250ZXh0LmVtaXQoXCJjb21wbGV0ZVwiLCBjdXJyZW50RmlsZSk7XG4gICAgICAgIH1cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJvcHpvbmVIYW5kbGVycyIsImltcG9ydCB7IGNvdW50X3RhYmxlX3JlY29yZHMgfSBmcm9tICcuL3V0aWxzL2NvbW1vbl9zZXJ2ZXIuanMnXG5pbXBvcnQgeyBnZXRfcGFnaW5hdGlvbl9jb2RlIH0gZnJvbSAnLi91dGlscy9jb21tb24uanMnXG5cbmNvbnN0IGluaXRfcGFnaW5hdGlvbiA9IGFzeW5jICgpID0+IHtcblxuICAgIGxldCBjb3VudEl0ZW1zID0gYXdhaXQgY291bnRfdGFibGVfcmVjb3JkcygnY29tbWVudHMnKVxuICAgIGxldCBwYWdpbmF0aW9uX2NvZGUgPSBnZXRfcGFnaW5hdGlvbl9jb2RlKClcblxuICAgICQoJyNhbHQtc3R5bGUtcGFnaW5hdGlvbicpLnBhZ2luYXRpb24oe1xuICAgICAgICBpdGVtczogY291bnRJdGVtcyxcbiAgICAgICAgZGlzcGxheWVkUGFnZXM6IDEsXG4gICAgICAgIGN1cnJlbnRQYWdlOiBwYWdpbmF0aW9uX2NvZGUsXG4gICAgICAgIHByZXZUZXh0OiAnPHNwYW4+JmxhcXVvOzwvc3Bhbj4nLFxuICAgICAgICBuZXh0VGV4dDogJzxzcGFuPiZyYXF1bzs8L3NwYW4+JyxcbiAgICAgICAgaHJlZlRleHRQcmVmaXg6ICc/cD0nLFxuICAgICAgICBlbGxpcHNlUGFnZVNldDogZmFsc2VcbiAgICB9KVxuXG59IFxuXG5leHBvcnQgZGVmYXVsdCBpbml0X3BhZ2luYXRpb24iLCJsZXQgJG1haW5BcmVhID0gJChcIiNtYWluQXJlYVwiKTtcblxuZXhwb3J0IGNvbnN0IG5ld3NBcmVhSXNIaWRkZW4gPSAoKSA9PiB7XG4gICAgbGV0ICRpc1B1c2hlZCA9ICRtYWluQXJlYS5hdHRyKFwiaXNQdXNoZWRcIik7XG4gICAgcmV0dXJuICgoJGlzUHVzaGVkID09IHVuZGVmaW5lZCkgfHwgKCRpc1B1c2hlZCA9PSBcIjFcIikpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0X3BhZ2luYXRpb25fY29kZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsJycpLnNwbGl0KCcmJykucmVkdWNlKFxuICAgICAgICAocCwgZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGEgPSBlLnNwbGl0KCc9JylcbiAgICAgICAgICAgIHBbZGVjb2RlVVJJQ29tcG9uZW50KGFbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChhWzFdKVxuICAgICAgICAgICAgcmV0dXJuIHBcbiAgICAgICAgfSwge31cbiAgICApOyBcblxuICAgIHJldHVybiAocGFyYW1zWydwJ10gPT09IHVuZGVmaW5lZCkgPyAxIDogcGFyYW1zWydwJ11cblxufSAiLCJleHBvcnQgY29uc3QgY291bnRfdGFibGVfcmVjb3JkcyA9IGFzeW5jIChuYW1lVGFibGUpID0+IHtcblxuICAgIGxldCB1cmxfZm9yX2NvbW1vbiA9ICcvSXh0bGFuLXBocC9zcmMvREIvdXRpbHNEQi9jb21tb24ucGhwJ1xuICAgIGxldCBkYXRhICAgICAgICAgICA9IHsgJ2dvYWwnOiAnY291bnRUYWJsZScsICd0YWJsZU5hbWUnOiBuYW1lVGFibGUgfVxuICAgIGxldCBoZWFkZXJzICAgICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgKGF3YWl0IGZldGNoKHVybF9mb3JfY29tbW9uLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyBcbiAgICB9KSkuanNvbigpXG5cbiAgICByZXR1cm4gcmVzdWx0LmNvdW50VGFibGVcblxufSJdLCJzb3VyY2VSb290IjoiIn0=