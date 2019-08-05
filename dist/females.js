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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/females.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/females.js":
/*!************************!*\
  !*** ./src/females.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front/dropzones/dropzonesHandlers_Index.js */ "./src/front/dropzones/dropzonesHandlers_Index.js");
/* harmony import */ var _front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front/utils/confirmation_delete */ "./src/front/utils/confirmation_delete.js");
/* harmony import */ var _front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./front/utils/confirmation_delete_img */ "./src/front/utils/confirmation_delete_img.js");
/* harmony import */ var _front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front/utils/init_owl_carusel */ "./src/front/utils/init_owl_carusel.js");



 // Инициализация дропзон для загрузки фото кошек

Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__["dropzoneHandlers"])('catsadult', 'my-dropzone', 'catsadult_id', 'female'); // Удаление кошек

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["deleteConfirmations"])($('#modalDeleteAdult'), $('#delete_adult'), '/Ixtlan-php/src/DB/cat_CRUD/cat_delete.php', 'catsadult_id'); // Удаление изображений кошек

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__["default"])($('#modalDeleteImg'), $('#delete_img'), 'group_id', 'imgcatsadult'); // Инициализация совиной карусели

Object(_front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/front/dropzones/dropzonesHandlers_Index.js":
/*!********************************************************!*\
  !*** ./src/front/dropzones/dropzonesHandlers_Index.js ***!
  \********************************************************/
/*! exports provided: dropzoneHandlers, dropzoneHandlersCommon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropzoneHandlers", function() { return dropzoneHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropzoneHandlersCommon", function() { return dropzoneHandlersCommon; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

Dropzone.autoDiscover = false;
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
            _context2.next = 5;
            return fetchImg(tableName, params);

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

  return function dropzoneHandlers(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var dropzoneHandlersCommon =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(prefixDropzone, targetFeild) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return initOneDropzone(prefixDropzone, targetFeild, 'common');

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function dropzoneHandlersCommon(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var initOneDropzone =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(prefixDropzone, targetFeild, valueTargetFeild) {
    var idDropzone;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
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
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function initOneDropzone(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

var fetchImg =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(tableName) {
    var params,
        current_url,
        current_inf,
        headers,
        images,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            params = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : [];
            current_url = 'src/DB/exhibitioner_CRUD/exhibition_CRUD/get_exhibition_photo.php';
            current_inf = {
              tableName: tableName,
              params: params
            };
            headers = {
              'Content-Type': 'application/json'
            };
            _context5.next = 6;
            return fetch(current_url, {
              method: 'POST',
              body: JSON.stringify(current_inf),
              headers: headers
            });

          case 6:
            _context5.next = 8;
            return _context5.sent.json();

          case 8:
            images = _context5.sent;
            return _context5.abrupt("return", images);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function fetchImg(_x10) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/front/utils/confirmation_delete.js":
/*!************************************************!*\
  !*** ./src/front/utils/confirmation_delete.js ***!
  \************************************************/
/*! exports provided: deleteConfirmations, deleteConfirmationsStates, deleteConfirmationsPeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfirmations", function() { return deleteConfirmations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfirmationsStates", function() { return deleteConfirmationsStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfirmationsPeriod", function() { return deleteConfirmationsPeriod; });
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

  return function getCheckImgs(_x4, _x5) {
    return _ref3.apply(this, arguments);
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
var deleteConfirmationsStates = function deleteConfirmationsStates() {
  var modalWindow = $('#modalDeleteState');
  var button = $('#delete_state');
  var id_field_name = 'state_id';
  var url = '/Ixtlan-php/src/DB/kitty_CRUD/state_CRUD/state_delete_group.php';

  var fetchDeleteImgs =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(checks) {
      var current_inf, headers;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              current_inf = {
                checks: checks
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

    return function fetchDeleteImgs(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  var mainHandler =
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6() {
      var checks;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return getCheckImgs('true', id_field_name);

            case 2:
              checks = _context6.sent;
              _context6.next = 5;
              return fetchDeleteImgs(checks);

            case 5:
              _context6.next = 7;
              return _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", modalWindow.modal('hide'));

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }))();

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function mainHandler() {
      return _ref5.apply(this, arguments);
    };
  }();

  button.click(function (event) {
    return mainHandler(event);
  });
};
var deleteConfirmationsPeriod = function deleteConfirmationsPeriod() {
  var modalWindow = $('#modalDeletePeriod');
  var button = $('#delete_period');
  var id_field_name = 'brood_id';
  var url = '/Ixtlan-php/src/DB/kitty_CRUD/period_CRUD/period_delete_group.php'; // DRY - проброс с кнопки запуска модалки на кнопку удаления вынести в утилиты

  modalWindow.on('shown.bs.modal', function (event) {
    return button.attr(id_field_name, event.relatedTarget.getAttribute(id_field_name));
  });

  var fetchDeleteImgs =
  /*#__PURE__*/
  function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7(checks, id) {
      var current_inf, headers;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              current_inf = {
                checks: checks,
                id: id
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
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function fetchDeleteImgs(_x7, _x8) {
      return _ref7.apply(this, arguments);
    };
  }();

  var mainHandler =
  /*#__PURE__*/
  function () {
    var _ref8 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee9(event) {
      var id, checks;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              id = event.target.getAttribute(id_field_name);
              _context9.next = 3;
              return getCheckImgs(id, id_field_name);

            case 3:
              checks = _context9.sent;
              _context9.next = 6;
              return fetchDeleteImgs(checks, id);

            case 6:
              _context9.next = 8;
              return _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        return _context8.abrupt("return", modalWindow.modal('hide'));

                      case 1:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }))();

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function mainHandler(_x9) {
      return _ref8.apply(this, arguments);
    };
  }();

  button.click(function (event) {
    return mainHandler(event);
  });
};

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

