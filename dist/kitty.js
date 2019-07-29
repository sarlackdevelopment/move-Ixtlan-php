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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/kitty.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/front/dropzones/dropzonesHandlers_Index.js":
/*!********************************************************!*\
  !*** ./src/front/dropzones/dropzonesHandlers_Index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dropzoneHandlers =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(tableName, prefixDropzone, targetFeild) {
    var params,
        apply_init,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : [];
            Dropzone.autoDiscover = false;

            if (!(params = 'common')) {
              _context2.next = 6;
              break;
            }

            initOneDropzone(prefixDropzone, targetFeild, 'common');
            _context2.next = 13;
            break;

          case 6:
            apply_init =
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(items) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", items.forEach(function (current) {
                          return initOneDropzone(prefixDropzone, targetFeild, current.id);
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function apply_init(_x4) {
                return _ref2.apply(this, arguments);
              };
            }();

            _context2.t0 = apply_init;
            _context2.next = 10;
            return fetchImg(tableName, params);

          case 10:
            _context2.t1 = _context2.sent;
            _context2.next = 13;
            return (0, _context2.t0)(_context2.t1);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function dropzoneHandlers(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var initOneDropzone =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(prefixDropzone, targetFeild, valueTargetFeild) {
    var idDropzone;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idDropzone = "#".concat(prefixDropzone, "-").concat(valueTargetFeild);
            new Dropzone(idDropzone, {
              acceptedFiles: "image/*",
              init: function init() {
                this.on("sending", function (file, xhr, formData) {
                  formData.append(targetFeild, valueTargetFeild);
                });
              }
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function initOneDropzone(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

var fetchImg =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(tableName) {
    var params,
        current_url,
        current_inf,
        headers,
        images,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            params = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : [];
            current_url = 'src/DB/exhibitioner_CRUD/exhibition_CRUD/get_exhibition_photo.php';
            current_inf = {
              tableName: tableName,
              params: params
            };
            headers = {
              'Content-Type': 'application/json'
            };
            _context4.next = 6;
            return fetch(current_url, {
              method: 'POST',
              body: JSON.stringify(current_inf),
              headers: headers
            });

          case 6:
            _context4.next = 8;
            return _context4.sent.json();

          case 8:
            images = _context4.sent;
            return _context4.abrupt("return", images);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchImg(_x8) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (dropzoneHandlers);

/***/ }),

/***/ "./src/front/dropzones/dropzonesHandlers_kitty.js":
/*!********************************************************!*\
  !*** ./src/front/dropzones/dropzonesHandlers_kitty.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dropzoneHandlers =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(tableName) {
    var apply_init;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Dropzone.autoDiscover = false;

            apply_init =
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(items) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", items.forEach(function (current) {
                          return initOneDropzone(current.kitty_id, current.periods_id);
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function apply_init(_x2) {
                return _ref2.apply(this, arguments);
              };
            }();

            _context2.t0 = apply_init;
            _context2.next = 5;
            return fetchImg(tableName);

          case 5:
            _context2.t1 = _context2.sent;
            _context2.next = 8;
            return (0, _context2.t0)(_context2.t1);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function dropzoneHandlers(_x) {
    return _ref.apply(this, arguments);
  };
}();

var initOneDropzone =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(kitty_id, periods_id) {
    var idDropzone;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idDropzone = "#my-dropzone-i".concat(kitty_id, "-i").concat(periods_id);
            new Dropzone(idDropzone, {
              acceptedFiles: "image/*",
              init: function init() {
                this.on("sending", function (file, xhr, formData) {
                  formData.append("kitty_id", kitty_id);
                  formData.append("period_id", periods_id);
                });
              }
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function initOneDropzone(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var fetchImg =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(tableName) {
    var current_url, current_inf, headers, images;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            current_url = 'src/DB/exhibitioner_CRUD/exhibition_CRUD/get_exhibition_photo.php';
            current_inf = {
              tableName: tableName
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

  return function fetchImg(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (dropzoneHandlers);

/***/ }),

