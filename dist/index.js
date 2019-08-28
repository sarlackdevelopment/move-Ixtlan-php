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
/*! exports provided: doSignUp, doSignIn, doSignOut, doEditUserSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignUp", function() { return doSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignIn", function() { return doSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignOut", function() { return doSignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doEditUserSettings", function() { return doEditUserSettings; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FIELDS_SIGN_UP = ['login_sign_up', 'email_sign_up', 'password_sign_up', 'confirmpassword_sign_up'];
var FIELDS_EDIT_USERS_SETTINGS = ['login_edit_user_settings', 'email_edit_user_settings', 'password_edit_user_settings', 'confirmpassword_edit_user_settings'];
var FIELDS_SIGN_IN = ['login_sign_in'];
FIELDS_SIGN_UP.forEach(function (item) {
  return $("#".concat(item)).keyup(function () {
    return checkFieldSingUp(item);
  });
});
FIELDS_EDIT_USERS_SETTINGS.forEach(function (item) {
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
var doEditUserSettings = function doEditUserSettings() {
  $('#edit_user_settings').click(function () {
    var fieldsIsValid = FIELDS_EDIT_USERS_SETTINGS.some(function (item) {
      return fieldIsValid(item);
    });

    if (fieldsIsValid) {
      $('#edit_user_settings_form').submit();
    }
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
  var fields_sign_up = {
    passwordFieldName: 'password_sign_up',
    confirmpasswordFieldName: 'confirmpassword_sign_up'
  };
  var fields_edit_user_settings = {
    passwordFieldName: 'password_edit_user_settings',
    confirmpasswordFieldName: 'confirmpassword_edit_user_settings'
  };

  switch (fieldName) {
    case "login_sign_up":
      return '';

    case "email_sign_up":
      return '';

    case "password_sign_up":
      return checkPassword(fields_sign_up);

    case "confirmpassword_sign_up":
      return checkPassword(fields_sign_up);

    case "login_edit_user_settings":
      return '';

    case "email_edit_user_settings":
      return '';

    case "password_edit_user_settings":
      return checkPassword(fields_edit_user_settings);

    case "confirmpassword_edit_user_settings":
      return checkPassword(fields_edit_user_settings);
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

var checkPassword = function checkPassword(_ref6) {
  var passwordFieldName = _ref6.passwordFieldName,
      confirmpasswordFieldName = _ref6.confirmpasswordFieldName;
  var passwordField = $("#".concat(passwordFieldName));
  var confirmpasswordField = $("#".concat(confirmpasswordFieldName));
  var entropizer = new Entropizer();
  passwordField.removeClass('is-invalid').addClass('is-valid');
  $('div#invalidpassword_sign_up').remove(); // TODO - Повысить сложность пароля

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

Object(_front_auth_doAuth__WEBPACK_IMPORTED_MODULE_5__["doSignOut"])(); // редактирование параметров пользователя

Object(_front_auth_doAuth__WEBPACK_IMPORTED_MODULE_5__["doEditUserSettings"])(); // Подтверждение электронной почты

Object(_front_auth_approvePost__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Выбор языка

Object(_front_local_choiceLang__WEBPACK_IMPORTED_MODULE_7__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2F1dGgvYXBwcm92ZVBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2F1dGgvZG9BdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2xvY2FsL2Nob2ljZUxhbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX3ZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkb0FwcHJvdmUiLCIkIiwiY2xpY2siLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwianNvbiIsImFwcHJvdmVJc1dlbGxEb25lIiwiaHRtbCIsIkZJRUxEU19TSUdOX1VQIiwiRklFTERTX0VESVRfVVNFUlNfU0VUVElOR1MiLCJGSUVMRFNfU0lHTl9JTiIsImZvckVhY2giLCJpdGVtIiwia2V5dXAiLCJjaGVja0ZpZWxkU2luZ1VwIiwiY2hlY2tGaWVsZFNpbmdJbiIsImRvU2lnblVwIiwiZmllbGRzSXNWYWxpZCIsImV2ZXJ5IiwiZmllbGRJc1ZhbGlkIiwic3VibWl0IiwiZG9TaWduSW4iLCJsb2dpbkZpZWxkIiwibG9naW4iLCJ2YWwiLCJ0cmltIiwibWFya1Byb2JsZW0iLCJwYXNzd29yZEZpZWxkIiwicGFzc3dvcmQiLCJKU09OIiwic3RyaW5naWZ5IiwicGFzc3dvcmRJc1ZhbGlkIiwiZG9TaWduT3V0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkb0VkaXRVc2VyU2V0dGluZ3MiLCJzb21lIiwiZmllbGROYW1lIiwiZmllbGQiLCJmaWVsZFZhbHVlIiwiaGFzQ2xhc3MiLCJnZXRJbnZhbGlkTWVzc2FnZVNlcnZlciIsImludmFsaWRNZXNzYWdlIiwiZ2V0SW52YWxpZE1lc3NhZ2VDbGllbnQiLCJmaWVsZHNfc2lnbl91cCIsInBhc3N3b3JkRmllbGROYW1lIiwiY29uZmlybXBhc3N3b3JkRmllbGROYW1lIiwiZmllbGRzX2VkaXRfdXNlcl9zZXR0aW5ncyIsImNoZWNrUGFzc3dvcmQiLCJtZXNzYWdlcyIsImZpZWxkR3JvdXAiLCJpZEludmFsaWRGaWVsZCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJpcyIsImFwcGVuZCIsImludmFsaWRNZXNzYWdlQ2xpZW50IiwiaW52YWxpZE1lc3NhZ2VTZXJ2ZXIiLCJjb25maXJtcGFzc3dvcmRGaWVsZCIsImVudHJvcGl6ZXIiLCJFbnRyb3BpemVyIiwiZXZhbHVhdGUiLCJEcm9wem9uZSIsImF1dG9EaXNjb3ZlciIsImRyb3B6b25lSGFuZGxlcnMiLCJ0YWJsZU5hbWUiLCJwcmVmaXhEcm9wem9uZSIsInRhcmdldEZlaWxkIiwicGFyYW1zIiwiYXBwbHlfaW5pdCIsIml0ZW1zIiwiY3VycmVudCIsImluaXRPbmVEcm9wem9uZSIsImlkIiwiZmV0Y2hJbWciLCJkcm9wem9uZUhhbmRsZXJzQ29tbW9uIiwidmFsdWVUYXJnZXRGZWlsZCIsImlkRHJvcHpvbmUiLCJhY2NlcHRlZEZpbGVzIiwiaW5pdCIsIm9uIiwiZmlsZSIsInhociIsImZvcm1EYXRhIiwiY3VycmVudF91cmwiLCJjdXJyZW50X2luZiIsImltYWdlcyIsImdldExhbmdDaG9pY2UiLCJkZWxldGVCeUlkIiwibW9kYWxXaW5kb3ciLCJ1cmwiLCJpZF9maWVsZF9uYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJtb2RhbCIsIkVycm9yIiwiZ2V0Q2hlY2tJbWdzIiwicmVzdWx0IiwiZWFjaCIsImluZGV4IiwiY3VycmVudEl0ZW1KUSIsInByb3AiLCJwdXNoIiwiZGVsZXRlQ29uZmlybWF0aW9ucyIsInRhcmdldEJ1dHRvbiIsImF0dHIiLCJyZWxhdGVkVGFyZ2V0IiwiZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyIsImJ1dHRvbiIsImZldGNoRGVsZXRlSW1ncyIsImNoZWNrcyIsIm1haW5IYW5kbGVyIiwiZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCIsImRlbGV0ZUltZyIsInRhYmxlX25hbWUiLCJkZWxldGVWaWRlbyIsImZldGNoRGVsZXRlVmlkZW8iLCJnZXRDaGVja1ZpZGVvIiwiaW5pdF9vd2wiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJtYXJnaW4iLCJuYXYiLCJhdXRvcGxheSIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheVRpbWVvdXQiLCJyZXNwb25zaXZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFH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SmUsQ0FBbkIsQyxDQU1BO0FBRUE7O0FBQ0FvSCxvRkFBUyxDQUNMcEgsQ0FBQyxDQUFDLGlCQUFELENBREksRUFFTEEsQ0FBQyxDQUFDLGFBQUQsQ0FGSSxFQUdMLFVBSEssRUFJTCxnQkFKSyxDQUFULEMsQ0FNQTs7QUFDQW9ILG9GQUFTLENBQ0xwSCxDQUFDLENBQUMsaUJBQUQsQ0FESSxFQUVMQSxDQUFDLENBQUMsYUFBRCxDQUZJLEVBR0wsVUFISyxFQUlMLG1CQUpLLENBQVQsQyxDQU1BOztBQUNBc0gsc0ZBQVcsRyxDQUVYOztBQUNBRyw2RUFBUSxHLENBRVI7O0FBQ0FuRyxtRUFBUSxHLENBRVI7O0FBQ0FMLG1FQUFRLEcsQ0FFUjs7QUFDQWdCLG9FQUFTLEcsQ0FFVDs7QUFDQUcsNkVBQWtCLEcsQ0FFbEI7O0FBQ0FyQyx1RUFBUyxHLENBRVQ7O0FBQ0EwRix1RUFBYSxHIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGRvQXBwcm92ZSA9ICgpID0+IHtcbiAgICAkKCcjYXBwcm92ZV9lbWFpbCcpLmNsaWNrKGFzeW5jICgpID0+IHtcblxuICAgICAgICAvLyBUT0RPINC/0LXRgNC10L3QtdGB0YLQuCDQvdCwIFByb21pc2Ug0Lgg0LTQvtCx0LDQstC40YLRjCDQv9GA0LXQu9C+0LTQtdGAINC/0YDQuCDQvtC20LjQtNCw0L3QuNC4INC+0YLQv9GA0LDQstC60LhcbiAgICAgICAgY29uc3QgYXBwcm92ZUlzV2VsbERvbmUgPSBhd2FpdCAoYXdhaXQgZmV0Y2goJ3NyYy9hdXRoL3NlbmRfY2hlY2tfbWVzc2FnZS5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogJycsIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pKS5qc29uKClcblxuICAgICAgICBpZiAoYXBwcm92ZUlzV2VsbERvbmUpIHtcbiAgICAgICAgICAgICQoJyNhcHByb3ZlX2VtYWlsX2NhcHRpb24nKS5odG1sKCfQndCwINGD0LrQsNC30LDQvdC90YPRjiDQv9C+0YfRgtGDINCx0YvQu9C+INC+0YLQv9GA0LDQu9C10L3QviDQv9C40YHRjNC80L4uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNhcHByb3ZlX2VtYWlsX2NhcHRpb24nKS5odG1sKCfQn9GA0L7QsdC70LXQvNGLINGBINC+0YLQv9GA0LDQstC60L7QuSDQv9C40YHRjNC80LAuXFxcbiAgICAgICAgICAgIFxc0JLQvtC30LzQvtC20L3QviDQv9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQstGLINGD0LrQsNC30LDQu9C4INC90LXQstC10YDQvdGL0Lkg0LDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ysg0Lgg0LzQvtC20LXRgtC1INC40YHQv9GA0LDQstC40YLRjCDRjdGC0L5cXFxuICAgICAgICAgICAgXFzQv9C10YDQtdC50LTRjyDQsiDRgNC10LbQuNC8INGA0LXQtNCw0LrRgtGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPICjQtNC70Y8g0Y3RgtC+0LPQviDQvdGD0LbQvdC+INC60LvQuNC60L3Rg9GC0Ywg0L/QviDQuNC80LXQvdC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjykuXFxcbiAgICAgICAgICAgIFxc0JXRgdC70Lgg0Y3RgtC+INC90LUg0YLQsNC6LCDQsCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8g0L7Rh9C10L3RjCDRhdC+0YfQtdGC0YHRjywg0LzQvtC20LXRgtC1INC/0L7Qt9Cy0L7QvdC40YLRjCDQv9C+INC90L7QvNC10YDRgyArNyA5MjAgNDMxIDAzIDkxXFxcbiAgICAgICAgICAgIFxc0Lgg0Y8g0L/QvtC/0YDQvtCx0YPRjiDRgNC10YjQuNGC0Ywg0LLQsNGI0YMg0L/RgNC+0LHQu9C10LzRgy4nKVxuICAgICAgICB9XG5cbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb0FwcHJvdmUiLCJjb25zdCBGSUVMRFNfU0lHTl9VUCA9IFtcbiAgICAnbG9naW5fc2lnbl91cCcsIFxuICAgICdlbWFpbF9zaWduX3VwJywgXG4gICAgJ3Bhc3N3b3JkX3NpZ25fdXAnLCBcbiAgICAnY29uZmlybXBhc3N3b3JkX3NpZ25fdXAnXG5dXG5cbmNvbnN0IEZJRUxEU19FRElUX1VTRVJTX1NFVFRJTkdTID0gW1xuICAgICdsb2dpbl9lZGl0X3VzZXJfc2V0dGluZ3MnLCBcbiAgICAnZW1haWxfZWRpdF91c2VyX3NldHRpbmdzJywgXG4gICAgJ3Bhc3N3b3JkX2VkaXRfdXNlcl9zZXR0aW5ncycsIFxuICAgICdjb25maXJtcGFzc3dvcmRfZWRpdF91c2VyX3NldHRpbmdzJ1xuXVxuXG5jb25zdCBGSUVMRFNfU0lHTl9JTiA9IFsnbG9naW5fc2lnbl9pbiddXG5cbkZJRUxEU19TSUdOX1VQLmZvckVhY2goaXRlbSA9PiAkKGAjJHtpdGVtfWApLmtleXVwKCgpID0+IGNoZWNrRmllbGRTaW5nVXAoaXRlbSkpKVxuRklFTERTX0VESVRfVVNFUlNfU0VUVElOR1MuZm9yRWFjaChpdGVtID0+ICQoYCMke2l0ZW19YCkua2V5dXAoKCkgPT4gY2hlY2tGaWVsZFNpbmdVcChpdGVtKSkpXG5GSUVMRFNfU0lHTl9JTi5mb3JFYWNoKGl0ZW0gPT4gJChgIyR7aXRlbX1gKS5rZXl1cCgoKSA9PiBjaGVja0ZpZWxkU2luZ0luKGl0ZW0pKSlcblxuZXhwb3J0IGNvbnN0IGRvU2lnblVwID0gKCkgPT4ge1xuICAgICBcbiAgICAkKCcjc2lnbl91cF9zdWJtaXQnKS5jbGljaygoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZmllbGRzSXNWYWxpZCA9IEZJRUxEU19TSUdOX1VQLmV2ZXJ5KGl0ZW0gPT4gZmllbGRJc1ZhbGlkKGl0ZW0pKVxuXG4gICAgICAgIGlmIChmaWVsZHNJc1ZhbGlkKSB7XG4gICAgICAgICAgICAkKCcjc2lnbl91cF9mb3JtJykuc3VibWl0KCkgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZG9TaWduSW4gPSAoKSA9PiB7XG5cbiAgICAkKCcjc2lnbl9pbl9zdWJtaXQnKS5jbGljayhhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbG9naW5GaWVsZCA9ICQoJyNsb2dpbl9zaWduX2luJylcbiAgICAgICAgY29uc3QgbG9naW4gICAgICA9IGxvZ2luRmllbGQudmFsKClcblxuICAgICAgICBpZiAobG9naW4udHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgbWFya1Byb2JsZW0obG9naW5GaWVsZCwgJ2xvZ2luX3NpZ25faW4nLCAn0JvQvtCz0LjQvSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8JylcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGZpZWxkSXNWYWxpZCgnbG9naW5fc2lnbl9pbicpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRGaWVsZCA9ICQoJyNwYXNzd29yZF9zaWduX2luJylcbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZCAgICAgID0gcGFzc3dvcmRGaWVsZC52YWwoKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRJc1ZhbGlkID0gYXdhaXQgKGF3YWl0IGZldGNoKCdzcmMvYXV0aC9jaGVja19wYXNzd29yZC5waHAnLCB7IFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbG9naW4sIHBhc3N3b3JkIH0pLCBcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgICAgICAgICAgfSkpLmpzb24oKVxuXG4gICAgICAgICAgICAgICAgaWYgKHBhc3N3b3JkSXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjc2lnbl9pbl9mb3JtJykuc3VibWl0KCkgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya1Byb2JsZW0ocGFzc3dvcmRGaWVsZCwgJ3Bhc3N3b3JkX3NpZ25faW4nLCAn0J/QsNGA0L7Qu9GMINC90LXQstC10YDQvdGL0LknKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5leHBvcnQgY29uc3QgZG9TaWduT3V0ID0gKCkgPT4ge1xuXG4gICAgJCgnI3NpZ25fb3V0JykuY2xpY2soYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGF3YWl0IGZldGNoKCdzcmMvYXV0aC9zaWduX291dC5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogJycsIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pIFxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuXG4gICAgfSkgIFxuXG59XG5cbmV4cG9ydCBjb25zdCBkb0VkaXRVc2VyU2V0dGluZ3MgPSAoKSA9PiB7XG5cbiAgICAkKCcjZWRpdF91c2VyX3NldHRpbmdzJykuY2xpY2soKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGZpZWxkc0lzVmFsaWQgPSBGSUVMRFNfRURJVF9VU0VSU19TRVRUSU5HUy5zb21lKGl0ZW0gPT4gZmllbGRJc1ZhbGlkKGl0ZW0pKVxuICAgIFxuICAgICAgICBpZiAoZmllbGRzSXNWYWxpZCkge1xuICAgICAgICAgICAgJCgnI2VkaXRfdXNlcl9zZXR0aW5nc19mb3JtJykuc3VibWl0KCkgICBcbiAgICAgICAgfVxuXG4gICAgfSlcblxufVxuXG5jb25zdCBmaWVsZElzVmFsaWQgPSAoZmllbGROYW1lKSA9PiB7XG5cbiAgICBjb25zdCBmaWVsZCAgICAgID0gJChgIyR7ZmllbGROYW1lfWApXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IGZpZWxkLnZhbCgpXG5cbiAgICByZXR1cm4gKGZpZWxkLmhhc0NsYXNzKCdpcy12YWxpZCcpKSAmJiAoZmllbGRWYWx1ZSAhPT0gJycpXG59IFxuXG5jb25zdCBnZXRJbnZhbGlkTWVzc2FnZVNlcnZlciA9IGFzeW5jIChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpID0+IHtcblxuICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYXdhaXQgKGF3YWl0IGZldGNoKCdzcmMvYXV0aC9jaGVja19maWVsZHMucGhwJywgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZpZWxkTmFtZSwgZmllbGRWYWx1ZSB9KSwgXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbnZhbGlkTWVzc2FnZVxuXG59XG5cbmNvbnN0IGdldEludmFsaWRNZXNzYWdlQ2xpZW50ID0gKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgPT4ge1xuXG4gICAgY29uc3QgZmllbGRzX3NpZ25fdXAgPSB7XG4gICAgICAgIHBhc3N3b3JkRmllbGROYW1lOiAncGFzc3dvcmRfc2lnbl91cCcsXG4gICAgICAgIGNvbmZpcm1wYXNzd29yZEZpZWxkTmFtZTogJ2NvbmZpcm1wYXNzd29yZF9zaWduX3VwJ1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkc19lZGl0X3VzZXJfc2V0dGluZ3MgPSB7XG4gICAgICAgIHBhc3N3b3JkRmllbGROYW1lOiAncGFzc3dvcmRfZWRpdF91c2VyX3NldHRpbmdzJyxcbiAgICAgICAgY29uZmlybXBhc3N3b3JkRmllbGROYW1lOiAnY29uZmlybXBhc3N3b3JkX2VkaXRfdXNlcl9zZXR0aW5ncydcbiAgICB9IFxuXG4gICAgc3dpdGNoIChmaWVsZE5hbWUpIHtcbiAgICAgICAgY2FzZSBcImxvZ2luX3NpZ25fdXBcIiA6XG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgY2FzZSBcImVtYWlsX3NpZ25fdXBcIiA6XG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgY2FzZSBcInBhc3N3b3JkX3NpZ25fdXBcIiA6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tQYXNzd29yZChmaWVsZHNfc2lnbl91cClcbiAgICAgICAgY2FzZSBcImNvbmZpcm1wYXNzd29yZF9zaWduX3VwXCIgOlxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrUGFzc3dvcmQoZmllbGRzX3NpZ25fdXApIFxuICAgICAgICBjYXNlIFwibG9naW5fZWRpdF91c2VyX3NldHRpbmdzXCI6XG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgY2FzZSBcImVtYWlsX2VkaXRfdXNlcl9zZXR0aW5nc1wiOlxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIGNhc2UgXCJwYXNzd29yZF9lZGl0X3VzZXJfc2V0dGluZ3NcIjogICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrUGFzc3dvcmQoZmllbGRzX2VkaXRfdXNlcl9zZXR0aW5ncylcbiAgICAgICAgY2FzZSBcImNvbmZpcm1wYXNzd29yZF9lZGl0X3VzZXJfc2V0dGluZ3NcIjpcbiAgICAgICAgICAgIHJldHVybiBjaGVja1Bhc3N3b3JkKGZpZWxkc19lZGl0X3VzZXJfc2V0dGluZ3MpXG5cbiAgICB9XG5cbn1cblxuY29uc3QgbWFya1Byb2JsZW0gPSAoZmllbGQsIGZpZWxkTmFtZSwgbWVzc2FnZXMpID0+IHtcblxuICAgIGNvbnN0IGZpZWxkR3JvdXAgICAgID0gJChgI2dyb3VwXyR7ZmllbGROYW1lfWApXG4gICAgY29uc3QgaWRJbnZhbGlkRmllbGQgPSBgaW52YWxpZCR7ZmllbGROYW1lfWBcblxuICAgICQoYCMke2lkSW52YWxpZEZpZWxkfWApLnJlbW92ZSgpXG5cbiAgICBpZiAobWVzc2FnZXMgPT09ICcnKSB7XG4gICAgICAgIGZpZWxkLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykuYWRkQ2xhc3MoJ2lzLXZhbGlkJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG4gICAgICAgIGlmICghJChcImRpdlwiKS5pcyhgIyR7aWRJbnZhbGlkRmllbGR9YCkpIHtcbiAgICAgICAgICAgIGZpZWxkR3JvdXAuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGA8ZGl2IGlkPVwiJHtpZEludmFsaWRGaWVsZH1cIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgJHttZXNzYWdlc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICB9XG4gICAgfSBcblxufVxuXG5jb25zdCBjaGVja0ZpZWxkU2luZ1VwID0gYXN5bmMgKGZpZWxkTmFtZSkgPT4ge1xuXG4gICAgY29uc3QgZmllbGQgICAgICA9ICQoYCMke2ZpZWxkTmFtZX1gKVxuICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBmaWVsZC52YWwoKVxuXG4gICAgaWYgKGZpZWxkVmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGZpZWxkLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpbnZhbGlkTWVzc2FnZUNsaWVudCA9IGdldEludmFsaWRNZXNzYWdlQ2xpZW50KGZpZWxkTmFtZSwgZmllbGRWYWx1ZSlcblxuICAgICAgICBtYXJrUHJvYmxlbShmaWVsZCwgZmllbGROYW1lLCBpbnZhbGlkTWVzc2FnZUNsaWVudClcbiAgICAgICAgXG4gICAgICAgIGlmIChpbnZhbGlkTWVzc2FnZUNsaWVudCA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlU2VydmVyID0gYXdhaXQgZ2V0SW52YWxpZE1lc3NhZ2VTZXJ2ZXIoZmllbGROYW1lLCBmaWVsZFZhbHVlKVxuICAgICAgICAgICAgbWFya1Byb2JsZW0oZmllbGQsIGZpZWxkTmFtZSwgaW52YWxpZE1lc3NhZ2VTZXJ2ZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY29uc3QgY2hlY2tGaWVsZFNpbmdJbiA9IGFzeW5jIChmaWVsZE5hbWUpID0+IHtcblxuICAgIGNvbnN0IGZpZWxkICAgICAgPSAkKGAjJHtmaWVsZE5hbWV9YClcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gZmllbGQudmFsKClcblxuICAgIGlmIChmaWVsZFZhbHVlID09PSAnJykge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2VTZXJ2ZXIgPSBhd2FpdCBnZXRJbnZhbGlkTWVzc2FnZVNlcnZlcihmaWVsZE5hbWUsIGZpZWxkVmFsdWUpXG4gICAgICAgIG1hcmtQcm9ibGVtKGZpZWxkLCBmaWVsZE5hbWUsIGludmFsaWRNZXNzYWdlU2VydmVyKVxuICAgIH1cblxufVxuXG5jb25zdCBjaGVja1Bhc3N3b3JkID0gKHsgcGFzc3dvcmRGaWVsZE5hbWUsIGNvbmZpcm1wYXNzd29yZEZpZWxkTmFtZSB9KSA9PiB7XG5cbiAgICBjb25zdCBwYXNzd29yZEZpZWxkICAgICAgICA9ICQoYCMke3Bhc3N3b3JkRmllbGROYW1lfWApXG4gICAgY29uc3QgY29uZmlybXBhc3N3b3JkRmllbGQgPSAkKGAjJHtjb25maXJtcGFzc3dvcmRGaWVsZE5hbWV9YClcblxuICAgIGxldCBlbnRyb3BpemVyID0gbmV3IEVudHJvcGl6ZXIoKTtcblxuICAgIHBhc3N3b3JkRmllbGQucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxuICAgICQoJ2RpdiNpbnZhbGlkcGFzc3dvcmRfc2lnbl91cCcpLnJlbW92ZSgpXG5cbiAgICAvLyBUT0RPIC0g0J/QvtCy0YvRgdC40YLRjCDRgdC70L7QttC90L7RgdGC0Ywg0L/QsNGA0L7Qu9GPXG4gICAgaWYgKGVudHJvcGl6ZXIuZXZhbHVhdGUocGFzc3dvcmRGaWVsZC52YWwoKSkgPCAxMCkge1xuICAgICAgICByZXR1cm4gJ9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCDQv9C+0YHQu9C+0LbQvdC10LUnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhc3N3b3JkRmllbGQudmFsKCkgIT09IGNvbmZpcm1wYXNzd29yZEZpZWxkLnZhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ9Cf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RgicgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiIsIkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzID0gYXN5bmMgKHRhYmxlTmFtZSwgcHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBwYXJhbXMgPSBbXSkgPT4ge1xuXG4gICAgY29uc3QgYXBwbHlfaW5pdCA9IGFzeW5jIGl0ZW1zID0+IFxuICAgICAgICBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgY3VycmVudC5pZCkpXG5cbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKHRhYmxlTmFtZSwgcGFyYW1zKSlcblxufVxuXG5leHBvcnQgY29uc3QgZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQpID0+IFxuICAgIGF3YWl0IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsICdjb21tb24nKVxuXG5jb25zdCBpbml0T25lRHJvcHpvbmUgPSBhc3luYyAocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKSA9PiB7XG5cbiAgICBsZXQgaWREcm9wem9uZSA9IGAjJHtwcmVmaXhEcm9wem9uZX0tJHt2YWx1ZVRhcmdldEZlaWxkfWBcblxuICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQodGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9KVxuXG59XG5cbmNvbnN0IGZldGNoSW1nID0gYXN5bmMgKHRhYmxlTmFtZSwgcGFyYW1zID0gW10pID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9nZXRfZXhoaWJpdGlvbl9waG90by5waHAnO1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgdGFibGVOYW1lLCBwYXJhbXMgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgKGF3YWl0IGZldGNoKGN1cnJlbnRfdXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59IiwiY29uc3QgZ2V0TGFuZ0Nob2ljZSA9ICgpID0+IHtcbiAgICAkKCcjbGFuZ19ydXMnKS5jbGljaygoKSA9PiB7XG4gICAgICAgICQoJyNsYW5nX2N1cnJlbnQnKS5odG1sKCc8aW1nIHNyYz1cImltYWdlcy9sYW5nL3J1c2ZsYWcxLnBuZ1wiPicpXG4gICAgfSlcbiAgICAkKCcjbGFuZ19lbmcnKS5jbGljaygoKSA9PiB7XG4gICAgICAgICQoJyNsYW5nX2N1cnJlbnQnKS5odG1sKCc8aW1nIHNyYz1cImltYWdlcy9sYW5nL2FtZmxhZzEucG5nXCI+JylcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRMYW5nQ2hvaWNlIiwiY29uc3QgZGVsZXRlQnlJZCA9IGFzeW5jIChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICBsZXQgaWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG5cbiAgICB0cnkge1xuXG4gICAgICAgIGF3YWl0IGZldGNoKHVybCwgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkIH0pLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuXG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LvRg9GH0LjRgtGMINC00LDQvdC90YvQtSDQvtGCINGB0LXRgNCy0LXRgNCwJylcbiAgICB9XG59XG5cbmNvbnN0IGdldENoZWNrSW1ncyA9IGFzeW5jIChpZCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0WyR7aWRfZmllbGRfbmFtZX0gPSAke2lkfV1gKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1KUSA9ICQoaXRlbSlcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtSlEucHJvcChcImNoZWNrZWRcIikpXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50SXRlbUpRLnZhbCgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0O1xuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zID0gKG1vZGFsV2luZG93LCB0YXJnZXRCdXR0b24sIHVybCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuXG4gICAgdGFyZ2V0QnV0dG9uLmNsaWNrKCgpID0+IGRlbGV0ZUJ5SWQobW9kYWxXaW5kb3csIHVybCwgaWRfZmllbGRfbmFtZSkpXG5cbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLFxuICAgICAgICBldmVudCA9PiB0YXJnZXRCdXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMgPSAoKSA9PiB7XG5cbiAgICBsZXQgbW9kYWxXaW5kb3cgICA9ICQoJyNtb2RhbERlbGV0ZVN0YXRlJylcbiAgICBsZXQgYnV0dG9uICAgICAgICA9ICQoJyNkZWxldGVfc3RhdGUnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ3N0YXRlX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJy9JeHRsYW4tcGhwL3NyYy9EQi9raXR0eV9DUlVEL3N0YXRlX0NSVUQvc3RhdGVfZGVsZXRlX2dyb3VwLnBocCdcblxuICAgIGNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MpID0+IHtcbiAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoJ3RydWUnLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlUGVyaW9kJylcbiAgICBsZXQgYnV0dG9uICAgICAgICA9ICQoJyNkZWxldGVfcGVyaW9kJylcbiAgICBsZXQgaWRfZmllbGRfbmFtZSA9ICdicm9vZF9pZCdcbiAgICBsZXQgdXJsICAgICAgICAgICA9ICcvSXh0bGFuLXBocC9zcmMvREIva2l0dHlfQ1JVRC9wZXJpb2RfQ1JVRC9wZXJpb2RfZGVsZXRlX2dyb3VwLnBocCdcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcywgaWQpID0+IHtcbiAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MsIGlkIH1cbiAgICAgICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgaWQpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSlcblxufSIsImxldCB1cmwgPScvSXh0bGFuLXBocC9zcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvaW1nX0NSVUQvaW1nX2RlbGV0ZV9ncm91cC5waHAnXG5cbmNvbnN0IGRlbGV0ZUltZyA9IChtb2RhbFdpbmRvdywgYnV0dG9uLCBpZF9maWVsZF9uYW1lLCB0YWJsZV9uYW1lKSA9PiB7XG5cbiAgICAvLyBEUlkgLSDQv9GA0L7QsdGA0L7RgSDRgSDQutC90L7Qv9C60Lgg0LfQsNC/0YPRgdC60LAg0LzQvtC00LDQu9C60Lgg0L3QsCDQutC90L7Qv9C60YMg0YPQtNCw0LvQtdC90LjRjyDQstGL0L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiBidXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgaWQgICAgID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKGlkLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MsIHVybCwgdGFibGVfbmFtZSlcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKSBcblxufVxuXG4vLyBEUlkgLSDRgdC+0L7RgtC90L7RgdC40YLRgdGPINGBINGD0LTQsNC70LXQvdC40LXQvCDQv9C10YDQuNC+0LTQsFxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7IFxuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0WyR7aWRfZmllbGRfbmFtZX0gPSAke2lkfV1gKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1KUSA9ICQoaXRlbSlcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtSlEucHJvcChcImNoZWNrZWRcIikpXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50SXRlbUpRLnZhbCgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG5cbn1cblxuY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MsIHRhYmxlX25hbWUgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUltZyIsImNvbnN0IGRlbGV0ZVZpZGVvID0gKCkgPT4ge1xuICAgICQoJyNkZWxldGVfdmlkZW8nKS5jbGljaygoKSA9PiBtYWluSGFuZGxlcigpKSBcbn1cblxuY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBhd2FpdCBmZXRjaERlbGV0ZVZpZGVvKGF3YWl0IGdldENoZWNrVmlkZW8oKSkgICBcbiAgICBhd2FpdCAoYXN5bmMgKCkgPT4gJCgnI21vZGFsRGVsZXRlVmlkZW8nKS5tb2RhbCgnaGlkZScpKSgpXG5cbn1cblxuY29uc3QgZ2V0Q2hlY2tWaWRlbyA9IGFzeW5jICgpID0+IHtcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFt0aGlzX3ZpZGVvID0gdHJ1ZV1gKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1KUSA9ICQoaXRlbSlcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtSlEucHJvcChcImNoZWNrZWRcIikpXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50SXRlbUpRLnZhbCgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG5cbn1cblxuY29uc3QgZmV0Y2hEZWxldGVWaWRlbyA9IGFzeW5jIChjaGVja3MpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnL0l4dGxhbi1waHAvc3JjL0RCL3ZpZGVvX0NSVUQvdmlkZW9fZGVsZXRlX2dyb3VwLnBocCdcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcyB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGZldGNoKGN1cnJlbnRfdXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVWaWRlbyIsImNvbnN0IGluaXRfb3dsID0gKCkgPT4ge1xuICAgICQoJy5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBzbWFydFNwZWVkOiAzMDAwLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0X293bCIsImltcG9ydCB7IGRyb3B6b25lSGFuZGxlcnMgfSBmcm9tICcuL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcydcbmltcG9ydCB7IGRlbGV0ZUNvbmZpcm1hdGlvbnMgfSBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGUnXG5pbXBvcnQgZGVsZXRlSW1nIGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcnXG5pbXBvcnQgZGVsZXRlVmlkZW8gZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX3ZpZGVvJ1xuaW1wb3J0IGluaXRfb3dsIGZyb20gJy4vZnJvbnQvdXRpbHMvaW5pdF9vd2xfY2FydXNlbCdcbmltcG9ydCB7IGRvU2lnbkluLCBkb1NpZ25VcCwgZG9TaWduT3V0LCBkb0VkaXRVc2VyU2V0dGluZ3MgfSBmcm9tICcuL2Zyb250L2F1dGgvZG9BdXRoJ1xuaW1wb3J0IGRvQXBwcm92ZSBmcm9tICcuL2Zyb250L2F1dGgvYXBwcm92ZVBvc3QnXG5pbXBvcnQgZ2V0TGFuZ0Nob2ljZSBmcm9tICcuL2Zyb250L2xvY2FsL2Nob2ljZUxhbmcnXG5cbmRyb3B6b25lSGFuZGxlcnMoJ2V4aGliaXRpb25zJywgJ215LWRyb3B6b25lJywgJ2V4aGliaXRpb25faWQnKVxuXG5kcm9wem9uZUhhbmRsZXJzKCdraW5kb2Zkb2N1bWVudHMnLCAnbXktZHJvcHpvbmUta2luZC1vZi1kb2N1bWVudHMnLCAna2luZG9mZG9jdW1lbnRzX2lkJylcblxuLy/Qo9C00LDQu9C10L3QuNC1INC90L7QstC+0YHRgtC10LkgRFJZIC0g0YPQtNCw0LvQtdC90LjQtSDQvdC+0LLQvtGB0YLQtdC5INGA0LDRgdGI0LDRgNC40YLRjCDQvdCwINCy0LXRgdGMINC/0YDQvtC10LrRglxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVOZXdzJyksIFxuICAgICQoJyNkZWxldGVfbmV3cycpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL25ld3NfQ1JVRC9uZXdzX2RlbGV0ZS5waHAnLFxuICAgICduZXdzX2luZGV4JylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQstGL0YHRgtCw0LLQvtC6XG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUV4aGliaXRpb24nKSwgXG4gICAgJCgnI2RlbGV0ZV9leGhpYml0aW9uJyksIFxuICAgICcvSXh0bGFuLXBocC9zcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2V4aGliaXRpb25fZGVsZXRlLnBocCcsXG4gICAgJ2V4aGliaXRpb25faWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INGC0LjQv9C+0LIg0LTQvtC60YPQvNC10L3RgtC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlS2luZE9mRG9jdW1lbnQnKSwgXG4gICAgJCgnI2RlbGV0ZV9raW5kX29mX2RvY3VtZW50JyksIFxuICAgICcvSXh0bGFuLXBocC9zcmMvREIvZG9jdW1lbnRfQ1JVRC9raW5kX29mX2RvY3VtZW50X0NSVUQva2luZF9vZl9kb2N1bWVudF9kZWxldGUucGhwJyxcbiAgICAna2luZF9vZl9kb2N1bWVudF9pZCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDRgSDQstGL0YHRgtCw0LLQvtC6XG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDQutC+0YjQtdC6XG5kZWxldGVJbWcoXG4gICAgJCgnI21vZGFsRGVsZXRlSW1nJyksXG4gICAgJCgnI2RlbGV0ZV9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJyxcbiAgICAnaW1nZXhoaWJpdGlvbnMnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0LTQvtC60YPQvNC10L3RgtC+0LJcbmRlbGV0ZUltZyhcbiAgICAkKCcjbW9kYWxEZWxldGVJbWcnKSxcbiAgICAkKCcjZGVsZXRlX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLFxuICAgICdpbWdraW5kb2Zkb2N1bWVudCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LLQuNC00LXQvlxuZGVsZXRlVmlkZW8oKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LLQuNC90L7QuSDQutCw0YDRg9GB0LXQu9C4XG5pbml0X293bCgpXG5cbi8vINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG5kb1NpZ25JbigpXG5cbi8vINCS0YXQvtC0INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xuZG9TaWduVXAoKVxuXG4vLyDQktGL0YXQvtC0INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xuZG9TaWduT3V0KClcblxuLy8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQv9Cw0YDQsNC80LXRgtGA0L7QsiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbmRvRWRpdFVzZXJTZXR0aW5ncygpXG5cbi8vINCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRi1xuZG9BcHByb3ZlKClcblxuLy8g0JLRi9Cx0L7RgCDRj9C30YvQutCwXG5nZXRMYW5nQ2hvaWNlKCkiXSwic291cmNlUm9vdCI6IiJ9