var url = '/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php';

var deleteImg = function deleteImg(modalWindow, button, id_field_name, table_name) {
  // DRY - проброс с кнопки запуска модалки на кнопку удаления вынести в утилиты
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
}; // DRY - соотносится с удалением периода


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlbWFsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwuanMiXSwibmFtZXMiOlsiZHJvcHpvbmVIYW5kbGVycyIsImRlbGV0ZUNvbmZpcm1hdGlvbnMiLCIkIiwiZGVsZXRlSW1nIiwiaW5pdF9vd2wiLCJEcm9wem9uZSIsImF1dG9EaXNjb3ZlciIsInRhYmxlTmFtZSIsInByZWZpeERyb3B6b25lIiwidGFyZ2V0RmVpbGQiLCJwYXJhbXMiLCJhcHBseV9pbml0IiwiaXRlbXMiLCJmb3JFYWNoIiwiY3VycmVudCIsImluaXRPbmVEcm9wem9uZSIsImlkIiwiZmV0Y2hJbWciLCJkcm9wem9uZUhhbmRsZXJzQ29tbW9uIiwidmFsdWVUYXJnZXRGZWlsZCIsImlkRHJvcHpvbmUiLCJhY2NlcHRlZEZpbGVzIiwiaW5pdCIsIm9uIiwiZmlsZSIsInhociIsImZvcm1EYXRhIiwiYXBwZW5kIiwiY3VycmVudF91cmwiLCJjdXJyZW50X2luZiIsImhlYWRlcnMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImltYWdlcyIsImRlbGV0ZUJ5SWQiLCJtb2RhbFdpbmRvdyIsInVybCIsImlkX2ZpZWxkX25hbWUiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIm1vZGFsIiwiRXJyb3IiLCJnZXRDaGVja0ltZ3MiLCJyZXN1bHQiLCJlYWNoIiwiaW5kZXgiLCJpdGVtIiwiY3VycmVudEl0ZW1KUSIsInByb3AiLCJwdXNoIiwidmFsIiwidGFyZ2V0QnV0dG9uIiwiY2xpY2siLCJhdHRyIiwicmVsYXRlZFRhcmdldCIsImRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMiLCJidXR0b24iLCJmZXRjaERlbGV0ZUltZ3MiLCJjaGVja3MiLCJtYWluSGFuZGxlciIsImRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QiLCJ0YWJsZV9uYW1lIiwib3dsQ2Fyb3VzZWwiLCJsb29wIiwibWFyZ2luIiwibmF2IiwiYXV0b3BsYXkiLCJzbWFydFNwZWVkIiwiYXV0b3BsYXlUaW1lb3V0IiwicmVzcG9uc2l2ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0FBLG9HQUFnQixDQUFDLFdBQUQsRUFBYyxhQUFkLEVBQTZCLGNBQTdCLEVBQTZDLFFBQTdDLENB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LENBQUQsQ0FBbUJpRSxXQUFuQixDQUErQjtBQUMzQkMsUUFBSSxFQUFFLElBRHFCO0FBRTNCQyxVQUFNLEVBQUUsRUFGbUI7QUFHM0JDLE9BQUcsRUFBRSxLQUhzQjtBQUkzQkMsWUFBUSxFQUFFLElBSmlCO0FBSzNCQyxjQUFVLEVBQUUsSUFMZTtBQU0zQkMsbUJBQWUsRUFBRSxJQU5VO0FBTzNCQyxjQUFVLEVBQUU7QUFDUixTQUFHO0FBQ0M5RCxhQUFLLEVBQUU7QUFEUixPQURLO0FBSVIsV0FBSztBQUNEQSxhQUFLLEVBQUU7QUFETixPQUpHO0FBT1IsWUFBTTtBQUNGQSxhQUFLLEVBQUU7QUFETDtBQVBFO0FBUGUsR0FBL0I7QUFtQkgsQ0FwQkQ7O0FBc0JlUix1RUFBZixFIiwiZmlsZSI6Ii4vZmVtYWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2ZlbWFsZXMuanNcIik7XG4iLCJpbXBvcnQgeyBkcm9wem9uZUhhbmRsZXJzIH0gZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMnXG5pbXBvcnQgeyBkZWxldGVDb25maXJtYXRpb25zIH0gZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlJ1xuaW1wb3J0IGRlbGV0ZUltZyBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nJ1xuaW1wb3J0IGluaXRfb3dsIGZyb20gJy4vZnJvbnQvdXRpbHMvaW5pdF9vd2xfY2FydXNlbCdcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0YTQvtGC0L4g0LrQvtGI0LXQulxuZHJvcHpvbmVIYW5kbGVycygnY2F0c2FkdWx0JywgJ215LWRyb3B6b25lJywgJ2NhdHNhZHVsdF9pZCcsICdmZW1hbGUnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC60L7RiNC10LpcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlQWR1bHQnKSwgXG4gICAgJCgnI2RlbGV0ZV9hZHVsdCcpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL2NhdF9DUlVEL2NhdF9kZWxldGUucGhwJyxcbiAgICAnY2F0c2FkdWx0X2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNC5INC60L7RiNC10LpcbmRlbGV0ZUltZyhcbiAgICAkKCcjbW9kYWxEZWxldGVJbWcnKSxcbiAgICAkKCcjZGVsZXRlX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLCBcbiAgICAnaW1nY2F0c2FkdWx0JylcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQvtCy0LjQvdC+0Lkg0LrQsNGA0YPRgdC10LvQuFxuaW5pdF9vd2woKSIsIkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzID0gYXN5bmMgKHRhYmxlTmFtZSwgcHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBwYXJhbXMgPSBbXSkgPT4ge1xuXG4gICAgY29uc3QgYXBwbHlfaW5pdCA9IGFzeW5jIGl0ZW1zID0+IFxuICAgICAgICBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgY3VycmVudC5pZCkpXG5cbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKHRhYmxlTmFtZSwgcGFyYW1zKSlcblxufVxuXG5leHBvcnQgY29uc3QgZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQpID0+IFxuICAgIGF3YWl0IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsICdjb21tb24nKVxuXG5jb25zdCBpbml0T25lRHJvcHpvbmUgPSBhc3luYyAocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKSA9PiB7XG5cbiAgICBsZXQgaWREcm9wem9uZSA9IGAjJHtwcmVmaXhEcm9wem9uZX0tJHt2YWx1ZVRhcmdldEZlaWxkfWBcblxuICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQodGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9KVxuXG59XG5cbmNvbnN0IGZldGNoSW1nID0gYXN5bmMgKHRhYmxlTmFtZSwgcGFyYW1zID0gW10pID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9nZXRfZXhoaWJpdGlvbl9waG90by5waHAnO1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgdGFibGVOYW1lLCBwYXJhbXMgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgKGF3YWl0IGZldGNoKGN1cnJlbnRfdXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59IiwiY29uc3QgZGVsZXRlQnlJZCA9IGFzeW5jIChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICBsZXQgaWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG5cbiAgICB0cnkge1xuXG4gICAgICAgIGF3YWl0IGZldGNoKHVybCwgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkIH0pLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuXG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LvRg9GH0LjRgtGMINC00LDQvdC90YvQtSDQvtGCINGB0LXRgNCy0LXRgNCwJylcbiAgICB9XG59XG5cbmNvbnN0IGdldENoZWNrSW1ncyA9IGFzeW5jIChpZCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0WyR7aWRfZmllbGRfbmFtZX0gPSAke2lkfV1gKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1KUSA9ICQoaXRlbSlcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtSlEucHJvcChcImNoZWNrZWRcIikpXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50SXRlbUpRLnZhbCgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0O1xuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zID0gKG1vZGFsV2luZG93LCB0YXJnZXRCdXR0b24sIHVybCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuXG4gICAgdGFyZ2V0QnV0dG9uLmNsaWNrKCgpID0+IGRlbGV0ZUJ5SWQobW9kYWxXaW5kb3csIHVybCwgaWRfZmllbGRfbmFtZSkpXG5cbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLFxuICAgICAgICBldmVudCA9PiB0YXJnZXRCdXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMgPSAoKSA9PiB7XG5cbiAgICBsZXQgbW9kYWxXaW5kb3cgICA9ICQoJyNtb2RhbERlbGV0ZVN0YXRlJylcbiAgICBsZXQgYnV0dG9uICAgICAgICA9ICQoJyNkZWxldGVfc3RhdGUnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ3N0YXRlX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJy9JeHRsYW4tcGhwL3NyYy9EQi9raXR0eV9DUlVEL3N0YXRlX0NSVUQvc3RhdGVfZGVsZXRlX2dyb3VwLnBocCdcblxuICAgIGNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MpID0+IHtcbiAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoJ3RydWUnLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlUGVyaW9kJylcbiAgICBsZXQgYnV0dG9uICAgICAgICA9ICQoJyNkZWxldGVfcGVyaW9kJylcbiAgICBsZXQgaWRfZmllbGRfbmFtZSA9ICdicm9vZF9pZCdcbiAgICBsZXQgdXJsICAgICAgICAgICA9ICcvSXh0bGFuLXBocC9zcmMvREIva2l0dHlfQ1JVRC9wZXJpb2RfQ1JVRC9wZXJpb2RfZGVsZXRlX2dyb3VwLnBocCdcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcywgaWQpID0+IHtcbiAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MsIGlkIH1cbiAgICAgICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgaWQpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSlcblxufSIsImxldCB1cmwgPScvSXh0bGFuLXBocC9zcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvaW1nX0NSVUQvaW1nX2RlbGV0ZV9ncm91cC5waHAnXG5cbmNvbnN0IGRlbGV0ZUltZyA9IChtb2RhbFdpbmRvdywgYnV0dG9uLCBpZF9maWVsZF9uYW1lLCB0YWJsZV9uYW1lKSA9PiB7XG5cbiAgICAvLyBEUlkgLSDQv9GA0L7QsdGA0L7RgSDRgSDQutC90L7Qv9C60Lgg0LfQsNC/0YPRgdC60LAg0LzQvtC00LDQu9C60Lgg0L3QsCDQutC90L7Qv9C60YMg0YPQtNCw0LvQtdC90LjRjyDQstGL0L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiBidXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgaWQgICAgID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKGlkLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MsIHVybCwgdGFibGVfbmFtZSlcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKSBcblxufVxuXG4vLyBEUlkgLSDRgdC+0L7RgtC90L7RgdC40YLRgdGPINGBINGD0LTQsNC70LXQvdC40LXQvCDQv9C10YDQuNC+0LTQsFxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7IFxuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0WyR7aWRfZmllbGRfbmFtZX0gPSAke2lkfV1gKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1KUSA9ICQoaXRlbSlcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtSlEucHJvcChcImNoZWNrZWRcIikpXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50SXRlbUpRLnZhbCgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG5cbn1cblxuY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MsIHRhYmxlX25hbWUgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUltZyIsImNvbnN0IGluaXRfb3dsID0gKCkgPT4ge1xuICAgICQoJy5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBzbWFydFNwZWVkOiAzMDAwLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0X293bCJdLCJzb3VyY2VSb290IjoiIn0=