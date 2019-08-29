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

            if ($(idDropzone).length !== 0) {
              new Dropzone(idDropzone, {
                acceptedFiles: "image/*",
                init: function init() {
                  this.on("sending", function (file, xhr, formData) {
                    formData.append("kitty_id", kitty_id);
                    formData.append("period_id", periods_id);
                  });
                }
              });
            }

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

            if ($(idDropzone).length !== 0) {
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
            }

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

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_5__["deleteConfirmations"])($('#modalDeleteBrood'), $('#delete_brood'), 'src/DB/kitty_CRUD/brood_CRUD/brood_delete.php', 'brood_id'); // Удаление периодов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_5__["deleteConfirmationsPeriod"])(); // Удаление статусов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_5__["deleteConfirmationsStates"])(); // Инициализация дропзон для главного фото котенка

Object(_front_dropzones_dropzonesHandlers_kitty_thumbnail_js__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Инициализация совиной карусели

Object(_front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Удаление изображений котов

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_4__["default"])($('#modalDeleteImg'), $('#delete_img'), 'group_id', 'imgkitty'); // Удаление общих фото

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_4__["default"])($('#modalDeleteCommonImg'), $('#delete_common_img'), 'group_id', 'imgcommon');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfa2l0dHlfdGh1bWJuYWlsLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX2ltZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvaW5pdF9vd2xfY2FydXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2l0dHkuanMiXSwibmFtZXMiOlsiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImZvckVhY2giLCJjdXJyZW50IiwiaW5pdE9uZURyb3B6b25lIiwiaWQiLCJmZXRjaEltZyIsImRyb3B6b25lSGFuZGxlcnNDb21tb24iLCJ2YWx1ZVRhcmdldEZlaWxkIiwiaWREcm9wem9uZSIsIiQiLCJsZW5ndGgiLCJhY2NlcHRlZEZpbGVzIiwiaW5pdCIsIm9uIiwiZmlsZSIsInhociIsImZvcm1EYXRhIiwiYXBwZW5kIiwiY3VycmVudF91cmwiLCJjdXJyZW50X2luZiIsImhlYWRlcnMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImltYWdlcyIsImtpdHR5X2lkIiwicGVyaW9kc19pZCIsImRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwiLCJtYXhGaWxlcyIsImJyb29kX2lkIiwiaW5pdFRodW1ibmFpbCIsImZpbGVzIiwicmVtb3ZlRmlsZSIsImxvY2F0aW9uIiwicmVsb2FkIiwidXJsIiwiZXhlY1RodW1ibmFpbCIsImNvbnRleHQiLCJjdXJyZW50X2ltYWdlIiwiY3VycmVudEZpbGUiLCJuYW1lIiwic2l6ZSIsImFjY2VwdGVkIiwia2luZCIsInVwbG9hZCIsImZpbGVuYW1lIiwiZGF0YVVSTCIsInB1c2giLCJlbWl0IiwiY3JlYXRlVGh1bWJuYWlsRnJvbVVybCIsIm9wdGlvbnMiLCJ0aHVtYm5haWxXaWR0aCIsInRodW1ibmFpbEhlaWdodCIsInRodW1ibmFpbE1ldGhvZCIsInRodW1ibmFpbCIsImRlbGV0ZUJ5SWQiLCJtb2RhbFdpbmRvdyIsImlkX2ZpZWxkX25hbWUiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIm1vZGFsIiwiRXJyb3IiLCJnZXRDaGVja0ltZ3MiLCJyZXN1bHQiLCJlYWNoIiwiaW5kZXgiLCJpdGVtIiwiY3VycmVudEl0ZW1KUSIsInByb3AiLCJ2YWwiLCJkZWxldGVDb25maXJtYXRpb25zIiwidGFyZ2V0QnV0dG9uIiwiY2xpY2siLCJhdHRyIiwicmVsYXRlZFRhcmdldCIsImRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMiLCJidXR0b24iLCJmZXRjaERlbGV0ZUltZ3MiLCJjaGVja3MiLCJtYWluSGFuZGxlciIsImRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QiLCJkZWxldGVJbWciLCJ0YWJsZV9uYW1lIiwiaW5pdF9vd2wiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJtYXJnaW4iLCJuYXYiLCJhdXRvcGxheSIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheVRpbWVvdXQiLCJyZXNwb25zaXZlIiwiZHJvcHpvbmVIYW5kbGVyc0tpdHR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LEVBRUxBLENBQUMsQ0FBQyxhQUFELENBRkksRUFHTCxVQUhLLEVBSUwsVUFKSyxDQUFULEMsQ0FNQTs7QUFDQTRFLG9GQUFTLENBQ0w1RSxDQUFDLENBQUMsdUJBQUQsQ0FESSxFQUVMQSxDQUFDLENBQUMsb0JBQUQsQ0FGSSxFQUdMLFVBSEssRUFJTCxXQUpLLENBQVQsQyIsImZpbGUiOiIuL2tpdHR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMva2l0dHkuanNcIik7XG4iLCJEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZVxuXG5leHBvcnQgY29uc3QgZHJvcHpvbmVIYW5kbGVycyA9IGFzeW5jICh0YWJsZU5hbWUsIHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgcGFyYW1zID0gW10pID0+IHtcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBcbiAgICAgICAgaXRlbXMuZm9yRWFjaChjdXJyZW50ID0+IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIGN1cnJlbnQuaWQpKVxuXG4gICAgYXdhaXQgYXBwbHlfaW5pdChhd2FpdCBmZXRjaEltZyh0YWJsZU5hbWUsIHBhcmFtcykpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnNDb21tb24gPSBhc3luYyAocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkKSA9PiBcbiAgICBhd2FpdCBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCAnY29tbW9uJylcblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZCkgPT4ge1xuXG4gICAgY29uc3QgaWREcm9wem9uZSA9IGAjJHtwcmVmaXhEcm9wem9uZX0tJHt2YWx1ZVRhcmdldEZlaWxkfWBcblxuICAgIGlmICgkKGlkRHJvcHpvbmUpLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICh0YWJsZU5hbWUsIHBhcmFtcyA9IFtdKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJ3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9leGhpYml0aW9uX0NSVUQvZ2V0X2V4aGliaXRpb25fcGhvdG8ucGhwJztcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IHRhYmxlTmFtZSwgcGFyYW1zIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IGltYWdlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChjdXJyZW50X3VybCwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufSIsImNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAodGFibGVOYW1lKSA9PiB7XG5cbiAgICBEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZVxuXG4gICAgY29uc3QgYXBwbHlfaW5pdCA9IGFzeW5jIGl0ZW1zID0+IFxuICAgICAgICBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gXG4gICAgICAgICAgICBpbml0T25lRHJvcHpvbmUoY3VycmVudC5raXR0eV9pZCwgY3VycmVudC5wZXJpb2RzX2lkKSlcbiAgICAgICAgXG4gXG4gICAgYXdhaXQgYXBwbHlfaW5pdChhd2FpdCBmZXRjaEltZyh0YWJsZU5hbWUpKVxuXG59XG5cbmNvbnN0IGluaXRPbmVEcm9wem9uZSA9IGFzeW5jIChraXR0eV9pZCwgcGVyaW9kc19pZCkgPT4ge1xuXG4gICAgbGV0IGlkRHJvcHpvbmUgPSBgI215LWRyb3B6b25lLWkke2tpdHR5X2lkfS1pJHtwZXJpb2RzX2lkfWBcblxuICAgIGlmICgkKGlkRHJvcHpvbmUpLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwia2l0dHlfaWRcIiwga2l0dHlfaWQpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwZXJpb2RfaWRcIiwgcGVyaW9kc19pZCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG59XG5cbmNvbnN0IGZldGNoSW1nID0gYXN5bmMgKHRhYmxlTmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2dldF9leGhpYml0aW9uX3Bob3RvLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyB0YWJsZU5hbWUgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgKGF3YWl0IGZldGNoKGN1cnJlbnRfdXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3B6b25lSGFuZGxlcnMiLCJjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKGN1cnJlbnQpKVxuICAgICAgICBcbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKCkpXG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKGN1cnJlbnQpID0+IHtcblxuICAgIGxldCBpZERyb3B6b25lID0gYCNteS1kcm9wem9uZS0ke2N1cnJlbnQuaWR9YFxuXG4gICAgaWYgKCQoaWREcm9wem9uZSkubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG4gICAgICAgICAgICBtYXhGaWxlczogMSxcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtpdHR5X2lkXCIsIGN1cnJlbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJicm9vZF9pZFwiLCBjdXJyZW50LmJyb29kX2lkKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZmlsZS5pbml0VGh1bWJuYWlsKSAmJiAodGhpcy5maWxlc1sxXSAhPSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKHRoaXMuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnQgIT0gbnVsbCkgJiYgKGN1cnJlbnQudXJsICE9IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWNUaHVtYm5haWwodGhpcywgY3VycmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICgpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2tpdHR5X0NSVUQvaW1nX0NSVUQvaW1nX2dldF9tYWluLnBocCc7XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59XG5cbi8vIERSWSAtINC/0LXRgNC10L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuY29uc3QgZXhlY1RodW1ibmFpbCA9IChjb250ZXh0LCBjdXJyZW50X2ltYWdlKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudEZpbGUgPSB7XG4gICAgICAgIG5hbWU6IGN1cnJlbnRfaW1hZ2UubmFtZSxcbiAgICAgICAgc2l6ZTogY3VycmVudF9pbWFnZS5zaXplLFxuICAgICAgICBhY2NlcHRlZDogdHJ1ZSxcbiAgICAgICAga2luZDogJ2ltYWdlJyxcbiAgICAgICAgdXBsb2FkOiB7XG4gICAgICAgICAgICBmaWxlbmFtZTogY3VycmVudF9pbWFnZS5uYW1lLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhVVJMOiBjdXJyZW50X2ltYWdlLnVybCxcbiAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgIGNvbnRleHQuZmlsZXMucHVzaChjdXJyZW50RmlsZSk7XG4gICAgY29udGV4dC5lbWl0KFwiYWRkZWRmaWxlXCIsIGN1cnJlbnRGaWxlKTtcbiAgICBjb250ZXh0LmNyZWF0ZVRodW1ibmFpbEZyb21VcmwoXG4gICAgICAgIGN1cnJlbnRGaWxlLFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsV2lkdGgsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxIZWlnaHQsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxNZXRob2QsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHRodW1ibmFpbCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmVtaXQoJ3RodW1ibmFpbCcsIGN1cnJlbnRGaWxlLCB0aHVtYm5haWwpO1xuICAgICAgICAgICAgY29udGV4dC5lbWl0KFwiY29tcGxldGVcIiwgY3VycmVudEZpbGUpO1xuICAgICAgICB9XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwiLCJjb25zdCBkZWxldGVCeUlkID0gYXN5bmMgKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcblxuICAgIHRyeSB7XG5cbiAgICAgICAgYXdhaXQgZmV0Y2godXJsLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG5cbiAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7Qu9GD0YfQuNGC0Ywg0LTQsNC90L3Ri9C1INC+0YIg0YHQtdGA0LLQtdGA0LAnKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHQ7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnMgPSAobW9kYWxXaW5kb3csIHRhcmdldEJ1dHRvbiwgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICB0YXJnZXRCdXR0b24uY2xpY2soKCkgPT4gZGVsZXRlQnlJZChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSlcblxuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsXG4gICAgICAgIGV2ZW50ID0+IHRhcmdldEJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlU3RhdGUnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9zdGF0ZScpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnc3RhdGVfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnL0l4dGxhbi1waHAvc3JjL0RCL2tpdHR5X0NSVUQvc3RhdGVfQ1JVRC9zdGF0ZV9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcykgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcyB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncygndHJ1ZScsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcylcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVQZXJpb2QnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9wZXJpb2QnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ2Jyb29kX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJy9JeHRsYW4tcGhwL3NyYy9EQi9raXR0eV9DUlVEL3BlcmlvZF9DUlVEL3BlcmlvZF9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCBpZCkgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgaWQgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCBpZClcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59IiwibGV0IHVybCA9Jy9JeHRsYW4tcGhwL3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9pbWdfQ1JVRC9pbWdfZGVsZXRlX2dyb3VwLnBocCdcblxuY29uc3QgZGVsZXRlSW1nID0gKG1vZGFsV2luZG93LCBidXR0b24sIGlkX2ZpZWxkX25hbWUsIHRhYmxlX25hbWUpID0+IHtcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpIFxuXG59XG5cbi8vIERSWSAtINGB0L7QvtGC0L3QvtGB0LjRgtGB0Y8g0YEg0YPQtNCw0LvQtdC90LjQtdC8INC/0LXRgNC40L7QtNCwXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHsgXG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgdGFibGVfbmFtZSB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSW1nIiwiY29uc3QgaW5pdF9vd2wgPSAoKSA9PiB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfb3dsIiwiaW1wb3J0IGluaXRfb3dsIGZyb20gJy4vZnJvbnQvdXRpbHMvaW5pdF9vd2xfY2FydXNlbCdcbmltcG9ydCBkcm9wem9uZUhhbmRsZXJzS2l0dHkgZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfa2l0dHkuanMnXG5pbXBvcnQgeyBkcm9wem9uZUhhbmRsZXJzQ29tbW9uIH0gZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMnXG5pbXBvcnQgZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCBmcm9tICcuL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eV90aHVtYm5haWwuanMnXG5pbXBvcnQgZGVsZXRlSW1nIGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcnXG5pbXBvcnQgeyBkZWxldGVDb25maXJtYXRpb25zLCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kLCBkZWxldGVDb25maXJtYXRpb25zU3RhdGVzIH0gZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlJ1xuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQtNC70Y8g0L7QsdGJ0LjRhSDRhNC+0YLQvlxuZHJvcHpvbmVIYW5kbGVyc0NvbW1vbignbXktZHJvcHpvbmUnLCAnY29tbW9uJylcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0YTQvtGC0L4g0LrQvtGC0Y/RgiDQsiDRgNCw0LfRgNC10LfQtSDQstGA0LXQvNC10L3QvdGL0YUg0L/QtdGA0LjQvtC00L7QslxuZHJvcHpvbmVIYW5kbGVyc0tpdHR5KCdpbWdraXR0eScpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LrQvtGC0Y/RglxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVLaXR0eScpLCBcbiAgICAkKCcjZGVsZXRlX2tpdHR5JyksIFxuICAgICdzcmMvREIva2l0dHlfQ1JVRC9raXR0eV9kZWxldGUucGhwJyxcbiAgICAna2l0dHlfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC/0L7QvNC10YLQvtCyXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUJyb29kJyksIFxuICAgICQoJyNkZWxldGVfYnJvb2QnKSwgXG4gICAgJ3NyYy9EQi9raXR0eV9DUlVEL2Jyb29kX0NSVUQvYnJvb2RfZGVsZXRlLnBocCcsXG4gICAgJ2Jyb29kX2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQv9C10YDQuNC+0LTQvtCyXG5kZWxldGVDb25maXJtYXRpb25zUGVyaW9kKClcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDRgdGC0LDRgtGD0YHQvtCyXG5kZWxldGVDb25maXJtYXRpb25zU3RhdGVzKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINCz0LvQsNCy0L3QvtCz0L4g0YTQvtGC0L4g0LrQvtGC0LXQvdC60LBcbmRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwoKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LLQuNC90L7QuSDQutCw0YDRg9GB0LXQu9C4XG5pbml0X293bCgpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDQutC+0YLQvtCyXG5kZWxldGVJbWcoXG4gICAgJCgnI21vZGFsRGVsZXRlSW1nJyksXG4gICAgJCgnI2RlbGV0ZV9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJyxcbiAgICAnaW1na2l0dHknKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC+0LHRidC40YUg0YTQvtGC0L5cbmRlbGV0ZUltZyhcbiAgICAkKCcjbW9kYWxEZWxldGVDb21tb25JbWcnKSxcbiAgICAkKCcjZGVsZXRlX2NvbW1vbl9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJywgXG4gICAgJ2ltZ2NvbW1vbicpIl0sInNvdXJjZVJvb3QiOiIifQ==