/***/ "./src/front/dropzones/dropzonesHandlers_kitty_thumbnail.js":
/*!******************************************************************!*\
  !*** ./src/front/dropzones/dropzonesHandlers_kitty_thumbnail.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dropzoneHandlersCommonThumbnail =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var apply_init;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Dropzone.autoDiscover = false;

            apply_init =
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(items) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", items.forEach(function (current) {
                          return initOneDropzone(current);
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function apply_init(_x) {
                return _ref2.apply(this, arguments);
              };
            }();

            _context2.t0 = apply_init;
            _context2.next = 5;
            return fetchImg();

          case 5:
            _context2.t1 = _context2.sent;
            _context2.next = 8;
            return (0, _context2.t0)(_context2.t1);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function dropzoneHandlersCommonThumbnail() {
    return _ref.apply(this, arguments);
  };
}();

var initOneDropzone =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(current) {
    var idDropzone;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idDropzone = "#my-dropzone-".concat(current.id);
            new Dropzone(idDropzone, {
              acceptedFiles: "image/*",
              maxFiles: 1,
              init: function init() {
                var _this = this;

                this.on("sending", function (file, xhr, formData) {
                  formData.append("kitty_id", current.id);
                  formData.append("period_id", current.brood_id);
                });
                this.on("addedfile", function (file) {
                  if (!file.initThumbnail && _this.files[1] != null) {
                    _this.removeFile(_this.files[0]);
                  }
                });
                this.on("success", function () {
                  return location.reload();
                });

                if (current != null && current.url != null) {
                  execThumbnail(this, current);
                }
              }
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function initOneDropzone(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var fetchImg =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var current_url, headers, images;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            current_url = 'src/DB/kitty_CRUD/img_CRUD/img_get_main.php';
            headers = {
              'Content-Type': 'application/json'
            };
            _context4.next = 4;
            return fetch(current_url, {
              method: 'POST',
              headers: headers
            });

          case 4:
            _context4.next = 6;
            return _context4.sent.json();

          case 6:
            images = _context4.sent;
            return _context4.abrupt("return", images);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchImg() {
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

/* harmony default export */ __webpack_exports__["default"] = (dropzoneHandlersCommonThumbnail);

/***/ }),

/***/ "./src/front/utils/init_owl_carusel.js":
/*!*********************************************!*\
  !*** ./src/front/utils/init_owl_carusel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var init_owl = function init_owl() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 3000,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (init_owl);

/***/ }),

/***/ "./src/kitty.js":
/*!**********************!*\
  !*** ./src/kitty.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front/utils/init_owl_carusel */ "./src/front/utils/init_owl_carusel.js");
/* harmony import */ var _front_dropzones_dropzonesHandlers_kitty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front/dropzones/dropzonesHandlers_kitty.js */ "./src/front/dropzones/dropzonesHandlers_kitty.js");
/* harmony import */ var _front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./front/dropzones/dropzonesHandlers_Index.js */ "./src/front/dropzones/dropzonesHandlers_Index.js");
/* harmony import */ var _front_dropzones_dropzonesHandlers_kitty_thumbnail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front/dropzones/dropzonesHandlers_kitty_thumbnail.js */ "./src/front/dropzones/dropzonesHandlers_kitty_thumbnail.js");



 // Инициализация дропзон для общих фото

Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_2__["default"])('imgcommon', 'my-dropzone', 'common'); // Инициализация дропзон для загрузки фото котят в разрезе временных периодов

Object(_front_dropzones_dropzonesHandlers_kitty_js__WEBPACK_IMPORTED_MODULE_1__["default"])('imgkitty'); // Инициализация дропзон для главного фото котенка

