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

/***/ "./src/front/auth/approvePost.js":
/*!***************************************!*\
  !*** ./src/front/auth/approvePost.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var doApprove = function doApprove() {
  $('#approve_email').click(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var approveIsWellDone;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('src/auth/approve_post.php', {
              method: 'POST',
              body: '',
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            _context.next = 4;
            return _context.sent.json();

          case 4:
            approveIsWellDone = _context.sent;

            if (approveIsWellDone) {
              $('#approve_email_caption').html('На указанную почту было отпралено письмо.');
            } else {
              $('#approve_email_caption').html('Проблемы с отправкой письма. Если все же очень хочется зарегистрироваться, можете позвонить по номеру +7 920 431 03 91 попробую решить вашу проблему.');
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (doApprove);

/***/ }),

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
/* harmony import */ var _front_auth_approvePost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./front/auth/approvePost */ "./src/front/auth/approvePost.js");
/* harmony import */ var _front_local_choiceLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./front/local/choiceLang */ "./src/front/local/choiceLang.js");








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

Object(_front_auth_doAuth__WEBPACK_IMPORTED_MODULE_5__["doSignOut"])(); // Подтверждение электронной почты

Object(_front_auth_approvePost__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Выбор языка

Object(_front_local_choiceLang__WEBPACK_IMPORTED_MODULE_7__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2F1dGgvYXBwcm92ZVBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2F1dGgvZG9BdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2xvY2FsL2Nob2ljZUxhbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX3ZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkb0FwcHJvdmUiLCIkIiwiY2xpY2siLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwianNvbiIsImFwcHJvdmVJc1dlbGxEb25lIiwiaHRtbCIsIkZJRUxEU19TSUdOX1VQIiwiRklFTERTX1NJR05fSU4iLCJmb3JFYWNoIiwiaXRlbSIsImtleXVwIiwiY2hlY2tGaWVsZFNpbmdVcCIsImNoZWNrRmllbGRTaW5nSW4iLCJkb1NpZ25VcCIsImZpZWxkc0lzVmFsaWQiLCJldmVyeSIsImZpZWxkSXNWYWxpZCIsInN1Ym1pdCIsImRvU2lnbkluIiwibG9naW5GaWVsZCIsImxvZ2luIiwidmFsIiwidHJpbSIsIm1hcmtQcm9ibGVtIiwicGFzc3dvcmRGaWVsZCIsInBhc3N3b3JkIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhc3N3b3JkSXNWYWxpZCIsImRvU2lnbk91dCIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmllbGROYW1lIiwiZmllbGQiLCJmaWVsZFZhbHVlIiwiaGFzQ2xhc3MiLCJnZXRJbnZhbGlkTWVzc2FnZVNlcnZlciIsImludmFsaWRNZXNzYWdlIiwiZ2V0SW52YWxpZE1lc3NhZ2VDbGllbnQiLCJjaGVja1Bhc3N3b3JkIiwibWVzc2FnZXMiLCJmaWVsZEdyb3VwIiwiaWRJbnZhbGlkRmllbGQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaXMiLCJhcHBlbmQiLCJpbnZhbGlkTWVzc2FnZUNsaWVudCIsImludmFsaWRNZXNzYWdlU2VydmVyIiwiY29uZmlybXBhc3N3b3JkRmllbGQiLCJlbnRyb3BpemVyIiwiRW50cm9waXplciIsImV2YWx1YXRlIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImN1cnJlbnQiLCJpbml0T25lRHJvcHpvbmUiLCJpZCIsImZldGNoSW1nIiwiZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiIsInZhbHVlVGFyZ2V0RmVpbGQiLCJpZERyb3B6b25lIiwiYWNjZXB0ZWRGaWxlcyIsImluaXQiLCJvbiIsImZpbGUiLCJ4aHIiLCJmb3JtRGF0YSIsImN1cnJlbnRfdXJsIiwiY3VycmVudF9pbmYiLCJpbWFnZXMiLCJnZXRMYW5nQ2hvaWNlIiwiZGVsZXRlQnlJZCIsIm1vZGFsV2luZG93IiwidXJsIiwiaWRfZmllbGRfbmFtZSIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibW9kYWwiLCJFcnJvciIsImdldENoZWNrSW1ncyIsInJlc3VsdCIsImVhY2giLCJpbmRleCIsImN1cnJlbnRJdGVtSlEiLCJwcm9wIiwicHVzaCIsImRlbGV0ZUNvbmZpcm1hdGlvbnMiLCJ0YXJnZXRCdXR0b24iLCJhdHRyIiwicmVsYXRlZFRhcmdldCIsImRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMiLCJidXR0b24iLCJmZXRjaERlbGV0ZUltZ3MiLCJjaGVja3MiLCJtYWluSGFuZGxlciIsImRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QiLCJkZWxldGVJbWciLCJ0YWJsZV9uYW1lIiwiZGVsZXRlVmlkZW8iLCJmZXRjaERlbGV0ZVZpZGVvIiwiZ2V0Q2hlY2tWaWRlbyIsImluaXRfb3dsIiwib3dsQ2Fyb3VzZWwiLCJsb29wIiwibWFyZ2luIiwibmF2IiwiYXV0b3BsYXkiLCJzbWFydFNwZWVkIiwiYXV0b3BsYXlUaW1lb3V0IiwicmVzcG9uc2l2ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJDLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFB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Q0FNQTs7QUFDQStHLHNGQUFXLEcsQ0FFWDs7QUFDQUcsNkVBQVEsRyxDQUVSOztBQUNBN0YsbUVBQVEsRyxDQUVSOztBQUNBTCxtRUFBUSxHLENBRVI7O0FBQ0FnQixvRUFBUyxHLENBRVQ7O0FBQ0FqQyx1RUFBUyxHLENBRVQ7O0FBQ0FtRix1RUFBYSxHIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGRvQXBwcm92ZSA9ICgpID0+IHtcbiAgICAkKCcjYXBwcm92ZV9lbWFpbCcpLmNsaWNrKGFzeW5jICgpID0+IHtcblxuICAgICAgICAvLyBUT0RPINC/0LXRgNC10L3QtdGB0YLQuCDQvdCwIFByb21pc2Ug0Lgg0LTQvtCx0LDQstC40YLRjCDQv9GA0LXQu9C+0LTQtdGAINC/0YDQuCDQvtC20LjQtNCw0L3QuNC4INC+0YLQv9GA0LDQstC60LhcbiAgICAgICAgY29uc3QgYXBwcm92ZUlzV2VsbERvbmUgPSBhd2FpdCAoYXdhaXQgZmV0Y2goJ3NyYy9hdXRoL2FwcHJvdmVfcG9zdC5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogJycsIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pKS5qc29uKClcblxuICAgICAgICBpZiAoYXBwcm92ZUlzV2VsbERvbmUpIHtcbiAgICAgICAgICAgICQoJyNhcHByb3ZlX2VtYWlsX2NhcHRpb24nKS5odG1sKCfQndCwINGD0LrQsNC30LDQvdC90YPRjiDQv9C+0YfRgtGDINCx0YvQu9C+INC+0YLQv9GA0LDQu9C10L3QviDQv9C40YHRjNC80L4uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNhcHByb3ZlX2VtYWlsX2NhcHRpb24nKS5odG1sKCfQn9GA0L7QsdC70LXQvNGLINGBINC+0YLQv9GA0LDQstC60L7QuSDQv9C40YHRjNC80LAuINCV0YHQu9C4INCy0YHQtSDQttC1INC+0YfQtdC90Ywg0YXQvtGH0LXRgtGB0Y8g0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPLCDQvNC+0LbQtdGC0LUg0L/QvtC30LLQvtC90LjRgtGMINC/0L4g0L3QvtC80LXRgNGDICs3IDkyMCA0MzEgMDMgOTEg0L/QvtC/0YDQvtCx0YPRjiDRgNC10YjQuNGC0Ywg0LLQsNGI0YMg0L/RgNC+0LHQu9C10LzRgy4nKVxuICAgICAgICB9XG5cbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb0FwcHJvdmUiLCJjb25zdCBGSUVMRFNfU0lHTl9VUCA9IFtcbiAgICAnbG9naW5fc2lnbl91cCcsIFxuICAgICdlbWFpbF9zaWduX3VwJywgXG4gICAgJ3Bhc3N3b3JkX3NpZ25fdXAnLCBcbiAgICAnY29uZmlybXBhc3N3b3JkX3NpZ25fdXAnXG5dXG5cbmNvbnN0IEZJRUxEU19TSUdOX0lOID0gWydsb2dpbl9zaWduX2luJ11cblxuRklFTERTX1NJR05fVVAuZm9yRWFjaChpdGVtID0+ICQoYCMke2l0ZW19YCkua2V5dXAoKCkgPT4gY2hlY2tGaWVsZFNpbmdVcChpdGVtKSkpXG5GSUVMRFNfU0lHTl9JTi5mb3JFYWNoKGl0ZW0gPT4gJChgIyR7aXRlbX1gKS5rZXl1cCgoKSA9PiBjaGVja0ZpZWxkU2luZ0luKGl0ZW0pKSlcblxuZXhwb3J0IGNvbnN0IGRvU2lnblVwID0gKCkgPT4ge1xuICAgICBcbiAgICAkKCcjc2lnbl91cF9zdWJtaXQnKS5jbGljaygoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZmllbGRzSXNWYWxpZCA9IEZJRUxEU19TSUdOX1VQLmV2ZXJ5KGl0ZW0gPT4gZmllbGRJc1ZhbGlkKGl0ZW0pKVxuXG4gICAgICAgIGlmIChmaWVsZHNJc1ZhbGlkKSB7XG4gICAgICAgICAgICAkKCcjc2lnbl91cF9mb3JtJykuc3VibWl0KCkgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZG9TaWduSW4gPSAoKSA9PiB7XG5cbiAgICAkKCcjc2lnbl9pbl9zdWJtaXQnKS5jbGljayhhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbG9naW5GaWVsZCA9ICQoJyNsb2dpbl9zaWduX2luJylcbiAgICAgICAgY29uc3QgbG9naW4gICAgICA9IGxvZ2luRmllbGQudmFsKClcblxuICAgICAgICBpZiAobG9naW4udHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgbWFya1Byb2JsZW0obG9naW5GaWVsZCwgJ2xvZ2luX3NpZ25faW4nLCAn0JvQvtCz0LjQvSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8JylcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGZpZWxkSXNWYWxpZCgnbG9naW5fc2lnbl9pbicpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRGaWVsZCA9ICQoJyNwYXNzd29yZF9zaWduX2luJylcbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZCAgICAgID0gcGFzc3dvcmRGaWVsZC52YWwoKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRJc1ZhbGlkID0gYXdhaXQgKGF3YWl0IGZldGNoKCdzcmMvYXV0aC9jaGVja19wYXNzd29yZC5waHAnLCB7IFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbG9naW4sIHBhc3N3b3JkIH0pLCBcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgICAgICAgICAgfSkpLmpzb24oKVxuXG4gICAgICAgICAgICAgICAgaWYgKHBhc3N3b3JkSXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjc2lnbl9pbl9mb3JtJykuc3VibWl0KCkgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya1Byb2JsZW0ocGFzc3dvcmRGaWVsZCwgJ3Bhc3N3b3JkX3NpZ25faW4nLCAn0J/QsNGA0L7Qu9GMINC90LXQstC10YDQvdGL0LknKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5leHBvcnQgY29uc3QgZG9TaWduT3V0ID0gKCkgPT4ge1xuXG4gICAgJCgnI3NpZ25fb3V0JykuY2xpY2soYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGF3YWl0IGZldGNoKCdzcmMvYXV0aC9zaWduX291dC5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogJycsIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pIFxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuXG4gICAgfSkgIFxuXG59XG5cbmNvbnN0IGZpZWxkSXNWYWxpZCA9IChmaWVsZE5hbWUpID0+IHtcblxuICAgIGNvbnN0IGZpZWxkICAgICAgPSAkKGAjJHtmaWVsZE5hbWV9YClcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gZmllbGQudmFsKClcblxuICAgIHJldHVybiAoZmllbGQuaGFzQ2xhc3MoJ2lzLXZhbGlkJykpICYmIChmaWVsZFZhbHVlICE9PSAnJylcbn0gXG5cbmNvbnN0IGdldEludmFsaWRNZXNzYWdlU2VydmVyID0gYXN5bmMgKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgPT4ge1xuXG4gICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBhd2FpdCAoYXdhaXQgZmV0Y2goJ3NyYy9hdXRoL2NoZWNrX2ZpZWxkcy5waHAnLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmllbGROYW1lLCBmaWVsZFZhbHVlIH0pLCBcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGludmFsaWRNZXNzYWdlXG5cbn1cblxuY29uc3QgZ2V0SW52YWxpZE1lc3NhZ2VDbGllbnQgPSAoZmllbGROYW1lLCBmaWVsZFZhbHVlKSA9PiB7XG5cbiAgICBzd2l0Y2ggKGZpZWxkTmFtZSkge1xuICAgICAgICBjYXNlIFwibG9naW5fc2lnbl91cFwiIDpcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICBjYXNlIFwiZW1haWxfc2lnbl91cFwiIDpcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICBjYXNlIFwicGFzc3dvcmRfc2lnbl91cFwiIDpcbiAgICAgICAgICAgIHJldHVybiBjaGVja1Bhc3N3b3JkKClcbiAgICAgICAgY2FzZSBcImNvbmZpcm1wYXNzd29yZF9zaWduX3VwXCIgOlxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrUGFzc3dvcmQoKSBcbiAgICB9XG5cbn1cblxuY29uc3QgbWFya1Byb2JsZW0gPSAoZmllbGQsIGZpZWxkTmFtZSwgbWVzc2FnZXMpID0+IHtcblxuICAgIGNvbnN0IGZpZWxkR3JvdXAgICAgID0gJChgI2dyb3VwXyR7ZmllbGROYW1lfWApXG4gICAgY29uc3QgaWRJbnZhbGlkRmllbGQgPSBgaW52YWxpZCR7ZmllbGROYW1lfWBcblxuICAgICQoYCMke2lkSW52YWxpZEZpZWxkfWApLnJlbW92ZSgpXG5cbiAgICBpZiAobWVzc2FnZXMgPT09ICcnKSB7XG4gICAgICAgIGZpZWxkLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykuYWRkQ2xhc3MoJ2lzLXZhbGlkJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG4gICAgICAgIGlmICghJChcImRpdlwiKS5pcyhgIyR7aWRJbnZhbGlkRmllbGR9YCkpIHtcbiAgICAgICAgICAgIGZpZWxkR3JvdXAuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGA8ZGl2IGlkPVwiJHtpZEludmFsaWRGaWVsZH1cIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgJHttZXNzYWdlc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICB9XG4gICAgfSBcblxufVxuXG5jb25zdCBjaGVja0ZpZWxkU2luZ1VwID0gYXN5bmMgKGZpZWxkTmFtZSkgPT4ge1xuXG4gICAgY29uc3QgZmllbGQgICAgICA9ICQoYCMke2ZpZWxkTmFtZX1gKVxuICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBmaWVsZC52YWwoKVxuXG4gICAgaWYgKGZpZWxkVmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGZpZWxkLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpbnZhbGlkTWVzc2FnZUNsaWVudCA9IGdldEludmFsaWRNZXNzYWdlQ2xpZW50KGZpZWxkTmFtZSwgZmllbGRWYWx1ZSlcblxuICAgICAgICBtYXJrUHJvYmxlbShmaWVsZCwgZmllbGROYW1lLCBpbnZhbGlkTWVzc2FnZUNsaWVudClcbiAgICAgICAgXG4gICAgICAgIGlmIChpbnZhbGlkTWVzc2FnZUNsaWVudCA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlU2VydmVyID0gYXdhaXQgZ2V0SW52YWxpZE1lc3NhZ2VTZXJ2ZXIoZmllbGROYW1lLCBmaWVsZFZhbHVlKVxuICAgICAgICAgICAgbWFya1Byb2JsZW0oZmllbGQsIGZpZWxkTmFtZSwgaW52YWxpZE1lc3NhZ2VTZXJ2ZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY29uc3QgY2hlY2tGaWVsZFNpbmdJbiA9IGFzeW5jIChmaWVsZE5hbWUpID0+IHtcblxuICAgIGNvbnN0IGZpZWxkICAgICAgPSAkKGAjJHtmaWVsZE5hbWV9YClcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gZmllbGQudmFsKClcblxuICAgIGlmIChmaWVsZFZhbHVlID09PSAnJykge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2VTZXJ2ZXIgPSBhd2FpdCBnZXRJbnZhbGlkTWVzc2FnZVNlcnZlcihmaWVsZE5hbWUsIGZpZWxkVmFsdWUpXG4gICAgICAgIG1hcmtQcm9ibGVtKGZpZWxkLCBmaWVsZE5hbWUsIGludmFsaWRNZXNzYWdlU2VydmVyKVxuICAgIH1cblxufVxuXG5jb25zdCBjaGVja1Bhc3N3b3JkID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcGFzc3dvcmRGaWVsZCAgICAgICAgPSAkKCcjcGFzc3dvcmRfc2lnbl91cCcpXG4gICAgY29uc3QgY29uZmlybXBhc3N3b3JkRmllbGQgPSAkKCcjY29uZmlybXBhc3N3b3JkX3NpZ25fdXAnKVxuXG4gICAgbGV0IGVudHJvcGl6ZXIgPSBuZXcgRW50cm9waXplcigpO1xuXG4gICAgcGFzc3dvcmRGaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG4gICAgJCgnZGl2I2ludmFsaWRwYXNzd29yZF9zaWduX3VwJykucmVtb3ZlKClcblxuICAgIGlmIChlbnRyb3BpemVyLmV2YWx1YXRlKHBhc3N3b3JkRmllbGQudmFsKCkpIDwgMTApIHtcbiAgICAgICAgcmV0dXJuICfQn9GA0LjQtNGD0LzQsNC50YLQtSDQv9Cw0YDQvtC70Ywg0L/QvtGB0LvQvtC20L3QtdC1J1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXNzd29yZEZpZWxkLnZhbCgpICE9PSBjb25maXJtcGFzc3dvcmRGaWVsZC52YWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuICfQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YInICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iLCJEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZVxuXG5leHBvcnQgY29uc3QgZHJvcHpvbmVIYW5kbGVycyA9IGFzeW5jICh0YWJsZU5hbWUsIHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgcGFyYW1zID0gW10pID0+IHtcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBcbiAgICAgICAgaXRlbXMuZm9yRWFjaChjdXJyZW50ID0+IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIGN1cnJlbnQuaWQpKVxuXG4gICAgYXdhaXQgYXBwbHlfaW5pdChhd2FpdCBmZXRjaEltZyh0YWJsZU5hbWUsIHBhcmFtcykpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnNDb21tb24gPSBhc3luYyAocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkKSA9PiBcbiAgICBhd2FpdCBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCAnY29tbW9uJylcblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZCkgPT4ge1xuXG4gICAgbGV0IGlkRHJvcHpvbmUgPSBgIyR7cHJlZml4RHJvcHpvbmV9LSR7dmFsdWVUYXJnZXRGZWlsZH1gXG5cbiAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfSlcblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICh0YWJsZU5hbWUsIHBhcmFtcyA9IFtdKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJ3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9leGhpYml0aW9uX0NSVUQvZ2V0X2V4aGliaXRpb25fcGhvdG8ucGhwJztcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IHRhYmxlTmFtZSwgcGFyYW1zIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IGltYWdlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChjdXJyZW50X3VybCwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufSIsImNvbnN0IGdldExhbmdDaG9pY2UgPSAoKSA9PiB7XG4gICAgJCgnI2xhbmdfcnVzJykuY2xpY2soKCkgPT4ge1xuICAgICAgICAkKCcjbGFuZ19jdXJyZW50JykuaHRtbCgnPGltZyBzcmM9XCJpbWFnZXMvbGFuZy9ydXNmbGFnMS5wbmdcIj4nKVxuICAgIH0pXG4gICAgJCgnI2xhbmdfZW5nJykuY2xpY2soKCkgPT4ge1xuICAgICAgICAkKCcjbGFuZ19jdXJyZW50JykuaHRtbCgnPGltZyBzcmM9XCJpbWFnZXMvbGFuZy9hbWZsYWcxLnBuZ1wiPicpXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TGFuZ0Nob2ljZSIsImNvbnN0IGRlbGV0ZUJ5SWQgPSBhc3luYyAobW9kYWxXaW5kb3csIHVybCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuXG4gICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuXG4gICAgdHJ5IHtcblxuICAgICAgICBhd2FpdCBmZXRjaCh1cmwsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcblxuICAgIH0gY2F0Y2gge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/QvtC70YPRh9C40YLRjCDQtNCw0L3QvdGL0LUg0L7RgiDRgdC10YDQstC10YDQsCcpXG4gICAgfVxufVxuXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFske2lkX2ZpZWxkX25hbWV9ID0gJHtpZH1dYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9ucyA9IChtb2RhbFdpbmRvdywgdGFyZ2V0QnV0dG9uLCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIHRhcmdldEJ1dHRvbi5jbGljaygoKSA9PiBkZWxldGVCeUlkKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpKVxuXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJyxcbiAgICAgICAgZXZlbnQgPT4gdGFyZ2V0QnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zU3RhdGVzID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVTdGF0ZScpXG4gICAgbGV0IGJ1dHRvbiAgICAgICAgPSAkKCcjZGVsZXRlX3N0YXRlJylcbiAgICBsZXQgaWRfZmllbGRfbmFtZSA9ICdzdGF0ZV9pZCdcbiAgICBsZXQgdXJsICAgICAgICAgICA9ICcvSXh0bGFuLXBocC9zcmMvREIva2l0dHlfQ1JVRC9zdGF0ZV9DUlVEL3N0YXRlX2RlbGV0ZV9ncm91cC5waHAnXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzKSA9PiB7XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzIH1cbiAgICAgICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKCd0cnVlJywgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QgPSAoKSA9PiB7XG5cbiAgICBsZXQgbW9kYWxXaW5kb3cgICA9ICQoJyNtb2RhbERlbGV0ZVBlcmlvZCcpXG4gICAgbGV0IGJ1dHRvbiAgICAgICAgPSAkKCcjZGVsZXRlX3BlcmlvZCcpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnYnJvb2RfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnL0l4dGxhbi1waHAvc3JjL0RCL2tpdHR5X0NSVUQvcGVyaW9kX0NSVUQvcGVyaW9kX2RlbGV0ZV9ncm91cC5waHAnXG5cbiAgICAvLyBEUlkgLSDQv9GA0L7QsdGA0L7RgSDRgSDQutC90L7Qv9C60Lgg0LfQsNC/0YPRgdC60LAg0LzQvtC00LDQu9C60Lgg0L3QsCDQutC90L7Qv9C60YMg0YPQtNCw0LvQtdC90LjRjyDQstGL0L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiBidXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxuICAgIGNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MsIGlkKSA9PiB7XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzLCBpZCB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICBcbiAgICAgICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgaWQgICAgID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKGlkLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MsIGlkKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpXG5cbn0iLCJsZXQgdXJsID0nL0l4dGxhbi1waHAvc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2ltZ19DUlVEL2ltZ19kZWxldGVfZ3JvdXAucGhwJ1xuXG5jb25zdCBkZWxldGVJbWcgPSAobW9kYWxXaW5kb3csIGJ1dHRvbiwgaWRfZmllbGRfbmFtZSwgdGFibGVfbmFtZSkgPT4ge1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSkgXG5cbn1cblxuLy8gRFJZIC0g0YHQvtC+0YLQvdC+0YHQuNGC0YHRjyDRgSDRg9C00LDQu9C10L3QuNC10Lwg0L/QtdGA0LjQvtC00LBcbmNvbnN0IGdldENoZWNrSW1ncyA9IGFzeW5jIChpZCwgaWRfZmllbGRfbmFtZSkgPT4geyBcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFske2lkX2ZpZWxkX25hbWV9ID0gJHtpZH1dYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG59XG5cbmNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MsIHVybCwgdGFibGVfbmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzLCB0YWJsZV9uYW1lIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVJbWciLCJjb25zdCBkZWxldGVWaWRlbyA9ICgpID0+IHtcbiAgICAkKCcjZGVsZXRlX3ZpZGVvJykuY2xpY2soKCkgPT4gbWFpbkhhbmRsZXIoKSkgXG59XG5cbmNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgYXdhaXQgZmV0Y2hEZWxldGVWaWRlbyhhd2FpdCBnZXRDaGVja1ZpZGVvKCkpICAgXG4gICAgYXdhaXQgKGFzeW5jICgpID0+ICQoJyNtb2RhbERlbGV0ZVZpZGVvJykubW9kYWwoJ2hpZGUnKSkoKVxuXG59XG5cbmNvbnN0IGdldENoZWNrVmlkZW8gPSBhc3luYyAoKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbdGhpc192aWRlbyA9IHRydWVdYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG59XG5cbmNvbnN0IGZldGNoRGVsZXRlVmlkZW8gPSBhc3luYyAoY2hlY2tzKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJy9JeHRsYW4tcGhwL3NyYy9EQi92aWRlb19DUlVEL3ZpZGVvX2RlbGV0ZV9ncm91cC5waHAnXG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBmZXRjaChjdXJyZW50X3VybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlVmlkZW8iLCJjb25zdCBpbml0X293bCA9ICgpID0+IHtcbiAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgc21hcnRTcGVlZDogMzAwMCxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA2MDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdF9vd2wiLCJpbXBvcnQgeyBkcm9wem9uZUhhbmRsZXJzIH0gZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMnXG5pbXBvcnQgeyBkZWxldGVDb25maXJtYXRpb25zIH0gZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlJ1xuaW1wb3J0IGRlbGV0ZUltZyBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nJ1xuaW1wb3J0IGRlbGV0ZVZpZGVvIGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV92aWRlbydcbmltcG9ydCBpbml0X293bCBmcm9tICcuL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwnXG5pbXBvcnQgeyBkb1NpZ25JbiwgZG9TaWduVXAsIGRvU2lnbk91dCB9IGZyb20gJy4vZnJvbnQvYXV0aC9kb0F1dGgnXG5pbXBvcnQgZG9BcHByb3ZlIGZyb20gJy4vZnJvbnQvYXV0aC9hcHByb3ZlUG9zdCdcbmltcG9ydCBnZXRMYW5nQ2hvaWNlIGZyb20gJy4vZnJvbnQvbG9jYWwvY2hvaWNlTGFuZydcblxuZHJvcHpvbmVIYW5kbGVycygnZXhoaWJpdGlvbnMnLCAnbXktZHJvcHpvbmUnLCAnZXhoaWJpdGlvbl9pZCcpXG5cbmRyb3B6b25lSGFuZGxlcnMoJ2tpbmRvZmRvY3VtZW50cycsICdteS1kcm9wem9uZS1raW5kLW9mLWRvY3VtZW50cycsICdraW5kb2Zkb2N1bWVudHNfaWQnKVxuXG4vL9Cj0LTQsNC70LXQvdC40LUg0L3QvtCy0L7RgdGC0LXQuSBEUlkgLSDRg9C00LDQu9C10L3QuNC1INC90L7QstC+0YHRgtC10Lkg0YDQsNGB0YjQsNGA0LjRgtGMINC90LAg0LLQtdGB0Ywg0L/RgNC+0LXQutGCXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZU5ld3MnKSwgXG4gICAgJCgnI2RlbGV0ZV9uZXdzJyksIFxuICAgICcvSXh0bGFuLXBocC9zcmMvREIvbmV3c19DUlVEL25ld3NfZGVsZXRlLnBocCcsXG4gICAgJ25ld3NfaW5kZXgnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INCy0YvRgdGC0LDQstC+0LpcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlRXhoaWJpdGlvbicpLCBcbiAgICAkKCcjZGVsZXRlX2V4aGliaXRpb24nKSwgXG4gICAgJy9JeHRsYW4tcGhwL3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9leGhpYml0aW9uX0NSVUQvZXhoaWJpdGlvbl9kZWxldGUucGhwJyxcbiAgICAnZXhoaWJpdGlvbl9pZCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0YLQuNC/0L7QsiDQtNC+0LrRg9C80LXQvdGC0L7QslxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVLaW5kT2ZEb2N1bWVudCcpLCBcbiAgICAkKCcjZGVsZXRlX2tpbmRfb2ZfZG9jdW1lbnQnKSwgXG4gICAgJy9JeHRsYW4tcGhwL3NyYy9EQi9kb2N1bWVudF9DUlVEL2tpbmRfb2ZfZG9jdW1lbnRfQ1JVRC9raW5kX29mX2RvY3VtZW50X2RlbGV0ZS5waHAnLFxuICAgICdraW5kX29mX2RvY3VtZW50X2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNC5INGBINCy0YvRgdGC0LDQstC+0LpcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNC5INC60L7RiNC10LpcbmRlbGV0ZUltZyhcbiAgICAkKCcjbW9kYWxEZWxldGVJbWcnKSxcbiAgICAkKCcjZGVsZXRlX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLFxuICAgICdpbWdleGhpYml0aW9ucycpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDQtNC+0LrRg9C80LXQvdGC0L7QslxuZGVsZXRlSW1nKFxuICAgICQoJyNtb2RhbERlbGV0ZUltZycpLFxuICAgICQoJyNkZWxldGVfaW1nJyksIFxuICAgICdncm91cF9pZCcsXG4gICAgJ2ltZ2tpbmRvZmRvY3VtZW50JylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQstC40LTQtdC+XG5kZWxldGVWaWRlbygpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QstC40L3QvtC5INC60LDRgNGD0YHQtdC70LhcbmluaXRfb3dsKClcblxuLy8g0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbmRvU2lnbkluKClcblxuLy8g0JLRhdC+0LQg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG5kb1NpZ25VcCgpXG5cbi8vINCS0YvRhdC+0LQg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG5kb1NpZ25PdXQoKVxuXG4vLyDQn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0YtcbmRvQXBwcm92ZSgpXG5cbi8vINCS0YvQsdC+0YAg0Y/Qt9GL0LrQsFxuZ2V0TGFuZ0Nob2ljZSgpIl0sInNvdXJjZVJvb3QiOiIifQ==