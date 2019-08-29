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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/males.js");
/******/ })
/************************************************************************/
/******/ ({

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

            if ($(idDropzone).length !== 0) {
              new Dropzone(idDropzone, {
                acceptedFiles: "image/*",
                init: function init() {
                  this.on("sending", function (file, xhr, formData) {
                    formData.append(targetFeild, valueTargetFeild);
                  });
                }
              });
            }

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

/***/ }),

/***/ "./src/males.js":
/*!**********************!*\
  !*** ./src/males.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front/dropzones/dropzonesHandlers_Index.js */ "./src/front/dropzones/dropzonesHandlers_Index.js");
/* harmony import */ var _front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front/utils/confirmation_delete */ "./src/front/utils/confirmation_delete.js");
/* harmony import */ var _front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./front/utils/confirmation_delete_img */ "./src/front/utils/confirmation_delete_img.js");
/* harmony import */ var _front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front/utils/init_owl_carusel */ "./src/front/utils/init_owl_carusel.js");



 // Инициализация дропзон для загрузки фото котов

Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__["dropzoneHandlers"])('catsadult', 'my-dropzone', 'catsadult_id', 'male'); // Удаление котов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["deleteConfirmations"])($('#modalDeleteAdult'), $('#delete_adult'), '/Ixtlan-php/src/DB/cat_CRUD/cat_delete.php', 'catsadult_id'); // Удаление изображений котов

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__["default"])($('#modalDeleteImg'), $('#delete_img'), 'group_id', 'imgcatsadult'); // Инициализация совиной карусели

