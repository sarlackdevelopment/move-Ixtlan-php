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
/*! exports provided: doSignUp, doSignIn, doSignOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignUp", function() { return doSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignIn", function() { return doSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignOut", function() { return doSignOut; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FIELDS_SIGN_UP = ['login_sign_up', 'email_sign_up', 'password_sign_up', 'confirmpassword_sign_up'];
var FIELDS_SIGN_IN = ['login_sign_in'];
FIELDS_SIGN_UP.forEach(function (item) {
  return $("#".concat(item)).keyup(function () {
    return checkFieldSingUp(item);
  });
});
FIELDS_SIGN_IN.forEach(function (item) {
  return $("#".concat(item)).keyup(function () {
    return checkFieldSingIn(item);
  });
});
var doSignUp = function doSignUp() {
  $('#sign_up_submit').click(function () {
    var fieldsIsValid = FIELDS_SIGN_UP.every(function (item) {
      return fieldIsValid(item);
    });

    if (fieldsIsValid) {
      $('#sign_up_form').submit();
    }
  });
};
var doSignIn = function doSignIn() {
  $('#sign_in_submit').click(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var loginField, login, passwordField, password, passwordIsValid;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loginField = $('#login_sign_in');
            login = loginField.val();

            if (!(login.trim() === '')) {
              _context.next = 6;
              break;
            }

            markProblem(loginField, 'login_sign_in', 'Логин не может быть пустым');
            _context.next = 15;
            break;

          case 6:
            if (!fieldIsValid('login_sign_in')) {
              _context.next = 15;
              break;
            }

            passwordField = $('#password_sign_in');
            password = passwordField.val();
            _context.next = 11;
            return fetch('src/auth/check_password.php', {
              method: 'POST',
              body: JSON.stringify({
                login: login,
                password: password
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 11:
            _context.next = 13;
            return _context.sent.json();

          case 13:
            passwordIsValid = _context.sent;

            if (passwordIsValid) {
              $('#sign_in_form').submit();
            } else {
              markProblem(passwordField, 'password_sign_in', 'Пароль неверный');
            }

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
};
/* export const doSignIn = () => {

    $('#sign_in_submit').click(() => {

        //if (fieldsIsValid) {
            $('#sign_in_form').submit()   
        //}

    })

     $('#sign_in_submit').click(() => {

        const fieldsIsValid = FIELDS.every(item => fieldIsValid(item))

        if (fieldsIsValid) {
            $('#sign_in_form').submit()   
        }
        
    }) 
    
} */

