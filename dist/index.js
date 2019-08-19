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

var FIELDS = ['login', 'email', 'password', 'confirmpassword'];
FIELDS.forEach(function (item) {
  return $("#".concat(item)).keyup(function () {
    return checkField(item);
  });
});
var doSignUp = function doSignUp() {
  $('#sign_up_submit').click(function () {
    var fieldsIsValid = FIELDS.every(function (item) {
      return fieldIsValid(item);
    });

    if (fieldsIsValid) {
      $('#sign_up_form').submit();
    }
  });
};
var doSignIn = function doSignIn() {
  $('#sign_in_submit').click(function () {
    //if (fieldsIsValid) {
    $('#sign_in_form').submit(); //}
  });
  /* $('#sign_in_submit').click(() => {
       const fieldsIsValid = FIELDS.every(item => fieldIsValid(item))
       if (fieldsIsValid) {
          $('#sign_in_form').submit()   
      }
      
  }) */
};
var doSignOut = function doSignOut() {
  $('#sign_out').click(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
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
            return _context.stop();
        }
      }
    }, _callee);
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

  return function getInvalidMessageServer(_x, _x2) {
    return _ref2.apply(this, arguments);
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
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(fieldName) {
    var field, fieldValue, invalidMessageClient, invalidMessageServer;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            field = $("#".concat(fieldName));
            fieldValue = field.val();

            if (!(fieldValue === '')) {
              _context3.next = 6;
              break;
            }

            field.removeClass('is-invalid').removeClass('is-valid');
            _context3.next = 13;
            break;

          case 6:
            invalidMessageClient = getInvalidMessageClient(fieldName, fieldValue);
            markProblem(field, fieldName, invalidMessageClient);

            if (!(invalidMessageClient === '')) {
              _context3.next = 13;
              break;
            }

            _context3.next = 11;
            return getInvalidMessageServer(fieldName, fieldValue);

          case 11:
            invalidMessageServer = _context3.sent;
            markProblem(field, fieldName, invalidMessageServer);

          case 13:
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

var checkPassword = function checkPassword() {
  var passwordField = $('#password');
  var confirmpasswordField = $('#confirmpassword');
  var entropizer = new Entropizer();
  passwordField.removeClass('is-invalid').addClass('is-valid');
  $('div#invalidpassword').remove();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2F1dGgvZG9BdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2xvY2FsL2Nob2ljZUxhbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX3ZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGSUVMRFMiLCJmb3JFYWNoIiwiaXRlbSIsIiQiLCJrZXl1cCIsImNoZWNrRmllbGQiLCJkb1NpZ25VcCIsImNsaWNrIiwiZmllbGRzSXNWYWxpZCIsImV2ZXJ5IiwiZmllbGRJc1ZhbGlkIiwic3VibWl0IiwiZG9TaWduSW4iLCJkb1NpZ25PdXQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJmaWVsZE5hbWUiLCJmaWVsZCIsImZpZWxkVmFsdWUiLCJ2YWwiLCJoYXNDbGFzcyIsImdldEludmFsaWRNZXNzYWdlU2VydmVyIiwidXJsIiwiY3VycmVudF9pbmYiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImludmFsaWRNZXNzYWdlIiwiZ2V0SW52YWxpZE1lc3NhZ2VDbGllbnQiLCJjaGVja1Bhc3N3b3JkIiwibWFya1Byb2JsZW0iLCJtZXNzYWdlcyIsImZpZWxkR3JvdXAiLCJpZEludmFsaWRGaWVsZCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmUiLCJpcyIsImFwcGVuZCIsImludmFsaWRNZXNzYWdlQ2xpZW50IiwiaW52YWxpZE1lc3NhZ2VTZXJ2ZXIiLCJwYXNzd29yZEZpZWxkIiwiY29uZmlybXBhc3N3b3JkRmllbGQiLCJlbnRyb3BpemVyIiwiRW50cm9waXplciIsImV2YWx1YXRlIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImN1cnJlbnQiLCJpbml0T25lRHJvcHpvbmUiLCJpZCIsImZldGNoSW1nIiwiZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiIsInZhbHVlVGFyZ2V0RmVpbGQiLCJpZERyb3B6b25lIiwiYWNjZXB0ZWRGaWxlcyIsImluaXQiLCJvbiIsImZpbGUiLCJ4aHIiLCJmb3JtRGF0YSIsImN1cnJlbnRfdXJsIiwiaW1hZ2VzIiwiZ2V0TGFuZ0Nob2ljZSIsImh0bWwiLCJkZWxldGVCeUlkIiwibW9kYWxXaW5kb3ciLCJpZF9maWVsZF9uYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJtb2RhbCIsIkVycm9yIiwiZ2V0Q2hlY2tJbWdzIiwicmVzdWx0IiwiZWFjaCIsImluZGV4IiwiY3VycmVudEl0ZW1KUSIsInByb3AiLCJwdXNoIiwiZGVsZXRlQ29uZmlybWF0aW9ucyIsInRhcmdldEJ1dHRvbiIsImF0dHIiLCJyZWxhdGVkVGFyZ2V0IiwiZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyIsImJ1dHRvbiIsImZldGNoRGVsZXRlSW1ncyIsImNoZWNrcyIsIm1haW5IYW5kbGVyIiwiZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCIsImRlbGV0ZUltZyIsInRhYmxlX25hbWUiLCJkZWxldGVWaWRlbyIsImZldGNoRGVsZXRlVmlkZW8iLCJnZXRDaGVja1ZpZGVvIiwiaW5pdF9vd2wiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJtYXJnaW4iLCJuYXYiLCJhdXRvcGxheSIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheVRpbWVvdXQiLCJyZXNwb25zaXZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsTUFBTSxHQUFHLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsVUFBbkIsRUFBK0IsaUJBQS9CLENBQWY7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLENBQWUsVUFBQUMsSUFBSTtBQUFBLFNBQUlDLENBQUMsWUFBS0QsSUFBTCxFQUFELENBQWNFLEtBQWQsQ0FBb0I7QUFBQSxXQUFNQyxVQUFVLENBQUNILElBQUQsQ0FBaEI7QUFBQSxHQUFwQixDQUFKO0FBQUEsQ0FBbkI7QUFFTyxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBRTFCSCxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkksS0FBckIsQ0FBMkIsWUFB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QXVDLDRGQUFtQixDQUNmeEYsQ0FBQyxDQUFDLGtCQUFELENBRGMsRUFFZkEsQ0FBQyxDQUFDLGNBQUQsQ0FGYyxFQUdmLDhDQUhlLEVBSWYsWUFKZSxDQUFuQixDLENBTUE7O0FBQ0F3Riw0RkFBbUIsQ0FDZnhGLENBQUMsQ0FBQyx3QkFBRCxDQURjLEVBRWZBLENBQUMsQ0FBQyxvQkFBRCxDQUZjLEVBR2YsNEVBSGUsRUFJZixlQUplLENBQW5CLEMsQ0FNQTs7QUFDQXdGLDRGQUFtQixDQUNmeEYsQ0FBQyxDQUFDLDRCQUFELENBRGMsRUFFZkEsQ0FBQyxDQUFDLDBCQUFELENBRmMsRUFHZixvRkFIZSxFQUlmLHFCQUplLENBQW5CLEMsQ0FNQTtBQUVBOztBQUNBa0csb0ZBQVMsQ0FDTGxHLENBQUMsQ0FBQyxpQkFBRCxDQURJLEVBRUxBLENBQUMsQ0FBQyxhQUFELENBRkksRUFHTCxVQUhLLEVBSUwsZ0JBSkssQ0FBVCxDLENBTUE7O0FBQ0FrRyxvRkFBUyxDQUNMbEcsQ0FBQyxDQUFDLGlCQUFELENBREksRUFFTEEsQ0FBQyxDQUFDLGFBQUQsQ0FGSSxFQUdMLFVBSEssRUFJTCxtQkFKSyxDQUFULEMsQ0FNQTs7QUFDQW9HLHNGQUFXLEcsQ0FFWDs7QUFDQUcsNkVBQVEsRyxDQUVSOztBQUNBOUYsbUVBQVEsRyxDQUVSOztBQUNBTixtRUFBUSxHLENBRVI7O0FBQ0FPLG9FQUFTLEcsQ0FFVDs7QUFDQTZELHVFQUFhLEciLCJmaWxlIjoiLi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgRklFTERTID0gWydsb2dpbicsICdlbWFpbCcsICdwYXNzd29yZCcsICdjb25maXJtcGFzc3dvcmQnXVxuXG5GSUVMRFMuZm9yRWFjaChpdGVtID0+ICQoYCMke2l0ZW19YCkua2V5dXAoKCkgPT4gY2hlY2tGaWVsZChpdGVtKSkpXG5cbmV4cG9ydCBjb25zdCBkb1NpZ25VcCA9ICgpID0+IHtcbiAgICAgXG4gICAgJCgnI3NpZ25fdXBfc3VibWl0JykuY2xpY2soKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGZpZWxkc0lzVmFsaWQgPSBGSUVMRFMuZXZlcnkoaXRlbSA9PiBmaWVsZElzVmFsaWQoaXRlbSkpXG5cbiAgICAgICAgaWYgKGZpZWxkc0lzVmFsaWQpIHtcbiAgICAgICAgICAgICQoJyNzaWduX3VwX2Zvcm0nKS5zdWJtaXQoKSAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkb1NpZ25JbiA9ICgpID0+IHtcblxuICAgICQoJyNzaWduX2luX3N1Ym1pdCcpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICAvL2lmIChmaWVsZHNJc1ZhbGlkKSB7XG4gICAgICAgICAgICAkKCcjc2lnbl9pbl9mb3JtJykuc3VibWl0KCkgICBcbiAgICAgICAgLy99XG5cbiAgICB9KVxuXG4gICAgLyogJCgnI3NpZ25faW5fc3VibWl0JykuY2xpY2soKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGZpZWxkc0lzVmFsaWQgPSBGSUVMRFMuZXZlcnkoaXRlbSA9PiBmaWVsZElzVmFsaWQoaXRlbSkpXG5cbiAgICAgICAgaWYgKGZpZWxkc0lzVmFsaWQpIHtcbiAgICAgICAgICAgICQoJyNzaWduX2luX2Zvcm0nKS5zdWJtaXQoKSAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pICovXG4gICAgXG59XG5cbmV4cG9ydCBjb25zdCBkb1NpZ25PdXQgPSAoKSA9PiB7XG4gICAgJCgnI3NpZ25fb3V0JykuY2xpY2soYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGF3YWl0IGZldGNoKCdzcmMvYXV0aC9zaWduX291dC5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogJycsIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pIFxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuXG4gICAgfSkgIFxufVxuXG5jb25zdCBmaWVsZElzVmFsaWQgPSAoZmllbGROYW1lKSA9PiB7XG5cbiAgICBjb25zdCBmaWVsZCAgICAgID0gJChgIyR7ZmllbGROYW1lfWApXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IGZpZWxkLnZhbCgpXG5cbiAgICByZXR1cm4gKGZpZWxkLmhhc0NsYXNzKCdpcy12YWxpZCcpKSAmJiAoZmllbGRWYWx1ZSAhPT0gJycpXG59IFxuXG5jb25zdCBnZXRJbnZhbGlkTWVzc2FnZVNlcnZlciA9IGFzeW5jIChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpID0+IHtcblxuICAgIGNvbnN0IHVybCA9ICdzcmMvYXV0aC9jaGVjay5waHAnXG4gICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgY29uc3QgY3VycmVudF9pbmYgPSB7IGZpZWxkTmFtZSwgZmllbGRWYWx1ZSB9XG5cbiAgICBsZXQgaW52YWxpZE1lc3NhZ2UgPSBhd2FpdCAoYXdhaXQgZmV0Y2godXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuICAgIFxuICAgIHJldHVybiBpbnZhbGlkTWVzc2FnZVxuXG59XG5cbmNvbnN0IGdldEludmFsaWRNZXNzYWdlQ2xpZW50ID0gKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgPT4ge1xuXG4gICAgc3dpdGNoIChmaWVsZE5hbWUpIHtcbiAgICAgICAgY2FzZSBcImxvZ2luXCIgOlxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIGNhc2UgXCJlbWFpbFwiIDpcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICBjYXNlIFwicGFzc3dvcmRcIiA6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tQYXNzd29yZCgpXG4gICAgICAgIGNhc2UgXCJjb25maXJtcGFzc3dvcmRcIiA6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tQYXNzd29yZCgpIFxuICAgIH1cblxufVxuXG5jb25zdCBtYXJrUHJvYmxlbSA9IChmaWVsZCwgZmllbGROYW1lLCBtZXNzYWdlcykgPT4ge1xuXG4gICAgY29uc3QgZmllbGRHcm91cCAgICAgPSAkKGAjZ3JvdXBfJHtmaWVsZE5hbWV9YClcbiAgICBjb25zdCBpZEludmFsaWRGaWVsZCA9IGBpbnZhbGlkJHtmaWVsZE5hbWV9YFxuXG4gICAgaWYgKG1lc3NhZ2VzID09PSAnJykge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG4gICAgICAgICQoYCMke2lkSW52YWxpZEZpZWxkfWApLnJlbW92ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgICBpZiAoISQoXCJkaXZcIikuaXMoYCMke2lkSW52YWxpZEZpZWxkfWApKSB7XG4gICAgICAgICAgICBmaWVsZEdyb3VwLmFwcGVuZChcbiAgICAgICAgICAgICAgICBgPGRpdiBpZD1cIiR7aWRJbnZhbGlkRmllbGR9XCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgPC9kaXY+YClcbiAgICAgICAgfVxuICAgIH0gXG5cbn1cblxuY29uc3QgY2hlY2tGaWVsZCA9IGFzeW5jIChmaWVsZE5hbWUpID0+IHtcblxuICAgIGNvbnN0IGZpZWxkICAgICAgPSAkKGAjJHtmaWVsZE5hbWV9YClcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gZmllbGQudmFsKClcblxuICAgIGlmIChmaWVsZFZhbHVlID09PSAnJykge1xuICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2VDbGllbnQgPSBnZXRJbnZhbGlkTWVzc2FnZUNsaWVudChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpIFxuICAgICAgICBtYXJrUHJvYmxlbShmaWVsZCwgZmllbGROYW1lLCBpbnZhbGlkTWVzc2FnZUNsaWVudClcbiAgICAgICAgXG4gICAgICAgIGlmIChpbnZhbGlkTWVzc2FnZUNsaWVudCA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlU2VydmVyID0gYXdhaXQgZ2V0SW52YWxpZE1lc3NhZ2VTZXJ2ZXIoZmllbGROYW1lLCBmaWVsZFZhbHVlKVxuICAgICAgICAgICAgbWFya1Byb2JsZW0oZmllbGQsIGZpZWxkTmFtZSwgaW52YWxpZE1lc3NhZ2VTZXJ2ZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY29uc3QgY2hlY2tQYXNzd29yZCA9ICgpID0+IHtcblxuICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgICAgICAgID0gJCgnI3Bhc3N3b3JkJylcbiAgICBjb25zdCBjb25maXJtcGFzc3dvcmRGaWVsZCA9ICQoJyNjb25maXJtcGFzc3dvcmQnKVxuXG4gICAgbGV0IGVudHJvcGl6ZXIgPSBuZXcgRW50cm9waXplcigpO1xuXG4gICAgcGFzc3dvcmRGaWVsZC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG4gICAgJCgnZGl2I2ludmFsaWRwYXNzd29yZCcpLnJlbW92ZSgpXG5cbiAgICBpZiAoZW50cm9waXplci5ldmFsdWF0ZShwYXNzd29yZEZpZWxkLnZhbCgpKSA8IDEwKSB7XG4gICAgICAgIHJldHVybiAn0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMINC/0L7RgdC70L7QttC90LXQtSdcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFzc3dvcmRGaWVsZC52YWwoKSAhPT0gY29uZmlybXBhc3N3b3JkRmllbGQudmFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAn0J/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCJyAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIiwiRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAodGFibGVOYW1lLCBwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHBhcmFtcyA9IFtdKSA9PiB7XG5cbiAgICBjb25zdCBhcHBseV9pbml0ID0gYXN5bmMgaXRlbXMgPT4gXG4gICAgICAgIGl0ZW1zLmZvckVhY2goY3VycmVudCA9PiBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBjdXJyZW50LmlkKSlcblxuICAgIGF3YWl0IGFwcGx5X2luaXQoYXdhaXQgZmV0Y2hJbWcodGFibGVOYW1lLCBwYXJhbXMpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCkgPT4gXG4gICAgYXdhaXQgaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgJ2NvbW1vbicpXG5cbmNvbnN0IGluaXRPbmVEcm9wem9uZSA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpID0+IHtcblxuICAgIGxldCBpZERyb3B6b25lID0gYCMke3ByZWZpeERyb3B6b25lfS0ke3ZhbHVlVGFyZ2V0RmVpbGR9YFxuXG4gICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm9uKFwic2VuZGluZ1wiLCAoZmlsZSwgeGhyLCBmb3JtRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCh0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH0pXG5cbn1cblxuY29uc3QgZmV0Y2hJbWcgPSBhc3luYyAodGFibGVOYW1lLCBwYXJhbXMgPSBbXSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2dldF9leGhpYml0aW9uX3Bob3RvLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyB0YWJsZU5hbWUsIHBhcmFtcyB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyBcbiAgICB9KSkuanNvbigpXG5cbiAgICByZXR1cm4gaW1hZ2VzXG5cbn0iLCJjb25zdCBnZXRMYW5nQ2hvaWNlID0gKCkgPT4ge1xuICAgICQoJyNsYW5nX3J1cycpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgJCgnI2xhbmdfY3VycmVudCcpLmh0bWwoJzxpbWcgc3JjPVwiaW1hZ2VzL2xhbmcvcnVzZmxhZzEucG5nXCI+JylcbiAgICB9KVxuICAgICQoJyNsYW5nX2VuZycpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgJCgnI2xhbmdfY3VycmVudCcpLmh0bWwoJzxpbWcgc3JjPVwiaW1hZ2VzL2xhbmcvYW1mbGFnMS5wbmdcIj4nKVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldExhbmdDaG9pY2UiLCJjb25zdCBkZWxldGVCeUlkID0gYXN5bmMgKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcblxuICAgIHRyeSB7XG5cbiAgICAgICAgYXdhaXQgZmV0Y2godXJsLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG5cbiAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7Qu9GD0YfQuNGC0Ywg0LTQsNC90L3Ri9C1INC+0YIg0YHQtdGA0LLQtdGA0LAnKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHQ7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnMgPSAobW9kYWxXaW5kb3csIHRhcmdldEJ1dHRvbiwgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICB0YXJnZXRCdXR0b24uY2xpY2soKCkgPT4gZGVsZXRlQnlJZChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSlcblxuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsXG4gICAgICAgIGV2ZW50ID0+IHRhcmdldEJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlU3RhdGUnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9zdGF0ZScpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnc3RhdGVfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnL0l4dGxhbi1waHAvc3JjL0RCL2tpdHR5X0NSVUQvc3RhdGVfQ1JVRC9zdGF0ZV9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcykgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcyB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncygndHJ1ZScsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcylcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVQZXJpb2QnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9wZXJpb2QnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ2Jyb29kX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJy9JeHRsYW4tcGhwL3NyYy9EQi9raXR0eV9DUlVEL3BlcmlvZF9DUlVEL3BlcmlvZF9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCBpZCkgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgaWQgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCBpZClcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59IiwibGV0IHVybCA9Jy9JeHRsYW4tcGhwL3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9pbWdfQ1JVRC9pbWdfZGVsZXRlX2dyb3VwLnBocCdcblxuY29uc3QgZGVsZXRlSW1nID0gKG1vZGFsV2luZG93LCBidXR0b24sIGlkX2ZpZWxkX25hbWUsIHRhYmxlX25hbWUpID0+IHtcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpIFxuXG59XG5cbi8vIERSWSAtINGB0L7QvtGC0L3QvtGB0LjRgtGB0Y8g0YEg0YPQtNCw0LvQtdC90LjQtdC8INC/0LXRgNC40L7QtNCwXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHsgXG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgdGFibGVfbmFtZSB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSW1nIiwiY29uc3QgZGVsZXRlVmlkZW8gPSAoKSA9PiB7XG4gICAgJCgnI2RlbGV0ZV92aWRlbycpLmNsaWNrKCgpID0+IG1haW5IYW5kbGVyKCkpIFxufVxuXG5jb25zdCBtYWluSGFuZGxlciA9IGFzeW5jICgpID0+IHtcblxuICAgIGF3YWl0IGZldGNoRGVsZXRlVmlkZW8oYXdhaXQgZ2V0Q2hlY2tWaWRlbygpKSAgIFxuICAgIGF3YWl0IChhc3luYyAoKSA9PiAkKCcjbW9kYWxEZWxldGVWaWRlbycpLm1vZGFsKCdoaWRlJykpKClcblxufVxuXG5jb25zdCBnZXRDaGVja1ZpZGVvID0gYXN5bmMgKCkgPT4ge1xuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0W3RoaXNfdmlkZW8gPSB0cnVlXWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZVZpZGVvID0gYXN5bmMgKGNoZWNrcykgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICcvSXh0bGFuLXBocC9zcmMvREIvdmlkZW9fQ1JVRC92aWRlb19kZWxldGVfZ3JvdXAucGhwJ1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgZmV0Y2goY3VycmVudF91cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVZpZGVvIiwiY29uc3QgaW5pdF9vd2wgPSAoKSA9PiB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfb3dsIiwiaW1wb3J0IHsgZHJvcHpvbmVIYW5kbGVycyB9IGZyb20gJy4vZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX0luZGV4LmpzJ1xuaW1wb3J0IHsgZGVsZXRlQ29uZmlybWF0aW9ucyB9IGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZSdcbmltcG9ydCBkZWxldGVJbWcgZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX2ltZydcbmltcG9ydCBkZWxldGVWaWRlbyBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfdmlkZW8nXG5pbXBvcnQgaW5pdF9vd2wgZnJvbSAnLi9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsJ1xuaW1wb3J0IHsgZG9TaWduSW4sIGRvU2lnblVwLCBkb1NpZ25PdXQgfSBmcm9tICcuL2Zyb250L2F1dGgvZG9BdXRoJ1xuaW1wb3J0IGdldExhbmdDaG9pY2UgZnJvbSAnLi9mcm9udC9sb2NhbC9jaG9pY2VMYW5nJ1xuXG5kcm9wem9uZUhhbmRsZXJzKCdleGhpYml0aW9ucycsICdteS1kcm9wem9uZScsICdleGhpYml0aW9uX2lkJylcblxuZHJvcHpvbmVIYW5kbGVycygna2luZG9mZG9jdW1lbnRzJywgJ215LWRyb3B6b25lLWtpbmQtb2YtZG9jdW1lbnRzJywgJ2tpbmRvZmRvY3VtZW50c19pZCcpXG5cbi8v0KPQtNCw0LvQtdC90LjQtSDQvdC+0LLQvtGB0YLQtdC5IERSWSAtINGD0LTQsNC70LXQvdC40LUg0L3QvtCy0L7RgdGC0LXQuSDRgNCw0YHRiNCw0YDQuNGC0Ywg0L3QsCDQstC10YHRjCDQv9GA0L7QtdC60YJcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlTmV3cycpLCBcbiAgICAkKCcjZGVsZXRlX25ld3MnKSwgXG4gICAgJy9JeHRsYW4tcGhwL3NyYy9EQi9uZXdzX0NSVUQvbmV3c19kZWxldGUucGhwJyxcbiAgICAnbmV3c19pbmRleCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LLRi9GB0YLQsNCy0L7QulxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVFeGhpYml0aW9uJyksIFxuICAgICQoJyNkZWxldGVfZXhoaWJpdGlvbicpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9leGhpYml0aW9uX2RlbGV0ZS5waHAnLFxuICAgICdleGhpYml0aW9uX2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDRgtC40L/QvtCyINC00L7QutGD0LzQtdC90YLQvtCyXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUtpbmRPZkRvY3VtZW50JyksIFxuICAgICQoJyNkZWxldGVfa2luZF9vZl9kb2N1bWVudCcpLCBcbiAgICAnL0l4dGxhbi1waHAvc3JjL0RCL2RvY3VtZW50X0NSVUQva2luZF9vZl9kb2N1bWVudF9DUlVEL2tpbmRfb2ZfZG9jdW1lbnRfZGVsZXRlLnBocCcsXG4gICAgJ2tpbmRfb2ZfZG9jdW1lbnRfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0YEg0LLRi9GB0YLQsNCy0L7QulxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0LrQvtGI0LXQulxuZGVsZXRlSW1nKFxuICAgICQoJyNtb2RhbERlbGV0ZUltZycpLFxuICAgICQoJyNkZWxldGVfaW1nJyksIFxuICAgICdncm91cF9pZCcsXG4gICAgJ2ltZ2V4aGliaXRpb25zJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNC5INC00L7QutGD0LzQtdC90YLQvtCyXG5kZWxldGVJbWcoXG4gICAgJCgnI21vZGFsRGVsZXRlSW1nJyksXG4gICAgJCgnI2RlbGV0ZV9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJyxcbiAgICAnaW1na2luZG9mZG9jdW1lbnQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INCy0LjQtNC10L5cbmRlbGV0ZVZpZGVvKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQvtCy0LjQvdC+0Lkg0LrQsNGA0YPRgdC10LvQuFxuaW5pdF9vd2woKVxuXG4vLyDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xuZG9TaWduSW4oKVxuXG4vLyDQktGF0L7QtCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbmRvU2lnblVwKClcblxuLy8g0JLRi9GF0L7QtCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbmRvU2lnbk91dCgpXG5cbi8vINCS0YvQsdC+0YAg0Y/Qt9GL0LrQsFxuZ2V0TGFuZ0Nob2ljZSgpIl0sInNvdXJjZVJvb3QiOiIifQ==