Object(_front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hbGVzLmpzIl0sIm5hbWVzIjpbIkRyb3B6b25lIiwiYXV0b0Rpc2NvdmVyIiwiZHJvcHpvbmVIYW5kbGVycyIsInRhYmxlTmFtZSIsInByZWZpeERyb3B6b25lIiwidGFyZ2V0RmVpbGQiLCJwYXJhbXMiLCJhcHBseV9pbml0IiwiaXRlbXMiLCJmb3JFYWNoIiwiY3VycmVudCIsImluaXRPbmVEcm9wem9uZSIsImlkIiwiZmV0Y2hJbWciLCJkcm9wem9uZUhhbmRsZXJzQ29tbW9uIiwidmFsdWVUYXJnZXRGZWlsZCIsImlkRHJvcHpvbmUiLCIkIiwibGVuZ3RoIiwiYWNjZXB0ZWRGaWxlcyIsImluaXQiLCJvbiIsImZpbGUiLCJ4aHIiLCJmb3JtRGF0YSIsImFwcGVuZCIsImN1cnJlbnRfdXJsIiwiY3VycmVudF9pbmYiLCJoZWFkZXJzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJpbWFnZXMiLCJkZWxldGVCeUlkIiwibW9kYWxXaW5kb3ciLCJ1cmwiLCJpZF9maWVsZF9uYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJtb2RhbCIsIkVycm9yIiwiZ2V0Q2hlY2tJbWdzIiwicmVzdWx0IiwiZWFjaCIsImluZGV4IiwiaXRlbSIsImN1cnJlbnRJdGVtSlEiLCJwcm9wIiwicHVzaCIsInZhbCIsImRlbGV0ZUNvbmZpcm1hdGlvbnMiLCJ0YXJnZXRCdXR0b24iLCJjbGljayIsImF0dHIiLCJyZWxhdGVkVGFyZ2V0IiwiZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyIsImJ1dHRvbiIsImZldGNoRGVsZXRlSW1ncyIsImNoZWNrcyIsIm1haW5IYW5kbGVyIiwiZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCIsImRlbGV0ZUltZyIsInRhYmxlX25hbWUiLCJpbml0X293bCIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsIm5hdiIsImF1dG9wbGF5Iiwic21hcnRTcGVlZCIsImF1dG9wbGF5VGltZW91dCIsInJlc3BvbnNpdmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQSxRQUFRLENBQUNDLFlBQVQsR0FBd0IsS0FBeEI7QUFFTyxJQUFNQyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHLGtCQUFPQyxT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LFlBQU07QUFDRkEsYUFBSyxFQUFFO0FBREw7QUFQRTtBQVBlLEdBQS9CO0FBbUJILENBcEJEOztBQXNCZTJELHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0FqRSxvR0FBZ0IsQ0FBQyxXQUFELEVBQWMsYUFBZCxFQUE2QixjQUE3QixFQUE2QyxNQUE3QyxDQUFoQixDLENBRUE7O0FBQ0FvRCw0RkFBbUIsQ0FDZnJDLENBQUMsQ0FBQyxtQkFBRCxDQURjLEVBRWZBLENBQUMsQ0FBQyxlQUFELENBRmMsRUFHZiw0Q0FIZSxFQUlmLGNBSmUsQ0FBbkIsQyxDQU1BOztBQUNBZ0Qsb0ZBQVMsQ0FDTGhELENBQUMsQ0FBQyxpQkFBRCxDQURJLEVBRUxBLENBQUMsQ0FBQyxhQUFELENBRkksRUFHTCxVQUhLLEVBSUwsY0FKSyxDQUFULEMsQ0FNQTs7QUFDQWtELDZFQUFRLEciLCJmaWxlIjoiLi9tYWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21hbGVzLmpzXCIpO1xuIiwiRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAodGFibGVOYW1lLCBwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHBhcmFtcyA9IFtdKSA9PiB7XG5cbiAgICBjb25zdCBhcHBseV9pbml0ID0gYXN5bmMgaXRlbXMgPT4gXG4gICAgICAgIGl0ZW1zLmZvckVhY2goY3VycmVudCA9PiBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBjdXJyZW50LmlkKSlcblxuICAgIGF3YWl0IGFwcGx5X2luaXQoYXdhaXQgZmV0Y2hJbWcodGFibGVOYW1lLCBwYXJhbXMpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCkgPT4gXG4gICAgYXdhaXQgaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgJ2NvbW1vbicpXG5cbmNvbnN0IGluaXRPbmVEcm9wem9uZSA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpID0+IHtcblxuICAgIGNvbnN0IGlkRHJvcHpvbmUgPSBgIyR7cHJlZml4RHJvcHpvbmV9LSR7dmFsdWVUYXJnZXRGZWlsZH1gXG5cbiAgICBpZiAoJChpZERyb3B6b25lKS5sZW5ndGggIT09IDApIHtcblxuICAgICAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCh0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbn1cblxuY29uc3QgZmV0Y2hJbWcgPSBhc3luYyAodGFibGVOYW1lLCBwYXJhbXMgPSBbXSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2dldF9leGhpYml0aW9uX3Bob3RvLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyB0YWJsZU5hbWUsIHBhcmFtcyB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyBcbiAgICB9KSkuanNvbigpXG5cbiAgICByZXR1cm4gaW1hZ2VzXG5cbn0iLCJjb25zdCBkZWxldGVCeUlkID0gYXN5bmMgKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcblxuICAgIHRyeSB7XG5cbiAgICAgICAgYXdhaXQgZmV0Y2godXJsLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG5cbiAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7Qu9GD0YfQuNGC0Ywg0LTQsNC90L3Ri9C1INC+0YIg0YHQtdGA0LLQtdGA0LAnKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHQ7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnMgPSAobW9kYWxXaW5kb3csIHRhcmdldEJ1dHRvbiwgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICB0YXJnZXRCdXR0b24uY2xpY2soKCkgPT4gZGVsZXRlQnlJZChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSlcblxuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsXG4gICAgICAgIGV2ZW50ID0+IHRhcmdldEJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlU3RhdGUnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9zdGF0ZScpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnc3RhdGVfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnL0l4dGxhbi1waHAvc3JjL0RCL2tpdHR5X0NSVUQvc3RhdGVfQ1JVRC9zdGF0ZV9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcykgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcyB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncygndHJ1ZScsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcylcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVQZXJpb2QnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9wZXJpb2QnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ2Jyb29kX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJy9JeHRsYW4tcGhwL3NyYy9EQi9raXR0eV9DUlVEL3BlcmlvZF9DUlVEL3BlcmlvZF9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCBpZCkgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgaWQgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCBpZClcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59IiwibGV0IHVybCA9Jy9JeHRsYW4tcGhwL3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9pbWdfQ1JVRC9pbWdfZGVsZXRlX2dyb3VwLnBocCdcblxuY29uc3QgZGVsZXRlSW1nID0gKG1vZGFsV2luZG93LCBidXR0b24sIGlkX2ZpZWxkX25hbWUsIHRhYmxlX25hbWUpID0+IHtcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpIFxuXG59XG5cbi8vIERSWSAtINGB0L7QvtGC0L3QvtGB0LjRgtGB0Y8g0YEg0YPQtNCw0LvQtdC90LjQtdC8INC/0LXRgNC40L7QtNCwXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHsgXG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgdGFibGVfbmFtZSB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSW1nIiwiY29uc3QgaW5pdF9vd2wgPSAoKSA9PiB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfb3dsIiwiaW1wb3J0IHsgZHJvcHpvbmVIYW5kbGVycyB9IGZyb20gJy4vZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX0luZGV4LmpzJ1xuaW1wb3J0IHsgZGVsZXRlQ29uZmlybWF0aW9ucyB9IGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZSdcbmltcG9ydCBkZWxldGVJbWcgZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX2ltZydcbmltcG9ydCBpbml0X293bCBmcm9tICcuL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwnXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC00YDQvtC/0LfQvtC9INC00LvRjyDQt9Cw0LPRgNGD0LfQutC4INGE0L7RgtC+INC60L7RgtC+0LJcbmRyb3B6b25lSGFuZGxlcnMoJ2NhdHNhZHVsdCcsICdteS1kcm9wem9uZScsICdjYXRzYWR1bHRfaWQnLCAnbWFsZScpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LrQvtGC0L7QslxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVBZHVsdCcpLCBcbiAgICAkKCcjZGVsZXRlX2FkdWx0JyksIFxuICAgICcvSXh0bGFuLXBocC9zcmMvREIvY2F0X0NSVUQvY2F0X2RlbGV0ZS5waHAnLFxuICAgICdjYXRzYWR1bHRfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0LrQvtGC0L7QslxuZGVsZXRlSW1nKFxuICAgICQoJyNtb2RhbERlbGV0ZUltZycpLFxuICAgICQoJyNkZWxldGVfaW1nJyksIFxuICAgICdncm91cF9pZCcsXG4gICAgJ2ltZ2NhdHNhZHVsdCcpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QstC40L3QvtC5INC60LDRgNGD0YHQtdC70LhcbmluaXRfb3dsKCkiXSwic291cmNlUm9vdCI6IiJ9