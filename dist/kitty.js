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

/***/ "./src/front/banner.js":
/*!*****************************!*\
  !*** ./src/front/banner.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initHandlersBanner = function initHandlersBanner() {
  $('#modalCustomBanner').on('shown.bs.modal', function (event) {
    return $('#kittyToBanner').attr('kittyId', event.relatedTarget.dataset.kittyId);
  });
  $('#modalRemoveBanner').on('shown.bs.modal', function (event) {
    return $('#kittyFromBanner').attr('kittyId', event.relatedTarget.dataset.kittyId);
  });
  $('#kittyToBanner').click(function () {
    var data = {
      'modal': 'show',
      'banner_header': $('#banner_header').val(),
      'banner_description': $('#banner_description').val(),
      'kitty_id': $('#kittyToBanner').attr('kittyId')
    };
    fetch('src/DB/kitty_CRUD/replaceToBanner.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    $('#modalCustomBanner').modal('hide');
  });
  $('#kittyFromBanner').click(function () {
    var data = {
      'modal': 'hide',
      'banner_header': '',
      'banner_description': '',
      'kitty_id': $('#kittyFromBanner').attr('kittyId')
    };
    fetch('src/DB/kitty_CRUD/replaceToBanner.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    $('#modalRemoveBanner').modal('hide');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (initHandlersBanner);

/***/ }),

