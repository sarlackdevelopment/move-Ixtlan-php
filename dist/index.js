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
    var exhibitions;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Dropzone.autoDiscover = false;
            _context2.next = 3;
            return fetchImg(tableName);

          case 3:
            exhibitions = _context2.sent;
            _context2.next = 6;
            return _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", exhibitions.forEach(function (current_exhibition) {
                        return initOneDropzone(prefixDropzone, targetFeild, current_exhibition.id);
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();

          case 6:
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

  return function initOneDropzone(_x4, _x5, _x6) {
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

  return function fetchImg(_x7) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (dropzoneHandlers);

/***/ }),

/***/ "./src/front/utils/confirmation_delete.js":
/*!************************************************!*\
  !*** ./src/front/utils/confirmation_delete.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var deleteById =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(modalWindow, url, id_field_name) {
    var id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = event.target.getAttribute(id_field_name);
            _context2.prev = 1;
            _context2.next = 4;
            return fetch(url, {
              method: 'POST',
              body: JSON.stringify({
                id: id
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 4:
            _context2.next = 6;
            return _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", modalWindow.modal('hide'));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();

          case 6:
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            throw new Error('Не удалось получить данные от сервера');

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function deleteById(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var deleteConfirmations = function deleteConfirmations(modalWindow, targetButton, url, id_field_name) {
  targetButton.click(function () {
    return deleteById(modalWindow, url, id_field_name);
  });
  modalWindow.on('shown.bs.modal', function (event) {
    return targetButton.attr(id_field_name, event.relatedTarget.getAttribute(id_field_name));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (deleteConfirmations);

/***/ }),

/***/ "./src/front/utils/confirmation_delete_img.js":
/*!****************************************************!*\
  !*** ./src/front/utils/confirmation_delete_img.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var deleteImg = function deleteImg(modalWindow, button, id_field_name, url, table_name) {
  modalWindow.on('shown.bs.modal', function (event) {
    return button.attr(id_field_name, event.relatedTarget.getAttribute(id_field_name));
  });

  var mainHandler =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(event) {
      var id, checks;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = event.target.getAttribute(id_field_name);
              _context2.next = 3;
              return getCheckImgs(id, id_field_name);

            case 3:
              checks = _context2.sent;
              _context2.next = 6;
              return fetchDeleteImgs(checks, url, table_name);

            case 6:
              _context2.next = 8;
              return _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", modalWindow.modal('hide'));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }))();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function mainHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  button.click(function (event) {
    return mainHandler(event);
  });
};

var getCheckImgs =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(id, id_field_name) {
    var result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = [];
            $("input[".concat(id_field_name, " = ").concat(id, "]")).each(function (index, item) {
              var currentItemJQ = $(item);
              if (currentItemJQ.prop("checked")) result.push(currentItemJQ.val());
            });
            return _context3.abrupt("return", result);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getCheckImgs(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

var fetchDeleteImgs =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(checks, url, table_name) {
    var current_inf, headers;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            current_inf = {
              checks: checks,
              table_name: table_name
            };
            headers = {
              'Content-Type': 'application/json'
            };
            fetch(url, {
              method: 'POST',
              body: JSON.stringify(current_inf),
              headers: headers
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchDeleteImgs(_x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (deleteImg);

/***/ }),

