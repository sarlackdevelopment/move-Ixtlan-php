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
            //let news_index = event.target.getAttribute('news_index')
            id = event.target.getAttribute(id_field_name); //let headers     = { 'Content-Type': 'application/json' }
            //let current_inf = { id }
            //let url         = '/Ixtlan-php/src/DB/news_CRUD/news_delete.php'

            _context2.prev = 1;
            _context2.next = 4;
            return fetch(url, {
              method: 'POST',
              //body: JSON.stringify(current_inf), 
              body: JSON.stringify({
                id: id
              }),
              //headers: headers 
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
                      modalWindow.modal('hide'); //location.reload()

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
  //$('#delete_news').click(() => deleteById(modalWindow, url, id_field_name))
  targetButton.click(function () {
    return deleteById(modalWindow, url, id_field_name);
  }); //$('#modalDelete').on('shown.bs.modal', 
  //event => $('#delete_news').attr('news_index', event.relatedTarget.getAttribute('news_index')))

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

var currentButton = $('#delete_img');

var deleteImg = function deleteImg() {
  $('#modalDeleteImg').on('shown.bs.modal', function (event) {
    return currentButton.attr('exhibition_id', event.relatedTarget.getAttribute('exhibition_id'));
  });
  currentButton.click(function (event) {
    return mainHandler(event);
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
            _context2.t0 = fetchDeleteImgs;
            _context2.next = 3;
            return getCheckImgs(event.target.getAttribute('exhibition_id'));

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
                      return _context.abrupt("return", $('#modalDeleteImg').modal('hide'));

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

var getCheckImgs =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(exhibition_id) {
    var result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = [];
            $("input[exhibition_id = ".concat(exhibition_id, "]")).each(function (index, item) {
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

  return function getCheckImgs(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var fetchDeleteImgs =
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
            current_url = '/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php';
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

  return function fetchDeleteImgs(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (deleteImg);

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



Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__["default"])('exhibitions', 'my-dropzone', 'exhibition_id');
Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__["default"])('kindofdocuments', 'my-dropzone-kind-of-documents', 'kindofdocuments_id'); //Удаление новостей

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["default"])($('#modalDeleteNews'), $('#delete_news'), '/Ixtlan-php/src/DB/news_CRUD/news_delete.php', 'news_index'); // Удаление выставок

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["default"])($('#modalDeleteExhibition'), $('#delete_exhibition'), '/Ixtlan-php/src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_delete.php', 'exhibition_id'); // Удаление изображений с выставок

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRyb3B6b25lSGFuZGxlcnMiLCJ0YWJsZU5hbWUiLCJwcmVmaXhEcm9wem9uZSIsInRhcmdldEZlaWxkIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJmZXRjaEltZyIsImV4aGliaXRpb25zIiwiZm9yRWFjaCIsImN1cnJlbnRfZXhoaWJpdGlvbiIsImluaXRPbmVEcm9wem9uZSIsImlkIiwidmFsdWVUYXJnZXRGZWlsZCIsImlkRHJvcHpvbmUiLCJhY2NlcHRlZEZpbGVzIiwiaW5pdCIsIm9uIiwiZmlsZSIsInhociIsImZvcm1EYXRhIiwiYXBwZW5kIiwiY3VycmVudF91cmwiLCJjdXJyZW50X2luZiIsImhlYWRlcnMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImltYWdlcyIsImRlbGV0ZUJ5SWQiLCJtb2RhbFdpbmRvdyIsInVybCIsImlkX2ZpZWxkX25hbWUiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIm1vZGFsIiwiRXJyb3IiLCJkZWxldGVDb25maXJtYXRpb25zIiwidGFyZ2V0QnV0dG9uIiwiY2xpY2siLCJhdHRyIiwicmVsYXRlZFRhcmdldCIsImN1cnJlbnRCdXR0b24iLCIkIiwiZGVsZXRlSW1nIiwibWFpbkhhbmRsZXIiLCJmZXRjaERlbGV0ZUltZ3MiLCJnZXRDaGVja0ltZ3MiLCJleGhpYml0aW9uX2lkIiwicmVzdWx0IiwiZWFjaCIs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QnZDLHVCQUZnQixHQUVGLG9FQUZFO0FBR2hCQyx1QkFIZ0IsR0FHRjtBQUFFc0Msb0JBQU0sRUFBTkE7QUFBRixhQUhFO0FBSWhCckMsbUJBSmdCLEdBSUY7QUFBRSw4QkFBZ0I7QUFBbEIsYUFKRTtBQU1wQkMsaUJBQUssQ0FBQ0gsV0FBRCxFQUFjO0FBQUVJLG9CQUFNLEVBQUUsTUFBVjtBQUFrQkMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLFdBQWYsQ0FBeEI7QUFBcURDLHFCQUFPLEVBQUVBO0FBQTlELGFBQWQsQ0FBTDs7QUFOb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZjBCLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7O0FBVWVGLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBL0MsMkZBQWdCLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQixlQUEvQixDQUFoQjtBQUVBQSwyRkFBZ0IsQ0FBQyxpQkFBRCxFQUFvQiwrQkFBcEIsRUFBcUQsb0JBQXJELENBQWhCLEMsQ0FFQTs7QUFDQXdDLGdGQUFtQixDQUNmTSxDQUFDLENBQUMsa0JBQUQsQ0FEYyxFQUVmQSxDQUFDLENBQUMsY0FBRCxDQUZjLEVBR2YsOENBSGUsRUFJZixZQUplLENBQW5CLEMsQ0FNQTs7QUFDQU4sZ0ZBQW1CLENBQ2ZNLENBQUMsQ0FBQyx3QkFBRCxDQURjLEVBRWZBLENBQUMsQ0FBQyxvQkFBRCxDQUZjLEVBR2YsNEVBSGUsRUFJZixlQUplLENBQW5CLEMsQ0FNQTs7QUFDQUMsb0ZBQVMsRyIsImZpbGUiOiIuL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAodGFibGVOYW1lLCBwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQpID0+IHtcblxuICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xuXG4gICAgbGV0IGV4aGliaXRpb25zID0gYXdhaXQgZmV0Y2hJbWcodGFibGVOYW1lKSBcblxuICAgIGF3YWl0IChhc3luYyAoKSA9PiBleGhpYml0aW9ucy5mb3JFYWNoKChjdXJyZW50X2V4aGliaXRpb24pID0+IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIGN1cnJlbnRfZXhoaWJpdGlvbi5pZCkpKSgpXG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZCkgPT4ge1xuXG4gICAgbGV0IGlkRHJvcHpvbmUgPSBgIyR7cHJlZml4RHJvcHpvbmV9LSR7dmFsdWVUYXJnZXRGZWlsZH1gXG5cbiAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfSlcblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICh0YWJsZU5hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9nZXRfZXhoaWJpdGlvbl9waG90by5waHAnO1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgdGFibGVOYW1lIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IGltYWdlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChjdXJyZW50X3VybCwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkcm9wem9uZUhhbmRsZXJzIiwiY29uc3QgZGVsZXRlQnlJZCA9IGFzeW5jIChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICAvL2xldCBuZXdzX2luZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmV3c19pbmRleCcpXG5cbiAgICBsZXQgaWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG5cbiAgICAvL2xldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgLy9sZXQgY3VycmVudF9pbmYgPSB7IGlkIH1cbiAgICAvL2xldCB1cmwgICAgICAgICA9ICcvSXh0bGFuLXBocC9zcmMvREIvbmV3c19DUlVEL25ld3NfZGVsZXRlLnBocCdcblxuICAgIHRyeSB7XG5cbiAgICAgICAgYXdhaXQgZmV0Y2godXJsLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgLy9ib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCB9KSxcbiAgICAgICAgICAgIC8vaGVhZGVyczogaGVhZGVycyBcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLyogYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICQoJyNtb2RhbERlbGV0ZScpLm1vZGFsKCdoaWRlJylcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pKCkgKi9cbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJylcbiAgICAgICAgICAgIC8vbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSkoKVxuXG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LvRg9GH0LjRgtGMINC00LDQvdC90YvQtSDQvtGCINGB0LXRgNCy0LXRgNCwJylcbiAgICB9XG59XG5cbmNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnMgPSAobW9kYWxXaW5kb3csIHRhcmdldEJ1dHRvbiwgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICAvLyQoJyNkZWxldGVfbmV3cycpLmNsaWNrKCgpID0+IGRlbGV0ZUJ5SWQobW9kYWxXaW5kb3csIHVybCwgaWRfZmllbGRfbmFtZSkpXG4gICAgdGFyZ2V0QnV0dG9uLmNsaWNrKCgpID0+IGRlbGV0ZUJ5SWQobW9kYWxXaW5kb3csIHVybCwgaWRfZmllbGRfbmFtZSkpXG5cbiAgICAvLyQoJyNtb2RhbERlbGV0ZScpLm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICAvL2V2ZW50ID0+ICQoJyNkZWxldGVfbmV3cycpLmF0dHIoJ25ld3NfaW5kZXgnLCBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmV3c19pbmRleCcpKSlcblxuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsXG4gICAgICAgIGV2ZW50ID0+IHRhcmdldEJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVDb25maXJtYXRpb25zIiwiXG5sZXQgY3VycmVudEJ1dHRvbiA9ICQoJyNkZWxldGVfaW1nJylcblxuY29uc3QgZGVsZXRlSW1nID0gKCkgPT4ge1xuXG4gICAgJCgnI21vZGFsRGVsZXRlSW1nJykub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGN1cnJlbnRCdXR0b24uYXR0cignZXhoaWJpdGlvbl9pZCcsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2V4aGliaXRpb25faWQnKSkpXG5cbiAgICBjdXJyZW50QnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSkgXG5cbn1cblxuY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGF3YWl0IGdldENoZWNrSW1ncyhldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdleGhpYml0aW9uX2lkJykpKVxuICAgIGF3YWl0IChhc3luYyAoKSA9PiAkKCcjbW9kYWxEZWxldGVJbWcnKS5tb2RhbCgnaGlkZScpKSgpXG59XG5cbmNvbnN0IGdldENoZWNrSW1ncyA9IGFzeW5jIChleGhpYml0aW9uX2lkKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbZXhoaWJpdGlvbl9pZCA9ICR7ZXhoaWJpdGlvbl9pZH1dYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJy9JeHRsYW4tcGhwL3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9pbWdfQ1JVRC9pbWdfZGVsZXRlX2dyb3VwLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBmZXRjaChjdXJyZW50X3VybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSW1nIiwiaW1wb3J0IGRyb3B6b25lSGFuZGxlcnMgZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMnXG5pbXBvcnQgZGVsZXRlQ29uZmlybWF0aW9ucyBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGUnXG5pbXBvcnQgZGVsZXRlSW1nIGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcnXG5cbmRyb3B6b25lSGFuZGxlcnMoJ2V4aGliaXRpb25zJywgJ215LWRyb3B6b25lJywgJ2V4aGliaXRpb25faWQnKVxuXG5kcm9wem9uZUhhbmRsZXJzKCdraW5kb2Zkb2N1bWVudHMnLCAnbXktZHJvcHpvbmUta2luZC1vZi1kb2N1bWVudHMnLCAna2luZG9mZG9jdW1lbnRzX2lkJylcblxuLy/Qo9C00LDQu9C10L3QuNC1INC90L7QstC+0YHRgtC10LlcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlTmV3cycpLCBcbiAgICAkKCcjZGVsZXRlX25ld3MnKSwgXG4gICAgJy9JeHRsYW4tcGhwL3NyYy9EQi9uZXdzX0NSVUQvbmV3c19kZWxldGUucGhwJyxcbiAgICAnbmV3c19pbmRleCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LLRi9GB0YLQsNCy0L7QulxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVFeGhpYml0aW9uJyksIFxuICAgICQoJyNkZWxldGVfZXhoaWJpdGlvbicpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9leGhpYml0aW9uX2RlbGV0ZS5waHAnLFxuICAgICdleGhpYml0aW9uX2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNC5INGBINCy0YvRgdGC0LDQstC+0LpcbmRlbGV0ZUltZygpIl0sInNvdXJjZVJvb3QiOiIifQ==