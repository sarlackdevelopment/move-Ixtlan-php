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

var initOneDropzone =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(kitty_id, periods_id) {
    var idDropzone;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Dropzone.autoDiscover = false;
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

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function initOneDropzone(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (initOneDropzone);

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

/***/ "./src/front/lazyFetchData/fetchContentKitty.js":
/*!******************************************************!*\
  !*** ./src/front/lazyFetchData/fetchContentKitty.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropzones_dropzonesHandlers_kitty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dropzones/dropzonesHandlers_kitty.js */ "./src/front/dropzones/dropzonesHandlers_kitty.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var initHandlersLazyFetchingData = function initHandlersLazyFetchingData() {
  $('#kittyPhotoContent').on('shown.bs.modal',
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee9(event) {
      var fetchPillsCaption, createPillsPeriods, createPeriodsLayout, kitty_id, fetchKittyPhotos, contentPeriod, createPhotoPeriod, createHandlerPills, pillsCaption;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              /*******************ЗАГРУЗКА ПЕРИОДОВ********************/
              // Фетчим заголовки периодов с сервера
              fetchPillsCaption =
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  var brood_id, kittyPeriods;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          brood_id = event.relatedTarget.dataset.broodId;
                          _context.next = 3;
                          return fetch('src/DB/lazyFetchData/fetchPeriodsCaption.php', {
                            method: 'POST',
                            body: JSON.stringify({
                              brood_id: brood_id
                            }),
                            headers: {
                              'Content-Type': 'application/json'
                            }
                          });

                        case 3:
                          _context.next = 5;
                          return _context.sent.json();

                        case 5:
                          kittyPeriods = _context.sent;
                          return _context.abrupt("return", kittyPeriods);

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function fetchPillsCaption() {
                  return _ref2.apply(this, arguments);
                };
              }(); // Формируем вкладки с заголовками периодов


              createPillsPeriods =
              /*#__PURE__*/
              function () {
                var _ref3 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee2(dataPeriods) {
                  var result, active;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          result = '';
                          active = 'active';
                          dataPeriods.forEach(function (_ref4) {
                            var id = _ref4.id,
                                name = _ref4.name;
                            result = result + "<li class=\"nav-item\">\n                    <a class=\"nav-link ".concat(active, "\" id=\"period_").concat(id, "\" data-toggle=\"tab\" href=\"#period_").concat(id, "\" role=\"tab\" aria-controls=\"period_").concat(id, "\" aria-selected=\"").concat(active !== '' ? 'true' : 'false', "\">").concat(name, "</a>\n                </li>");
                            active = '';
                          });
                          return _context2.abrupt("return", result);

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function createPillsPeriods(_x2) {
                  return _ref3.apply(this, arguments);
                };
              }(); // Асинхронно добавляем заголовки периодов к модальному окну


              createPeriodsLayout =
              /*#__PURE__*/
              function () {
                var _ref5 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee3(pillsPeriods) {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          $("#photoKittyContent").append("\n                <ul class=\"nav nav-tabs\" id=\"photosKittyTab\" role=\"tablist\">\n                    ".concat(pillsPeriods, "\n                </ul>       \n                <div id=\"photosKittyTabContent\" class=\"tab-content text-center my-2 shadow-lg\"></div>\n                <div id=\"kittyCaption\" class=\"container alert alert-info text-center\" role=\"alert\"></div>"));

                        case 1:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function createPeriodsLayout(_x3) {
                  return _ref5.apply(this, arguments);
                };
              }();
              /*******************ЗАГРУЗКА ФОТОГРАФИЙ********************/


              kitty_id = event.relatedTarget.dataset.kittyId; // Фетчим фотографии с сервера

              fetchKittyPhotos =
              /*#__PURE__*/
              function () {
                var _ref6 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(period_id) {
                  var kittyPhotos;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return fetch('src/DB/lazyFetchData/fetchContentKittyPhoto.php', {
                            method: 'POST',
                            body: JSON.stringify({
                              kitty_id: kitty_id,
                              period_id: period_id
                            }),
                            headers: {
                              'Content-Type': 'application/json'
                            }
                          });

                        case 2:
                          _context4.next = 4;
                          return _context4.sent.json();

                        case 4:
                          kittyPhotos = _context4.sent;
                          return _context4.abrupt("return", kittyPhotos);

                        case 6:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function fetchKittyPhotos(_x4) {
                  return _ref6.apply(this, arguments);
                };
              }(); // Динамически формируем контент по периоду


              contentPeriod =
              /*#__PURE__*/
              function () {
                var _ref7 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(data, period_id) {
                  var owlContent, fancyContent, paths;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          owlContent = '';
                          fancyContent = '';
                          paths = data['paths'];
                          paths.forEach(function (_ref8) {
                            var path = _ref8.path,
                                checkbox = _ref8.checkbox;
                            owlContent = owlContent + "<div class=\"item\">\n                    <img src=\"".concat(path, "\" alt=\"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442\">\n                </div>");
                            fancyContent = fancyContent + "<div class=\"col-lg-3 col-md-4 col-6 thumb\">\n                    <a data-fancybox=\"kitty_".concat(kitty_id, "_").concat(period_id, "\" href=\"").concat(path, "\">\n                        <img class=\"img-fluid\" src=\"").concat(path, "\" alt=\"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442\">\n                    </a>\n                    ").concat(checkbox, "\n                </div>");
                          });
                          $('#photosKittyTabContent').append("\n                <div class=\"tab-pane fade\" id=\"".concat(period_id, "\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                    ").concat(data['section_root'], "\n                    <div class=\"container mt-1 alert alert-primary\" role=\"alert\">\n                        <div class=\"owl-carousel\">").concat(owlContent, "</div>\n                    </div>\n                    <div class=\"container alert alert-primary\" role=\"alert\">\n                        <div class=\"row\">").concat(fancyContent, "</div>\n                    </div>\n                    ").concat(data['button_delete'], "\n                </div>"));
                          $('#kittyCaption').empty().append(data['descryption']);
                          $('#kittyPhotoContentTitle').empty().append(data['name']);
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
                          $("#photosKittyTabContent #".concat(period_id)).attr('data-loading-done', '1');

                        case 9:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function contentPeriod(_x5, _x6) {
                  return _ref7.apply(this, arguments);
                };
              }(); // Заливаем полученные с сервера фотографии в асинхронном режиме


              createPhotoPeriod =
              /*#__PURE__*/
              function () {
                var _ref9 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee6(period_id) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          if (!($("#photosKittyTabContent #".concat(period_id)).attr('data-loading-done') === undefined)) {
                            _context6.next = 10;
                            break;
                          }

                          _context6.t0 = contentPeriod;
                          _context6.next = 4;
                          return fetchKittyPhotos(period_id);

                        case 4:
                          _context6.t1 = _context6.sent;
                          _context6.t2 = period_id;
                          _context6.next = 8;
                          return (0, _context6.t0)(_context6.t1, _context6.t2);

                        case 8:
                          _context6.next = 10;
                          return Object(_dropzones_dropzonesHandlers_kitty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(kitty_id, period_id.split('_')[1]);

                        case 10:
                          $('#photosKittyTabContent .tab-pane').each(function () {
                            $(this).removeClass('active show');
                          });
                          $("#photosKittyTabContent #".concat(period_id)).tab('show');

                        case 12:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function createPhotoPeriod(_x7) {
                  return _ref9.apply(this, arguments);
                };
              }(); // Формируем обработчики перехода по вкладкам периодов


              createHandlerPills =
              /*#__PURE__*/
              function () {
                var _ref10 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          $('#photosKittyTab a[data-toggle="tab"]').on('shown.bs.tab',
                          /*#__PURE__*/
                          _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee7() {
                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                              while (1) {
                                switch (_context7.prev = _context7.next) {
                                  case 0:
                                    _context7.next = 2;
                                    return createPhotoPeriod($(this).attr('id'));

                                  case 2:
                                  case "end":
                                    return _context7.stop();
                                }
                              }
                            }, _callee7, this);
                          })));

                        case 1:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function createHandlerPills() {
                  return _ref10.apply(this, arguments);
                };
              }();
              /*******************ОСНОВНАЯ ЧАСТЬ********************/


              if (!($("#photoKittyContent").children().length === 0)) {
                _context9.next = 23;
                break;
              }

              _context9.next = 11;
              return fetchPillsCaption();

            case 11:
              pillsCaption = _context9.sent;

              if (!(pillsCaption.length !== 0)) {
                _context9.next = 23;
                break;
              }

              _context9.t0 = createPeriodsLayout;
              _context9.next = 16;
              return createPillsPeriods(pillsCaption);

            case 16:
              _context9.t1 = _context9.sent;
              _context9.next = 19;
              return (0, _context9.t0)(_context9.t1);

            case 19:
              _context9.next = 21;
              return createHandlerPills();

            case 21:
              _context9.next = 23;
              return createPhotoPeriod("period_".concat(pillsCaption[0].id));

            case 23:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $('#kittyPhotoContent').on('hide.bs.modal', function () {
    return $("#photoKittyContent").empty();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (initHandlersLazyFetchingData);

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
/* harmony import */ var _front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front/dropzones/dropzonesHandlers_Index.js */ "./src/front/dropzones/dropzonesHandlers_Index.js");
/* harmony import */ var _front_dropzones_dropzonesHandlers_kitty_thumbnail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./front/dropzones/dropzonesHandlers_kitty_thumbnail.js */ "./src/front/dropzones/dropzonesHandlers_kitty_thumbnail.js");
/* harmony import */ var _front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front/utils/confirmation_delete_img */ "./src/front/utils/confirmation_delete_img.js");
/* harmony import */ var _front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./front/utils/confirmation_delete */ "./src/front/utils/confirmation_delete.js");
/* harmony import */ var _front_broods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front/broods */ "./src/front/broods.js");
/* harmony import */ var _front_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./front/banner */ "./src/front/banner.js");
/* harmony import */ var _front_lazyFetchData_fetchContentKitty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./front/lazyFetchData/fetchContentKitty */ "./src/front/lazyFetchData/fetchContentKitty.js");
 //import { dropzoneHandlers } from './front/dropzones/dropzonesHandlers_kitty.js'







 // Инициализация дропзон для общих фото

