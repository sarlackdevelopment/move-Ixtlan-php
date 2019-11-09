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
//    +16. Добавить измерение языка в пометы. По-хорошему нужно отвязать локализируемый контент
//         от опорных таблиц и оставить только связи. Это блокер для переводов и SEO. Приоритет первичный
//    +17. Решить вопрос с перемещением local_constants и check_rules
//    +18. fontawesome-free лучше пока удалить из node_modules
//    +19. Очистить от неиспользуемого теперь функционала
//    +20. Дописать конфигурационный файл для разделения dev и prom
//    +21. Какие-то проблемы с удалением периода
//    +22. При открытии деталки по котенку открывается первоначальное окно
//    +23. Нужно наладить вкладки - то есть чтобы при открытии открывался первый (по алфавиту)
//         неархивный помет
//    +24. Хард деплой
//    +25. Локаизация отправки письма (в том числе и текст письма)
//    +26. Вставить в alt, title и meta теги записи для роботов на всех используемых языках
//        Возможно стоит использовать рандомизатор, выбирающий нужные значения в случайном порядке
//    +27. sharedBroodsList[] - выяснить что это
//    +28. Локализировать слова Архив / Скрыть архив.
//    +30. Странности с запоминанием языка для пользователя
//    +31. Прописать <!-- entropizer.JS --> на всех страницах
//    32. В списке выбора родителей отображать только тех, что соответствуют текущему языку.
//    +33. Локализация сообщений валидации.
//    +34. "Подробнее" не работает.
//    35. Подтягивать инфу из рекламного баннера (если таковая была ранее внесена).
//    36. Проверить адаптив модальных окон для деталки котят.
//    +37. Локализовать фразу "Подробнее обо мне"
//    38. Прикрепить к новостям дату.
//    39. Удалить неиспользуемые языки и оставить русские умолчания.
//    +40. Поправить метатег description.
//    +41. Посмотреть поиском все вставки ~~~ и сделать все что там написано.
//    42. Сделать перелинковку. На Sitemap тоже добавить keywords, добить skr
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
            handlePills(data['data']);
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
  var target = broodsInfo['data'].filter(function (_ref4) {
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
    var data, archive_pills, attrShow;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetchInfo();

          case 2:
            data = _context4.sent;
            archive_pills = $('#v-pills-common-archive');

            if (archive_pills.attr("show") == undefined) {
              archive_pills.attr("show", "1");
            }

            attrShow = archive_pills.attr("show");

            if (attrShow == "1") {
              archive_pills.attr("show", "0");
              archive_pills.html(data['hide_archive_title']);
            } else {
              archive_pills.attr("show", "1");
              archive_pills.html(data['archive_title']);
            }

            handlePills(data['data'], attrShow);

          case 8:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvYnJvb2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5X3RodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvbGF6eUZldGNoRGF0YS9mZXRjaENvbnRlbnRLaXR0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tpdHR5LmpzIl0sIm5hbWVzIjpbImluaXRIYW5kbGVyc0Jhbm5lciIsIiQiLCJvbiIsImV2ZW50IiwiYXR0ciIsInJlbGF0ZWRUYXJnZXQiLCJkYXRhc2V0Iiwia2l0dHlJZCIsImNsaWNrIiwiZGF0YSIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibW9kYWwiLCJpbml0SGFuZGxlcnMiLCJmZXRjaEluZm8iLCJpbml0IiwiaGFuZGxlUGlsbHMiLCJoYW5kbGVBcmNoaXZlUGlsbHMiLCJ0YXJnZXQiLCJicm9vZElkIiwiYnJvb2RzSW5mbyIsInVuZGVmaW5lZCIsImpzb24iLCJmaWx0ZXIiLCJhcmNoaXZlIiwiXyIsImluZGV4IiwibGVuZ3RoIiwiaWQiLCJ0YWIiLCJhdHRyU2hvdyIsImZvckVhY2giLCJjdXJyZW50X3BpbGwiLCJoaWRlIiwic2hvdyIsImFyY2hpdmVfcGlsbHMiLCJodG1sIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImN1cnJlbnQiLCJpbml0T25lRHJvcHpvbmUiLCJmZXRjaEltZyIsImRyb3B6b25lSGFuZGxlcnNDb21tb24iLCJ2YWx1ZVRhcmdldEZlaWxkIiwiaWREcm9wem9uZSIsImFjY2VwdGVkRmlsZXMiLCJmaWxlIiwieGhyIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJjdXJyZW50X3VybCIsImN1cnJlbnRfaW5mIiwiaW1hZ2VzIiwia2l0dHlfaWQiLCJwZXJpb2RzX2lkIiwiZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCIsIm1heEZpbGVzIiwiYnJvb2RfaWQiLCJpbml0VGh1bWJuYWlsIiwiZmlsZXMiLCJyZW1vdmVGaWxlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cmwiLCJleGVjVGh1bWJuYWlsIiwiY29udGV4dCIsImN1cnJlbnRfaW1hZ2UiLCJjdXJyZW50RmlsZSIsIm5hbWUiLCJzaXplIiwiYWNjZXB0ZWQiLCJraW5kIiwidXBsb2FkIiwiZmlsZW5hbWUiLCJkYXRhVVJMIiwicHVzaCIsImVtaXQiLCJjcmVhdGVUaHVtYm5haWxGcm9tVXJsIiwib3B0aW9ucyIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidGh1bWJuYWlsTWV0aG9kIiwidGh1bWJuYWlsIiwiaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSIsImZldGNoUGlsbHNDYXB0aW9uIiwia2l0dHlQZXJpb2RzIiwiY3JlYXRlUGlsbHNQZXJpb2RzIiwiZGF0YVBlcmlvZHMiLCJyZXN1bHQiLCJhY3RpdmUiLCJjcmVhdGVQZXJpb2RzTGF5b3V0IiwicGlsbHNQZXJpb2RzIiwiZmV0Y2hLaXR0eVBob3RvcyIsInBlcmlvZF9pZCIsImtpdHR5UGhvdG9zIiwiY29udGVudFBlcmlvZCIsIm93bENvbnRlbnQiLCJmYW5jeUNvbnRlbnQiLCJwYXRocyIsInBhdGgiLCJjaGVja2JveCIsImVtcHR5Iiwib3dsQ2Fyb3VzZWwiLCJsb29wIiwibWFyZ2luIiwibmF2IiwiYXV0b3BsYXkiLCJzbWFydFNwZWVkIiwiYXV0b3BsYXlUaW1lb3V0IiwicmVzcG9uc2l2ZSIsImNyZWF0ZVBob3RvUGVyaW9kIiwic3BsaXQiLCJlYWNoIiwicmVtb3ZlQ2xhc3MiLCJjcmVhdGVIYW5kbGVyUGlsbHMiLCJjaGlsZHJlbiIsInBpbGxzQ2FwdGlvbiIsImRlbGV0ZUJ5SWQiLCJtb2RhbFdpbmRvdyIsImlkX2ZpZWxkX25hbWUiLCJnZXRBdHRyaWJ1dGUiLCJFcnJvciIsImdldENoZWNrSW1ncyIsIml0ZW0iLCJjdXJyZW50SXRlbUpRIiwicHJvcCIsImRlbGV0ZUNvbmZpcm1hdGlvbnMiLCJ0YXJnZXRCdXR0b24iLCJkZWxldGVDb25maXJtYXRpb25zU3RhdGVzIiwiYnV0dG9uIiwiZmV0Y2hEZWxldGVJbWdzIiwiY2hlY2tzIiwibWFpbkhhbmRsZXIiLCJkZWxldGVDb25maXJtYXRpb25zUGVyaW9kIiwiZGVsZXRlSW1nIiwidGFibGVfbmFtZSIsImluaXRfb3dsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBQyxDQUFDLGVBQUQsQ0FGYyxFQUdmLG9DQUhlLEVBSWYsVUFKZSxDQUFuQixDLENBTUE7O0FBQ0F5SSw0RkFBbUIsQ0FDZnpJLENBQUMsQ0FBQyxtQkFBRCxDQURjLEVBRWZBLENBQUMsQ0FBQyxlQUFELENBRmMsRUFHZiwrQ0FIZSxFQUlmLFVBSmUsQ0FBbkIsQyxDQU1BOztBQUNBZ0osa0dBQXlCLEcsQ0FFekI7O0FBQ0FMLGtHQUF5QixHLENBRXpCOztBQUNBekUscUdBQStCLEcsQ0FFL0I7O0FBQ0FpRiw2RUFBUSxHLENBRVI7O0FBQ0FGLG9GQUFTLENBQ0xqSixDQUFDLENBQUMsaUJBQUQsQ0FESSxFQUVMQSxDQUFDLENBQUMsYUFBRCxDQUZJLEVBR0wsVUFISyxFQUlMLFVBSkssQ0FBVCxDLENBTUE7O0FBQ0FpSixvRkFBUyxDQUNMakosQ0FBQyxDQUFDLHVCQUFELENBREksRUFFTEEsQ0FBQyxDQUFDLG9CQUFELENBRkksRUFHTCxVQUhLLEVBSUwsV0FKSyxDQUFULEMsQ0FNQTs7QUFDQWlCLDZEQUFZLEcsQ0FFWjs7QUFDQWxCLDZEQUFrQixHLENBRWxCOztBQUNBK0Ysc0ZBQTRCLEciLCJmaWxlIjoiLi9raXR0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2tpdHR5LmpzXCIpO1xuIiwiY29uc3QgaW5pdEhhbmRsZXJzQmFubmVyID0gKCkgPT4ge1xuXG4gICAgJCgnI21vZGFsQ3VzdG9tQmFubmVyJykub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+ICQoJyNraXR0eVRvQmFubmVyJykuYXR0cigna2l0dHlJZCcsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZGF0YXNldC5raXR0eUlkKVxuICAgIClcblxuICAgICQoJyNtb2RhbFJlbW92ZUJhbm5lcicpLm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiAkKCcja2l0dHlGcm9tQmFubmVyJykuYXR0cigna2l0dHlJZCcsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZGF0YXNldC5raXR0eUlkKVxuICAgIClcblxuICAgICQoJyNraXR0eVRvQmFubmVyJykuY2xpY2soKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAnbW9kYWwnOiAnc2hvdycsXG4gICAgICAgICAgICAnYmFubmVyX2hlYWRlcic6ICQoJyNiYW5uZXJfaGVhZGVyJykudmFsKCksXG4gICAgICAgICAgICAnYmFubmVyX2Rlc2NyaXB0aW9uJzogJCgnI2Jhbm5lcl9kZXNjcmlwdGlvbicpLnZhbCgpLFxuICAgICAgICAgICAgJ2tpdHR5X2lkJzogJCgnI2tpdHR5VG9CYW5uZXInKS5hdHRyKCdraXR0eUlkJylcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmZXRjaCgnc3JjL0RCL2tpdHR5X0NSVUQvcmVwbGFjZVRvQmFubmVyLnBocCcsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgfSlcblxuICAgICAgICAkKCcjbW9kYWxDdXN0b21CYW5uZXInKS5tb2RhbCgnaGlkZScpXG5cbiAgICB9KVxuXG4gICAgJCgnI2tpdHR5RnJvbUJhbm5lcicpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgJ21vZGFsJzogJ2hpZGUnLFxuICAgICAgICAgICAgJ2Jhbm5lcl9oZWFkZXInOiAnJyxcbiAgICAgICAgICAgICdiYW5uZXJfZGVzY3JpcHRpb24nOiAnJyxcbiAgICAgICAgICAgICdraXR0eV9pZCc6ICQoJyNraXR0eUZyb21CYW5uZXInKS5hdHRyKCdraXR0eUlkJylcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoKCdzcmMvREIva2l0dHlfQ1JVRC9yZXBsYWNlVG9CYW5uZXIucGhwJywgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICB9KVxuXG4gICAgICAgICQoJyNtb2RhbFJlbW92ZUJhbm5lcicpLm1vZGFsKCdoaWRlJylcblxuICAgIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEhhbmRsZXJzQmFubmVyIiwiLy8gVE9ETzogXG4vLyAgICArMC4g0JfQsNC70LjRgtGMINC70L7QutCw0LvQuNC30LDRhtC40Y4g0LDQstGC0L7RgNC40LfQsNGG0LjQuCDQuCDQtNC+0YDQsNCx0L7RgtCw0YLRjCDQtdC1INGE0YPQvdC60YbQuNC+0L3QsNC7LlxuLy8gICAgKzEuINCf0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGE0L7RgtC+0LPRgNCw0YTQuNC5INC60L7RgtGP0YIg0Lgg0LLQt9GA0L7RgdC70YvRhSDQttC40LLQvtGC0L3Ri9GFINCz0YDRg9C30LjRgtGMINGC0L7Qu9GM0LrQviDQs9C70LDQstC90YvQtSwg0L7RgdGC0LDQu9GM0L3QvtC1INGC0L7Qu9GM0LrQviDQv9GA0Lhcbi8vICAgICAgINC90LDQttCw0YLQuNC4INC90LAg0LTQtdGC0LDQu9C60YMuIFxuLy8gICAgKzQuINCj0LLQtdC70LjRh9C40YLRjCDRgdC70L7QttC90L7RgdGC0Ywg0L/QsNGA0L7Qu9GPINC90LAg0L/RgNC+0LzQtSAo0L/QvtC40YHQuiDQv9C+INGE0YDQsNC30LUgXCLQv9GA0LjQtNGD0LzQsNC50YLQtSDQv9Cw0YDQvtC70Ywg0L/QvtGB0LvQvtC20L3QtdC1XCIpXG4vLyAgICArNS4g0J/RgNC+0YDQsNCx0L7RgtCw0YLRjCDQvtGC0L/RgNCw0LLQutGDINC/0LjRgdGM0LzQsCDQvdCwINC/0YDQvtC80LUuXG4vLyAgICArNi4g0J7RgtGB0YvQu9Cw0YLRjCDQv9C40YHRjNC80L4g0L/RgNC4INCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0L3QsCDQv9C+0YfRgtC+0LLRi9C5INGP0YnQuNC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjy5cbi8vICAgICs3LiBCcmVlZC0+TGl0dGVyIEZyZWUtPkF2YWlsYWJsZSBzaWduX2luLT5zaWduX3VwXG4vLyAgICArOC4g0JTQvtCx0LDQstC70LXQvdC40LUg0LHQsNC90L3QtdGA0LAg0LIg0YDQsNC30YDQtdC30LUg0Y/Qt9GL0LrQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8uXG4vLyAgICA5LiDQlNC+0LHQsNCy0LvQtdC90LjQtSDQvtGC0LfRi9Cy0LAgLSDQstGB0LUg0YHQu9C+0LzQsNC70L7RgdGMLlxuLy8gICAgMTAuINCd0LUg0LTQvtCx0LDQstC70Y/QtdGC0YHRjyDRj9C30YvQulxuLy8gICAgKzExLiDQmtC+0YDRj9Cy0L7QtSDQvtGC0L7QsdGA0LDQttC10L3QuNC1INC/0LDQvdC10LvQuCDQvdCw0LLQuNCz0LDRhtC40Lhcbi8vICAgIDEyLiDQndCw0LTQviDRh9GC0L4t0YLQviDRgdC00LXQu9Cw0YLRjCDRgSDQsNC00LDQv9GC0LjQstC90L7RgdGC0YzRjiDRgNGD0YHRgdC60L7Qs9C+INGI0YDQuNGE0YLQsCAo0LLQvtC30LzQvtC20L3QviDQt9Cw0LzQtdC90LjRgtGMKVxuLy8gICAgMTQuINCe0YTQvtGA0LzQuNGC0Ywg0LfQsNC60LDQtyDQvdCwINC/0LXRgNC10LLQvtC0LiBcbi8vICAgIDE1LiDQn9GA0L7QutC+0L3RgdGD0LvRjNGC0LjRgNC+0LLQsNGC0YzRgdGPINC/0L4g0LLQvtC/0YDQvtGB0LDQvCBTRU8uXG4vLyAgICArMTYuINCU0L7QsdCw0LLQuNGC0Ywg0LjQt9C80LXRgNC10L3QuNC1INGP0LfRi9C60LAg0LIg0L/QvtC80LXRgtGLLiDQn9C+LdGF0L7RgNC+0YjQtdC80YMg0L3Rg9C20L3QviDQvtGC0LLRj9C30LDRgtGMINC70L7QutCw0LvQuNC30LjRgNGD0LXQvNGL0Lkg0LrQvtC90YLQtdC90YJcbi8vICAgICAgICAg0L7RgiDQvtC/0L7RgNC90YvRhSDRgtCw0LHQu9C40YYg0Lgg0L7RgdGC0LDQstC40YLRjCDRgtC+0LvRjNC60L4g0YHQstGP0LfQuC4g0K3RgtC+INCx0LvQvtC60LXRgCDQtNC70Y8g0L/QtdGA0LXQstC+0LTQvtCyINC4IFNFTy4g0J/RgNC40L7RgNC40YLQtdGCINC/0LXRgNCy0LjRh9C90YvQuVxuLy8gICAgKzE3LiDQoNC10YjQuNGC0Ywg0LLQvtC/0YDQvtGBINGBINC/0LXRgNC10LzQtdGJ0LXQvdC40LXQvCBsb2NhbF9jb25zdGFudHMg0LggY2hlY2tfcnVsZXNcbi8vICAgICsxOC4gZm9udGF3ZXNvbWUtZnJlZSDQu9GD0YfRiNC1INC/0L7QutCwINGD0LTQsNC70LjRgtGMINC40Lcgbm9kZV9tb2R1bGVzXG4vLyAgICArMTkuINCe0YfQuNGB0YLQuNGC0Ywg0L7RgiDQvdC10LjRgdC/0L7Qu9GM0LfRg9C10LzQvtCz0L4g0YLQtdC/0LXRgNGMINGE0YPQvdC60YbQuNC+0L3QsNC70LBcbi8vICAgICsyMC4g0JTQvtC/0LjRgdCw0YLRjCDQutC+0L3RhNC40LPRg9GA0LDRhtC40L7QvdC90YvQuSDRhNCw0LnQuyDQtNC70Y8g0YDQsNC30LTQtdC70LXQvdC40Y8gZGV2INC4IHByb21cbi8vICAgICsyMS4g0JrQsNC60LjQtS3RgtC+INC/0YDQvtCx0LvQtdC80Ysg0YEg0YPQtNCw0LvQtdC90LjQtdC8INC/0LXRgNC40L7QtNCwXG4vLyAgICArMjIuINCf0YDQuCDQvtGC0LrRgNGL0YLQuNC4INC00LXRgtCw0LvQutC4INC/0L4g0LrQvtGC0LXQvdC60YMg0L7RgtC60YDRi9Cy0LDQtdGC0YHRjyDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3QvtC1INC+0LrQvdC+XG4vLyAgICArMjMuINCd0YPQttC90L4g0L3QsNC70LDQtNC40YLRjCDQstC60LvQsNC00LrQuCAtINGC0L4g0LXRgdGC0Ywg0YfRgtC+0LHRiyDQv9GA0Lgg0L7RgtC60YDRi9GC0LjQuCDQvtGC0LrRgNGL0LLQsNC70YHRjyDQv9C10YDQstGL0LkgKNC/0L4g0LDQu9GE0LDQstC40YLRgylcbi8vICAgICAgICAg0L3QtdCw0YDRhdC40LLQvdGL0Lkg0L/QvtC80LXRglxuLy8gICAgKzI0LiDQpdCw0YDQtCDQtNC10L/Qu9C+0Llcbi8vICAgICsyNS4g0JvQvtC60LDQuNC30LDRhtC40Y8g0L7RgtC/0YDQsNCy0LrQuCDQv9C40YHRjNC80LAgKNCyINGC0L7QvCDRh9C40YHQu9C1INC4INGC0LXQutGB0YIg0L/QuNGB0YzQvNCwKVxuLy8gICAgKzI2LiDQktGB0YLQsNCy0LjRgtGMINCyIGFsdCwgdGl0bGUg0LggbWV0YSDRgtC10LPQuCDQt9Cw0L/QuNGB0Lgg0LTQu9GPINGA0L7QsdC+0YLQvtCyINC90LAg0LLRgdC10YUg0LjRgdC/0L7Qu9GM0LfRg9C10LzRi9GFINGP0LfRi9C60LDRhVxuLy8gICAgICAgINCS0L7Qt9C80L7QttC90L4g0YHRgtC+0LjRgiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YDQsNC90LTQvtC80LjQt9Cw0YLQvtGALCDQstGL0LHQuNGA0LDRjtGJ0LjQuSDQvdGD0LbQvdGL0LUg0LfQvdCw0YfQtdC90LjRjyDQsiDRgdC70YPRh9Cw0LnQvdC+0Lwg0L/QvtGA0Y/QtNC60LVcbi8vICAgICsyNy4gc2hhcmVkQnJvb2RzTGlzdFtdIC0g0LLRi9GP0YHQvdC40YLRjCDRh9GC0L4g0Y3RgtC+XG4vLyAgICArMjguINCb0L7QutCw0LvQuNC30LjRgNC+0LLQsNGC0Ywg0YHQu9C+0LLQsCDQkNGA0YXQuNCyIC8g0KHQutGA0YvRgtGMINCw0YDRhdC40LIuXG4vLyAgICArMzAuINCh0YLRgNCw0L3QvdC+0YHRgtC4INGBINC30LDQv9C+0LzQuNC90LDQvdC40LXQvCDRj9C30YvQutCwINC00LvRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbi8vICAgICszMS4g0J/RgNC+0L/QuNGB0LDRgtGMIDwhLS0gZW50cm9waXplci5KUyAtLT4g0L3QsCDQstGB0LXRhSDRgdGC0YDQsNC90LjRhtCw0YVcbi8vICAgIDMyLiDQkiDRgdC/0LjRgdC60LUg0LLRi9Cx0L7RgNCwINGA0L7QtNC40YLQtdC70LXQuSDQvtGC0L7QsdGA0LDQttCw0YLRjCDRgtC+0LvRjNC60L4g0YLQtdGFLCDRh9GC0L4g0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YIg0YLQtdC60YPRidC10LzRgyDRj9C30YvQutGDLlxuLy8gICAgKzMzLiDQm9C+0LrQsNC70LjQt9Cw0YbQuNGPINGB0L7QvtCx0YnQtdC90LjQuSDQstCw0LvQuNC00LDRhtC40LguXG4vLyAgICArMzQuIFwi0J/QvtC00YDQvtCx0L3QtdC1XCIg0L3QtSDRgNCw0LHQvtGC0LDQtdGCLlxuLy8gICAgMzUuINCf0L7QtNGC0Y/Qs9C40LLQsNGC0Ywg0LjQvdGE0YMg0LjQtyDRgNC10LrQu9Cw0LzQvdC+0LPQviDQsdCw0L3QvdC10YDQsCAo0LXRgdC70Lgg0YLQsNC60L7QstCw0Y8g0LHRi9C70LAg0YDQsNC90LXQtSDQstC90LXRgdC10L3QsCkuXG4vLyAgICAzNi4g0J/RgNC+0LLQtdGA0LjRgtGMINCw0LTQsNC/0YLQuNCyINC80L7QtNCw0LvRjNC90YvRhSDQvtC60L7QvSDQtNC70Y8g0LTQtdGC0LDQu9C60Lgg0LrQvtGC0Y/Rgi5cbi8vICAgICszNy4g0JvQvtC60LDQu9C40LfQvtCy0LDRgtGMINGE0YDQsNC30YMgXCLQn9C+0LTRgNC+0LHQvdC10LUg0L7QsdC+INC80L3QtVwiXG4vLyAgICAzOC4g0J/RgNC40LrRgNC10L/QuNGC0Ywg0Log0L3QvtCy0L7RgdGC0Y/QvCDQtNCw0YLRgy5cbi8vICAgIDM5LiDQo9C00LDQu9C40YLRjCDQvdC10LjRgdC/0L7Qu9GM0LfRg9C10LzRi9C1INGP0LfRi9C60Lgg0Lgg0L7RgdGC0LDQstC40YLRjCDRgNGD0YHRgdC60LjQtSDRg9C80L7Qu9GH0LDQvdC40Y8uXG4vLyAgICArNDAuINCf0L7Qv9GA0LDQstC40YLRjCDQvNC10YLQsNGC0LXQsyBkZXNjcmlwdGlvbi5cbi8vICAgICs0MS4g0J/QvtGB0LzQvtGC0YDQtdGC0Ywg0L/QvtC40YHQutC+0Lwg0LLRgdC1INCy0YHRgtCw0LLQutC4IH5+fiDQuCDRgdC00LXQu9Cw0YLRjCDQstGB0LUg0YfRgtC+INGC0LDQvCDQvdCw0L/QuNGB0LDQvdC+LlxuLy8gICAgNDIuINCh0LTQtdC70LDRgtGMINC/0LXRgNC10LvQuNC90LrQvtCy0LrRgy4g0J3QsCBTaXRlbWFwINGC0L7QttC1INC00L7QsdCw0LLQuNGC0Ywga2V5d29yZHMsINC00L7QsdC40YLRjCBza3JcblxuY29uc3QgaW5pdEhhbmRsZXJzID0gKCkgPT4ge1xuXG4gICAgJChhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoSW5mbygpXG5cbiAgICAgICAgaW5pdChkYXRhKVxuICAgXG4gICAgICAgIGhhbmRsZVBpbGxzKGRhdGFbJ2RhdGEnXSlcblxuICAgICAgICAkKCcjdi1waWxscy1jb21tb24tYXJjaGl2ZScpLm9uKCdjbGljaycsIGhhbmRsZUFyY2hpdmVQaWxscylcbiAgICAgICAgXG4gICAgfSlcblxuICAgICQoJy5icm9vZFRvQXJjaGl2ZScpLmNsaWNrKGFzeW5jIGV2ZW50ID0+IHtcblxuICAgICAgICBhd2FpdCBmZXRjaCgnc3JjL0RCL2tpdHR5X0NSVUQvcmVwbGFjZVRvQXJjaGl2ZS5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeydicm9vZF9pZCc6IGV2ZW50LnRhcmdldC5kYXRhc2V0LmJyb29kSWR9KSwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgfSlcbiAgICBcbiAgICB9KVxuXG59XG5cbi8qINCh0LrRgNGL0LLQsNC10Lwg0LLQutC70LDQtNC60Lgg0YDQsNGB0L/RgNC+0LTQsNC90L3Ri9GFINC/0L7QvNC10YLQvtCyICAqL1xuXG5sZXQgYnJvb2RzSW5mbyA9IHVuZGVmaW5lZFxuXG5jb25zdCBmZXRjaEluZm8gPSBhc3luYyAoKSA9PiB7XG5cbiAgICBpZiAoYnJvb2RzSW5mbyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYnJvb2RzSW5mbyA9IGF3YWl0IChhd2FpdCBmZXRjaChcInNyYy9EQi9raXR0eV9DUlVEL2Jyb29kX0NSVUQvYnJvb2RfZ2V0X2FsbC5waHBcIiwgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgfSkpLmpzb24oKVxuICAgIH1cblxuICAgIHJldHVybiBicm9vZHNJbmZvXG5cbn1cblxuY29uc3QgaW5pdCA9IChicm9vZHNJbmZvKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gYnJvb2RzSW5mb1snZGF0YSddLmZpbHRlcigoe2FyY2hpdmV9KSA9PiBhcmNoaXZlID09PSAnMScpXG4gICAgICAgIC5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCA9PSAwKVxuXG4gICAgaWYgKHRhcmdldC5sZW5ndGggIT0gMCkge1xuICAgICAgICAkKGAjdi1waWxscy1oZWFkaW5nQnJvb2RfJHt0YXJnZXRbMF0uaWR9LXRhYmApLnRhYignc2hvdycpXG4gICAgfVxufVxuXG5jb25zdCBoYW5kbGVQaWxscyA9IChkYXRhLCBhdHRyU2hvdyA9IHVuZGVmaW5lZCkgPT4ge1xuICAgIFxuICAgIGRhdGEuZm9yRWFjaCgoe2lkLCBhcmNoaXZlfSkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjdXJyZW50X3BpbGwgPSAkKGAjdi1waWxscy1oZWFkaW5nQnJvb2RfJHtpZH0tdGFiYClcbiAgICBcbiAgICAgICAgaWYgKGFyY2hpdmUgPT09ICcwJykge1xuICAgIFxuICAgICAgICAgICAgaWYgKChhdHRyU2hvdyA9PT0gdW5kZWZpbmVkKSB8fCAoYXR0clNob3cgPT0gJzAnKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfcGlsbC5oaWRlKFwic2xvd1wiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50X3BpbGwuc2hvdyhcInNsb3dcIilcbiAgICAgICAgICAgIH0gIFxuICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICgoYXR0clNob3cgPT09IHVuZGVmaW5lZCkgfHwgKGF0dHJTaG93ID09ICcwJykpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50X3BpbGwuc2hvdyhcInNsb3dcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudF9waWxsLmhpZGUoXCJzbG93XCIpXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5maWx0ZXIoKHthcmNoaXZlfSkgPT4gYXJjaGl2ZSA9PSAnMScpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAkKCcjdi1waWxscy1jb21tb24tdGFiJykudGFiKCdzaG93JylcbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICBcbn1cblxuY29uc3QgaGFuZGxlQXJjaGl2ZVBpbGxzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgY29uc3QgZGF0YSAgICAgICAgICA9IGF3YWl0IGZldGNoSW5mbygpXG4gICAgY29uc3QgYXJjaGl2ZV9waWxscyA9ICQoJyN2LXBpbGxzLWNvbW1vbi1hcmNoaXZlJylcblxuICAgIGlmIChhcmNoaXZlX3BpbGxzLmF0dHIoXCJzaG93XCIpID09IHVuZGVmaW5lZCkge1xuICAgICAgICBhcmNoaXZlX3BpbGxzLmF0dHIoXCJzaG93XCIsIFwiMVwiKVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJTaG93ID0gYXJjaGl2ZV9waWxscy5hdHRyKFwic2hvd1wiKVxuXG4gICAgaWYgKGF0dHJTaG93ID09IFwiMVwiKSB7XG4gICAgICAgIGFyY2hpdmVfcGlsbHMuYXR0cihcInNob3dcIiwgXCIwXCIpXG4gICAgICAgIGFyY2hpdmVfcGlsbHMuaHRtbChkYXRhWydoaWRlX2FyY2hpdmVfdGl0bGUnXSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcmNoaXZlX3BpbGxzLmF0dHIoXCJzaG93XCIsIFwiMVwiKVxuICAgICAgICBhcmNoaXZlX3BpbGxzLmh0bWwoZGF0YVsnYXJjaGl2ZV90aXRsZSddKVxuICAgIH1cblxuICAgIGhhbmRsZVBpbGxzKGRhdGFbJ2RhdGEnXSwgYXR0clNob3cpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEhhbmRsZXJzIiwiRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnMgPSBhc3luYyAodGFibGVOYW1lLCBwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHBhcmFtcyA9IFtdKSA9PiB7XG5cbiAgICBjb25zdCBhcHBseV9pbml0ID0gYXN5bmMgaXRlbXMgPT4gXG4gICAgICAgIGl0ZW1zLmZvckVhY2goY3VycmVudCA9PiBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBjdXJyZW50LmlkKSlcblxuICAgIGF3YWl0IGFwcGx5X2luaXQoYXdhaXQgZmV0Y2hJbWcodGFibGVOYW1lLCBwYXJhbXMpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCkgPT4gXG4gICAgYXdhaXQgaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgJ2NvbW1vbicpXG5cbmNvbnN0IGluaXRPbmVEcm9wem9uZSA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpID0+IHtcblxuICAgIGNvbnN0IGlkRHJvcHpvbmUgPSBgIyR7cHJlZml4RHJvcHpvbmV9LSR7dmFsdWVUYXJnZXRGZWlsZH1gXG5cbiAgICBpZiAoJChpZERyb3B6b25lKS5sZW5ndGggIT09IDApIHtcblxuICAgICAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCh0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbn1cblxuY29uc3QgZmV0Y2hJbWcgPSBhc3luYyAodGFibGVOYW1lLCBwYXJhbXMgPSBbXSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvZXhoaWJpdGlvbl9DUlVEL2dldF9leGhpYml0aW9uX3Bob3RvLnBocCc7XG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyB0YWJsZU5hbWUsIHBhcmFtcyB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyBcbiAgICB9KSkuanNvbigpXG5cbiAgICByZXR1cm4gaW1hZ2VzXG5cbn0iLCJjb25zdCBpbml0T25lRHJvcHpvbmUgPSBhc3luYyAoa2l0dHlfaWQsIHBlcmlvZHNfaWQpID0+IHtcblxuICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbiAgICBjb25zdCBpZERyb3B6b25lID0gYCNteS1kcm9wem9uZS1pJHtraXR0eV9pZH0taSR7cGVyaW9kc19pZH1gXG5cbiAgICBpZiAoJChpZERyb3B6b25lKS5sZW5ndGggIT09IDApIHtcblxuICAgICAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtpdHR5X2lkXCIsIGtpdHR5X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGVyaW9kX2lkXCIsIHBlcmlvZHNfaWQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0T25lRHJvcHpvbmUiLCJjb25zdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKGN1cnJlbnQpKVxuICAgICAgICBcbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKCkpXG5cbn1cblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKGN1cnJlbnQpID0+IHtcblxuICAgIGxldCBpZERyb3B6b25lID0gYCNteS1kcm9wem9uZS0ke2N1cnJlbnQuaWR9YFxuXG4gICAgaWYgKCQoaWREcm9wem9uZSkubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG4gICAgICAgICAgICBtYXhGaWxlczogMSxcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzZW5kaW5nXCIsIChmaWxlLCB4aHIsIGZvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtpdHR5X2lkXCIsIGN1cnJlbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJicm9vZF9pZFwiLCBjdXJyZW50LmJyb29kX2lkKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZmlsZS5pbml0VGh1bWJuYWlsKSAmJiAodGhpcy5maWxlc1sxXSAhPSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKHRoaXMuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnQgIT0gbnVsbCkgJiYgKGN1cnJlbnQudXJsICE9IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWNUaHVtYm5haWwodGhpcywgY3VycmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICgpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2tpdHR5X0NSVUQvaW1nX0NSVUQvaW1nX2dldF9tYWluLnBocCc7XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGxldCBpbWFnZXMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goY3VycmVudF91cmwsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59XG5cbi8vIERSWSAtINC/0LXRgNC10L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuY29uc3QgZXhlY1RodW1ibmFpbCA9IChjb250ZXh0LCBjdXJyZW50X2ltYWdlKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudEZpbGUgPSB7XG4gICAgICAgIG5hbWU6IGN1cnJlbnRfaW1hZ2UubmFtZSxcbiAgICAgICAgc2l6ZTogY3VycmVudF9pbWFnZS5zaXplLFxuICAgICAgICBhY2NlcHRlZDogdHJ1ZSxcbiAgICAgICAga2luZDogJ2ltYWdlJyxcbiAgICAgICAgdXBsb2FkOiB7XG4gICAgICAgICAgICBmaWxlbmFtZTogY3VycmVudF9pbWFnZS5uYW1lLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhVVJMOiBjdXJyZW50X2ltYWdlLnVybCxcbiAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgIGNvbnRleHQuZmlsZXMucHVzaChjdXJyZW50RmlsZSk7XG4gICAgY29udGV4dC5lbWl0KFwiYWRkZWRmaWxlXCIsIGN1cnJlbnRGaWxlKTtcbiAgICBjb250ZXh0LmNyZWF0ZVRodW1ibmFpbEZyb21VcmwoXG4gICAgICAgIGN1cnJlbnRGaWxlLFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsV2lkdGgsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxIZWlnaHQsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxNZXRob2QsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHRodW1ibmFpbCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmVtaXQoJ3RodW1ibmFpbCcsIGN1cnJlbnRGaWxlLCB0aHVtYm5haWwpO1xuICAgICAgICAgICAgY29udGV4dC5lbWl0KFwiY29tcGxldGVcIiwgY3VycmVudEZpbGUpO1xuICAgICAgICB9XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwiLCJpbXBvcnQgaW5pdE9uZURyb3B6b25lIGZyb20gJy4uL2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eS5qcydcblxuY29uc3QgaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSA9ICgpID0+IHtcblxuICAgICQoJyNraXR0eVBob3RvQ29udGVudCcpLm9uKCdzaG93bi5icy5tb2RhbCcsIGFzeW5jIGV2ZW50ID0+IHtcblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKtCX0JDQk9Cg0KPQl9Ca0JAg0J/QldCg0JjQntCU0J7QkioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIC8vINCk0LXRgtGH0LjQvCDQt9Cw0LPQvtC70L7QstC60Lgg0L/QtdGA0LjQvtC00L7QsiDRgSDRgdC10YDQstC10YDQsFxuICAgICAgICBjb25zdCBmZXRjaFBpbGxzQ2FwdGlvbiA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYnJvb2RfaWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQuYnJvb2RJZFxuXG4gICAgICAgICAgICBjb25zdCBraXR0eVBlcmlvZHMgPSBhd2FpdCAoYXdhaXQgZmV0Y2goJ3NyYy9EQi9sYXp5RmV0Y2hEYXRhL2ZldGNoUGVyaW9kc0NhcHRpb24ucGhwJywgeyBcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBicm9vZF9pZCB9KSwgXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgICAgICB9KSkuanNvbigpXG5cbiAgICAgICAgICAgIHJldHVybiBraXR0eVBlcmlvZHNcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0KTQvtGA0LzQuNGA0YPQtdC8INCy0LrQu9Cw0LTQutC4INGBINC30LDQs9C+0LvQvtCy0LrQsNC80Lgg0L/QtdGA0LjQvtC00L7QslxuICAgICAgICBjb25zdCBjcmVhdGVQaWxsc1BlcmlvZHMgPSBhc3luYyAoZGF0YVBlcmlvZHMpID0+IHtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gJ2FjdGl2ZSdcblxuICAgICAgICAgICAgZGF0YVBlcmlvZHMuZm9yRWFjaCgoe2lkLCBuYW1lfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArXG4gICAgICAgICAgICAgICAgYDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgJHthY3RpdmV9XCIgaWQ9XCJwZXJpb2RfJHtpZH1cIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjcGVyaW9kXyR7aWR9XCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJwZXJpb2RfJHtpZH1cIiBhcmlhLXNlbGVjdGVkPVwiJHsoYWN0aXZlICE9PSAnJyA/ICd0cnVlJyA6ICdmYWxzZScpfVwiPiR7bmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5gICAgICAgXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gJydcbiAgICAgICAgICAgIH0pICAgICAgIFxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCQ0YHQuNC90YXRgNC+0L3QvdC+INC00L7QsdCw0LLQu9GP0LXQvCDQt9Cw0LPQvtC70L7QstC60Lgg0L/QtdGA0LjQvtC00L7QsiDQuiDQvNC+0LTQsNC70YzQvdC+0LzRgyDQvtC60L3Rg1xuICAgICAgICBjb25zdCBjcmVhdGVQZXJpb2RzTGF5b3V0ID0gYXN5bmMgKHBpbGxzUGVyaW9kcykgPT4ge1xuXG4gICAgICAgICAgICAkKFwiI3Bob3RvS2l0dHlDb250ZW50XCIpLmFwcGVuZChgXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJwaG90b3NLaXR0eVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7cGlsbHNQZXJpb2RzfVxuICAgICAgICAgICAgICAgIDwvdWw+ICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwaG90b3NLaXR0eVRhYkNvbnRlbnRcIiBjbGFzcz1cInRhYi1jb250ZW50IHRleHQtY2VudGVyIG15LTIgc2hhZG93LWxnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImtpdHR5Q2FwdGlvblwiIGNsYXNzPVwiY29udGFpbmVyIGFsZXJ0IGFsZXJ0LWluZm8gdGV4dC1jZW50ZXJcIiByb2xlPVwiYWxlcnRcIj48L2Rpdj5gKVxuXG4gICAgICAgIH1cblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKtCX0JDQk9Cg0KPQl9Ca0JAg0KTQntCi0J7Qk9Cg0JDQpNCY0JkqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICBjb25zdCBraXR0eV9pZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQuZGF0YXNldC5raXR0eUlkXG5cbiAgICAgICAgLy8g0KTQtdGC0YfQuNC8INGE0L7RgtC+0LPRgNCw0YTQuNC4INGBINGB0LXRgNCy0LXRgNCwXG4gICAgICAgIGNvbnN0IGZldGNoS2l0dHlQaG90b3MgPSBhc3luYyAocGVyaW9kX2lkKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGtpdHR5UGhvdG9zID0gYXdhaXQgKGF3YWl0IGZldGNoKCdzcmMvREIvbGF6eUZldGNoRGF0YS9mZXRjaENvbnRlbnRLaXR0eVBob3RvLnBocCcsIHsgXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsga2l0dHlfaWQsIHBlcmlvZF9pZCB9KSwgXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgICAgICB9KSkuanNvbigpXG5cbiAgICAgICAgICAgIHJldHVybiBraXR0eVBob3Rvc1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyDQlNC40L3QsNC80LjRh9C10YHQutC4INGE0L7RgNC80LjRgNGD0LXQvCDQutC+0L3RgtC10L3RgiDQv9C+INC/0LXRgNC40L7QtNGDXG4gICAgICAgIGNvbnN0IGNvbnRlbnRQZXJpb2QgPSBhc3luYyAoZGF0YSwgcGVyaW9kX2lkKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBvd2xDb250ZW50ID0gJydcbiAgICAgICAgICAgIGxldCBmYW5jeUNvbnRlbnQgPSAnJ1xuXG4gICAgICAgICAgICBjb25zdCBwYXRocyA9IGRhdGFbJ3BhdGhzJ11cblxuICAgICAgICAgICAgcGF0aHMuZm9yRWFjaCgoe3BhdGgsIGNoZWNrYm94fSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgb3dsQ29udGVudCA9IG93bENvbnRlbnQgK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGF0aH1cIiBhbHQ9XCLQmNC30L7QsdGA0LDQttC10L3QuNC1INC+0YLRgdGD0YLRgdGC0LLRg9C10YJcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgICAgICAgICBmYW5jeUNvbnRlbnQgPSBmYW5jeUNvbnRlbnQgK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTQgY29sLTYgdGh1bWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS1mYW5jeWJveD1cImtpdHR5XyR7a2l0dHlfaWR9XyR7cGVyaW9kX2lkfVwiIGhyZWY9XCIke3BhdGh9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgc3JjPVwiJHtwYXRofVwiIGFsdD1cItCY0LfQvtCx0YDQsNC20LXQvdC40LUg0L7RgtGB0YPRgtGB0YLQstGD0LXRglwiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICR7Y2hlY2tib3h9XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAkKCcjcGhvdG9zS2l0dHlUYWJDb250ZW50JykuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwiJHtwZXJpb2RfaWR9XCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaG9tZS10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtkYXRhWydzZWN0aW9uX3Jvb3QnXX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC0xIGFsZXJ0IGFsZXJ0LXByaW1hcnlcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvd2wtY2Fyb3VzZWxcIj4ke293bENvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGFsZXJ0IGFsZXJ0LXByaW1hcnlcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4ke2ZhbmN5Q29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICR7ZGF0YVsnYnV0dG9uX2RlbGV0ZSddfVxuICAgICAgICAgICAgICAgIDwvZGl2PmApXG5cblxuICAgICAgICAgICAgJCgnI2tpdHR5Q2FwdGlvbicpLmVtcHR5KCkuYXBwZW5kKGRhdGFbJ2Rlc2NyeXB0aW9uJ10pXG5cbiAgICAgICAgICAgICQoJyNraXR0eVBob3RvQ29udGVudFRpdGxlJykuZW1wdHkoKS5hcHBlbmQoZGF0YVsnbmFtZSddKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgJChgI3Bob3Rvc0tpdHR5VGFiQ29udGVudCAjJHtwZXJpb2RfaWR9YCkuYXR0cignZGF0YS1sb2FkaW5nLWRvbmUnLCAnMScpXG5cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vINCX0LDQu9C40LLQsNC10Lwg0L/QvtC70YPRh9C10L3QvdGL0LUg0YEg0YHQtdGA0LLQtdGA0LAg0YTQvtGC0L7Qs9GA0LDRhNC40Lgg0LIg0LDRgdC40L3RhdGA0L7QvdC90L7QvCDRgNC10LbQuNC80LVcbiAgICAgICAgY29uc3QgY3JlYXRlUGhvdG9QZXJpb2QgPSBhc3luYyAocGVyaW9kX2lkKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICgkKGAjcGhvdG9zS2l0dHlUYWJDb250ZW50ICMke3BlcmlvZF9pZH1gKS5hdHRyKCdkYXRhLWxvYWRpbmctZG9uZScpID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbnRlbnRQZXJpb2QoYXdhaXQgZmV0Y2hLaXR0eVBob3RvcyhwZXJpb2RfaWQpLCBwZXJpb2RfaWQpXG5cbiAgICAgICAgICAgICAgICBhd2FpdCBpbml0T25lRHJvcHpvbmUoa2l0dHlfaWQsIHBlcmlvZF9pZC5zcGxpdCgnXycpWzFdKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjcGhvdG9zS2l0dHlUYWJDb250ZW50IC50YWItcGFuZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICQoYCNwaG90b3NLaXR0eVRhYkNvbnRlbnQgIyR7cGVyaW9kX2lkfWApLnRhYignc2hvdycpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCk0L7RgNC80LjRgNGD0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INC/0LXRgNC10YXQvtC00LAg0L/QviDQstC60LvQsNC00LrQsNC8INC/0LXRgNC40L7QtNC+0LJcbiAgICAgICAgY29uc3QgY3JlYXRlSGFuZGxlclBpbGxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgJCgnI3Bob3Rvc0tpdHR5VGFiIGFbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5vbignc2hvd24uYnMudGFiJywgYXN5bmMgZnVuY3Rpb24oKSB7ICBcbiAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVQaG90b1BlcmlvZCgkKHRoaXMpLmF0dHIoJ2lkJykpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKtCe0KHQndCe0JLQndCQ0K8g0KfQkNCh0KLQrCoqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIGlmICgkKFwiI3Bob3RvS2l0dHlDb250ZW50XCIpLmNoaWxkcmVuKCkubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBpbGxzQ2FwdGlvbiA9IGF3YWl0IGZldGNoUGlsbHNDYXB0aW9uKClcblxuICAgICAgICAgICAgaWYgKHBpbGxzQ2FwdGlvbi5sZW5ndGggIT09IDApIHtcblxuICAgICAgICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQstC60LvQsNC00L7QuiDRgSDQv9C10YDQuNC+0LTQsNC80LhcbiAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVQZXJpb2RzTGF5b3V0KGF3YWl0IGNyZWF0ZVBpbGxzUGVyaW9kcyhwaWxsc0NhcHRpb24pKVxuXG4gICAgICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINC/0YDQuCDQv9C10YDQtdGF0L7QtNCw0YUg0L/QviDQstC60LvQsNC00LrQsNC8INC/0LXRgNC40L7QtNC+0LJcbiAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVIYW5kbGVyUGlsbHMoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INGE0L7RgtC+0LrQvtC90YLQtdC90YLQsFxuICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVBob3RvUGVyaW9kKGBwZXJpb2RfJHtwaWxsc0NhcHRpb25bMF0uaWR9YClcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICAkKCcja2l0dHlQaG90b0NvbnRlbnQnKS5vbignaGlkZS5icy5tb2RhbCcsICgpID0+ICQoXCIjcGhvdG9LaXR0eUNvbnRlbnRcIikuZW1wdHkoKSlcbiAgICBcbn0gICBcblxuZXhwb3J0IGRlZmF1bHQgaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSIsImNvbnN0IGRlbGV0ZUJ5SWQgPSBhc3luYyAobW9kYWxXaW5kb3csIHVybCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuXG4gICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuXG4gICAgdHJ5IHtcblxuICAgICAgICBhd2FpdCBmZXRjaCh1cmwsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcblxuICAgIH0gY2F0Y2gge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/QvtC70YPRh9C40YLRjCDQtNCw0L3QvdGL0LUg0L7RgiDRgdC10YDQstC10YDQsCcpXG4gICAgfVxufVxuXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFske2lkX2ZpZWxkX25hbWV9ID0gJHtpZH1dYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9ucyA9IChtb2RhbFdpbmRvdywgdGFyZ2V0QnV0dG9uLCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIHRhcmdldEJ1dHRvbi5jbGljaygoKSA9PiBkZWxldGVCeUlkKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpKVxuXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJyxcbiAgICAgICAgZXZlbnQgPT4gdGFyZ2V0QnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zU3RhdGVzID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVTdGF0ZScpXG4gICAgbGV0IGJ1dHRvbiAgICAgICAgPSAkKCcjZGVsZXRlX3N0YXRlJylcbiAgICBsZXQgaWRfZmllbGRfbmFtZSA9ICdzdGF0ZV9pZCdcbiAgICBsZXQgdXJsICAgICAgICAgICA9ICdzcmMvREIva2l0dHlfQ1JVRC9zdGF0ZV9DUlVEL3N0YXRlX2RlbGV0ZV9ncm91cC5waHAnXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzKSA9PiB7XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzIH1cbiAgICAgICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKCd0cnVlJywgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QgPSAoKSA9PiB7XG5cbiAgICBsZXQgbW9kYWxXaW5kb3cgICA9ICQoJyNtb2RhbERlbGV0ZVBlcmlvZCcpXG4gICAgbGV0IGJ1dHRvbiAgICAgICAgPSAkKCcjZGVsZXRlX3BlcmlvZCcpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnYnJvb2RfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnc3JjL0RCL2tpdHR5X0NSVUQvcGVyaW9kX0NSVUQvcGVyaW9kX2RlbGV0ZV9ncm91cC5waHAnXG5cbiAgICAvLyBEUlkgLSDQv9GA0L7QsdGA0L7RgSDRgSDQutC90L7Qv9C60Lgg0LfQsNC/0YPRgdC60LAg0LzQvtC00LDQu9C60Lgg0L3QsCDQutC90L7Qv9C60YMg0YPQtNCw0LvQtdC90LjRjyDQstGL0L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiBidXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxuICAgIGNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MsIGlkKSA9PiB7XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzLCBpZCB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICBcbiAgICAgICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgaWQgICAgID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKGlkLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MsIGlkKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpXG5cbn0iLCJsZXQgdXJsID0nc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2ltZ19DUlVEL2ltZ19kZWxldGVfZ3JvdXAucGhwJ1xuXG5jb25zdCBkZWxldGVJbWcgPSAobW9kYWxXaW5kb3csIGJ1dHRvbiwgaWRfZmllbGRfbmFtZSwgdGFibGVfbmFtZSkgPT4ge1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSkgXG5cbn1cblxuLy8gRFJZIC0g0YHQvtC+0YLQvdC+0YHQuNGC0YHRjyDRgSDRg9C00LDQu9C10L3QuNC10Lwg0L/QtdGA0LjQvtC00LBcbmNvbnN0IGdldENoZWNrSW1ncyA9IGFzeW5jIChpZCwgaWRfZmllbGRfbmFtZSkgPT4geyBcbiAgICBcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAkKGBpbnB1dFske2lkX2ZpZWxkX25hbWV9ID0gJHtpZH1dYCkuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtSlEgPSAkKGl0ZW0pXG4gICAgICAgIGlmIChjdXJyZW50SXRlbUpRLnByb3AoXCJjaGVja2VkXCIpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudEl0ZW1KUS52YWwoKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG59XG5cbmNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MsIHVybCwgdGFibGVfbmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X2luZiA9IHsgY2hlY2tzLCB0YWJsZV9uYW1lIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVJbWciLCJjb25zdCBpbml0X293bCA9ICgpID0+IHtcbiAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgc21hcnRTcGVlZDogMzAwMCxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA2MDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdF9vd2wiLCJpbXBvcnQgaW5pdF9vd2wgZnJvbSAnLi9mcm9udC91dGlscy9pbml0X293bF9jYXJ1c2VsJ1xuaW1wb3J0IHsgZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiB9IGZyb20gJy4vZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX0luZGV4LmpzJ1xuaW1wb3J0IGRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwgZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfa2l0dHlfdGh1bWJuYWlsLmpzJ1xuaW1wb3J0IGRlbGV0ZUltZyBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGVfaW1nJ1xuaW1wb3J0IHsgZGVsZXRlQ29uZmlybWF0aW9ucywgZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCwgZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyB9IGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZSdcbmltcG9ydCBpbml0SGFuZGxlcnMgZnJvbSAnLi9mcm9udC9icm9vZHMnXG5pbXBvcnQgaW5pdEhhbmRsZXJzQmFubmVyIGZyb20gJy4vZnJvbnQvYmFubmVyJ1xuaW1wb3J0IGluaXRIYW5kbGVyc0xhenlGZXRjaGluZ0RhdGEgZnJvbSAnLi9mcm9udC9sYXp5RmV0Y2hEYXRhL2ZldGNoQ29udGVudEtpdHR5J1xuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQtNC70Y8g0L7QsdGJ0LjRhSDRhNC+0YLQvlxuZHJvcHpvbmVIYW5kbGVyc0NvbW1vbignbXktZHJvcHpvbmUnLCAnY29tbW9uJylcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0YTQvtGC0L4g0LrQvtGC0Y/RgiDQsiDRgNCw0LfRgNC10LfQtSDQstGA0LXQvNC10L3QvdGL0YUg0L/QtdGA0LjQvtC00L7QslxuLy9kcm9wem9uZUhhbmRsZXJzKCdpbWdraXR0eScpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LrQvtGC0Y/RglxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVLaXR0eScpLCBcbiAgICAkKCcjZGVsZXRlX2tpdHR5JyksIFxuICAgICdzcmMvREIva2l0dHlfQ1JVRC9raXR0eV9kZWxldGUucGhwJyxcbiAgICAna2l0dHlfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC/0L7QvNC10YLQvtCyXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUJyb29kJyksIFxuICAgICQoJyNkZWxldGVfYnJvb2QnKSwgXG4gICAgJ3NyYy9EQi9raXR0eV9DUlVEL2Jyb29kX0NSVUQvYnJvb2RfZGVsZXRlLnBocCcsXG4gICAgJ2Jyb29kX2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQv9C10YDQuNC+0LTQvtCyXG5kZWxldGVDb25maXJtYXRpb25zUGVyaW9kKClcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDRgdGC0LDRgtGD0YHQvtCyXG5kZWxldGVDb25maXJtYXRpb25zU3RhdGVzKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINCz0LvQsNCy0L3QvtCz0L4g0YTQvtGC0L4g0LrQvtGC0LXQvdC60LBcbmRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwoKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LLQuNC90L7QuSDQutCw0YDRg9GB0LXQu9C4XG5pbml0X293bCgpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQuSDQutC+0YLQvtCyXG5kZWxldGVJbWcoXG4gICAgJCgnI21vZGFsRGVsZXRlSW1nJyksXG4gICAgJCgnI2RlbGV0ZV9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJyxcbiAgICAnaW1na2l0dHknKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC+0LHRidC40YUg0YTQvtGC0L5cbmRlbGV0ZUltZyhcbiAgICAkKCcjbW9kYWxEZWxldGVDb21tb25JbWcnKSxcbiAgICAkKCcjZGVsZXRlX2NvbW1vbl9pbWcnKSwgXG4gICAgJ2dyb3VwX2lkJywgXG4gICAgJ2ltZ2NvbW1vbicpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiDQv9C10YDQtdC80LXRidC10L3QuNGPINC/0L7QvNC10YLQvtCyINCyINCw0YDRhdC40LJcbmluaXRIYW5kbGVycygpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiDQstGB0L/Qu9GL0LLQsNGO0YnQtdCz0L4g0YDQtdC60LvQsNC80L3QvtCz0L4g0LHQsNC90L3QtdGA0LBcbmluaXRIYW5kbGVyc0Jhbm5lcigpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiBcItC70LXQvdC40LLQvtC5XCIg0LfQsNCz0YDRg9C30LrQuCDRhNC+0YLQvtC60L7QvdGC0LXQvdGC0LBcbmluaXRIYW5kbGVyc0xhenlGZXRjaGluZ0RhdGEoKSJdLCJzb3VyY2VSb290IjoiIn0=