/***/ "./src/front/broods.js":
/*!*****************************!*\
  !*** ./src/front/broods.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var initHandlers = function initHandlers() {
  $(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var archive_pills, fetchInfo, handlePills;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            /* Скрываем вкладки распроданных пометов  */
            archive_pills = $('#v-pills-common-archive');

            fetchInfo =
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                var broodsInfo;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetch("src/DB/kitty_CRUD/brood_CRUD/brood_get_all.php", {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          }
                        });

                      case 2:
                        _context.next = 4;
                        return _context.sent.json();

                      case 4:
                        broodsInfo = _context.sent;
                        return _context.abrupt("return", broodsInfo);

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function fetchInfo() {
                return _ref2.apply(this, arguments);
              };
            }();

            handlePills = function handlePills(data) {
              var attrShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
              data.forEach(function (_ref3) {
                var id = _ref3.id,
                    archive = _ref3.archive;
                var current_pill = $("#v-pills-headingBrood_".concat(id, "-tab"));

                if (archive === '0') {
                  if (attrShow === undefined || attrShow == '0') {
                    current_pill.hide("slow");
                  } else {
                    current_pill.show("slow");
                  }
                } else {
                  if (attrShow === undefined || attrShow == '0') {
                    current_pill.show("slow");
                  } else {
                    current_pill.hide("slow");
                  }
                }
              });
            };

            _context4.t0 = handlePills;
            _context4.next = 6;
            return fetchInfo();

          case 6:
            _context4.t1 = _context4.sent;
            (0, _context4.t0)(_context4.t1);
            $('#v-pills-common-archive').on('click',
            /*#__PURE__*/
            _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              var fetchArchiveDataBroods, attrShow;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      fetchArchiveDataBroods =
                      /*#__PURE__*/
                      function () {
                        var _ref5 = _asyncToGenerator(
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        return function fetchArchiveDataBroods() {
                          return _ref5.apply(this, arguments);
                        };
                      }();

                      if (archive_pills.attr("show") == undefined) {
                        archive_pills.attr("show", "1");
                      }

                      attrShow = archive_pills.attr("show");

                      if (attrShow == "1") {
                        archive_pills.attr("show", "0");
                        archive_pills.html("Скрыть архив...");
                      } else {
                        archive_pills.attr("show", "1");
                        archive_pills.html("Архив...");
                      }

                      _context3.next = 6;
                      return fetchArchiveDataBroods();

                    case 6:
                      _context3.t0 = handlePills;
                      _context3.next = 9;
                      return fetchInfo();

                    case 9:
                      _context3.t1 = _context3.sent;
                      _context3.t2 = attrShow;
                      (0, _context3.t0)(_context3.t1, _context3.t2);

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  $('.broodToArchive').click(
  /*#__PURE__*/
  function () {
    var _ref6 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(event) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return fetch('src/DB/kitty_CRUD/replaceToArchive.php', {
                method: 'POST',
                body: JSON.stringify({
                  'brood_id': event.target.dataset.broodId
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }());
};

/* harmony default export */ __webpack_exports__["default"] = (initHandlers);

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
  var url = 'src/DB/kitty_CRUD/state_CRUD/state_delete_group.php';

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
  var url = 'src/DB/kitty_CRUD/period_CRUD/period_delete_group.php'; // DRY - проброс с кнопки запуска модалки на кнопку удаления вынести в утилиты

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

var url = 'src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php';

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
/* harmony import */ var _front_broods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./front/broods */ "./src/front/broods.js");
/* harmony import */ var _front_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./front/banner */ "./src/front/banner.js");







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

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_4__["default"])($('#modalDeleteCommonImg'), $('#delete_common_img'), 'group_id', 'imgcommon'); // Инициализация обработчиков перемещения пометов в архив

Object(_front_broods__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Инициализация обработчиков всплывающего рекламного баннера

Object(_front_banner__WEBPACK_IMPORTED_MODULE_7__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvYnJvb2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5X3RodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tpdHR5LmpzIl0sIm5hbWVzIjpbImluaXRIYW5kbGVyc0Jhbm5lciIsIiQiLCJvbiIsImV2ZW50IiwiYXR0ciIsInJlbGF0ZWRUYXJnZXQiLCJkYXRhc2V0Iiwia2l0dHlJZCIsImNsaWNrIiwiZGF0YSIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibW9kYWwiLCJpbml0SGFuZGxlcnMiLCJhcmNoaXZlX3BpbGxzIiwiZmV0Y2hJbmZvIiwianNvbiIsImJyb29kc0luZm8iLCJoYW5kbGVQaWxscyIsImF0dHJTaG93IiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsImlkIiwiYXJjaGl2ZSIsImN1cnJlbnRfcGlsbCIsImhpZGUiLCJzaG93IiwiZmV0Y2hBcmNoaXZlRGF0YUJyb29kcyIsImh0bWwiLCJ0YXJnZXQiLCJicm9vZElkIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImN1cnJlbnQiLCJpbml0T25lRHJvcHpvbmUiLCJmZXRjaEltZyIsImRyb3B6b25lSGFuZGxlcnNDb21tb24iLCJ2YWx1ZVRhcmdldEZlaWxkIiwiaWREcm9wem9uZSIsImxlbmd0aCIsImFjY2VwdGVkRmlsZXMiLCJpbml0IiwiZmlsZSIsInhociIsImZvcm1EYXRhIiwiYXBwZW5kIiwiY3VycmVudF91cmwiLCJjdXJyZW50X2luZiIsImltYWdlcyIsImtpdHR5X2lkIiwicGVyaW9kc19pZCIsImRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwiLCJtYXhGaWxlcyIsImJyb29kX2lkIiwiaW5pdFRodW1ibmFpbCIsImZpbGVzIiwicmVtb3ZlRmlsZSIsImxvY2F0aW9uIiwicmVsb2FkIiwidXJsIiwiZXhlY1RodW1ibmFpbCIsImNvbnRleHQiLCJjdXJyZW50X2ltYWdlIiwiY3VycmVudEZpbGUiLCJuYW1lIiwic2l6ZSIsImFjY2VwdGVkIiwia2luZCIsInVwbG9hZCIsImZpbGVuYW1lIiwiZGF0YVVSTCIsInB1c2giLCJlbWl0IiwiY3JlYXRlVGh1bWJuYWlsRnJvbVVybCIsIm9wdGlvbnMiLCJ0aHVtYm5haWxXaWR0aCIsInRodW1ibmFpbEhlaWdodCIsInRodW1ibmFpbE1ldGhvZCIsInRodW1ibmFpbCIsImRlbGV0ZUJ5SWQiLCJtb2RhbFdpbmRvdyIsImlkX2ZpZWxkX25hbWUiLCJnZXRBdHRyaWJ1dGUiLCJFcnJvciIsImdldENoZWNrSW1ncyIsInJlc3VsdCIsImVhY2giLCJpbmRleCIsIml0ZW0iLCJjdXJyZW50SXRlbUpRIiwicHJvcCIsImRlbGV0ZUNvbmZpcm1hdGlvbnMiLCJ0YXJnZXRCdXR0b24iLCJkZWxldGVDb25maXJtYXRpb25zU3RhdGVzIiwiYnV0dG9uIiwiZmV0Y2hEZWxldGVJbWdzIiwiY2hlY2tzIiwibWFpbkhhbmRsZXIiLCJkZWxldGVDb25maXJtYXRpb25zUGVyaW9kIiwiZGVsZXRlSW1nIiwidGFibGVfbmFtZSIsImluaXRfb3dsIiwib3dsQ2Fyb3VzZWwiLCJsb29wIiwibWFyZ2luIiwibmF2IiwiYXV0b3BsYXkiLCJzbWFydFNwZWVkIiwiYXV0b3BsYXlUaW1lb3V0IiwicmVzcG9uc2l2ZSIsImRyb3B6b25lSGFuZGxlcnNLaXR0eSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUU3QkMsR0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JDLEVBQXhCLENBQTJCLGdCQUEzQixFQUNJLFVBQUFDLEtBQUs7QUFBQSxXQUFJRixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkcsSUFBcEIsQ0FBeUIsU0FBekIsRUFBb0NELEtBQUssQ0FBQ0UsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJDLE9BQWhFLENBQUo7QUFBQSxHQURUO0FBSUFOLEdBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCQyxFQUF4QixDQUEyQixnQkFBM0IsRUFDSSxVQUFBQyxLQUFLO0FBQUEsV0FBSUYsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JHLElBQXRCLENBQTJCLFNBQTNCLEVBQXNDRCxLQUFLLENBQUNFLGFBQU4sQ0FBb0JDLE9BQXBCLENBQTRCQyxPQUFsRSxDQUFKO0FBQUEsR0FEVDtBQUlBTixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk8sS0FBcEIsQ0FBMEIsWUFBTTtBQUU1QixRQUFNQyxJQUFJLEdBQUc7QUFDVCxlQUFTLE1BREE7QUFFVCx1QkFBaUJSLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CUyxHQUFwQixFQUZSO0FBR1QsNEJBQXNCVCxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QlMsR0FBekIsRUFIYjtBQUlULGtCQUFZVCxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkcsSUFBcEIsQ0FBeUIsU0FBekI7QUFKSCxLQUFiO0FBT0FPLFNBQUssQ0FBQyx1Q0FBRCxFQUEwQztBQUMzQ0MsWUFBTSxFQUFFLE1BRG1DO0FBRTNDQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixJQUFmLENBRnFDO0FBRzNDTyxhQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEI7QUFIa0MsS0FBMUMsQ0FBTDtBQU1BZixLQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QmdCLEtBQXhCLENBQThCLE1BQTlCO0FBRUgsR0FqQkQ7QUFtQkFoQixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQk8sS0FBdEIsQ0FBNEIsWUFBTTtBQUU5QixRQUFNQyxJQUFJLEdBQUc7QUFDVCxlQUFTLE1BREE7QUFFVCx1QkFBaUIsRUFGUjtBQUdULDRCQUFzQixFQUhiO0FBSVQsa0JBQVlSLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCRyxJQUF0QixDQUEyQixTQUEzQjtBQUpILEtBQWI7QUFPQU8sU0FBSyxDQUFDLHVDQUFELEVBQTBDO0FBQzNDQyxZQUFNLEVBQUUsTUFEbUM7QUFFM0NDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLElBQWYsQ0FGcUM7QUFHM0NPLGFBQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQjtBQUhrQyxLQUExQyxDQUFMO0FBTUFmLEtBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCZ0IsS0FBeEIsQ0FBOEIsTUFBOUI7QUFFSCxHQWpCRDtBQW1CSCxDQWhERDs7QUFrRGVqQixpRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQSxJQUFNa0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUV2QmpCLEdBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRTtBQUVNa0IseUJBSlIsR0FJd0JsQixDQUFDLENBQUMseUJBQUQsQ0FKekI7O0FBTVFtQixxQkFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBTW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRWtCVCxLQUFLLENBQUMsZ0RBQUQsRUFBbUQ7QUFDcEZDLGdDQUFNLEVBQUUsTUFENEU7QUFFcEZJLGlDQUFPLEVBQUU7QUFBRSw0Q0FBZ0I7QUFBbEI7QUFGMkUseUJBQW5ELENBRnZCOztBQUFBO0FBQUE7QUFBQSw2Q0FLVkssSUFMVTs7QUFBQTtBQUVSQyxrQ0FGUTtBQUFBLHlEQU9QQSxVQVBPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTnBCOztBQUFBLDhCQU1RRixTQU5SO0FBQUE7QUFBQTtBQUFBOztBQWlCUUcsdUJBakJSLEdBaUJzQixTQUFkQSxXQUFjLENBQUNkLElBQUQsRUFBZ0M7QUFBQSxrQkFBekJlLFFBQXlCLHVFQUFkQyxTQUFjO0FBRWhEaEIsa0JBQUksQ0FBQ2lCLE9BQUwsQ0FBYSxpQkFBbUI7QUFBQSxvQkFBakJDLEVBQWlCLFNBQWpCQSxFQUFpQjtBQUFBLG9CQUFiQyxPQUFhLFNBQWJBLE9BQWE7QUFFNUIsb0JBQU1DLFlBQVksR0FBRzVCLENBQUMsaUNBQTBCMEIsRUFBMUIsVUFBdEI7O0FBRUEsb0JBQUlDLE9BQU8sS0FBSyxHQUFoQixFQUFxQjtBQUVqQixzQkFBS0osUUFBUSxLQUFLQyxTQUFkLElBQTZCRCxRQUFRLElBQUksR0FBN0MsRUFBbUQ7QUFDL0NLLGdDQUFZLENBQUNDLElBQWIsQ0FBa0IsTUFBbEI7QUFDSCxtQkFGRCxNQUVPO0FBQ0hELGdDQUFZLENBQUNFLElBQWIsQ0FBa0IsTUFBbEI7QUFDSDtBQUVKLGlCQVJELE1BUU87QUFFSCxzQkFBS1AsUUFBUSxLQUFLQyxTQUFkLElBQTZCRCxRQUFRLElBQUksR0FBN0MsRUFBbUQ7QUFDL0NLLGdDQUFZLENBQUNFLElBQWIsQ0FBa0IsTUFBbEI7QUFDSCxtQkFGRCxNQUVPO0FBQ0hGLGdDQUFZLENBQUNDLElBQWIsQ0FBa0IsTUFBbEI7QUFDSDtBQUVKO0FBQ0osZUFyQkQ7QUF1QkgsYUExQ0g7O0FBQUEsMkJBNENFUCxXQTVDRjtBQUFBO0FBQUEsbUJBNENvQkgsU0FBUyxFQTVDN0I7O0FBQUE7QUFBQTtBQUFBO0FBOENFbkIsYUFBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLEVBQTdCLENBQWdDLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBQXlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUUvQjhCLDRDQUYrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBRU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGTTs7QUFBQSx3Q0FFL0JBLHNCQUYrQjtBQUFBO0FBQUE7QUFBQTs7QUFrQnJDLDBCQUFJYixhQUFhLENBQUNmLElBQWQsQ0FBbUIsTUFBbkIsS0FBOEJxQixTQUFsQyxFQUE2QztBQUN6Q04scUNBQWEsQ0FBQ2YsSUFBZCxDQUFtQixNQUFuQixFQUEyQixHQUEzQjtBQUNIOztBQUVLb0IsOEJBdEIrQixHQXNCcEJMLGFBQWEsQ0FBQ2YsSUFBZCxDQUFtQixNQUFuQixDQXRCb0I7O0FBd0JyQywwQkFBSW9CLFFBQVEsSUFBSSxHQUFoQixFQUFxQjtBQUNqQkwscUNBQWEsQ0FBQ2YsSUFBZCxDQUFtQixNQUFuQixFQUEyQixHQUEzQjtBQUNBZSxxQ0FBYSxDQUFDYyxJQUFkLENBQW1CLGlCQUFuQjtBQUNILHVCQUhELE1BR087QUFDSGQscUNBQWEsQ0FBQ2YsSUFBZCxDQUFtQixNQUFuQixFQUEyQixHQUEzQjtBQUNBZSxxQ0FBYSxDQUFDYyxJQUFkLENBQW1CLFVBQW5CO0FBQ0g7O0FBOUJvQztBQUFBLDZCQWdDL0JELHNCQUFzQixFQWhDUzs7QUFBQTtBQUFBLHFDQWtDckNULFdBbENxQztBQUFBO0FBQUEsNkJBa0NuQkgsU0FBUyxFQWxDVTs7QUFBQTtBQUFBO0FBQUEscUNBa0NOSSxRQWxDTTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXpDOztBQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELEdBQUQ7QUFzRkF2QixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQk8sS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUEyQixrQkFBTUwsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFakJRLEtBQUssQ0FBQyx3Q0FBRCxFQUEyQztBQUNsREMsc0JBQU0sRUFBRSxNQUQwQztBQUVsREMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQyw4QkFBWVosS0FBSyxDQUFDK0IsTUFBTixDQUFhNUIsT0FBYixDQUFxQjZCO0FBQWxDLGlCQUFmLENBRjRDO0FBR2xEbkIsdUJBQU8sRUFBRTtBQUFFLGtDQUFnQjtBQUFsQjtBQUh5QyxlQUEzQyxDQUZZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUgsQ0FsR0Q7O0FBb0dlRSwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBa0IsUUFBUSxDQUFDQyxZQUFULEdBQXdCLEtBQXhCO0FBRU8sSUFBTUMsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT0MsU0FBUCxFQUFrQkMsY0FBbEIsRUFBa0NDLFdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0NDLGtCQUEvQyw4REFBd0QsRUFBeEQ7O0FBRXRCQyxzQkFGc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUVULGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFDZkEsS0FBSyxDQUFDbEIsT0FBTixDQUFjLFVBQUFtQixPQUFPO0FBQUEsaUNBQUlDLGVBQWUsQ0FBQ04sY0FBRCxFQUFpQkMsV0FBakIsRUFBOEJJLE9BQU8sQ0FBQ2xCLEVBQXRDLENBQW5CO0FBQUEseUJBQXJCLENBRGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUzs7QUFBQSw4QkFFdEJnQixVQUZzQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSwyQkFLdEJBLFVBTHNCO0FBQUE7QUFBQSxtQkFLTEksUUFBUSxDQUFDUixTQUFELEVBQVlHLE1BQVosQ0FMSDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQkosZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCO0FBU0EsSUFBTVUsc0JBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT1IsY0FBUCxFQUF1QkMsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQzVCSyxlQUFlLENBQUNOLGNBQUQsRUFBaUJDLFdBQWpCLEVBQThCLFFBQTlCLENBRGE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUF0Qk8sc0JBQXNCO0FBQUE7QUFBQTtBQUFBLEdBQTVCOztBQUdQLElBQU1GLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHLGtCQUFPTixjQUFQLEVBQXVCQyxXQUF2QixFQUFvQ1EsZ0JBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVkQyxzQkFGYyxjQUVHVixjQUZILGNBRXFCUyxnQkFGckI7O0FBSXBCLGdCQUFJaEQsQ0FBQyxDQUFDaUQsVUFBRCxDQUFELENBQWNDLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFFNUIsa0JBQUlmLFFBQUosQ0FBYWMsVUFBYixFQUF5QjtBQUVyQkUsNkJBQWEsRUFBRSxTQUZNO0FBSXJCQyxvQkFBSSxFQUFFLGdCQUFZO0FBQ2QsdUJBQUtuRCxFQUFMLENBQVEsU0FBUixFQUFtQixVQUFDb0QsSUFBRCxFQUFPQyxHQUFQLEVBQVlDLFFBQVosRUFBeUI7QUFDeENBLDRCQUFRLENBQUNDLE1BQVQsQ0FBZ0JoQixXQUFoQixFQUE2QlEsZ0JBQTdCO0FBQ0gsbUJBRkQ7QUFHSDtBQVJvQixlQUF6QjtBQVlIOztBQWxCbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZkgsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7QUFzQkEsSUFBTUMsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsa0JBQU9SLFNBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQkcsa0JBQWxCLDhEQUEyQixFQUEzQjtBQUVUZ0IsdUJBRlMsR0FFSyxtRUFGTDtBQUdUQyx1QkFIUyxHQUdLO0FBQUVwQix1QkFBUyxFQUFUQSxTQUFGO0FBQWFHLG9CQUFNLEVBQU5BO0FBQWIsYUFITDtBQUlUMUIsbUJBSlMsR0FJSztBQUFFLDhCQUFnQjtBQUFsQixhQUpMO0FBQUE7QUFBQSxtQkFNYUwsS0FBSyxDQUFDK0MsV0FBRCxFQUFjO0FBQ3pDOUMsb0JBQU0sRUFBRSxNQURpQztBQUV6Q0Msa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU0QyxXQUFmLENBRm1DO0FBR3pDM0MscUJBQU8sRUFBRUE7QUFIZ0MsYUFBZCxDQU5sQjs7QUFBQTtBQUFBO0FBQUEsa0NBVVRLLElBVlM7O0FBQUE7QUFNVHVDLGtCQU5TO0FBQUEsOENBWU5BLE1BWk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUmIsUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBLElBQU1ULGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsa0JBQU9DLFNBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXJCSCxvQkFBUSxDQUFDQyxZQUFULEdBQXdCLEtBQXhCOztBQUVNTSxzQkFKZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBSUYsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQUNmQSxLQUFLLENBQUNsQixPQUFOLENBQWMsVUFBQW1CLE9BQU87QUFBQSxpQ0FDakJDLGVBQWUsQ0FBQ0QsT0FBTyxDQUFDZ0IsUUFBVCxFQUFtQmhCLE9BQU8sQ0FBQ2lCLFVBQTNCLENBREU7QUFBQSx5QkFBckIsQ0FEZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpFOztBQUFBLDhCQUlmbkIsVUFKZTtBQUFBO0FBQUE7QUFBQTs7QUFBQSwyQkFTZkEsVUFUZTtBQUFBO0FBQUEsbUJBU0VJLFFBQVEsQ0FBQ1IsU0FBRCxDQVRWOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCRCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEI7O0FBYUEsSUFBTVEsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsa0JBQU9lLFFBQVAsRUFBaUJDLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVoQlosc0JBRmdCLDJCQUVjVyxRQUZkLGVBRTJCQyxVQUYzQjs7QUFJcEIsZ0JBQUk3RCxDQUFDLENBQUNpRCxVQUFELENBQUQsQ0FBY0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUU1QixrQkFBSWYsUUFBSixDQUFhYyxVQUFiLEVBQXlCO0FBRXJCRSw2QkFBYSxFQUFFLFNBRk07QUFJckJDLG9CQUFJLEVBQUUsZ0JBQVk7QUFDZCx1QkFBS25ELEVBQUwsQ0FBUSxTQUFSLEVBQW1CLFVBQUNvRCxJQUFELEVBQU9DLEdBQVAsRUFBWUMsUUFBWixFQUF5QjtBQUN4Q0EsNEJBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFoQixFQUE0QkksUUFBNUI7QUFDQUwsNEJBQVEsQ0FBQ0MsTUFBVCxDQUFnQixXQUFoQixFQUE2QkssVUFBN0I7QUFDSCxtQkFIRDtBQUlIO0FBVG9CLGVBQXpCO0FBYUg7O0FBbkJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmaEIsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7QUF1QkEsSUFBTUMsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsa0JBQU9SLFNBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVRtQix1QkFGUyxHQUVLLG1FQUZMO0FBR1RDLHVCQUhTLEdBR0s7QUFBRXBCLHVCQUFTLEVBQVRBO0FBQUYsYUFITDtBQUlUdkIsbUJBSlMsR0FJSztBQUFFLDhCQUFnQjtBQUFsQixhQUpMO0FBQUE7QUFBQSxtQkFNYUwsS0FBSyxDQUFDK0MsV0FBRCxFQUFjO0FBQ3pDOUMsb0JBQU0sRUFBRSxNQURpQztBQUV6Q0Msa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU0QyxXQUFmLENBRm1DO0FBR3pDM0MscUJBQU8sRUFBRUE7QUFIZ0MsYUFBZCxDQU5sQjs7QUFBQTtBQUFBO0FBQUEsa0NBVVRLLElBVlM7O0FBQUE7QUFNVHVDLGtCQU5TO0FBQUEsOENBWU5BLE1BWk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUmIsUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkOztBQWdCZVQsK0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREEsSUFBTXlCLCtCQUErQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXBDM0Isb0JBQVEsQ0FBQ0MsWUFBVCxHQUF3QixLQUF4Qjs7QUFFTU0sc0JBSjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FJakIsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQUFlQSxLQUFLLENBQUNsQixPQUFOLENBQWMsVUFBQW1CLE9BQU87QUFBQSxpQ0FBSUMsZUFBZSxDQUFDRCxPQUFELENBQW5CO0FBQUEseUJBQXJCLENBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKaUI7O0FBQUEsOEJBSTlCRixVQUo4QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSwyQkFNOUJBLFVBTjhCO0FBQUE7QUFBQSxtQkFNYkksUUFBUSxFQU5LOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQS9CZ0IsK0JBQStCO0FBQUE7QUFBQTtBQUFBLEdBQXJDOztBQVVBLElBQU1qQixlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT0QsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaEJLLHNCQUZnQiwwQkFFYUwsT0FBTyxDQUFDbEIsRUFGckI7O0FBSXBCLGdCQUFJMUIsQ0FBQyxDQUFDaUQsVUFBRCxDQUFELENBQWNDLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFFNUIsa0JBQUlmLFFBQUosQ0FBYWMsVUFBYixFQUF5QjtBQUVyQkUsNkJBQWEsRUFBRSxTQUZNO0FBR3JCWSx3QkFBUSxFQUFFLENBSFc7QUFLckJYLG9CQUFJLEVBQUUsZ0JBQVk7QUFBQTs7QUFDZCx1QkFBS25ELEVBQUwsQ0FBUSxTQUFSLEVBQW1CLFVBQUNvRCxJQUFELEVBQU9DLEdBQVAsRUFBWUMsUUFBWixFQUF5QjtBQUN4Q0EsNEJBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFoQixFQUE0QlosT0FBTyxDQUFDbEIsRUFBcEM7QUFDQTZCLDRCQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEJaLE9BQU8sQ0FBQ29CLFFBQXBDO0FBQ0gsbUJBSEQ7QUFJQSx1QkFBSy9ELEVBQUwsQ0FBUSxXQUFSLEVBQXFCLFVBQUNvRCxJQUFELEVBQVU7QUFDM0Isd0JBQUksQ0FBRUEsSUFBSSxDQUFDWSxhQUFQLElBQTBCLEtBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQVgsS0FBaUIsSUFBL0MsRUFBc0Q7QUFDbEQsMkJBQUksQ0FBQ0MsVUFBTCxDQUFnQixLQUFJLENBQUNELEtBQUwsQ0FBVyxDQUFYLENBQWhCO0FBQ0g7QUFDSixtQkFKRDtBQUtBLHVCQUFLakUsRUFBTCxDQUFRLFNBQVIsRUFBbUI7QUFBQSwyQkFBTW1FLFFBQVEsQ0FBQ0MsTUFBVCxFQUFOO0FBQUEsbUJBQW5COztBQUNBLHNCQUFLekIsT0FBTyxJQUFJLElBQVosSUFBc0JBLE9BQU8sQ0FBQzBCLEdBQVIsSUFBZSxJQUF6QyxFQUFnRDtBQUM1Q0MsaUNBQWEsQ0FBQyxJQUFELEVBQU8zQixPQUFQLENBQWI7QUFDSDtBQUNKO0FBbkJvQixlQUF6QjtBQXVCSDs7QUE3Qm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZDLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7O0FBaUNBLElBQU1DLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVUVyx1QkFGUyxHQUVLLDZDQUZMO0FBR1QxQyxtQkFIUyxHQUdLO0FBQUUsOEJBQWdCO0FBQWxCLGFBSEw7QUFBQTtBQUFBLG1CQUthTCxLQUFLLENBQUMrQyxXQUFELEVBQWM7QUFDekM5QyxvQkFBTSxFQUFFLE1BRGlDO0FBRXpDSSxxQkFBTyxFQUFFQTtBQUZnQyxhQUFkLENBTGxCOztBQUFBO0FBQUE7QUFBQSxrQ0FRVEssSUFSUzs7QUFBQTtBQUtUdUMsa0JBTFM7QUFBQSw4Q0FVTkEsTUFWTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFSYixRQUFRO0FBQUE7QUFBQTtBQUFBLEdBQWQsQyxDQWNBOzs7QUFDQSxJQUFNeUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQVVDLGFBQVYsRUFBNEI7QUFFOUMsTUFBSUMsV0FBVyxHQUFHO0FBQ2RDLFFBQUksRUFBRUYsYUFBYSxDQUFDRSxJQUROO0FBRWRDLFFBQUksRUFBRUgsYUFBYSxDQUFDRyxJQUZOO0FBR2RDLFlBQVEsRUFBRSxJQUhJO0FBSWRDLFFBQUksRUFBRSxPQUpRO0FBS2RDLFVBQU0sRUFBRTtBQUNKQyxjQUFRLEVBQUVQLGFBQWEsQ0FBQ0U7QUFEcEIsS0FMTTtBQVFkTSxXQUFPLEVBQUVSLGFBQWEsQ0FBQ0g7QUFSVCxHQUFsQjtBQVdBRSxTQUFPLENBQUNOLEtBQVIsQ0FBY2dCLElBQWQsQ0FBbUJSLFdBQW5CO0FBQ0FGLFNBQU8sQ0FBQ1csSUFBUixDQUFhLFdBQWIsRUFBMEJULFdBQTFCO0FBQ0FGLFNBQU8sQ0FBQ1ksc0JBQVIsQ0FDSVYsV0FESixFQUVJRixPQUFPLENBQUNhLE9BQVIsQ0FBZ0JDLGNBRnBCLEVBR0lkLE9BQU8sQ0FBQ2EsT0FBUixDQUFnQkUsZUFIcEIsRUFJSWYsT0FBTyxDQUFDYSxPQUFSLENBQWdCRyxlQUpwQixFQUtJaEIsT0FMSixFQU1JLFVBQUFpQixTQUFTLEVBQUk7QUFDVGpCLFdBQU8sQ0FBQ1csSUFBUixDQUFhLFdBQWIsRUFBMEJULFdBQTFCLEVBQXVDZSxTQUF2QztBQUNBakIsV0FBTyxDQUFDVyxJQUFSLENBQWEsVUFBYixFQUF5QlQsV0FBekI7QUFDSCxHQVRMO0FBWUgsQ0EzQkQ7O0FBNkJlWiw4RkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQSxJQUFNNEIsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsa0JBQU9DLFdBQVAsRUFBb0JyQixHQUFwQixFQUF5QnNCLGFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVYbEUsY0FGVyxHQUVOeEIsS0FBSyxDQUFDK0IsTUFBTixDQUFhNEQsWUFBYixDQUEwQkQsYUFBMUIsQ0FGTTtBQUFBO0FBQUE7QUFBQSxtQkFNTGxGLEtBQUssQ0FBQzRELEdBQUQsRUFBTTtBQUNiM0Qsb0JBQU0sRUFBRSxNQURLO0FBRWJDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVZLGtCQUFFLEVBQUZBO0FBQUYsZUFBZixDQUZPO0FBR2JYLHFCQUFPLEVBQUU7QUFBRSxnQ0FBZ0I7QUFBbEI7QUFISSxhQUFOLENBTkE7O0FBQUE7QUFBQTtBQUFBLG1CQVlMO0FBQUE7QUFBQSxvQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBQVk0RSxXQUFXLENBQUMzRSxLQUFaLENBQWtCLE1BQWxCLENBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBRCxJQVpLOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFlTCxJQUFJOEUsS0FBSixDQUFVLHVDQUFWLENBZks7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkosVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7QUFtQkEsSUFBTUssWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsa0JBQU9yRSxFQUFQLEVBQVdrRSxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUViSSxrQkFGYSxHQUVKLEVBRkk7QUFJakJoRyxhQUFDLGlCQUFVNEYsYUFBVixnQkFBNkJsRSxFQUE3QixPQUFELENBQXFDdUUsSUFBckMsQ0FBMEMsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWlCO0FBQ3ZELGtCQUFJQyxhQUFhLEdBQUdwRyxDQUFDLENBQUNtRyxJQUFELENBQXJCO0FBQ0Esa0JBQUlDLGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQixTQUFuQixDQUFKLEVBQ0lMLE1BQU0sQ0FBQ2QsSUFBUCxDQUFZa0IsYUFBYSxDQUFDM0YsR0FBZCxFQUFaO0FBQ1AsYUFKRDtBQUppQiw4Q0FVVnVGLE1BVlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWkQsWUFBWTtBQUFBO0FBQUE7QUFBQSxHQUFsQjs7QUFjTyxJQUFNTyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNYLFdBQUQsRUFBY1ksWUFBZCxFQUE0QmpDLEdBQTVCLEVBQWlDc0IsYUFBakMsRUFBbUQ7QUFFbEZXLGNBQVksQ0FBQ2hHLEtBQWIsQ0FBbUI7QUFBQSxXQUFNbUYsVUFBVSxDQUFDQyxXQUFELEVBQWNyQixHQUFkLEVBQW1Cc0IsYUFBbkIsQ0FBaEI7QUFBQSxHQUFuQjtBQUVBRCxhQUFXLENBQUMxRixFQUFaLENBQWUsZ0JBQWYsRUFDSSxVQUFBQyxLQUFLO0FBQUEsV0FBSXFHLFlBQVksQ0FBQ3BHLElBQWIsQ0FBa0J5RixhQUFsQixFQUFpQzFGLEtBQUssQ0FBQ0UsYUFBTixDQUFvQnlGLFlBQXBCLENBQWlDRCxhQUFqQyxDQUFqQyxDQUFKO0FBQUEsR0FEVDtBQUdILENBUE07QUFTQSxJQUFNWSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLEdBQU07QUFFM0MsTUFBSWIsV0FBVyxHQUFLM0YsQ0FBQyxDQUFDLG1CQUFELENBQXJCO0FBQ0EsTUFBSXlHLE1BQU0sR0FBVXpHLENBQUMsQ0FBQyxlQUFELENBQXJCO0FBQ0EsTUFBSTRGLGFBQWEsR0FBRyxVQUFwQjtBQUNBLE1BQUl0QixHQUFHLEdBQWEscURBQXBCOztBQUVBLE1BQU1vQyxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBRyxrQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaEJqRCx5QkFGZ0IsR0FFRjtBQUFFaUQsc0JBQU0sRUFBTkE7QUFBRixlQUZFO0FBR2hCNUYscUJBSGdCLEdBR0Y7QUFBRSxnQ0FBZ0I7QUFBbEIsZUFIRTtBQUtwQkwsbUJBQUssQ0FBQzRELEdBQUQsRUFBTTtBQUFFM0Qsc0JBQU0sRUFBRSxNQUFWO0FBQWtCQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTRDLFdBQWYsQ0FBeEI7QUFBcUQzQyx1QkFBTyxFQUFFQTtBQUE5RCxlQUFOLENBQUw7O0FBTG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWYyRixlQUFlO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQVNBLE1BQU1FLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0diLFlBQVksQ0FBQyxNQUFELEVBQVNILGFBQVQsQ0FEZjs7QUFBQTtBQUNaZSxvQkFEWTtBQUFBO0FBQUEscUJBR1ZELGVBQWUsQ0FBQ0MsTUFBRCxDQUhMOztBQUFBO0FBQUE7QUFBQSxxQkFJVjtBQUFBO0FBQUEsc0NBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBEQUFZaEIsV0FBVyxDQUFDM0UsS0FBWixDQUFrQixNQUFsQixDQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUQsSUFKVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYNEYsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFPQUgsUUFBTSxDQUFDbEcsS0FBUCxDQUFhLFVBQUFMLEtBQUs7QUFBQSxXQUFJMEcsV0FBVyxDQUFDMUcsS0FBRCxDQUFmO0FBQUEsR0FBbEI7QUFFSCxDQXpCTTtBQTJCQSxJQUFNMkcseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixHQUFNO0FBRTNDLE1BQUlsQixXQUFXLEdBQUszRixDQUFDLENBQUMsb0JBQUQsQ0FBckI7QUFDQSxNQUFJeUcsTUFBTSxHQUFVekcsQ0FBQyxDQUFDLGdCQUFELENBQXJCO0FBQ0EsTUFBSTRGLGFBQWEsR0FBRyxVQUFwQjtBQUNBLE1BQUl0QixHQUFHLEdBQWEsdURBQXBCLENBTDJDLENBTzNDOztBQUNBcUIsYUFBVyxDQUFDMUYsRUFBWixDQUFlLGdCQUFmLEVBQ0ksVUFBQUMsS0FBSztBQUFBLFdBQUl1RyxNQUFNLENBQUN0RyxJQUFQLENBQVl5RixhQUFaLEVBQ0wxRixLQUFLLENBQUNFLGFBQU4sQ0FBb0J5RixZQUFwQixDQUFpQ0QsYUFBakMsQ0FESyxDQUFKO0FBQUEsR0FEVDs7QUFJQSxNQUFNYyxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBRyxrQkFBT0MsTUFBUCxFQUFlakYsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaEJnQyx5QkFGZ0IsR0FFRjtBQUFFaUQsc0JBQU0sRUFBTkEsTUFBRjtBQUFVakYsa0JBQUUsRUFBRkE7QUFBVixlQUZFO0FBR2hCWCxxQkFIZ0IsR0FHRjtBQUFFLGdDQUFnQjtBQUFsQixlQUhFO0FBS3BCTCxtQkFBSyxDQUFDNEQsR0FBRCxFQUFNO0FBQUUzRCxzQkFBTSxFQUFFLE1BQVY7QUFBa0JDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlNEMsV0FBZixDQUF4QjtBQUFxRDNDLHVCQUFPLEVBQUVBO0FBQTlELGVBQU4sQ0FBTDs7QUFMb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZjJGLGVBQWU7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBU0EsTUFBTUUsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUcsa0JBQU0xRyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNad0IsZ0JBRFksR0FDSHhCLEtBQUssQ0FBQytCLE1BQU4sQ0FBYTRELFlBQWIsQ0FBMEJELGFBQTFCLENBREc7QUFBQTtBQUFBLHFCQUVHRyxZQUFZLENBQUNyRSxFQUFELEVBQUtrRSxhQUFMLENBRmY7O0FBQUE7QUFFWmUsb0JBRlk7QUFBQTtBQUFBLHFCQUlWRCxlQUFlLENBQUNDLE1BQUQsRUFBU2pGLEVBQVQsQ0FKTDs7QUFBQTtBQUFBO0FBQUEscUJBS1Y7QUFBQTtBQUFBLHNDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFBWWlFLFdBQVcsQ0FBQzNFLEtBQVosQ0FBa0IsTUFBbEIsQ0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFELElBTFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWDRGLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBUUFILFFBQU0sQ0FBQ2xHLEtBQVAsQ0FBYSxVQUFBTCxLQUFLO0FBQUEsV0FBSTBHLFdBQVcsQ0FBQzFHLEtBQUQsQ0FBZjtBQUFBLEdBQWxCO0FBRUgsQ0EvQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRVAsSUFBSW9FLEdBQUcsR0FBRSx3REFBVDs7QUFFQSxJQUFNd0MsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ25CLFdBQUQsRUFBY2MsTUFBZCxFQUFzQmIsYUFBdEIsRUFBcUNtQixVQUFyQyxFQUFvRDtBQUVsRTtBQUNBcEIsYUFBVyxDQUFDMUYsRUFBWixDQUFlLGdCQUFmLEVBQ0ksVUFBQUMsS0FBSztBQUFBLFdBQUl1RyxNQUFNLENBQUN0RyxJQUFQLENBQVl5RixhQUFaLEVBQ0wxRixLQUFLLENBQUNFLGFBQU4sQ0FBb0J5RixZQUFwQixDQUFpQ0QsYUFBakMsQ0FESyxDQUFKO0FBQUEsR0FEVDs7QUFJQSxNQUFNZ0IsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUcsa0JBQU0xRyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNad0IsZ0JBRFksR0FDSHhCLEtBQUssQ0FBQytCLE1BQU4sQ0FBYTRELFlBQWIsQ0FBMEJELGFBQTFCLENBREc7QUFBQTtBQUFBLHFCQUVHRyxZQUFZLENBQUNyRSxFQUFELEVBQUtrRSxhQUFMLENBRmY7O0FBQUE7QUFFWmUsb0JBRlk7QUFBQTtBQUFBLHFCQUlWRCxlQUFlLENBQUNDLE1BQUQsRUFBU3JDLEdBQVQsRUFBY3lDLFVBQWQsQ0FKTDs7QUFBQTtBQUFBO0FBQUEscUJBS1Y7QUFBQTtBQUFBLHNDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFBWXBCLFdBQVcsQ0FBQzNFLEtBQVosQ0FBa0IsTUFBbEIsQ0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFELElBTFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWDRGLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBUUFILFFBQU0sQ0FBQ2xHLEtBQVAsQ0FBYSxVQUFBTCxLQUFLO0FBQUEsV0FBSTBHLFdBQVcsQ0FBQzFHLEtBQUQsQ0FBZjtBQUFBLEdBQWxCO0FBRUgsQ0FqQkQsQyxDQW1CQTs7O0FBQ0EsSUFBTTZGLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHLGtCQUFPckUsRUFBUCxFQUFXa0UsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFYkksa0JBRmEsR0FFSixFQUZJO0FBSWpCaEcsYUFBQyxpQkFBVTRGLGFBQVYsZ0JBQTZCbEUsRUFBN0IsT0FBRCxDQUFxQ3VFLElBQXJDLENBQTBDLFVBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUN2RCxrQkFBSUMsYUFBYSxHQUFHcEcsQ0FBQyxDQUFDbUcsSUFBRCxDQUFyQjtBQUNBLGtCQUFJQyxhQUFhLENBQUNDLElBQWQsQ0FBbUIsU0FBbkIsQ0FBSixFQUNJTCxNQUFNLENBQUNkLElBQVAsQ0FBWWtCLGFBQWEsQ0FBQzNGLEdBQWQsRUFBWjtBQUNQLGFBSkQ7QUFKaUIsOENBVVZ1RixNQVZVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVpELFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEI7O0FBY0EsSUFBTVcsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsa0JBQU9DLE1BQVAsRUFBZXJDLEdBQWYsRUFBb0J5QyxVQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaEJyRCx1QkFGZ0IsR0FFRjtBQUFFaUQsb0JBQU0sRUFBTkEsTUFBRjtBQUFVSSx3QkFBVSxFQUFWQTtBQUFWLGFBRkU7QUFHaEJoRyxtQkFIZ0IsR0FHRjtBQUFFLDhCQUFnQjtBQUFsQixhQUhFO0FBS3BCTCxpQkFBSyxDQUFDNEQsR0FBRCxFQUFNO0FBQUUzRCxvQkFBTSxFQUFFLE1BQVY7QUFBa0JDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlNEMsV0FBZixDQUF4QjtBQUFxRDNDLHFCQUFPLEVBQUVBO0FBQTlELGFBQU4sQ0FBTDs7QUFMb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZjJGLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7O0FBU2VJLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkJoSCxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1CaUgsV0FBbkIsQ0FBK0I7QUFDM0JDLFFBQUksRUFBRSxJQURxQjtBQUUzQkMsVUFBTSxFQUFFLEVBRm1CO0FBRzNCQyxPQUFHLEVBQUUsS0FIc0I7QUFJM0JDLFlBQVEsRUFBRSxJQUppQjtBQUszQkMsY0FBVSxFQUFFLElBTGU7QUFNM0JDLG1CQUFlLEVBQUUsSUFOVTtBQU8zQkMsY0FBVSxFQUFFO0FBQ1IsU0FBRztBQUNDN0UsYUFBSyxFQUFFO0FBRFIsT0FESztBQUlSLFdBQUs7QUFDREEsYUFBSyxFQUFFO0FBRE4sT0FKRztBQU9SLFlBQU07QUFDRkEsYUFBSyxFQUFFO0FBREw7QUFQRTtBQVBlLEdBQS9CO0FBbUJILENBcEJEOztBQXNCZXFFLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBakUsMEdBQXNCLENBQUMsYUFBRCxFQUFnQixRQUFoQixDQUF0QixDLENBRUE7O0FBQ0EwRSwyRkFBcUIsQ0FBQyxVQUFELENBQXJCLEMsQ0FFQTs7QUFDQW5CLDRGQUFtQixDQUNmdEcsQ0FBQyxDQUFDLG1CQUFELENBRGMsRUFFZkEsQ0FBQyxDQUFDLGVBQUQsQ0FGYyxFQUdmLG9DQUhlLEVBSWYsVUFKZSxDQUFuQixDLENBTUE7O0FBQ0FzRyw0RkFBbUIsQ0FDZnRHLENBQUMsQ0FBQyxtQkFBRCxDQURjLEVBRWZBLENBQUMsQ0FBQyxlQUFELENBRmMsRUFHZiwrQ0FIZSxFQUlmLFVBSmUsQ0FBbkIsQyxDQU1BOztBQUNBNkcsa0dBQXlCLEcsQ0FFekI7O0FBQ0FMLGtHQUF5QixHLENBRXpCOztBQUNBMUMscUdBQStCLEcsQ0FFL0I7O0FBQ0FrRCw2RUFBUSxHLENBRVI7O0FBQ0FGLG9GQUFTLENBQ0w5RyxDQUFDLENBQUMsaUJBQUQsQ0FESSxFQUVMQSxDQUFDLENBQUMsYUFBRCxDQUZJLEVBR0wsVUFISyxFQUlMLFVBSkssQ0FBVCxDLENBTUE7O0FBQ0E4RyxvRkFBUyxDQUNMOUcsQ0FBQyxDQUFDLHVCQUFELENBREksRUFFTEEsQ0FBQyxDQUFDLG9CQUFELENBRkksRUFHTCxVQUhLLEVBSUwsV0FKSyxDQUFULEMsQ0FNQTs7QUFDQWlCLDZEQUFZLEcsQ0FFWjs7QUFDQWxCLDZEQUFrQixHIiwiZmlsZSI6Ii4va2l0dHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9raXR0eS5qc1wiKTtcbiIsImNvbnN0IGluaXRIYW5kbGVyc0Jhbm5lciA9ICgpID0+IHtcblxuICAgICQoJyNtb2RhbEN1c3RvbUJhbm5lcicpLm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiAkKCcja2l0dHlUb0Jhbm5lcicpLmF0dHIoJ2tpdHR5SWQnLCBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQua2l0dHlJZClcbiAgICApXG5cbiAgICAkKCcjbW9kYWxSZW1vdmVCYW5uZXInKS5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gJCgnI2tpdHR5RnJvbUJhbm5lcicpLmF0dHIoJ2tpdHR5SWQnLCBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQua2l0dHlJZClcbiAgICApXG5cbiAgICAkKCcja2l0dHlUb0Jhbm5lcicpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgJ21vZGFsJzogJ3Nob3cnLFxuICAgICAgICAgICAgJ2Jhbm5lcl9oZWFkZXInOiAkKCcjYmFubmVyX2hlYWRlcicpLnZhbCgpLFxuICAgICAgICAgICAgJ2Jhbm5lcl9kZXNjcmlwdGlvbic6ICQoJyNiYW5uZXJfZGVzY3JpcHRpb24nKS52YWwoKSxcbiAgICAgICAgICAgICdraXR0eV9pZCc6ICQoJyNraXR0eVRvQmFubmVyJykuYXR0cigna2l0dHlJZCcpXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZmV0Y2goJ3NyYy9EQi9raXR0eV9DUlVEL3JlcGxhY2VUb0Jhbm5lci5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnI21vZGFsQ3VzdG9tQmFubmVyJykubW9kYWwoJ2hpZGUnKVxuXG4gICAgfSlcblxuICAgICQoJyNraXR0eUZyb21CYW5uZXInKS5jbGljaygoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICdtb2RhbCc6ICdoaWRlJyxcbiAgICAgICAgICAgICdiYW5uZXJfaGVhZGVyJzogJycsXG4gICAgICAgICAgICAnYmFubmVyX2Rlc2NyaXB0aW9uJzogJycsXG4gICAgICAgICAgICAna2l0dHlfaWQnOiAkKCcja2l0dHlGcm9tQmFubmVyJykuYXR0cigna2l0dHlJZCcpXG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCgnc3JjL0RCL2tpdHR5X0NSVUQvcmVwbGFjZVRvQmFubmVyLnBocCcsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgfSlcblxuICAgICAgICAkKCcjbW9kYWxSZW1vdmVCYW5uZXInKS5tb2RhbCgnaGlkZScpXG5cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRIYW5kbGVyc0Jhbm5lciIsImNvbnN0IGluaXRIYW5kbGVycyA9ICgpID0+IHtcblxuICAgICQoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIC8qINCh0LrRgNGL0LLQsNC10Lwg0LLQutC70LDQtNC60Lgg0YDQsNGB0L/RgNC+0LTQsNC90L3Ri9GFINC/0L7QvNC10YLQvtCyICAqL1xuICAgIFxuICAgICAgICBjb25zdCBhcmNoaXZlX3BpbGxzID0gJCgnI3YtcGlsbHMtY29tbW9uLWFyY2hpdmUnKVxuICAgIFxuICAgICAgICBjb25zdCBmZXRjaEluZm8gPSBhc3luYyAoKSA9PiB7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBicm9vZHNJbmZvID0gYXdhaXQgKGF3YWl0IGZldGNoKFwic3JjL0RCL2tpdHR5X0NSVUQvYnJvb2RfQ1JVRC9icm9vZF9nZXRfYWxsLnBocFwiLCB7IFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgICAgICB9KSkuanNvbigpXG4gICAgXG4gICAgICAgICAgICByZXR1cm4gYnJvb2RzSW5mb1xuICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZVBpbGxzID0gKGRhdGEsIGF0dHJTaG93ID0gdW5kZWZpbmVkKSA9PiB7XG4gICAgXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKHtpZCwgYXJjaGl2ZX0pID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50X3BpbGwgPSAkKGAjdi1waWxscy1oZWFkaW5nQnJvb2RfJHtpZH0tdGFiYClcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoYXJjaGl2ZSA9PT0gJzAnKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICgoYXR0clNob3cgPT09IHVuZGVmaW5lZCkgfHwgKGF0dHJTaG93ID09ICcwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcGlsbC5oaWRlKFwic2xvd1wiKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9waWxsLnNob3coXCJzbG93XCIpXG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoKGF0dHJTaG93ID09PSB1bmRlZmluZWQpIHx8IChhdHRyU2hvdyA9PSAnMCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3BpbGwuc2hvdyhcInNsb3dcIilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcGlsbC5oaWRlKFwic2xvd1wiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBoYW5kbGVQaWxscyhhd2FpdCBmZXRjaEluZm8oKSlcbiAgICBcbiAgICAgICAgJCgnI3YtcGlsbHMtY29tbW9uLWFyY2hpdmUnKS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZldGNoQXJjaGl2ZURhdGFCcm9vZHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBcbiAgICAgICAgICAgICAgICAvLyAgICArMC4g0JfQsNC70LjRgtGMINC70L7QutCw0LvQuNC30LDRhtC40Y4g0LDQstGC0L7RgNC40LfQsNGG0LjQuCDQuCDQtNC+0YDQsNCx0L7RgtCw0YLRjCDQtdC1INGE0YPQvdC60YbQuNC+0L3QsNC7LlxuICAgICAgICAgICAgICAgIC8vICAgIDEuINCU0LXQu9Cw0YLRjCBKUXVlcnkt0LfQsNC/0YDQvtGBINCy0LrQu9Cw0LTQvtC6LXBpbGxzINGBIGlkINCy0LjQtNCwIHYtcGlsbHMtaGVhZGluZ0Jyb29kICsgJGJyb29kX2lkIFxuICAgICAgICAgICAgICAgIC8vICAgICAgINC4INC30LDQsdC40YDQsNGC0Ywg0LrRgNCw0LnQvdGO0Y4g0YHQv9GA0LDQstCwINCy0LrQu9Cw0LTQutGDLCDRh9GC0L7QsdGLINC/0L7RgdC70LUg0L3QtdC1IGFwcGVuZC3QvtC8INGA0LDQt9C80LXRidCw0YLRjCDQv9C+0LTQs9GA0YPQttCw0LXQvNGL0Lkg0LrQvtC90YLQtdC90YIuXG4gICAgICAgICAgICAgICAgLy8gICAgMi4g0JTQsNC70LXQtSDQsiDQsNGB0LjQvdGF0YDQvtC90L3QviDRgNC10LbQuNC80LUg0L/QvtC00LPRgNGD0LbQsNGC0Ywg0LTQsNC90L3Ri9C1INC/0L7QvNC10YLQvtCyINC4INGE0L7RgNC80LjRgNC+0LLQsNGC0Ywg0YDQsNC30LzQtdGC0LrRgyAo0L3QsCDQstGA0LXQvNGPIFxuICAgICAgICAgICAgICAgIC8vICAgICAgINGE0L7RgNC80LjRgNC+0LLQsNC90LjRjyDQutGA0YPRgtC40YLRjCDQv9GA0LXQu9C+0LTQtdGAKS4g0KTQvtGA0LzQuNGA0L7QstCw0YLRjCDQvNC+0LbQvdC+INC/0LXRgNC10L3QtdGB0LXQvdC90L7QuSDQsiDRg9GC0LjQu9C40YLRiyDRhNGD0L3QutGG0LjQtdC5IHNob3dfQWxsX0JyZWVkXG4gICAgICAgICAgICAgICAgLy8gICAgICAg0LjQtyDQutC70LDRgdGB0LAgS2l0dHlTaG93ZXIsINC+0YLQtNCw0LLQsNGPINC/0YDQuCDRjdGC0L7QvCBodG1sINC60LDQuiDRgdGC0YDQvtC60YMgLSDRgNC10LfRg9C70YzRgtCw0YIg0YDQsNCx0L7RgtGLLiBcbiAgICAgICAgICAgICAgICAvLyAgICAzLiDQn9C+0YHQu9C1INC00L7QsdCw0LLQu9GP0YLRjCDQv9C+0LTQs9GA0YPQttC10L3QvdGL0LUg0LTQsNC90L3Ri9C1INC6INC+0LHRidC10LzRgyDQvtGC0L7QsdGA0LDQttC10L3QuNGOLiBcbiAgICAgICAgICAgICAgICAvLyAgICArNC4g0KPQstC10LvQuNGH0LjRgtGMINGB0LvQvtC20L3QvtGB0YLRjCDQv9Cw0YDQvtC70Y8g0L3QsCDQv9GA0L7QvNC1ICjQv9C+0LjRgdC6INC/0L4g0YTRgNCw0LfQtSBcItC/0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCDQv9C+0YHQu9C+0LbQvdC10LVcIilcbiAgICAgICAgICAgICAgICAvLyAgICArNS4g0J/RgNC+0YDQsNCx0L7RgtCw0YLRjCDQvtGC0L/RgNCw0LLQutGDINC/0LjRgdGM0LzQsCDQvdCwINC/0YDQvtC80LUuXG4gICAgICAgICAgICAgICAgLy8gICAgNi4g0J7RgtGB0YvQu9Cw0YLRjCDQv9C40YHRjNC80L4g0L/RgNC4INCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0L3QsCDQv9C+0YfRgtC+0LLRi9C5INGP0YnQuNC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjy5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChhcmNoaXZlX3BpbGxzLmF0dHIoXCJzaG93XCIpID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFyY2hpdmVfcGlsbHMuYXR0cihcInNob3dcIiwgXCIxXCIpXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCBhdHRyU2hvdyA9IGFyY2hpdmVfcGlsbHMuYXR0cihcInNob3dcIilcbiAgICBcbiAgICAgICAgICAgIGlmIChhdHRyU2hvdyA9PSBcIjFcIikge1xuICAgICAgICAgICAgICAgIGFyY2hpdmVfcGlsbHMuYXR0cihcInNob3dcIiwgXCIwXCIpXG4gICAgICAgICAgICAgICAgYXJjaGl2ZV9waWxscy5odG1sKFwi0KHQutGA0YvRgtGMINCw0YDRhdC40LIuLi5cIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJjaGl2ZV9waWxscy5hdHRyKFwic2hvd1wiLCBcIjFcIilcbiAgICAgICAgICAgICAgICBhcmNoaXZlX3BpbGxzLmh0bWwoXCLQkNGA0YXQuNCyLi4uXCIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IGZldGNoQXJjaGl2ZURhdGFCcm9vZHMoKVxuICAgIFxuICAgICAgICAgICAgaGFuZGxlUGlsbHMoYXdhaXQgZmV0Y2hJbmZvKCksIGF0dHJTaG93KVxuICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgJCgnLmJyb29kVG9BcmNoaXZlJykuY2xpY2soYXN5bmMgZXZlbnQgPT4ge1xuXG4gICAgICAgIGF3YWl0IGZldGNoKCdzcmMvREIva2l0dHlfQ1JVRC9yZXBsYWNlVG9BcmNoaXZlLnBocCcsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J2Jyb29kX2lkJzogZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnJvb2RJZH0pLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICB9KVxuICAgIFxuICAgIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEhhbmRsZXJzXG4iLCJEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZVxuXG5leHBvcnQgY29uc3QgZHJvcHpvbmVIYW5kbGVycyA9IGFzeW5jICh0YWJsZU5hbWUsIHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgcGFyYW1zID0gW10pID0+IHtcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBcbiAgICAgICAgaXRlbXMuZm9yRWFjaChjdXJyZW50ID0+IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIGN1cnJlbnQuaWQpKVxuXG4gICAgYXdhaXQgYXBwbHlfaW5pdChhd2FpdCBmZXRjaEltZyh0YWJsZU5hbWUsIHBhcmFtcykpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnNDb21tb24gPSBhc3luYyAocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkKSA9PiBcbiAgICBhd2FpdCBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCAnY29tbW9uJylcblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZCkgPT4ge1xuXG4gICAgY29uc3QgaWREcm9wem9uZSA9IGAjJHtwcmVmaXhEcm9wem9uZX0tJHt2YWx1ZVRhcmdldEZlaWxkfWBcblxuICAgIGlmICgkKGlkRHJvcHpvbmUpLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICh0YWJsZU5hbWUsIHBhcmFtcyA9IFtdKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJ3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9leGhpYml0aW9uX0NSVUQvZ2V0X2V4aGliaXRpb25fcGhvdG8ucGhwJztcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IHRhYmxlTmFtZSwgcGFyYW1zIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IGltYWdlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChjdXJyZW50X3VybCwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufSIsImNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAodGFibGVOYW1lKSA9PiB7XG5cbiAgICBEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZVxuXG4gICAgY29uc3QgYXBwbHlfaW5pdCA9IGFzeW5jIGl0ZW1zID0+IFxuICAgICAgICBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gXG4gICAgICAgICAgICBpbml0T25lRHJvcHpvbmUoY3VycmVudC5raXR0eV9pZCwgY3VycmVudC5wZXJpb2RzX2lkKSlcbiAgICAgICAgXG4gXG4gICAgYXdhaXQgYXBwbHlfaW5pdChhd2FpdCBmZXRjaEltZyh0YWJsZU5hbWUpKVxuXG59XG5cbmNvbnN0IGluaXRPbmVEcm9wem9uZSA9IGFzeW5jIChraXR0eV9pZCwgcGVyaW9kc19pZCkgPT4ge1xuXG4gICAgbGV0IGlkRHJvcHpvbmUgPSBgI215LWRyb3B6b25lLWkke2tpdHR5X2lkfS1pJHtwZXJpb2RzX2lkfWBcblxuICAgIGlmICgkKGlkRHJvcHpvbmUpLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwia2l0dHlfaWRcIiwga2l0dHlfaWQpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwZXJpb2RfaWRcIiwgcGVyaW9kc19pZCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG59XG5cbmNvbnN0IGZldGNoSW1nID0gYXN5bmMgKHRhYmxlTmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2dldF9leGhpYml0aW9uX3Bob3RvLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyB0YWJsZU5hbWUgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgKGF3YWl0IGZldGNoKGN1cnJlbnRfdXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3B6b25lSGFuZGxlcnMiLCJjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKGN1cnJlbnQpKVxuICAgICAgICBcbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKCkpXG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKGN1cnJlbnQpID0+IHtcblxuICAgIGxldCBpZERyb3B6b25lID0gYCNteS1kcm9wem9uZS0ke2N1cnJlbnQuaWR9YFxuXG4gICAgaWYgKCQoaWREcm9wem9uZSkubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG4gICAgICAgICAgICBtYXhGaWxlczogMSxcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtpdHR5X2lkXCIsIGN1cnJlbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJicm9vZF9pZFwiLCBjdXJyZW50LmJyb29kX2lkKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZmlsZS5pbml0VGh1bWJuYWlsKSAmJiAodGhpcy5maWxlc1sxXSAhPSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKHRoaXMuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnQgIT0gbnVsbCkgJiYgKGN1cnJlbnQudXJsICE9IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWNUaHVtYm5haWwodGhpcywgY3VycmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICgpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2tpdHR5X0NSVUQvaW1nX0NSVUQvaW1nX2dldF9tYWluLnBocCc7XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59XG5cbi8vIERSWSAtINC/0LXRgNC10L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuY29uc3QgZXhlY1RodW1ibmFpbCA9IChjb250ZXh0LCBjdXJyZW50X2ltYWdlKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudEZpbGUgPSB7XG4gICAgICAgIG5hbWU6IGN1cnJlbnRfaW1hZ2UubmFtZSxcbiAgICAgICAgc2l6ZTogY3VycmVudF9pbWFnZS5zaXplLFxuICAgICAgICBhY2NlcHRlZDogdHJ1ZSxcbiAgICAgICAga2luZDogJ2ltYWdlJyxcbiAgICAgICAgdXBsb2FkOiB7XG4gICAgICAgICAgICBmaWxlbmFtZTogY3VycmVudF9pbWFnZS5uYW1lLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhVVJMOiBjdXJyZW50X2ltYWdlLnVybCxcbiAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgIGNvbnRleHQuZmlsZXMucHVzaChjdXJyZW50RmlsZSk7XG4gICAgY29udGV4dC5lbWl0KFwiYWRkZWRmaWxlXCIsIGN1cnJlbnRGaWxlKTtcbiAgICBjb250ZXh0LmNyZWF0ZVRodW1ibmFpbEZyb21VcmwoXG4gICAgICAgIGN1cnJlbnRGaWxlLFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsV2lkdGgsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxIZWlnaHQsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxNZXRob2QsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHRodW1ibmFpbCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmVtaXQoJ3RodW1ibmFpbCcsIGN1cnJlbnRGaWxlLCB0aHVtYm5haWwpO1xuICAgICAgICAgICAgY29udGV4dC5lbWl0KFwiY29tcGxldGVcIiwgY3VycmVudEZpbGUpO1xuICAgICAgICB9XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwiLCJjb25zdCBkZWxldGVCeUlkID0gYXN5bmMgKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcblxuICAgIHRyeSB7XG5cbiAgICAgICAgYXdhaXQgZmV0Y2godXJsLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG5cbiAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7Qu9GD0YfQuNGC0Ywg0LTQsNC90L3Ri9C1INC+0YIg0YHQtdGA0LLQtdGA0LAnKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHQ7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnMgPSAobW9kYWxXaW5kb3csIHRhcmdldEJ1dHRvbiwgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICB0YXJnZXRCdXR0b24uY2xpY2soKCkgPT4gZGVsZXRlQnlJZChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSlcblxuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsXG4gICAgICAgIGV2ZW50ID0+IHRhcmdldEJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlU3RhdGUnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9zdGF0ZScpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnc3RhdGVfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnc3JjL0RCL2tpdHR5X0NSVUQvc3RhdGVfQ1JVRC9zdGF0ZV9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcykgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcyB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncygndHJ1ZScsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcylcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVQZXJpb2QnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9wZXJpb2QnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ2Jyb29kX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJ3NyYy9EQi9raXR0eV9DUlVEL3BlcmlvZF9DUlVEL3BlcmlvZF9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCBpZCkgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgaWQgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCBpZClcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59IiwibGV0IHVybCA9J3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9pbWdfQ1JVRC9pbWdfZGVsZXRlX2dyb3VwLnBocCdcblxuY29uc3QgZGVsZXRlSW1nID0gKG1vZGFsV2luZG93LCBidXR0b24sIGlkX2ZpZWxkX25hbWUsIHRhYmxlX25hbWUpID0+IHtcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpIFxuXG59XG5cbi8vIERSWSAtINGB0L7QvtGC0L3QvtGB0LjRgtGB0Y8g0YEg0YPQtNCw0LvQtdC90LjQtdC8INC/0LXRgNC40L7QtNCwXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHsgXG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgdGFibGVfbmFtZSB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSW1nIiwiY29uc3QgaW5pdF9vd2wgPSAoKSA9PiB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfb3dsIiwiaW1wb3J0IGluaXRfb3dsIGZyb20gJy4vZnJvbnQvdXRpbHMvaW5pdF9vd2xfY2FydXNlbCdcbmltcG9ydCBkcm9wem9uZUhhbmRsZXJzS2l0dHkgZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfa2l0dHkuanMnXG5pbXBvcnQgeyBkcm9wem9uZUhhbmRsZXJzQ29tbW9uIH0gZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMnXG5pbXBvcnQgZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCBmcm9tICcuL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eV90aHVtYm5haWwuanMnXG5pbXBvcnQgZGVsZXRlSW1nIGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcnXG5pbXBvcnQgeyBkZWxldGVDb25maXJtYXRpb25zLCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kLCBkZWxldGVDb25maXJtYXRpb25zU3RhdGVzIH0gZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlJ1xuaW1wb3J0IGluaXRIYW5kbGVycyBmcm9tICcuL2Zyb250L2Jyb29kcydcbmltcG9ydCBpbml0SGFuZGxlcnNCYW5uZXIgZnJvbSAnLi9mcm9udC9iYW5uZXInXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC00YDQvtC/0LfQvtC9INC00LvRjyDQvtCx0YnQuNGFINGE0L7RgtC+XG5kcm9wem9uZUhhbmRsZXJzQ29tbW9uKCdteS1kcm9wem9uZScsICdjb21tb24nKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuCDRhNC+0YLQviDQutC+0YLRj9GCINCyINGA0LDQt9GA0LXQt9C1INCy0YDQtdC80LXQvdC90YvRhSDQv9C10YDQuNC+0LTQvtCyXG5kcm9wem9uZUhhbmRsZXJzS2l0dHkoJ2ltZ2tpdHR5JylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQutC+0YLRj9GCXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUtpdHR5JyksIFxuICAgICQoJyNkZWxldGVfa2l0dHknKSwgXG4gICAgJ3NyYy9EQi9raXR0eV9DUlVEL2tpdHR5X2RlbGV0ZS5waHAnLFxuICAgICdraXR0eV9pZCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0L/QvtC80LXRgtC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlQnJvb2QnKSwgXG4gICAgJCgnI2RlbGV0ZV9icm9vZCcpLCBcbiAgICAnc3JjL0RCL2tpdHR5X0NSVUQvYnJvb2RfQ1JVRC9icm9vZF9kZWxldGUucGhwJyxcbiAgICAnYnJvb2RfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC/0LXRgNC40L7QtNC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QoKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INGB0YLQsNGC0YPRgdC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMoKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQtNC70Y8g0LPQu9Cw0LLQvdC+0LPQviDRhNC+0YLQviDQutC+0YLQtdC90LrQsFxuZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCgpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QstC40L3QvtC5INC60LDRgNGD0YHQtdC70LhcbmluaXRfb3dsKClcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNC5INC60L7RgtC+0LJcbmRlbGV0ZUltZyhcbiAgICAkKCcjbW9kYWxEZWxldGVJbWcnKSxcbiAgICAkKCcjZGVsZXRlX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLFxuICAgICdpbWdraXR0eScpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0L7QsdGJ0LjRhSDRhNC+0YLQvlxuZGVsZXRlSW1nKFxuICAgICQoJyNtb2RhbERlbGV0ZUNvbW1vbkltZycpLFxuICAgICQoJyNkZWxldGVfY29tbW9uX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLCBcbiAgICAnaW1nY29tbW9uJylcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINC/0LXRgNC10LzQtdGJ0LXQvdC40Y8g0L/QvtC80LXRgtC+0LIg0LIg0LDRgNGF0LjQslxuaW5pdEhhbmRsZXJzKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINCy0YHQv9C70YvQstCw0Y7RidC10LPQviDRgNC10LrQu9Cw0LzQvdC+0LPQviDQsdCw0L3QvdC10YDQsFxuaW5pdEhhbmRsZXJzQmFubmVyKCkiXSwic291cmNlUm9vdCI6IiJ9