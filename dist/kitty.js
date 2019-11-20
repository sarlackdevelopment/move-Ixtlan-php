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
//    +36. Проверить адаптив модальных окон для деталки котят.
//    +37. Локализовать фразу "Подробнее обо мне"
//    38. Прикрепить к новостям дату.
//    39. Удалить неиспользуемые языки и оставить русские умолчания.
//    +40. Поправить метатег description.
//    +41. Посмотреть поиском все вставки ~~~ и сделать все что там написано.
//    +42. Сделать перелинковку. На Sitemap тоже добавить keywords, добить skr.
//    43. Отключить все настройки SEO для режима разработчика.
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
                  }); //this.on("success", () => location.reload()) На боевом сервере в связи с задержкой - сбоит

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvYnJvb2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5X3RodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvbGF6eUZldGNoRGF0YS9mZXRjaENvbnRlbnRLaXR0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tpdHR5LmpzIl0sIm5hbWVzIjpbImluaXRIYW5kbGVyc0Jhbm5lciIsIiQiLCJvbiIsImV2ZW50IiwiYXR0ciIsInJlbGF0ZWRUYXJnZXQiLCJkYXRhc2V0Iiwia2l0dHlJZCIsImNsaWNrIiwiZGF0YSIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibW9kYWwiLCJpbml0SGFuZGxlcnMiLCJmZXRjaEluZm8iLCJpbml0IiwiaGFuZGxlUGlsbHMiLCJoYW5kbGVBcmNoaXZlUGlsbHMiLCJ0YXJnZXQiLCJicm9vZElkIiwiYnJvb2RzSW5mbyIsInVuZGVmaW5lZCIsImpzb24iLCJmaWx0ZXIiLCJhcmNoaXZlIiwiXyIsImluZGV4IiwibGVuZ3RoIiwiaWQiLCJ0YWIiLCJhdHRyU2hvdyIsImZvckVhY2giLCJjdXJyZW50X3BpbGwiLCJoaWRlIiwic2hvdyIsImFyY2hpdmVfcGlsbHMiLCJodG1sIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImN1cnJlbnQiLCJpbml0T25lRHJvcHpvbmUiLCJmZXRjaEltZyIsImRyb3B6b25lSGFuZGxlcnNDb21tb24iLCJ2YWx1ZVRhcmdldEZlaWxkIiwiaWREcm9wem9uZSIsImFjY2VwdGVkRmlsZXMiLCJmaWxlIiwieGhyIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJjdXJyZW50X3VybCIsImN1cnJlbnRfaW5mIiwiaW1hZ2VzIiwia2l0dHlfaWQiLCJwZXJpb2RzX2lkIiwiZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCIsIm1heEZpbGVzIiwiYnJvb2RfaWQiLCJpbml0VGh1bWJuYWlsIiwiZmlsZXMiLCJyZW1vdmVGaWxlIiwidXJsIiwiZXhlY1RodW1ibmFpbCIsImNvbnRleHQiLCJjdXJyZW50X2ltYWdlIiwiY3VycmVudEZpbGUiLCJuYW1lIiwic2l6ZSIsImFjY2VwdGVkIiwia2luZCIsInVwbG9hZCIsImZpbGVuYW1lIiwiZGF0YVVSTCIsInB1c2giLCJlbWl0IiwiY3JlYXRlVGh1bWJuYWlsRnJvbVVybCIsIm9wdGlvbnMiLCJ0aHVtYm5haWxXaWR0aCIsInRodW1ibmFpbEhlaWdodCIsInRodW1ibmFpbE1ldGhvZCIsInRodW1ibmFpbCIsImluaXRIYW5kbGVyc0xhenlGZXRjaGluZ0RhdGEiLCJmZXRjaFBpbGxzQ2FwdGlvbiIsImtpdHR5UGVyaW9kcyIsImNyZWF0ZVBpbGxzUGVyaW9kcyIsImRhdGFQZXJpb2RzIiwicmVzdWx0IiwiYWN0aXZlIiwiY3JlYXRlUGVyaW9kc0xheW91dCIsInBpbGxzUGVyaW9kcyIsImZldGNoS2l0dHlQaG90b3MiLCJwZXJpb2RfaWQiLCJraXR0eVBob3RvcyIsImNvbnRlbnRQZXJpb2QiLCJvd2xDb250ZW50IiwiZmFuY3lDb250ZW50IiwicGF0aHMiLCJwYXRoIiwiY2hlY2tib3giLCJlbXB0eSIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsIm5hdiIsImF1dG9wbGF5Iiwic21hcnRTcGVlZCIsImF1dG9wbGF5VGltZW91dCIsInJlc3BvbnNpdmUiLCJjcmVhdGVQaG90b1BlcmlvZCIsInNwbGl0IiwiZWFjaCIsInJlbW92ZUNsYXNzIiwiY3JlYXRlSGFuZGxlclBpbGxzIiwiY2hpbGRyZW4iLCJwaWxsc0NhcHRpb24iLCJkZWxldGVCeUlkIiwibW9kYWxXaW5kb3ciLCJpZF9maWVsZF9uYW1lIiwiZ2V0QXR0cmlidXRlIiwiRXJyb3IiLCJnZXRDaGVja0ltZ3MiLCJpdGVtIiwiY3VycmVudEl0ZW1KUSIsInByb3AiLCJkZWxldGVDb25maXJtYXRpb25zIiwidGFyZ2V0QnV0dG9uIiwiZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyIsImJ1dHRvbiIsImZldGNoRGVsZXRlSW1ncyIsImNoZWNrcyIsIm1haW5IYW5kbGVyIiwiZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCIsImRlbGV0ZUltZyIsInRhYmxlX25hbWUiLCJpbml0X293bCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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bUJBQUQsQ0FEYyxFQUVmQSxDQUFDLENBQUMsZUFBRCxDQUZjLEVBR2YsK0NBSGUsRUFJZixVQUplLENBQW5CLEMsQ0FNQTs7QUFDQThJLGtHQUF5QixHLENBRXpCOztBQUNBTCxrR0FBeUIsRyxDQUV6Qjs7QUFDQXZFLHFHQUErQixHLENBRS9COztBQUNBK0UsNkVBQVEsRyxDQUVSOztBQUNBRixvRkFBUyxDQUNML0ksQ0FBQyxDQUFDLGlCQUFELENBREksRUFFTEEsQ0FBQyxDQUFDLGFBQUQsQ0FGSSxFQUdMLFVBSEssRUFJTCxVQUpLLENBQVQsQyxDQU1BOztBQUNBK0ksb0ZBQVMsQ0FDTC9JLENBQUMsQ0FBQyx1QkFBRCxDQURJLEVBRUxBLENBQUMsQ0FBQyxvQkFBRCxDQUZJLEVBR0wsVUFISyxFQUlMLFdBSkssQ0FBVCxDLENBTUE7O0FBQ0FpQiw2REFBWSxHLENBRVo7O0FBQ0FsQiw2REFBa0IsRyxDQUVsQjs7QUFDQTZGLHNGQUE0QixHIiwiZmlsZSI6Ii4va2l0dHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9raXR0eS5qc1wiKTtcbiIsImNvbnN0IGluaXRIYW5kbGVyc0Jhbm5lciA9ICgpID0+IHtcblxuICAgICQoJyNtb2RhbEN1c3RvbUJhbm5lcicpLm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiAkKCcja2l0dHlUb0Jhbm5lcicpLmF0dHIoJ2tpdHR5SWQnLCBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQua2l0dHlJZClcbiAgICApXG5cbiAgICAkKCcjbW9kYWxSZW1vdmVCYW5uZXInKS5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gJCgnI2tpdHR5RnJvbUJhbm5lcicpLmF0dHIoJ2tpdHR5SWQnLCBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQua2l0dHlJZClcbiAgICApXG5cbiAgICAkKCcja2l0dHlUb0Jhbm5lcicpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgJ21vZGFsJzogJ3Nob3cnLFxuICAgICAgICAgICAgJ2Jhbm5lcl9oZWFkZXInOiAkKCcjYmFubmVyX2hlYWRlcicpLnZhbCgpLFxuICAgICAgICAgICAgJ2Jhbm5lcl9kZXNjcmlwdGlvbic6ICQoJyNiYW5uZXJfZGVzY3JpcHRpb24nKS52YWwoKSxcbiAgICAgICAgICAgICdraXR0eV9pZCc6ICQoJyNraXR0eVRvQmFubmVyJykuYXR0cigna2l0dHlJZCcpXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZmV0Y2goJ3NyYy9EQi9raXR0eV9DUlVEL3JlcGxhY2VUb0Jhbm5lci5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnI21vZGFsQ3VzdG9tQmFubmVyJykubW9kYWwoJ2hpZGUnKVxuXG4gICAgfSlcblxuICAgICQoJyNraXR0eUZyb21CYW5uZXInKS5jbGljaygoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICdtb2RhbCc6ICdoaWRlJyxcbiAgICAgICAgICAgICdiYW5uZXJfaGVhZGVyJzogJycsXG4gICAgICAgICAgICAnYmFubmVyX2Rlc2NyaXB0aW9uJzogJycsXG4gICAgICAgICAgICAna2l0dHlfaWQnOiAkKCcja2l0dHlGcm9tQmFubmVyJykuYXR0cigna2l0dHlJZCcpXG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCgnc3JjL0RCL2tpdHR5X0NSVUQvcmVwbGFjZVRvQmFubmVyLnBocCcsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgfSlcblxuICAgICAgICAkKCcjbW9kYWxSZW1vdmVCYW5uZXInKS5tb2RhbCgnaGlkZScpXG5cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRIYW5kbGVyc0Jhbm5lciIsIi8vIFRPRE86IFxuLy8gICAgKzAuINCX0LDQu9C40YLRjCDQu9C+0LrQsNC70LjQt9Cw0YbQuNGOINCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0Lgg0LTQvtGA0LDQsdC+0YLQsNGC0Ywg0LXQtSDRhNGD0L3QutGG0LjQvtC90LDQuy5cbi8vICAgICsxLiDQn9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRhNC+0YLQvtCz0YDQsNGE0LjQuSDQutC+0YLRj9GCINC4INCy0LfRgNC+0YHQu9GL0YUg0LbQuNCy0L7RgtC90YvRhSDQs9GA0YPQt9C40YLRjCDRgtC+0LvRjNC60L4g0LPQu9Cw0LLQvdGL0LUsINC+0YHRgtCw0LvRjNC90L7QtSDRgtC+0LvRjNC60L4g0L/RgNC4XG4vLyAgICAgICDQvdCw0LbQsNGC0LjQuCDQvdCwINC00LXRgtCw0LvQutGDLiBcbi8vICAgICs0LiDQo9Cy0LXQu9C40YfQuNGC0Ywg0YHQu9C+0LbQvdC+0YHRgtGMINC/0LDRgNC+0LvRjyDQvdCwINC/0YDQvtC80LUgKNC/0L7QuNGB0Log0L/QviDRhNGA0LDQt9C1IFwi0L/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMINC/0L7RgdC70L7QttC90LXQtVwiKVxuLy8gICAgKzUuINCf0YDQvtGA0LDQsdC+0YLQsNGC0Ywg0L7RgtC/0YDQsNCy0LrRgyDQv9C40YHRjNC80LAg0L3QsCDQv9GA0L7QvNC1LlxuLy8gICAgKzYuINCe0YLRgdGL0LvQsNGC0Ywg0L/QuNGB0YzQvNC+INC/0YDQuCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4INC90LAg0L/QvtGH0YLQvtCy0YvQuSDRj9GJ0LjQuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8uXG4vLyAgICArNy4gQnJlZWQtPkxpdHRlciBGcmVlLT5BdmFpbGFibGUgc2lnbl9pbi0+c2lnbl91cFxuLy8gICAgKzguINCU0L7QsdCw0LLQu9C10L3QuNC1INCx0LDQvdC90LXRgNCwINCyINGA0LDQt9GA0LXQt9C1INGP0LfRi9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLlxuLy8gICAgOS4g0JTQvtCx0LDQstC70LXQvdC40LUg0L7RgtC30YvQstCwIC0g0LLRgdC1INGB0LvQvtC80LDQu9C+0YHRjC5cbi8vICAgIDEwLiDQndC1INC00L7QsdCw0LLQu9GP0LXRgtGB0Y8g0Y/Qt9GL0Lpcbi8vICAgICsxMS4g0JrQvtGA0Y/QstC+0LUg0L7RgtC+0LHRgNCw0LbQtdC90LjQtSDQv9Cw0L3QtdC70Lgg0L3QsNCy0LjQs9Cw0YbQuNC4XG4vLyAgICAxMi4g0J3QsNC00L4g0YfRgtC+LdGC0L4g0YHQtNC10LvQsNGC0Ywg0YEg0LDQtNCw0L/RgtC40LLQvdC+0YHRgtGM0Y4g0YDRg9GB0YHQutC+0LPQviDRiNGA0LjRhNGC0LAgKNCy0L7Qt9C80L7QttC90L4g0LfQsNC80LXQvdC40YLRjClcbi8vICAgIDE0LiDQntGE0L7RgNC80LjRgtGMINC30LDQutCw0Lcg0L3QsCDQv9C10YDQtdCy0L7QtC4gXG4vLyAgICAxNS4g0J/RgNC+0LrQvtC90YHRg9C70YzRgtC40YDQvtCy0LDRgtGM0YHRjyDQv9C+INCy0L7Qv9GA0L7RgdCw0LwgU0VPLlxuLy8gICAgKzE2LiDQlNC+0LHQsNCy0LjRgtGMINC40LfQvNC10YDQtdC90LjQtSDRj9C30YvQutCwINCyINC/0L7QvNC10YLRiy4g0J/Qvi3RhdC+0YDQvtGI0LXQvNGDINC90YPQttC90L4g0L7RgtCy0Y/Qt9Cw0YLRjCDQu9C+0LrQsNC70LjQt9C40YDRg9C10LzRi9C5INC60L7QvdGC0LXQvdGCXG4vLyAgICAgICAgINC+0YIg0L7Qv9C+0YDQvdGL0YUg0YLQsNCx0LvQuNGGINC4INC+0YHRgtCw0LLQuNGC0Ywg0YLQvtC70YzQutC+INGB0LLRj9C30LguINCt0YLQviDQsdC70L7QutC10YAg0LTQu9GPINC/0LXRgNC10LLQvtC00L7QsiDQuCBTRU8uINCf0YDQuNC+0YDQuNGC0LXRgiDQv9C10YDQstC40YfQvdGL0Llcbi8vICAgICsxNy4g0KDQtdGI0LjRgtGMINCy0L7Qv9GA0L7RgSDRgSDQv9C10YDQtdC80LXRidC10L3QuNC10LwgbG9jYWxfY29uc3RhbnRzINC4IGNoZWNrX3J1bGVzXG4vLyAgICArMTguIGZvbnRhd2Vzb21lLWZyZWUg0LvRg9GH0YjQtSDQv9C+0LrQsCDRg9C00LDQu9C40YLRjCDQuNC3IG5vZGVfbW9kdWxlc1xuLy8gICAgKzE5LiDQntGH0LjRgdGC0LjRgtGMINC+0YIg0L3QtdC40YHQv9C+0LvRjNC30YPQtdC80L7Qs9C+INGC0LXQv9C10YDRjCDRhNGD0L3QutGG0LjQvtC90LDQu9CwXG4vLyAgICArMjAuINCU0L7Qv9C40YHQsNGC0Ywg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNC+0L3QvdGL0Lkg0YTQsNC50Lsg0LTQu9GPINGA0LDQt9C00LXQu9C10L3QuNGPIGRldiDQuCBwcm9tXG4vLyAgICArMjEuINCa0LDQutC40LUt0YLQviDQv9GA0L7QsdC70LXQvNGLINGBINGD0LTQsNC70LXQvdC40LXQvCDQv9C10YDQuNC+0LTQsFxuLy8gICAgKzIyLiDQn9GA0Lgg0L7RgtC60YDRi9GC0LjQuCDQtNC10YLQsNC70LrQuCDQv9C+INC60L7RgtC10L3QutGDINC+0YLQutGA0YvQstCw0LXRgtGB0Y8g0L/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90L7QtSDQvtC60L3QvlxuLy8gICAgKzIzLiDQndGD0LbQvdC+INC90LDQu9Cw0LTQuNGC0Ywg0LLQutC70LDQtNC60LggLSDRgtC+INC10YHRgtGMINGH0YLQvtCx0Ysg0L/RgNC4INC+0YLQutGA0YvRgtC40Lgg0L7RgtC60YDRi9Cy0LDQu9GB0Y8g0L/QtdGA0LLRi9C5ICjQv9C+INCw0LvRhNCw0LLQuNGC0YMpXG4vLyAgICAgICAgINC90LXQsNGA0YXQuNCy0L3Ri9C5INC/0L7QvNC10YJcbi8vICAgICsyNC4g0KXQsNGA0LQg0LTQtdC/0LvQvtC5XG4vLyAgICArMjUuINCb0L7QutCw0LjQt9Cw0YbQuNGPINC+0YLQv9GA0LDQstC60Lgg0L/QuNGB0YzQvNCwICjQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQuCDRgtC10LrRgdGCINC/0LjRgdGM0LzQsClcbi8vICAgICsyNi4g0JLRgdGC0LDQstC40YLRjCDQsiBhbHQsIHRpdGxlINC4IG1ldGEg0YLQtdCz0Lgg0LfQsNC/0LjRgdC4INC00LvRjyDRgNC+0LHQvtGC0L7QsiDQvdCwINCy0YHQtdGFINC40YHQv9C+0LvRjNC30YPQtdC80YvRhSDRj9C30YvQutCw0YVcbi8vICAgICAgICDQktC+0LfQvNC+0LbQvdC+INGB0YLQvtC40YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGA0LDQvdC00L7QvNC40LfQsNGC0L7RgCwg0LLRi9Cx0LjRgNCw0Y7RidC40Lkg0L3Rg9C20L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0LIg0YHQu9GD0YfQsNC50L3QvtC8INC/0L7RgNGP0LTQutC1XG4vLyAgICArMjcuIHNoYXJlZEJyb29kc0xpc3RbXSAtINCy0YvRj9GB0L3QuNGC0Ywg0YfRgtC+INGN0YLQvlxuLy8gICAgKzI4LiDQm9C+0LrQsNC70LjQt9C40YDQvtCy0LDRgtGMINGB0LvQvtCy0LAg0JDRgNGF0LjQsiAvINCh0LrRgNGL0YLRjCDQsNGA0YXQuNCyLlxuLy8gICAgKzMwLiDQodGC0YDQsNC90L3QvtGB0YLQuCDRgSDQt9Cw0L/QvtC80LjQvdCw0L3QuNC10Lwg0Y/Qt9GL0LrQsCDQtNC70Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG4vLyAgICArMzEuINCf0YDQvtC/0LjRgdCw0YLRjCA8IS0tIGVudHJvcGl6ZXIuSlMgLS0+INC90LAg0LLRgdC10YUg0YHRgtGA0LDQvdC40YbQsNGFXG4vLyAgICAzMi4g0JIg0YHQv9C40YHQutC1INCy0YvQsdC+0YDQsCDRgNC+0LTQuNGC0LXQu9C10Lkg0L7RgtC+0LHRgNCw0LbQsNGC0Ywg0YLQvtC70YzQutC+INGC0LXRhSwg0YfRgtC+INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGCINGC0LXQutGD0YnQtdC80YMg0Y/Qt9GL0LrRgy5cbi8vICAgICszMy4g0JvQvtC60LDQu9C40LfQsNGG0LjRjyDRgdC+0L7QsdGJ0LXQvdC40Lkg0LLQsNC70LjQtNCw0YbQuNC4LlxuLy8gICAgKzM0LiBcItCf0L7QtNGA0L7QsdC90LXQtVwiINC90LUg0YDQsNCx0L7RgtCw0LXRgi5cbi8vICAgIDM1LiDQn9C+0LTRgtGP0LPQuNCy0LDRgtGMINC40L3RhNGDINC40Lcg0YDQtdC60LvQsNC80L3QvtCz0L4g0LHQsNC90L3QtdGA0LAgKNC10YHQu9C4INGC0LDQutC+0LLQsNGPINCx0YvQu9CwINGA0LDQvdC10LUg0LLQvdC10YHQtdC90LApLlxuLy8gICAgKzM2LiDQn9GA0L7QstC10YDQuNGC0Ywg0LDQtNCw0L/RgtC40LIg0LzQvtC00LDQu9GM0L3Ri9GFINC+0LrQvtC9INC00LvRjyDQtNC10YLQsNC70LrQuCDQutC+0YLRj9GCLlxuLy8gICAgKzM3LiDQm9C+0LrQsNC70LjQt9C+0LLQsNGC0Ywg0YTRgNCw0LfRgyBcItCf0L7QtNGA0L7QsdC90LXQtSDQvtCx0L4g0LzQvdC1XCJcbi8vICAgIDM4LiDQn9GA0LjQutGA0LXQv9C40YLRjCDQuiDQvdC+0LLQvtGB0YLRj9C8INC00LDRgtGDLlxuLy8gICAgMzkuINCj0LTQsNC70LjRgtGMINC90LXQuNGB0L/QvtC70YzQt9GD0LXQvNGL0LUg0Y/Qt9GL0LrQuCDQuCDQvtGB0YLQsNCy0LjRgtGMINGA0YPRgdGB0LrQuNC1INGD0LzQvtC70YfQsNC90LjRjy5cbi8vICAgICs0MC4g0J/QvtC/0YDQsNCy0LjRgtGMINC80LXRgtCw0YLQtdCzIGRlc2NyaXB0aW9uLlxuLy8gICAgKzQxLiDQn9C+0YHQvNC+0YLRgNC10YLRjCDQv9C+0LjRgdC60L7QvCDQstGB0LUg0LLRgdGC0LDQstC60Lggfn5+INC4INGB0LTQtdC70LDRgtGMINCy0YHQtSDRh9GC0L4g0YLQsNC8INC90LDQv9C40YHQsNC90L4uXG4vLyAgICArNDIuINCh0LTQtdC70LDRgtGMINC/0LXRgNC10LvQuNC90LrQvtCy0LrRgy4g0J3QsCBTaXRlbWFwINGC0L7QttC1INC00L7QsdCw0LLQuNGC0Ywga2V5d29yZHMsINC00L7QsdC40YLRjCBza3IuXG4vLyAgICA0My4g0J7RgtC60LvRjtGH0LjRgtGMINCy0YHQtSDQvdCw0YHRgtGA0L7QudC60LggU0VPINC00LvRjyDRgNC10LbQuNC80LAg0YDQsNC30YDQsNCx0L7RgtGH0LjQutCwLlxuXG5jb25zdCBpbml0SGFuZGxlcnMgPSAoKSA9PiB7XG5cbiAgICAkKGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hJbmZvKClcblxuICAgICAgICBpbml0KGRhdGEpXG4gICBcbiAgICAgICAgaGFuZGxlUGlsbHMoZGF0YVsnZGF0YSddKVxuXG4gICAgICAgICQoJyN2LXBpbGxzLWNvbW1vbi1hcmNoaXZlJykub24oJ2NsaWNrJywgaGFuZGxlQXJjaGl2ZVBpbGxzKVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgJCgnLmJyb29kVG9BcmNoaXZlJykuY2xpY2soYXN5bmMgZXZlbnQgPT4ge1xuXG4gICAgICAgIGF3YWl0IGZldGNoKCdzcmMvREIva2l0dHlfQ1JVRC9yZXBsYWNlVG9BcmNoaXZlLnBocCcsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7J2Jyb29kX2lkJzogZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnJvb2RJZH0pLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICB9KVxuICAgIFxuICAgIH0pXG5cbn1cblxuLyog0KHQutGA0YvQstCw0LXQvCDQstC60LvQsNC00LrQuCDRgNCw0YHQv9GA0L7QtNCw0L3QvdGL0YUg0L/QvtC80LXRgtC+0LIgICovXG5cbmxldCBicm9vZHNJbmZvID0gdW5kZWZpbmVkXG5cbmNvbnN0IGZldGNoSW5mbyA9IGFzeW5jICgpID0+IHtcblxuICAgIGlmIChicm9vZHNJbmZvID09IHVuZGVmaW5lZCkge1xuICAgICAgICBicm9vZHNJbmZvID0gYXdhaXQgKGF3YWl0IGZldGNoKFwic3JjL0RCL2tpdHR5X0NSVUQvYnJvb2RfQ1JVRC9icm9vZF9nZXRfYWxsLnBocFwiLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICB9KSkuanNvbigpXG4gICAgfVxuXG4gICAgcmV0dXJuIGJyb29kc0luZm9cblxufVxuXG5jb25zdCBpbml0ID0gKGJyb29kc0luZm8pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBicm9vZHNJbmZvWydkYXRhJ10uZmlsdGVyKCh7YXJjaGl2ZX0pID0+IGFyY2hpdmUgPT09ICcxJylcbiAgICAgICAgLmZpbHRlcigoXywgaW5kZXgpID0+IGluZGV4ID09IDApXG5cbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICQoYCN2LXBpbGxzLWhlYWRpbmdCcm9vZF8ke3RhcmdldFswXS5pZH0tdGFiYCkudGFiKCdzaG93JylcbiAgICB9XG59XG5cbmNvbnN0IGhhbmRsZVBpbGxzID0gKGRhdGEsIGF0dHJTaG93ID0gdW5kZWZpbmVkKSA9PiB7XG4gICAgXG4gICAgZGF0YS5mb3JFYWNoKCh7aWQsIGFyY2hpdmV9KSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfcGlsbCA9ICQoYCN2LXBpbGxzLWhlYWRpbmdCcm9vZF8ke2lkfS10YWJgKVxuICAgIFxuICAgICAgICBpZiAoYXJjaGl2ZSA9PT0gJzAnKSB7XG4gICAgXG4gICAgICAgICAgICBpZiAoKGF0dHJTaG93ID09PSB1bmRlZmluZWQpIHx8IChhdHRyU2hvdyA9PSAnMCcpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudF9waWxsLmhpZGUoXCJzbG93XCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfcGlsbC5zaG93KFwic2xvd1wiKVxuICAgICAgICAgICAgfSAgXG4gICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKChhdHRyU2hvdyA9PT0gdW5kZWZpbmVkKSB8fCAoYXR0clNob3cgPT0gJzAnKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfcGlsbC5zaG93KFwic2xvd1wiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50X3BpbGwuaGlkZShcInNsb3dcIilcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmZpbHRlcigoe2FyY2hpdmV9KSA9PiBhcmNoaXZlID09ICcxJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICQoJyN2LXBpbGxzLWNvbW1vbi10YWInKS50YWIoJ3Nob3cnKVxuICAgICAgICB9XG5cbiAgICB9KVxuICAgIFxufVxuXG5jb25zdCBoYW5kbGVBcmNoaXZlUGlsbHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBjb25zdCBkYXRhICAgICAgICAgID0gYXdhaXQgZmV0Y2hJbmZvKClcbiAgICBjb25zdCBhcmNoaXZlX3BpbGxzID0gJCgnI3YtcGlsbHMtY29tbW9uLWFyY2hpdmUnKVxuXG4gICAgaWYgKGFyY2hpdmVfcGlsbHMuYXR0cihcInNob3dcIikgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFyY2hpdmVfcGlsbHMuYXR0cihcInNob3dcIiwgXCIxXCIpXG4gICAgfVxuXG4gICAgY29uc3QgYXR0clNob3cgPSBhcmNoaXZlX3BpbGxzLmF0dHIoXCJzaG93XCIpXG5cbiAgICBpZiAoYXR0clNob3cgPT0gXCIxXCIpIHtcbiAgICAgICAgYXJjaGl2ZV9waWxscy5hdHRyKFwic2hvd1wiLCBcIjBcIilcbiAgICAgICAgYXJjaGl2ZV9waWxscy5odG1sKGRhdGFbJ2hpZGVfYXJjaGl2ZV90aXRsZSddKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFyY2hpdmVfcGlsbHMuYXR0cihcInNob3dcIiwgXCIxXCIpXG4gICAgICAgIGFyY2hpdmVfcGlsbHMuaHRtbChkYXRhWydhcmNoaXZlX3RpdGxlJ10pXG4gICAgfVxuXG4gICAgaGFuZGxlUGlsbHMoZGF0YVsnZGF0YSddLCBhdHRyU2hvdylcblxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0SGFuZGxlcnMiLCJEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZVxuXG5leHBvcnQgY29uc3QgZHJvcHpvbmVIYW5kbGVycyA9IGFzeW5jICh0YWJsZU5hbWUsIHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgcGFyYW1zID0gW10pID0+IHtcblxuICAgIGNvbnN0IGFwcGx5X2luaXQgPSBhc3luYyBpdGVtcyA9PiBcbiAgICAgICAgaXRlbXMuZm9yRWFjaChjdXJyZW50ID0+IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsIGN1cnJlbnQuaWQpKVxuXG4gICAgYXdhaXQgYXBwbHlfaW5pdChhd2FpdCBmZXRjaEltZyh0YWJsZU5hbWUsIHBhcmFtcykpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRyb3B6b25lSGFuZGxlcnNDb21tb24gPSBhc3luYyAocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkKSA9PiBcbiAgICBhd2FpdCBpbml0T25lRHJvcHpvbmUocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCAnY29tbW9uJylcblxuY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgdmFsdWVUYXJnZXRGZWlsZCkgPT4ge1xuXG4gICAgY29uc3QgaWREcm9wem9uZSA9IGAjJHtwcmVmaXhEcm9wem9uZX0tJHt2YWx1ZVRhcmdldEZlaWxkfWBcblxuICAgIGlmICgkKGlkRHJvcHpvbmUpLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxufVxuXG5jb25zdCBmZXRjaEltZyA9IGFzeW5jICh0YWJsZU5hbWUsIHBhcmFtcyA9IFtdKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJ3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9leGhpYml0aW9uX0NSVUQvZ2V0X2V4aGliaXRpb25fcGhvdG8ucGhwJztcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IHRhYmxlTmFtZSwgcGFyYW1zIH1cbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IGltYWdlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChjdXJyZW50X3VybCwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufSIsImNvbnN0IGluaXRPbmVEcm9wem9uZSA9IGFzeW5jIChraXR0eV9pZCwgcGVyaW9kc19pZCkgPT4ge1xuXG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2VcblxuICAgIGNvbnN0IGlkRHJvcHpvbmUgPSBgI215LWRyb3B6b25lLWkke2tpdHR5X2lkfS1pJHtwZXJpb2RzX2lkfWBcblxuICAgIGlmICgkKGlkRHJvcHpvbmUpLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwia2l0dHlfaWRcIiwga2l0dHlfaWQpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwZXJpb2RfaWRcIiwgcGVyaW9kc19pZCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRPbmVEcm9wem9uZSIsImNvbnN0IGRyb3B6b25lSGFuZGxlcnNDb21tb25UaHVtYm5haWwgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZVxuXG4gICAgY29uc3QgYXBwbHlfaW5pdCA9IGFzeW5jIGl0ZW1zID0+IGl0ZW1zLmZvckVhY2goY3VycmVudCA9PiBpbml0T25lRHJvcHpvbmUoY3VycmVudCkpXG4gICAgICAgIFxuICAgIGF3YWl0IGFwcGx5X2luaXQoYXdhaXQgZmV0Y2hJbWcoKSlcblxufVxuXG5jb25zdCBpbml0T25lRHJvcHpvbmUgPSBhc3luYyAoY3VycmVudCkgPT4ge1xuXG4gICAgbGV0IGlkRHJvcHpvbmUgPSBgI215LWRyb3B6b25lLSR7Y3VycmVudC5pZH1gXG5cbiAgICBpZiAoJChpZERyb3B6b25lKS5sZW5ndGggIT09IDApIHtcblxuICAgICAgICBuZXcgRHJvcHpvbmUoaWREcm9wem9uZSwge1xuXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIixcbiAgICAgICAgICAgIG1heEZpbGVzOiAxLFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInNlbmRpbmdcIiwgKGZpbGUsIHhociwgZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwia2l0dHlfaWRcIiwgY3VycmVudC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImJyb29kX2lkXCIsIGN1cnJlbnQuYnJvb2RfaWQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcImFkZGVkZmlsZVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShmaWxlLmluaXRUaHVtYm5haWwpICYmICh0aGlzLmZpbGVzWzFdICE9IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZpbGUodGhpcy5maWxlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vdGhpcy5vbihcInN1Y2Nlc3NcIiwgKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpINCd0LAg0LHQvtC10LLQvtC8INGB0LXRgNCy0LXRgNC1INCyINGB0LLRj9C30Lgg0YEg0LfQsNC00LXRgNC20LrQvtC5IC0g0YHQsdC+0LjRglxuICAgICAgICAgICAgICAgIGlmICgoY3VycmVudCAhPSBudWxsKSAmJiAoY3VycmVudC51cmwgIT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhlY1RodW1ibmFpbCh0aGlzLCBjdXJyZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG59XG5cbmNvbnN0IGZldGNoSW1nID0gYXN5bmMgKCkgPT4ge1xuICAgIFxuICAgIGxldCBjdXJyZW50X3VybCA9ICdzcmMvREIva2l0dHlfQ1JVRC9pbWdfQ1JVRC9pbWdfZ2V0X21haW4ucGhwJztcbiAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuXG4gICAgbGV0IGltYWdlcyA9IGF3YWl0IChhd2FpdCBmZXRjaChjdXJyZW50X3VybCwgeyBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyBcbiAgICB9KSkuanNvbigpXG5cbiAgICByZXR1cm4gaW1hZ2VzXG5cbn1cblxuLy8gRFJZIC0g0L/QtdGA0LXQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG5jb25zdCBleGVjVGh1bWJuYWlsID0gKGNvbnRleHQsIGN1cnJlbnRfaW1hZ2UpID0+IHtcblxuICAgIGxldCBjdXJyZW50RmlsZSA9IHtcbiAgICAgICAgbmFtZTogY3VycmVudF9pbWFnZS5uYW1lLFxuICAgICAgICBzaXplOiBjdXJyZW50X2ltYWdlLnNpemUsXG4gICAgICAgIGFjY2VwdGVkOiB0cnVlLFxuICAgICAgICBraW5kOiAnaW1hZ2UnLFxuICAgICAgICB1cGxvYWQ6IHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiBjdXJyZW50X2ltYWdlLm5hbWUsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFVUkw6IGN1cnJlbnRfaW1hZ2UudXJsLFxuICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgY29udGV4dC5maWxlcy5wdXNoKGN1cnJlbnRGaWxlKTtcbiAgICBjb250ZXh0LmVtaXQoXCJhZGRlZGZpbGVcIiwgY3VycmVudEZpbGUpO1xuICAgIGNvbnRleHQuY3JlYXRlVGh1bWJuYWlsRnJvbVVybChcbiAgICAgICAgY3VycmVudEZpbGUsXG4gICAgICAgIGNvbnRleHQub3B0aW9ucy50aHVtYm5haWxXaWR0aCxcbiAgICAgICAgY29udGV4dC5vcHRpb25zLnRodW1ibmFpbEhlaWdodCxcbiAgICAgICAgY29udGV4dC5vcHRpb25zLnRodW1ibmFpbE1ldGhvZCxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgdGh1bWJuYWlsID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuZW1pdCgndGh1bWJuYWlsJywgY3VycmVudEZpbGUsIHRodW1ibmFpbCk7XG4gICAgICAgICAgICBjb250ZXh0LmVtaXQoXCJjb21wbGV0ZVwiLCBjdXJyZW50RmlsZSk7XG4gICAgICAgIH1cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCIsImltcG9ydCBpbml0T25lRHJvcHpvbmUgZnJvbSAnLi4vZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5LmpzJ1xuXG5jb25zdCBpbml0SGFuZGxlcnNMYXp5RmV0Y2hpbmdEYXRhID0gKCkgPT4ge1xuXG4gICAgJCgnI2tpdHR5UGhvdG9Db250ZW50Jykub24oJ3Nob3duLmJzLm1vZGFsJywgYXN5bmMgZXZlbnQgPT4ge1xuXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioq0JfQkNCT0KDQo9CX0JrQkCDQn9CV0KDQmNCe0JTQntCSKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgLy8g0KTQtdGC0YfQuNC8INC30LDQs9C+0LvQvtCy0LrQuCDQv9C10YDQuNC+0LTQvtCyINGBINGB0LXRgNCy0LXRgNCwXG4gICAgICAgIGNvbnN0IGZldGNoUGlsbHNDYXB0aW9uID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBicm9vZF9pZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQuZGF0YXNldC5icm9vZElkXG5cbiAgICAgICAgICAgIGNvbnN0IGtpdHR5UGVyaW9kcyA9IGF3YWl0IChhd2FpdCBmZXRjaCgnc3JjL0RCL2xhenlGZXRjaERhdGEvZmV0Y2hQZXJpb2RzQ2FwdGlvbi5waHAnLCB7IFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGJyb29kX2lkIH0pLCBcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgICAgIH0pKS5qc29uKClcblxuICAgICAgICAgICAgcmV0dXJuIGtpdHR5UGVyaW9kc1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyDQpNC+0YDQvNC40YDRg9C10Lwg0LLQutC70LDQtNC60Lgg0YEg0LfQsNCz0L7Qu9C+0LLQutCw0LzQuCDQv9C10YDQuNC+0LTQvtCyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVBpbGxzUGVyaW9kcyA9IGFzeW5jIChkYXRhUGVyaW9kcykgPT4ge1xuXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJydcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSAnYWN0aXZlJ1xuXG4gICAgICAgICAgICBkYXRhUGVyaW9kcy5mb3JFYWNoKCh7aWQsIG5hbWV9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICtcbiAgICAgICAgICAgICAgICBgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayAke2FjdGl2ZX1cIiBpZD1cInBlcmlvZF8ke2lkfVwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNwZXJpb2RfJHtpZH1cIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInBlcmlvZF8ke2lkfVwiIGFyaWEtc2VsZWN0ZWQ9XCIkeyhhY3RpdmUgIT09ICcnID8gJ3RydWUnIDogJ2ZhbHNlJyl9XCI+JHtuYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPmAgICAgICBcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSAnJ1xuICAgICAgICAgICAgfSkgICAgICAgXG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JDRgdC40L3RhdGA0L7QvdC90L4g0LTQvtCx0LDQstC70Y/QtdC8INC30LDQs9C+0LvQvtCy0LrQuCDQv9C10YDQuNC+0LTQvtCyINC6INC80L7QtNCw0LvRjNC90L7QvNGDINC+0LrQvdGDXG4gICAgICAgIGNvbnN0IGNyZWF0ZVBlcmlvZHNMYXlvdXQgPSBhc3luYyAocGlsbHNQZXJpb2RzKSA9PiB7XG5cbiAgICAgICAgICAgICQoXCIjcGhvdG9LaXR0eUNvbnRlbnRcIikuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiBpZD1cInBob3Rvc0tpdHR5VGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtwaWxsc1BlcmlvZHN9XG4gICAgICAgICAgICAgICAgPC91bD4gICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBob3Rvc0tpdHR5VGFiQ29udGVudFwiIGNsYXNzPVwidGFiLWNvbnRlbnQgdGV4dC1jZW50ZXIgbXktMiBzaGFkb3ctbGdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwia2l0dHlDYXB0aW9uXCIgY2xhc3M9XCJjb250YWluZXIgYWxlcnQgYWxlcnQtaW5mbyB0ZXh0LWNlbnRlclwiIHJvbGU9XCJhbGVydFwiPjwvZGl2PmApXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioq0JfQkNCT0KDQo9CX0JrQkCDQpNCe0KLQntCT0KDQkNCk0JjQmSoqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIGNvbnN0IGtpdHR5X2lkID0gZXZlbnQucmVsYXRlZFRhcmdldC5kYXRhc2V0LmtpdHR5SWRcblxuICAgICAgICAvLyDQpNC10YLRh9C40Lwg0YTQvtGC0L7Qs9GA0LDRhNC40Lgg0YEg0YHQtdGA0LLQtdGA0LBcbiAgICAgICAgY29uc3QgZmV0Y2hLaXR0eVBob3RvcyA9IGFzeW5jIChwZXJpb2RfaWQpID0+IHtcblxuICAgICAgICAgICAgY29uc3Qga2l0dHlQaG90b3MgPSBhd2FpdCAoYXdhaXQgZmV0Y2goJ3NyYy9EQi9sYXp5RmV0Y2hEYXRhL2ZldGNoQ29udGVudEtpdHR5UGhvdG8ucGhwJywgeyBcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBraXR0eV9pZCwgcGVyaW9kX2lkIH0pLCBcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgICAgIH0pKS5qc29uKClcblxuICAgICAgICAgICAgcmV0dXJuIGtpdHR5UGhvdG9zXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCU0LjQvdCw0LzQuNGH0LXRgdC60Lgg0YTQvtGA0LzQuNGA0YPQtdC8INC60L7QvdGC0LXQvdGCINC/0L4g0L/QtdGA0LjQvtC00YNcbiAgICAgICAgY29uc3QgY29udGVudFBlcmlvZCA9IGFzeW5jIChkYXRhLCBwZXJpb2RfaWQpID0+IHtcblxuICAgICAgICAgICAgbGV0IG93bENvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgbGV0IGZhbmN5Q29udGVudCA9ICcnXG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGhzID0gZGF0YVsncGF0aHMnXVxuXG4gICAgICAgICAgICBwYXRocy5mb3JFYWNoKCh7cGF0aCwgY2hlY2tib3h9KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBvd2xDb250ZW50ID0gb3dsQ29udGVudCArXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwYXRofVwiIGFsdD1cItCY0LfQvtCx0YDQsNC20LXQvdC40LUg0L7RgtGB0YPRgtGB0YLQstGD0LXRglwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PmBcblxuICAgICAgICAgICAgICAgIGZhbmN5Q29udGVudCA9IGZhbmN5Q29udGVudCArXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtNCBjb2wtNiB0aHVtYlwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLWZhbmN5Ym94PVwia2l0dHlfJHtraXR0eV9pZH1fJHtwZXJpb2RfaWR9XCIgaHJlZj1cIiR7cGF0aH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiBzcmM9XCIke3BhdGh9XCIgYWx0PVwi0JjQt9C+0LHRgNCw0LbQtdC90LjQtSDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgJHtjaGVja2JveH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICQoJyNwaG90b3NLaXR0eVRhYkNvbnRlbnQnKS5hcHBlbmQoYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCIke3BlcmlvZF9pZH1cIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJob21lLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAke2RhdGFbJ3NlY3Rpb25fcm9vdCddfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG10LTEgYWxlcnQgYWxlcnQtcHJpbWFyeVwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm93bC1jYXJvdXNlbFwiPiR7b3dsQ29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgYWxlcnQgYWxlcnQtcHJpbWFyeVwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPiR7ZmFuY3lDb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgJHtkYXRhWydidXR0b25fZGVsZXRlJ119XG4gICAgICAgICAgICAgICAgPC9kaXY+YClcblxuXG4gICAgICAgICAgICAkKCcja2l0dHlDYXB0aW9uJykuZW1wdHkoKS5hcHBlbmQoZGF0YVsnZGVzY3J5cHRpb24nXSlcblxuICAgICAgICAgICAgJCgnI2tpdHR5UGhvdG9Db250ZW50VGl0bGUnKS5lbXB0eSgpLmFwcGVuZChkYXRhWyduYW1lJ10pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoJy5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgc21hcnRTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICA2MDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAkKGAjcGhvdG9zS2l0dHlUYWJDb250ZW50ICMke3BlcmlvZF9pZH1gKS5hdHRyKCdkYXRhLWxvYWRpbmctZG9uZScsICcxJylcblxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8g0JfQsNC70LjQstCw0LXQvCDQv9C+0LvRg9GH0LXQvdC90YvQtSDRgSDRgdC10YDQstC10YDQsCDRhNC+0YLQvtCz0YDQsNGE0LjQuCDQsiDQsNGB0LjQvdGF0YDQvtC90L3QvtC8INGA0LXQttC40LzQtVxuICAgICAgICBjb25zdCBjcmVhdGVQaG90b1BlcmlvZCA9IGFzeW5jIChwZXJpb2RfaWQpID0+IHtcblxuICAgICAgICAgICAgaWYgKCQoYCNwaG90b3NLaXR0eVRhYkNvbnRlbnQgIyR7cGVyaW9kX2lkfWApLmF0dHIoJ2RhdGEtbG9hZGluZy1kb25lJykgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgY29udGVudFBlcmlvZChhd2FpdCBmZXRjaEtpdHR5UGhvdG9zKHBlcmlvZF9pZCksIHBlcmlvZF9pZClcblxuICAgICAgICAgICAgICAgIGF3YWl0IGluaXRPbmVEcm9wem9uZShraXR0eV9pZCwgcGVyaW9kX2lkLnNwbGl0KCdfJylbMV0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJyNwaG90b3NLaXR0eVRhYkNvbnRlbnQgLnRhYi1wYW5lJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlIHNob3cnKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgJChgI3Bob3Rvc0tpdHR5VGFiQ29udGVudCAjJHtwZXJpb2RfaWR9YCkudGFiKCdzaG93JylcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0KTQvtGA0LzQuNGA0YPQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0L/QtdGA0LXRhdC+0LTQsCDQv9C+INCy0LrQu9Cw0LTQutCw0Lwg0L/QtdGA0LjQvtC00L7QslxuICAgICAgICBjb25zdCBjcmVhdGVIYW5kbGVyUGlsbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAkKCcjcGhvdG9zS2l0dHlUYWIgYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScpLm9uKCdzaG93bi5icy50YWInLCBhc3luYyBmdW5jdGlvbigpIHsgIFxuICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVBob3RvUGVyaW9kKCQodGhpcykuYXR0cignaWQnKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioq0J7QodCd0J7QktCd0JDQryDQp9CQ0KHQotCsKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgaWYgKCQoXCIjcGhvdG9LaXR0eUNvbnRlbnRcIikuY2hpbGRyZW4oKS5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgICAgY29uc3QgcGlsbHNDYXB0aW9uID0gYXdhaXQgZmV0Y2hQaWxsc0NhcHRpb24oKVxuXG4gICAgICAgICAgICBpZiAocGlsbHNDYXB0aW9uLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INCy0LrQu9Cw0LTQvtC6INGBINC/0LXRgNC40L7QtNCw0LzQuFxuICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVBlcmlvZHNMYXlvdXQoYXdhaXQgY3JlYXRlUGlsbHNQZXJpb2RzKHBpbGxzQ2FwdGlvbikpXG5cbiAgICAgICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQvtCx0YDQsNCx0L7RgtGH0LjQutC+0LIg0L/RgNC4INC/0LXRgNC10YXQvtC00LDRhSDQv9C+INCy0LrQu9Cw0LTQutCw0Lwg0L/QtdGA0LjQvtC00L7QslxuICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZUhhbmRsZXJQaWxscygpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0YTQvtGC0L7QutC+0L3RgtC10L3RgtCwXG4gICAgICAgICAgICAgICAgYXdhaXQgY3JlYXRlUGhvdG9QZXJpb2QoYHBlcmlvZF8ke3BpbGxzQ2FwdGlvblswXS5pZH1gKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSlcblxuICAgICQoJyNraXR0eVBob3RvQ29udGVudCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgKCkgPT4gJChcIiNwaG90b0tpdHR5Q29udGVudFwiKS5lbXB0eSgpKVxuICAgIFxufSAgIFxuXG5leHBvcnQgZGVmYXVsdCBpbml0SGFuZGxlcnNMYXp5RmV0Y2hpbmdEYXRhIiwiY29uc3QgZGVsZXRlQnlJZCA9IGFzeW5jIChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICBsZXQgaWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG5cbiAgICB0cnkge1xuXG4gICAgICAgIGF3YWl0IGZldGNoKHVybCwgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkIH0pLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuXG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LvRg9GH0LjRgtGMINC00LDQvdC90YvQtSDQvtGCINGB0LXRgNCy0LXRgNCwJylcbiAgICB9XG59XG5cbmNvbnN0IGdldENoZWNrSW1ncyA9IGFzeW5jIChpZCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0WyR7aWRfZmllbGRfbmFtZX0gPSAke2lkfV1gKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1KUSA9ICQoaXRlbSlcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtSlEucHJvcChcImNoZWNrZWRcIikpXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50SXRlbUpRLnZhbCgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0O1xuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zID0gKG1vZGFsV2luZG93LCB0YXJnZXRCdXR0b24sIHVybCwgaWRfZmllbGRfbmFtZSkgPT4ge1xuXG4gICAgdGFyZ2V0QnV0dG9uLmNsaWNrKCgpID0+IGRlbGV0ZUJ5SWQobW9kYWxXaW5kb3csIHVybCwgaWRfZmllbGRfbmFtZSkpXG5cbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLFxuICAgICAgICBldmVudCA9PiB0YXJnZXRCdXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMgPSAoKSA9PiB7XG5cbiAgICBsZXQgbW9kYWxXaW5kb3cgICA9ICQoJyNtb2RhbERlbGV0ZVN0YXRlJylcbiAgICBsZXQgYnV0dG9uICAgICAgICA9ICQoJyNkZWxldGVfc3RhdGUnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ3N0YXRlX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJ3NyYy9EQi9raXR0eV9DUlVEL3N0YXRlX0NSVUQvc3RhdGVfZGVsZXRlX2dyb3VwLnBocCdcblxuICAgIGNvbnN0IGZldGNoRGVsZXRlSW1ncyA9IGFzeW5jIChjaGVja3MpID0+IHtcbiAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50X2luZiksIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoJ3RydWUnLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlUGVyaW9kJylcbiAgICBsZXQgYnV0dG9uICAgICAgICA9ICQoJyNkZWxldGVfcGVyaW9kJylcbiAgICBsZXQgaWRfZmllbGRfbmFtZSA9ICdicm9vZF9pZCdcbiAgICBsZXQgdXJsICAgICAgICAgICA9ICdzcmMvREIva2l0dHlfQ1JVRC9wZXJpb2RfQ1JVRC9wZXJpb2RfZGVsZXRlX2dyb3VwLnBocCdcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcywgaWQpID0+IHtcbiAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MsIGlkIH1cbiAgICAgICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgaWQpXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG4gICAgfVxuXG4gICAgYnV0dG9uLmNsaWNrKGV2ZW50ID0+IG1haW5IYW5kbGVyKGV2ZW50KSlcblxufSIsImxldCB1cmwgPSdzcmMvREIvZXhoaWJpdGlvbmVyX0NSVUQvaW1nX0NSVUQvaW1nX2RlbGV0ZV9ncm91cC5waHAnXG5cbmNvbnN0IGRlbGV0ZUltZyA9IChtb2RhbFdpbmRvdywgYnV0dG9uLCBpZF9maWVsZF9uYW1lLCB0YWJsZV9uYW1lKSA9PiB7XG5cbiAgICAvLyBEUlkgLSDQv9GA0L7QsdGA0L7RgSDRgSDQutC90L7Qv9C60Lgg0LfQsNC/0YPRgdC60LAg0LzQvtC00LDQu9C60Lgg0L3QsCDQutC90L7Qv9C60YMg0YPQtNCw0LvQtdC90LjRjyDQstGL0L3QtdGB0YLQuCDQsiDRg9GC0LjQu9C40YLRi1xuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiBidXR0b24uYXR0cihpZF9maWVsZF9uYW1lLCBcbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxuICAgIGNvbnN0IG1haW5IYW5kbGVyID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgaWQgICAgID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKVxuICAgICAgICBsZXQgY2hlY2tzID0gYXdhaXQgZ2V0Q2hlY2tJbWdzKGlkLCBpZF9maWVsZF9uYW1lKVxuXG4gICAgICAgIGF3YWl0IGZldGNoRGVsZXRlSW1ncyhjaGVja3MsIHVybCwgdGFibGVfbmFtZSlcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKSBcblxufVxuXG4vLyBEUlkgLSDRgdC+0L7RgtC90L7RgdC40YLRgdGPINGBINGD0LTQsNC70LXQvdC40LXQvCDQv9C10YDQuNC+0LTQsFxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7IFxuICAgIFxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICQoYGlucHV0WyR7aWRfZmllbGRfbmFtZX0gPSAke2lkfV1gKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW1KUSA9ICQoaXRlbSlcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtSlEucHJvcChcImNoZWNrZWRcIikpXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50SXRlbUpRLnZhbCgpKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG5cbn1cblxuY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfaW5mID0geyBjaGVja3MsIHRhYmxlX25hbWUgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUltZyIsImNvbnN0IGluaXRfb3dsID0gKCkgPT4ge1xuICAgICQoJy5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBzbWFydFNwZWVkOiAzMDAwLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0X293bCIsImltcG9ydCBpbml0X293bCBmcm9tICcuL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwnXG5pbXBvcnQgeyBkcm9wem9uZUhhbmRsZXJzQ29tbW9uIH0gZnJvbSAnLi9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMnXG5pbXBvcnQgZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCBmcm9tICcuL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eV90aHVtYm5haWwuanMnXG5pbXBvcnQgZGVsZXRlSW1nIGZyb20gJy4vZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcnXG5pbXBvcnQgeyBkZWxldGVDb25maXJtYXRpb25zLCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kLCBkZWxldGVDb25maXJtYXRpb25zU3RhdGVzIH0gZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlJ1xuaW1wb3J0IGluaXRIYW5kbGVycyBmcm9tICcuL2Zyb250L2Jyb29kcydcbmltcG9ydCBpbml0SGFuZGxlcnNCYW5uZXIgZnJvbSAnLi9mcm9udC9iYW5uZXInXG5pbXBvcnQgaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSBmcm9tICcuL2Zyb250L2xhenlGZXRjaERhdGEvZmV0Y2hDb250ZW50S2l0dHknXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC00YDQvtC/0LfQvtC9INC00LvRjyDQvtCx0YnQuNGFINGE0L7RgtC+XG5kcm9wem9uZUhhbmRsZXJzQ29tbW9uKCdteS1kcm9wem9uZScsICdjb21tb24nKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuCDRhNC+0YLQviDQutC+0YLRj9GCINCyINGA0LDQt9GA0LXQt9C1INCy0YDQtdC80LXQvdC90YvRhSDQv9C10YDQuNC+0LTQvtCyXG4vL2Ryb3B6b25lSGFuZGxlcnMoJ2ltZ2tpdHR5JylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQutC+0YLRj9GCXG5kZWxldGVDb25maXJtYXRpb25zKFxuICAgICQoJyNtb2RhbERlbGV0ZUtpdHR5JyksIFxuICAgICQoJyNkZWxldGVfa2l0dHknKSwgXG4gICAgJ3NyYy9EQi9raXR0eV9DUlVEL2tpdHR5X2RlbGV0ZS5waHAnLFxuICAgICdraXR0eV9pZCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0L/QvtC80LXRgtC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlQnJvb2QnKSwgXG4gICAgJCgnI2RlbGV0ZV9icm9vZCcpLCBcbiAgICAnc3JjL0RCL2tpdHR5X0NSVUQvYnJvb2RfQ1JVRC9icm9vZF9kZWxldGUucGhwJyxcbiAgICAnYnJvb2RfaWQnKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC/0LXRgNC40L7QtNC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QoKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INGB0YLQsNGC0YPRgdC+0LJcbmRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMoKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQtNGA0L7Qv9C30L7QvSDQtNC70Y8g0LPQu9Cw0LLQvdC+0LPQviDRhNC+0YLQviDQutC+0YLQtdC90LrQsFxuZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCgpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QstC40L3QvtC5INC60LDRgNGD0YHQtdC70LhcbmluaXRfb3dsKClcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNC5INC60L7RgtC+0LJcbmRlbGV0ZUltZyhcbiAgICAkKCcjbW9kYWxEZWxldGVJbWcnKSxcbiAgICAkKCcjZGVsZXRlX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLFxuICAgICdpbWdraXR0eScpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0L7QsdGJ0LjRhSDRhNC+0YLQvlxuZGVsZXRlSW1nKFxuICAgICQoJyNtb2RhbERlbGV0ZUNvbW1vbkltZycpLFxuICAgICQoJyNkZWxldGVfY29tbW9uX2ltZycpLCBcbiAgICAnZ3JvdXBfaWQnLCBcbiAgICAnaW1nY29tbW9uJylcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINC/0LXRgNC10LzQtdGJ0LXQvdC40Y8g0L/QvtC80LXRgtC+0LIg0LIg0LDRgNGF0LjQslxuaW5pdEhhbmRsZXJzKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINCy0YHQv9C70YvQstCw0Y7RidC10LPQviDRgNC10LrQu9Cw0LzQvdC+0LPQviDQsdCw0L3QvdC10YDQsFxuaW5pdEhhbmRsZXJzQmFubmVyKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyIFwi0LvQtdC90LjQstC+0LlcIiDQt9Cw0LPRgNGD0LfQutC4INGE0L7RgtC+0LrQvtC90YLQtdC90YLQsFxuaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSgpIl0sInNvdXJjZVJvb3QiOiIifQ==