var doSignOut = function doSignOut() {
  $('#sign_out').click(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch('src/auth/sign_out.php', {
              method: 'POST',
              body: '',
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            location.reload();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
};

var fieldIsValid = function fieldIsValid(fieldName) {
  var field = $("#".concat(fieldName));
  var fieldValue = field.val();
  return field.hasClass('is-valid') && fieldValue !== '';
};

var getInvalidMessageServer =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(fieldName, fieldValue) {
    var invalidMessage;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch('src/auth/check_fields.php', {
              method: 'POST',
              body: JSON.stringify({
                fieldName: fieldName,
                fieldValue: fieldValue
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            _context3.next = 4;
            return _context3.sent.json();

          case 4:
            invalidMessage = _context3.sent;
            return _context3.abrupt("return", invalidMessage);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getInvalidMessageServer(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();

var getInvalidMessageClient = function getInvalidMessageClient(fieldName, fieldValue) {
  switch (fieldName) {
    case "login_sign_up":
      return '';

    case "email_sign_up":
      return '';

    case "password_sign_up":
      return checkPassword();

    case "confirmpassword_sign_up":
      return checkPassword();
  }
};

var markProblem = function markProblem(field, fieldName, messages) {
  var fieldGroup = $("#group_".concat(fieldName));
  var idInvalidField = "invalid".concat(fieldName);
  $("#".concat(idInvalidField)).remove();

  if (messages === '') {
    field.removeClass('is-invalid').addClass('is-valid');
  } else {
    field.removeClass('is-valid').addClass('is-invalid');

    if (!$("div").is("#".concat(idInvalidField))) {
      fieldGroup.append("<div id=\"".concat(idInvalidField, "\" class=\"invalid-feedback\">\n                    ").concat(messages, "\n                </div>"));
    }
  }
};

var checkFieldSingUp =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(fieldName) {
    var field, fieldValue, invalidMessageClient, invalidMessageServer;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            field = $("#".concat(fieldName));
            fieldValue = field.val();

            if (!(fieldValue === '')) {
              _context4.next = 6;
              break;
            }

            field.removeClass('is-invalid').removeClass('is-valid');
            _context4.next = 13;
            break;

          case 6:
            invalidMessageClient = getInvalidMessageClient(fieldName, fieldValue);
            markProblem(field, fieldName, invalidMessageClient);

            if (!(invalidMessageClient === '')) {
              _context4.next = 13;
              break;
            }

            _context4.next = 11;
            return getInvalidMessageServer(fieldName, fieldValue);

          case 11:
            invalidMessageServer = _context4.sent;
            markProblem(field, fieldName, invalidMessageServer);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function checkFieldSingUp(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var checkFieldSingIn =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(fieldName) {
    var field, fieldValue, invalidMessageServer;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            field = $("#".concat(fieldName));
            fieldValue = field.val();

            if (!(fieldValue === '')) {
              _context5.next = 6;
              break;
            }

            field.removeClass('is-invalid').removeClass('is-valid');
            _context5.next = 10;
            break;

          case 6:
            _context5.next = 8;
            return getInvalidMessageServer(fieldName, fieldValue);

          case 8:
            invalidMessageServer = _context5.sent;
            markProblem(field, fieldName, invalidMessageServer);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function checkFieldSingIn(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

var checkPassword = function checkPassword() {
  var passwordField = $('#password_sign_up');
  var confirmpasswordField = $('#confirmpassword_sign_up');
  var entropizer = new Entropizer();
  passwordField.removeClass('is-invalid').addClass('is-valid');
  $('div#invalidpassword_sign_up').remove();

  if (entropizer.evaluate(passwordField.val()) < 10) {
    return 'Придумайте пароль посложнее';
  } else {
    if (passwordField.val() !== confirmpasswordField.val()) {
      return 'Пароли не совпадают';
    } else {
      return '';
    }
  }
};

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

/***/ "./src/front/local/choiceLang.js":
/*!***************************************!*\
  !*** ./src/front/local/choiceLang.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getLangChoice = function getLangChoice() {
  $('#lang_rus').click(function () {
    $('#lang_current').html('<img src="images/lang/rusflag1.png">');
  });
  $('#lang_eng').click(function () {
    $('#lang_current').html('<img src="images/lang/amflag1.png">');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getLangChoice);

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
/* harmony import */ var _front_local_choiceLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./front/local/choiceLang */ "./src/front/local/choiceLang.js");







Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__["dropzoneHandlers"])('exhibitions', 'my-dropzone', 'exhibition_id');
Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_0__["dropzoneHandlers"])('kindofdocuments', 'my-dropzone-kind-of-documents', 'kindofdocuments_id'); //Удаление новостей DRY - удаление новостей расшарить на весь проект

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["deleteConfirmations"])($('#modalDeleteNews'), $('#delete_news'), '/Ixtlan-php/src/DB/news_CRUD/news_delete.php', 'news_index'); // Удаление выставок

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["deleteConfirmations"])($('#modalDeleteExhibition'), $('#delete_exhibition'), '/Ixtlan-php/src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_delete.php', 'exhibition_id'); // Удаление типов документов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_1__["deleteConfirmations"])($('#modalDeleteKindOfDocument'), $('#delete_kind_of_document'), '/Ixtlan-php/src/DB/document_CRUD/kind_of_document_CRUD/kind_of_document_delete.php', 'kind_of_document_id'); // Удаление изображений с выставок
// Удаление изображений кошек

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__["default"])($('#modalDeleteImg'), $('#delete_img'), 'group_id', 'imgexhibitions'); // Удаление изображений документов

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_2__["default"])($('#modalDeleteImg'), $('#delete_img'), 'group_id', 'imgkindofdocument'); // Удаление видео

Object(_front_utils_confirmation_delete_video__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Инициализация совиной карусели

Object(_front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Регистрация пользователя

Object(_front_auth_doAuth__WEBPACK_IMPORTED_MODULE_5__["doSignIn"])(); // Вход пользователя

Object(_front_auth_doAuth__WEBPACK_IMPORTED_MODULE_5__["doSignUp"])(); // Выход пользователя

Object(_front_auth_doAuth__WEBPACK_IMPORTED_MODULE_5__["doSignOut"])(); // Выбор языка

Object(_front_local_choiceLang__WEBPACK_IMPORTED_MODULE_6__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2F1dGgvZG9BdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2xvY2FsL2Nob2ljZUxhbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX3ZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGSUVMRFNfU0lHTl9VUCIsIkZJRUxEU19TSUdOX0lOIiwiZm9yRWFjaCIsIml0ZW0iLCIkIiwia2V5dXAiLCJjaGVja0ZpZWxkU2luZ1VwIiwiY2hlY2tGaWVsZFNpbmdJbiIsImRvU2lnblVwIiwiY2xpY2siLCJmaWVsZHNJc1ZhbGlkIiwiZXZlcnkiLCJmaWVsZElzVmFsaWQiLCJzdWJtaXQiLCJkb1NpZ25JbiIsImxvZ2luRmllbGQiLCJsb2dpbiIsInZhbCIsInRyaW0iLCJtYXJrUHJvYmxlbSIsInBhc3N3b3JkRmllbGQiLCJwYXNzd29yZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsInBhc3N3b3JkSXNWYWxpZCIsImRvU2lnbk91dCIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmllbGROYW1lIiwiZmllbGQiLCJmaWVsZFZhbHVlIiwiaGFzQ2xhc3MiLCJnZXRJbnZhbGlkTWVzc2FnZVNlcnZlciIsImludmFsaWRNZXNzYWdlIiwiZ2V0SW52YWxpZE1lc3NhZ2VDbGllbnQiLCJjaGVja1Bhc3N3b3JkIiwibWVzc2FnZXMiLCJmaWVsZEdyb3VwIiwiaWRJbnZhbGlkRmllbGQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaXMiLCJhcHBlbmQiLCJpbnZhbGlkTWVzc2FnZUNsaWVudCIsImludmFsaWRNZXNzYWdlU2VydmVyIiwiY29uZmlybXBhc3N3b3JkRmllbGQiLCJlbnRyb3BpemVyIiwiRW50cm9waXplciIsImV2YWx1YXRlIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImN1cnJlbnQiLCJpbml0T25lRHJvcHpvbmUiLCJpZCIsImZldGNoSW1nIiwiZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiIsInZhbHVlVGFyZ2V0RmVpbGQiLCJpZERyb3B6b25lIiwiYWNjZXB0ZWRGaWxlcyIsImluaXQiLCJvbiIsImZpbGUiLCJ4aHIiLCJmb3JtRGF0YSIsImN1cnJlbnRfdXJsIiwiY3VycmVudF9pbmYiLCJpbWFnZXMiLCJnZXRMYW5nQ2hvaWNlIiwiaHRtbCIsImRlbGV0ZUJ5SWQiLCJtb2RhbFdpbmRvdyIsInVybCIsImlkX2ZpZWxkX25hbWUiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIm1vZGFsIiwiRXJyb3IiLCJnZXRDaGVja0ltZ3MiLCJyZXN1bHQiLCJlYWNoIiwiaW5kZXgiLCJjdXJyZW50SXRlbUpRIiwicHJvcCIsInB1c2giLCJkZWxldGVDb25maXJtYXRpb25zIiwidGFyZ2V0QnV0dG9uIiwiYXR0ciIsInJlbGF0ZWRUYXJnZXQiLCJkZWxldGVDb25maXJtYXRpb25zU3RhdGVzIiwiYnV0dG9uIiwiZmV0Y2hEZWxldGVJbWdzIiwiY2hlY2tzIiwibWFpbkhhbmRsZXIiLCJkZWxldGVDb25maXJtYXRpb25zUGVyaW9kIiwiZGVsZXRlSW1nIiwidGFibGVfbmFtZSIsImRlbGV0ZVZpZGVvIiwiZmV0Y2hEZWxldGVWaWRlbyIsImdldENoZWNrVmlkZW8iLCJpbml0X293bCIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsIm5hdiIsImF1dG9wbGF5Iiwic21hcnRTcGVlZCIsImF1dG9wbGF5VGltZW91dCIsInJlc3BvbnNpdmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxjQUFjLEdBQUcsQ0FDbkIsZUFEbUIsRUFFbkIsZUFGbUIsRUFHbkIsa0JBSG1CLEVBSW5CLHlCQUptQixDQUF2QjtBQU9BLElBQU1DLGNBQWMsR0FBRyxDQUFDLGVBQUQsQ0FBdkI7QUFFQUQsY0FBYyxDQUFDRSxPQUFmLENBQXVCLFVBQUFDLElBQUk7QUFBQSxTQUFJQyxDQUFDLFlBQUtELElBQUwsRUFBRCxDQUFjRSxLQUFkLENB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RUFFZkEsQ0FBQyxDQUFDLDBCQUFELENBRmMsRUFHZixvRkFIZSxFQUlmLHFCQUplLENBQW5CLEMsQ0FNQTtBQUVBOztBQUNBd0csb0ZBQVMsQ0FDTHhHLENBQUMsQ0FBQyxpQkFBRCxDQURJLEVBRUxBLENBQUMsQ0FBQyxhQUFELENBRkksRUFHTCxVQUhLLEVBSUwsZ0JBSkssQ0FBVCxDLENBTUE7O0FBQ0F3RyxvRkFBUyxDQUNMeEcsQ0FBQyxDQUFDLGlCQUFELENBREksRUFFTEEsQ0FBQyxDQUFDLGFBQUQsQ0FGSSxFQUdMLFVBSEssRUFJTCxtQkFKSyxDQUFULEMsQ0FNQTs7QUFDQTBHLHNGQUFXLEcsQ0FFWDs7QUFDQUcsNkVBQVEsRyxDQUVSOztBQUNBbkcsbUVBQVEsRyxDQUVSOztBQUNBTixtRUFBUSxHLENBRVI7O0FBQ0FzQixvRUFBUyxHLENBRVQ7O0FBQ0FrRCx1RUFBYSxHIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IEZJRUxEU19TSUdOX1VQID0gW1xuICAgICdsb2dpbl9zaWduX3VwJywgXG4gICAgJ2VtYWlsX3NpZ25fdXAnLCBcbiAgICAncGFzc3dvcmRfc2lnbl91cCcsIFxuICAgICdjb25maXJtcGFzc3dvcmRfc2lnbl91cCdcbl1cblxuY29uc3QgRklFTERTX1NJR05fSU4gPSBbJ2xvZ2luX3NpZ25faW4nXVxuXG5GSUVMRFNfU0lHTl9VUC5mb3JFYWNoKGl0ZW0gPT4gJChgIyR7aXRlbX1gKS5rZXl1cCgoKSA9PiBjaGVja0ZpZWxkU2luZ1VwKGl0ZW0pKSlcbkZJRUxEU19TSUdOX0lOLmZvckVhY2goaXRlbSA9PiAkKGAjJHtpdGVtfWApLmtleXVwKCgpID0+IGNoZWNrRmllbGRTaW5nSW4oaXRlbSkpKVxuXG5leHBvcnQgY29uc3QgZG9TaWduVXAgPSAoKSA9PiB7XG4gICAgIFxuICAgICQoJyNzaWduX3VwX3N1Ym1pdCcpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICBjb25zdCBmaWVsZHNJc1ZhbGlkID0gRklFTERTX1NJR05fVVAuZXZlcnkoaXRlbSA9PiBmaWVsZElzVmFsaWQoaXRlbSkpXG5cbiAgICAgICAgaWYgKGZpZWxkc0lzVmFsaWQpIHtcbiAgICAgICAgICAgICQoJyNzaWduX3VwX2Zvcm0nKS5zdWJtaXQoKSAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkb1NpZ25JbiA9ICgpID0+IHtcblxuICAgICQoJyNzaWduX2luX3N1Ym1pdCcpLmNsaWNrKGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCBsb2dpbkZpZWxkID0gJCgnI2xvZ2luX3NpZ25faW4nKVxuICAgICAgICBjb25zdCBsb2dpbiAgICAgID0gbG9naW5GaWVsZC52YWwoKVxuXG4gICAgICAgIGlmIChsb2dpbi50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICBtYXJrUHJvYmxlbShsb2dpbkZpZWxkLCAnbG9naW5fc2lnbl9pbicsICfQm9C+0LPQuNC9INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwnKVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoZmllbGRJc1ZhbGlkKCdsb2dpbl9zaWduX2luJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZEZpZWxkID0gJCgnI3Bhc3N3b3JkX3NpZ25faW4nKVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkICAgICAgPSBwYXNzd29yZEZpZWxkLnZhbCgpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZElzVmFsaWQgPSBhd2FpdCAoYXdhaXQgZmV0Y2goJ3NyYy9hdXRoL2NoZWNrX3Bhc3N3b3JkLnBocCcsIHsgXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsb2dpbiwgcGFzc3dvcmQgfSksIFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgICAgICAgICB9KSkuanNvbigpXG5cbiAgICAgICAgICAgICAgICBpZiAocGFzc3dvcmRJc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzaWduX2luX2Zvcm0nKS5zdWJtaXQoKSBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXJrUHJvYmxlbShwYXNzd29yZEZpZWxkLCAncGFzc3dvcmRfc2lnbl9pbicsICfQn9Cw0YDQvtC70Ywg0L3QtdCy0LXRgNC90YvQuScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbi8qIGV4cG9ydCBjb25zdCBkb1NpZ25JbiA9ICgpID0+IHtcblxuICAgICQoJyNzaWduX2luX3N1Ym1pdCcpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICAvL2lmIChmaWVsZHNJc1ZhbGlkKSB7XG4gICAgICAgICAgICAkKCcjc2lnbl9pbl9mb3JtJykuc3VibWl0KCkgICBcbiAgICAgICAgLy99XG5cbiAgICB9KVxuXG4gICAgICQoJyNzaWduX2luX3N1Ym1pdCcpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICBjb25zdCBmaWVsZHNJc1ZhbGlkID0gRklFTERTLmV2ZXJ5KGl0ZW0gPT4gZmllbGRJc1ZhbGlkKGl0ZW0pKVxuXG4gICAgICAgIGlmIChmaWVsZHNJc1ZhbGlkKSB7XG4gICAgICAgICAgICAkKCcjc2lnbl9pbl9mb3JtJykuc3VibWl0KCkgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KSBcbiAgICBcbn0gKi9cblxuZXhwb3J0IGNvbnN0IGRvU2lnbk91dCA9ICgpID0+IHtcblxuICAgICQoJyNzaWduX291dCcpLmNsaWNrKGFzeW5jICgpID0+IHtcblxuICAgICAgICBhd2FpdCBmZXRjaCgnc3JjL2F1dGgvc2lnbl9vdXQucGhwJywgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgIGJvZHk6ICcnLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICB9KSBcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcblxuICAgIH0pICBcblxufVxuXG5jb25zdCBmaWVsZElzVmFsaWQgPSAoZmllbGROYW1lKSA9PiB7XG5cbiAgICBjb25zdCBmaWVsZCAgICAgID0gJChgIyR7ZmllbGROYW1lfWApXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IGZpZWxkLnZhbCgpXG5cbiAgICByZXR1cm4gKGZpZWxkLmhhc0NsYXNzKCdpcy12YWxpZCcpKSAmJiAoZmllbGRWYWx1ZSAhPT0gJycpXG59IFxuXG5jb25zdCBnZXRJbnZhbGlkTWVzc2FnZVNlcnZlciA9IGFzeW5jIChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpID0+IHtcblxuICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYXdhaXQgKGF3YWl0IGZldGNoKCdzcmMvYXV0aC9jaGVja19maWVsZHMucGhwJywgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZpZWxkTmFtZSwgZmllbGRWYWx1ZSB9KSwgXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbnZhbGlkTWVzc2FnZVxuXG59XG5cbmNvbnN0IGdldEludmFsaWRNZXNzYWdlQ2xpZW50ID0gKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgPT4ge1xuXG4gICAgc3dpdGNoIChmaWVsZE5hbWUpIHtcbiAgICAgICAgY2FzZSBcImxvZ2luX3NpZ25fdXBcIiA6XG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgY2FzZSBcImVtYWlsX3NpZ25fdXBcIiA6XG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgY2FzZSBcInBhc3N3b3JkX3NpZ25fdXBcIiA6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tQYXNzd29yZCgpXG4gICAgICAgIGNhc2UgXCJjb25maXJtcGFzc3dvcmRfc2lnbl91cFwiIDpcbiAgICAgICAgICAgIHJldHVybiBjaGVja1Bhc3N3b3JkKCkgXG4gICAgfVxuXG59XG5cbmNvbnN0IG1hcmtQcm9ibGVtID0gKGZpZWxkLCBmaWVsZE5hbWUsIG1lc3NhZ2VzKSA9PiB7XG5cbiAgICBjb25zdCBmaWVsZEdyb3VwICAgICA9ICQoYCNncm91cF8ke2ZpZWxkTmFtZX1gKVxuICAgIGNvbnN0IGlkSW52YWxpZEZpZWxkID0gYGludmFsaWQke2ZpZWxkTmFtZX1gXG5cbiAgICAkKGAjJHtpZEludmFsaWRGaWVsZH1gKS5yZW1vdmUoKVxuXG4gICAgaWYgKG1lc3NhZ2VzID09PSAnJykge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgICBpZiAoISQoXCJkaXZcIikuaXMoYCMke2lkSW52YWxpZEZpZWxkfWApKSB7XG4gICAgICAgICAgICBmaWVsZEdyb3VwLmFwcGVuZChcbiAgICAgICAgICAgICAgICBgPGRpdiBpZD1cIiR7aWRJbnZhbGlkRmllbGR9XCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgPC9kaXY+YClcbiAgICAgICAgfVxuICAgIH0gXG5cbn1cblxuY29uc3QgY2hlY2tGaWVsZFNpbmdVcCA9IGFzeW5jIChmaWVsZE5hbWUpID0+IHtcblxuICAgIGNvbnN0IGZpZWxkICAgICAgPSAkKGAjJHtmaWVsZE5hbWV9YClcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gZmllbGQudmFsKClcblxuICAgIGlmIChmaWVsZFZhbHVlID09PSAnJykge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2VDbGllbnQgPSBnZXRJbnZhbGlkTWVzc2FnZUNsaWVudChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpXG5cbiAgICAgICAgbWFya1Byb2JsZW0oZmllbGQsIGZpZWxkTmFtZSwgaW52YWxpZE1lc3NhZ2VDbGllbnQpXG4gICAgICAgIFxuICAgICAgICBpZiAoaW52YWxpZE1lc3NhZ2VDbGllbnQgPT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBpbnZhbGlkTWVzc2FnZVNlcnZlciA9IGF3YWl0IGdldEludmFsaWRNZXNzYWdlU2VydmVyKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSlcbiAgICAgICAgICAgIG1hcmtQcm9ibGVtKGZpZWxkLCBmaWVsZE5hbWUsIGludmFsaWRNZXNzYWdlU2VydmVyKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNvbnN0IGNoZWNrRmllbGRTaW5nSW4gPSBhc3luYyAoZmllbGROYW1lKSA9PiB7XG5cbiAgICBjb25zdCBmaWVsZCAgICAgID0gJChgIyR7ZmllbGROYW1lfWApXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IGZpZWxkLnZhbCgpXG5cbiAgICBpZiAoZmllbGRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgZmllbGQucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlU2VydmVyID0gYXdhaXQgZ2V0SW52YWxpZE1lc3NhZ2VTZXJ2ZXIoZmllbGROYW1lLCBmaWVsZFZhbHVlKVxuICAgICAgICBtYXJrUHJvYmxlbShmaWVsZCwgZmllbGROYW1lLCBpbnZhbGlkTWVzc2FnZVNlcnZlcilcbiAgICB9XG5cbn1cblxuY29uc3QgY2hlY2tQYXNzd29yZCA9ICgpID0+IHtcblxuICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgICAgICAgID0gJCgnI3Bhc3N3b3JkX3NpZ25fdXAnKVxuICAgIGNvbnN0IGNvbmZpcm1wYXNzd29yZEZpZWxkID0gJCgnI2NvbmZpcm1wYXNzd29yZF9zaWduX3VwJylcblxuICAgIGxldCBlbnRyb3BpemVyID0gbmV3IEVudHJvcGl6ZXIoKTtcblxuICAgIHBhc3N3b3JkRmllbGQucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxuICAgICQoJ2RpdiNpbnZhbGlkcGFzc3dvcmRfc2lnbl91cCcpLnJlbW92ZSgpXG5cbiAgICBpZiAoZW50cm9waXplci5ldmFsdWF0ZShwYXNzd29yZEZpZWxkLnZhbCgpKSA8IDEwKSB7XG4gICAgICAgIHJldHVybiAn0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMINC/0L7RgdC70L7QttC90LXQtSdcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFzc3dvcmRGaWVsZC52YWwoKSAhPT0gY29uZmlybXBhc3N3b3JkRmllbGQudmFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAn0J/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCJyAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIiwiRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAodGFibGVOYW1lLCBwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHBhcmFtcyA9IFtdKSA9PiB7XG5cbiAgICBjb25zdCBhcHBseV9pbml0ID0gYXN5bmMgaXRlbXMgPT4gXG4gICAgICAgIGl0ZW1zLmZvckVhY2goY3VycmVudCA9PiBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBjdXJyZW50LmlkKSlcblxuICAgIGF3YWl0IGFwcGx5X2luaXQoYXdhaXQgZmV0Y2hJbWcodGFibGVOYW1lLCBwYXJhbXMpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCkgPT4gXG4gICAgYXdhaXQgaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgJ2NvbW1vbicpXG5cbmNvbnN0IGluaXRPbmVEcm9wem9uZSA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpID0+IHtcblxuICAgIGxldCBpZERyb3B6b25lID0gYCMke3ByZWZpeERyb3B6b25lfS0ke3ZhbHVlVGFyZ2V0RmVpbGR9YFxuXG4gICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm9uKFwic2VuZGluZ1wiLCAoZmlsZSwgeGhyLCBmb3JtRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCh0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH0pXG5cbn1cblxuY29uc3QgZmV0Y2hJbWcgPSBhc3luYyAodGFibGVOYW1lLCBwYXJhbXMgPSBbXSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2dldF9leGhpYml0aW9uX3Bob3RvLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyB0YWJsZU5hbWUsIHBhcmFtcyB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyBcbiAgICB9KSkuanNvbigpXG5cbiAgICByZXR1cm4gaW1hZ2VzXG5cbn0iLCJjb25zdCBnZXRMYW5nQ2hvaWNlID0gKCkgPT4ge1xuICAgICQoJyNsYW5nX3J1cycpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgJCgnI2xhbmdfY3VycmVudCcpLmh0bWwoJzxpbWcgc3JjPVwiaW1hZ2VzL2xhbmcvcnVzZmxhZzEucG5nXCI+JylcbiAgICB9KVxuICAgICQoJyNsYW5nX2VuZycpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgJCgnI2xhbmdfY3VycmVudCcpLmh0bWwoJzxpbWcgc3JjPVwiaW1hZ2VzL2xhbmcvYW1mbGFnMS5wbmdcIj4nKVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldExhbmdDaG9pY2UiLCJjb25zdCBkZWxldGVCeUlkID0gYXN5bmMgKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcblxuICAgIHRyeSB7XG5cbiAgICAgICAgYXdhaXQgZmV0Y2godXJsLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG5cbiAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7Qu9GD0YfQuNGC0Ywg0LTQsNC90L3Ri9C1INC+0YIg0YHQtdGA0LLQtdGA0LAnKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHQ7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnMgPSAobW9kYWxXaW5kb3csIHRhcmdldEJ1dHRvbiwgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICB0YXJnZXRCdXR0b24uY2xpY2soKCkgPT4gZGVsZXRlQnlJZChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSlcblxuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsXG4gICAgICAgIGV2ZW50ID0+IHRhcmdldEJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlU3RhdGUnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9zdGF0ZScpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnc3RhdGVfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnL0l4dGxhbi1waHAvc3JjL0RCL2tpdHR5X0NSVUQvc3RhdGVfQ1JVRC9zdGF0ZV9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcykgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcyB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncygndHJ1ZScsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcylcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVQZXJpb2QnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9wZXJpb2QnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ2Jyb29kX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJy9JeHRsYW4tcGhwL3NyYy9EQi9raXR0eV9DUlVEL3BlcmlvZF9DUlVEL3BlcmlvZF9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCBpZCkgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgaWQgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCBpZClcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59IiwibGV0IHVybCA9Jy9JeHRsYW4tcGhwL3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9pbWdfQ1JVRC9pbWdfZGVsZXRlX2dyb3VwLnBocCdcblxuY29uc3QgZGVsZXRlSW1nID0gKG1vZGFsV2luZG93LCBidXR0b24sIGlkX2ZpZWxkX25hbWUsIHRhYmxlX25hbWUpID0+IHtcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpIFxuXG59XG5cbi8vIERSWSAtINGB0L7QvtGC0L3QvtGB0LjRgtGB0Y8g0YEg0YPQtNCw0LvQtdC90LjQtdC8INC/0LXRgNC40L7QtNCwXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHsgXG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgdGFibGVfbmFtZSB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSW1nIiwiY29uc3QgZGVsZXRlVmlkZW8gPSAoKSA9PiB7XG4gICAgJCgnI2RlbGV0ZV92aWRlbycpLmNsaWNrKCgpID0+IG1haW5IYW5kbGVyKCkpIFxufVxuXG5jb25zdCBtYWluSGFuZGxlciA9IGFzeW5jICgpID0+IHtcblxuICAgIGF3YWl0IGZldGNoRGVsZXRlVmlkZW8oYXdhaXQgZ2V0Q2hlY2tWaWRlbygpKSAgIFxuICAgIGF3YWl0IChhc3luYyAoKSA9PiAkKCcjbW9kYWxEZWxldGVWaWRlbycpLm1vZGFsKCdoaWRlJykpKClcblxufVxuXG5jb25zdCBnZXRDaGVja1ZpZGVvID0gYXN5bmMgKCkgPT4ge1xuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0W3RoaXNfdmlkZW8gPSB0cnVlXWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZVZpZGVvID0gYXN5bmMgKGNoZWNrcykgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICcvSXh0bGFuLXBocC9zcmMvREIvdmlkZW9fQ1JVRC92aWRlb19kZWxldGVfZ3JvdXAucGhwJ1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgZmV0Y2goY3VycmVudF91cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVZpZGVvIiwiY29uc3QgaW5pdF9vd2wgPSAoKSA9PiB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfb3dsIiwiaW1wb3J0IHsgZHJvcHpvbmVIYW5kbGVycyB9IGZyb20gJy4vZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX0luZGV4LmpzJ1xuaW1wb3J0IHsgZGVsZXRlQ29uZmlybWF0aW9ucyB9IGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZSdcbmltcG9ydCBkZWxldGVJbWcgZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX2ltZydcbmltcG9ydCBkZWxldGVWaWRlbyBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfdmlkZW8nXG5pbXBvcnQgaW5pdF9vd2wgZnJvbSAnLi9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsJ1xuaW1wb3J0IHsgZG9TaWduSW4sIGRvU2lnblVwLCBkb1NpZ25PdXQgfSBmcm9tICcuL2Zyb250L2F1dGgvZG9BdXRoJ1xuaW1wb3J0IGdldExhbmdDaG9pY2UgZnJvbSAnLi9mcm9udC9sb2NhbC9jaG9pY2VMYW5nJ1xuXG5kcm9wem9uZUhhbmRsZXJzKCdleGhpYml0aW9ucycsICdteS1kcm9wem9uZScsICdleGhpYml0aW9uX2lkJylcblxuZHJvcHpvbmVIYW5kbGVycygna2luZG9mZG9jdW1lbnRzJywgJ215LWRyb3B6b25lLWtpbmQtb2YtZG9jdW1lbnRzJywgJ2tpbmRvZmRvY3VtZW50c19pZCcpXG5cbi8v0KPQtNCw0LvQtdC90LjQtSDQvdC+0LLQvtGB0YLQtdC5IERSWSAtINGD0LTQsNC70LXQvdC40LUg0L3QvtCy0L7RgdGC0LXQuSDRgNCw0YHRiNCw0YDQuNGC0Ywg0L3QsCDQstC10YHRjCDQv9GA0L7QtdC60YJcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlTmV3cycpLCBcbiAgICAkKCcjZGVsZXRlX25ld3MnKSwgXG4gICAgJy9JeHRsYW4tcGhwL3NyYy9EQi9uZXdzX0NSVUQvbmV3c19kZWxldGUucGhwJyxcbiAgICAnbmV3c19pbmRleCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LLRi9GB0YLQsNCy0L7QulxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVFeGhpYml0aW9uJyksIFxuICAgICQoJyNkZWxldGVfZXhoaWJpdGlvbicpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9leGhpYml0aW9uX2RlbGV0ZS5waHAnLFxuICAgICdleGhpYml0aW9uX2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDRgtC40L/QvtCyINC00L7QutGD0LzQtdC90YLQvtCyXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUtpbmRPZkRvY3VtZW50JyksIFxuICAgICQoJyNkZWxldGVfa2luZF9vZl9kb2N1bWVudCcpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL2RvY3VtZW50X0NSVUQva2luZF9vZl9kb2N1bWVudF9DUlVEL2tpbmRfb2ZfZG9jdW1lbnRfZGVsZXRlLnBocCcsXG4gICAgJ2tpbmRfb2ZfZG9jdW1lbnRfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0YEg0LLRi9GB0YLQsNCy0L7QulxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0LrQvtGI0LXQulxuZGVsZXRlSW1nKFxuICAgICQoJyNtb2RhbERlbGV0ZUltZycpLFxuICAgICQoJyNkZWxldGVfaW1nJyksIFxuICAgICdncm91cF9pZCcsXG4gICAgJ2ltZ2V4aGliaXRpb25zJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNC5INC00L7QutGD0LzQtdC90YLQvtCyXG5kZWxldGVJbWcoXG4gICAgJCgnI21vZGFsRGVsZXRlSW1nJyksXG4gICAgJCgnI2RlbGV0ZV9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJyxcbiAgICAnaW1na2luZG9mZG9jdW1lbnQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INCy0LjQtNC10L5cbmRlbGV0ZVZpZGVvKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQvtCy0LjQvdC+0Lkg0LrQsNGA0YPRgdC10LvQuFxuaW5pdF9vd2woKVxuXG4vLyDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xuZG9TaWduSW4oKVxuXG4vLyDQktGF0L7QtCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbmRvU2lnblVwKClcblxuLy8g0JLRi9GF0L7QtCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbmRvU2lnbk91dCgpXG5cbi8vINCS0YvQsdC+0YAg0Y/Qt9GL0LrQsFxuZ2V0TGFuZ0Nob2ljZSgpIl0sInNvdXJjZVJvb3QiOiIifQ==