Object(_front_dropzones_dropzonesHandlers_kitty_thumbnail_js__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Инициализация совиной карусели

Object(_front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfa2l0dHlfdGh1bWJuYWlsLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9raXR0eS5qcyJdLCJuYW1lcyI6WyJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsIkRyb3B6b25lIiwiYXV0b0Rpc2NvdmVyIiwiaW5pdE9uZURyb3B6b25lIiwiYXBwbHlfaW5pdCIsIml0ZW1zIiwiZm9yRWFjaCIsImN1cnJlbnQiLCJpZCIsImZldGNoSW1nIiwidmFsdWVUYXJnZXRGZWlsZCIsImlkRHJvcHpvbmUiLCJhY2NlcHRlZEZpbGVzIiwiaW5pdCIsIm9uIiwiZmlsZSIsInhociIsImZvcm1EYXRhIiwiYXBwZW5kIiwiY3VycmVudF91cmwiLCJjdXJyZW50X2luZiIsImhlYWRlcnMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImltYWdlcyIsImtpdHR5X2lkIiwicGVyaW9kc19pZCIsImRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwiLCJtYXhGaWxlcyIsImJyb29kX2lkIiwiaW5pdFRodW1ibmFpbCIsImZpbGVzIiwicmVtb3ZlRmlsZSIsImxvY2F0aW9uIiwicmVsb2FkIiwidXJsIiwiZXhlY1RodW1ibmFpbCIsImNvbnRleHQiLCJjdXJyZW50X2ltYWdlIiwiY3VycmVudEZpbGUiLCJuYW1lIiwic2l6ZSIsImFjY2VwdGVkIiwia2luZCIsInVwbG9hZCIsImZpbGVuYW1lIiwiZGF0YVVSTCIsInB1c2giLCJlbWl0IiwiY3JlYXRlVGh1bWJuYWlsRnJvbVVybCIsIm9wdGlvbnMiLCJ0aHVtYm5haWxXaWR0aCIsInRodW1ibmFpbEhlaWdodCIsInRodW1ibmFpbE1ldGhvZCIsInRodW1ibmFpbCIsImluaXRfb3dsIiwiJCIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsIm5hdiIsImF1dG9wbGF5Iiwic21hcnRTcGVlZCIsImF1dG9wbGF5VGltZW91dCIsInJlc3BvbnNpdmUiLCJkcm9wem9uZUhhbmRsZXJzQ29tbW9uIiwiZHJvcHpvbmVIYW5kbGVyc0tpdHR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkEsSUFBTUEsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT0MsU0FB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Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBVSwyRkFBc0IsQ0FBQyxXQUFELEVBQWMsYUFBZCxFQUE2QixRQUE3QixDQUF0QixDLENBRUE7O0FBQ0FDLDJGQUFxQixDQUFDLFVBQUQsQ0FBckIsQyxDQUVBOztBQUNBdkMscUdBQStCLEcsQ0FFL0I7O0FBQ0E0Qiw2RUFBUSxHIiwiZmlsZSI6Ii4va2l0dHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9raXR0eS5qc1wiKTtcbiIsIlxuY29uc3QgZHJvcHpvbmVIYW5kbGVycyA9IGFzeW5jICh0YWJsZU5hbWUsIHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgcGFyYW1zID0gW10pID0+IHtcblxuICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbiAgICBpZiAocGFyYW1zID0gJ2NvbW1vbicpIHtcbiAgICAgICAgaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgJ2NvbW1vbicpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXBwbHlfaW5pdCA9IGFzeW5jIGl0ZW1zID0+IFxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChjdXJyZW50ID0+IFxuICAgICAgICAgICAgICAgIGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIGN1cnJlbnQuaWQpKVxuICAgICAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKHRhYmxlTmFtZSwgcGFyYW1zKSlcbiAgICB9XG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZCkgPT4ge1xuXG4gICAgbGV0IGlkRHJvcHpvbmUgPSBgIyR7cHJlZml4RHJvcHpvbmV9LSR7dmFsdWVUYXJnZXRGZWlsZH1gXG5cbiAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfSlcblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICh0YWJsZU5hbWUsIHBhcmFtcyA9IFtdKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJ3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9leGhpYml0aW9uX0NSVUQvZ2V0X2V4aGliaXRpb25fcGhvdG8ucGhwJztcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IHRhYmxlTmFtZSwgcGFyYW1zIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IGltYWdlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChjdXJyZW50X3VybCwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkcm9wem9uZUhhbmRsZXJzIiwiY29uc3QgZHJvcHpvbmVIYW5kbGVycyA9IGFzeW5jICh0YWJsZU5hbWUpID0+IHtcblxuICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbiAgICBjb25zdCBhcHBseV9pbml0ID0gYXN5bmMgaXRlbXMgPT4gXG4gICAgICAgIGl0ZW1zLmZvckVhY2goY3VycmVudCA9PiBcbiAgICAgICAgICAgIGluaXRPbmVEcm9wem9uZShjdXJyZW50LmtpdHR5X2lkLCBjdXJyZW50LnBlcmlvZHNfaWQpKVxuICAgICAgICBcbiBcbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKHRhYmxlTmFtZSkpXG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKGtpdHR5X2lkLCBwZXJpb2RzX2lkKSA9PiB7XG5cbiAgICBsZXQgaWREcm9wem9uZSA9IGAjbXktZHJvcHpvbmUtaSR7a2l0dHlfaWR9LWkke3BlcmlvZHNfaWR9YFxuXG4gICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm9uKFwic2VuZGluZ1wiLCAoZmlsZSwgeGhyLCBmb3JtRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtpdHR5X2lkXCIsIGtpdHR5X2lkKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwZXJpb2RfaWRcIiwgcGVyaW9kc19pZCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9KVxuXG59XG5cbmNvbnN0IGZldGNoSW1nID0gYXN5bmMgKHRhYmxlTmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2dldF9leGhpYml0aW9uX3Bob3RvLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyB0YWJsZU5hbWUgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgKGF3YWl0IGZldGNoKGN1cnJlbnRfdXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3B6b25lSGFuZGxlcnMiLCJjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKGN1cnJlbnQpKVxuICAgICAgICBcbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKCkpXG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKGN1cnJlbnQpID0+IHtcblxuICAgIGxldCBpZERyb3B6b25lID0gYCNteS1kcm9wem9uZS0ke2N1cnJlbnQuaWR9YFxuXG4gICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcbiAgICAgICAgbWF4RmlsZXM6IDEsXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJraXR0eV9pZFwiLCBjdXJyZW50LmlkKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwZXJpb2RfaWRcIiwgY3VycmVudC5icm9vZF9pZCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5vbihcImFkZGVkZmlsZVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGZpbGUuaW5pdFRodW1ibmFpbCkgJiYgKHRoaXMuZmlsZXNbMV0gIT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKHRoaXMuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgIGlmICgoY3VycmVudCAhPSBudWxsKSAmJiAoY3VycmVudC51cmwgIT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICBleGVjVGh1bWJuYWlsKHRoaXMsIGN1cnJlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pXG5cbn1cblxuY29uc3QgZmV0Y2hJbWcgPSBhc3luYyAoKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJ3NyYy9EQi9raXR0eV9DUlVEL2ltZ19DUlVEL2ltZ19nZXRfbWFpbi5waHAnO1xuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgKGF3YWl0IGZldGNoKGN1cnJlbnRfdXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufVxuXG4vLyBEUlkgLSDQv9C10YDQtdC90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbmNvbnN0IGV4ZWNUaHVtYm5haWwgPSAoY29udGV4dCwgY3VycmVudF9pbWFnZSkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRGaWxlID0ge1xuICAgICAgICBuYW1lOiBjdXJyZW50X2ltYWdlLm5hbWUsXG4gICAgICAgIHNpemU6IGN1cnJlbnRfaW1hZ2Uuc2l6ZSxcbiAgICAgICAgYWNjZXB0ZWQ6IHRydWUsXG4gICAgICAgIGtpbmQ6ICdpbWFnZScsXG4gICAgICAgIHVwbG9hZDoge1xuICAgICAgICAgICAgZmlsZW5hbWU6IGN1cnJlbnRfaW1hZ2UubmFtZSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YVVSTDogY3VycmVudF9pbWFnZS51cmwsXG4gICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICBjb250ZXh0LmZpbGVzLnB1c2goY3VycmVudEZpbGUpO1xuICAgIGNvbnRleHQuZW1pdChcImFkZGVkZmlsZVwiLCBjdXJyZW50RmlsZSk7XG4gICAgY29udGV4dC5jcmVhdGVUaHVtYm5haWxGcm9tVXJsKFxuICAgICAgICBjdXJyZW50RmlsZSxcbiAgICAgICAgY29udGV4dC5vcHRpb25zLnRodW1ibmFpbFdpZHRoLFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsSGVpZ2h0LFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsTWV0aG9kLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICB0aHVtYm5haWwgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5lbWl0KCd0aHVtYm5haWwnLCBjdXJyZW50RmlsZSwgdGh1bWJuYWlsKTtcbiAgICAgICAgICAgIGNvbnRleHQuZW1pdChcImNvbXBsZXRlXCIsIGN1cnJlbnRGaWxlKTtcbiAgICAgICAgfVxuICAgIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsIiwiY29uc3QgaW5pdF9vd2wgPSAoKSA9PiB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfb3dsIiwiaW1wb3J0IGluaXRfb3dsIGZyb20gJy4vZnJvbnQvdXRpbHMvaW5pdF9vd2xfY2FydXNlbCdcbmltcG9ydCBkcm9wem9uZUhhbmRsZXJzS2l0dHkgZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfa2l0dHkuanMnXG5pbXBvcnQgZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiBmcm9tICcuL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcydcbmltcG9ydCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsIGZyb20gJy4vZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5X3RodW1ibmFpbC5qcydcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINC+0LHRidC40YUg0YTQvtGC0L5cbmRyb3B6b25lSGFuZGxlcnNDb21tb24oJ2ltZ2NvbW1vbicsICdteS1kcm9wem9uZScsICdjb21tb24nKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuCDRhNC+0YLQviDQutC+0YLRj9GCINCyINGA0LDQt9GA0LXQt9C1INCy0YDQtdC80LXQvdC90YvRhSDQv9C10YDQuNC+0LTQvtCyXG5kcm9wem9uZUhhbmRsZXJzS2l0dHkoJ2ltZ2tpdHR5JylcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINCz0LvQsNCy0L3QvtCz0L4g0YTQvtGC0L4g0LrQvtGC0LXQvdC60LBcbmRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwoKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LLQuNC90L7QuSDQutCw0YDRg9GB0LXQu9C4XG5pbml0X293bCgpIl0sInNvdXJjZVJvb3QiOiIifQ==