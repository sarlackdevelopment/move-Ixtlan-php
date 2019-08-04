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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/kitty.js");
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

/***/ "./src/front/dropzones/dropzonesHandlers_kitty.js":
/*!********************************************************!*\
  !*** ./src/front/dropzones/dropzonesHandlers_kitty.js ***!
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
  regeneratorRuntime.mark(function _callee2(tableName) {
    var apply_init;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Dropzone.autoDiscover = false;

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
                          return initOneDropzone(current.kitty_id, current.periods_id);
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function apply_init(_x2) {
                return _ref2.apply(this, arguments);
              };
            }();

            _context2.t0 = apply_init;
            _context2.next = 5;
            return fetchImg(tableName);

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

  return function dropzoneHandlers(_x) {
    return _ref.apply(this, arguments);
  };
}();

var initOneDropzone =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(kitty_id, periods_id) {
    var idDropzone;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idDropzone = "#my-dropzone-i".concat(kitty_id, "-i").concat(periods_id);
            new Dropzone(idDropzone, {
              acceptedFiles: "image/*",
              init: function init() {
                this.on("sending", function (file, xhr, formData) {
                  formData.append("kitty_id", kitty_id);
                  formData.append("period_id", periods_id);
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

  return function initOneDropzone(_x3, _x4) {
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

  return function fetchImg(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (dropzoneHandlers);

/***/ }),

/***/ "./src/front/dropzones/dropzonesHandlers_kitty_thumbnail.js":
/*!******************************************************************!*\
  !*** ./src/front/dropzones/dropzonesHandlers_kitty_thumbnail.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dropzoneHandlersCommonThumbnail =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var apply_init;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Dropzone.autoDiscover = false;

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
                          return initOneDropzone(current);
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function apply_init(_x) {
                return _ref2.apply(this, arguments);
              };
            }();

            _context2.t0 = apply_init;
            _context2.next = 5;
            return fetchImg();

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

  return function dropzoneHandlersCommonThumbnail() {
    return _ref.apply(this, arguments);
  };
}();

var initOneDropzone =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(current) {
    var idDropzone;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idDropzone = "#my-dropzone-".concat(current.id);
            new Dropzone(idDropzone, {
              acceptedFiles: "image/*",
              maxFiles: 1,
              init: function init() {
                var _this = this;

                this.on("sending", function (file, xhr, formData) {
                  formData.append("kitty_id", current.id);
                  formData.append("brood_id", current.brood_id);
                });
                this.on("addedfile", function (file) {
                  if (!file.initThumbnail && _this.files[1] != null) {
                    _this.removeFile(_this.files[0]);
                  }
                });
                this.on("success", function () {
                  return location.reload();
                });

                if (current != null && current.url != null) {
                  execThumbnail(this, current);
                }
              }
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function initOneDropzone(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var fetchImg =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var current_url, headers, images;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            current_url = 'src/DB/kitty_CRUD/img_CRUD/img_get_main.php';
            headers = {
              'Content-Type': 'application/json'
            };
            _context4.next = 4;
            return fetch(current_url, {
              method: 'POST',
              headers: headers
            });

          case 4:
            _context4.next = 6;
            return _context4.sent.json();

          case 6:
            images = _context4.sent;
            return _context4.abrupt("return", images);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchImg() {
    return _ref4.apply(this, arguments);
  };
}(); // DRY - перенести в утилиты


var execThumbnail = function execThumbnail(context, current_image) {
  var currentFile = {
    name: current_image.name,
    size: current_image.size,
    accepted: true,
    kind: 'image',
    upload: {
      filename: current_image.name
    },
    dataURL: current_image.url
  };
  context.files.push(currentFile);
  context.emit("addedfile", currentFile);
  context.createThumbnailFromUrl(currentFile, context.options.thumbnailWidth, context.options.thumbnailHeight, context.options.thumbnailMethod, context, function (thumbnail) {
    context.emit('thumbnail', currentFile, thumbnail);
    context.emit("complete", currentFile);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (dropzoneHandlersCommonThumbnail);

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

var deleteImg = function deleteImg(table_name) {
  var modalWindow = $('#modalDeleteImg');
  var button = $('#delete_img');
  var id_field_name = 'group_id';
  var url = '/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php'; // DRY - проброс с кнопки запуска модалки на кнопку удаления вынести в утилиты

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

/***/ "./src/kitty.js":
/*!**********************!*\
  !*** ./src/kitty.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front/utils/init_owl_carusel */ "./src/front/utils/init_owl_carusel.js");
