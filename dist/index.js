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

/***/ "./src/front/auth/doAuth.js":
/*!**********************************!*\
  !*** ./src/front/auth/doAuth.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//const loginGroup = $('#group_login')
//const loginField = $('#login')
var passwordField = $('#password');
var emailField = $('#email');

var getAuth = function getAuth() {
  var results =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dateIsValid(loginField.val(), passwordField.val(), emailField.val());

            case 2:
              res = _context.sent;
              console.log(res.ui); //res.foreach(item => console.log(item))

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function results() {
      return _ref.apply(this, arguments);
    };
  }();

  $('#auth_submit').click(function () {
    results();
    /* let passwordField        = $('#password')
    let confirmPasswordField = $('#confirmpassword')
     if (passwordField.val() === confirmPasswordField.val()) {
         $('#auth_form').submit()
     } else {
         passwordField.attr("placeholder", "введенные пароли не совпадают!")
        confirmPasswordField.attr("placeholder", "введенные пароли не совпадают!")
         passwordField.val('')
        confirmPasswordField.val('')
         passwordField.addClass('is-invalid')
        confirmPasswordField.addClass('is-invalid')
     } */
  });
};

var getInvalidMessage =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(fieldName, fieldValue) {
    var url, headers, current_inf, invalidMessage;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = 'src/auth/check.php';
            headers = {
              'Content-Type': 'application/json'
            };
            current_inf = {
              fieldName: fieldName,
              fieldValue: fieldValue
            };
            _context2.next = 5;
            return fetch(url, {
              method: 'POST',
              body: JSON.stringify(current_inf),
              headers: headers
            });

          case 5:
            _context2.next = 7;
            return _context2.sent.json();

          case 7:
            invalidMessage = _context2.sent;
            return _context2.abrupt("return", invalidMessage);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getInvalidMessage(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var checkField =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(fieldName) {
    var field, fieldValue, fieldGroup, idInvalidField, invalidMessage;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            field = $("#".concat(fieldName));
            fieldValue = field.val();
            fieldGroup = $("#group_".concat(fieldName));
            idInvalidField = "invalid".concat(fieldName);
            _context3.next = 6;
            return getInvalidMessage(fieldName, fieldValue);

          case 6:
            invalidMessage = _context3.sent;

            if (fieldValue === '' || invalidMessage === '') {
              field.removeClass('is-invalid');
            } else {
              field.addClass('is-invalid');

              if (!$("div").is("#".concat(idInvalidField))) {
                fieldGroup.append("<div id=\"".concat(idInvalidField, "\" class=\"invalid-feedback\">\n                    ").concat(invalidMessage, "\n                </div>"));
              }
            }

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function checkField(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var FIELDS = ['login', 'email', 'password', 'confirmpassword'];
FIELDS.forEach(function (item) {
  return $("#".concat(item)).keyup(function () {
    return checkField(item);
  });
});
/* harmony default export */ __webpack_exports__["default"] = (getAuth);

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
/* harmony import */ var _front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./front/utils/init_owl_carusel */ "./src/front/utils/init_owl_carusel.js");
/* harmony import */ var _front_auth_doAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front/auth/doAuth */ "./src/front/auth/doAuth.js");






Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__["dropzoneHandlers"])('exhibitions', 'my-dropzone', 'exhibition_id');
Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__["dropzoneHandlers"])('kindofdocuments', 'my-dropzone-kind-of-documents', 'kindofdocuments_id'); //Удаление новостей DRY - удаление новостей расшарить на весь проект

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["deleteConfirmations"])($('#modalDeleteNews'), $('#delete_news'), '/Ixtlan-php/src/DB/news_CRUD/news_delete.php', 'news_index'); // Удаление выставок

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["deleteConfirmations"])($('#modalDeleteExhibition'), $('#delete_exhibition'), '/Ixtlan-php/src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_delete.php', 'exhibition_id'); // Удаление типов документов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["deleteConfirmations"])($('#modalDeleteKindOfDocument'), $('#delete_kind_of_document'), '/Ixtlan-php/src/DB/document_CRUD/kind_of_document_CRUD/kind_of_document_delete.php', 'kind_of_document_id'); // Удаление изображений с выставок
// Удаление изображений кошек

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__["default"])($('#modalDeleteImg'), $('#delete_img'), 'group_id', 'imgexhibitions'); // Удаление изображений документов

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__["default"])($('#modalDeleteImg'), $('#delete_img'), 'group_id', 'imgkindofdocument'); // Удаление видео