/***/ "./src/front/utils/confirmation_delete_video.js":
/*!******************************************************!*\
  !*** ./src/front/utils/confirmation_delete_video.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var deleteVideo = function deleteVideo() {
  $('#delete_video').click(function () {
    return mainHandler();
  });
};

var mainHandler =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = fetchDeleteVideo;
            _context2.next = 3;
            return getCheckVideo();

          case 3:
            _context2.t1 = _context2.sent;
            _context2.next = 6;
            return (0, _context2.t0)(_context2.t1);

          case 6:
            _context2.next = 8;
            return _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", $('#modalDeleteVideo').modal('hide'));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function mainHandler() {
    return _ref.apply(this, arguments);
  };
}();

var getCheckVideo =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = [];
            $("input[this_video = true]").each(function (index, item) {
              var currentItemJQ = $(item);
              if (currentItemJQ.prop("checked")) result.push(currentItemJQ.val());
            });
            return _context3.abrupt("return", result);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getCheckVideo() {
    return _ref3.apply(this, arguments);
  };
}();

var fetchDeleteVideo =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(checks) {
    var current_url, current_inf, headers;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            current_url = '/Ixtlan-php/src/DB/video_CRUD/video_delete_group.php';
            current_inf = {
              checks: checks
            };
            headers = {
              'Content-Type': 'application/json'
            };
            fetch(current_url, {
              method: 'POST',
              body: JSON.stringify(current_inf),
              headers: headers
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchDeleteVideo(_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (deleteVideo);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front/dropzones/dropzonesHandlers_Index.js */ "./src/front/dropzones/dropzonesHandlers_Index.js");
/* harmony import */ var _front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front/utils/confirmation_delete */ "./src/front/utils/confirmation_delete.js");
/* harmony import */ var _front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./front/utils/confirmation_delete_img */ "./src/front/utils/confirmation_delete_img.js");
/* harmony import */ var _front_utils_confirmation_delete_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front/utils/confirmation_delete_video */ "./src/front/utils/confirmation_delete_video.js");




Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__["default"])('exhibitions', 'my-dropzone', 'exhibition_id');
Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__["default"])('kindofdocuments', 'my-dropzone-kind-of-documents', 'kindofdocuments_id'); //Удаление новостей

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["default"])($('#modalDeleteNews'), $('#delete_news'), '/Ixtlan-php/src/DB/news_CRUD/news_delete.php', 'news_index'); // Удаление выставок

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["default"])($('#modalDeleteExhibition'), $('#delete_exhibition'), '/Ixtlan-php/src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_delete.php', 'exhibition_id'); // Удаление типов документов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["default"])($('#modalDeleteKindOfDocument'), $('#delete_kind_of_document'), '/Ixtlan-php/src/DB/document_CRUD/kind_of_document_CRUD/kind_of_document_delete.php', 'kind_of_document_id'); // Удаление изображений с выставок

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__["default"])($('#modalDeleteImg'), $('#delete_img'), 'group_id', '/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php', 'imgexhibitions'); // Удаление изображений документов

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__["default"])($('#modalDeleteImg'), $('#delete_img'), 'group_id', '/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php', 'imgkindofdocument'); // Удаление видео

