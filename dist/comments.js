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
//let $mainArea = $("#mainArea");
var newsAreaIsHidden = function newsAreaIsHidden() {
  //let $isPushed = $mainArea.attr("isPushed");
  //return (($isPushed == undefined) || ($isPushed == "1"));
  return $('#newsArea').is(':visible');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZUhhbmRsZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbW1vbl9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiZHJvcHpvbmVIYW5kbGVycyIsImluaXRfcGFnaW5hdGlvbiIsInBhZ2luYXRpb25fY29kZSIsImdldF9wYWdpbmF0aW9uX2NvZGUiLCJEcm9wem9uZSIsImF1dG9EaXNjb3ZlciIsImZldGNoSW1nIiwiaW1hZ2VzIiwiaW5pdEFsbERyb3B6b25lIiwiZm9yRWFjaCIsImN1cnJlbnRfaW1hZ2UiLCJpbml0ZU9uZURyb3B6b25lIiwiZmllbGRfaW5kZXgiLCJpZCIsImlkRHJvcHpvbmUiLCJhY2NlcHRlZEZpbGVzIiwibWF4RmlsZXMiLCJpbml0Iiwib24iLCJmaWxlIiwieGhyIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJpbml0VGh1bWJuYWlsIiwiZmlsZXMiLCJyZW1vdmVGaWxlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJleGVjVGh1bWJuYWlsIiwiY3VycmVudF91cmwiLCJjdXJyZW50X2luZiIsImhlYWRlcnMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImNvbnRleHQiLCJjdXJyZW50RmlsZSIsIm5hbWUiLCJzaXplIiwiYWNjZXB0ZWQiLCJraW5kIiwidXBsb2FkIiwiZmlsZW5hbWUiLCJkYXRhVVJMIiwidXJsIiwicHVzaCIsImVtaXQiLCJjcmVhdGVUaHVtYm5haWxGcm9tVXJsIiwib3B0aW9ucyIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidGh1bWJuYWlsTWV0aG9kIiwidGh1bWJuYWlsIiwiY291bnRfdGFibGVfcmVjb3JkcyIsImNvdW50SXRlbXMiLCIkIiwicGFnaW5hdGlvbiIsIml0ZW1zIiwiZGlzcGxheWVkUGFnZXMiLCJjdXJyZW50UGFnZSIsInByZXZUZXh0IiwibmV4dFRleHQiLCJocmVmVGV4dFByZWZpeCIsImVsbGlwc2VQYWdlU2V0IiwibmV3c0FyZWFJc0hpZGRlbiIsImlzIiwicGFyYW1zIiwid2luZG93Iiwic2VhcmNoIiwicmVwbGFjZSIsInNwbGl0IiwicmVkdWNlIiwicCIsImUiLCJhIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidW5kZWZpbmVkIiwibmFtZVRhYmxlIiwidXJsX2Zvcl9jb21tb24iLCJkYXRhIiwicmVzdWx0IiwiY291bnRUYWJsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLDBFQUFnQjtBQUVoQkMsb0VBQWUsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGY7O0FBRUEsSUFBTUQsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFakJFLDJCQUZpQixHQUVDQyw0RUFBbUIsRUFGcEI7QUFJckJDLG9CQUFRLENBQUNDLFlBQVQsR0FBd0IsS0FBeEI7QUFKcUI7QUFBQSxtQkFNRkMsUUFBUSxDQUFDSixlQUFELENBTk47O0FBQUE7QUFNakJLLGtCQU5pQjtBQUFBO0FBQUEsbUJBT2ZDLGVBQWUsQ0FBQ0QsTUFBRCxFQUFTTCxlQUFULENBUEE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJGLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7QUFXQSxJQUFNUSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT0QsTUFBUCxFQUFlTCxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFcEJLLGtCQUFNLENBQUNFLE9BQVAsQ0FBZSxVQUFDQyxhQUFEO0FBQUEscUJBQW1CQyxnQkFBZ0IsQ0FBQ1QsZUFBRCxFQUFrQlEsYUFBbEIsQ0FBbkM7QUFBQSxhQUFmO0FBQ0FDLDRCQUFnQixDQUFDVCxlQUFELENBQWhCOztBQUhvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmTSxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCOztBQU9BLElBQU1HLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsa0JBQU9ULGVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCUSx5QkFBeEIsOERBQXdDLElBQXhDO0FBRWpCRSx1QkFGaUIsR0FFSCxDQUZHOztBQUdyQixnQkFBSUYsYUFBYSxJQUFJLElBQXJCLEVBQTJCO0FBQ3ZCRSx5QkFBVyxHQUFHRixhQUFhLENBQUNHLEVBQTVCO0FBQ0g7O0FBQ0dDLHNCQU5pQiwwQkFNYVosZUFOYixTQU0rQlUsV0FOL0I7QUFRckIsZ0JBQUlSLFFBQUosQ0FBYVUsVUFBYixFQUF5QjtBQUVyQkMsMkJBQWEsRUFBRSxTQUZNO0FBR3JCQyxzQkFBUSxFQUFFLENBSFc7QUFLckJDLGtCQUFJLEVBQUUsZ0JBQVk7QUFBQTs7QUFDZCxxQkFBS0MsRUFBTCxDQUFRLFNBQVIsRUFBbUIsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQVlDLFFBQVosRUFBeUI7QUFDeENBLDBCQUFRLENBQUNDLE1BQVQsQ0FBZ0IsaUJBQWhCLEVBQW1DcEIsZUFBbkM7QUFDQW1CLDBCQUFRLENBQUNDLE1BQVQsQ0FBZ0IsYUFBaEIsRUFBK0JWLFdBQS9CO0FBQ0gsaUJBSEQ7QUFJQSxxQkFBS00sRUFBTCxDQUFRLFdBQVIsRUFBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzNCLHNCQUFJLENBQUVBLElBQUksQ0FBQ0ksYUFBUCxJQUEwQixLQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFYLEtBQWlCLElBQS9DLEVBQXNEO0FBQ2xELHlCQUFJLENBQUNDLFVBQUwsQ0FBZ0IsS0FBSSxDQUFDRCxLQUFMLENBQVcsQ0FBWCxDQUFoQjtBQUNIO0FBQ0osaUJBSkQ7QUFLQSxxQkFBS04sRUFBTCxDQUFRLFNBQVIsRUFBbUI7QUFBQSx5QkFBTVEsUUFBUSxDQUFDQyxNQUFULEVBQU47QUFBQSxpQkFBbkI7O0FBQ0Esb0JBQUlqQixhQUFhLElBQUksSUFBckIsRUFBMkI7QUFDdkJrQiwrQkFBYSxDQUFDLElBQUQsRUFBT2xCLGFBQVAsQ0FBYjtBQUNIO0FBQ0o7QUFuQm9CLGFBQXpCOztBQVJxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQkMsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQWlDQSxJQUFNTCxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT0osZUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFVDJCLHVCQUZTLEdBRUssb0RBRkw7QUFHVEMsdUJBSFMsR0FHSztBQUFFNUIsNkJBQWUsRUFBZkE7QUFBRixhQUhMO0FBSVQ2QixtQkFKUyxHQUlLO0FBQUUsOEJBQWdCO0FBQWxCLGFBSkw7QUFBQTtBQUFBLG1CQU1hQyxLQUFLLENBQUNILFdBQUQsRUFBYztBQUN6Q0ksb0JBQU0sRUFBRSxNQURpQztBQUV6Q0Msa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLFdBQWYsQ0FGbUM7QUFHekNDLHFCQUFPLEVBQUVBO0FBSGdDLGFBQWQsQ0FObEI7O0FBQUE7QUFBQTtBQUFBLGtDQVVUTSxJQVZTOztBQUFBO0FBTVQ5QixrQkFOUztBQUFBLDhDQVlOQSxNQVpNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVJELFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZDs7QUFnQkEsSUFBTXNCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ1UsT0FBRCxFQUFVNUIsYUFBVixFQUE0QjtBQUU5QyxNQUFJNkIsV0FBVyxHQUFHO0FBQ2RDLFFBQUksRUFBRTlCLGFBQWEsQ0FBQzhCLElBRE47QUFFZEMsUUFBSSxFQUFFL0IsYUFBYSxDQUFDK0IsSUFGTjtBQUdkQyxZQUFRLEVBQUUsSUFISTtBQUlkQyxRQUFJLEVBQUUsT0FKUTtBQUtkQyxVQUFNLEVBQUU7QUFDSkMsY0FBUSxFQUFFbkMsYUFBYSxDQUFDOEI7QUFEcEIsS0FMTTtBQVFkTSxXQUFPLEVBQUVwQyxhQUFhLENBQUNxQztBQVJULEdBQWxCO0FBV0FULFNBQU8sQ0FBQ2QsS0FBUixDQUFjd0IsSUFBZCxDQUFtQlQsV0FBbkI7QUFDQUQsU0FBTyxDQUFDVyxJQUFSLENBQWEsV0FBYixFQUEwQlYsV0FBMUI7QUFDQUQsU0FBTyxDQUFDWSxzQkFBUixDQUNJWCxXQURKLEVBRUlELE9BQU8sQ0FBQ2EsT0FBUixDQUFnQkMsY0FGcEIsRUFHSWQsT0FBTyxDQUFDYSxPQUFSLENBQWdCRSxlQUhwQixFQUlJZixPQUFPLENBQUNhLE9BQVIsQ0FBZ0JHLGVBSnBCLEVBS0loQixPQUxKLEVBTUksVUFBQ2lCLFNBQUQsRUFBZTtBQUNYakIsV0FBTyxDQUFDVyxJQUFSLENBQWEsV0FBYixFQUEwQlYsV0FBMUIsRUFBdUNnQixTQUF2QztBQUNBakIsV0FBTyxDQUFDVyxJQUFSLENBQWEsVUFBYixFQUF5QlYsV0FBekI7QUFDSCxHQVRMO0FBWUgsQ0EzQkQ7O0FBNkJldkMsK0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBOztBQUVBLElBQU1DLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUd1RCxtRkFBbUIsQ0FBQyxVQUFELENBRnRCOztBQUFBO0FBRWhCQyxzQkFGZ0I7QUFHaEJ2RCwyQkFIZ0IsR0FHRUMsNEVBQW1CLEVBSHJCO0FBS3BCdUQsYUFBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJDLFVBQTNCLENBQXNDO0FBQ2xDQyxtQkFBSyxFQUFFSCxVQUQyQjtBQUVsQ0ksNEJBQWMsRUFBRSxDQUZrQjtBQUdsQ0MseUJBQVcsRUFBRTVELGVBSHFCO0FBSWxDNkQsc0JBQVEsRUFBRSxzQkFKd0I7QUFLbENDLHNCQUFRLEVBQUUsc0JBTHdCO0FBTWxDQyw0QkFBYyxFQUFFLEtBTmtCO0FBT2xDQyw0QkFBYyxFQUFFO0FBUGtCLGFBQXRDOztBQUxvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmakUsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7QUFpQmVBLDhFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1rRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDbEM7QUFDQTtBQUNBLFNBQU9ULENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZVUsRUFBZixDQUFrQixVQUFsQixDQUFQO0FBQ0gsQ0FKTTtBQU1BLElBQU1qRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFFckMsTUFBTWtFLE1BQU0sR0FBR0MsTUFBTSxDQUFDNUMsUUFBUCxDQUFnQjZDLE1BQWhCLENBQXVCQyxPQUF2QixDQUErQixHQUEvQixFQUFtQyxFQUFuQyxFQUF1Q0MsS0FBdkMsQ0FBNkMsR0FBN0MsRUFBa0RDLE1BQWxELENBQ1gsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDTixRQUFJQyxDQUFDLEdBQUdELENBQUMsQ0FBQ0gsS0FBRixDQUFRLEdBQVIsQ0FBUjtBQUNBRSxLQUFDLENBQUNHLGtCQUFrQixDQUFDRCxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQW5CLENBQUQsR0FBOEJDLGtCQUFrQixDQUFDRCxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQWhEO0FBQ0EsV0FBT0YsQ0FBUDtBQUNILEdBTFUsRUFLUixFQUxRLENBQWY7QUFRQSxTQUFRTixNQUFNLENBQUMsR0FBRCxDQUFOLEtBQWdCVSxTQUFqQixHQUE4QixDQUE5QixHQUFrQ1YsTUFBTSxDQUFDLEdBQUQsQ0FBL0M7QUFFSCxDQVpNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBLElBQU1iLG1CQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU93QixTQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUUzQkMsMEJBRjJCLEdBRVYsdUNBRlU7QUFHM0JDLGdCQUgyQixHQUdWO0FBQUUsc0JBQVEsWUFBVjtBQUF3QiwyQkFBYUY7QUFBckMsYUFIVTtBQUkzQmpELG1CQUoyQixHQUlWO0FBQUUsOEJBQWdCO0FBQWxCLGFBSlU7QUFBQTtBQUFBLG1CQU1MQyxLQUFLLENBQUNpRCxjQUFELEVBQWlCO0FBQzVDaEQsb0JBQU0sRUFBRSxNQURvQztBQUU1Q0Msa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU4QyxJQUFmLENBRnNDO0FBRzVDbkQscUJBQU8sRUFBRUE7QUFIbUMsYUFBakIsQ0FOQTs7QUFBQTtBQUFBO0FBQUEsaUNBVTNCTSxJQVYyQjs7QUFBQTtBQU0zQjhDLGtCQU4yQjtBQUFBLDZDQVl4QkEsTUFBTSxDQUFDQyxVQVppQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFuQjVCLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxHQUF6QixDIiwiZmlsZSI6Ii4vY29tbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb21tZW50cy5qc1wiKTtcbiIsImltcG9ydCBkcm9wem9uZUhhbmRsZXJzIGZyb20gJy4vZnJvbnQvZHJvcHpvbmVIYW5kbGVycy5qcydcbmltcG9ydCBpbml0X3BhZ2luYXRpb24gZnJvbSAnLi9mcm9udC9wYWdpbmF0aW9uLmpzJ1xuXG5kcm9wem9uZUhhbmRsZXJzKClcblxuaW5pdF9wYWdpbmF0aW9uKCkiLCJpbXBvcnQgeyBnZXRfcGFnaW5hdGlvbl9jb2RlIH0gZnJvbSAnLi91dGlscy9jb21tb24uanMnXG5cbmNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBsZXQgcGFnaW5hdGlvbl9jb2RlID0gZ2V0X3BhZ2luYXRpb25fY29kZSgpXG5cbiAgICBEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCBmZXRjaEltZyhwYWdpbmF0aW9uX2NvZGUpIFxuICAgIGF3YWl0IGluaXRBbGxEcm9wem9uZShpbWFnZXMsIHBhZ2luYXRpb25fY29kZSlcblxufVxuXG5jb25zdCBpbml0QWxsRHJvcHpvbmUgPSBhc3luYyAoaW1hZ2VzLCBwYWdpbmF0aW9uX2NvZGUpID0+IHtcblxuICAgIGltYWdlcy5mb3JFYWNoKChjdXJyZW50X2ltYWdlKSA9PiBpbml0ZU9uZURyb3B6b25lKHBhZ2luYXRpb25fY29kZSwgY3VycmVudF9pbWFnZSkpXG4gICAgaW5pdGVPbmVEcm9wem9uZShwYWdpbmF0aW9uX2NvZGUpXG5cbn1cblxuY29uc3QgaW5pdGVPbmVEcm9wem9uZSA9IGFzeW5jIChwYWdpbmF0aW9uX2NvZGUsIGN1cnJlbnRfaW1hZ2UgPSBudWxsKSA9PiB7XG5cbiAgICBsZXQgZmllbGRfaW5kZXggPSAwXG4gICAgaWYgKGN1cnJlbnRfaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgICBmaWVsZF9pbmRleCA9IGN1cnJlbnRfaW1hZ2UuaWRcbiAgICB9XG4gICAgbGV0IGlkRHJvcHpvbmUgID0gYCNteS1kcm9wem9uZS0ke3BhZ2luYXRpb25fY29kZX0ke2ZpZWxkX2luZGV4fWBcblxuICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG4gICAgICAgIG1heEZpbGVzOiAxLFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGFnaW5hdGlvbl9jb2RlXCIsIHBhZ2luYXRpb25fY29kZSlcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWVsZF9pbmRleFwiLCBmaWVsZF9pbmRleClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsZS5pbml0VGh1bWJuYWlsKSAmJiAodGhpcy5maWxlc1sxXSAhPSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZpbGUodGhpcy5maWxlc1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRfaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGV4ZWNUaHVtYm5haWwodGhpcywgY3VycmVudF9pbWFnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSlcblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jIChwYWdpbmF0aW9uX2NvZGUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2NvbW1lbnRfQ1JVRC9pbWdfQ1JVRC9nZXRfY29tbWVudF9waG90by5waHAnO1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgcGFnaW5hdGlvbl9jb2RlIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IGltYWdlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChjdXJyZW50X3VybCwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufVxuXG5jb25zdCBleGVjVGh1bWJuYWlsID0gKGNvbnRleHQsIGN1cnJlbnRfaW1hZ2UpID0+IHtcblxuICAgIGxldCBjdXJyZW50RmlsZSA9IHtcbiAgICAgICAgbmFtZTogY3VycmVudF9pbWFnZS5uYW1lLFxuICAgICAgICBzaXplOiBjdXJyZW50X2ltYWdlLnNpemUsXG4gICAgICAgIGFjY2VwdGVkOiB0cnVlLFxuICAgICAgICBraW5kOiAnaW1hZ2UnLFxuICAgICAgICB1cGxvYWQ6IHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiBjdXJyZW50X2ltYWdlLm5hbWUsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFVUkw6IGN1cnJlbnRfaW1hZ2UudXJsLFxuICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgY29udGV4dC5maWxlcy5wdXNoKGN1cnJlbnRGaWxlKTtcbiAgICBjb250ZXh0LmVtaXQoXCJhZGRlZGZpbGVcIiwgY3VycmVudEZpbGUpO1xuICAgIGNvbnRleHQuY3JlYXRlVGh1bWJuYWlsRnJvbVVybChcbiAgICAgICAgY3VycmVudEZpbGUsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxXaWR0aCxcbiAgICAgICAgY29udGV4dC5vcHRpb25zLnRodW1ibmFpbEhlaWdodCxcbiAgICAgICAgY29udGV4dC5vcHRpb25zLnRodW1ibmFpbE1ldGhvZCxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgKHRodW1ibmFpbCkgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5lbWl0KCd0aHVtYm5haWwnLCBjdXJyZW50RmlsZSwgdGh1bWJuYWlsKTtcbiAgICAgICAgICAgIGNvbnRleHQuZW1pdChcImNvbXBsZXRlXCIsIGN1cnJlbnRGaWxlKTtcbiAgICAgICAgfVxuICAgIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkcm9wem9uZUhhbmRsZXJzIiwiaW1wb3J0IHsgY291bnRfdGFibGVfcmVjb3JkcyB9IGZyb20gJy4vdXRpbHMvY29tbW9uX3NlcnZlci5qcydcbmltcG9ydCB7IGdldF9wYWdpbmF0aW9uX2NvZGUgfSBmcm9tICcuL3V0aWxzL2NvbW1vbi5qcydcblxuY29uc3QgaW5pdF9wYWdpbmF0aW9uID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgbGV0IGNvdW50SXRlbXMgPSBhd2FpdCBjb3VudF90YWJsZV9yZWNvcmRzKCdjb21tZW50cycpXG4gICAgbGV0IHBhZ2luYXRpb25fY29kZSA9IGdldF9wYWdpbmF0aW9uX2NvZGUoKVxuXG4gICAgJCgnI2FsdC1zdHlsZS1wYWdpbmF0aW9uJykucGFnaW5hdGlvbih7XG4gICAgICAgIGl0ZW1zOiBjb3VudEl0ZW1zLFxuICAgICAgICBkaXNwbGF5ZWRQYWdlczogMSxcbiAgICAgICAgY3VycmVudFBhZ2U6IHBhZ2luYXRpb25fY29kZSxcbiAgICAgICAgcHJldlRleHQ6ICc8c3Bhbj4mbGFxdW87PC9zcGFuPicsXG4gICAgICAgIG5leHRUZXh0OiAnPHNwYW4+JnJhcXVvOzwvc3Bhbj4nLFxuICAgICAgICBocmVmVGV4dFByZWZpeDogJz9wPScsXG4gICAgICAgIGVsbGlwc2VQYWdlU2V0OiBmYWxzZVxuICAgIH0pXG5cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfcGFnaW5hdGlvbiIsIi8vbGV0ICRtYWluQXJlYSA9ICQoXCIjbWFpbkFyZWFcIik7XG5cbmV4cG9ydCBjb25zdCBuZXdzQXJlYUlzSGlkZGVuID0gKCkgPT4ge1xuICAgIC8vbGV0ICRpc1B1c2hlZCA9ICRtYWluQXJlYS5hdHRyKFwiaXNQdXNoZWRcIik7XG4gICAgLy9yZXR1cm4gKCgkaXNQdXNoZWQgPT0gdW5kZWZpbmVkKSB8fCAoJGlzUHVzaGVkID09IFwiMVwiKSk7XG4gICAgcmV0dXJuICQoJyNuZXdzQXJlYScpLmlzKCc6dmlzaWJsZScpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRfcGFnaW5hdGlvbl9jb2RlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcGFyYW1zID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywnJykuc3BsaXQoJyYnKS5yZWR1Y2UoXG4gICAgICAgIChwLCBlKSA9PiB7XG4gICAgICAgICAgICBsZXQgYSA9IGUuc3BsaXQoJz0nKVxuICAgICAgICAgICAgcFtkZWNvZGVVUklDb21wb25lbnQoYVswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KGFbMV0pXG4gICAgICAgICAgICByZXR1cm4gcFxuICAgICAgICB9LCB7fVxuICAgICk7IFxuXG4gICAgcmV0dXJuIChwYXJhbXNbJ3AnXSA9PT0gdW5kZWZpbmVkKSA/IDEgOiBwYXJhbXNbJ3AnXVxuXG59ICIsImV4cG9ydCBjb25zdCBjb3VudF90YWJsZV9yZWNvcmRzID0gYXN5bmMgKG5hbWVUYWJsZSkgPT4ge1xuXG4gICAgbGV0IHVybF9mb3JfY29tbW9uID0gJy9JeHRsYW4tcGhwL3NyYy9EQi91dGlsc0RCL2NvbW1vbi5waHAnXG4gICAgbGV0IGRhdGEgICAgICAgICAgID0geyAnZ29hbCc6ICdjb3VudFRhYmxlJywgJ3RhYmxlTmFtZSc6IG5hbWVUYWJsZSB9XG4gICAgbGV0IGhlYWRlcnMgICAgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCByZXN1bHQgPSBhd2FpdCAoYXdhaXQgZmV0Y2godXJsX2Zvcl9jb21tb24sIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiByZXN1bHQuY291bnRUYWJsZVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==