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
            return fetch('src/auth/send_check_message.php', {
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
              $('#approve_email_caption').html('Проблемы с отправкой письма.\
            \Возможно при регистрации вы указали неверный адрес электронной почты и можете исправить это\
            \перейдя в режим редактрования профиля (для этого нужно кликнуть по имени пользователя).\
            \Если это не так, а зарегистрироваться очень хочется, можете позвонить по номеру +7 920 431 03 91\
            \и я попробую решить вашу проблему.');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2F1dGgvYXBwcm92ZVBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2F1dGgvZG9BdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2xvY2FsL2Nob2ljZUxhbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX3ZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkb0FwcHJvdmUiLCIkIiwiY2xpY2siLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwianNvbiIsImFwcHJvdmVJc1dlbGxEb25lIiwiaHRtbCIsIkZJRUxEU19TSUdOX1VQIiwiRklFTERTX1NJR05fSU4iLCJmb3JFYWNoIiwiaXRlbSIsImtleXVwIiwiY2hlY2tGaWVsZFNpbmdVcCIsImNoZWNrRmllbGRTaW5nSW4iLCJkb1NpZ25VcCIsImZpZWxkc0lzVmFsaWQiLCJldmVyeSIsImZpZWxkSXNWYWxpZCIsInN1Ym1pdCIsImRvU2lnbkluIiwibG9naW5GaWVsZCIsImxvZ2luIiwidmFsIiwidHJpbSIsIm1hcmtQcm9ibGVtIiwicGFzc3dvcmRGaWVsZCIsInBhc3N3b3JkIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhc3N3b3JkSXNWYWxpZCIsImRvU2lnbk91dCIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmllbGROYW1lIiwiZmllbGQiLCJmaWVsZFZhbHVlIiwiaGFzQ2xhc3MiLCJnZXRJbnZhbGlkTWVzc2FnZVNlcnZlciIsImludmFsaWRNZXNzYWdlIiwiZ2V0SW52YWxpZE1lc3NhZ2VDbGllbnQiLCJjaGVja1Bhc3N3b3JkIiwibWVzc2FnZXMiLCJmaWVsZEdyb3VwIiwiaWRJbnZhbGlkRmllbGQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaXMiLCJhcHBlbmQiLCJpbnZhbGlkTWVzc2FnZUNsaWVudCIsImludmFsaWRNZXNzYWdlU2VydmVyIiwiY29uZmlybXBhc3N3b3JkRmllbGQiLCJlbnRyb3BpemVyIiwiRW50cm9waXplciIsImV2YWx1YXRlIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImN1cnJlbnQiLCJpbml0T25lRHJvcHpvbmUiLCJpZCIsImZldGNoSW1nIiwiZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiIsInZhbHVlVGFyZ2V0RmVpbGQiLCJpZERyb3B6b25lIiwiYWNjZXB0ZWRGaWxlcyIsImluaXQiLCJvbiIsImZpbGUiLCJ4aHIiLCJmb3JtRGF0YSIsImN1cnJlbnRfdXJsIiwiY3VycmVudF9pbmYiLCJpbWFnZXMiLCJnZXRMYW5nQ2hvaWNlIiwiZGVsZXRlQnlJZCIsIm1vZGFsV2luZG93IiwidXJsIiwiaWRfZmllbGRfbmFtZSIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibW9kYWwiLCJFcnJvciIsImdldENoZWNrSW1ncyIsInJlc3VsdCIsImVhY2giLCJpbmRleCIsImN1cnJlbnRJdGVtSlEiLCJwcm9wIiwicHVzaCIsImRlbGV0ZUNvbmZpcm1hdGlvbnMiLCJ0YXJnZXRCdXR0b24iLCJhdHRyIiwicmVsYXRlZFRhcmdldCIsImRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMiLCJidXR0b24iLCJmZXRjaERlbGV0ZUltZ3MiLCJjaGVja3MiLCJtYWluSGFuZGxlciIsImRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QiLCJkZWxldGVJbWciLCJ0YWJsZV9uYW1lIiwiZGVsZXRlVmlkZW8iLCJmZXRjaERlbGV0ZVZpZGVvIiwiZ2V0Q2hlY2tWaWRlbyIsImluaXRfb3dsIiwib3dsQ2Fyb3VzZWwiLCJsb29wIiwibWFyZ2luIiwibmF2IiwiYXV0b3BsYXkiLCJzbWFydFNwZWVkIiwiYXV0b3BsYXlUaW1lb3V0IiwicmVzcG9uc2l2ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJDLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFB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VCxDLENBTUE7O0FBQ0ErRyxzRkFBVyxHLENBRVg7O0FBQ0FHLDZFQUFRLEcsQ0FFUjs7QUFDQTdGLG1FQUFRLEcsQ0FFUjs7QUFDQUwsbUVBQVEsRyxDQUVSOztBQUNBZ0Isb0VBQVMsRyxDQUVUOztBQUNBakMsdUVBQVMsRyxDQUVUOztBQUNBbUYsdUVBQWEsRyIsImZpbGUiOiIuL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBkb0FwcHJvdmUgPSAoKSA9PiB7XG4gICAgJCgnI2FwcHJvdmVfZW1haWwnKS5jbGljayhhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgLy8gVE9ETyDQv9C10YDQtdC90LXRgdGC0Lgg0L3QsCBQcm9taXNlINC4INC00L7QsdCw0LLQuNGC0Ywg0L/RgNC10LvQvtC00LXRgCDQv9GA0Lgg0L7QttC40LTQsNC90LjQuCDQvtGC0L/RgNCw0LLQutC4XG4gICAgICAgIGNvbnN0IGFwcHJvdmVJc1dlbGxEb25lID0gYXdhaXQgKGF3YWl0IGZldGNoKCdzcmMvYXV0aC9zZW5kX2NoZWNrX21lc3NhZ2UucGhwJywgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgIGJvZHk6ICcnLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICB9KSkuanNvbigpXG5cbiAgICAgICAgaWYgKGFwcHJvdmVJc1dlbGxEb25lKSB7XG4gICAgICAgICAgICAkKCcjYXBwcm92ZV9lbWFpbF9jYXB0aW9uJykuaHRtbCgn0J3QsCDRg9C60LDQt9Cw0L3QvdGD0Y4g0L/QvtGH0YLRgyDQsdGL0LvQviDQvtGC0L/RgNCw0LvQtdC90L4g0L/QuNGB0YzQvNC+LicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjYXBwcm92ZV9lbWFpbF9jYXB0aW9uJykuaHRtbCgn0J/RgNC+0LHQu9C10LzRiyDRgSDQvtGC0L/RgNCw0LLQutC+0Lkg0L/QuNGB0YzQvNCwLlxcXG4gICAgICAgICAgICBcXNCS0L7Qt9C80L7QttC90L4g0L/RgNC4INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LLRiyDRg9C60LDQt9Cw0LvQuCDQvdC10LLQtdGA0L3Ri9C5INCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLINC4INC80L7QttC10YLQtSDQuNGB0L/RgNCw0LLQuNGC0Ywg0Y3RgtC+XFxcbiAgICAgICAgICAgIFxc0L/QtdGA0LXQudC00Y8g0LIg0YDQtdC20LjQvCDRgNC10LTQsNC60YLRgNC+0LLQsNC90LjRjyDQv9GA0L7RhNC40LvRjyAo0LTQu9GPINGN0YLQvtCz0L4g0L3Rg9C20L3QviDQutC70LjQutC90YPRgtGMINC/0L4g0LjQvNC10L3QuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8pLlxcXG4gICAgICAgICAgICBcXNCV0YHQu9C4INGN0YLQviDQvdC1INGC0LDQuiwg0LAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPINC+0YfQtdC90Ywg0YXQvtGH0LXRgtGB0Y8sINC80L7QttC10YLQtSDQv9C+0LfQstC+0L3QuNGC0Ywg0L/QviDQvdC+0LzQtdGA0YMgKzcgOTIwIDQzMSAwMyA5MVxcXG4gICAgICAgICAgICBcXNC4INGPINC/0L7Qv9GA0L7QsdGD0Y4g0YDQtdGI0LjRgtGMINCy0LDRiNGDINC/0YDQvtCx0LvQtdC80YMuJylcbiAgICAgICAgfVxuXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9BcHByb3ZlIiwiY29uc3QgRklFTERTX1NJR05fVVAgPSBbXG4gICAgJ2xvZ2luX3NpZ25fdXAnLCBcbiAgICAnZW1haWxfc2lnbl91cCcsIFxuICAgICdwYXNzd29yZF9zaWduX3VwJywgXG4gICAgJ2NvbmZpcm1wYXNzd29yZF9zaWduX3VwJ1xuXVxuXG5jb25zdCBGSUVMRFNfU0lHTl9JTiA9IFsnbG9naW5fc2lnbl9pbiddXG5cbkZJRUxEU19TSUdOX1VQLmZvckVhY2goaXRlbSA9PiAkKGAjJHtpdGVtfWApLmtleXVwKCgpID0+IGNoZWNrRmllbGRTaW5nVXAoaXRlbSkpKVxuRklFTERTX1NJR05fSU4uZm9yRWFjaChpdGVtID0+ICQoYCMke2l0ZW19YCkua2V5dXAoKCkgPT4gY2hlY2tGaWVsZFNpbmdJbihpdGVtKSkpXG5cbmV4cG9ydCBjb25zdCBkb1NpZ25VcCA9ICgpID0+IHtcbiAgICAgXG4gICAgJCgnI3NpZ25fdXBfc3VibWl0JykuY2xpY2soKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGZpZWxkc0lzVmFsaWQgPSBGSUVMRFNfU0lHTl9VUC5ldmVyeShpdGVtID0+IGZpZWxkSXNWYWxpZChpdGVtKSlcblxuICAgICAgICBpZiAoZmllbGRzSXNWYWxpZCkge1xuICAgICAgICAgICAgJCgnI3NpZ25fdXBfZm9ybScpLnN1Ym1pdCgpICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRvU2lnbkluID0gKCkgPT4ge1xuXG4gICAgJCgnI3NpZ25faW5fc3VibWl0JykuY2xpY2soYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGxvZ2luRmllbGQgPSAkKCcjbG9naW5fc2lnbl9pbicpXG4gICAgICAgIGNvbnN0IGxvZ2luICAgICAgPSBsb2dpbkZpZWxkLnZhbCgpXG5cbiAgICAgICAgaWYgKGxvZ2luLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgIG1hcmtQcm9ibGVtKGxvZ2luRmllbGQsICdsb2dpbl9zaWduX2luJywgJ9Cb0L7Qs9C40L0g0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YPRgdGC0YvQvCcpXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChmaWVsZElzVmFsaWQoJ2xvZ2luX3NpZ25faW4nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgPSAkKCcjcGFzc3dvcmRfc2lnbl9pbicpXG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgICAgICA9IHBhc3N3b3JkRmllbGQudmFsKClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkSXNWYWxpZCA9IGF3YWl0IChhd2FpdCBmZXRjaCgnc3JjL2F1dGgvY2hlY2tfcGFzc3dvcmQucGhwJywgeyBcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxvZ2luLCBwYXNzd29yZCB9KSwgXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICAgICAgICAgIH0pKS5qc29uKClcblxuICAgICAgICAgICAgICAgIGlmIChwYXNzd29yZElzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3NpZ25faW5fZm9ybScpLnN1Ym1pdCgpIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtQcm9ibGVtKHBhc3N3b3JkRmllbGQsICdwYXNzd29yZF9zaWduX2luJywgJ9Cf0LDRgNC+0LvRjCDQvdC10LLQtdGA0L3Ri9C5JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRvU2lnbk91dCA9ICgpID0+IHtcblxuICAgICQoJyNzaWduX291dCcpLmNsaWNrKGFzeW5jICgpID0+IHtcblxuICAgICAgICBhd2FpdCBmZXRjaCgnc3JjL2F1dGgvc2lnbl9vdXQucGhwJywgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgIGJvZHk6ICcnLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICB9KSBcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcblxuICAgIH0pICBcblxufVxuXG5jb25zdCBmaWVsZElzVmFsaWQgPSAoZmllbGROYW1lKSA9PiB7XG5cbiAgICBjb25zdCBmaWVsZCAgICAgID0gJChgIyR7ZmllbGROYW1lfWApXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IGZpZWxkLnZhbCgpXG5cbiAgICByZXR1cm4gKGZpZWxkLmhhc0NsYXNzKCdpcy12YWxpZCcpKSAmJiAoZmllbGRWYWx1ZSAhPT0gJycpXG59IFxuXG5jb25zdCBnZXRJbnZhbGlkTWVzc2FnZVNlcnZlciA9IGFzeW5jIChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpID0+IHtcblxuICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYXdhaXQgKGF3YWl0IGZldGNoKCdzcmMvYXV0aC9jaGVja19maWVsZHMucGhwJywgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZpZWxkTmFtZSwgZmllbGRWYWx1ZSB9KSwgXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbnZhbGlkTWVzc2FnZVxuXG59XG5cbmNvbnN0IGdldEludmFsaWRNZXNzYWdlQ2xpZW50ID0gKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgPT4ge1xuXG4gICAgc3dpdGNoIChmaWVsZE5hbWUpIHtcbiAgICAgICAgY2FzZSBcImxvZ2luX3NpZ25fdXBcIiA6XG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgY2FzZSBcImVtYWlsX3NpZ25fdXBcIiA6XG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgY2FzZSBcInBhc3N3b3JkX3NpZ25fdXBcIiA6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tQYXNzd29yZCgpXG4gICAgICAgIGNhc2UgXCJjb25maXJtcGFzc3dvcmRfc2lnbl91cFwiIDpcbiAgICAgICAgICAgIHJldHVybiBjaGVja1Bhc3N3b3JkKCkgXG4gICAgfVxuXG59XG5cbmNvbnN0IG1hcmtQcm9ibGVtID0gKGZpZWxkLCBmaWVsZE5hbWUsIG1lc3NhZ2VzKSA9PiB7XG5cbiAgICBjb25zdCBmaWVsZEdyb3VwICAgICA9ICQoYCNncm91cF8ke2ZpZWxkTmFtZX1gKVxuICAgIGNvbnN0IGlkSW52YWxpZEZpZWxkID0gYGludmFsaWQke2ZpZWxkTmFtZX1gXG5cbiAgICAkKGAjJHtpZEludmFsaWRGaWVsZH1gKS5yZW1vdmUoKVxuXG4gICAgaWYgKG1lc3NhZ2VzID09PSAnJykge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgICBpZiAoISQoXCJkaXZcIikuaXMoYCMke2lkSW52YWxpZEZpZWxkfWApKSB7XG4gICAgICAgICAgICBmaWVsZEdyb3VwLmFwcGVuZChcbiAgICAgICAgICAgICAgICBgPGRpdiBpZD1cIiR7aWRJbnZhbGlkRmllbGR9XCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgPC9kaXY+YClcbiAgICAgICAgfVxuICAgIH0gXG5cbn1cblxuY29uc3QgY2hlY2tGaWVsZFNpbmdVcCA9IGFzeW5jIChmaWVsZE5hbWUpID0+IHtcblxuICAgIGNvbnN0IGZpZWxkICAgICAgPSAkKGAjJHtmaWVsZE5hbWV9YClcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gZmllbGQudmFsKClcblxuICAgIGlmIChmaWVsZFZhbHVlID09PSAnJykge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2VDbGllbnQgPSBnZXRJbnZhbGlkTWVzc2FnZUNsaWVudChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpXG5cbiAgICAgICAgbWFya1Byb2JsZW0oZmllbGQsIGZpZWxkTmFtZSwgaW52YWxpZE1lc3NhZ2VDbGllbnQpXG4gICAgICAgIFxuICAgICAgICBpZiAoaW52YWxpZE1lc3NhZ2VDbGllbnQgPT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBpbnZhbGlkTWVzc2FnZVNlcnZlciA9IGF3YWl0IGdldEludmFsaWRNZXNzYWdlU2VydmVyKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSlcbiAgICAgICAgICAgIG1hcmtQcm9ibGVtKGZpZWxkLCBmaWVsZE5hbWUsIGludmFsaWRNZXNzYWdlU2VydmVyKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNvbnN0IGNoZWNrRmllbGRTaW5nSW4gPSBhc3luYyAoZmllbGROYW1lKSA9PiB7XG5cbiAgICBjb25zdCBmaWVsZCAgICAgID0gJChgIyR7ZmllbGROYW1lfWApXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IGZpZWxkLnZhbCgpXG5cbiAgICBpZiAoZmllbGRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgZmllbGQucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlU2VydmVyID0gYXdhaXQgZ2V0SW52YWxpZE1lc3NhZ2VTZXJ2ZXIoZmllbGROYW1lLCBmaWVsZFZhbHVlKVxuICAgICAgICBtYXJrUHJvYmxlbShmaWVsZCwgZmllbGROYW1lLCBpbnZhbGlkTWVzc2FnZVNlcnZlcilcbiAgICB9XG5cbn1cblxuY29uc3QgY2hlY2tQYXNzd29yZCA9ICgpID0+IHtcblxuICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgICAgICAgID0gJCgnI3Bhc3N3b3JkX3NpZ25fdXAnKVxuICAgIGNvbnN0IGNvbmZpcm1wYXNzd29yZEZpZWxkID0gJCgnI2NvbmZpcm1wYXNzd29yZF9zaWduX3VwJylcblxuICAgIGxldCBlbnRyb3BpemVyID0gbmV3IEVudHJvcGl6ZXIoKTtcblxuICAgIHBhc3N3b3JkRmllbGQucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxuICAgICQoJ2RpdiNpbnZhbGlkcGFzc3dvcmRfc2lnbl91cCcpLnJlbW92ZSgpXG5cbiAgICBpZiAoZW50cm9waXplci5ldmFsdWF0ZShwYXNzd29yZEZpZWxkLnZhbCgpKSA8IDEwKSB7XG4gICAgICAgIHJldHVybiAn0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMINC/0L7RgdC70L7QttC90LXQtSdcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFzc3dvcmRGaWVsZC52YWwoKSAhPT0gY29uZmlybXBhc3N3b3JkRmllbGQudmFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAn0J/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCJyAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIiwiRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAodGFibGVOYW1lLCBwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHBhcmFtcyA9IFtdKSA9PiB7XG5cbiAgICBjb25zdCBhcHBseV9pbml0ID0gYXN5bmMgaXRlbXMgPT4gXG4gICAgICAgIGl0ZW1zLmZvckVhY2goY3VycmVudCA9PiBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBjdXJyZW50LmlkKSlcblxuICAgIGF3YWl0IGFwcGx5X2luaXQoYXdhaXQgZmV0Y2hJbWcodGFibGVOYW1lLCBwYXJhbXMpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCkgPT4gXG4gICAgYXdhaXQgaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgJ2NvbW1vbicpXG5cbmNvbnN0IGluaXRPbmVEcm9wem9uZSA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpID0+IHtcblxuICAgIGxldCBpZERyb3B6b25lID0gYCMke3ByZWZpeERyb3B6b25lfS0ke3ZhbHVlVGFyZ2V0RmVpbGR9YFxuXG4gICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm9uKFwic2VuZGluZ1wiLCAoZmlsZSwgeGhyLCBmb3JtRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCh0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH0pXG5cbn1cblxuY29uc3QgZmV0Y2hJbWcgPSBhc3luYyAodGFibGVOYW1lLCBwYXJhbXMgPSBbXSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2dldF9leGhpYml0aW9uX3Bob3RvLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyB0YWJsZU5hbWUsIHBhcmFtcyB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyBcbiAgICB9KSkuanNvbigpXG5cbiAgICByZXR1cm4gaW1hZ2VzXG5cbn0iLCJjb25zdCBnZXRMYW5nQ2hvaWNlID0gKCkgPT4ge1xuICAgICQoJyNsYW5nX3J1cycpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgJCgnI2xhbmdfY3VycmVudCcpLmh0bWwoJzxpbWcgc3JjPVwiaW1hZ2VzL2xhbmcvcnVzZmxhZzEucG5nXCI+JylcbiAgICB9KVxuICAgICQoJyNsYW5nX2VuZycpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgJCgnI2xhbmdfY3VycmVudCcpLmh0bWwoJzxpbWcgc3JjPVwiaW1hZ2VzL2xhbmcvYW1mbGFnMS5wbmdcIj4nKVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldExhbmdDaG9pY2UiLCJjb25zdCBkZWxldGVCeUlkID0gYXN5bmMgKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcblxuICAgIHRyeSB7XG5cbiAgICAgICAgYXdhaXQgZmV0Y2godXJsLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG5cbiAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7Qu9GD0YfQuNGC0Ywg0LTQsNC90L3Ri9C1INC+0YIg0YHQtdGA0LLQtdGA0LAnKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHQ7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnMgPSAobW9kYWxXaW5kb3csIHRhcmdldEJ1dHRvbiwgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICB0YXJnZXRCdXR0b24uY2xpY2soKCkgPT4gZGVsZXRlQnlJZChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSlcblxuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsXG4gICAgICAgIGV2ZW50ID0+IHRhcmdldEJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlU3RhdGUnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9zdGF0ZScpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnc3RhdGVfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnL0l4dGxhbi1waHAvc3JjL0RCL2tpdHR5X0NSVUQvc3RhdGVfQ1JVRC9zdGF0ZV9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcykgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcyB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncygndHJ1ZScsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcylcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVQZXJpb2QnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9wZXJpb2QnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ2Jyb29kX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJy9JeHRsYW4tcGhwL3NyYy9EQi9raXR0eV9DUlVEL3BlcmlvZF9DUlVEL3BlcmlvZF9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCBpZCkgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgaWQgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCBpZClcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59IiwibGV0IHVybCA9Jy9JeHRsYW4tcGhwL3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9pbWdfQ1JVRC9pbWdfZGVsZXRlX2dyb3VwLnBocCdcblxuY29uc3QgZGVsZXRlSW1nID0gKG1vZGFsV2luZG93LCBidXR0b24sIGlkX2ZpZWxkX25hbWUsIHRhYmxlX25hbWUpID0+IHtcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpIFxuXG59XG5cbi8vIERSWSAtINGB0L7QvtGC0L3QvtGB0LjRgtGB0Y8g0YEg0YPQtNCw0LvQtdC90LjQtdC8INC/0LXRgNC40L7QtNCwXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHsgXG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgdGFibGVfbmFtZSB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSW1nIiwiY29uc3QgZGVsZXRlVmlkZW8gPSAoKSA9PiB7XG4gICAgJCgnI2RlbGV0ZV92aWRlbycpLmNsaWNrKCgpID0+IG1haW5IYW5kbGVyKCkpIFxufVxuXG5jb25zdCBtYWluSGFuZGxlciA9IGFzeW5jICgpID0+IHtcblxuICAgIGF3YWl0IGZldGNoRGVsZXRlVmlkZW8oYXdhaXQgZ2V0Q2hlY2tWaWRlbygpKSAgIFxuICAgIGF3YWl0IChhc3luYyAoKSA9PiAkKCcjbW9kYWxEZWxldGVWaWRlbycpLm1vZGFsKCdoaWRlJykpKClcblxufVxuXG5jb25zdCBnZXRDaGVja1ZpZGVvID0gYXN5bmMgKCkgPT4ge1xuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0W3RoaXNfdmlkZW8gPSB0cnVlXWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZVZpZGVvID0gYXN5bmMgKGNoZWNrcykgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICcvSXh0bGFuLXBocC9zcmMvREIvdmlkZW9fQ1JVRC92aWRlb19kZWxldGVfZ3JvdXAucGhwJ1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgZmV0Y2goY3VycmVudF91cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVZpZGVvIiwiY29uc3QgaW5pdF9vd2wgPSAoKSA9PiB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfb3dsIiwiaW1wb3J0IHsgZHJvcHpvbmVIYW5kbGVycyB9IGZyb20gJy4vZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX0luZGV4LmpzJ1xuaW1wb3J0IHsgZGVsZXRlQ29uZmlybWF0aW9ucyB9IGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZSdcbmltcG9ydCBkZWxldGVJbWcgZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX2ltZydcbmltcG9ydCBkZWxldGVWaWRlbyBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfdmlkZW8nXG5pbXBvcnQgaW5pdF9vd2wgZnJvbSAnLi9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsJ1xuaW1wb3J0IHsgZG9TaWduSW4sIGRvU2lnblVwLCBkb1NpZ25PdXQgfSBmcm9tICcuL2Zyb250L2F1dGgvZG9BdXRoJ1xuaW1wb3J0IGRvQXBwcm92ZSBmcm9tICcuL2Zyb250L2F1dGgvYXBwcm92ZVBvc3QnXG5pbXBvcnQgZ2V0TGFuZ0Nob2ljZSBmcm9tICcuL2Zyb250L2xvY2FsL2Nob2ljZUxhbmcnXG5cbmRyb3B6b25lSGFuZGxlcnMoJ2V4aGliaXRpb25zJywgJ215LWRyb3B6b25lJywgJ2V4aGliaXRpb25faWQnKVxuXG5kcm9wem9uZUhhbmRsZXJzKCdraW5kb2Zkb2N1bWVudHMnLCAnbXktZHJvcHpvbmUta2luZC1vZi1kb2N1bWVudHMnLCAna2luZG9mZG9jdW1lbnRzX2lkJylcblxuLy/Qo9C00LDQu9C10L3QuNC1INC90L7QstC+0YHRgtC10LkgRFJZIC0g0YPQtNCw0LvQtdC90LjQtSDQvdC+0LLQvtGB0YLQtdC5INGA0LDRgdGI0LDRgNC40YLRjCDQvdCwINCy0LXRgdGMINC/0YDQvtC10LrRglxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVOZXdzJyksIFxuICAgICQoJyNkZWxldGVfbmV3cycpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL25ld3NfQ1JVRC9uZXdzX2RlbGV0ZS5waHAnLFxuICAgICduZXdzX2luZGV4JylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQstGL0YHRgtCw0LLQvtC6XG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUV4aGliaXRpb24nKSwgXG4gICAgJCgnI2RlbGV0ZV9leGhpYml0aW9uJyksIFxuICAgICcvSXh0bGFuLXBocC9zcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2V4aGliaXRpb25fZGVsZXRlLnBocCcsXG4gICAgJ2V4aGliaXRpb25faWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INGC0LjQv9C+0LIg0LTQvtC60YPQvNC10L3RgtC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlS2luZE9mRG9jdW1lbnQnKSwgXG4gICAgJCgnI2RlbGV0ZV9raW5kX29mX2RvY3VtZW50JyksIFxuICAgICcvSXh0bGFuLXBocC9zcmMvREIvZG9jdW1lbnRfQ1JVRC9raW5kX29mX2RvY3VtZW50X0NSVUQva2luZF9vZl9kb2N1bWVudF9kZWxldGUucGhwJyxcbiAgICAna2luZF9vZl9kb2N1bWVudF9pZCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDRgSDQstGL0YHRgtCw0LLQvtC6XG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDQutC+0YjQtdC6XG5kZWxldGVJbWcoXG4gICAgJCgnI21vZGFsRGVsZXRlSW1nJyksXG4gICAgJCgnI2RlbGV0ZV9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJyxcbiAgICAnaW1nZXhoaWJpdGlvbnMnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0LTQvtC60YPQvNC10L3RgtC+0LJcbmRlbGV0ZUltZyhcbiAgICAkKCcjbW9kYWxEZWxldGVJbWcnKSxcbiAgICAkKCcjZGVsZXRlX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLFxuICAgICdpbWdraW5kb2Zkb2N1bWVudCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LLQuNC00LXQvlxuZGVsZXRlVmlkZW8oKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LLQuNC90L7QuSDQutCw0YDRg9GB0LXQu9C4XG5pbml0X293bCgpXG5cbi8vINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG5kb1NpZ25JbigpXG5cbi8vINCS0YXQvtC0INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xuZG9TaWduVXAoKVxuXG4vLyDQktGL0YXQvtC0INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xuZG9TaWduT3V0KClcblxuLy8g0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLXG5kb0FwcHJvdmUoKVxuXG4vLyDQktGL0LHQvtGAINGP0LfRi9C60LBcbmdldExhbmdDaG9pY2UoKSJdLCJzb3VyY2VSb290IjoiIn0=