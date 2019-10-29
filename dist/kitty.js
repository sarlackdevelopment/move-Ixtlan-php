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

// TODO: 
//    +0. Залить локализацию авторизации и доработать ее функционал.
//    +1. При загрузке фотографий котят и взрослых животных грузить только главные, остальное только при
//       нажатии на деталку. 
//    +4. Увеличить сложность пароля на проме (поиск по фразе "придумайте пароль посложнее")
//    +5. Проработать отправку письма на проме.
//    +6. Отсылать письмо при авторизации на почтовый ящик пользователя.
//    +7. Breed->Litter Free->Available sign_in->sign_up
//    +8. Добавление баннера в разрезе языка пользователя.
//    9. Добавление отзыва - все сломалось.
//    10. Не добавляется язык
//    +11. Корявое отображение панели навигации
//    12. Надо что-то сделать с адаптивностью русского шрифта (возможно заменить)
//    14. Оформить заказ на перевод. 
//    15. Проконсультироваться по вопросам SEO.
//    (!!!) 16. Добавить измерение языка в пометы. По-хорошему нужно отвязать локализируемый контент
//          от опорных таблиц и оставить только связи. Это блокер для переводов и SEO. Приоритет первичный
//    +17. Решить вопрос с перемещением local_constants и check_rules
//    +18. fontawesome-free лучше пока удалить из node_modules
//    +19. Очистить от неиспользуемого теперь функционала
//    20. Дописать конфигурационный файл для разделения dev и prom
//    +21. Какие-то проблемы с удалением периода
//    +22. При открытии деталки по котенку открывается первоначальное окно
//    23. Нужно наладить вкладки - то есть чтобы при открытии открывался первый (по алфавиту)
//         неархивный помет
//    24. Хард деплой
//    25. Локаизация отправки письма (в том числе и текст письма)
var initHandlers = function initHandlers() {
  $(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchInfo();

          case 2:
            data = _context.sent;
            init(data);
            handlePills(data);
            $('#v-pills-common-archive').on('click', handleArchivePills);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  $('.broodToArchive').click(
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(event) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
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
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
};
/* Скрываем вкладки распроданных пометов  */


var broodsInfo = undefined;

var fetchInfo =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(broodsInfo == undefined)) {
              _context3.next = 6;
              break;
            }

            _context3.next = 3;
            return fetch("src/DB/kitty_CRUD/brood_CRUD/brood_get_all.php", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 3:
            _context3.next = 5;
            return _context3.sent.json();

          case 5:
            broodsInfo = _context3.sent;

          case 6:
            return _context3.abrupt("return", broodsInfo);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function fetchInfo() {
    return _ref3.apply(this, arguments);
  };
}();

var init = function init(broodsInfo) {
  var target = broodsInfo.filter(function (_ref4) {
    var archive = _ref4.archive;
    return archive === '1';
  }).filter(function (_, index) {
    return index == 0;
  });

  if (target.length != 0) {
    $("#v-pills-headingBrood_".concat(target[0].id, "-tab")).tab('show');
  }
};

var handlePills = function handlePills(data) {
  var attrShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  data.forEach(function (_ref5) {
    var id = _ref5.id,
        archive = _ref5.archive;
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

    if (data.filter(function (_ref6) {
      var archive = _ref6.archive;
      return archive == '1';
    }).length == 0) {
      $('#v-pills-common-tab').tab('show');
    }
  });
};

var handleArchivePills =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var archive_pills, attrShow;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            archive_pills = $('#v-pills-common-archive');

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

            _context4.t0 = handlePills;
            _context4.next = 7;
            return fetchInfo();

          case 7:
            _context4.t1 = _context4.sent;
            _context4.t2 = attrShow;
            (0, _context4.t0)(_context4.t1, _context4.t2);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function handleArchivePills() {
    return _ref7.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvYnJvb2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5X3RodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvbGF6eUZldGNoRGF0YS9mZXRjaENvbnRlbnRLaXR0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tpdHR5LmpzIl0sIm5hbWVzIjpbImluaXRIYW5kbGVyc0Jhbm5lciIsIiQiLCJvbiIsImV2ZW50IiwiYXR0ciIsInJlbGF0ZWRUYXJnZXQiLCJkYXRhc2V0Iiwia2l0dHlJZCIsImNsaWNrIiwiZGF0YSIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibW9kYWwiLCJpbml0SGFuZGxlcnMiLCJmZXRjaEluZm8iLCJpbml0IiwiaGFuZGxlUGlsbHMiLCJoYW5kbGVBcmNoaXZlUGlsbHMiLCJ0YXJnZXQiLCJicm9vZElkIiwiYnJvb2RzSW5mbyIsInVuZGVmaW5lZCIsImpzb24iLCJmaWx0ZXIiLCJhcmNoaXZlIiwiXyIsImluZGV4IiwibGVuZ3RoIiwiaWQiLCJ0YWIiLCJhdHRyU2hvdyIsImZvckVhY2giLCJjdXJyZW50X3BpbGwiLCJoaWRlIiwic2hvdyIsImFyY2hpdmVfcGlsbHMiLCJodG1sIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImN1cnJlbnQiLCJpbml0T25lRHJvcHpvbmUiLCJmZXRjaEltZyIsImRyb3B6b25lSGFuZGxlcnNDb21tb24iLCJ2YWx1ZVRhcmdldEZlaWxkIiwiaWREcm9wem9uZSIsImFjY2VwdGVkRmlsZXMiLCJmaWxlIiwieGhyIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJjdXJyZW50X3VybCIsImN1cnJlbnRfaW5mIiwiaW1hZ2VzIiwia2l0dHlfaWQiLCJwZXJpb2RzX2lkIiwiZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCIsIm1heEZpbGVzIiwiYnJvb2RfaWQiLCJpbml0VGh1bWJuYWlsIiwiZmlsZXMiLCJyZW1vdmVGaWxlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cmwiLCJleGVjVGh1bWJuYWlsIiwiY29udGV4dCIsImN1cnJlbnRfaW1hZ2UiLCJjdXJyZW50RmlsZSIsIm5hbWUiLCJzaXplIiwiYWNjZXB0ZWQiLCJraW5kIiwidXBsb2FkIiwiZmlsZW5hbWUiLCJkYXRhVVJMIiwicHVzaCIsImVtaXQiLCJjcmVhdGVUaHVtYm5haWxGcm9tVXJsIiwib3B0aW9ucyIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidGh1bWJuYWlsTWV0aG9kIiwidGh1bWJuYWlsIiwiaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSIsImZldGNoUGlsbHNDYXB0aW9uIiwia2l0dHlQZXJpb2RzIiwiY3JlYXRlUGlsbHNQZXJpb2RzIiwiZGF0YVBlcmlvZHMiLCJyZXN1bHQiLCJhY3RpdmUiLCJjcmVhdGVQZXJpb2RzTGF5b3V0IiwicGlsbHNQZXJpb2RzIiwiZmV0Y2hLaXR0eVBob3RvcyIsInBlcmlvZF9pZCIsImtpdHR5UGhvdG9zIiwiY29udGVudFBlcmlvZCIsIm93bENvbnRlbnQiLCJmYW5jeUNvbnRlbnQiLCJwYXRocyIsInBhdGgiLCJjaGVja2JveCIsImVtcHR5Iiwib3dsQ2Fyb3VzZWwiLCJsb29wIiwibWFyZ2luIiwibmF2IiwiYXV0b3BsYXkiLCJzbWFydFNwZWVkIiwiYXV0b3BsYXlUaW1lb3V0IiwicmVzcG9uc2l2ZSIsImNyZWF0ZVBob3RvUGVyaW9kIiwic3BsaXQiLCJlYWNoIiwicmVtb3ZlQ2xhc3MiLCJjcmVhdGVIYW5kbGVyUGlsbHMiLCJjaGlsZHJlbiIsInBpbGxzQ2FwdGlvbiIsImRlbGV0ZUJ5SWQiLCJtb2RhbFdpbmRvdyIsImlkX2ZpZWxkX25hbWUiLCJnZXRBdHRyaWJ1dGUiLCJFcnJvciIsImdldENoZWNrSW1ncyIsIml0ZW0iLCJjdXJyZW50SXRlbUpRIiwicHJvcCIsImRlbGV0ZUNvbmZpcm1hdGlvbnMiLCJ0YXJnZXRCdXR0b24iLCJkZWxldGVDb25maXJtYXRpb25zU3RhdGVzIiwiYnV0dG9uIiwiZmV0Y2hEZWxldGVJbWdzIiwiY2hlY2tzIiwibWFpbkhhbmRsZXIiLCJkZWxldGVDb25maXJtYXRpb25zUGVyaW9kIiwiZGVsZXRlSW1nIiwidGFibGVfbmFtZSIsImluaXRfb3dsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBRTdCQyxHQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QkMsRUFBeEIsQ0FBMkIsZ0JBQTNCLEVBQ0ksVUFBQUMsS0FBSztBQUFBLFdBQUlGLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRyxJQUFwQixDQUF5QixTQUF6QixFQUFvQ0QsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkMsT0FBaEUsQ0FBSjtBQUFBLEdBRFQ7QUFJQU4sR0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JDLEVBQXhCLENBQTJCLGdCQUEzQixFQUNJLFVBQUFDLEtBQUs7QUFBQSxXQUFJRixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsSUFBdEIsQ0FBMkIsU0FBM0IsRUFBc0NELEtBQUssQ0FBQ0UsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJDLE9BQWxFLENBQUo7QUFBQSxHQURUO0FBSUFOLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CTyxLQUFwQixDQUEwQixZQUFNO0FBRTVCLFFBQU1DLElBQUksR0FBRztBQUNULGVBQVMsTUFEQTtBQUVULHVCQUFpQlIsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JTLEdBQXBCLEVBRlI7QUFHVCw0QkFBc0JULENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCUyxHQUF6QixFQUhiO0FBSVQsa0JBQVlULENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRyxJQUFwQixDQUF5QixTQUF6QjtBQUpILEtBQWI7QUFPQU8sU0FBSyxDQUFDLHVDQUFELEVBQTBDO0FBQzNDQyxZQUFNLEVBQUUsTUFEbUM7QUFFM0NDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLElBQWYsQ0FGcUM7QUFHM0NPLGFBQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQjtBQUhrQyxLQUExQyxDQUFMO0FBTUFmLEtBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCZ0IsS0FBeEIsQ0FBOEIsTUFBOUI7QUFFSCxHQWpCRDtBQW1CQWhCLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCTyxLQUF0QixDQUE0QixZQUFNO0FBRTlCLFFBQU1DLElBQUksR0FBRztBQUNULGVBQVMsTUFEQTtBQUVULHVCQUFpQixFQUZSO0FBR1QsNEJBQXNCLEVBSGI7QUFJVCxrQkFBWVIsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JHLElBQXRCLENBQTJCLFNBQTNCO0FBSkgsS0FBYjtBQU9BTyxTQUFLLENBQUMsdUNBQUQsRUFBMEM7QUFDM0NDLFlBQU0sRUFBRSxNQURtQztBQUUzQ0MsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sSUFBZixDQUZxQztBQUczQ08sYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCO0FBSGtDLEtBQTFDLENBQUw7QUFNQWYsS0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JnQixLQUF4QixDQUE4QixNQUE5QjtBQUVILEdBakJEO0FBbUJILENBaEREOztBQWtEZWpCLGlGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1rQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBRXZCakIsR0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRXFCa0IsU0FBUyxFQUY5Qjs7QUFBQTtBQUVRVixnQkFGUjtBQUlFVyxnQkFBSSxDQUFDWCxJQUFELENBQUo7QUFFQVksdUJBQVcsQ0FBQ1osSUFBRCxDQUFYO0FBRUFSLGFBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCQyxFQUE3QixDQUFnQyxPQUFoQyxFQUF5Q29CLGtCQUF6Qzs7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELEdBQUQ7QUFZQXJCLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQTJCLGtCQUFNTCxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVqQlEsS0FBSyxDQUFDLHdDQUFELEVBQTJDO0FBQ2xEQyxzQkFBTSxFQUFFLE1BRDBDO0FBRWxEQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDLDhCQUFZWixLQUFLLENBQUNvQixNQUFOLENBQWFqQixPQUFiLENBQXFCa0I7QUFBbEMsaUJBQWYsQ0FGNEM7QUFHbERSLHVCQUFPLEVBQUU7QUFBRSxrQ0FBZ0I7QUFBbEI7QUFIeUMsZUFBM0MsQ0FGWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVILENBeEJEO0FBMEJBOzs7QUFFQSxJQUFJUyxVQUFVLEdBQUdDLFNBQWpCOztBQUVBLElBQU1QLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFFVk0sVUFBVSxJQUFJQyxTQUZKO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBR2dCZixLQUFLLENBQUMsZ0RBQUQsRUFBbUQ7QUFDOUVDLG9CQUFNLEVBQUUsTUFEc0U7QUFFOUVJLHFCQUFPLEVBQUU7QUFBRSxnQ0FBZ0I7QUFBbEI7QUFGcUUsYUFBbkQsQ0FIckI7O0FBQUE7QUFBQTtBQUFBLGtDQU1OVyxJQU5NOztBQUFBO0FBR1ZGLHNCQUhVOztBQUFBO0FBQUEsOENBU1BBLFVBVE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVE4sU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmOztBQWFBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNLLFVBQUQsRUFBZ0I7QUFDekIsTUFBTUYsTUFBTSxHQUFHRSxVQUFVLENBQUNHLE1BQVgsQ0FBa0I7QUFBQSxRQUFFQyxPQUFGLFNBQUVBLE9BQUY7QUFBQSxXQUFlQSxPQUFPLEtBQUssR0FBM0I7QUFBQSxHQUFsQixFQUNWRCxNQURVLENBQ0gsVUFBQ0UsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsV0FBY0EsS0FBSyxJQUFJLENBQXZCO0FBQUEsR0FERyxDQUFmOztBQUdBLE1BQUlSLE1BQU0sQ0FBQ1MsTUFBUCxJQUFpQixDQUFyQixFQUF3QjtBQUNwQi9CLEtBQUMsaUNBQTBCc0IsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVVSxFQUFwQyxVQUFELENBQStDQyxHQUEvQyxDQUFtRCxNQUFuRDtBQUNIO0FBQ0osQ0FQRDs7QUFTQSxJQUFNYixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDWixJQUFELEVBQWdDO0FBQUEsTUFBekIwQixRQUF5Qix1RUFBZFQsU0FBYztBQUVoRGpCLE1BQUksQ0FBQzJCLE9BQUwsQ0FBYSxpQkFBbUI7QUFBQSxRQUFqQkgsRUFBaUIsU0FBakJBLEVBQWlCO0FBQUEsUUFBYkosT0FBYSxTQUFiQSxPQUFhO0FBRTVCLFFBQU1RLFlBQVksR0FBR3BDLENBQUMsaUNBQTBCZ0MsRUFBMUIsVUFBdEI7O0FBRUEsUUFBSUosT0FBTyxLQUFLLEdBQWhCLEVBQXFCO0FBRWpCLFVBQUtNLFFBQVEsS0FBS1QsU0FBZCxJQUE2QlMsUUFBUSxJQUFJLEdBQTdDLEVBQW1EO0FBQy9DRSxvQkFBWSxDQUFDQyxJQUFiLENBQWtCLE1BQWxCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hELG9CQUFZLENBQUNFLElBQWIsQ0FBa0IsTUFBbEI7QUFDSDtBQUVKLEtBUkQsTUFRTztBQUVILFVBQUtKLFFBQVEsS0FBS1QsU0FBZCxJQUE2QlMsUUFBUSxJQUFJLEdBQTdDLEVBQW1EO0FBQy9DRSxvQkFBWSxDQUFDRSxJQUFiLENBQWtCLE1BQWxCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hGLG9CQUFZLENBQUNDLElBQWIsQ0FBa0IsTUFBbEI7QUFDSDtBQUVKOztBQUVELFFBQUk3QixJQUFJLENBQUNtQixNQUFMLENBQVk7QUFBQSxVQUFFQyxPQUFGLFNBQUVBLE9BQUY7QUFBQSxhQUFlQSxPQUFPLElBQUksR0FBMUI7QUFBQSxLQUFaLEVBQTJDRyxNQUEzQyxJQUFxRCxDQUF6RCxFQUE0RDtBQUN4RC9CLE9BQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCaUMsR0FBekIsQ0FBNkIsTUFBN0I7QUFDSDtBQUVKLEdBMUJEO0FBNEJILENBOUJEOztBQWdDQSxJQUFNWixrQkFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVqQmtCLHlCQUZpQixHQUVEdkMsQ0FBQyxDQUFDLHlCQUFELENBRkE7O0FBSXZCLGdCQUFJdUMsYUFBYSxDQUFDcEMsSUFBZCxDQUFtQixNQUFuQixLQUE4QnNCLFNBQWxDLEVBQTZDO0FBQ3pDYywyQkFBYSxDQUFDcEMsSUFBZCxDQUFtQixNQUFuQixFQUEyQixHQUEzQjtBQUNIOztBQUVLK0Isb0JBUmlCLEdBUU5LLGFBQWEsQ0FBQ3BDLElBQWQsQ0FBbUIsTUFBbkIsQ0FSTTs7QUFVdkIsZ0JBQUkrQixRQUFRLElBQUksR0FBaEIsRUFBcUI7QUFDakJLLDJCQUFhLENBQUNwQyxJQUFkLENBQW1CLE1BQW5CLEVBQTJCLEdBQTNCO0FBQ0FvQywyQkFBYSxDQUFDQyxJQUFkLENBQW1CLGlCQUFuQjtBQUNILGFBSEQsTUFHTztBQUNIRCwyQkFBYSxDQUFDcEMsSUFBZCxDQUFtQixNQUFuQixFQUEyQixHQUEzQjtBQUNBb0MsMkJBQWEsQ0FBQ0MsSUFBZCxDQUFtQixVQUFuQjtBQUNIOztBQWhCc0IsMkJBa0J2QnBCLFdBbEJ1QjtBQUFBO0FBQUEsbUJBa0JMRixTQUFTLEVBbEJKOztBQUFBO0FBQUE7QUFBQSwyQkFrQlFnQixRQWxCUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWxCYixrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBc0JlSiwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdElBd0IsUUFBUSxDQUFDQyxZQUFULEdBQXdCLEtBQXhCO0FBRU8sSUFBTUMsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT0MsU0FBUCxFQUFrQkMsY0FBbEIsRUFBa0NDLFdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0NDLGtCQUEvQyw4REFBd0QsRUFBeEQ7O0FBRXRCQyxzQkFGc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUVULGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFDZkEsS0FBSyxDQUFDZCxPQUFOLENBQWMsVUFBQWUsT0FBTztBQUFBLGlDQUFJQyxlQUFlLENBQUNOLGNBQUQsRUFBaUJDLFdBQWpCLEVBQThCSSxPQUFPLENBQUNsQixFQUF0QyxDQUFuQjtBQUFBLHlCQUFyQixDQURlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRlM7O0FBQUEsOEJBRXRCZ0IsVUFGc0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMkJBS3RCQSxVQUxzQjtBQUFBO0FBQUEsbUJBS0xJLFFBQVEsQ0FBQ1IsU0FBRCxFQUFZRyxNQUFaLENBTEg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0QjtBQVNBLElBQU1VLHNCQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsa0JBQU9SLGNBQVAsRUFBdUJDLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUM1QkssZUFBZSxDQUFDTixjQUFELEVBQWlCQyxXQUFqQixFQUE4QixRQUE5QixDQURhOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBdEJPLHNCQUFzQjtBQUFBO0FBQUE7QUFBQSxHQUE1Qjs7QUFHUCxJQUFNRixlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT04sY0FBUCxFQUF1QkMsV0FBdkIsRUFBb0NRLGdCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZEMsc0JBRmMsY0FFR1YsY0FGSCxjQUVxQlMsZ0JBRnJCOztBQUlwQixnQkFBSXRELENBQUMsQ0FBQ3VELFVBQUQsQ0FBRCxDQUFjeEIsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUU1QixrQkFBSVUsUUFBSixDQUFhYyxVQUFiLEVBQXlCO0FBRXJCQyw2QkFBYSxFQUFFLFNBRk07QUFJckJyQyxvQkFBSSxFQUFFLGdCQUFZO0FBQ2QsdUJBQUtsQixFQUFMLENBQVEsU0FBUixFQUFtQixVQUFDd0QsSUFBRCxFQUFPQyxHQUFQLEVBQVlDLFFBQVosRUFBeUI7QUFDeENBLDRCQUFRLENBQUNDLE1BQVQsQ0FBZ0JkLFdBQWhCLEVBQTZCUSxnQkFBN0I7QUFDSCxtQkFGRDtBQUdIO0FBUm9CLGVBQXpCO0FBWUg7O0FBbEJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmSCxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCOztBQXNCQSxJQUFNQyxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT1IsU0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtCRyxrQkFBbEIsOERBQTJCLEVBQTNCO0FBRVRjLHVCQUZTLEdBRUssbUVBRkw7QUFHVEMsdUJBSFMsR0FHSztBQUFFbEIsdUJBQVMsRUFBVEEsU0FBRjtBQUFhRyxvQkFBTSxFQUFOQTtBQUFiLGFBSEw7QUFJVGhDLG1CQUpTLEdBSUs7QUFBRSw4QkFBZ0I7QUFBbEIsYUFKTDtBQUFBO0FBQUEsbUJBTWFMLEtBQUssQ0FBQ21ELFdBQUQsRUFBYztBQUN6Q2xELG9CQUFNLEVBQUUsTUFEaUM7QUFFekNDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZ0QsV0FBZixDQUZtQztBQUd6Qy9DLHFCQUFPLEVBQUVBO0FBSGdDLGFBQWQsQ0FObEI7O0FBQUE7QUFBQTtBQUFBLGtDQVVUVyxJQVZTOztBQUFBO0FBTVRxQyxrQkFOUztBQUFBLDhDQVlOQSxNQVpNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVJYLFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQSxJQUFNRCxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxpQkFBT2EsUUFBUCxFQUFpQkMsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXBCeEIsb0JBQVEsQ0FBQ0MsWUFBVCxHQUF3QixLQUF4QjtBQUVNYSxzQkFKYywyQkFJZ0JTLFFBSmhCLGVBSTZCQyxVQUo3Qjs7QUFNcEIsZ0JBQUlqRSxDQUFDLENBQUN1RCxVQUFELENBQUQsQ0FBY3hCLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFFNUIsa0JBQUlVLFFBQUosQ0FBYWMsVUFBYixFQUF5QjtBQUVyQkMsNkJBQWEsRUFBRSxTQUZNO0FBSXJCckMsb0JBQUksRUFBRSxnQkFBWTtBQUNkLHVCQUFLbEIsRUFBTCxDQUFRLFNBQVIsRUFBbUIsVUFBQ3dELElBQUQsRUFBT0MsR0FBUCxFQUFZQyxRQUFaLEVBQXlCO0FBQ3hDQSw0QkFBUSxDQUFDQyxNQUFULENBQWdCLFVBQWhCLEVBQTRCSSxRQUE1QjtBQUNBTCw0QkFBUSxDQUFDQyxNQUFULENBQWdCLFdBQWhCLEVBQTZCSyxVQUE3QjtBQUNILG1CQUhEO0FBSUg7QUFUb0IsZUFBekI7QUFhSDs7QUFyQm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZkLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7O0FBeUJlQSw4RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQSxJQUFNZSwrQkFBK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVwQ3pCLG9CQUFRLENBQUNDLFlBQVQsR0FBd0IsS0FBeEI7O0FBRU1NLHNCQUo4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBSWpCLGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFBZUEsS0FBSyxDQUFDZCxPQUFOLENBQWMsVUFBQWUsT0FBTztBQUFBLGlDQUFJQyxlQUFlLENBQUNELE9BQUQsQ0FBbkI7QUFBQSx5QkFBckIsQ0FBZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUppQjs7QUFBQSw4QkFJOUJGLFVBSjhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDJCQU05QkEsVUFOOEI7QUFBQTtBQUFBLG1CQU1iSSxRQUFRLEVBTks7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBL0JjLCtCQUErQjtBQUFBO0FBQUE7QUFBQSxHQUFyQzs7QUFVQSxJQUFNZixlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT0QsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaEJLLHNCQUZnQiwwQkFFYUwsT0FBTyxDQUFDbEIsRUFGckI7O0FBSXBCLGdCQUFJaEMsQ0FBQyxDQUFDdUQsVUFBRCxDQUFELENBQWN4QixNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBRTVCLGtCQUFJVSxRQUFKLENBQWFjLFVBQWIsRUFBeUI7QUFFckJDLDZCQUFhLEVBQUUsU0FGTTtBQUdyQlcsd0JBQVEsRUFBRSxDQUhXO0FBS3JCaEQsb0JBQUksRUFBRSxnQkFBWTtBQUFBOztBQUNkLHVCQUFLbEIsRUFBTCxDQUFRLFNBQVIsRUFBbUIsVUFBQ3dELElBQUQsRUFBT0MsR0FBUCxFQUFZQyxRQUFaLEVBQXlCO0FBQ3hDQSw0QkFBUSxDQUFDQyxNQUFULENBQWdCLFVBQWhCLEVBQTRCVixPQUFPLENBQUNsQixFQUFwQztBQUNBMkIsNEJBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFoQixFQUE0QlYsT0FBTyxDQUFDa0IsUUFBcEM7QUFDSCxtQkFIRDtBQUlBLHVCQUFLbkUsRUFBTCxDQUFRLFdBQVIsRUFBcUIsVUFBQ3dELElBQUQsRUFBVTtBQUMzQix3QkFBSSxDQUFFQSxJQUFJLENBQUNZLGFBQVAsSUFBMEIsS0FBSSxDQUFDQyxLQUFMLENBQVcsQ0FBWCxLQUFpQixJQUEvQyxFQUFzRDtBQUNsRCwyQkFBSSxDQUFDQyxVQUFMLENBQWdCLEtBQUksQ0FBQ0QsS0FBTCxDQUFXLENBQVgsQ0FBaEI7QUFDSDtBQUNKLG1CQUpEO0FBS0EsdUJBQUtyRSxFQUFMLENBQVEsU0FBUixFQUFtQjtBQUFBLDJCQUFNdUUsUUFBUSxDQUFDQyxNQUFULEVBQU47QUFBQSxtQkFBbkI7O0FBQ0Esc0JBQUt2QixPQUFPLElBQUksSUFBWixJQUFzQkEsT0FBTyxDQUFDd0IsR0FBUixJQUFlLElBQXpDLEVBQWdEO0FBQzVDQyxpQ0FBYSxDQUFDLElBQUQsRUFBT3pCLE9BQVAsQ0FBYjtBQUNIO0FBQ0o7QUFuQm9CLGVBQXpCO0FBdUJIOztBQTdCbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZkMsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7QUFpQ0EsSUFBTUMsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVRTLHVCQUZTLEdBRUssNkNBRkw7QUFHVDlDLG1CQUhTLEdBR0s7QUFBRSw4QkFBZ0I7QUFBbEIsYUFITDtBQUFBO0FBQUEsbUJBS2FMLEtBQUssQ0FBQ21ELFdBQUQsRUFBYztBQUN6Q2xELG9CQUFNLEVBQUUsTUFEaUM7QUFFekNJLHFCQUFPLEVBQUVBO0FBRmdDLGFBQWQsQ0FMbEI7O0FBQUE7QUFBQTtBQUFBLGtDQVFUVyxJQVJTOztBQUFBO0FBS1RxQyxrQkFMUztBQUFBLDhDQVVOQSxNQVZNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVJYLFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZCxDLENBY0E7OztBQUNBLElBQU11QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLE9BQUQsRUFBVUMsYUFBVixFQUE0QjtBQUU5QyxNQUFJQyxXQUFXLEdBQUc7QUFDZEMsUUFBSSxFQUFFRixhQUFhLENBQUNFLElBRE47QUFFZEMsUUFBSSxFQUFFSCxhQUFhLENBQUNHLElBRk47QUFHZEMsWUFBUSxFQUFFLElBSEk7QUFJZEMsUUFBSSxFQUFFLE9BSlE7QUFLZEMsVUFBTSxFQUFFO0FBQ0pDLGNBQVEsRUFBRVAsYUFBYSxDQUFDRTtBQURwQixLQUxNO0FBUWRNLFdBQU8sRUFBRVIsYUFBYSxDQUFDSDtBQVJULEdBQWxCO0FBV0FFLFNBQU8sQ0FBQ04sS0FBUixDQUFjZ0IsSUFBZCxDQUFtQlIsV0FBbkI7QUFDQUYsU0FBTyxDQUFDVyxJQUFSLENBQWEsV0FBYixFQUEwQlQsV0FBMUI7QUFDQUYsU0FBTyxDQUFDWSxzQkFBUixDQUNJVixXQURKLEVBRUlGLE9BQU8sQ0FBQ2EsT0FBUixDQUFnQkMsY0FGcEIsRUFHSWQsT0FBTyxDQUFDYSxPQUFSLENBQWdCRSxlQUhwQixFQUlJZixPQUFPLENBQUNhLE9BQVIsQ0FBZ0JHLGVBSnBCLEVBS0loQixPQUxKLEVBTUksVUFBQWlCLFNBQVMsRUFBSTtBQUNUakIsV0FBTyxDQUFDVyxJQUFSLENBQWEsV0FBYixFQUEwQlQsV0FBMUIsRUFBdUNlLFNBQXZDO0FBQ0FqQixXQUFPLENBQUNXLElBQVIsQ0FBYSxVQUFiLEVBQXlCVCxXQUF6QjtBQUNILEdBVEw7QUFZSCxDQTNCRDs7QUE2QmVaLDhGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTs7QUFFQSxJQUFNNEIsNEJBQTRCLEdBQUcsU0FBL0JBLDRCQUErQixHQUFNO0FBRXZDOUYsR0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JDLEVBQXhCLENBQTJCLGdCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQTZDLGtCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV6QztBQUVBO0FBQ002RiwrQkFMbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUtmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVoQjNCLGtDQUZnQixHQUVMbEUsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxPQUFwQixDQUE0QmtCLE9BRnZCO0FBQUE7QUFBQSxpQ0FJWWIsS0FBSyxDQUFDLDhDQUFELEVBQWlEO0FBQ3BGQyxrQ0FBTSxFQUFFLE1BRDRFO0FBRXBGQyxnQ0FBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFc0Qsc0NBQVEsRUFBUkE7QUFBRiw2QkFBZixDQUY4RTtBQUdwRnJELG1DQUFPLEVBQUU7QUFBRSw4Q0FBZ0I7QUFBbEI7QUFIMkUsMkJBQWpELENBSmpCOztBQUFBO0FBQUE7QUFBQSwrQ0FRbEJXLElBUmtCOztBQUFBO0FBSWhCc0Usc0NBSmdCO0FBQUEsMkRBVWZBLFlBVmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTGU7O0FBQUEsZ0NBS25DRCxpQkFMbUM7QUFBQTtBQUFBO0FBQUEsbUJBbUJ6Qzs7O0FBQ01FLGdDQXBCbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQW9CZCxrQkFBT0MsV0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFbkJDLGdDQUZtQixHQUVWLEVBRlU7QUFHbkJDLGdDQUhtQixHQUdWLFFBSFU7QUFLdkJGLHFDQUFXLENBQUMvRCxPQUFaLENBQW9CLGlCQUFnQjtBQUFBLGdDQUFkSCxFQUFjLFNBQWRBLEVBQWM7QUFBQSxnQ0FBVitDLElBQVUsU0FBVkEsSUFBVTtBQUNoQ29CLGtDQUFNLEdBQUdBLE1BQU0sOEVBRVVDLE1BRlYsNEJBRWdDcEUsRUFGaEMsbURBRXVFQSxFQUZ2RSxvREFFK0dBLEVBRi9HLGdDQUVzSW9FLE1BQU0sS0FBSyxFQUFYLEdBQWdCLE1BQWhCLEdBQXlCLE9BRi9KLGdCQUU0S3JCLElBRjVLLGdDQUFmO0FBSUFxQixrQ0FBTSxHQUFHLEVBQVQ7QUFDSCwyQkFORDtBQUx1Qiw0REFhaEJELE1BYmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCYzs7QUFBQSxnQ0FvQm5DRixrQkFwQm1DO0FBQUE7QUFBQTtBQUFBLG1CQXFDekM7OztBQUNNSSxpQ0F0Q21DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FzQ2Isa0JBQU9DLFlBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV4QnRHLDJCQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjRELE1BQXhCLHFIQUVVMEMsWUFGVjs7QUFGd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdENhOztBQUFBLGdDQXNDbkNELG1CQXRDbUM7QUFBQTtBQUFBO0FBQUE7QUFpRHpDOzs7QUFFTXJDLHNCQW5EbUMsR0FtRHhCOUQsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkMsT0FuREosRUFxRHpDOztBQUNNaUcsOEJBdERtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBc0RoQixrQkFBT0MsU0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUVZOUYsS0FBSyxDQUFDLGlEQUFELEVBQW9EO0FBQ3RGQyxrQ0FBTSxFQUFFLE1BRDhFO0FBRXRGQyxnQ0FBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFa0Qsc0NBQVEsRUFBUkEsUUFBRjtBQUFZd0MsdUNBQVMsRUFBVEE7QUFBWiw2QkFBZixDQUZnRjtBQUd0RnpGLG1DQUFPLEVBQUU7QUFBRSw4Q0FBZ0I7QUFBbEI7QUFINkUsMkJBQXBELENBRmpCOztBQUFBO0FBQUE7QUFBQSxnREFNakJXLElBTmlCOztBQUFBO0FBRWYrRSxxQ0FGZTtBQUFBLDREQVFkQSxXQVJjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXREZ0I7O0FBQUEsZ0NBc0RuQ0YsZ0JBdERtQztBQUFBO0FBQUE7QUFBQSxtQkFrRXpDOzs7QUFDTUcsMkJBbkVtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBbUVuQixrQkFBT2xHLElBQVAsRUFBYWdHLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWRHLG9DQUZjLEdBRUQsRUFGQztBQUdkQyxzQ0FIYyxHQUdDLEVBSEQ7QUFLWkMsK0JBTFksR0FLSnJHLElBQUksQ0FBQyxPQUFELENBTEE7QUFPbEJxRywrQkFBSyxDQUFDMUUsT0FBTixDQUFjLGlCQUFzQjtBQUFBLGdDQUFwQjJFLElBQW9CLFNBQXBCQSxJQUFvQjtBQUFBLGdDQUFkQyxRQUFjLFNBQWRBLFFBQWM7QUFFaENKLHNDQUFVLEdBQUdBLFVBQVUsa0VBRVBHLElBRk8sOEtBQXZCO0FBS0FGLHdDQUFZLEdBQUdBLFlBQVkseUdBRUc1QyxRQUZILGNBRWV3QyxTQUZmLHVCQUVtQ00sSUFGbkMseUVBR1dBLElBSFgsOE1BS3JCQyxRQUxxQiw2QkFBM0I7QUFRSCwyQkFmRDtBQWlCQS9HLDJCQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QjRELE1BQTVCLCtEQUNxQzRDLFNBRHJDLHFGQUVVaEcsSUFBSSxDQUFDLGNBQUQsQ0FGZCwwSkFJd0NtRyxVQUp4Qyw4S0FPK0JDLFlBUC9CLHFFQVNVcEcsSUFBSSxDQUFDLGVBQUQsQ0FUZDtBQWFBUiwyQkFBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmdILEtBQW5CLEdBQTJCcEQsTUFBM0IsQ0FBa0NwRCxJQUFJLENBQUMsYUFBRCxDQUF0QztBQUVBUiwyQkFBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJnSCxLQUE3QixHQUFxQ3BELE1BQXJDLENBQTRDcEQsSUFBSSxDQUFDLE1BQUQsQ0FBaEQ7QUFFQVIsMkJBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJpSCxXQUFuQixDQUErQjtBQUMzQkMsZ0NBQUksRUFBRSxJQURxQjtBQUUzQkMsa0NBQU0sRUFBRSxFQUZtQjtBQUczQkMsK0JBQUcsRUFBRSxLQUhzQjtBQUkzQkMsb0NBQVEsRUFBRSxJQUppQjtBQUszQkMsc0NBQVUsRUFBRSxJQUxlO0FBTTNCQywyQ0FBZSxFQUFFLElBTlU7QUFPM0JDLHNDQUFVLEVBQUU7QUFDUixpQ0FBRztBQUNDdkUscUNBQUssRUFBRTtBQURSLCtCQURLO0FBSVIsbUNBQUs7QUFDREEscUNBQUssRUFBRTtBQUROLCtCQUpHO0FBT1Isb0NBQU07QUFDRkEscUNBQUssRUFBRTtBQURMO0FBUEU7QUFQZSwyQkFBL0I7QUFvQkFqRCwyQkFBQyxtQ0FBNEJ3RyxTQUE1QixFQUFELENBQTBDckcsSUFBMUMsQ0FBK0MsbUJBQS9DLEVBQW9FLEdBQXBFOztBQTdEa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkVtQjs7QUFBQSxnQ0FtRW5DdUcsYUFuRW1DO0FBQUE7QUFBQTtBQUFBLG1CQW9JekM7OztBQUNNZSwrQkFySW1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FxSWYsa0JBQU9qQixTQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FFbEJ4RyxDQUFDLG1DQUE0QndHLFNBQTVCLEVBQUQsQ0FBMENyRyxJQUExQyxDQUErQyxtQkFBL0MsTUFBd0VzQixTQUZ0RDtBQUFBO0FBQUE7QUFBQTs7QUFBQSx5Q0FJWmlGLGFBSlk7QUFBQTtBQUFBLGlDQUlRSCxnQkFBZ0IsQ0FBQ0MsU0FBRCxDQUp4Qjs7QUFBQTtBQUFBO0FBQUEseUNBSXFDQSxTQUpyQztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlDQU1ackQscUZBQWUsQ0FBQ2EsUUFBRCxFQUFXd0MsU0FBUyxDQUFDa0IsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFYLENBTkg7O0FBQUE7QUFVdEIxSCwyQkFBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0MySCxJQUF0QyxDQUEyQyxZQUFZO0FBQ25EM0gsNkJBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRILFdBQVIsQ0FBb0IsYUFBcEI7QUFDSCwyQkFGRDtBQUlBNUgsMkJBQUMsbUNBQTRCd0csU0FBNUIsRUFBRCxDQUEwQ3ZFLEdBQTFDLENBQThDLE1BQTlDOztBQWRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFySWU7O0FBQUEsZ0NBcUluQ3dGLGlCQXJJbUM7QUFBQTtBQUFBO0FBQUEsbUJBdUp6Qzs7O0FBQ01JLGdDQXhKbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQXdKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCN0gsMkJBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDQyxFQUExQyxDQUE2QyxjQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQUE2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FDbkR3SCxpQkFBaUIsQ0FBQ3pILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLElBQWIsQ0FBRCxDQURrQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBN0Q7O0FBRHVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhKYzs7QUFBQSxnQ0F3Sm5DMEgsa0JBeEptQztBQUFBO0FBQUE7QUFBQTtBQThKekM7OztBQTlKeUMsb0JBZ0tyQzdILENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCOEgsUUFBeEIsR0FBbUMvRixNQUFuQyxLQUE4QyxDQWhLVDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQWtLVmdFLGlCQUFpQixFQWxLUDs7QUFBQTtBQWtLL0JnQywwQkFsSytCOztBQUFBLG9CQW9LakNBLFlBQVksQ0FBQ2hHLE1BQWIsS0FBd0IsQ0FwS1M7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkJBdUszQnNFLG1CQXZLMkI7QUFBQTtBQUFBLHFCQXVLREosa0JBQWtCLENBQUM4QixZQUFELENBdktqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBMEszQkYsa0JBQWtCLEVBMUtTOztBQUFBO0FBQUE7QUFBQSxxQkE2SzNCSixpQkFBaUIsa0JBQVdNLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IvRixFQUEzQixFQTdLVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE3Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFMQWhDLEdBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCQyxFQUF4QixDQUEyQixlQUEzQixFQUE0QztBQUFBLFdBQU1ELENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCZ0gsS0FBeEIsRUFBTjtBQUFBLEdBQTVDO0FBRUgsQ0F6TEQ7O0FBMkxlbEIsMkZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TEEsSUFBTWtDLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHLGtCQUFPQyxXQUFQLEVBQW9CdkQsR0FBcEIsRUFBeUJ3RCxhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWGxHLGNBRlcsR0FFTjlCLEtBQUssQ0FBQ29CLE1BQU4sQ0FBYTZHLFlBQWIsQ0FBMEJELGFBQTFCLENBRk07QUFBQTtBQUFBO0FBQUEsbUJBTUx4SCxLQUFLLENBQUNnRSxHQUFELEVBQU07QUFDYi9ELG9CQUFNLEVBQUUsTUFESztBQUViQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFa0Isa0JBQUUsRUFBRkE7QUFBRixlQUFmLENBRk87QUFHYmpCLHFCQUFPLEVBQUU7QUFBRSxnQ0FBZ0I7QUFBbEI7QUFISSxhQUFOLENBTkE7O0FBQUE7QUFBQTtBQUFBLG1CQVlMO0FBQUE7QUFBQSxvQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBQVlrSCxXQUFXLENBQUNqSCxLQUFaLENBQWtCLE1BQWxCLENBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBRCxJQVpLOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFlTCxJQUFJb0gsS0FBSixDQUFVLHVDQUFWLENBZks7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkosVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7QUFtQkEsSUFBTUssWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsa0JBQU9yRyxFQUFQLEVBQVdrRyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUViL0Isa0JBRmEsR0FFSixFQUZJO0FBSWpCbkcsYUFBQyxpQkFBVWtJLGFBQVYsZ0JBQTZCbEcsRUFBN0IsT0FBRCxDQUFxQzJGLElBQXJDLENBQTBDLFVBQUM3RixLQUFELEVBQVF3RyxJQUFSLEVBQWlCO0FBQ3ZELGtCQUFJQyxhQUFhLEdBQUd2SSxDQUFDLENBQUNzSSxJQUFELENBQXJCO0FBQ0Esa0JBQUlDLGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQixTQUFuQixDQUFKLEVBQ0lyQyxNQUFNLENBQUNiLElBQVAsQ0FBWWlELGFBQWEsQ0FBQzlILEdBQWQsRUFBWjtBQUNQLGFBSkQ7QUFKaUIsOENBVVYwRixNQVZVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVprQyxZQUFZO0FBQUE7QUFBQTtBQUFBLEdBQWxCOztBQWNPLElBQU1JLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ1IsV0FBRCxFQUFjUyxZQUFkLEVBQTRCaEUsR0FBNUIsRUFBaUN3RCxhQUFqQyxFQUFtRDtBQUVsRlEsY0FBWSxDQUFDbkksS0FBYixDQUFtQjtBQUFBLFdBQU15SCxVQUFVLENBQUNDLFdBQUQsRUFBY3ZELEdBQWQsRUFBbUJ3RCxhQUFuQixDQUFoQjtBQUFBLEdBQW5CO0FBRUFELGFBQVcsQ0FBQ2hJLEVBQVosQ0FBZSxnQkFBZixFQUNJLFVBQUFDLEtBQUs7QUFBQSxXQUFJd0ksWUFBWSxDQUFDdkksSUFBYixDQUFrQitILGFBQWxCLEVBQWlDaEksS0FBSyxDQUFDRSxhQUFOLENBQW9CK0gsWUFBcEIsQ0FBaUNELGFBQWpDLENBQWpDLENBQUo7QUFBQSxHQURUO0FBR0gsQ0FQTTtBQVNBLElBQU1TLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsR0FBTTtBQUUzQyxNQUFJVixXQUFXLEdBQUtqSSxDQUFDLENBQUMsbUJBQUQsQ0FBckI7QUFDQSxNQUFJNEksTUFBTSxHQUFVNUksQ0FBQyxDQUFDLGVBQUQsQ0FBckI7QUFDQSxNQUFJa0ksYUFBYSxHQUFHLFVBQXBCO0FBQ0EsTUFBSXhELEdBQUcsR0FBYSxxREFBcEI7O0FBRUEsTUFBTW1FLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFHLGtCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVoQmhGLHlCQUZnQixHQUVGO0FBQUVnRixzQkFBTSxFQUFOQTtBQUFGLGVBRkU7QUFHaEIvSCxxQkFIZ0IsR0FHRjtBQUFFLGdDQUFnQjtBQUFsQixlQUhFO0FBS3BCTCxtQkFBSyxDQUFDZ0UsR0FBRCxFQUFNO0FBQUUvRCxzQkFBTSxFQUFFLE1BQVY7QUFBa0JDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZ0QsV0FBZixDQUF4QjtBQUFxRC9DLHVCQUFPLEVBQUVBO0FBQTlELGVBQU4sQ0FBTDs7QUFMb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZjhILGVBQWU7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBU0EsTUFBTUUsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDR1YsWUFBWSxDQUFDLE1BQUQsRUFBU0gsYUFBVCxDQURmOztBQUFBO0FBQ1pZLG9CQURZO0FBQUE7QUFBQSxxQkFHVkQsZUFBZSxDQUFDQyxNQUFELENBSEw7O0FBQUE7QUFBQTtBQUFBLHFCQUlWO0FBQUE7QUFBQSxzQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBQVliLFdBQVcsQ0FBQ2pILEtBQVosQ0FBa0IsTUFBbEIsQ0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFELElBSlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWCtILFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBT0FILFFBQU0sQ0FBQ3JJLEtBQVAsQ0FBYSxVQUFBTCxLQUFLO0FBQUEsV0FBSTZJLFdBQVcsQ0FBQzdJLEtBQUQsQ0FBZjtBQUFBLEdBQWxCO0FBRUgsQ0F6Qk07QUEyQkEsSUFBTThJLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsR0FBTTtBQUUzQyxNQUFJZixXQUFXLEdBQUtqSSxDQUFDLENBQUMsb0JBQUQsQ0FBckI7QUFDQSxNQUFJNEksTUFBTSxHQUFVNUksQ0FBQyxDQUFDLGdCQUFELENBQXJCO0FBQ0EsTUFBSWtJLGFBQWEsR0FBRyxVQUFwQjtBQUNBLE1BQUl4RCxHQUFHLEdBQWEsdURBQXBCLENBTDJDLENBTzNDOztBQUNBdUQsYUFBVyxDQUFDaEksRUFBWixDQUFlLGdCQUFmLEVBQ0ksVUFBQUMsS0FBSztBQUFBLFdBQUkwSSxNQUFNLENBQUN6SSxJQUFQLENBQVkrSCxhQUFaLEVBQ0xoSSxLQUFLLENBQUNFLGFBQU4sQ0FBb0IrSCxZQUFwQixDQUFpQ0QsYUFBakMsQ0FESyxDQUFKO0FBQUEsR0FEVDs7QUFJQSxNQUFNVyxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBRyxrQkFBT0MsTUFBUCxFQUFlOUcsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaEI4Qix5QkFGZ0IsR0FFRjtBQUFFZ0Ysc0JBQU0sRUFBTkEsTUFBRjtBQUFVOUcsa0JBQUUsRUFBRkE7QUFBVixlQUZFO0FBR2hCakIscUJBSGdCLEdBR0Y7QUFBRSxnQ0FBZ0I7QUFBbEIsZUFIRTtBQUtwQkwsbUJBQUssQ0FBQ2dFLEdBQUQsRUFBTTtBQUFFL0Qsc0JBQU0sRUFBRSxNQUFWO0FBQWtCQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWdELFdBQWYsQ0FBeEI7QUFBcUQvQyx1QkFBTyxFQUFFQTtBQUE5RCxlQUFOLENBQUw7O0FBTG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWY4SCxlQUFlO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQVNBLE1BQU1FLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFHLGtCQUFNN0ksS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWjhCLGdCQURZLEdBQ0g5QixLQUFLLENBQUNvQixNQUFOLENBQWE2RyxZQUFiLENBQTBCRCxhQUExQixDQURHO0FBQUE7QUFBQSxxQkFFR0csWUFBWSxDQUFDckcsRUFBRCxFQUFLa0csYUFBTCxDQUZmOztBQUFBO0FBRVpZLG9CQUZZO0FBQUE7QUFBQSxxQkFJVkQsZUFBZSxDQUFDQyxNQUFELEVBQVM5RyxFQUFULENBSkw7O0FBQUE7QUFBQTtBQUFBLHFCQUtWO0FBQUE7QUFBQSxzQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBQVlpRyxXQUFXLENBQUNqSCxLQUFaLENBQWtCLE1BQWxCLENBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBRCxJQUxVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVgrSCxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQVFBSCxRQUFNLENBQUNySSxLQUFQLENBQWEsVUFBQUwsS0FBSztBQUFBLFdBQUk2SSxXQUFXLENBQUM3SSxLQUFELENBQWY7QUFBQSxHQUFsQjtBQUVILENBL0JNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVQLElBQUl3RSxHQUFHLEdBQUUsd0RBQVQ7O0FBRUEsSUFBTXVFLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNoQixXQUFELEVBQWNXLE1BQWQsRUFBc0JWLGFBQXRCLEVBQXFDZ0IsVUFBckMsRUFBb0Q7QUFFbEU7QUFDQWpCLGFBQVcsQ0FBQ2hJLEVBQVosQ0FBZSxnQkFBZixFQUNJLFVBQUFDLEtBQUs7QUFBQSxXQUFJMEksTUFBTSxDQUFDekksSUFBUCxDQUFZK0gsYUFBWixFQUNMaEksS0FBSyxDQUFDRSxhQUFOLENBQW9CK0gsWUFBcEIsQ0FBaUNELGFBQWpDLENBREssQ0FBSjtBQUFBLEdBRFQ7O0FBSUEsTUFBTWEsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUcsa0JBQU03SSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaOEIsZ0JBRFksR0FDSDlCLEtBQUssQ0FBQ29CLE1BQU4sQ0FBYTZHLFlBQWIsQ0FBMEJELGFBQTFCLENBREc7QUFBQTtBQUFBLHFCQUVHRyxZQUFZLENBQUNyRyxFQUFELEVBQUtrRyxhQUFMLENBRmY7O0FBQUE7QUFFWlksb0JBRlk7QUFBQTtBQUFBLHFCQUlWRCxlQUFlLENBQUNDLE1BQUQsRUFBU3BFLEdBQVQsRUFBY3dFLFVBQWQsQ0FKTDs7QUFBQTtBQUFBO0FBQUEscUJBS1Y7QUFBQTtBQUFBLHNDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFBWWpCLFdBQVcsQ0FBQ2pILEtBQVosQ0FBa0IsTUFBbEIsQ0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFELElBTFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWCtILFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBUUFILFFBQU0sQ0FBQ3JJLEtBQVAsQ0FBYSxVQUFBTCxLQUFLO0FBQUEsV0FBSTZJLFdBQVcsQ0FBQzdJLEtBQUQsQ0FBZjtBQUFBLEdBQWxCO0FBRUgsQ0FqQkQsQyxDQW1CQTs7O0FBQ0EsSUFBTW1JLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHLGtCQUFPckcsRUFBUCxFQUFXa0csYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFYi9CLGtCQUZhLEdBRUosRUFGSTtBQUlqQm5HLGFBQUMsaUJBQVVrSSxhQUFWLGdCQUE2QmxHLEVBQTdCLE9BQUQsQ0FBcUMyRixJQUFyQyxDQUEwQyxVQUFDN0YsS0FBRCxFQUFRd0csSUFBUixFQUFpQjtBQUN2RCxrQkFBSUMsYUFBYSxHQUFHdkksQ0FBQyxDQUFDc0ksSUFBRCxDQUFyQjtBQUNBLGtCQUFJQyxhQUFhLENBQUNDLElBQWQsQ0FBbUIsU0FBbkIsQ0FBSixFQUNJckMsTUFBTSxDQUFDYixJQUFQLENBQVlpRCxhQUFhLENBQUM5SCxHQUFkLEVBQVo7QUFDUCxhQUpEO0FBSmlCLDhDQVVWMEYsTUFWVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFaa0MsWUFBWTtBQUFBO0FBQUE7QUFBQSxHQUFsQjs7QUFjQSxJQUFNUSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT0MsTUFBUCxFQUFlcEUsR0FBZixFQUFvQndFLFVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVoQnBGLHVCQUZnQixHQUVGO0FBQUVnRixvQkFBTSxFQUFOQSxNQUFGO0FBQVVJLHdCQUFVLEVBQVZBO0FBQVYsYUFGRTtBQUdoQm5JLG1CQUhnQixHQUdGO0FBQUUsOEJBQWdCO0FBQWxCLGFBSEU7QUFLcEJMLGlCQUFLLENBQUNnRSxHQUFELEVBQU07QUFBRS9ELG9CQUFNLEVBQUUsTUFBVjtBQUFrQkMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVnRCxXQUFmLENBQXhCO0FBQXFEL0MscUJBQU8sRUFBRUE7QUFBOUQsYUFBTixDQUFMOztBQUxvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmOEgsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7QUFTZUksd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQm5KLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJpSCxXQUFuQixDQUErQjtBQUMzQkMsUUFBSSxFQUFFLElBRHFCO0FBRTNCQyxVQUFNLEVBQUUsRUFGbUI7QUFHM0JDLE9BQUcsRUFBRSxLQUhzQjtBQUkzQkMsWUFBUSxFQUFFLElBSmlCO0FBSzNCQyxjQUFVLEVBQUUsSUFMZTtBQU0zQkMsbUJBQWUsRUFBRSxJQU5VO0FBTzNCQyxjQUFVLEVBQUU7QUFDUixTQUFHO0FBQ0N2RSxhQUFLLEVBQUU7QUFEUixPQURLO0FBSVIsV0FBSztBQUNEQSxhQUFLLEVBQUU7QUFETixPQUpHO0FBT1IsWUFBTTtBQUNGQSxhQUFLLEVBQUU7QUFETDtBQVBFO0FBUGUsR0FBL0I7QUFtQkgsQ0FwQkQ7O0FBc0Jla0csdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E5RiwwR0FBc0IsQ0FBQyxhQUFELEVBQWdCLFFBQWhCLENBQXRCLEMsQ0FFQTtBQUNBO0FBRUE7O0FBQ0FvRiw0RkFBbUIsQ0FDZnpJLENBQUMsQ0FBQyxtQkFBRCxDQURjLEVBRWZBLENBQUMsQ0FBQyxlQUFELENBRmMsRUFHZixvQ0FIZSxFQUlmLFVBSmUsQ0FBbkIsQyxDQU1BOztBQUNBeUksNEZBQW1CLENBQ2Z6SSxDQUFDLENBQUMsbUJBQUQsQ0FEYyxFQUVmQSxDQUFDLENBQUMsZUFBRCxDQUZjLEVBR2YsK0NBSGUsRUFJZixVQUplLENBQW5CLEMsQ0FNQTs7QUFDQWdKLGtHQUF5QixHLENBRXpCOztBQUNBTCxrR0FBeUIsRyxDQUV6Qjs7QUFDQXpFLHFHQUErQixHLENBRS9COztBQUNBaUYsNkVBQVEsRyxDQUVSOztBQUNBRixvRkFBUyxDQUNMakosQ0FBQyxDQUFDLGlCQUFELENBREksRUFFTEEsQ0FBQyxDQUFDLGFBQUQsQ0FGSSxFQUdMLFVBSEssRUFJTCxVQUpLLENBQVQsQyxDQU1BOztBQUNBaUosb0ZBQVMsQ0FDTGpKLENBQUMsQ0FBQyx1QkFBRCxDQURJLEVBRUxBLENBQUMsQ0FBQyxvQkFBRCxDQUZJLEVBR0wsVUFISyxFQUlMLFdBSkssQ0FBVCxDLENBTUE7O0FBQ0FpQiw2REFBWSxHLENBRVo7O0FBQ0FsQiw2REFBa0IsRyxDQUVsQjs7QUFDQStGLHNGQUE0QixHIiwiZmlsZSI6Ii4va2l0dHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9raXR0eS5qc1wiKTtcbiIsImNvbnN0IGluaXRIYW5kbGVyc0Jhbm5lciA9ICgpID0+IHtcblxuICAgICQoJyNtb2RhbEN1c3RvbUJhbm5lcicpLm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiAkKCcja2l0dHlUb0Jhbm5lcicpLmF0dHIoJ2tpdHR5SWQnLCBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQua2l0dHlJZClcbiAgICApXG5cbiAgICAkKCcjbW9kYWxSZW1vdmVCYW5uZXInKS5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gJCgnI2tpdHR5RnJvbUJhbm5lcicpLmF0dHIoJ2tpdHR5SWQnLCBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQua2l0dHlJZClcbiAgICApXG5cbiAgICAkKCcja2l0dHlUb0Jhbm5lcicpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgJ21vZGFsJzogJ3Nob3cnLFxuICAgICAgICAgICAgJ2Jhbm5lcl9oZWFkZXInOiAkKCcjYmFubmVyX2hlYWRlcicpLnZhbCgpLFxuICAgICAgICAgICAgJ2Jhbm5lcl9kZXNjcmlwdGlvbic6ICQoJyNiYW5uZXJfZGVzY3JpcHRpb24nKS52YWwoKSxcbiAgICAgICAgICAgICdraXR0eV9pZCc6ICQoJyNraXR0eVRvQmFubmVyJykuYXR0cigna2l0dHlJZCcpXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZmV0Y2goJ3NyYy9EQi9raXR0eV9DUlVEL3JlcGxhY2VUb0Jhbm5lci5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnI21vZGFsQ3VzdG9tQmFubmVyJykubW9kYWwoJ2hpZGUnKVxuXG4gICAgfSlcblxuICAgICQoJyNraXR0eUZyb21CYW5uZXInKS5jbGljaygoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICdtb2RhbCc6ICdoaWRlJyxcbiAgICAgICAgICAgICdiYW5uZXJfaGVhZGVyJzogJycsXG4gICAgICAgICAgICAnYmFubmVyX2Rlc2NyaXB0aW9uJzogJycsXG4gICAgICAgICAgICAna2l0dHlfaWQnOiAkKCcja2l0dHlGcm9tQmFubmVyJykuYXR0cigna2l0dHlJZCcpXG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCgnc3JjL0RCL2tpdHR5X0NSVUQvcmVwbGFjZVRvQmFubmVyLnBocCcsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgfSlcblxuICAgICAgICAkKCcjbW9kYWxSZW1vdmVCYW5uZXInKS5tb2RhbCgnaGlkZScpXG5cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRIYW5kbGVyc0Jhbm5lciIsIi8vIFRPRE86IFxuLy8gICAgKzAuINCX0LDQu9C40YLRjCDQu9C+0LrQsNC70LjQt9Cw0YbQuNGOINCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0Lgg0LTQvtGA0LDQsdC+0YLQsNGC0Ywg0LXQtSDRhNGD0L3QutGG0LjQvtC90LDQuy5cbi8vICAgICsxLiDQn9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRhNC+0YLQvtCz0YDQsNGE0LjQuSDQutC+0YLRj9GCINC4INCy0LfRgNC+0YHQu9GL0YUg0LbQuNCy0L7RgtC90YvRhSDQs9GA0YPQt9C40YLRjCDRgtC+0LvRjNC60L4g0LPQu9Cw0LLQvdGL0LUsINC+0YHRgtCw0LvRjNC90L7QtSDRgtC+0LvRjNC60L4g0L/RgNC4XG4vLyAgICAgICDQvdCw0LbQsNGC0LjQuCDQvdCwINC00LXRgtCw0LvQutGDLiBcbi8vICAgICs0LiDQo9Cy0LXQu9C40YfQuNGC0Ywg0YHQu9C+0LbQvdC+0YHRgtGMINC/0LDRgNC+0LvRjyDQvdCwINC/0YDQvtC80LUgKNC/0L7QuNGB0Log0L/QviDRhNGA0LDQt9C1IFwi0L/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMINC/0L7RgdC70L7QttC90LXQtVwiKVxuLy8gICAgKzUuINCf0YDQvtGA0LDQsdC+0YLQsNGC0Ywg0L7RgtC/0YDQsNCy0LrRgyDQv9C40YHRjNC80LAg0L3QsCDQv9GA0L7QvNC1LlxuLy8gICAgKzYuINCe0YLRgdGL0LvQsNGC0Ywg0L/QuNGB0YzQvNC+INC/0YDQuCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4INC90LAg0L/QvtGH0YLQvtCy0YvQuSDRj9GJ0LjQuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8uXG4vLyAgICArNy4gQnJlZWQtPkxpdHRlciBGcmVlLT5BdmFpbGFibGUgc2lnbl9pbi0+c2lnbl91cFxuLy8gICAgKzguINCU0L7QsdCw0LLQu9C10L3QuNC1INCx0LDQvdC90LXRgNCwINCyINGA0LDQt9GA0LXQt9C1INGP0LfRi9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLlxuLy8gICAgOS4g0JTQvtCx0LDQstC70LXQvdC40LUg0L7RgtC30YvQstCwIC0g0LLRgdC1INGB0LvQvtC80LDQu9C+0YHRjC5cbi8vICAgIDEwLiDQndC1INC00L7QsdCw0LLQu9GP0LXRgtGB0Y8g0Y/Qt9GL0Lpcbi8vICAgICsxMS4g0JrQvtGA0Y/QstC+0LUg0L7RgtC+0LHRgNCw0LbQtdC90LjQtSDQv9Cw0L3QtdC70Lgg0L3QsNCy0LjQs9Cw0YbQuNC4XG4vLyAgICAxMi4g0J3QsNC00L4g0YfRgtC+LdGC0L4g0YHQtNC10LvQsNGC0Ywg0YEg0LDQtNCw0L/RgtC40LLQvdC+0YHRgtGM0Y4g0YDRg9GB0YHQutC+0LPQviDRiNGA0LjRhNGC0LAgKNCy0L7Qt9C80L7QttC90L4g0LfQsNC80LXQvdC40YLRjClcbi8vICAgIDE0LiDQntGE0L7RgNC80LjRgtGMINC30LDQutCw0Lcg0L3QsCDQv9C10YDQtdCy0L7QtC4gXG4vLyAgICAxNS4g0J/RgNC+0LrQvtC90YHRg9C70YzRgtC40YDQvtCy0LDRgtGM0YHRjyDQv9C+INCy0L7Qv9GA0L7RgdCw0LwgU0VPLlxuLy8gICAgKCEhISkgMTYuINCU0L7QsdCw0LLQuNGC0Ywg0LjQt9C80LXRgNC10L3QuNC1INGP0LfRi9C60LAg0LIg0L/QvtC80LXRgtGLLiDQn9C+LdGF0L7RgNC+0YjQtdC80YMg0L3Rg9C20L3QviDQvtGC0LLRj9C30LDRgtGMINC70L7QutCw0LvQuNC30LjRgNGD0LXQvNGL0Lkg0LrQvtC90YLQtdC90YJcbi8vICAgICAgICAgINC+0YIg0L7Qv9C+0YDQvdGL0YUg0YLQsNCx0LvQuNGGINC4INC+0YHRgtCw0LLQuNGC0Ywg0YLQvtC70YzQutC+INGB0LLRj9C30LguINCt0YLQviDQsdC70L7QutC10YAg0LTQu9GPINC/0LXRgNC10LLQvtC00L7QsiDQuCBTRU8uINCf0YDQuNC+0YDQuNGC0LXRgiDQv9C10YDQstC40YfQvdGL0Llcbi8vICAgICsxNy4g0KDQtdGI0LjRgtGMINCy0L7Qv9GA0L7RgSDRgSDQv9C10YDQtdC80LXRidC10L3QuNC10LwgbG9jYWxfY29uc3RhbnRzINC4IGNoZWNrX3J1bGVzXG4vLyAgICArMTguIGZvbnRhd2Vzb21lLWZyZWUg0LvRg9GH0YjQtSDQv9C+0LrQsCDRg9C00LDQu9C40YLRjCDQuNC3IG5vZGVfbW9kdWxlc1xuLy8gICAgKzE5LiDQntGH0LjRgdGC0LjRgtGMINC+0YIg0L3QtdC40YHQv9C+0LvRjNC30YPQtdC80L7Qs9C+INGC0LXQv9C10YDRjCDRhNGD0L3QutGG0LjQvtC90LDQu9CwXG4vLyAgICAyMC4g0JTQvtC/0LjRgdCw0YLRjCDQutC+0L3RhNC40LPRg9GA0LDRhtC40L7QvdC90YvQuSDRhNCw0LnQuyDQtNC70Y8g0YDQsNC30LTQtdC70LXQvdC40Y8gZGV2INC4IHByb21cbi8vICAgICsyMS4g0JrQsNC60LjQtS3RgtC+INC/0YDQvtCx0LvQtdC80Ysg0YEg0YPQtNCw0LvQtdC90LjQtdC8INC/0LXRgNC40L7QtNCwXG4vLyAgICArMjIuINCf0YDQuCDQvtGC0LrRgNGL0YLQuNC4INC00LXRgtCw0LvQutC4INC/0L4g0LrQvtGC0LXQvdC60YMg0L7RgtC60YDRi9Cy0LDQtdGC0YHRjyDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3QvtC1INC+0LrQvdC+XG4vLyAgICAyMy4g0J3Rg9C20L3QviDQvdCw0LvQsNC00LjRgtGMINCy0LrQu9Cw0LTQutC4IC0g0YLQviDQtdGB0YLRjCDRh9GC0L7QsdGLINC/0YDQuCDQvtGC0LrRgNGL0YLQuNC4INC+0YLQutGA0YvQstCw0LvRgdGPINC/0LXRgNCy0YvQuSAo0L/QviDQsNC70YTQsNCy0LjRgtGDKVxuLy8gICAgICAgICDQvdC10LDRgNGF0LjQstC90YvQuSDQv9C+0LzQtdGCXG4vLyAgICAyNC4g0KXQsNGA0LQg0LTQtdC/0LvQvtC5XG4vLyAgICAyNS4g0JvQvtC60LDQuNC30LDRhtC40Y8g0L7RgtC/0YDQsNCy0LrQuCDQv9C40YHRjNC80LAgKNCyINGC0L7QvCDRh9C40YHQu9C1INC4INGC0LXQutGB0YIg0L/QuNGB0YzQvNCwKVxuXG5jb25zdCBpbml0SGFuZGxlcnMgPSAoKSA9PiB7XG5cbiAgICAkKGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hJbmZvKClcblxuICAgICAgICBpbml0KGRhdGEpXG4gICBcbiAgICAgICAgaGFuZGxlUGlsbHMoZGF0YSlcblxuICAgICAgICAkKCcjdi1waWxscy1jb21tb24tYXJjaGl2ZScpLm9uKCdjbGljaycsIGhhbmRsZUFyY2hpdmVQaWxscylcbiAgICAgICAgXG4gICAgfSlcblxuICAgICQoJy5icm9vZFRvQXJjaGl2ZScpLmNsaWNrKGFzeW5jIGV2ZW50ID0+IHtcblxuICAgICAgICBhd2FpdCBmZXRjaCgnc3JjL0RCL2tpdHR5X0NSVUQvcmVwbGFjZVRvQXJjaGl2ZS5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydicm9vZF9pZCc6IGV2ZW50LnRhcmdldC5kYXRhc2V0LmJyb29kSWR9KSwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgfSlcbiAgICBcbiAgICB9KVxuXG59XG5cbi8qINCh0LrRgNGL0LLQsNC10Lwg0LLQutC70LDQtNC60Lgg0YDQsNGB0L/RgNC+0LTQsNC90L3Ri9GFINC/0L7QvNC10YLQvtCyICAqL1xuXG5sZXQgYnJvb2RzSW5mbyA9IHVuZGVmaW5lZFxuXG5jb25zdCBmZXRjaEluZm8gPSBhc3luYyAoKSA9PiB7XG5cbiAgICBpZiAoYnJvb2RzSW5mbyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYnJvb2RzSW5mbyA9IGF3YWl0IChhd2FpdCBmZXRjaChcInNyYy9EQi9raXR0eV9DUlVEL2Jyb29kX0NSVUQvYnJvb2RfZ2V0X2FsbC5waHBcIiwgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgfSkpLmpzb24oKVxuICAgIH1cblxuICAgIHJldHVybiBicm9vZHNJbmZvXG5cbn1cblxuY29uc3QgaW5pdCA9IChicm9vZHNJbmZvKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gYnJvb2RzSW5mby5maWx0ZXIoKHthcmNoaXZlfSkgPT4gYXJjaGl2ZSA9PT0gJzEnKVxuICAgICAgICAuZmlsdGVyKChfLCBpbmRleCkgPT4gaW5kZXggPT0gMClcblxuICAgIGlmICh0YXJnZXQubGVuZ3RoICE9IDApIHtcbiAgICAgICAgJChgI3YtcGlsbHMtaGVhZGluZ0Jyb29kXyR7dGFyZ2V0WzBdLmlkfS10YWJgKS50YWIoJ3Nob3cnKVxuICAgIH1cbn1cblxuY29uc3QgaGFuZGxlUGlsbHMgPSAoZGF0YSwgYXR0clNob3cgPSB1bmRlZmluZWQpID0+IHtcbiAgICBcbiAgICBkYXRhLmZvckVhY2goKHtpZCwgYXJjaGl2ZX0pID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY3VycmVudF9waWxsID0gJChgI3YtcGlsbHMtaGVhZGluZ0Jyb29kXyR7aWR9LXRhYmApXG4gICAgXG4gICAgICAgIGlmIChhcmNoaXZlID09PSAnMCcpIHtcbiAgICBcbiAgICAgICAgICAgIGlmICgoYXR0clNob3cgPT09IHVuZGVmaW5lZCkgfHwgKGF0dHJTaG93ID09ICcwJykpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50X3BpbGwuaGlkZShcInNsb3dcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudF9waWxsLnNob3coXCJzbG93XCIpXG4gICAgICAgICAgICB9ICBcbiAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoKGF0dHJTaG93ID09PSB1bmRlZmluZWQpIHx8IChhdHRyU2hvdyA9PSAnMCcpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudF9waWxsLnNob3coXCJzbG93XCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfcGlsbC5oaWRlKFwic2xvd1wiKVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuZmlsdGVyKCh7YXJjaGl2ZX0pID0+IGFyY2hpdmUgPT0gJzEnKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgJCgnI3YtcGlsbHMtY29tbW9uLXRhYicpLnRhYignc2hvdycpXG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgXG59XG5cbmNvbnN0IGhhbmRsZUFyY2hpdmVQaWxscyA9IGFzeW5jICgpID0+IHtcblxuICAgIGNvbnN0IGFyY2hpdmVfcGlsbHMgPSAkKCcjdi1waWxscy1jb21tb24tYXJjaGl2ZScpXG5cbiAgICBpZiAoYXJjaGl2ZV9waWxscy5hdHRyKFwic2hvd1wiKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXJjaGl2ZV9waWxscy5hdHRyKFwic2hvd1wiLCBcIjFcIilcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyU2hvdyA9IGFyY2hpdmVfcGlsbHMuYXR0cihcInNob3dcIilcblxuICAgIGlmIChhdHRyU2hvdyA9PSBcIjFcIikge1xuICAgICAgICBhcmNoaXZlX3BpbGxzLmF0dHIoXCJzaG93XCIsIFwiMFwiKVxuICAgICAgICBhcmNoaXZlX3BpbGxzLmh0bWwoXCLQodC60YDRi9GC0Ywg0LDRgNGF0LjQsi4uLlwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFyY2hpdmVfcGlsbHMuYXR0cihcInNob3dcIiwgXCIxXCIpXG4gICAgICAgIGFyY2hpdmVfcGlsbHMuaHRtbChcItCQ0YDRhdC40LIuLi5cIilcbiAgICB9XG5cbiAgICBoYW5kbGVQaWxscyhhd2FpdCBmZXRjaEluZm8oKSwgYXR0clNob3cpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEhhbmRsZXJzIiwiRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAodGFibGVOYW1lLCBwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHBhcmFtcyA9IFtdKSA9PiB7XG5cbiAgICBjb25zdCBhcHBseV9pbml0ID0gYXN5bmMgaXRlbXMgPT4gXG4gICAgICAgIGl0ZW1zLmZvckVhY2goY3VycmVudCA9PiBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBjdXJyZW50LmlkKSlcblxuICAgIGF3YWl0IGFwcGx5X2luaXQoYXdhaXQgZmV0Y2hJbWcodGFibGVOYW1lLCBwYXJhbXMpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCkgPT4gXG4gICAgYXdhaXQgaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgJ2NvbW1vbicpXG5cbmNvbnN0IGluaXRPbmVEcm9wem9uZSA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpID0+IHtcblxuICAgIGNvbnN0IGlkRHJvcHpvbmUgPSBgIyR7cHJlZml4RHJvcHpvbmV9LSR7dmFsdWVUYXJnZXRGZWlsZH1gXG5cbiAgICBpZiAoJChpZERyb3B6b25lKS5sZW5ndGggIT09IDApIHtcblxuICAgICAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCh0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbn1cblxuY29uc3QgZmV0Y2hJbWcgPSBhc3luYyAodGFibGVOYW1lLCBwYXJhbXMgPSBbXSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2dldF9leGhpYml0aW9uX3Bob3RvLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyB0YWJsZU5hbWUsIHBhcmFtcyB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyBcbiAgICB9KSkuanNvbigpXG5cbiAgICByZXR1cm4gaW1hZ2VzXG5cbn0iLCJjb25zdCBpbml0T25lRHJvcHpvbmUgPSBhc3luYyAoa2l0dHlfaWQsIHBlcmlvZHNfaWQpID0+IHtcblxuICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbiAgICBjb25zdCBpZERyb3B6b25lID0gYCNteS1kcm9wem9uZS1pJHtraXR0eV9pZH0taSR7cGVyaW9kc19pZH1gXG5cbiAgICBpZiAoJChpZERyb3B6b25lKS5sZW5ndGggIT09IDApIHtcblxuICAgICAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtpdHR5X2lkXCIsIGtpdHR5X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGVyaW9kX2lkXCIsIHBlcmlvZHNfaWQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0T25lRHJvcHpvbmUiLCJjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKGN1cnJlbnQpKVxuICAgICAgICBcbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKCkpXG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKGN1cnJlbnQpID0+IHtcblxuICAgIGxldCBpZERyb3B6b25lID0gYCNteS1kcm9wem9uZS0ke2N1cnJlbnQuaWR9YFxuXG4gICAgaWYgKCQoaWREcm9wem9uZSkubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG4gICAgICAgICAgICBtYXhGaWxlczogMSxcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtpdHR5X2lkXCIsIGN1cnJlbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJicm9vZF9pZFwiLCBjdXJyZW50LmJyb29kX2lkKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZmlsZS5pbml0VGh1bWJuYWlsKSAmJiAodGhpcy5maWxlc1sxXSAhPSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKHRoaXMuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnQgIT0gbnVsbCkgJiYgKGN1cnJlbnQudXJsICE9IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWNUaHVtYm5haWwodGhpcywgY3VycmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICgpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2tpdHR5X0NSVUQvaW1nX0NSVUQvaW1nX2dldF9tYWluLnBocCc7XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59XG5cbi8vIERSWSAtINC/0LXRgNC10L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuY29uc3QgZXhlY1RodW1ibmFpbCA9IChjb250ZXh0LCBjdXJyZW50X2ltYWdlKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudEZpbGUgPSB7XG4gICAgICAgIG5hbWU6IGN1cnJlbnRfaW1hZ2UubmFtZSxcbiAgICAgICAgc2l6ZTogY3VycmVudF9pbWFnZS5zaXplLFxuICAgICAgICBhY2NlcHRlZDogdHJ1ZSxcbiAgICAgICAga2luZDogJ2ltYWdlJyxcbiAgICAgICAgdXBsb2FkOiB7XG4gICAgICAgICAgICBmaWxlbmFtZTogY3VycmVudF9pbWFnZS5uYW1lLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhVVJMOiBjdXJyZW50X2ltYWdlLnVybCxcbiAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgIGNvbnRleHQuZmlsZXMucHVzaChjdXJyZW50RmlsZSk7XG4gICAgY29udGV4dC5lbWl0KFwiYWRkZWRmaWxlXCIsIGN1cnJlbnRGaWxlKTtcbiAgICBjb250ZXh0LmNyZWF0ZVRodW1ibmFpbEZyb21VcmwoXG4gICAgICAgIGN1cnJlbnRGaWxlLFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsV2lkdGgsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxIZWlnaHQsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxNZXRob2QsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHRodW1ibmFpbCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmVtaXQoJ3RodW1ibmFpbCcsIGN1cnJlbnRGaWxlLCB0aHVtYm5haWwpO1xuICAgICAgICAgICAgY29udGV4dC5lbWl0KFwiY29tcGxldGVcIiwgY3VycmVudEZpbGUpO1xuICAgICAgICB9XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwiLCJpbXBvcnQgaW5pdE9uZURyb3B6b25lIGZyb20gJy4uL2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eS5qcydcblxuY29uc3QgaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSA9ICgpID0+IHtcblxuICAgICQoJyNraXR0eVBob3RvQ29udGVudCcpLm9uKCdzaG93bi5icy5tb2RhbCcsIGFzeW5jIGV2ZW50ID0+IHtcblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKtCX0JDQk9Cg0KPQl9Ca0JAg0J/QldCg0JjQntCU0J7QkioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIC8vINCk0LXRgtGH0LjQvCDQt9Cw0LPQvtC70L7QstC60Lgg0L/QtdGA0LjQvtC00L7QsiDRgSDRgdC10YDQstC10YDQsFxuICAgICAgICBjb25zdCBmZXRjaFBpbGxzQ2FwdGlvbiA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYnJvb2RfaWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQuYnJvb2RJZFxuXG4gICAgICAgICAgICBjb25zdCBraXR0eVBlcmlvZHMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goJ3NyYy9EQi9sYXp5RmV0Y2hEYXRhL2ZldGNoUGVyaW9kc0NhcHRpb24ucGhwJywgeyBcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBicm9vZF9pZCB9KSwgXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgICAgICB9KSkuanNvbigpXG5cbiAgICAgICAgICAgIHJldHVybiBraXR0eVBlcmlvZHNcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0KTQvtGA0LzQuNGA0YPQtdC8INCy0LrQu9Cw0LTQutC4INGBINC30LDQs9C+0LvQvtCy0LrQsNC80Lgg0L/QtdGA0LjQvtC00L7QslxuICAgICAgICBjb25zdCBjcmVhdGVQaWxsc1BlcmlvZHMgPSBhc3luYyAoZGF0YVBlcmlvZHMpID0+IHtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gJ2FjdGl2ZSdcblxuICAgICAgICAgICAgZGF0YVBlcmlvZHMuZm9yRWFjaCgoe2lkLCBuYW1lfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArXG4gICAgICAgICAgICAgICAgYDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgJHthY3RpdmV9XCIgaWQ9XCJwZXJpb2RfJHtpZH1cIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjcGVyaW9kXyR7aWR9XCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJwZXJpb2RfJHtpZH1cIiBhcmlhLXNlbGVjdGVkPVwiJHsoYWN0aXZlICE9PSAnJyA/ICd0cnVlJyA6ICdmYWxzZScpfVwiPiR7bmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5gICAgICAgXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gJydcbiAgICAgICAgICAgIH0pICAgICAgIFxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCQ0YHQuNC90YXRgNC+0L3QvdC+INC00L7QsdCw0LLQu9GP0LXQvCDQt9Cw0LPQvtC70L7QstC60Lgg0L/QtdGA0LjQvtC00L7QsiDQuiDQvNC+0LTQsNC70YzQvdC+0LzRgyDQvtC60L3Rg1xuICAgICAgICBjb25zdCBjcmVhdGVQZXJpb2RzTGF5b3V0ID0gYXN5bmMgKHBpbGxzUGVyaW9kcykgPT4ge1xuXG4gICAgICAgICAgICAkKFwiI3Bob3RvS2l0dHlDb250ZW50XCIpLmFwcGVuZChgXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJwaG90b3NLaXR0eVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7cGlsbHNQZXJpb2RzfVxuICAgICAgICAgICAgICAgIDwvdWw+ICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwaG90b3NLaXR0eVRhYkNvbnRlbnRcIiBjbGFzcz1cInRhYi1jb250ZW50IHRleHQtY2VudGVyIG15LTIgc2hhZG93LWxnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImtpdHR5Q2FwdGlvblwiIGNsYXNzPVwiY29udGFpbmVyIGFsZXJ0IGFsZXJ0LWluZm8gdGV4dC1jZW50ZXJcIiByb2xlPVwiYWxlcnRcIj48L2Rpdj5gKVxuXG4gICAgICAgIH1cblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKtCX0JDQk9Cg0KPQl9Ca0JAg0KTQntCi0J7Qk9Cg0JDQpNCY0JkqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICBjb25zdCBraXR0eV9pZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQuZGF0YXNldC5raXR0eUlkXG5cbiAgICAgICAgLy8g0KTQtdGC0YfQuNC8INGE0L7RgtC+0LPRgNCw0YTQuNC4INGBINGB0LXRgNCy0LXRgNCwXG4gICAgICAgIGNvbnN0IGZldGNoS2l0dHlQaG90b3MgPSBhc3luYyAocGVyaW9kX2lkKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGtpdHR5UGhvdG9zID0gYXdhaXQgKGF3YWl0IGZldGNoKCdzcmMvREIvbGF6eUZldGNoRGF0YS9mZXRjaENvbnRlbnRLaXR0eVBob3RvLnBocCcsIHsgXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsga2l0dHlfaWQsIHBlcmlvZF9pZCB9KSwgXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgICAgICB9KSkuanNvbigpXG5cbiAgICAgICAgICAgIHJldHVybiBraXR0eVBob3Rvc1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyDQlNC40L3QsNC80LjRh9C10YHQutC4INGE0L7RgNC80LjRgNGD0LXQvCDQutC+0L3RgtC10L3RgiDQv9C+INC/0LXRgNC40L7QtNGDXG4gICAgICAgIGNvbnN0IGNvbnRlbnRQZXJpb2QgPSBhc3luYyAoZGF0YSwgcGVyaW9kX2lkKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBvd2xDb250ZW50ID0gJydcbiAgICAgICAgICAgIGxldCBmYW5jeUNvbnRlbnQgPSAnJ1xuXG4gICAgICAgICAgICBjb25zdCBwYXRocyA9IGRhdGFbJ3BhdGhzJ11cblxuICAgICAgICAgICAgcGF0aHMuZm9yRWFjaCgoe3BhdGgsIGNoZWNrYm94fSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgb3dsQ29udGVudCA9IG93bENvbnRlbnQgK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGF0aH1cIiBhbHQ9XCLQmNC30L7QsdGA0LDQttC10L3QuNC1INC+0YLRgdGD0YLRgdGC0LLRg9C10YJcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgICAgICAgICBmYW5jeUNvbnRlbnQgPSBmYW5jeUNvbnRlbnQgK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTQgY29sLTYgdGh1bWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS1mYW5jeWJveD1cImtpdHR5XyR7a2l0dHlfaWR9XyR7cGVyaW9kX2lkfVwiIGhyZWY9XCIke3BhdGh9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgc3JjPVwiJHtwYXRofVwiIGFsdD1cItCY0LfQvtCx0YDQsNC20LXQvdC40LUg0L7RgtGB0YPRgtGB0YLQstGD0LXRglwiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICR7Y2hlY2tib3h9XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAkKCcjcGhvdG9zS2l0dHlUYWJDb250ZW50JykuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiJHtwZXJpb2RfaWR9XCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaG9tZS10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtkYXRhWydzZWN0aW9uX3Jvb3QnXX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC0xIGFsZXJ0IGFsZXJ0LXByaW1hcnlcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvd2wtY2Fyb3VzZWxcIj4ke293bENvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGFsZXJ0IGFsZXJ0LXByaW1hcnlcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4ke2ZhbmN5Q29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICR7ZGF0YVsnYnV0dG9uX2RlbGV0ZSddfVxuICAgICAgICAgICAgICAgIDwvZGl2PmApXG5cblxuICAgICAgICAgICAgJCgnI2tpdHR5Q2FwdGlvbicpLmVtcHR5KCkuYXBwZW5kKGRhdGFbJ2Rlc2NyeXB0aW9uJ10pXG5cbiAgICAgICAgICAgICQoJyNraXR0eVBob3RvQ29udGVudFRpdGxlJykuZW1wdHkoKS5hcHBlbmQoZGF0YVsnbmFtZSddKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgJChgI3Bob3Rvc0tpdHR5VGFiQ29udGVudCAjJHtwZXJpb2RfaWR9YCkuYXR0cignZGF0YS1sb2FkaW5nLWRvbmUnLCAnMScpXG5cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vINCX0LDQu9C40LLQsNC10Lwg0L/QvtC70YPRh9C10L3QvdGL0LUg0YEg0YHQtdGA0LLQtdGA0LAg0YTQvtGC0L7Qs9GA0LDRhNC40Lgg0LIg0LDRgdC40L3RhdGA0L7QvdC90L7QvCDRgNC10LbQuNC80LVcbiAgICAgICAgY29uc3QgY3JlYXRlUGhvdG9QZXJpb2QgPSBhc3luYyAocGVyaW9kX2lkKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICgkKGAjcGhvdG9zS2l0dHlUYWJDb250ZW50ICMke3BlcmlvZF9pZH1gKS5hdHRyKCdkYXRhLWxvYWRpbmctZG9uZScpID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbnRlbnRQZXJpb2QoYXdhaXQgZmV0Y2hLaXR0eVBob3RvcyhwZXJpb2RfaWQpLCBwZXJpb2RfaWQpXG5cbiAgICAgICAgICAgICAgICBhd2FpdCBpbml0T25lRHJvcHpvbmUoa2l0dHlfaWQsIHBlcmlvZF9pZC5zcGxpdCgnXycpWzFdKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjcGhvdG9zS2l0dHlUYWJDb250ZW50IC50YWItcGFuZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICQoYCNwaG90b3NLaXR0eVRhYkNvbnRlbnQgIyR7cGVyaW9kX2lkfWApLnRhYignc2hvdycpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCk0L7RgNC80LjRgNGD0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INC/0LXRgNC10YXQvtC00LAg0L/QviDQstC60LvQsNC00LrQsNC8INC/0LXRgNC40L7QtNC+0LJcbiAgICAgICAgY29uc3QgY3JlYXRlSGFuZGxlclBpbGxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgJCgnI3Bob3Rvc0tpdHR5VGFiIGFbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5vbignc2hvd24uYnMudGFiJywgYXN5bmMgZnVuY3Rpb24oKSB7ICBcbiAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVQaG90b1BlcmlvZCgkKHRoaXMpLmF0dHIoJ2lkJykpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKtCe0KHQndCe0JLQndCQ0K8g0KfQkNCh0KLQrCoqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIGlmICgkKFwiI3Bob3RvS2l0dHlDb250ZW50XCIpLmNoaWxkcmVuKCkubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBpbGxzQ2FwdGlvbiA9IGF3YWl0IGZldGNoUGlsbHNDYXB0aW9uKClcblxuICAgICAgICAgICAgaWYgKHBpbGxzQ2FwdGlvbi5sZW5ndGggIT09IDApIHtcblxuICAgICAgICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQstC60LvQsNC00L7QuiDRgSDQv9C10YDQuNC+0LTQsNC80LhcbiAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVQZXJpb2RzTGF5b3V0KGF3YWl0IGNyZWF0ZVBpbGxzUGVyaW9kcyhwaWxsc0NhcHRpb24pKVxuXG4gICAgICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINC/0YDQuCDQv9C10YDQtdGF0L7QtNCw0YUg0L/QviDQstC60LvQsNC00LrQsNC8INC/0LXRgNC40L7QtNC+0LJcbiAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVIYW5kbGVyUGlsbHMoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INGE0L7RgtC+0LrQvtC90YLQtdC90YLQsFxuICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVBob3RvUGVyaW9kKGBwZXJpb2RfJHtwaWxsc0NhcHRpb25bMF0uaWR9YClcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICAkKCcja2l0dHlQaG90b0NvbnRlbnQnKS5vbignaGlkZS5icy5tb2RhbCcsICgpID0+ICQoXCIjcGhvdG9LaXR0eUNvbnRlbnRcIikuZW1wdHkoKSlcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSIsImNvbnN0IGRlbGV0ZUJ5SWQgPSBhc3luYyAobW9kYWxXaW5kb3csIHVybCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuXG4gICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuXG4gICAgdHJ5IHtcblxuICAgICAgICBhd2FpdCBmZXRjaCh1cmwsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcblxuICAgIH0gY2F0Y2gge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/QvtC70YPRh9C40YLRjCDQtNCw0L3QvdGL0LUg0L7RgiDRgdC10YDQstC10YDQsCcpXG4gICAgfVxufVxuXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFske2lkX2ZpZWxkX25hbWV9ID0gJHtpZH1dYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9ucyA9IChtb2RhbFdpbmRvdywgdGFyZ2V0QnV0dG9uLCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIHRhcmdldEJ1dHRvbi5jbGljaygoKSA9PiBkZWxldGVCeUlkKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpKVxuXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJyxcbiAgICAgICAgZXZlbnQgPT4gdGFyZ2V0QnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zU3RhdGVzID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVTdGF0ZScpXG4gICAgbGV0IGJ1dHRvbiAgICAgICAgPSAkKCcjZGVsZXRlX3N0YXRlJylcbiAgICBsZXQgaWRfZmllbGRfbmFtZSA9ICdzdGF0ZV9pZCdcbiAgICBsZXQgdXJsICAgICAgICAgICA9ICdzcmMvREIva2l0dHlfQ1JVRC9zdGF0ZV9DUlVEL3N0YXRlX2RlbGV0ZV9ncm91cC5waHAnXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzKSA9PiB7XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzIH1cbiAgICAgICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKCd0cnVlJywgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QgPSAoKSA9PiB7XG5cbiAgICBsZXQgbW9kYWxXaW5kb3cgICA9ICQoJyNtb2RhbERlbGV0ZVBlcmlvZCcpXG4gICAgbGV0IGJ1dHRvbiAgICAgICAgPSAkKCcjZGVsZXRlX3BlcmlvZCcpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnYnJvb2RfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnc3JjL0RCL2tpdHR5X0NSVUQvcGVyaW9kX0NSVUQvcGVyaW9kX2RlbGV0ZV9ncm91cC5waHAnXG5cbiAgICAvLyBEUlkgLSDQv9GA0L7QsdGA0L7RgSDRgSDQutC90L7Qv9C60Lgg0LfQsNC/0YPRgdC60LAg0LzQvtC00LDQu9C60Lgg0L3QsCDQutC90L7Qv9C60YMg0YPQtNCw0LvQtdC90LjRjyDQstGL0L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiBidXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxuICAgIGNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MsIGlkKSA9PiB7XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzLCBpZCB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICBcbiAgICAgICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgaWQgICAgID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKGlkLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MsIGlkKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpXG5cbn0iLCJsZXQgdXJsID0nc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2ltZ19DUlVEL2ltZ19kZWxldGVfZ3JvdXAucGhwJ1xuXG5jb25zdCBkZWxldGVJbWcgPSAobW9kYWxXaW5kb3csIGJ1dHRvbiwgaWRfZmllbGRfbmFtZSwgdGFibGVfbmFtZSkgPT4ge1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSkgXG5cbn1cblxuLy8gRFJZIC0g0YHQvtC+0YLQvdC+0YHQuNGC0YHRjyDRgSDRg9C00LDQu9C10L3QuNC10Lwg0L/QtdGA0LjQvtC00LBcbmNvbnN0IGdldENoZWNrSW1ncyA9IGFzeW5jIChpZCwgaWRfZmllbGRfbmFtZSkgPT4geyBcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFske2lkX2ZpZWxkX25hbWV9ID0gJHtpZH1dYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG59XG5cbmNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MsIHVybCwgdGFibGVfbmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzLCB0YWJsZV9uYW1lIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVJbWciLCJjb25zdCBpbml0X293bCA9ICgpID0+IHtcbiAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgc21hcnRTcGVlZDogMzAwMCxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA2MDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdF9vd2wiLCJpbXBvcnQgaW5pdF9vd2wgZnJvbSAnLi9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsJ1xuaW1wb3J0IHsgZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiB9IGZyb20gJy4vZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX0luZGV4LmpzJ1xuaW1wb3J0IGRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwgZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfa2l0dHlfdGh1bWJuYWlsLmpzJ1xuaW1wb3J0IGRlbGV0ZUltZyBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nJ1xuaW1wb3J0IHsgZGVsZXRlQ29uZmlybWF0aW9ucywgZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCwgZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyB9IGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZSdcbmltcG9ydCBpbml0SGFuZGxlcnMgZnJvbSAnLi9mcm9udC9icm9vZHMnXG5pbXBvcnQgaW5pdEhhbmRsZXJzQmFubmVyIGZyb20gJy4vZnJvbnQvYmFubmVyJ1xuaW1wb3J0IGluaXRIYW5kbGVyc0xhenlGZXRjaGluZ0RhdGEgZnJvbSAnLi9mcm9udC9sYXp5RmV0Y2hEYXRhL2ZldGNoQ29udGVudEtpdHR5J1xuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQtNC70Y8g0L7QsdGJ0LjRhSDRhNC+0YLQvlxuZHJvcHpvbmVIYW5kbGVyc0NvbW1vbignbXktZHJvcHpvbmUnLCAnY29tbW9uJylcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0YTQvtGC0L4g0LrQvtGC0Y/RgiDQsiDRgNCw0LfRgNC10LfQtSDQstGA0LXQvNC10L3QvdGL0YUg0L/QtdGA0LjQvtC00L7QslxuLy9kcm9wem9uZUhhbmRsZXJzKCdpbWdraXR0eScpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LrQvtGC0Y/RglxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVLaXR0eScpLCBcbiAgICAkKCcjZGVsZXRlX2tpdHR5JyksIFxuICAgICdzcmMvREIva2l0dHlfQ1JVRC9raXR0eV9kZWxldGUucGhwJyxcbiAgICAna2l0dHlfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC/0L7QvNC10YLQvtCyXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUJyb29kJyksIFxuICAgICQoJyNkZWxldGVfYnJvb2QnKSwgXG4gICAgJ3NyYy9EQi9raXR0eV9DUlVEL2Jyb29kX0NSVUQvYnJvb2RfZGVsZXRlLnBocCcsXG4gICAgJ2Jyb29kX2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQv9C10YDQuNC+0LTQvtCyXG5kZWxldGVDb25maXJtYXRpb25zUGVyaW9kKClcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDRgdGC0LDRgtGD0YHQvtCyXG5kZWxldGVDb25maXJtYXRpb25zU3RhdGVzKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINCz0LvQsNCy0L3QvtCz0L4g0YTQvtGC0L4g0LrQvtGC0LXQvdC60LBcbmRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwoKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LLQuNC90L7QuSDQutCw0YDRg9GB0LXQu9C4XG5pbml0X293bCgpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDQutC+0YLQvtCyXG5kZWxldGVJbWcoXG4gICAgJCgnI21vZGFsRGVsZXRlSW1nJyksXG4gICAgJCgnI2RlbGV0ZV9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJyxcbiAgICAnaW1na2l0dHknKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC+0LHRidC40YUg0YTQvtGC0L5cbmRlbGV0ZUltZyhcbiAgICAkKCcjbW9kYWxEZWxldGVDb21tb25JbWcnKSxcbiAgICAkKCcjZGVsZXRlX2NvbW1vbl9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJywgXG4gICAgJ2ltZ2NvbW1vbicpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiDQv9C10YDQtdC80LXRidC10L3QuNGPINC/0L7QvNC10YLQvtCyINCyINCw0YDRhdC40LJcbmluaXRIYW5kbGVycygpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiDQstGB0L/Qu9GL0LLQsNGO0YnQtdCz0L4g0YDQtdC60LvQsNC80L3QvtCz0L4g0LHQsNC90L3QtdGA0LBcbmluaXRIYW5kbGVyc0Jhbm5lcigpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiBcItC70LXQvdC40LLQvtC5XCIg0LfQsNCz0YDRg9C30LrQuCDRhNC+0YLQvtC60L7QvdGC0LXQvdGC0LBcbmluaXRIYW5kbGVyc0xhenlGZXRjaGluZ0RhdGEoKVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=