Object(_front_dropzones_dropzonesHandlers_Index_js__WEBPACK_IMPORTED_MODULE_1__["dropzoneHandlersCommon"])('my-dropzone', 'common'); // Инициализация дропзон для загрузки фото котят в разрезе временных периодов
//dropzoneHandlers('imgkitty')
// Удаление котят

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_4__["deleteConfirmations"])($('#modalDeleteKitty'), $('#delete_kitty'), 'src/DB/kitty_CRUD/kitty_delete.php', 'kitty_id'); // Удаление пометов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_4__["deleteConfirmations"])($('#modalDeleteBrood'), $('#delete_brood'), 'src/DB/kitty_CRUD/brood_CRUD/brood_delete.php', 'brood_id'); // Удаление периодов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_4__["deleteConfirmationsPeriod"])(); // Удаление статусов

Object(_front_utils_confirmation_delete__WEBPACK_IMPORTED_MODULE_4__["deleteConfirmationsStates"])(); // Инициализация дропзон для главного фото котенка

Object(_front_dropzones_dropzonesHandlers_kitty_thumbnail_js__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Инициализация совиной карусели

Object(_front_utils_init_owl_carusel__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Удаление изображений котов

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_3__["default"])($('#modalDeleteImg'), $('#delete_img'), 'group_id', 'imgkitty'); // Удаление общих фото

Object(_front_utils_confirmation_delete_img__WEBPACK_IMPORTED_MODULE_3__["default"])($('#modalDeleteCommonImg'), $('#delete_common_img'), 'group_id', 'imgcommon'); // Инициализация обработчиков перемещения пометов в архив

Object(_front_broods__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Инициализация обработчиков всплывающего рекламного баннера

Object(_front_banner__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Инициализация обработчиков "ленивой" загрузки фотоконтента

Object(_front_lazyFetchData_fetchContentKitty__WEBPACK_IMPORTED_MODULE_7__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvYnJvb2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5X3RodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvbGF6eUZldGNoRGF0YS9mZXRjaENvbnRlbnRLaXR0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tpdHR5LmpzIl0sIm5hbWVzIjpbImluaXRIYW5kbGVyc0Jhbm5lciIsIiQiLCJvbiIsImV2ZW50IiwiYXR0ciIsInJlbGF0ZWRUYXJnZXQiLCJkYXRhc2V0Iiwia2l0dHlJZCIsImNsaWNrIiwiZGF0YSIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibW9kYWwiLCJpbml0SGFuZGxlcnMiLCJhcmNoaXZlX3BpbGxzIiwiZmV0Y2hJbmZvIiwianNvbiIsImJyb29kc0luZm8iLCJoYW5kbGVQaWxscyIsImF0dHJTaG93IiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsImlkIiwiYXJjaGl2ZSIsImN1cnJlbnRfcGlsbCIsImhpZGUiLCJzaG93IiwiZmV0Y2hBcmNoaXZlRGF0YUJyb29kcyIsImh0bWwiLCJ0YXJnZXQiLCJicm9vZElkIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImN1cnJlbnQiLCJpbml0T25lRHJvcHpvbmUiLCJmZXRjaEltZyIsImRyb3B6b25lSGFuZGxlcnNDb21tb24iLCJ2YWx1ZVRhcmdldEZlaWxkIiwiaWREcm9wem9uZSIsImxlbmd0aCIsImFjY2VwdGVkRmlsZXMiLCJpbml0IiwiZmlsZSIsInhociIsImZvcm1EYXRhIiwiYXBwZW5kIiwiY3VycmVudF91cmwiLCJjdXJyZW50X2luZiIsImltYWdlcyIsImtpdHR5X2lkIiwicGVyaW9kc19pZCIsImRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwiLCJtYXhGaWxlcyIsImJyb29kX2lkIiwiaW5pdFRodW1ibmFpbCIsImZpbGVzIiwicmVtb3ZlRmlsZSIsImxvY2F0aW9uIiwicmVsb2FkIiwidXJsIiwiZXhlY1RodW1ibmFpbCIsImNvbnRleHQiLCJjdXJyZW50X2ltYWdlIiwiY3VycmVudEZpbGUiLCJuYW1lIiwic2l6ZSIsImFjY2VwdGVkIiwia2luZCIsInVwbG9hZCIsImZpbGVuYW1lIiwiZGF0YVVSTCIsInB1c2giLCJlbWl0IiwiY3JlYXRlVGh1bWJuYWlsRnJvbVVybCIsIm9wdGlvbnMiLCJ0aHVtYm5haWxXaWR0aCIsInRodW1ibmFpbEhlaWdodCIsInRodW1ibmFpbE1ldGhvZCIsInRodW1ibmFpbCIsImluaXRIYW5kbGVyc0xhenlGZXRjaGluZ0RhdGEiLCJmZXRjaFBpbGxzQ2FwdGlvbiIsImtpdHR5UGVyaW9kcyIsImNyZWF0ZVBpbGxzUGVyaW9kcyIsImRhdGFQZXJpb2RzIiwicmVzdWx0IiwiYWN0aXZlIiwiY3JlYXRlUGVyaW9kc0xheW91dCIsInBpbGxzUGVyaW9kcyIsImZldGNoS2l0dHlQaG90b3MiLCJwZXJpb2RfaWQiLCJraXR0eVBob3RvcyIsImNvbnRlbnRQZXJpb2QiLCJvd2xDb250ZW50IiwiZmFuY3lDb250ZW50IiwicGF0aHMiLCJwYXRoIiwiY2hlY2tib3giLCJlbXB0eSIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsIm5hdiIsImF1dG9wbGF5Iiwic21hcnRTcGVlZCIsImF1dG9wbGF5VGltZW91dCIsInJlc3BvbnNpdmUiLCJjcmVhdGVQaG90b1BlcmlvZCIsInNwbGl0IiwiZWFjaCIsInJlbW92ZUNsYXNzIiwidGFiIiwiY3JlYXRlSGFuZGxlclBpbGxzIiwiY2hpbGRyZW4iLCJwaWxsc0NhcHRpb24iLCJkZWxldGVCeUlkIiwibW9kYWxXaW5kb3ciLCJpZF9maWVsZF9uYW1lIiwiZ2V0QXR0cmlidXRlIiwiRXJyb3IiLCJnZXRDaGVja0ltZ3MiLCJpbmRleCIsIml0ZW0iLCJjdXJyZW50SXRlbUpRIiwicHJvcCIsImRlbGV0ZUNvbmZpcm1hdGlvbnMiLCJ0YXJnZXRCdXR0b24iLCJkZWxldGVDb25maXJtYXRpb25zU3RhdGVzIiwiYnV0dG9uIiwiZmV0Y2hEZWxldGVJbWdzIiwiY2hlY2tzIiwibWFpbkhhbmRsZXIiLCJkZWxldGVDb25maXJtYXRpb25zUGVyaW9kIiwiZGVsZXRlSW1nIiwidGFibGVfbmFtZSIsImluaXRfb3dsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUVmQSxDQUFDLENBQUMsZUFBRCxDQUZjLEVBR2Ysb0NBSGUsRUFJZixVQUplLENBQW5CLEMsQ0FNQTs7QUFDQXVJLDRGQUFtQixDQUNmdkksQ0FBQyxDQUFDLG1CQUFELENBRGMsRUFFZkEsQ0FBQyxDQUFDLGVBQUQsQ0FGYyxFQUdmLCtDQUhlLEVBSWYsVUFKZSxDQUFuQixDLENBTUE7O0FBQ0E4SSxrR0FBeUIsRyxDQUV6Qjs7QUFDQUwsa0dBQXlCLEcsQ0FFekI7O0FBQ0EzRSxxR0FBK0IsRyxDQUUvQjs7QUFDQW1GLDZFQUFRLEcsQ0FFUjs7QUFDQUYsb0ZBQVMsQ0FDTC9JLENBQUMsQ0FBQyxpQkFBRCxDQURJLEVBRUxBLENBQUMsQ0FBQyxhQUFELENBRkksRUFHTCxVQUhLLEVBSUwsVUFKSyxDQUFULEMsQ0FNQTs7QUFDQStJLG9GQUFTLENBQ0wvSSxDQUFDLENBQUMsdUJBQUQsQ0FESSxFQUVMQSxDQUFDLENBQUMsb0JBQUQsQ0FGSSxFQUdMLFVBSEssRUFJTCxXQUpLLENBQVQsQyxDQU1BOztBQUNBaUIsNkRBQVksRyxDQUVaOztBQUNBbEIsNkRBQWtCLEcsQ0FFbEI7O0FBQ0EyRixzRkFBNEIsRyIsImZpbGUiOiIuL2tpdHR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMva2l0dHkuanNcIik7XG4iLCJjb25zdCBpbml0SGFuZGxlcnNCYW5uZXIgPSAoKSA9PiB7XG5cbiAgICAkKCcjbW9kYWxDdXN0b21CYW5uZXInKS5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gJCgnI2tpdHR5VG9CYW5uZXInKS5hdHRyKCdraXR0eUlkJywgZXZlbnQucmVsYXRlZFRhcmdldC5kYXRhc2V0LmtpdHR5SWQpXG4gICAgKVxuXG4gICAgJCgnI21vZGFsUmVtb3ZlQmFubmVyJykub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+ICQoJyNraXR0eUZyb21CYW5uZXInKS5hdHRyKCdraXR0eUlkJywgZXZlbnQucmVsYXRlZFRhcmdldC5kYXRhc2V0LmtpdHR5SWQpXG4gICAgKVxuXG4gICAgJCgnI2tpdHR5VG9CYW5uZXInKS5jbGljaygoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICdtb2RhbCc6ICdzaG93JyxcbiAgICAgICAgICAgICdiYW5uZXJfaGVhZGVyJzogJCgnI2Jhbm5lcl9oZWFkZXInKS52YWwoKSxcbiAgICAgICAgICAgICdiYW5uZXJfZGVzY3JpcHRpb24nOiAkKCcjYmFubmVyX2Rlc2NyaXB0aW9uJykudmFsKCksXG4gICAgICAgICAgICAna2l0dHlfaWQnOiAkKCcja2l0dHlUb0Jhbm5lcicpLmF0dHIoJ2tpdHR5SWQnKVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZldGNoKCdzcmMvREIva2l0dHlfQ1JVRC9yZXBsYWNlVG9CYW5uZXIucGhwJywgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICB9KVxuXG4gICAgICAgICQoJyNtb2RhbEN1c3RvbUJhbm5lcicpLm1vZGFsKCdoaWRlJylcblxuICAgIH0pXG5cbiAgICAkKCcja2l0dHlGcm9tQmFubmVyJykuY2xpY2soKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAnbW9kYWwnOiAnaGlkZScsXG4gICAgICAgICAgICAnYmFubmVyX2hlYWRlcic6ICcnLFxuICAgICAgICAgICAgJ2Jhbm5lcl9kZXNjcmlwdGlvbic6ICcnLFxuICAgICAgICAgICAgJ2tpdHR5X2lkJzogJCgnI2tpdHR5RnJvbUJhbm5lcicpLmF0dHIoJ2tpdHR5SWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2goJ3NyYy9EQi9raXR0eV9DUlVEL3JlcGxhY2VUb0Jhbm5lci5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnI21vZGFsUmVtb3ZlQmFubmVyJykubW9kYWwoJ2hpZGUnKVxuXG4gICAgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0SGFuZGxlcnNCYW5uZXIiLCJjb25zdCBpbml0SGFuZGxlcnMgPSAoKSA9PiB7XG5cbiAgICAkKGFzeW5jICgpID0+IHtcblxuICAgICAgICAvKiDQodC60YDRi9Cy0LDQtdC8INCy0LrQu9Cw0LTQutC4INGA0LDRgdC/0YDQvtC00LDQvdC90YvRhSDQv9C+0LzQtdGC0L7QsiAgKi9cbiAgICBcbiAgICAgICAgY29uc3QgYXJjaGl2ZV9waWxscyA9ICQoJyN2LXBpbGxzLWNvbW1vbi1hcmNoaXZlJylcbiAgICBcbiAgICAgICAgY29uc3QgZmV0Y2hJbmZvID0gYXN5bmMgKCkgPT4ge1xuICAgIFxuICAgICAgICAgICAgY29uc3QgYnJvb2RzSW5mbyA9IGF3YWl0IChhd2FpdCBmZXRjaChcInNyYy9EQi9raXR0eV9DUlVEL2Jyb29kX0NSVUQvYnJvb2RfZ2V0X2FsbC5waHBcIiwgeyBcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgIFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICAgICAgfSkpLmpzb24oKVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGJyb29kc0luZm9cbiAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVQaWxscyA9IChkYXRhLCBhdHRyU2hvdyA9IHVuZGVmaW5lZCkgPT4ge1xuICAgIFxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKCh7aWQsIGFyY2hpdmV9KSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudF9waWxsID0gJChgI3YtcGlsbHMtaGVhZGluZ0Jyb29kXyR7aWR9LXRhYmApXG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGFyY2hpdmUgPT09ICcwJykge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoKGF0dHJTaG93ID09PSB1bmRlZmluZWQpIHx8IChhdHRyU2hvdyA9PSAnMCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3BpbGwuaGlkZShcInNsb3dcIilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcGlsbC5zaG93KFwic2xvd1wiKVxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhdHRyU2hvdyA9PT0gdW5kZWZpbmVkKSB8fCAoYXR0clNob3cgPT0gJzAnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9waWxsLnNob3coXCJzbG93XCIpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3BpbGwuaGlkZShcInNsb3dcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaGFuZGxlUGlsbHMoYXdhaXQgZmV0Y2hJbmZvKCkpXG4gICAgXG4gICAgICAgICQoJyN2LXBpbGxzLWNvbW1vbi1hcmNoaXZlJykub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBmZXRjaEFyY2hpdmVEYXRhQnJvb2RzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogXG4gICAgICAgICAgICAgICAgLy8gICAgKzAuINCX0LDQu9C40YLRjCDQu9C+0LrQsNC70LjQt9Cw0YbQuNGOINCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0Lgg0LTQvtGA0LDQsdC+0YLQsNGC0Ywg0LXQtSDRhNGD0L3QutGG0LjQvtC90LDQuy5cbiAgICAgICAgICAgICAgICAvLyAgICArMS4g0J/RgNC4INC30LDQs9GA0YPQt9C60LUg0YTQvtGC0L7Qs9GA0LDRhNC40Lkg0LrQvtGC0Y/RgiDQuCDQstC30YDQvtGB0LvRi9GFINC20LjQstC+0YLQvdGL0YUg0LPRgNGD0LfQuNGC0Ywg0YLQvtC70YzQutC+INCz0LvQsNCy0L3Ri9C1LCDQvtGB0YLQsNC70YzQvdC+0LUg0YLQvtC70YzQutC+INC/0YDQuFxuICAgICAgICAgICAgICAgIC8vICAgICAgINC90LDQttCw0YLQuNC4INC90LAg0LTQtdGC0LDQu9C60YMuIFxuICAgICAgICAgICAgICAgIC8vICAgICs0LiDQo9Cy0LXQu9C40YfQuNGC0Ywg0YHQu9C+0LbQvdC+0YHRgtGMINC/0LDRgNC+0LvRjyDQvdCwINC/0YDQvtC80LUgKNC/0L7QuNGB0Log0L/QviDRhNGA0LDQt9C1IFwi0L/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMINC/0L7RgdC70L7QttC90LXQtVwiKVxuICAgICAgICAgICAgICAgIC8vICAgICs1LiDQn9GA0L7RgNCw0LHQvtGC0LDRgtGMINC+0YLQv9GA0LDQstC60YMg0L/QuNGB0YzQvNCwINC90LAg0L/RgNC+0LzQtS5cbiAgICAgICAgICAgICAgICAvLyAgICArNi4g0J7RgtGB0YvQu9Cw0YLRjCDQv9C40YHRjNC80L4g0L/RgNC4INCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0L3QsCDQv9C+0YfRgtC+0LLRi9C5INGP0YnQuNC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjy5cbiAgICAgICAgICAgICAgICAvLyAgICArNy4gQnJlZWQtPkxpdHRlciBGcmVlLT5BdmFpbGFibGUgc2lnbl9pbi0+c2lnbl91cFxuICAgICAgICAgICAgICAgIC8vICAgICs4LiDQlNC+0LHQsNCy0LvQtdC90LjQtSDQsdCw0L3QvdC10YDQsCDQsiDRgNCw0LfRgNC10LfQtSDRj9C30YvQutCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjy5cbiAgICAgICAgICAgICAgICAvLyAgICA5LiDQlNC+0LHQsNCy0LvQtdC90LjQtSDQvtGC0LfRi9Cy0LAgLSDQstGB0LUg0YHQu9C+0LzQsNC70L7RgdGMLlxuICAgICAgICAgICAgICAgIC8vICAgIDEwLiDQndC1INC00L7QsdCw0LLQu9GP0LXRgtGB0Y8g0Y/Qt9GL0LpcbiAgICAgICAgICAgICAgICAvLyAgICArMTEuINCa0L7RgNGP0LLQvtC1INC+0YLQvtCx0YDQsNC20LXQvdC40LUg0L/QsNC90LXQu9C4INC90LDQstC40LPQsNGG0LjQuFxuICAgICAgICAgICAgICAgIC8vICAgIDEyLiDQndCw0LTQviDRh9GC0L4t0YLQviDRgdC00LXQu9Cw0YLRjCDRgSDQsNC00LDQv9GC0LjQstC90L7RgdGC0YzRjiDRgNGD0YHRgdC60L7Qs9C+INGI0YDQuNGE0YLQsCAo0LLQvtC30LzQvtC20L3QviDQt9Cw0LzQtdC90LjRgtGMKVxuICAgICAgICAgICAgICAgIC8vICAgIDE0LiDQntGE0L7RgNC80LjRgtGMINC30LDQutCw0Lcg0L3QsCDQv9C10YDQtdCy0L7QtC4gXG4gICAgICAgICAgICAgICAgLy8gICAgMTUuINCf0YDQvtC60L7QvdGB0YPQu9GM0YLQuNGA0L7QstCw0YLRjNGB0Y8g0L/QviDQstC+0L/RgNC+0YHQsNC8IFNFTy5cbiAgICAgICAgICAgICAgICAvLyAgICAoISEhKSAxNi4g0JTQvtCx0LDQstC40YLRjCDQuNC30LzQtdGA0LXQvdC40LUg0Y/Qt9GL0LrQsCDQsiDQv9C+0LzQtdGC0YsuINCf0L4t0YXQvtGA0L7RiNC10LzRgyDQvdGD0LbQvdC+INC+0YLQstGP0LfQsNGC0Ywg0LvQvtC60LDQu9C40LfQuNGA0YPQtdC80YvQuSDQutC+0L3RgtC10L3RglxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgINC+0YIg0L7Qv9C+0YDQvdGL0YUg0YLQsNCx0LvQuNGGINC4INC+0YHRgtCw0LLQuNGC0Ywg0YLQvtC70YzQutC+INGB0LLRj9C30LguINCt0YLQviDQsdC70L7QutC10YAg0LTQu9GPINC/0LXRgNC10LLQvtC00L7QsiDQuCBTRU8uINCf0YDQuNC+0YDQuNGC0LXRgiDQv9C10YDQstC40YfQvdGL0LlcbiAgICAgICAgICAgICAgICAvLyAgICArMTcuINCg0LXRiNC40YLRjCDQstC+0L/RgNC+0YEg0YEg0L/QtdGA0LXQvNC10YnQtdC90LjQtdC8IGxvY2FsX2NvbnN0YW50cyDQuCBjaGVja19ydWxlc1xuICAgICAgICAgICAgICAgIC8vICAgICsxOC4gZm9udGF3ZXNvbWUtZnJlZSDQu9GD0YfRiNC1INC/0L7QutCwINGD0LTQsNC70LjRgtGMINC40Lcgbm9kZV9tb2R1bGVzXG4gICAgICAgICAgICAgICAgLy8gICAgKzE5LiDQntGH0LjRgdGC0LjRgtGMINC+0YIg0L3QtdC40YHQv9C+0LvRjNC30YPQtdC80L7Qs9C+INGC0LXQv9C10YDRjCDRhNGD0L3QutGG0LjQvtC90LDQu9CwXG4gICAgICAgICAgICAgICAgLy8gICAgMjAuINCU0L7Qv9C40YHQsNGC0Ywg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNC+0L3QvdGL0Lkg0YTQsNC50Lsg0LTQu9GPINGA0LDQt9C00LXQu9C10L3QuNGPIGRldiDQuCBwcm9tXG4gICAgICAgICAgICAgICAgLy8gICAgKzIxLiDQmtCw0LrQuNC1LdGC0L4g0L/RgNC+0LHQu9C10LzRiyDRgSDRg9C00LDQu9C10L3QuNC10Lwg0L/QtdGA0LjQvtC00LBcbiAgICAgICAgICAgICAgICAvLyAgICArMjIuINCf0YDQuCDQvtGC0LrRgNGL0YLQuNC4INC00LXRgtCw0LvQutC4INC/0L4g0LrQvtGC0LXQvdC60YMg0L7RgtC60YDRi9Cy0LDQtdGC0YHRjyDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3QvtC1INC+0LrQvdC+XG4gICAgICAgICAgICAgICAgLy8gICAgMjMuINCd0YPQttC90L4g0L3QsNC70LDQtNC40YLRjCDQstC60LvQsNC00LrQuCAtINGC0L4g0LXRgdGC0Ywg0YfRgtC+0LHRiyDQv9GA0Lgg0L7RgtC60YDRi9GC0LjQuCDQvtGC0LrRgNGL0LLQsNC70YHRjyDQv9C10YDQstGL0LkgKNC/0L4g0LDQu9GE0LDQstC40YLRgylcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgINC90LXQsNGA0YXQuNCy0L3Ri9C5INC/0L7QvNC10YJcbiAgICAgICAgICAgICAgICAvLyAgICAyNC4g0KXQsNGA0LQg0LTQtdC/0LvQvtC5XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoYXJjaGl2ZV9waWxscy5hdHRyKFwic2hvd1wiKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhcmNoaXZlX3BpbGxzLmF0dHIoXCJzaG93XCIsIFwiMVwiKVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgY29uc3QgYXR0clNob3cgPSBhcmNoaXZlX3BpbGxzLmF0dHIoXCJzaG93XCIpXG4gICAgXG4gICAgICAgICAgICBpZiAoYXR0clNob3cgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICBhcmNoaXZlX3BpbGxzLmF0dHIoXCJzaG93XCIsIFwiMFwiKVxuICAgICAgICAgICAgICAgIGFyY2hpdmVfcGlsbHMuaHRtbChcItCh0LrRgNGL0YLRjCDQsNGA0YXQuNCyLi4uXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyY2hpdmVfcGlsbHMuYXR0cihcInNob3dcIiwgXCIxXCIpXG4gICAgICAgICAgICAgICAgYXJjaGl2ZV9waWxscy5odG1sKFwi0JDRgNGF0LjQsi4uLlwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCBmZXRjaEFyY2hpdmVEYXRhQnJvb2RzKClcbiAgICBcbiAgICAgICAgICAgIGhhbmRsZVBpbGxzKGF3YWl0IGZldGNoSW5mbygpLCBhdHRyU2hvdylcbiAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSlcblxuICAgICQoJy5icm9vZFRvQXJjaGl2ZScpLmNsaWNrKGFzeW5jIGV2ZW50ID0+IHtcblxuICAgICAgICBhd2FpdCBmZXRjaCgnc3JjL0RCL2tpdHR5X0NSVUQvcmVwbGFjZVRvQXJjaGl2ZS5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydicm9vZF9pZCc6IGV2ZW50LnRhcmdldC5kYXRhc2V0LmJyb29kSWR9KSwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgfSlcbiAgICBcbiAgICB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRIYW5kbGVyc1xuIiwiRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAodGFibGVOYW1lLCBwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHBhcmFtcyA9IFtdKSA9PiB7XG5cbiAgICBjb25zdCBhcHBseV9pbml0ID0gYXN5bmMgaXRlbXMgPT4gXG4gICAgICAgIGl0ZW1zLmZvckVhY2goY3VycmVudCA9PiBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBjdXJyZW50LmlkKSlcblxuICAgIGF3YWl0IGFwcGx5X2luaXQoYXdhaXQgZmV0Y2hJbWcodGFibGVOYW1lLCBwYXJhbXMpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCkgPT4gXG4gICAgYXdhaXQgaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgJ2NvbW1vbicpXG5cbmNvbnN0IGluaXRPbmVEcm9wem9uZSA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpID0+IHtcblxuICAgIGNvbnN0IGlkRHJvcHpvbmUgPSBgIyR7cHJlZml4RHJvcHpvbmV9LSR7dmFsdWVUYXJnZXRGZWlsZH1gXG5cbiAgICBpZiAoJChpZERyb3B6b25lKS5sZW5ndGggIT09IDApIHtcblxuICAgICAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCh0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbn1cblxuY29uc3QgZmV0Y2hJbWcgPSBhc3luYyAodGFibGVOYW1lLCBwYXJhbXMgPSBbXSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2dldF9leGhpYml0aW9uX3Bob3RvLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyB0YWJsZU5hbWUsIHBhcmFtcyB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyBcbiAgICB9KSkuanNvbigpXG5cbiAgICByZXR1cm4gaW1hZ2VzXG5cbn0iLCJjb25zdCBpbml0T25lRHJvcHpvbmUgPSBhc3luYyAoa2l0dHlfaWQsIHBlcmlvZHNfaWQpID0+IHtcblxuICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbiAgICBjb25zdCBpZERyb3B6b25lID0gYCNteS1kcm9wem9uZS1pJHtraXR0eV9pZH0taSR7cGVyaW9kc19pZH1gXG5cbiAgICBpZiAoJChpZERyb3B6b25lKS5sZW5ndGggIT09IDApIHtcblxuICAgICAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtpdHR5X2lkXCIsIGtpdHR5X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGVyaW9kX2lkXCIsIHBlcmlvZHNfaWQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0T25lRHJvcHpvbmUiLCJjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKGN1cnJlbnQpKVxuICAgICAgICBcbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKCkpXG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKGN1cnJlbnQpID0+IHtcblxuICAgIGxldCBpZERyb3B6b25lID0gYCNteS1kcm9wem9uZS0ke2N1cnJlbnQuaWR9YFxuXG4gICAgaWYgKCQoaWREcm9wem9uZSkubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG4gICAgICAgICAgICBtYXhGaWxlczogMSxcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtpdHR5X2lkXCIsIGN1cnJlbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJicm9vZF9pZFwiLCBjdXJyZW50LmJyb29kX2lkKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZmlsZS5pbml0VGh1bWJuYWlsKSAmJiAodGhpcy5maWxlc1sxXSAhPSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKHRoaXMuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnQgIT0gbnVsbCkgJiYgKGN1cnJlbnQudXJsICE9IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWNUaHVtYm5haWwodGhpcywgY3VycmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICgpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2tpdHR5X0NSVUQvaW1nX0NSVUQvaW1nX2dldF9tYWluLnBocCc7XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59XG5cbi8vIERSWSAtINC/0LXRgNC10L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuY29uc3QgZXhlY1RodW1ibmFpbCA9IChjb250ZXh0LCBjdXJyZW50X2ltYWdlKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudEZpbGUgPSB7XG4gICAgICAgIG5hbWU6IGN1cnJlbnRfaW1hZ2UubmFtZSxcbiAgICAgICAgc2l6ZTogY3VycmVudF9pbWFnZS5zaXplLFxuICAgICAgICBhY2NlcHRlZDogdHJ1ZSxcbiAgICAgICAga2luZDogJ2ltYWdlJyxcbiAgICAgICAgdXBsb2FkOiB7XG4gICAgICAgICAgICBmaWxlbmFtZTogY3VycmVudF9pbWFnZS5uYW1lLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhVVJMOiBjdXJyZW50X2ltYWdlLnVybCxcbiAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgIGNvbnRleHQuZmlsZXMucHVzaChjdXJyZW50RmlsZSk7XG4gICAgY29udGV4dC5lbWl0KFwiYWRkZWRmaWxlXCIsIGN1cnJlbnRGaWxlKTtcbiAgICBjb250ZXh0LmNyZWF0ZVRodW1ibmFpbEZyb21VcmwoXG4gICAgICAgIGN1cnJlbnRGaWxlLFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsV2lkdGgsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxIZWlnaHQsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxNZXRob2QsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHRodW1ibmFpbCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmVtaXQoJ3RodW1ibmFpbCcsIGN1cnJlbnRGaWxlLCB0aHVtYm5haWwpO1xuICAgICAgICAgICAgY29udGV4dC5lbWl0KFwiY29tcGxldGVcIiwgY3VycmVudEZpbGUpO1xuICAgICAgICB9XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwiLCJpbXBvcnQgaW5pdE9uZURyb3B6b25lIGZyb20gJy4uL2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eS5qcydcblxuY29uc3QgaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSA9ICgpID0+IHtcblxuICAgICQoJyNraXR0eVBob3RvQ29udGVudCcpLm9uKCdzaG93bi5icy5tb2RhbCcsIGFzeW5jIGV2ZW50ID0+IHtcblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKtCX0JDQk9Cg0KPQl9Ca0JAg0J/QldCg0JjQntCU0J7QkioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIC8vINCk0LXRgtGH0LjQvCDQt9Cw0LPQvtC70L7QstC60Lgg0L/QtdGA0LjQvtC00L7QsiDRgSDRgdC10YDQstC10YDQsFxuICAgICAgICBjb25zdCBmZXRjaFBpbGxzQ2FwdGlvbiA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYnJvb2RfaWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQuYnJvb2RJZFxuXG4gICAgICAgICAgICBjb25zdCBraXR0eVBlcmlvZHMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goJ3NyYy9EQi9sYXp5RmV0Y2hEYXRhL2ZldGNoUGVyaW9kc0NhcHRpb24ucGhwJywgeyBcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBicm9vZF9pZCB9KSwgXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgICAgICB9KSkuanNvbigpXG5cbiAgICAgICAgICAgIHJldHVybiBraXR0eVBlcmlvZHNcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0KTQvtGA0LzQuNGA0YPQtdC8INCy0LrQu9Cw0LTQutC4INGBINC30LDQs9C+0LvQvtCy0LrQsNC80Lgg0L/QtdGA0LjQvtC00L7QslxuICAgICAgICBjb25zdCBjcmVhdGVQaWxsc1BlcmlvZHMgPSBhc3luYyAoZGF0YVBlcmlvZHMpID0+IHtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gJ2FjdGl2ZSdcblxuICAgICAgICAgICAgZGF0YVBlcmlvZHMuZm9yRWFjaCgoe2lkLCBuYW1lfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArXG4gICAgICAgICAgICAgICAgYDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgJHthY3RpdmV9XCIgaWQ9XCJwZXJpb2RfJHtpZH1cIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjcGVyaW9kXyR7aWR9XCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJwZXJpb2RfJHtpZH1cIiBhcmlhLXNlbGVjdGVkPVwiJHsoYWN0aXZlICE9PSAnJyA/ICd0cnVlJyA6ICdmYWxzZScpfVwiPiR7bmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5gICAgICAgXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gJydcbiAgICAgICAgICAgIH0pICAgICAgIFxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCQ0YHQuNC90YXRgNC+0L3QvdC+INC00L7QsdCw0LLQu9GP0LXQvCDQt9Cw0LPQvtC70L7QstC60Lgg0L/QtdGA0LjQvtC00L7QsiDQuiDQvNC+0LTQsNC70YzQvdC+0LzRgyDQvtC60L3Rg1xuICAgICAgICBjb25zdCBjcmVhdGVQZXJpb2RzTGF5b3V0ID0gYXN5bmMgKHBpbGxzUGVyaW9kcykgPT4ge1xuXG4gICAgICAgICAgICAkKFwiI3Bob3RvS2l0dHlDb250ZW50XCIpLmFwcGVuZChgXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJwaG90b3NLaXR0eVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7cGlsbHNQZXJpb2RzfVxuICAgICAgICAgICAgICAgIDwvdWw+ICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwaG90b3NLaXR0eVRhYkNvbnRlbnRcIiBjbGFzcz1cInRhYi1jb250ZW50IHRleHQtY2VudGVyIG15LTIgc2hhZG93LWxnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImtpdHR5Q2FwdGlvblwiIGNsYXNzPVwiY29udGFpbmVyIGFsZXJ0IGFsZXJ0LWluZm8gdGV4dC1jZW50ZXJcIiByb2xlPVwiYWxlcnRcIj48L2Rpdj5gKVxuXG4gICAgICAgIH1cblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKtCX0JDQk9Cg0KPQl9Ca0JAg0KTQntCi0J7Qk9Cg0JDQpNCY0JkqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICBjb25zdCBraXR0eV9pZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQuZGF0YXNldC5raXR0eUlkXG5cbiAgICAgICAgLy8g0KTQtdGC0YfQuNC8INGE0L7RgtC+0LPRgNCw0YTQuNC4INGBINGB0LXRgNCy0LXRgNCwXG4gICAgICAgIGNvbnN0IGZldGNoS2l0dHlQaG90b3MgPSBhc3luYyAocGVyaW9kX2lkKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGtpdHR5UGhvdG9zID0gYXdhaXQgKGF3YWl0IGZldGNoKCdzcmMvREIvbGF6eUZldGNoRGF0YS9mZXRjaENvbnRlbnRLaXR0eVBob3RvLnBocCcsIHsgXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsga2l0dHlfaWQsIHBlcmlvZF9pZCB9KSwgXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgICAgICB9KSkuanNvbigpXG5cbiAgICAgICAgICAgIHJldHVybiBraXR0eVBob3Rvc1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyDQlNC40L3QsNC80LjRh9C10YHQutC4INGE0L7RgNC80LjRgNGD0LXQvCDQutC+0L3RgtC10L3RgiDQv9C+INC/0LXRgNC40L7QtNGDXG4gICAgICAgIGNvbnN0IGNvbnRlbnRQZXJpb2QgPSBhc3luYyAoZGF0YSwgcGVyaW9kX2lkKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBvd2xDb250ZW50ID0gJydcbiAgICAgICAgICAgIGxldCBmYW5jeUNvbnRlbnQgPSAnJ1xuXG4gICAgICAgICAgICBjb25zdCBwYXRocyA9IGRhdGFbJ3BhdGhzJ11cblxuICAgICAgICAgICAgcGF0aHMuZm9yRWFjaCgoe3BhdGgsIGNoZWNrYm94fSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgb3dsQ29udGVudCA9IG93bENvbnRlbnQgK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGF0aH1cIiBhbHQ9XCLQmNC30L7QsdGA0LDQttC10L3QuNC1INC+0YLRgdGD0YLRgdGC0LLRg9C10YJcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgICAgICAgICBmYW5jeUNvbnRlbnQgPSBmYW5jeUNvbnRlbnQgK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTQgY29sLTYgdGh1bWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS1mYW5jeWJveD1cImtpdHR5XyR7a2l0dHlfaWR9XyR7cGVyaW9kX2lkfVwiIGhyZWY9XCIke3BhdGh9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgc3JjPVwiJHtwYXRofVwiIGFsdD1cItCY0LfQvtCx0YDQsNC20LXQvdC40LUg0L7RgtGB0YPRgtGB0YLQstGD0LXRglwiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICR7Y2hlY2tib3h9XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAkKCcjcGhvdG9zS2l0dHlUYWJDb250ZW50JykuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiJHtwZXJpb2RfaWR9XCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaG9tZS10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtkYXRhWydzZWN0aW9uX3Jvb3QnXX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC0xIGFsZXJ0IGFsZXJ0LXByaW1hcnlcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvd2wtY2Fyb3VzZWxcIj4ke293bENvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGFsZXJ0IGFsZXJ0LXByaW1hcnlcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4ke2ZhbmN5Q29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICR7ZGF0YVsnYnV0dG9uX2RlbGV0ZSddfVxuICAgICAgICAgICAgICAgIDwvZGl2PmApXG5cblxuICAgICAgICAgICAgJCgnI2tpdHR5Q2FwdGlvbicpLmVtcHR5KCkuYXBwZW5kKGRhdGFbJ2Rlc2NyeXB0aW9uJ10pXG5cbiAgICAgICAgICAgICQoJyNraXR0eVBob3RvQ29udGVudFRpdGxlJykuZW1wdHkoKS5hcHBlbmQoZGF0YVsnbmFtZSddKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgJChgI3Bob3Rvc0tpdHR5VGFiQ29udGVudCAjJHtwZXJpb2RfaWR9YCkuYXR0cignZGF0YS1sb2FkaW5nLWRvbmUnLCAnMScpXG5cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vINCX0LDQu9C40LLQsNC10Lwg0L/QvtC70YPRh9C10L3QvdGL0LUg0YEg0YHQtdGA0LLQtdGA0LAg0YTQvtGC0L7Qs9GA0LDRhNC40Lgg0LIg0LDRgdC40L3RhdGA0L7QvdC90L7QvCDRgNC10LbQuNC80LVcbiAgICAgICAgY29uc3QgY3JlYXRlUGhvdG9QZXJpb2QgPSBhc3luYyAocGVyaW9kX2lkKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICgkKGAjcGhvdG9zS2l0dHlUYWJDb250ZW50ICMke3BlcmlvZF9pZH1gKS5hdHRyKCdkYXRhLWxvYWRpbmctZG9uZScpID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbnRlbnRQZXJpb2QoYXdhaXQgZmV0Y2hLaXR0eVBob3RvcyhwZXJpb2RfaWQpLCBwZXJpb2RfaWQpXG5cbiAgICAgICAgICAgICAgICBhd2FpdCBpbml0T25lRHJvcHpvbmUoa2l0dHlfaWQsIHBlcmlvZF9pZC5zcGxpdCgnXycpWzFdKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjcGhvdG9zS2l0dHlUYWJDb250ZW50IC50YWItcGFuZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICQoYCNwaG90b3NLaXR0eVRhYkNvbnRlbnQgIyR7cGVyaW9kX2lkfWApLnRhYignc2hvdycpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCk0L7RgNC80LjRgNGD0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INC/0LXRgNC10YXQvtC00LAg0L/QviDQstC60LvQsNC00LrQsNC8INC/0LXRgNC40L7QtNC+0LJcbiAgICAgICAgY29uc3QgY3JlYXRlSGFuZGxlclBpbGxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgJCgnI3Bob3Rvc0tpdHR5VGFiIGFbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5vbignc2hvd24uYnMudGFiJywgYXN5bmMgZnVuY3Rpb24oKSB7ICBcbiAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVQaG90b1BlcmlvZCgkKHRoaXMpLmF0dHIoJ2lkJykpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKtCe0KHQndCe0JLQndCQ0K8g0KfQkNCh0KLQrCoqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIGlmICgkKFwiI3Bob3RvS2l0dHlDb250ZW50XCIpLmNoaWxkcmVuKCkubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBpbGxzQ2FwdGlvbiA9IGF3YWl0IGZldGNoUGlsbHNDYXB0aW9uKClcblxuICAgICAgICAgICAgaWYgKHBpbGxzQ2FwdGlvbi5sZW5ndGggIT09IDApIHtcblxuICAgICAgICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQstC60LvQsNC00L7QuiDRgSDQv9C10YDQuNC+0LTQsNC80LhcbiAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVQZXJpb2RzTGF5b3V0KGF3YWl0IGNyZWF0ZVBpbGxzUGVyaW9kcyhwaWxsc0NhcHRpb24pKVxuXG4gICAgICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINC/0YDQuCDQv9C10YDQtdGF0L7QtNCw0YUg0L/QviDQstC60LvQsNC00LrQsNC8INC/0LXRgNC40L7QtNC+0LJcbiAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVIYW5kbGVyUGlsbHMoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INGE0L7RgtC+0LrQvtC90YLQtdC90YLQsFxuICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVBob3RvUGVyaW9kKGBwZXJpb2RfJHtwaWxsc0NhcHRpb25bMF0uaWR9YClcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICAkKCcja2l0dHlQaG90b0NvbnRlbnQnKS5vbignaGlkZS5icy5tb2RhbCcsICgpID0+ICQoXCIjcGhvdG9LaXR0eUNvbnRlbnRcIikuZW1wdHkoKSlcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSIsImNvbnN0IGRlbGV0ZUJ5SWQgPSBhc3luYyAobW9kYWxXaW5kb3csIHVybCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuXG4gICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuXG4gICAgdHJ5IHtcblxuICAgICAgICBhd2FpdCBmZXRjaCh1cmwsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcblxuICAgIH0gY2F0Y2gge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/QvtC70YPRh9C40YLRjCDQtNCw0L3QvdGL0LUg0L7RgiDRgdC10YDQstC10YDQsCcpXG4gICAgfVxufVxuXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFske2lkX2ZpZWxkX25hbWV9ID0gJHtpZH1dYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9ucyA9IChtb2RhbFdpbmRvdywgdGFyZ2V0QnV0dG9uLCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIHRhcmdldEJ1dHRvbi5jbGljaygoKSA9PiBkZWxldGVCeUlkKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpKVxuXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJyxcbiAgICAgICAgZXZlbnQgPT4gdGFyZ2V0QnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zU3RhdGVzID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVTdGF0ZScpXG4gICAgbGV0IGJ1dHRvbiAgICAgICAgPSAkKCcjZGVsZXRlX3N0YXRlJylcbiAgICBsZXQgaWRfZmllbGRfbmFtZSA9ICdzdGF0ZV9pZCdcbiAgICBsZXQgdXJsICAgICAgICAgICA9ICdzcmMvREIva2l0dHlfQ1JVRC9zdGF0ZV9DUlVEL3N0YXRlX2RlbGV0ZV9ncm91cC5waHAnXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzKSA9PiB7XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzIH1cbiAgICAgICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKCd0cnVlJywgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QgPSAoKSA9PiB7XG5cbiAgICBsZXQgbW9kYWxXaW5kb3cgICA9ICQoJyNtb2RhbERlbGV0ZVBlcmlvZCcpXG4gICAgbGV0IGJ1dHRvbiAgICAgICAgPSAkKCcjZGVsZXRlX3BlcmlvZCcpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnYnJvb2RfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnc3JjL0RCL2tpdHR5X0NSVUQvcGVyaW9kX0NSVUQvcGVyaW9kX2RlbGV0ZV9ncm91cC5waHAnXG5cbiAgICAvLyBEUlkgLSDQv9GA0L7QsdGA0L7RgSDRgSDQutC90L7Qv9C60Lgg0LfQsNC/0YPRgdC60LAg0LzQvtC00LDQu9C60Lgg0L3QsCDQutC90L7Qv9C60YMg0YPQtNCw0LvQtdC90LjRjyDQstGL0L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiBidXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxuICAgIGNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MsIGlkKSA9PiB7XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzLCBpZCB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICBcbiAgICAgICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgaWQgICAgID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKGlkLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MsIGlkKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpXG5cbn0iLCJsZXQgdXJsID0nc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2ltZ19DUlVEL2ltZ19kZWxldGVfZ3JvdXAucGhwJ1xuXG5jb25zdCBkZWxldGVJbWcgPSAobW9kYWxXaW5kb3csIGJ1dHRvbiwgaWRfZmllbGRfbmFtZSwgdGFibGVfbmFtZSkgPT4ge1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSkgXG5cbn1cblxuLy8gRFJZIC0g0YHQvtC+0YLQvdC+0YHQuNGC0YHRjyDRgSDRg9C00LDQu9C10L3QuNC10Lwg0L/QtdGA0LjQvtC00LBcbmNvbnN0IGdldENoZWNrSW1ncyA9IGFzeW5jIChpZCwgaWRfZmllbGRfbmFtZSkgPT4geyBcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFske2lkX2ZpZWxkX25hbWV9ID0gJHtpZH1dYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG59XG5cbmNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MsIHVybCwgdGFibGVfbmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzLCB0YWJsZV9uYW1lIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVJbWciLCJjb25zdCBpbml0X293bCA9ICgpID0+IHtcbiAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgc21hcnRTcGVlZDogMzAwMCxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA2MDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdF9vd2wiLCJpbXBvcnQgaW5pdF9vd2wgZnJvbSAnLi9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsJ1xuLy9pbXBvcnQgeyBkcm9wem9uZUhhbmRsZXJzIH0gZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfa2l0dHkuanMnXG5pbXBvcnQgeyBkcm9wem9uZUhhbmRsZXJzQ29tbW9uIH0gZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMnXG5pbXBvcnQgZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCBmcm9tICcuL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eV90aHVtYm5haWwuanMnXG5pbXBvcnQgZGVsZXRlSW1nIGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcnXG5pbXBvcnQgeyBkZWxldGVDb25maXJtYXRpb25zLCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kLCBkZWxldGVDb25maXJtYXRpb25zU3RhdGVzIH0gZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlJ1xuaW1wb3J0IGluaXRIYW5kbGVycyBmcm9tICcuL2Zyb250L2Jyb29kcydcbmltcG9ydCBpbml0SGFuZGxlcnNCYW5uZXIgZnJvbSAnLi9mcm9udC9iYW5uZXInXG5pbXBvcnQgaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSBmcm9tICcuL2Zyb250L2xhenlGZXRjaERhdGEvZmV0Y2hDb250ZW50S2l0dHknXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC00YDQvtC/0LfQvtC9INC00LvRjyDQvtCx0YnQuNGFINGE0L7RgtC+XG5kcm9wem9uZUhhbmRsZXJzQ29tbW9uKCdteS1kcm9wem9uZScsICdjb21tb24nKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuCDRhNC+0YLQviDQutC+0YLRj9GCINCyINGA0LDQt9GA0LXQt9C1INCy0YDQtdC80LXQvdC90YvRhSDQv9C10YDQuNC+0LTQvtCyXG4vL2Ryb3B6b25lSGFuZGxlcnMoJ2ltZ2tpdHR5JylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQutC+0YLRj9GCXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUtpdHR5JyksIFxuICAgICQoJyNkZWxldGVfa2l0dHknKSwgXG4gICAgJ3NyYy9EQi9raXR0eV9DUlVEL2tpdHR5X2RlbGV0ZS5waHAnLFxuICAgICdraXR0eV9pZCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0L/QvtC80LXRgtC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlQnJvb2QnKSwgXG4gICAgJCgnI2RlbGV0ZV9icm9vZCcpLCBcbiAgICAnc3JjL0RCL2tpdHR5X0NSVUQvYnJvb2RfQ1JVRC9icm9vZF9kZWxldGUucGhwJyxcbiAgICAnYnJvb2RfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC/0LXRgNC40L7QtNC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QoKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INGB0YLQsNGC0YPRgdC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMoKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQtNC70Y8g0LPQu9Cw0LLQvdC+0LPQviDRhNC+0YLQviDQutC+0YLQtdC90LrQsFxuZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCgpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QstC40L3QvtC5INC60LDRgNGD0YHQtdC70LhcbmluaXRfb3dsKClcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNC5INC60L7RgtC+0LJcbmRlbGV0ZUltZyhcbiAgICAkKCcjbW9kYWxEZWxldGVJbWcnKSxcbiAgICAkKCcjZGVsZXRlX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLFxuICAgICdpbWdraXR0eScpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0L7QsdGJ0LjRhSDRhNC+0YLQvlxuZGVsZXRlSW1nKFxuICAgICQoJyNtb2RhbERlbGV0ZUNvbW1vbkltZycpLFxuICAgICQoJyNkZWxldGVfY29tbW9uX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLCBcbiAgICAnaW1nY29tbW9uJylcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINC/0LXRgNC10LzQtdGJ0LXQvdC40Y8g0L/QvtC80LXRgtC+0LIg0LIg0LDRgNGF0LjQslxuaW5pdEhhbmRsZXJzKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINCy0YHQv9C70YvQstCw0Y7RidC10LPQviDRgNC10LrQu9Cw0LzQvdC+0LPQviDQsdCw0L3QvdC10YDQsFxuaW5pdEhhbmRsZXJzQmFubmVyKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyIFwi0LvQtdC90LjQstC+0LlcIiDQt9Cw0LPRgNGD0LfQutC4INGE0L7RgtC+0LrQvtC90YLQtdC90YLQsFxuaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSgpIl0sInNvdXJjZVJvb3QiOiIifQ==