Object(_front_utils_confirmation_delete_video__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Инициализация совиной карусели

Object(_front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Аутентификация пользователя

Object(_front_auth_doAuth__WEBPACK_IMPORTED_MODULE_5__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2F1dGgvZG9BdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX3ZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwYXNzd29yZEZpZWxkIiwiJCIsImVtYWlsRmllbGQiLCJnZXRBdXRoIiwicmVzdWx0cyIsImRhdGVJc1ZhbGlkIiwibG9naW5GaWVsZCIsInZhbCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ1aSIsImNsaWNrIiwiZ2V0SW52YWxpZE1lc3NhZ2UiLCJmaWVsZE5hbWUiLCJmaWVsZFZhbHVlIiwidXJsIiwiaGVhZGVycyIsImN1cnJlbnRfaW5mIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJpbnZhbGlkTWVzc2FnZSIsImNoZWNrRmllbGQiLCJmaWVsZCIsImZpZWxkR3JvdXAiLCJpZEludmFsaWRGaWVsZCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJpcyIsImFwcGVuZCIsIkZJRUxEUyIsImZvckVhY2giLCJpdGVtIiwia2V5dXAiLCJEcm9wem9uZSIsImF1dG9EaXNjb3ZlciIsImRyb3B6b25lSGFuZGxlcnMiLCJ0YWJsZU5hbWUiLCJwcmVmaXhEcm9wem9uZSIsInRhcmdldEZlaWxkIiwicGFyYW1zIiwiYXBwbHlfaW5pdCIsIml0ZW1zIiwiY3VycmVudCIsImluaXRPbmVEcm9wem9uZSIsImlkIiwiZmV0Y2hJbWciLCJkcm9wem9uZUhhbmRsZXJzQ29tbW9uIiwidmFsdWVUYXJnZXRGZWlsZCIsImlkRHJvcHpvbmUiLCJhY2NlcHRlZEZpbGVzIiwiaW5pdCIsIm9uIiwiZmlsZSIsInhociIsImZvcm1EYXRhIiwiY3VycmVudF91cmwiLCJpbWFnZXMiLCJkZWxldGVCeUlkIiwibW9kYWxXaW5kb3ciLCJpZF9maWVsZF9uYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJtb2RhbCIsIkVycm9yIiwiZ2V0Q2hlY2tJbWdzIiwicmVzdWx0IiwiZWFjaCIsImluZGV4IiwiY3VycmVudEl0ZW1KUSIsInByb3AiLCJwdXNoIiwiZGVsZXRlQ29uZmlybWF0aW9ucyIsInRhcmdldEJ1dHRvbiIsImF0dHIiLCJyZWxhdGVkVGFyZ2V0IiwiZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyIsImJ1dHRvbiIsImZldGNoRGVsZXRlSW1ncyIsImNoZWNrcyIsIm1haW5IYW5kbGVyIiwiZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCIsImRlbGV0ZUltZyIsInRhYmxlX25hbWUiLCJkZWxldGVWaWRlbyIsImZldGNoRGVsZXRlVmlkZW8iLCJnZXRDaGVja1ZpZGVvIiwiaW5pdF9vd2wiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJtYXJnaW4iLCJuYXYiLCJhdXRvcGxheSIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheVRpbWVvdXQiLCJyZXNwb25zaXZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7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QUFELENBRkksRUFHTCxVQUhLLEVBSUwsbUJBSkssQ0FBVCxDLENBTUE7O0FBQ0F3RixzRkFBVyxHLENBRVg7O0FBQ0FHLDZFQUFRLEcsQ0FFUjs7QUFDQXpGLGtFQUFPLEciLCJmaWxlIjoiLi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy9jb25zdCBsb2dpbkdyb3VwID0gJCgnI2dyb3VwX2xvZ2luJylcblxuLy9jb25zdCBsb2dpbkZpZWxkID0gJCgnI2xvZ2luJylcbmNvbnN0IHBhc3N3b3JkRmllbGQgPSAkKCcjcGFzc3dvcmQnKVxuY29uc3QgZW1haWxGaWVsZCA9ICQoJyNlbWFpbCcpXG5cbmNvbnN0IGdldEF1dGggPSAoKSA9PiB7XG5cbiAgICBjb25zdCByZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRlSXNWYWxpZChsb2dpbkZpZWxkLnZhbCgpLCBwYXNzd29yZEZpZWxkLnZhbCgpLCBlbWFpbEZpZWxkLnZhbCgpKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudWkpXG4gICAgICAgIC8vcmVzLmZvcmVhY2goaXRlbSA9PiBjb25zb2xlLmxvZyhpdGVtKSlcbiAgICB9XG5cbiAgICAkKCcjYXV0aF9zdWJtaXQnKS5jbGljaygoKSA9PiB7XG4gICAgICAgIHJlc3VsdHMoKVxuXG4gICAgICAgIC8qIGxldCBwYXNzd29yZEZpZWxkICAgICAgICA9ICQoJyNwYXNzd29yZCcpXG4gICAgICAgIGxldCBjb25maXJtUGFzc3dvcmRGaWVsZCA9ICQoJyNjb25maXJtcGFzc3dvcmQnKVxuXG4gICAgICAgIGlmIChwYXNzd29yZEZpZWxkLnZhbCgpID09PSBjb25maXJtUGFzc3dvcmRGaWVsZC52YWwoKSkge1xuXG4gICAgICAgICAgICAkKCcjYXV0aF9mb3JtJykuc3VibWl0KClcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBwYXNzd29yZEZpZWxkLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBcItCy0LLQtdC00LXQvdC90YvQtSDQv9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YIhXCIpXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmRGaWVsZC5hdHRyKFwicGxhY2Vob2xkZXJcIiwgXCLQstCy0LXQtNC10L3QvdGL0LUg0L/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCIVwiKVxuXG4gICAgICAgICAgICBwYXNzd29yZEZpZWxkLnZhbCgnJylcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZEZpZWxkLnZhbCgnJylcblxuICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmRGaWVsZC5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG5cbiAgICAgICAgfSAqL1xuICAgIH0pXG59XG5cbmNvbnN0IGdldEludmFsaWRNZXNzYWdlID0gYXN5bmMgKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgPT4ge1xuXG4gICAgY29uc3QgdXJsID0gJ3NyYy9hdXRoL2NoZWNrLnBocCdcbiAgICBjb25zdCBoZWFkZXJzID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICBjb25zdCBjdXJyZW50X2luZiA9IHsgZmllbGROYW1lLCBmaWVsZFZhbHVlIH1cblxuICAgIGxldCBpbnZhbGlkTWVzc2FnZSA9IGF3YWl0IChhd2FpdCBmZXRjaCh1cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyBcbiAgICB9KSkuanNvbigpXG4gICAgXG4gICAgcmV0dXJuIGludmFsaWRNZXNzYWdlXG5cbn1cblxuY29uc3QgY2hlY2tGaWVsZCA9IGFzeW5jIChmaWVsZE5hbWUpID0+IHtcblxuICAgIGNvbnN0IGZpZWxkICAgICAgICAgID0gJChgIyR7ZmllbGROYW1lfWApXG4gICAgY29uc3QgZmllbGRWYWx1ZSAgICAgPSBmaWVsZC52YWwoKVxuICAgIGNvbnN0IGZpZWxkR3JvdXAgICAgID0gJChgI2dyb3VwXyR7ZmllbGROYW1lfWApXG4gICAgY29uc3QgaWRJbnZhbGlkRmllbGQgPSBgaW52YWxpZCR7ZmllbGROYW1lfWBcblxuICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYXdhaXQgZ2V0SW52YWxpZE1lc3NhZ2UoZmllbGROYW1lLCBmaWVsZFZhbHVlKVxuXG4gICAgaWYgKChmaWVsZFZhbHVlID09PSAnJykgfHwgKGludmFsaWRNZXNzYWdlID09PSAnJykpIHtcbiAgICAgICAgZmllbGQucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbiAgICAgICAgaWYgKCEkKFwiZGl2XCIpLmlzKGAjJHtpZEludmFsaWRGaWVsZH1gKSkge1xuICAgICAgICAgICAgZmllbGRHcm91cC5hcHBlbmQoXG4gICAgICAgICAgICAgICAgYDxkaXYgaWQ9XCIke2lkSW52YWxpZEZpZWxkfVwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAke2ludmFsaWRNZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvZGl2PmApXG4gICAgICAgIH1cbiAgICB9ICBcbn1cblxuY29uc3QgRklFTERTID0gWydsb2dpbicsICdlbWFpbCcsICdwYXNzd29yZCcsICdjb25maXJtcGFzc3dvcmQnXVxuXG5GSUVMRFMuZm9yRWFjaChpdGVtID0+ICQoYCMke2l0ZW19YCkua2V5dXAoKCkgPT4gY2hlY2tGaWVsZChpdGVtKSkpXG5cbmV4cG9ydCBkZWZhdWx0IGdldEF1dGgiLCJEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZVxuXG5leHBvcnQgY29uc3QgZHJvcHpvbmVIYW5kbGVycyA9IGFzeW5jICh0YWJsZU5hbWUsIHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgcGFyYW1zID0gW10pID0+IHtcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBcbiAgICAgICAgaXRlbXMuZm9yRWFjaChjdXJyZW50ID0+IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIGN1cnJlbnQuaWQpKVxuXG4gICAgYXdhaXQgYXBwbHlfaW5pdChhd2FpdCBmZXRjaEltZyh0YWJsZU5hbWUsIHBhcmFtcykpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnNDb21tb24gPSBhc3luYyAocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkKSA9PiBcbiAgICBhd2FpdCBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCAnY29tbW9uJylcblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZCkgPT4ge1xuXG4gICAgbGV0IGlkRHJvcHpvbmUgPSBgIyR7cHJlZml4RHJvcHpvbmV9LSR7dmFsdWVUYXJnZXRGZWlsZH1gXG5cbiAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfSlcblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICh0YWJsZU5hbWUsIHBhcmFtcyA9IFtdKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJ3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9leGhpYml0aW9uX0NSVUQvZ2V0X2V4aGliaXRpb25fcGhvdG8ucGhwJztcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IHRhYmxlTmFtZSwgcGFyYW1zIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IGltYWdlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChjdXJyZW50X3VybCwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufSIsImNvbnN0IGRlbGV0ZUJ5SWQgPSBhc3luYyAobW9kYWxXaW5kb3csIHVybCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuXG4gICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuXG4gICAgdHJ5IHtcblxuICAgICAgICBhd2FpdCBmZXRjaCh1cmwsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcblxuICAgIH0gY2F0Y2gge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/QvtC70YPRh9C40YLRjCDQtNCw0L3QvdGL0LUg0L7RgiDRgdC10YDQstC10YDQsCcpXG4gICAgfVxufVxuXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFske2lkX2ZpZWxkX25hbWV9ID0gJHtpZH1dYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9ucyA9IChtb2RhbFdpbmRvdywgdGFyZ2V0QnV0dG9uLCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIHRhcmdldEJ1dHRvbi5jbGljaygoKSA9PiBkZWxldGVCeUlkKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpKVxuXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJyxcbiAgICAgICAgZXZlbnQgPT4gdGFyZ2V0QnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zU3RhdGVzID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVTdGF0ZScpXG4gICAgbGV0IGJ1dHRvbiAgICAgICAgPSAkKCcjZGVsZXRlX3N0YXRlJylcbiAgICBsZXQgaWRfZmllbGRfbmFtZSA9ICdzdGF0ZV9pZCdcbiAgICBsZXQgdXJsICAgICAgICAgICA9ICcvSXh0bGFuLXBocC9zcmMvREIva2l0dHlfQ1JVRC9zdGF0ZV9DUlVEL3N0YXRlX2RlbGV0ZV9ncm91cC5waHAnXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzKSA9PiB7XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzIH1cbiAgICAgICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKCd0cnVlJywgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QgPSAoKSA9PiB7XG5cbiAgICBsZXQgbW9kYWxXaW5kb3cgICA9ICQoJyNtb2RhbERlbGV0ZVBlcmlvZCcpXG4gICAgbGV0IGJ1dHRvbiAgICAgICAgPSAkKCcjZGVsZXRlX3BlcmlvZCcpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnYnJvb2RfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnL0l4dGxhbi1waHAvc3JjL0RCL2tpdHR5X0NSVUQvcGVyaW9kX0NSVUQvcGVyaW9kX2RlbGV0ZV9ncm91cC5waHAnXG5cbiAgICAvLyBEUlkgLSDQv9GA0L7QsdGA0L7RgSDRgSDQutC90L7Qv9C60Lgg0LfQsNC/0YPRgdC60LAg0LzQvtC00LDQu9C60Lgg0L3QsCDQutC90L7Qv9C60YMg0YPQtNCw0LvQtdC90LjRjyDQstGL0L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiBidXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxuICAgIGNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MsIGlkKSA9PiB7XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzLCBpZCB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICBcbiAgICAgICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgaWQgICAgID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKGlkLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MsIGlkKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpXG5cbn0iLCJsZXQgdXJsID0nL0l4dGxhbi1waHAvc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2ltZ19DUlVEL2ltZ19kZWxldGVfZ3JvdXAucGhwJ1xuXG5jb25zdCBkZWxldGVJbWcgPSAobW9kYWxXaW5kb3csIGJ1dHRvbiwgaWRfZmllbGRfbmFtZSwgdGFibGVfbmFtZSkgPT4ge1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSkgXG5cbn1cblxuLy8gRFJZIC0g0YHQvtC+0YLQvdC+0YHQuNGC0YHRjyDRgSDRg9C00LDQu9C10L3QuNC10Lwg0L/QtdGA0LjQvtC00LBcbmNvbnN0IGdldENoZWNrSW1ncyA9IGFzeW5jIChpZCwgaWRfZmllbGRfbmFtZSkgPT4geyBcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFske2lkX2ZpZWxkX25hbWV9ID0gJHtpZH1dYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG59XG5cbmNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MsIHVybCwgdGFibGVfbmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzLCB0YWJsZV9uYW1lIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVJbWciLCJjb25zdCBkZWxldGVWaWRlbyA9ICgpID0+IHtcbiAgICAkKCcjZGVsZXRlX3ZpZGVvJykuY2xpY2soKCkgPT4gbWFpbkhhbmRsZXIoKSkgXG59XG5cbmNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgYXdhaXQgZmV0Y2hEZWxldGVWaWRlbyhhd2FpdCBnZXRDaGVja1ZpZGVvKCkpICAgXG4gICAgYXdhaXQgKGFzeW5jICgpID0+ICQoJyNtb2RhbERlbGV0ZVZpZGVvJykubW9kYWwoJ2hpZGUnKSkoKVxuXG59XG5cbmNvbnN0IGdldENoZWNrVmlkZW8gPSBhc3luYyAoKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbdGhpc192aWRlbyA9IHRydWVdYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG59XG5cbmNvbnN0IGZldGNoRGVsZXRlVmlkZW8gPSBhc3luYyAoY2hlY2tzKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJy9JeHRsYW4tcGhwL3NyYy9EQi92aWRlb19DUlVEL3ZpZGVvX2RlbGV0ZV9ncm91cC5waHAnXG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBmZXRjaChjdXJyZW50X3VybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlVmlkZW8iLCJjb25zdCBpbml0X293bCA9ICgpID0+IHtcbiAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgc21hcnRTcGVlZDogMzAwMCxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA2MDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdF9vd2wiLCJpbXBvcnQgeyBkcm9wem9uZUhhbmRsZXJzIH0gZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMnXG5pbXBvcnQgeyBkZWxldGVDb25maXJtYXRpb25zIH0gZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlJ1xuaW1wb3J0IGRlbGV0ZUltZyBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nJ1xuaW1wb3J0IGRlbGV0ZVZpZGVvIGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV92aWRlbydcbmltcG9ydCBpbml0X293bCBmcm9tICcuL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwnXG5pbXBvcnQgZ2V0QXV0aCBmcm9tICcuL2Zyb250L2F1dGgvZG9BdXRoJ1xuXG5kcm9wem9uZUhhbmRsZXJzKCdleGhpYml0aW9ucycsICdteS1kcm9wem9uZScsICdleGhpYml0aW9uX2lkJylcblxuZHJvcHpvbmVIYW5kbGVycygna2luZG9mZG9jdW1lbnRzJywgJ215LWRyb3B6b25lLWtpbmQtb2YtZG9jdW1lbnRzJywgJ2tpbmRvZmRvY3VtZW50c19pZCcpXG5cbi8v0KPQtNCw0LvQtdC90LjQtSDQvdC+0LLQvtGB0YLQtdC5IERSWSAtINGD0LTQsNC70LXQvdC40LUg0L3QvtCy0L7RgdGC0LXQuSDRgNCw0YHRiNCw0YDQuNGC0Ywg0L3QsCDQstC10YHRjCDQv9GA0L7QtdC60YJcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlTmV3cycpLCBcbiAgICAkKCcjZGVsZXRlX25ld3MnKSwgXG4gICAgJy9JeHRsYW4tcGhwL3NyYy9EQi9uZXdzX0NSVUQvbmV3c19kZWxldGUucGhwJyxcbiAgICAnbmV3c19pbmRleCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LLRi9GB0YLQsNCy0L7QulxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVFeGhpYml0aW9uJyksIFxuICAgICQoJyNkZWxldGVfZXhoaWJpdGlvbicpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9leGhpYml0aW9uX2RlbGV0ZS5waHAnLFxuICAgICdleGhpYml0aW9uX2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDRgtC40L/QvtCyINC00L7QutGD0LzQtdC90YLQvtCyXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUtpbmRPZkRvY3VtZW50JyksIFxuICAgICQoJyNkZWxldGVfa2luZF9vZl9kb2N1bWVudCcpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL2RvY3VtZW50X0NSVUQva2luZF9vZl9kb2N1bWVudF9DUlVEL2tpbmRfb2ZfZG9jdW1lbnRfZGVsZXRlLnBocCcsXG4gICAgJ2tpbmRfb2ZfZG9jdW1lbnRfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0YEg0LLRi9GB0YLQsNCy0L7QulxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0LrQvtGI0LXQulxuZGVsZXRlSW1nKFxuICAgICQoJyNtb2RhbERlbGV0ZUltZycpLFxuICAgICQoJyNkZWxldGVfaW1nJyksIFxuICAgICdncm91cF9pZCcsXG4gICAgJ2ltZ2V4aGliaXRpb25zJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNC5INC00L7QutGD0LzQtdC90YLQvtCyXG5kZWxldGVJbWcoXG4gICAgJCgnI21vZGFsRGVsZXRlSW1nJyksXG4gICAgJCgnI2RlbGV0ZV9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJyxcbiAgICAnaW1na2luZG9mZG9jdW1lbnQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INCy0LjQtNC10L5cbmRlbGV0ZVZpZGVvKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQvtCy0LjQvdC+0Lkg0LrQsNGA0YPRgdC10LvQuFxuaW5pdF9vd2woKVxuXG4vLyDQkNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xuZ2V0QXV0aCgpIl0sInNvdXJjZVJvb3QiOiIifQ==