/* harmony import */ var _front_dropzones_dropzonesHandlers_kitty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front/dropzones/dropzonesHandlers_kitty.js */ "./src/front/dropzones/dropzonesHandlers_kitty.js");
/* harmony import */ var _front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./front/dropzones/dropzonesHandlers_Index.js */ "./src/front/dropzones/dropzonesHandlers_Index.js");
/* harmony import */ var _front_dropzones_dropzonesHandlers_kitty_thumbnail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front/dropzones/dropzonesHandlers_kitty_thumbnail.js */ "./src/front/dropzones/dropzonesHandlers_kitty_thumbnail.js");
/* harmony import */ var _front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./front/utils/confirmation_delete_img */ "./src/front/utils/confirmation_delete_img.js");
/* harmony import */ var _front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front/utils/confirmation_delete */ "./src/front/utils/confirmation_delete.js");





 // Инициализация дропзон для общих фото

Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_2__["dropzoneHandlersCommon"])('my-dropzone', 'common'); // Инициализация дропзон для загрузки фото котят в разрезе временных периодов

Object(_front_dropzones_dropzonesHandlers_kitty_js__WEBPACK_IMPORTED_MODULE_1__["default"])('imgkitty'); // Удаление котят

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_5__["deleteConfirmations"])($('#modalDeleteKitty'), $('#delete_kitty'), 'src/DB/kitty_CRUD/kitty_delete.php', 'kitty_id'); // Удаление пометов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_5__["deleteConfirmations"])($('#modalDeleteBrood'), $('#delete_brood'), '/Ixtlan-php/src/DB/kitty_CRUD/brood_CRUD/brood_delete.php', 'brood_id'); // Удаление периодов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_5__["deleteConfirmationsPeriod"])(); // Удаление статусов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_5__["deleteConfirmationsStates"])(); // Инициализация дропзон для главного фото котенка