Object(_front_utils_confirmation_delete_video__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRyb3B6b25lSGFuZGxlcnMiLCJ0YWJsZU5hbWUiLCJwcmVmaXhEcm9wem9uZSIsInRhcmdldEZlaWxkIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJmZXRjaEltZyIsImV4aGliaXRpb25zIiwiZm9yRWFjaCIsImN1cnJlbnRfZXhoaWJpdGlvbiIsImluaXRPbmVEcm9wem9uZSIsImlkIiwidmFsdWVUYXJnZXRGZWlsZCIsImlkRHJvcHpvbmUiLCJhY2NlcHRlZEZpbGVzIiwiaW5pdCIsIm9uIiwiZmlsZSIsInhociIsImZvcm1EYXRhIiwiYXBwZW5kIiwiY3VycmVudF91cmwiLCJjdXJyZW50X2luZiIsImhlYWRlcnMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImltYWdlcyIsImRlbGV0ZUJ5SWQiLCJtb2RhbFdpbmRvdyIsInVybCIsImlkX2ZpZWxkX25hbWUiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIm1vZGFsIiwiRXJyb3IiLCJkZWxldGVDb25maXJtYXRpb25zIiwidGFyZ2V0QnV0dG9uIiwiY2xpY2siLCJhdHRyIiwicmVsYXRlZFRhcmdldCIsImRlbGV0ZUltZyIsImJ1dHRvbiIsInRhYmxlX25hbWUiLCJtYWluSGFuZGxlciIsImdldENoZWNrSW1ncyIsImNoZWNrcyIsImZldGNoRGVsZXRlSW1ncyIsInJlc3VsdCIsIiQiLCJlYWNoIiwiaW5kZXgiLCJpdGVtIiwiY3VycmVudEl0ZW1KUSIsInByb3AiLCJwdXNoIiwidmFsIiwiZGVsZXRlVmlkZW8iLCJmZXRjaERlbGV0ZVZpZGVvIiwiZ2V0Q2hlY2tWaWRlbyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBLElBQU1BLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsa0JBQU9DLFNBQVAsRUFBa0JDLGNBQWxCLEVBQWtDQyxXQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFckJDLG9CQUFRLENBQUNDLFlBQVQsR0FBd0IsS0FBeEI7QUFGcUI7QUFBQSxtQkFJR0MsUUFBUSxDQUFDTCxTQUFELENBSlg7O0FBQUE7QUFJakJNLHVCQUppQjtBQUFBO0FBQUEsbUJBTWY7QUFBQTtBQUFB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cUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJ1QyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEI7O0FBVWVELDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTdELDJGQUFnQixDQUFDLGFBQUQsRUFBZ0IsYUFBaEIsRUFBK0IsZUFBL0IsQ0FBaEI7QUFFQUEsMkZBQWdCLENBQUMsaUJBQUQsRUFBb0IsK0JBQXBCLEVBQXFELG9CQUFyRCxDQUFoQixDLENBRUE7O0FBQ0F3QyxnRkFBbUIsQ0FDZmEsQ0FBQyxDQUFDLGtCQUFELENBRGMsRUFFZkEsQ0FBQyxDQUFDLGNBQUQsQ0FGYyxFQUdmLDhDQUhlLEVBSWYsWUFKZSxDQUFuQixDLENBTUE7O0FBQ0FiLGdGQUFtQixDQUNmYSxDQUFDLENBQUMsd0JBQUQsQ0FEYyxFQUVmQSxDQUFDLENBQUMsb0JBQUQsQ0FGYyxFQUdmLDRFQUhlLEVBSWYsZUFKZSxDQUFuQixDLENBTUE7O0FBQ0FiLGdGQUFtQixDQUNmYSxDQUFDLENBQUMsNEJBQUQsQ0FEYyxFQUVmQSxDQUFDLENBQUMsMEJBQUQsQ0FGYyxFQUdmLG9GQUhlLEVBSWYscUJBSmUsQ0FBbkIsQyxDQU1BOztBQUNBUixvRkFBUyxDQUNMUSxDQUFDLENBQUMsaUJBQUQsQ0FESSxFQUVMQSxDQUFDLENBQUMsYUFBRCxDQUZJLEVBR0wsVUFISyxFQUlMLG9FQUpLLEVBS0wsZ0JBTEssQ0FBVCxDLENBT0E7O0FBQ0FSLG9GQUFTLENBQ0xRLENBQUMsQ0FBQyxpQkFBRCxDQURJLEVBRUxBLENBQUMsQ0FBQyxhQUFELENBRkksRUFHTCxVQUhLLEVBSUwsb0VBSkssRUFLTCxtQkFMSyxDQUFULEMsQ0FPQTs7QUFDQVEsc0ZBQVcsRyIsImZpbGUiOiIuL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAodGFibGVOYW1lLCBwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQpID0+IHtcblxuICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xuXG4gICAgbGV0IGV4aGliaXRpb25zID0gYXdhaXQgZmV0Y2hJbWcodGFibGVOYW1lKSBcblxuICAgIGF3YWl0IChhc3luYyAoKSA9PiBleGhpYml0aW9ucy5mb3JFYWNoKChjdXJyZW50X2V4aGliaXRpb24pID0+IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIGN1cnJlbnRfZXhoaWJpdGlvbi5pZCkpKSgpXG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZCkgPT4ge1xuXG4gICAgbGV0IGlkRHJvcHpvbmUgPSBgIyR7cHJlZml4RHJvcHpvbmV9LSR7dmFsdWVUYXJnZXRGZWlsZH1gXG5cbiAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfSlcblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICh0YWJsZU5hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9nZXRfZXhoaWJpdGlvbl9waG90by5waHAnO1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgdGFibGVOYW1lIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IGltYWdlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChjdXJyZW50X3VybCwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkcm9wem9uZUhhbmRsZXJzIiwiY29uc3QgZGVsZXRlQnlJZCA9IGFzeW5jIChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICBsZXQgaWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG5cbiAgICB0cnkge1xuXG4gICAgICAgIGF3YWl0IGZldGNoKHVybCwgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkIH0pLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuXG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LvRg9GH0LjRgtGMINC00LDQvdC90YvQtSDQvtGCINGB0LXRgNCy0LXRgNCwJylcbiAgICB9XG59XG5cbmNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnMgPSAobW9kYWxXaW5kb3csIHRhcmdldEJ1dHRvbiwgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICB0YXJnZXRCdXR0b24uY2xpY2soKCkgPT4gZGVsZXRlQnlJZChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSlcblxuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsXG4gICAgICAgIGV2ZW50ID0+IHRhcmdldEJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVDb25maXJtYXRpb25zIiwiY29uc3QgZGVsZXRlSW1nID0gKG1vZGFsV2luZG93LCBidXR0b24sIGlkX2ZpZWxkX25hbWUsIHVybCwgdGFibGVfbmFtZSkgPT4ge1xuXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpIFxuXG59XG5cbmNvbnN0IGdldENoZWNrSW1ncyA9IGFzeW5jIChpZCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0WyR7aWRfZmllbGRfbmFtZX0gPSAke2lkfV1gKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1KUSA9ICQoaXRlbSlcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtSlEucHJvcChcImNoZWNrZWRcIikpXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50SXRlbUpRLnZhbCgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0O1xuXG59XG5cbmNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MsIHVybCwgdGFibGVfbmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzLCB0YWJsZV9uYW1lIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVJbWciLCJjb25zdCBkZWxldGVWaWRlbyA9ICgpID0+IHtcbiAgICAkKCcjZGVsZXRlX3ZpZGVvJykuY2xpY2soKCkgPT4gbWFpbkhhbmRsZXIoKSkgXG59XG5cbmNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgYXdhaXQgZmV0Y2hEZWxldGVWaWRlbyhhd2FpdCBnZXRDaGVja1ZpZGVvKCkpICAgXG4gICAgYXdhaXQgKGFzeW5jICgpID0+ICQoJyNtb2RhbERlbGV0ZVZpZGVvJykubW9kYWwoJ2hpZGUnKSkoKVxuXG59XG5cbmNvbnN0IGdldENoZWNrVmlkZW8gPSBhc3luYyAoKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbdGhpc192aWRlbyA9IHRydWVdYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG59XG5cbmNvbnN0IGZldGNoRGVsZXRlVmlkZW8gPSBhc3luYyAoY2hlY2tzKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJy9JeHRsYW4tcGhwL3NyYy9EQi92aWRlb19DUlVEL3ZpZGVvX2RlbGV0ZV9ncm91cC5waHAnXG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBmZXRjaChjdXJyZW50X3VybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlVmlkZW8iLCJpbXBvcnQgZHJvcHpvbmVIYW5kbGVycyBmcm9tICcuL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcydcbmltcG9ydCBkZWxldGVDb25maXJtYXRpb25zIGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZSdcbmltcG9ydCBkZWxldGVJbWcgZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX2ltZydcbmltcG9ydCBkZWxldGVWaWRlbyBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfdmlkZW8nXG5cbmRyb3B6b25lSGFuZGxlcnMoJ2V4aGliaXRpb25zJywgJ215LWRyb3B6b25lJywgJ2V4aGliaXRpb25faWQnKVxuXG5kcm9wem9uZUhhbmRsZXJzKCdraW5kb2Zkb2N1bWVudHMnLCAnbXktZHJvcHpvbmUta2luZC1vZi1kb2N1bWVudHMnLCAna2luZG9mZG9jdW1lbnRzX2lkJylcblxuLy/Qo9C00LDQu9C10L3QuNC1INC90L7QstC+0YHRgtC10LlcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlTmV3cycpLCBcbiAgICAkKCcjZGVsZXRlX25ld3MnKSwgXG4gICAgJy9JeHRsYW4tcGhwL3NyYy9EQi9uZXdzX0NSVUQvbmV3c19kZWxldGUucGhwJyxcbiAgICAnbmV3c19pbmRleCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LLRi9GB0YLQsNCy0L7QulxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVFeGhpYml0aW9uJyksIFxuICAgICQoJyNkZWxldGVfZXhoaWJpdGlvbicpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9leGhpYml0aW9uX2RlbGV0ZS5waHAnLFxuICAgICdleGhpYml0aW9uX2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDRgtC40L/QvtCyINC00L7QutGD0LzQtdC90YLQvtCyXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUtpbmRPZkRvY3VtZW50JyksIFxuICAgICQoJyNkZWxldGVfa2luZF9vZl9kb2N1bWVudCcpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL2RvY3VtZW50X0NSVUQva2luZF9vZl9kb2N1bWVudF9DUlVEL2tpbmRfb2ZfZG9jdW1lbnRfZGVsZXRlLnBocCcsXG4gICAgJ2tpbmRfb2ZfZG9jdW1lbnRfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0YEg0LLRi9GB0YLQsNCy0L7QulxuZGVsZXRlSW1nKFxuICAgICQoJyNtb2RhbERlbGV0ZUltZycpLCBcbiAgICAkKCcjZGVsZXRlX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLFxuICAgICcvSXh0bGFuLXBocC9zcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvaW1nX0NSVUQvaW1nX2RlbGV0ZV9ncm91cC5waHAnLFxuICAgICdpbWdleGhpYml0aW9ucycpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDQtNC+0LrRg9C80LXQvdGC0L7QslxuZGVsZXRlSW1nKFxuICAgICQoJyNtb2RhbERlbGV0ZUltZycpLCBcbiAgICAkKCcjZGVsZXRlX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLFxuICAgICcvSXh0bGFuLXBocC9zcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvaW1nX0NSVUQvaW1nX2RlbGV0ZV9ncm91cC5waHAnLFxuICAgICdpbWdraW5kb2Zkb2N1bWVudCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LLQuNC00LXQvlxuZGVsZXRlVmlkZW8oKSJdLCJzb3VyY2VSb290IjoiIn0=