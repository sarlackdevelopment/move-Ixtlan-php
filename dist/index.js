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

var FIELDS = ['login', 'email', 'password', 'confirmpassword'];
FIELDS.forEach(function (item) {
  return $("#".concat(item)).keyup(function () {
    return checkField(item);
  });
});

var getAuth = function getAuth() {
  $('#auth_submit').click(function () {
    var fieldsIsValid = FIELDS.map(function (item) {
      return fieldIsValid(item);
    }).reduce(function (result, current) {
      return result && current;
    }, true);

    if (fieldsIsValid) {
      console.log('Все валидно - можно сабмитить');
    } else {
      console.log('Что то не валидно - нельзя сабмитить');
    } //$('#auth_form').submit()

  });
};

var fieldIsValid = function fieldIsValid(fieldName) {
  var field = $("#".concat(fieldName));
  var fieldValue = field.val();
  return field.hasClass('is-valid') && fieldValue !== '';
};

var getInvalidMessageServer =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(fieldName, fieldValue) {
    var url, headers, current_inf, invalidMessage;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = 'src/auth/check.php';
            headers = {
              'Content-Type': 'application/json'
            };
            current_inf = {
              fieldName: fieldName,
              fieldValue: fieldValue
            };
            _context.next = 5;
            return fetch(url, {
              method: 'POST',
              body: JSON.stringify(current_inf),
              headers: headers
            });

          case 5:
            _context.next = 7;
            return _context.sent.json();

          case 7:
            invalidMessage = _context.sent;
            return _context.abrupt("return", invalidMessage);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getInvalidMessageServer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getInvalidMessageClient = function getInvalidMessageClient(fieldName, fieldValue) {
  switch (fieldName) {
    case "login":
      return '';

    case "email":
      return '';

    case "password":
      return checkPassword();

    case "confirmpassword":
      return checkPassword();
  }
};

var markProblem = function markProblem(field, fieldName, messages) {
  var fieldGroup = $("#group_".concat(fieldName));
  var idInvalidField = "invalid".concat(fieldName);

  if (messages === '') {
    field.removeClass('is-invalid').addClass('is-valid');
    $("#".concat(idInvalidField)).remove();
  } else {
    field.addClass('is-invalid');

    if (!$("div").is("#".concat(idInvalidField))) {
      fieldGroup.append("<div id=\"".concat(idInvalidField, "\" class=\"invalid-feedback\">\n                    ").concat(messages, "\n                </div>"));
    }
  }
};

var checkField =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(fieldName) {
    var field, fieldValue, invalidMessageClient, invalidMessageServer;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            field = $("#".concat(fieldName));
            fieldValue = field.val();

            if (!(fieldValue === '')) {
              _context2.next = 6;
              break;
            }

            field.removeClass('is-invalid').removeClass('is-valid');
            _context2.next = 13;
            break;

          case 6:
            invalidMessageClient = getInvalidMessageClient(fieldName, fieldValue);
            markProblem(field, fieldName, invalidMessageClient);

            if (!(invalidMessageClient === '')) {
              _context2.next = 13;
              break;
            }

            _context2.next = 11;
            return getInvalidMessageServer(fieldName, fieldValue);

          case 11:
            invalidMessageServer = _context2.sent;
            markProblem(field, fieldName, invalidMessageServer);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function checkField(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var checkPassword = function checkPassword() {
  var passwordField = $('#password');
  var confirmpasswordField = $('#confirmpassword');

  if (passwordField.val() !== confirmpasswordField.val()) {
    return 'Пароли не совпадают';
  } else {
    passwordField.removeClass('is-invalid').addClass('is-valid');
    confirmpasswordField.removeClass('is-invalid').addClass('is-valid');
    $('div#invalidconfirmpassword').remove();
    $('div#invalidpassword').remove();
    return '';
  }
}; // TODO валидация сложности пароля и валидация адресапочты по маске


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2F1dGgvZG9BdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX3ZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGSUVMRFMiLCJmb3JFYWNoIiwiaXRlbSIsIiQiLCJrZXl1cCIsImNoZWNrRmllbGQiLCJnZXRBdXRoIiwiY2xpY2siLCJmaWVsZHNJc1ZhbGlkIiwibWFwIiwiZmllbGRJc1ZhbGlkIiwicmVkdWNlIiwicmVzdWx0IiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJmaWVsZE5hbWUiLCJmaWVsZCIsImZpZWxkVmFsdWUiLCJ2YWwiLCJoYXNDbGFzcyIsImdldEludmFsaWRNZXNzYWdlU2VydmVyIiwidXJsIiwiaGVhZGVycyIsImN1cnJlbnRfaW5mIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJpbnZhbGlkTWVzc2FnZSIsImdldEludmFsaWRNZXNzYWdlQ2xpZW50IiwiY2hlY2tQYXNzd29yZCIsIm1hcmtQcm9ibGVtIiwibWVzc2FnZXMiLCJmaWVsZEdyb3VwIiwiaWRJbnZhbGlkRmllbGQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlIiwiaXMiLCJhcHBlbmQiLCJpbnZhbGlkTWVzc2FnZUNsaWVudCIsImludmFsaWRNZXNzYWdlU2VydmVyIiwicGFzc3dvcmRGaWVsZCIsImNvbmZpcm1wYXNzd29yZEZpZWxkIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImluaXRPbmVEcm9wem9uZSIsImlkIiwiZmV0Y2hJbWciLCJkcm9wem9uZUhhbmRsZXJzQ29tbW9uIiwidmFsdWVUYXJnZXRGZWlsZCIsImlkRHJvcHpvbmUiLCJhY2NlcHRlZEZpbGVzIiwiaW5pdCIsIm9uIiwiZmlsZSIsInhociIsImZvcm1EYXRhIiwiY3VycmVudF91cmwiLCJpbWFnZXMiLCJkZWxldGVCeUlkIiwibW9kYWxXaW5kb3ciLCJpZF9maWVsZF9uYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJtb2RhbCIsIkVycm9yIiwiZ2V0Q2hlY2tJbWdzIiwiZWFjaCIsImluZGV4IiwiY3VycmVudEl0ZW1KUSIsInByb3AiLCJwdXNoIiwiZGVsZXRlQ29uZmlybWF0aW9ucyIsInRhcmdldEJ1dHRvbiIsImF0dHIiLCJyZWxhdGVkVGFyZ2V0IiwiZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyIsImJ1dHRvbiIsImZldGNoRGVsZXRlSW1ncyIsImNoZWNrcyIsIm1haW5IYW5kbGVyIiwiZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCIsImRlbGV0ZUltZyIsInRhYmxlX25hbWUiLCJkZWxldGVWaWRlbyIsImZldGNoRGVsZXRlVmlkZW8iLCJnZXRDaGVja1ZpZGVvIiwiaW5pdF9vd2wiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJtYXJnaW4iLCJuYXYiLCJhdXRvcGxheSIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheVRpbWVvdXQiLCJyZXNwb25zaXZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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aUJBQUQsRUFBb0IsK0JBQXBCLEVBQXFELG9CQUFyRCxDQUFoQixDLENBRUE7O0FBQ0FtQyw0RkFBbUIsQ0FDZmpGLENBQUMsQ0FBQyxrQkFBRCxDQURjLEVBRWZBLENBQUMsQ0FBQyxjQUFELENBRmMsRUFHZiw4Q0FIZSxFQUlmLFlBSmUsQ0FBbkIsQyxDQU1BOztBQUNBaUYsNEZBQW1CLENBQ2ZqRixDQUFDLENBQUMsd0JBQUQsQ0FEYyxFQUVmQSxDQUFDLENBQUMsb0JBQUQsQ0FGYyxFQUdmLDRFQUhlLEVBSWYsZUFKZSxDQUFuQixDLENBTUE7O0FBQ0FpRiw0RkFBbUIsQ0FDZmpGLENBQUMsQ0FBQyw0QkFBRCxDQURjLEVBRWZBLENBQUMsQ0FBQywwQkFBRCxDQUZjLEVBR2Ysb0ZBSGUsRUFJZixxQkFKZSxDQUFuQixDLENBTUE7QUFFQTs7QUFDQTJGLG9GQUFTLENBQ0wzRixDQUFDLENBQUMsaUJBQUQsQ0FESSxFQUVMQSxDQUFDLENBQUMsYUFBRCxDQUZJLEVBR0wsVUFISyxFQUlMLGdCQUpLLENBQVQsQyxDQU1BOztBQUNBMkYsb0ZBQVMsQ0FDTDNGLENBQUMsQ0FBQyxpQkFBRCxDQURJLEVBRUxBLENBQUMsQ0FBQyxhQUFELENBRkksRUFHTCxVQUhLLEVBSUwsbUJBSkssQ0FBVCxDLENBTUE7O0FBQ0E2RixzRkFBVyxHLENBRVg7O0FBQ0FHLDZFQUFRLEcsQ0FFUjs7QUFDQTdGLGtFQUFPLEciLCJmaWxlIjoiLi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgRklFTERTID0gWydsb2dpbicsICdlbWFpbCcsICdwYXNzd29yZCcsICdjb25maXJtcGFzc3dvcmQnXVxuXG5GSUVMRFMuZm9yRWFjaChpdGVtID0+ICQoYCMke2l0ZW19YCkua2V5dXAoKCkgPT4gY2hlY2tGaWVsZChpdGVtKSkpXG5cbmNvbnN0IGdldEF1dGggPSAoKSA9PiB7XG4gICAgIFxuICAgICQoJyNhdXRoX3N1Ym1pdCcpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICBjb25zdCBmaWVsZHNJc1ZhbGlkID0gRklFTERTXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gZmllbGRJc1ZhbGlkKGl0ZW0pKVxuICAgICAgICAgICAgLnJlZHVjZSgocmVzdWx0LCBjdXJyZW50KSA9PiByZXN1bHQgJiYgY3VycmVudCwgdHJ1ZSlcblxuICAgICAgICBpZiAoZmllbGRzSXNWYWxpZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9CS0YHQtSDQstCw0LvQuNC00L3QviAtINC80L7QttC90L4g0YHQsNCx0LzQuNGC0LjRgtGMJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQp9GC0L4g0YLQviDQvdC1INCy0LDQu9C40LTQvdC+IC0g0L3QtdC70YzQt9GPINGB0LDQsdC80LjRgtC40YLRjCcpXG4gICAgICAgIH1cbiAgICAgICAgLy8kKCcjYXV0aF9mb3JtJykuc3VibWl0KClcbiAgICB9KVxufVxuXG5jb25zdCBmaWVsZElzVmFsaWQgPSAoZmllbGROYW1lKSA9PiB7XG5cbiAgICBjb25zdCBmaWVsZCAgICAgID0gJChgIyR7ZmllbGROYW1lfWApXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IGZpZWxkLnZhbCgpXG5cbiAgICByZXR1cm4gKGZpZWxkLmhhc0NsYXNzKCdpcy12YWxpZCcpKSAmJiAoZmllbGRWYWx1ZSAhPT0gJycpXG59IFxuXG5jb25zdCBnZXRJbnZhbGlkTWVzc2FnZVNlcnZlciA9IGFzeW5jIChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpID0+IHtcblxuICAgIGNvbnN0IHVybCA9ICdzcmMvYXV0aC9jaGVjay5waHAnXG4gICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgY29uc3QgY3VycmVudF9pbmYgPSB7IGZpZWxkTmFtZSwgZmllbGRWYWx1ZSB9XG5cbiAgICBsZXQgaW52YWxpZE1lc3NhZ2UgPSBhd2FpdCAoYXdhaXQgZmV0Y2godXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuICAgIFxuICAgIHJldHVybiBpbnZhbGlkTWVzc2FnZVxuXG59XG5cbmNvbnN0IGdldEludmFsaWRNZXNzYWdlQ2xpZW50ID0gKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgPT4ge1xuXG4gICAgc3dpdGNoIChmaWVsZE5hbWUpIHtcbiAgICAgICAgY2FzZSBcImxvZ2luXCIgOlxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIGNhc2UgXCJlbWFpbFwiIDpcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICBjYXNlIFwicGFzc3dvcmRcIiA6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tQYXNzd29yZCgpXG4gICAgICAgIGNhc2UgXCJjb25maXJtcGFzc3dvcmRcIiA6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tQYXNzd29yZCgpIFxuICAgIH1cblxufVxuXG5jb25zdCBtYXJrUHJvYmxlbSA9IChmaWVsZCwgZmllbGROYW1lLCBtZXNzYWdlcykgPT4ge1xuXG4gICAgY29uc3QgZmllbGRHcm91cCAgICAgPSAkKGAjZ3JvdXBfJHtmaWVsZE5hbWV9YClcbiAgICBjb25zdCBpZEludmFsaWRGaWVsZCA9IGBpbnZhbGlkJHtmaWVsZE5hbWV9YFxuXG4gICAgaWYgKG1lc3NhZ2VzID09PSAnJykge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG4gICAgICAgICQoYCMke2lkSW52YWxpZEZpZWxkfWApLnJlbW92ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgICBpZiAoISQoXCJkaXZcIikuaXMoYCMke2lkSW52YWxpZEZpZWxkfWApKSB7XG4gICAgICAgICAgICBmaWVsZEdyb3VwLmFwcGVuZChcbiAgICAgICAgICAgICAgICBgPGRpdiBpZD1cIiR7aWRJbnZhbGlkRmllbGR9XCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgPC9kaXY+YClcbiAgICAgICAgfVxuICAgIH0gXG5cbn1cblxuY29uc3QgY2hlY2tGaWVsZCA9IGFzeW5jIChmaWVsZE5hbWUpID0+IHtcblxuICAgIGNvbnN0IGZpZWxkICAgICAgPSAkKGAjJHtmaWVsZE5hbWV9YClcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gZmllbGQudmFsKClcblxuICAgIGlmIChmaWVsZFZhbHVlID09PSAnJykge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2VDbGllbnQgPSBnZXRJbnZhbGlkTWVzc2FnZUNsaWVudChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpIFxuICAgICAgICBtYXJrUHJvYmxlbShmaWVsZCwgZmllbGROYW1lLCBpbnZhbGlkTWVzc2FnZUNsaWVudClcbiAgICAgICAgXG4gICAgICAgIGlmIChpbnZhbGlkTWVzc2FnZUNsaWVudCA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlU2VydmVyID0gYXdhaXQgZ2V0SW52YWxpZE1lc3NhZ2VTZXJ2ZXIoZmllbGROYW1lLCBmaWVsZFZhbHVlKVxuICAgICAgICAgICAgbWFya1Byb2JsZW0oZmllbGQsIGZpZWxkTmFtZSwgaW52YWxpZE1lc3NhZ2VTZXJ2ZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY29uc3QgY2hlY2tQYXNzd29yZCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBwYXNzd29yZEZpZWxkICAgICAgICA9ICQoJyNwYXNzd29yZCcpXG4gICAgY29uc3QgY29uZmlybXBhc3N3b3JkRmllbGQgPSAkKCcjY29uZmlybXBhc3N3b3JkJylcblxuICAgIGlmIChwYXNzd29yZEZpZWxkLnZhbCgpICE9PSBjb25maXJtcGFzc3dvcmRGaWVsZC52YWwoKSkge1xuICAgICAgICByZXR1cm4gJ9Cf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RgidcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIHBhc3N3b3JkRmllbGQucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxuICAgICAgICBjb25maXJtcGFzc3dvcmRGaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpICAgXG4gICAgICAgIFxuICAgICAgICAkKCdkaXYjaW52YWxpZGNvbmZpcm1wYXNzd29yZCcpLnJlbW92ZSgpXG4gICAgICAgICQoJ2RpdiNpbnZhbGlkcGFzc3dvcmQnKS5yZW1vdmUoKVxuXG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cblxuLy8gVE9ETyDQstCw0LvQuNC00LDRhtC40Y8g0YHQu9C+0LbQvdC+0YHRgtC4INC/0LDRgNC+0LvRjyDQuCDQstCw0LvQuNC00LDRhtC40Y8g0LDQtNGA0LXRgdCw0L/QvtGH0YLRiyDQv9C+INC80LDRgdC60LVcblxuZXhwb3J0IGRlZmF1bHQgZ2V0QXV0aCIsIkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzID0gYXN5bmMgKHRhYmxlTmFtZSwgcHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBwYXJhbXMgPSBbXSkgPT4ge1xuXG4gICAgY29uc3QgYXBwbHlfaW5pdCA9IGFzeW5jIGl0ZW1zID0+IFxuICAgICAgICBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgY3VycmVudC5pZCkpXG5cbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKHRhYmxlTmFtZSwgcGFyYW1zKSlcblxufVxuXG5leHBvcnQgY29uc3QgZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQpID0+IFxuICAgIGF3YWl0IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsICdjb21tb24nKVxuXG5jb25zdCBpbml0T25lRHJvcHpvbmUgPSBhc3luYyAocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKSA9PiB7XG5cbiAgICBsZXQgaWREcm9wem9uZSA9IGAjJHtwcmVmaXhEcm9wem9uZX0tJHt2YWx1ZVRhcmdldEZlaWxkfWBcblxuICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQodGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9KVxuXG59XG5cbmNvbnN0IGZldGNoSW1nID0gYXN5bmMgKHRhYmxlTmFtZSwgcGFyYW1zID0gW10pID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9nZXRfZXhoaWJpdGlvbl9waG90by5waHAnO1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgdGFibGVOYW1lLCBwYXJhbXMgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgKGF3YWl0IGZldGNoKGN1cnJlbnRfdXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59IiwiY29uc3QgZGVsZXRlQnlJZCA9IGFzeW5jIChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICBsZXQgaWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG5cbiAgICB0cnkge1xuXG4gICAgICAgIGF3YWl0IGZldGNoKHVybCwgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkIH0pLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuXG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LvRg9GH0LjRgtGMINC00LDQvdC90YvQtSDQvtGCINGB0LXRgNCy0LXRgNCwJylcbiAgICB9XG59XG5cbmNvbnN0IGdldENoZWNrSW1ncyA9IGFzeW5jIChpZCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0WyR7aWRfZmllbGRfbmFtZX0gPSAke2lkfV1gKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1KUSA9ICQoaXRlbSlcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtSlEucHJvcChcImNoZWNrZWRcIikpXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50SXRlbUpRLnZhbCgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0O1xuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zID0gKG1vZGFsV2luZG93LCB0YXJnZXRCdXR0b24sIHVybCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuXG4gICAgdGFyZ2V0QnV0dG9uLmNsaWNrKCgpID0+IGRlbGV0ZUJ5SWQobW9kYWxXaW5kb3csIHVybCwgaWRfZmllbGRfbmFtZSkpXG5cbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLFxuICAgICAgICBldmVudCA9PiB0YXJnZXRCdXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMgPSAoKSA9PiB7XG5cbiAgICBsZXQgbW9kYWxXaW5kb3cgICA9ICQoJyNtb2RhbERlbGV0ZVN0YXRlJylcbiAgICBsZXQgYnV0dG9uICAgICAgICA9ICQoJyNkZWxldGVfc3RhdGUnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ3N0YXRlX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJy9JeHRsYW4tcGhwL3NyYy9EQi9raXR0eV9DUlVEL3N0YXRlX0NSVUQvc3RhdGVfZGVsZXRlX2dyb3VwLnBocCdcblxuICAgIGNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MpID0+IHtcbiAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoJ3RydWUnLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlUGVyaW9kJylcbiAgICBsZXQgYnV0dG9uICAgICAgICA9ICQoJyNkZWxldGVfcGVyaW9kJylcbiAgICBsZXQgaWRfZmllbGRfbmFtZSA9ICdicm9vZF9pZCdcbiAgICBsZXQgdXJsICAgICAgICAgICA9ICcvSXh0bGFuLXBocC9zcmMvREIva2l0dHlfQ1JVRC9wZXJpb2RfQ1JVRC9wZXJpb2RfZGVsZXRlX2dyb3VwLnBocCdcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcywgaWQpID0+IHtcbiAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MsIGlkIH1cbiAgICAgICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgaWQpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSlcblxufSIsImxldCB1cmwgPScvSXh0bGFuLXBocC9zcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvaW1nX0NSVUQvaW1nX2RlbGV0ZV9ncm91cC5waHAnXG5cbmNvbnN0IGRlbGV0ZUltZyA9IChtb2RhbFdpbmRvdywgYnV0dG9uLCBpZF9maWVsZF9uYW1lLCB0YWJsZV9uYW1lKSA9PiB7XG5cbiAgICAvLyBEUlkgLSDQv9GA0L7QsdGA0L7RgSDRgSDQutC90L7Qv9C60Lgg0LfQsNC/0YPRgdC60LAg0LzQvtC00LDQu9C60Lgg0L3QsCDQutC90L7Qv9C60YMg0YPQtNCw0LvQtdC90LjRjyDQstGL0L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiBidXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgaWQgICAgID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKGlkLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MsIHVybCwgdGFibGVfbmFtZSlcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKSBcblxufVxuXG4vLyBEUlkgLSDRgdC+0L7RgtC90L7RgdC40YLRgdGPINGBINGD0LTQsNC70LXQvdC40LXQvCDQv9C10YDQuNC+0LTQsFxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7IFxuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0WyR7aWRfZmllbGRfbmFtZX0gPSAke2lkfV1gKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1KUSA9ICQoaXRlbSlcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtSlEucHJvcChcImNoZWNrZWRcIikpXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50SXRlbUpRLnZhbCgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG5cbn1cblxuY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MsIHRhYmxlX25hbWUgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUltZyIsImNvbnN0IGRlbGV0ZVZpZGVvID0gKCkgPT4ge1xuICAgICQoJyNkZWxldGVfdmlkZW8nKS5jbGljaygoKSA9PiBtYWluSGFuZGxlcigpKSBcbn1cblxuY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBhd2FpdCBmZXRjaERlbGV0ZVZpZGVvKGF3YWl0IGdldENoZWNrVmlkZW8oKSkgICBcbiAgICBhd2FpdCAoYXN5bmMgKCkgPT4gJCgnI21vZGFsRGVsZXRlVmlkZW8nKS5tb2RhbCgnaGlkZScpKSgpXG5cbn1cblxuY29uc3QgZ2V0Q2hlY2tWaWRlbyA9IGFzeW5jICgpID0+IHtcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFt0aGlzX3ZpZGVvID0gdHJ1ZV1gKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1KUSA9ICQoaXRlbSlcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtSlEucHJvcChcImNoZWNrZWRcIikpXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50SXRlbUpRLnZhbCgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG5cbn1cblxuY29uc3QgZmV0Y2hEZWxldGVWaWRlbyA9IGFzeW5jIChjaGVja3MpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnL0l4dGxhbi1waHAvc3JjL0RCL3ZpZGVvX0NSVUQvdmlkZW9fZGVsZXRlX2dyb3VwLnBocCdcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcyB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGZldGNoKGN1cnJlbnRfdXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVWaWRlbyIsImNvbnN0IGluaXRfb3dsID0gKCkgPT4ge1xuICAgICQoJy5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBzbWFydFNwZWVkOiAzMDAwLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0X293bCIsImltcG9ydCB7IGRyb3B6b25lSGFuZGxlcnMgfSBmcm9tICcuL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcydcbmltcG9ydCB7IGRlbGV0ZUNvbmZpcm1hdGlvbnMgfSBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGUnXG5pbXBvcnQgZGVsZXRlSW1nIGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcnXG5pbXBvcnQgZGVsZXRlVmlkZW8gZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX3ZpZGVvJ1xuaW1wb3J0IGluaXRfb3dsIGZyb20gJy4vZnJvbnQvdXRpbHMvaW5pdF9vd2xfY2FydXNlbCdcbmltcG9ydCBnZXRBdXRoIGZyb20gJy4vZnJvbnQvYXV0aC9kb0F1dGgnXG5cbmRyb3B6b25lSGFuZGxlcnMoJ2V4aGliaXRpb25zJywgJ215LWRyb3B6b25lJywgJ2V4aGliaXRpb25faWQnKVxuXG5kcm9wem9uZUhhbmRsZXJzKCdraW5kb2Zkb2N1bWVudHMnLCAnbXktZHJvcHpvbmUta2luZC1vZi1kb2N1bWVudHMnLCAna2luZG9mZG9jdW1lbnRzX2lkJylcblxuLy/Qo9C00LDQu9C10L3QuNC1INC90L7QstC+0YHRgtC10LkgRFJZIC0g0YPQtNCw0LvQtdC90LjQtSDQvdC+0LLQvtGB0YLQtdC5INGA0LDRgdGI0LDRgNC40YLRjCDQvdCwINCy0LXRgdGMINC/0YDQvtC10LrRglxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVOZXdzJyksIFxuICAgICQoJyNkZWxldGVfbmV3cycpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL25ld3NfQ1JVRC9uZXdzX2RlbGV0ZS5waHAnLFxuICAgICduZXdzX2luZGV4JylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQstGL0YHRgtCw0LLQvtC6XG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUV4aGliaXRpb24nKSwgXG4gICAgJCgnI2RlbGV0ZV9leGhpYml0aW9uJyksIFxuICAgICcvSXh0bGFuLXBocC9zcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2V4aGliaXRpb25fZGVsZXRlLnBocCcsXG4gICAgJ2V4aGliaXRpb25faWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INGC0LjQv9C+0LIg0LTQvtC60YPQvNC10L3RgtC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlS2luZE9mRG9jdW1lbnQnKSwgXG4gICAgJCgnI2RlbGV0ZV9raW5kX29mX2RvY3VtZW50JyksIFxuICAgICcvSXh0bGFuLXBocC9zcmMvREIvZG9jdW1lbnRfQ1JVRC9raW5kX29mX2RvY3VtZW50X0NSVUQva2luZF9vZl9kb2N1bWVudF9kZWxldGUucGhwJyxcbiAgICAna2luZF9vZl9kb2N1bWVudF9pZCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDRgSDQstGL0YHRgtCw0LLQvtC6XG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDQutC+0YjQtdC6XG5kZWxldGVJbWcoXG4gICAgJCgnI21vZGFsRGVsZXRlSW1nJyksXG4gICAgJCgnI2RlbGV0ZV9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJyxcbiAgICAnaW1nZXhoaWJpdGlvbnMnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0LTQvtC60YPQvNC10L3RgtC+0LJcbmRlbGV0ZUltZyhcbiAgICAkKCcjbW9kYWxEZWxldGVJbWcnKSxcbiAgICAkKCcjZGVsZXRlX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLFxuICAgICdpbWdraW5kb2Zkb2N1bWVudCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LLQuNC00LXQvlxuZGVsZXRlVmlkZW8oKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LLQuNC90L7QuSDQutCw0YDRg9GB0LXQu9C4XG5pbml0X293bCgpXG5cbi8vINCQ0YPRgtC10L3RgtC40YTQuNC60LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG5nZXRBdXRoKCkiXSwic291cmNlUm9vdCI6IiJ9