Object(_front_dropzones_dropzonesHandlers_kitty_thumbnail_js__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Инициализация совиной карусели

Object(_front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Удаление изображений котят

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_4__["default"])('imgkitty');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfa2l0dHlfdGh1bWJuYWlsLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX2ltZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvaW5pdF9vd2xfY2FydXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2l0dHkuanMiXSwibmFtZXMiOlsiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImZvckVhY2giLCJjdXJyZW50IiwiaW5pdE9uZURyb3B6b25lIiwiaWQiLCJmZXRjaEltZyIsImRyb3B6b25lSGFuZGxlcnNDb21tb24iLCJ2YWx1ZVRhcmdldEZlaWxkIiwiaWREcm9wem9uZSIsImFjY2VwdGVkRmlsZXMiLCJpbml0Iiwib24iLCJmaWxlIiwieGhyIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJjdXJyZW50X3VybCIsImN1cnJlbnRfaW5mIiwiaGVhZGVycyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiaW1hZ2VzIiwia2l0dHlfaWQiLCJwZXJpb2RzX2lkIiwiZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCIsIm1heEZpbGVzIiwiYnJvb2RfaWQiLCJpbml0VGh1bWJuYWlsIiwiZmlsZXMiLCJyZW1vdmVGaWxlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cmwiLCJleGVjVGh1bWJuYWlsIiwiY29udGV4dCIsImN1cnJlbnRfaW1hZ2UiLCJjdXJyZW50RmlsZSIsIm5hbWUiLCJzaXplIiwiYWNjZXB0ZWQiLCJraW5kIiwidXBsb2FkIiwiZmlsZW5hbWUiLCJkYXRhVVJMIiwicHVzaCIsImVtaXQiLCJjcmVhdGVUaHVtYm5haWxGcm9tVXJsIiwib3B0aW9ucyIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidGh1bWJuYWlsTWV0aG9kIiwidGh1bWJuYWlsIiwiZGVsZXRlQnlJZCIsIm1vZGFsV2luZG93IiwiaWRfZmllbGRfbmFtZSIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibW9kYWwiLCJFcnJvciIsImdldENoZWNrSW1ncyIsInJlc3VsdCIsIiQiLCJlYWNoIiwiaW5kZXgiLCJpdGVtIiwiY3VycmVudEl0ZW1KUSIsInByb3AiLCJ2YWwiLCJkZWxldGVDb25maXJtYXRpb25zIiwidGFyZ2V0QnV0dG9uIiwiY2xpY2siLCJhdHRyIiwicmVsYXRlZFRhcmdldCIsImRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMiLCJidXR0b24iLCJmZXRjaERlbGV0ZUltZ3MiLCJjaGVja3MiLCJtYWluSGFuZGxlciIsImRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QiLCJkZWxldGVJbWciLCJ0YWJsZV9uYW1lIiwiaW5pdF9vd2wiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJtYXJnaW4iLCJuYXYiLCJhdXRvcGxheSIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheVRpbWVvdXQiLCJyZXNwb25zaXZlIiwiZHJvcHpvbmVIYW5kbGVyc0tpdHR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QyxPQUFHLEVBQUUsS0FIc0I7QUFJM0JDLFlBQVEsRUFBRSxJQUppQjtBQUszQkMsY0FBVSxFQUFFLElBTGU7QUFNM0JDLG1CQUFlLEVBQUUsSUFOVTtBQU8zQkMsY0FBVSxFQUFFO0FBQ1IsU0FBRztBQUNDOUYsYUFBSyxFQUFFO0FBRFIsT0FESztBQUlSLFdBQUs7QUFDREEsYUFBSyxFQUFFO0FBRE4sT0FKRztBQU9SLFlBQU07QUFDRkEsYUFBSyxFQUFFO0FBREw7QUFQRTtBQVBlLEdBQS9CO0FBbUJILENBcEJEOztBQXNCZXNGLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQWhGLDBHQUFzQixDQUFDLGFBQUQsRUFBZ0IsUUFBaEIsQ0FBdEIsQyxDQUVBOztBQUNBeUYsMkZBQXFCLENBQUMsVUFBRCxDQUFyQixDLENBRUE7O0FBQ0F0Qiw0RkFBbUIsQ0FDZlAsQ0FBQyxDQUFDLG1CQUFELENBRGMsRUFFZkEsQ0FBQyxDQUFDLGVBQUQsQ0FGYyxFQUdmLG9DQUhlLEVBSWYsVUFKZSxDQUFuQixDLENBTUE7O0FBQ0FPLDRGQUFtQixDQUNmUCxDQUFDLENBQUMsbUJBQUQsQ0FEYyxFQUVmQSxDQUFDLENBQUMsZUFBRCxDQUZjLEVBR2YsMkRBSGUsRUFJZixVQUplLENBQW5CLEMsQ0FNQTs7QUFDQWlCLGtHQUF5QixHLENBRXpCOztBQUNBTCxrR0FBeUIsRyxDQUV6Qjs7QUFDQWxELHFHQUErQixHLENBRS9COztBQUNBMEQsNkVBQVEsRyxDQUVSOztBQUNBRixvRkFBUyxDQUFDLFVBQUQsQ0FBVCxDIiwiZmlsZSI6Ii4va2l0dHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9raXR0eS5qc1wiKTtcbiIsIkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzID0gYXN5bmMgKHRhYmxlTmFtZSwgcHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBwYXJhbXMgPSBbXSkgPT4ge1xuXG4gICAgY29uc3QgYXBwbHlfaW5pdCA9IGFzeW5jIGl0ZW1zID0+IFxuICAgICAgICBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgY3VycmVudC5pZCkpXG5cbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKHRhYmxlTmFtZSwgcGFyYW1zKSlcblxufVxuXG5leHBvcnQgY29uc3QgZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQpID0+IFxuICAgIGF3YWl0IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsICdjb21tb24nKVxuXG5jb25zdCBpbml0T25lRHJvcHpvbmUgPSBhc3luYyAocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKSA9PiB7XG5cbiAgICBsZXQgaWREcm9wem9uZSA9IGAjJHtwcmVmaXhEcm9wem9uZX0tJHt2YWx1ZVRhcmdldEZlaWxkfWBcblxuICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQodGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9KVxuXG59XG5cbmNvbnN0IGZldGNoSW1nID0gYXN5bmMgKHRhYmxlTmFtZSwgcGFyYW1zID0gW10pID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9nZXRfZXhoaWJpdGlvbl9waG90by5waHAnO1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgdGFibGVOYW1lLCBwYXJhbXMgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgKGF3YWl0IGZldGNoKGN1cnJlbnRfdXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59IiwiY29uc3QgZHJvcHpvbmVIYW5kbGVycyA9IGFzeW5jICh0YWJsZU5hbWUpID0+IHtcblxuICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbiAgICBjb25zdCBhcHBseV9pbml0ID0gYXN5bmMgaXRlbXMgPT4gXG4gICAgICAgIGl0ZW1zLmZvckVhY2goY3VycmVudCA9PiBcbiAgICAgICAgICAgIGluaXRPbmVEcm9wem9uZShjdXJyZW50LmtpdHR5X2lkLCBjdXJyZW50LnBlcmlvZHNfaWQpKVxuICAgICAgICBcbiBcbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKHRhYmxlTmFtZSkpXG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKGtpdHR5X2lkLCBwZXJpb2RzX2lkKSA9PiB7XG5cbiAgICBsZXQgaWREcm9wem9uZSA9IGAjbXktZHJvcHpvbmUtaSR7a2l0dHlfaWR9LWkke3BlcmlvZHNfaWR9YFxuXG4gICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm9uKFwic2VuZGluZ1wiLCAoZmlsZSwgeGhyLCBmb3JtRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtpdHR5X2lkXCIsIGtpdHR5X2lkKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwZXJpb2RfaWRcIiwgcGVyaW9kc19pZCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9KVxuXG59XG5cbmNvbnN0IGZldGNoSW1nID0gYXN5bmMgKHRhYmxlTmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2dldF9leGhpYml0aW9uX3Bob3RvLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyB0YWJsZU5hbWUgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgKGF3YWl0IGZldGNoKGN1cnJlbnRfdXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3B6b25lSGFuZGxlcnMiLCJjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKGN1cnJlbnQpKVxuICAgICAgICBcbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKCkpXG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKGN1cnJlbnQpID0+IHtcblxuICAgIGxldCBpZERyb3B6b25lID0gYCNteS1kcm9wem9uZS0ke2N1cnJlbnQuaWR9YFxuXG4gICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcbiAgICAgICAgbWF4RmlsZXM6IDEsXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJraXR0eV9pZFwiLCBjdXJyZW50LmlkKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJicm9vZF9pZFwiLCBjdXJyZW50LmJyb29kX2lkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsZS5pbml0VGh1bWJuYWlsKSAmJiAodGhpcy5maWxlc1sxXSAhPSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZpbGUodGhpcy5maWxlc1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKVxuICAgICAgICAgICAgaWYgKChjdXJyZW50ICE9IG51bGwpICYmIChjdXJyZW50LnVybCAhPSBudWxsKSkge1xuICAgICAgICAgICAgICAgIGV4ZWNUaHVtYm5haWwodGhpcywgY3VycmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSlcblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICgpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2tpdHR5X0NSVUQvaW1nX0NSVUQvaW1nX2dldF9tYWluLnBocCc7XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59XG5cbi8vIERSWSAtINC/0LXRgNC10L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuY29uc3QgZXhlY1RodW1ibmFpbCA9IChjb250ZXh0LCBjdXJyZW50X2ltYWdlKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudEZpbGUgPSB7XG4gICAgICAgIG5hbWU6IGN1cnJlbnRfaW1hZ2UubmFtZSxcbiAgICAgICAgc2l6ZTogY3VycmVudF9pbWFnZS5zaXplLFxuICAgICAgICBhY2NlcHRlZDogdHJ1ZSxcbiAgICAgICAga2luZDogJ2ltYWdlJyxcbiAgICAgICAgdXBsb2FkOiB7XG4gICAgICAgICAgICBmaWxlbmFtZTogY3VycmVudF9pbWFnZS5uYW1lLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhVVJMOiBjdXJyZW50X2ltYWdlLnVybCxcbiAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgIGNvbnRleHQuZmlsZXMucHVzaChjdXJyZW50RmlsZSk7XG4gICAgY29udGV4dC5lbWl0KFwiYWRkZWRmaWxlXCIsIGN1cnJlbnRGaWxlKTtcbiAgICBjb250ZXh0LmNyZWF0ZVRodW1ibmFpbEZyb21VcmwoXG4gICAgICAgIGN1cnJlbnRGaWxlLFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsV2lkdGgsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxIZWlnaHQsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxNZXRob2QsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHRodW1ibmFpbCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmVtaXQoJ3RodW1ibmFpbCcsIGN1cnJlbnRGaWxlLCB0aHVtYm5haWwpO1xuICAgICAgICAgICAgY29udGV4dC5lbWl0KFwiY29tcGxldGVcIiwgY3VycmVudEZpbGUpO1xuICAgICAgICB9XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwiLCJjb25zdCBkZWxldGVCeUlkID0gYXN5bmMgKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcblxuICAgIHRyeSB7XG5cbiAgICAgICAgYXdhaXQgZmV0Y2godXJsLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG5cbiAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7Qu9GD0YfQuNGC0Ywg0LTQsNC90L3Ri9C1INC+0YIg0YHQtdGA0LLQtdGA0LAnKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHQ7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnMgPSAobW9kYWxXaW5kb3csIHRhcmdldEJ1dHRvbiwgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICB0YXJnZXRCdXR0b24uY2xpY2soKCkgPT4gZGVsZXRlQnlJZChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSlcblxuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsXG4gICAgICAgIGV2ZW50ID0+IHRhcmdldEJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlU3RhdGUnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9zdGF0ZScpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnc3RhdGVfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnL0l4dGxhbi1waHAvc3JjL0RCL2tpdHR5X0NSVUQvc3RhdGVfQ1JVRC9zdGF0ZV9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcykgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcyB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncygndHJ1ZScsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcylcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVQZXJpb2QnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9wZXJpb2QnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ2Jyb29kX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJy9JeHRsYW4tcGhwL3NyYy9EQi9raXR0eV9DUlVEL3BlcmlvZF9DUlVEL3BlcmlvZF9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCBpZCkgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgaWQgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCBpZClcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59IiwiY29uc3QgZGVsZXRlSW1nID0gKHRhYmxlX25hbWUpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlSW1nJylcbiAgICBsZXQgYnV0dG9uICAgICAgICA9ICQoJyNkZWxldGVfaW1nJylcbiAgICBsZXQgaWRfZmllbGRfbmFtZSA9ICdncm91cF9pZCdcbiAgICBsZXQgdXJsICAgICAgICAgICA9Jy9JeHRsYW4tcGhwL3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9pbWdfQ1JVRC9pbWdfZGVsZXRlX2dyb3VwLnBocCdcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpIFxuXG59XG5cbi8vIERSWSAtINGB0L7QvtGC0L3QvtGB0LjRgtGB0Y8g0YEg0YPQtNCw0LvQtdC90LjQtdC8INC/0LXRgNC40L7QtNCwXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHsgXG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgdGFibGVfbmFtZSB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSW1nIiwiY29uc3QgaW5pdF9vd2wgPSAoKSA9PiB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfb3dsIiwiaW1wb3J0IGluaXRfb3dsIGZyb20gJy4vZnJvbnQvdXRpbHMvaW5pdF9vd2xfY2FydXNlbCdcbmltcG9ydCBkcm9wem9uZUhhbmRsZXJzS2l0dHkgZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfa2l0dHkuanMnXG5pbXBvcnQgeyBkcm9wem9uZUhhbmRsZXJzQ29tbW9uIH0gZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMnXG5pbXBvcnQgZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCBmcm9tICcuL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eV90aHVtYm5haWwuanMnXG5pbXBvcnQgZGVsZXRlSW1nIGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcnXG5pbXBvcnQgeyBkZWxldGVDb25maXJtYXRpb25zLCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kLCBkZWxldGVDb25maXJtYXRpb25zU3RhdGVzIH0gZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlJ1xuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQtNC70Y8g0L7QsdGJ0LjRhSDRhNC+0YLQvlxuZHJvcHpvbmVIYW5kbGVyc0NvbW1vbignbXktZHJvcHpvbmUnLCAnY29tbW9uJylcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0YTQvtGC0L4g0LrQvtGC0Y/RgiDQsiDRgNCw0LfRgNC10LfQtSDQstGA0LXQvNC10L3QvdGL0YUg0L/QtdGA0LjQvtC00L7QslxuZHJvcHpvbmVIYW5kbGVyc0tpdHR5KCdpbWdraXR0eScpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LrQvtGC0Y/RglxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVLaXR0eScpLCBcbiAgICAkKCcjZGVsZXRlX2tpdHR5JyksIFxuICAgICdzcmMvREIva2l0dHlfQ1JVRC9raXR0eV9kZWxldGUucGhwJyxcbiAgICAna2l0dHlfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC/0L7QvNC10YLQvtCyXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUJyb29kJyksIFxuICAgICQoJyNkZWxldGVfYnJvb2QnKSwgXG4gICAgJy9JeHRsYW4tcGhwL3NyYy9EQi9raXR0eV9DUlVEL2Jyb29kX0NSVUQvYnJvb2RfZGVsZXRlLnBocCcsXG4gICAgJ2Jyb29kX2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQv9C10YDQuNC+0LTQvtCyXG5kZWxldGVDb25maXJtYXRpb25zUGVyaW9kKClcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDRgdGC0LDRgtGD0YHQvtCyXG5kZWxldGVDb25maXJtYXRpb25zU3RhdGVzKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINCz0LvQsNCy0L3QvtCz0L4g0YTQvtGC0L4g0LrQvtGC0LXQvdC60LBcbmRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwoKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LLQuNC90L7QuSDQutCw0YDRg9GB0LXQu9C4XG5pbml0X293bCgpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDQutC+0YLRj9GCXG5kZWxldGVJbWcoJ2ltZ2tpdHR5JykiXSwic291cmNlUm9vdCI6IiJ9