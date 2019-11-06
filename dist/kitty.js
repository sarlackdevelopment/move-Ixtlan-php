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
//    26. Вставить в alt, title и meta теги записи для роботов на всех используемых языках
//        Возможно стоит использовать рандомизатор, выбирающий нужные значения в случайном порядке
//    +27. sharedBroodsList[] - выяснить что это
//    +28. Локализировать слова Архив / Скрыть архив.
//    +30. Странности с запоминанием языка для пользователя
//    +31. Прописать <!-- entropizer.JS --> на всех страницах
//    32. В списке выбора родителей отображать только тех, что соответствуют текущему языку.
//    +33. Локализация сообщений валидации.
//    34. "Подробнее" не работает.
//    35. Подтягивать инфу из рекламного баннера (если таковая была ранее внесена).
//    36. Проверить адаптив модальных окон для деталки котят.
//    37. Локализовать фразу "Подробнее обо мне"
//    38. Прикрепить к новостям дату.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvYnJvb2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udC9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19raXR0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5X3RodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvbGF6eUZldGNoRGF0YS9mZXRjaENvbnRlbnRLaXR0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnQvdXRpbHMvY29uZmlybWF0aW9uX2RlbGV0ZV9pbWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250L3V0aWxzL2luaXRfb3dsX2NhcnVzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tpdHR5LmpzIl0sIm5hbWVzIjpbImluaXRIYW5kbGVyc0Jhbm5lciIsIiQiLCJvbiIsImV2ZW50IiwiYXR0ciIsInJlbGF0ZWRUYXJnZXQiLCJkYXRhc2V0Iiwia2l0dHlJZCIsImNsaWNrIiwiZGF0YSIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibW9kYWwiLCJpbml0SGFuZGxlcnMiLCJmZXRjaEluZm8iLCJpbml0IiwiaGFuZGxlUGlsbHMiLCJoYW5kbGVBcmNoaXZlUGlsbHMiLCJ0YXJnZXQiLCJicm9vZElkIiwiYnJvb2RzSW5mbyIsInVuZGVmaW5lZCIsImpzb24iLCJmaWx0ZXIiLCJhcmNoaXZlIiwiXyIsImluZGV4IiwibGVuZ3RoIiwiaWQiLCJ0YWIiLCJhdHRyU2hvdyIsImZvckVhY2giLCJjdXJyZW50X3BpbGwiLCJoaWRlIiwic2hvdyIsImFyY2hpdmVfcGlsbHMiLCJodG1sIiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUhhbmRsZXJzIiwidGFibGVOYW1lIiwicHJlZml4RHJvcHpvbmUiLCJ0YXJnZXRGZWlsZCIsInBhcmFtcyIsImFwcGx5X2luaXQiLCJpdGVtcyIsImN1cnJlbnQiLCJpbml0T25lRHJvcHpvbmUiLCJmZXRjaEltZyIsImRyb3B6b25lSGFuZGxlcnNDb21tb24iLCJ2YWx1ZVRhcmdldEZlaWxkIiwiaWREcm9wem9uZSIsImFjY2VwdGVkRmlsZXMiLCJmaWxlIiwieGhyIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJjdXJyZW50X3VybCIsImN1cnJlbnRfaW5mIiwiaW1hZ2VzIiwia2l0dHlfaWQiLCJwZXJpb2RzX2lkIiwiZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCIsIm1heEZpbGVzIiwiYnJvb2RfaWQiLCJpbml0VGh1bWJuYWlsIiwiZmlsZXMiLCJyZW1vdmVGaWxlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cmwiLCJleGVjVGh1bWJuYWlsIiwiY29udGV4dCIsImN1cnJlbnRfaW1hZ2UiLCJjdXJyZW50RmlsZSIsIm5hbWUiLCJzaXplIiwiYWNjZXB0ZWQiLCJraW5kIiwidXBsb2FkIiwiZmlsZW5hbWUiLCJkYXRhVVJMIiwicHVzaCIsImVtaXQiLCJjcmVhdGVUaHVtYm5haWxGcm9tVXJsIiwib3B0aW9ucyIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidGh1bWJuYWlsTWV0aG9kIiwidGh1bWJuYWlsIiwiaW5pdEhhbmRsZXJzTGF6eUZldGNoaW5nRGF0YSIsImZldGNoUGlsbHNDYXB0aW9uIiwia2l0dHlQZXJpb2RzIiwiY3JlYXRlUGlsbHNQZXJpb2RzIiwiZGF0YVBlcmlvZHMiLCJyZXN1bHQiLCJhY3RpdmUiLCJjcmVhdGVQZXJpb2RzTGF5b3V0IiwicGlsbHNQZXJpb2RzIiwiZmV0Y2hLaXR0eVBob3RvcyIsInBlcmlvZF9pZCIsImtpdHR5UGhvdG9zIiwiY29udGVudFBlcmlvZCIsIm93bENvbnRlbnQiLCJmYW5jeUNvbnRlbnQiLCJwYXRocyIsInBhdGgiLCJjaGVja2JveCIsImVtcHR5Iiwib3dsQ2Fyb3VzZWwiLCJsb29wIiwibWFyZ2luIiwibmF2IiwiYXV0b3BsYXkiLCJzbWFydFNwZWVkIiwiYXV0b3BsYXlUaW1lb3V0IiwicmVzcG9uc2l2ZSIsImNyZWF0ZVBob3RvUGVyaW9kIiwic3BsaXQiLCJlYWNoIiwicmVtb3ZlQ2xhc3MiLCJjcmVhdGVIYW5kbGVyUGlsbHMiLCJjaGlsZHJlbiIsInBpbGxzQ2FwdGlvbiIsImRlbGV0ZUJ5SWQiLCJtb2RhbFdpbmRvdyIsImlkX2ZpZWxkX25hbWUiLCJnZXRBdHRyaWJ1dGUiLCJFcnJvciIsImdldENoZWNrSW1ncyIsIml0ZW0iLCJjdXJyZW50SXRlbUpRIiwicHJvcCIsImRlbGV0ZUNvbmZpcm1hdGlvbnMiLCJ0YXJnZXRCdXR0b24iLCJkZWxldGVDb25maXJtYXRpb25zU3RhdGVzIiwiYnV0dG9uIiwiZmV0Y2hEZWxldGVJbWdzIiwiY2hlY2tzIiwibWFpbkhhbmRsZXIiLCJkZWxldGVDb25maXJtYXRpb25zUGVyaW9kIiwiZGVsZXRlSW1nIiwidGFibGVfbmFtZSIsImluaXRfb3dsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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RUFHZixvQ0FIZSxFQUlmLFVBSmUsQ0FBbkIsQyxDQU1BOztBQUNBeUksNEZBQW1CLENBQ2Z6SSxDQUFDLENBQUMsbUJBQUQsQ0FEYyxFQUVmQSxDQUFDLENBQUMsZUFBRCxDQUZjLEVBR2YsK0NBSGUsRUFJZixVQUplLENBQW5CLEMsQ0FNQTs7QUFDQWdKLGtHQUF5QixHLENBRXpCOztBQUNBTCxrR0FBeUIsRyxDQUV6Qjs7QUFDQXpFLHFHQUErQixHLENBRS9COztBQUNBaUYsNkVBQVEsRyxDQUVSOztBQUNBRixvRkFBUyxDQUNMakosQ0FBQyxDQUFDLGlCQUFELENBREksRUFFTEEsQ0FBQyxDQUFDLGFBQUQsQ0FGSSxFQUdMLFVBSEssRUFJTCxVQUpLLENBQVQsQyxDQU1BOztBQUNBaUosb0ZBQVMsQ0FDTGpKLENBQUMsQ0FBQyx1QkFBRCxDQURJLEVBRUxBLENBQUMsQ0FBQyxvQkFBRCxDQUZJLEVBR0wsVUFISyxFQUlMLFdBSkssQ0FBVCxDLENBTUE7O0FBQ0FpQiw2REFBWSxHLENBRVo7O0FBQ0FsQiw2REFBa0IsRyxDQUVsQjs7QUFDQStGLHNGQUE0QixHIiwiZmlsZSI6Ii4va2l0dHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9raXR0eS5qc1wiKTtcbiIsImNvbnN0IGluaXRIYW5kbGVyc0Jhbm5lciA9ICgpID0+IHtcblxuICAgICQoJyNtb2RhbEN1c3RvbUJhbm5lcicpLm9uKCdzaG93bi5icy5tb2RhbCcsIFxuICAgICAgICBldmVudCA9PiAkKCcja2l0dHlUb0Jhbm5lcicpLmF0dHIoJ2tpdHR5SWQnLCBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQua2l0dHlJZClcbiAgICApXG5cbiAgICAkKCcjbW9kYWxSZW1vdmVCYW5uZXInKS5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gJCgnI2tpdHR5RnJvbUJhbm5lcicpLmF0dHIoJ2tpdHR5SWQnLCBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQua2l0dHlJZClcbiAgICApXG5cbiAgICAkKCcja2l0dHlUb0Jhbm5lcicpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgJ21vZGFsJzogJ3Nob3cnLFxuICAgICAgICAgICAgJ2Jhbm5lcl9oZWFkZXInOiAkKCcjYmFubmVyX2hlYWRlcicpLnZhbCgpLFxuICAgICAgICAgICAgJ2Jhbm5lcl9kZXNjcmlwdGlvbic6ICQoJyNiYW5uZXJfZGVzY3JpcHRpb24nKS52YWwoKSxcbiAgICAgICAgICAgICdraXR0eV9pZCc6ICQoJyNraXR0eVRvQmFubmVyJykuYXR0cigna2l0dHlJZCcpXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZmV0Y2goJ3NyYy9EQi9raXR0eV9DUlVEL3JlcGxhY2VUb0Jhbm5lci5waHAnLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnI21vZGFsQ3VzdG9tQmFubmVyJykubW9kYWwoJ2hpZGUnKVxuXG4gICAgfSlcblxuICAgICQoJyNraXR0eUZyb21CYW5uZXInKS5jbGljaygoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICdtb2RhbCc6ICdoaWRlJyxcbiAgICAgICAgICAgICdiYW5uZXJfaGVhZGVyJzogJycsXG4gICAgICAgICAgICAnYmFubmVyX2Rlc2NyaXB0aW9uJzogJycsXG4gICAgICAgICAgICAna2l0dHlfaWQnOiAkKCcja2l0dHlGcm9tQmFubmVyJykuYXR0cigna2l0dHlJZCcpXG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCgnc3JjL0RCL2tpdHR5X0NSVUQvcmVwbGFjZVRvQmFubmVyLnBocCcsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSBcbiAgICAgICAgfSlcblxuICAgICAgICAkKCcjbW9kYWxSZW1vdmVCYW5uZXInKS5tb2RhbCgnaGlkZScpXG5cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRIYW5kbGVyc0Jhbm5lciIsIi8vIFRPRE86IFxuLy8gICAgKzAuINCX0LDQu9C40YLRjCDQu9C+0LrQsNC70LjQt9Cw0YbQuNGOINCw0LLRgtC+0YDQuNC30LDRhtC40Lgg0Lgg0LTQvtGA0LDQsdC+0YLQsNGC0Ywg0LXQtSDRhNGD0L3QutGG0LjQvtC90LDQuy5cbi8vICAgICsxLiDQn9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRhNC+0YLQvtCz0YDQsNGE0LjQuSDQutC+0YLRj9GCINC4INCy0LfRgNC+0YHQu9GL0YUg0LbQuNCy0L7RgtC90YvRhSDQs9GA0YPQt9C40YLRjCDRgtC+0LvRjNC60L4g0LPQu9Cw0LLQvdGL0LUsINC+0YHRgtCw0LvRjNC90L7QtSDRgtC+0LvRjNC60L4g0L/RgNC4XG4vLyAgICAgICDQvdCw0LbQsNGC0LjQuCDQvdCwINC00LXRgtCw0LvQutGDLiBcbi8vICAgICs0LiDQo9Cy0LXQu9C40YfQuNGC0Ywg0YHQu9C+0LbQvdC+0YHRgtGMINC/0LDRgNC+0LvRjyDQvdCwINC/0YDQvtC80LUgKNC/0L7QuNGB0Log0L/QviDRhNGA0LDQt9C1IFwi0L/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMINC/0L7RgdC70L7QttC90LXQtVwiKVxuLy8gICAgKzUuINCf0YDQvtGA0LDQsdC+0YLQsNGC0Ywg0L7RgtC/0YDQsNCy0LrRgyDQv9C40YHRjNC80LAg0L3QsCDQv9GA0L7QvNC1LlxuLy8gICAgKzYuINCe0YLRgdGL0LvQsNGC0Ywg0L/QuNGB0YzQvNC+INC/0YDQuCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4INC90LAg0L/QvtGH0YLQvtCy0YvQuSDRj9GJ0LjQuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8uXG4vLyAgICArNy4gQnJlZWQtPkxpdHRlciBGcmVlLT5BdmFpbGFibGUgc2lnbl9pbi0+c2lnbl91cFxuLy8gICAgKzguINCU0L7QsdCw0LLQu9C10L3QuNC1INCx0LDQvdC90LXRgNCwINCyINGA0LDQt9GA0LXQt9C1INGP0LfRi9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLlxuLy8gICAgOS4g0JTQvtCx0LDQstC70LXQvdC40LUg0L7RgtC30YvQstCwIC0g0LLRgdC1INGB0LvQvtC80LDQu9C+0YHRjC5cbi8vICAgIDEwLiDQndC1INC00L7QsdCw0LLQu9GP0LXRgtGB0Y8g0Y/Qt9GL0Lpcbi8vICAgICsxMS4g0JrQvtGA0Y/QstC+0LUg0L7RgtC+0LHRgNCw0LbQtdC90LjQtSDQv9Cw0L3QtdC70Lgg0L3QsNCy0LjQs9Cw0YbQuNC4XG4vLyAgICAxMi4g0J3QsNC00L4g0YfRgtC+LdGC0L4g0YHQtNC10LvQsNGC0Ywg0YEg0LDQtNCw0L/RgtC40LLQvdC+0YHRgtGM0Y4g0YDRg9GB0YHQutC+0LPQviDRiNGA0LjRhNGC0LAgKNCy0L7Qt9C80L7QttC90L4g0LfQsNC80LXQvdC40YLRjClcbi8vICAgIDE0LiDQntGE0L7RgNC80LjRgtGMINC30LDQutCw0Lcg0L3QsCDQv9C10YDQtdCy0L7QtC4gXG4vLyAgICAxNS4g0J/RgNC+0LrQvtC90YHRg9C70YzRgtC40YDQvtCy0LDRgtGM0YHRjyDQv9C+INCy0L7Qv9GA0L7RgdCw0LwgU0VPLlxuLy8gICAgKzE2LiDQlNC+0LHQsNCy0LjRgtGMINC40LfQvNC10YDQtdC90LjQtSDRj9C30YvQutCwINCyINC/0L7QvNC10YLRiy4g0J/Qvi3RhdC+0YDQvtGI0LXQvNGDINC90YPQttC90L4g0L7RgtCy0Y/Qt9Cw0YLRjCDQu9C+0LrQsNC70LjQt9C40YDRg9C10LzRi9C5INC60L7QvdGC0LXQvdGCXG4vLyAgICAgICAgINC+0YIg0L7Qv9C+0YDQvdGL0YUg0YLQsNCx0LvQuNGGINC4INC+0YHRgtCw0LLQuNGC0Ywg0YLQvtC70YzQutC+INGB0LLRj9C30LguINCt0YLQviDQsdC70L7QutC10YAg0LTQu9GPINC/0LXRgNC10LLQvtC00L7QsiDQuCBTRU8uINCf0YDQuNC+0YDQuNGC0LXRgiDQv9C10YDQstC40YfQvdGL0Llcbi8vICAgICsxNy4g0KDQtdGI0LjRgtGMINCy0L7Qv9GA0L7RgSDRgSDQv9C10YDQtdC80LXRidC10L3QuNC10LwgbG9jYWxfY29uc3RhbnRzINC4IGNoZWNrX3J1bGVzXG4vLyAgICArMTguIGZvbnRhd2Vzb21lLWZyZWUg0LvRg9GH0YjQtSDQv9C+0LrQsCDRg9C00LDQu9C40YLRjCDQuNC3IG5vZGVfbW9kdWxlc1xuLy8gICAgKzE5LiDQntGH0LjRgdGC0LjRgtGMINC+0YIg0L3QtdC40YHQv9C+0LvRjNC30YPQtdC80L7Qs9C+INGC0LXQv9C10YDRjCDRhNGD0L3QutGG0LjQvtC90LDQu9CwXG4vLyAgICArMjAuINCU0L7Qv9C40YHQsNGC0Ywg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNC+0L3QvdGL0Lkg0YTQsNC50Lsg0LTQu9GPINGA0LDQt9C00LXQu9C10L3QuNGPIGRldiDQuCBwcm9tXG4vLyAgICArMjEuINCa0LDQutC40LUt0YLQviDQv9GA0L7QsdC70LXQvNGLINGBINGD0LTQsNC70LXQvdC40LXQvCDQv9C10YDQuNC+0LTQsFxuLy8gICAgKzIyLiDQn9GA0Lgg0L7RgtC60YDRi9GC0LjQuCDQtNC10YLQsNC70LrQuCDQv9C+INC60L7RgtC10L3QutGDINC+0YLQutGA0YvQstCw0LXRgtGB0Y8g0L/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90L7QtSDQvtC60L3QvlxuLy8gICAgKzIzLiDQndGD0LbQvdC+INC90LDQu9Cw0LTQuNGC0Ywg0LLQutC70LDQtNC60LggLSDRgtC+INC10YHRgtGMINGH0YLQvtCx0Ysg0L/RgNC4INC+0YLQutGA0YvRgtC40Lgg0L7RgtC60YDRi9Cy0LDQu9GB0Y8g0L/QtdGA0LLRi9C5ICjQv9C+INCw0LvRhNCw0LLQuNGC0YMpXG4vLyAgICAgICAgINC90LXQsNGA0YXQuNCy0L3Ri9C5INC/0L7QvNC10YJcbi8vICAgICsyNC4g0KXQsNGA0LQg0LTQtdC/0LvQvtC5XG4vLyAgICArMjUuINCb0L7QutCw0LjQt9Cw0YbQuNGPINC+0YLQv9GA0LDQstC60Lgg0L/QuNGB0YzQvNCwICjQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQuCDRgtC10LrRgdGCINC/0LjRgdGM0LzQsClcbi8vICAgIDI2LiDQktGB0YLQsNCy0LjRgtGMINCyIGFsdCwgdGl0bGUg0LggbWV0YSDRgtC10LPQuCDQt9Cw0L/QuNGB0Lgg0LTQu9GPINGA0L7QsdC+0YLQvtCyINC90LAg0LLRgdC10YUg0LjRgdC/0L7Qu9GM0LfRg9C10LzRi9GFINGP0LfRi9C60LDRhVxuLy8gICAgICAgINCS0L7Qt9C80L7QttC90L4g0YHRgtC+0LjRgiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YDQsNC90LTQvtC80LjQt9Cw0YLQvtGALCDQstGL0LHQuNGA0LDRjtGJ0LjQuSDQvdGD0LbQvdGL0LUg0LfQvdCw0YfQtdC90LjRjyDQsiDRgdC70YPRh9Cw0LnQvdC+0Lwg0L/QvtGA0Y/QtNC60LVcbi8vICAgICsyNy4gc2hhcmVkQnJvb2RzTGlzdFtdIC0g0LLRi9GP0YHQvdC40YLRjCDRh9GC0L4g0Y3RgtC+XG4vLyAgICArMjguINCb0L7QutCw0LvQuNC30LjRgNC+0LLQsNGC0Ywg0YHQu9C+0LLQsCDQkNGA0YXQuNCyIC8g0KHQutGA0YvRgtGMINCw0YDRhdC40LIuXG4vLyAgICArMzAuINCh0YLRgNCw0L3QvdC+0YHRgtC4INGBINC30LDQv9C+0LzQuNC90LDQvdC40LXQvCDRj9C30YvQutCwINC00LvRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbi8vICAgICszMS4g0J/RgNC+0L/QuNGB0LDRgtGMIDwhLS0gZW50cm9waXplci5KUyAtLT4g0L3QsCDQstGB0LXRhSDRgdGC0YDQsNC90LjRhtCw0YVcbi8vICAgIDMyLiDQkiDRgdC/0LjRgdC60LUg0LLRi9Cx0L7RgNCwINGA0L7QtNC40YLQtdC70LXQuSDQvtGC0L7QsdGA0LDQttCw0YLRjCDRgtC+0LvRjNC60L4g0YLQtdGFLCDRh9GC0L4g0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YIg0YLQtdC60YPRidC10LzRgyDRj9C30YvQutGDLlxuLy8gICAgKzMzLiDQm9C+0LrQsNC70LjQt9Cw0YbQuNGPINGB0L7QvtCx0YnQtdC90LjQuSDQstCw0LvQuNC00LDRhtC40LguXG4vLyAgICAzNC4gXCLQn9C+0LTRgNC+0LHQvdC10LVcIiDQvdC1INGA0LDQsdC+0YLQsNC10YIuXG4vLyAgICAzNS4g0J/QvtC00YLRj9Cz0LjQstCw0YLRjCDQuNC90YTRgyDQuNC3INGA0LXQutC70LDQvNC90L7Qs9C+INCx0LDQvdC90LXRgNCwICjQtdGB0LvQuCDRgtCw0LrQvtCy0LDRjyDQsdGL0LvQsCDRgNCw0L3QtdC1INCy0L3QtdGB0LXQvdCwKS5cbi8vICAgIDM2LiDQn9GA0L7QstC10YDQuNGC0Ywg0LDQtNCw0L/RgtC40LIg0LzQvtC00LDQu9GM0L3Ri9GFINC+0LrQvtC9INC00LvRjyDQtNC10YLQsNC70LrQuCDQutC+0YLRj9GCLlxuLy8gICAgMzcuINCb0L7QutCw0LvQuNC30L7QstCw0YLRjCDRhNGA0LDQt9GDIFwi0J/QvtC00YDQvtCx0L3QtdC1INC+0LHQviDQvNC90LVcIlxuLy8gICAgMzguINCf0YDQuNC60YDQtdC/0LjRgtGMINC6INC90L7QstC+0YHRgtGP0Lwg0LTQsNGC0YMuXG5cbmNvbnN0IGluaXRIYW5kbGVycyA9ICgpID0+IHtcblxuICAgICQoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEluZm8oKVxuXG4gICAgICAgIGluaXQoZGF0YSlcbiAgIFxuICAgICAgICBoYW5kbGVQaWxscyhkYXRhWydkYXRhJ10pXG5cbiAgICAgICAgJCgnI3YtcGlsbHMtY29tbW9uLWFyY2hpdmUnKS5vbignY2xpY2snLCBoYW5kbGVBcmNoaXZlUGlsbHMpXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICAkKCcuYnJvb2RUb0FyY2hpdmUnKS5jbGljayhhc3luYyBldmVudCA9PiB7XG5cbiAgICAgICAgYXdhaXQgZmV0Y2goJ3NyYy9EQi9raXR0eV9DUlVEL3JlcGxhY2VUb0FyY2hpdmUucGhwJywgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsnYnJvb2RfaWQnOiBldmVudC50YXJnZXQuZGF0YXNldC5icm9vZElkfSksIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pXG4gICAgXG4gICAgfSlcblxufVxuXG4vKiDQodC60YDRi9Cy0LDQtdC8INCy0LrQu9Cw0LTQutC4INGA0LDRgdC/0YDQvtC00LDQvdC90YvRhSDQv9C+0LzQtdGC0L7QsiAgKi9cblxubGV0IGJyb29kc0luZm8gPSB1bmRlZmluZWRcblxuY29uc3QgZmV0Y2hJbmZvID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgaWYgKGJyb29kc0luZm8gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJyb29kc0luZm8gPSBhd2FpdCAoYXdhaXQgZmV0Y2goXCJzcmMvREIva2l0dHlfQ1JVRC9icm9vZF9DUlVEL2Jyb29kX2dldF9hbGwucGhwXCIsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgIFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gXG4gICAgICAgIH0pKS5qc29uKClcbiAgICB9XG5cbiAgICByZXR1cm4gYnJvb2RzSW5mb1xuXG59XG5cbmNvbnN0IGluaXQgPSAoYnJvb2RzSW5mbykgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGJyb29kc0luZm9bJ2RhdGEnXS5maWx0ZXIoKHthcmNoaXZlfSkgPT4gYXJjaGl2ZSA9PT0gJzEnKVxuICAgICAgICAuZmlsdGVyKChfLCBpbmRleCkgPT4gaW5kZXggPT0gMClcblxuICAgIGlmICh0YXJnZXQubGVuZ3RoICE9IDApIHtcbiAgICAgICAgJChgI3YtcGlsbHMtaGVhZGluZ0Jyb29kXyR7dGFyZ2V0WzBdLmlkfS10YWJgKS50YWIoJ3Nob3cnKVxuICAgIH1cbn1cblxuY29uc3QgaGFuZGxlUGlsbHMgPSAoZGF0YSwgYXR0clNob3cgPSB1bmRlZmluZWQpID0+IHtcbiAgICBcbiAgICBkYXRhLmZvckVhY2goKHtpZCwgYXJjaGl2ZX0pID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY3VycmVudF9waWxsID0gJChgI3YtcGlsbHMtaGVhZGluZ0Jyb29kXyR7aWR9LXRhYmApXG4gICAgXG4gICAgICAgIGlmIChhcmNoaXZlID09PSAnMCcpIHtcbiAgICBcbiAgICAgICAgICAgIGlmICgoYXR0clNob3cgPT09IHVuZGVmaW5lZCkgfHwgKGF0dHJTaG93ID09ICcwJykpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50X3BpbGwuaGlkZShcInNsb3dcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudF9waWxsLnNob3coXCJzbG93XCIpXG4gICAgICAgICAgICB9ICBcbiAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoKGF0dHJTaG93ID09PSB1bmRlZmluZWQpIHx8IChhdHRyU2hvdyA9PSAnMCcpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudF9waWxsLnNob3coXCJzbG93XCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfcGlsbC5oaWRlKFwic2xvd1wiKVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuZmlsdGVyKCh7YXJjaGl2ZX0pID0+IGFyY2hpdmUgPT0gJzEnKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgJCgnI3YtcGlsbHMtY29tbW9uLXRhYicpLnRhYignc2hvdycpXG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgXG59XG5cbmNvbnN0IGhhbmRsZUFyY2hpdmVQaWxscyA9IGFzeW5jICgpID0+IHtcblxuICAgIGNvbnN0IGRhdGEgICAgICAgICAgPSBhd2FpdCBmZXRjaEluZm8oKVxuICAgIGNvbnN0IGFyY2hpdmVfcGlsbHMgPSAkKCcjdi1waWxscy1jb21tb24tYXJjaGl2ZScpXG5cbiAgICBpZiAoYXJjaGl2ZV9waWxscy5hdHRyKFwic2hvd1wiKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXJjaGl2ZV9waWxscy5hdHRyKFwic2hvd1wiLCBcIjFcIilcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyU2hvdyA9IGFyY2hpdmVfcGlsbHMuYXR0cihcInNob3dcIilcblxuICAgIGlmIChhdHRyU2hvdyA9PSBcIjFcIikge1xuICAgICAgICBhcmNoaXZlX3BpbGxzLmF0dHIoXCJzaG93XCIsIFwiMFwiKVxuICAgICAgICBhcmNoaXZlX3BpbGxzLmh0bWwoZGF0YVsnaGlkZV9hcmNoaXZlX3RpdGxlJ10pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJjaGl2ZV9waWxscy5hdHRyKFwic2hvd1wiLCBcIjFcIilcbiAgICAgICAgYXJjaGl2ZV9waWxscy5odG1sKGRhdGFbJ2FyY2hpdmVfdGl0bGUnXSlcbiAgICB9XG5cbiAgICBoYW5kbGVQaWxscyhkYXRhWydkYXRhJ10sIGF0dHJTaG93KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRIYW5kbGVycyIsIkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbmV4cG9ydCBjb25zdCBkcm9wem9uZUhhbmRsZXJzID0gYXN5bmMgKHRhYmxlTmFtZSwgcHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCBwYXJhbXMgPSBbXSkgPT4ge1xuXG4gICAgY29uc3QgYXBwbHlfaW5pdCA9IGFzeW5jIGl0ZW1zID0+IFxuICAgICAgICBpdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4gaW5pdE9uZURyb3B6b25lKHByZWZpeERyb3B6b25lLCB0YXJnZXRGZWlsZCwgY3VycmVudC5pZCkpXG5cbiAgICBhd2FpdCBhcHBseV9pbml0KGF3YWl0IGZldGNoSW1nKHRhYmxlTmFtZSwgcGFyYW1zKSlcblxufVxuXG5leHBvcnQgY29uc3QgZHJvcHpvbmVIYW5kbGVyc0NvbW1vbiA9IGFzeW5jIChwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQpID0+IFxuICAgIGF3YWl0IGluaXRPbmVEcm9wem9uZShwcmVmaXhEcm9wem9uZSwgdGFyZ2V0RmVpbGQsICdjb21tb24nKVxuXG5jb25zdCBpbml0T25lRHJvcHpvbmUgPSBhc3luYyAocHJlZml4RHJvcHpvbmUsIHRhcmdldEZlaWxkLCB2YWx1ZVRhcmdldEZlaWxkKSA9PiB7XG5cbiAgICBjb25zdCBpZERyb3B6b25lID0gYCMke3ByZWZpeERyb3B6b25lfS0ke3ZhbHVlVGFyZ2V0RmVpbGR9YFxuXG4gICAgaWYgKCQoaWREcm9wem9uZSkubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG5cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic2VuZGluZ1wiLCAoZmlsZSwgeGhyLCBmb3JtRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQodGFyZ2V0RmVpbGQsIHZhbHVlVGFyZ2V0RmVpbGQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG59XG5cbmNvbnN0IGZldGNoSW1nID0gYXN5bmMgKHRhYmxlTmFtZSwgcGFyYW1zID0gW10pID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF91cmwgPSAnc3JjL0RCL2V4aGliaXRpb25lcl9DUlVEL2V4aGliaXRpb25fQ1JVRC9nZXRfZXhoaWJpdGlvbl9waG90by5waHAnO1xuICAgIGxldCBjdXJyZW50X2luZiA9IHsgdGFibGVOYW1lLCBwYXJhbXMgfVxuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgKGF3YWl0IGZldGNoKGN1cnJlbnRfdXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgXG4gICAgfSkpLmpzb24oKVxuXG4gICAgcmV0dXJuIGltYWdlc1xuXG59IiwiY29uc3QgaW5pdE9uZURyb3B6b25lID0gYXN5bmMgKGtpdHR5X2lkLCBwZXJpb2RzX2lkKSA9PiB7XG5cbiAgICBEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZVxuXG4gICAgY29uc3QgaWREcm9wem9uZSA9IGAjbXktZHJvcHpvbmUtaSR7a2l0dHlfaWR9LWkke3BlcmlvZHNfaWR9YFxuXG4gICAgaWYgKCQoaWREcm9wem9uZSkubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgbmV3IERyb3B6b25lKGlkRHJvcHpvbmUsIHtcblxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCIsXG5cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic2VuZGluZ1wiLCAoZmlsZSwgeGhyLCBmb3JtRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJraXR0eV9pZFwiLCBraXR0eV9pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBlcmlvZF9pZFwiLCBwZXJpb2RzX2lkKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdE9uZURyb3B6b25lIiwiY29uc3QgZHJvcHpvbmVIYW5kbGVyc0NvbW1vblRodW1ibmFpbCA9IGFzeW5jICgpID0+IHtcblxuICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbiAgICBjb25zdCBhcHBseV9pbml0ID0gYXN5bmMgaXRlbXMgPT4gaXRlbXMuZm9yRWFjaChjdXJyZW50ID0+IGluaXRPbmVEcm9wem9uZShjdXJyZW50KSlcbiAgICAgICAgXG4gICAgYXdhaXQgYXBwbHlfaW5pdChhd2FpdCBmZXRjaEltZygpKVxuXG59XG5cbmNvbnN0IGluaXRPbmVEcm9wem9uZSA9IGFzeW5jIChjdXJyZW50KSA9PiB7XG5cbiAgICBsZXQgaWREcm9wem9uZSA9IGAjbXktZHJvcHpvbmUtJHtjdXJyZW50LmlkfWBcblxuICAgIGlmICgkKGlkRHJvcHpvbmUpLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgIG5ldyBEcm9wem9uZShpZERyb3B6b25lLCB7XG5cbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiLFxuICAgICAgICAgICAgbWF4RmlsZXM6IDEsXG5cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic2VuZGluZ1wiLCAoZmlsZSwgeGhyLCBmb3JtRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJraXR0eV9pZFwiLCBjdXJyZW50LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYnJvb2RfaWRcIiwgY3VycmVudC5icm9vZF9pZCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGZpbGUuaW5pdFRodW1ibmFpbCkgJiYgKHRoaXMuZmlsZXNbMV0gIT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmlsZSh0aGlzLmZpbGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInN1Y2Nlc3NcIiwgKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpXG4gICAgICAgICAgICAgICAgaWYgKChjdXJyZW50ICE9IG51bGwpICYmIChjdXJyZW50LnVybCAhPSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICBleGVjVGh1bWJuYWlsKHRoaXMsIGN1cnJlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbn1cblxuY29uc3QgZmV0Y2hJbWcgPSBhc3luYyAoKSA9PiB7XG4gICAgXG4gICAgbGV0IGN1cnJlbnRfdXJsID0gJ3NyYy9EQi9raXR0eV9DUlVEL2ltZ19DUlVEL2ltZ19nZXRfbWFpbi5waHAnO1xuICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG5cbiAgICBsZXQgaW1hZ2VzID0gYXdhaXQgKGF3YWl0IGZldGNoKGN1cnJlbnRfdXJsLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgIFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIFxuICAgIH0pKS5qc29uKClcblxuICAgIHJldHVybiBpbWFnZXNcblxufVxuXG4vLyBEUlkgLSDQv9C10YDQtdC90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbmNvbnN0IGV4ZWNUaHVtYm5haWwgPSAoY29udGV4dCwgY3VycmVudF9pbWFnZSkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRGaWxlID0ge1xuICAgICAgICBuYW1lOiBjdXJyZW50X2ltYWdlLm5hbWUsXG4gICAgICAgIHNpemU6IGN1cnJlbnRfaW1hZ2Uuc2l6ZSxcbiAgICAgICAgYWNjZXB0ZWQ6IHRydWUsXG4gICAgICAgIGtpbmQ6ICdpbWFnZScsXG4gICAgICAgIHVwbG9hZDoge1xuICAgICAgICAgICAgZmlsZW5hbWU6IGN1cnJlbnRfaW1hZ2UubmFtZSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YVVSTDogY3VycmVudF9pbWFnZS51cmwsXG4gICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICBjb250ZXh0LmZpbGVzLnB1c2goY3VycmVudEZpbGUpO1xuICAgIGNvbnRleHQuZW1pdChcImFkZGVkZmlsZVwiLCBjdXJyZW50RmlsZSk7XG4gICAgY29udGV4dC5jcmVhdGVUaHVtYm5haWxGcm9tVXJsKFxuICAgICAgICBjdXJyZW50RmlsZSxcbiAgICAgICAgY29udGV4dC5vcHRpb25zLnRodW1ibmFpbFdpZHRoLFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsSGVpZ2h0LFxuICAgICAgICBjb250ZXh0Lm9wdGlvbnMudGh1bWJuYWlsTWV0aG9kLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICB0aHVtYm5haWwgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5lbWl0KCd0aHVtYm5haWwnLCBjdXJyZW50RmlsZSwgdGh1bWJuYWlsKTtcbiAgICAgICAgICAgIGNvbnRleHQuZW1pdChcImNvbXBsZXRlXCIsIGN1cnJlbnRGaWxlKTtcbiAgICAgICAgfVxuICAgIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsIiwiaW1wb3J0IGluaXRPbmVEcm9wem9uZSBmcm9tICcuLi9kcm9wem9uZXMvZHJvcHpvbmVzSGFuZGxlcnNfa2l0dHkuanMnXG5cbmNvbnN0IGluaXRIYW5kbGVyc0xhenlGZXRjaGluZ0RhdGEgPSAoKSA9PiB7XG5cbiAgICAkKCcja2l0dHlQaG90b0NvbnRlbnQnKS5vbignc2hvd24uYnMubW9kYWwnLCBhc3luYyBldmVudCA9PiB7XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKirQl9CQ0JPQoNCj0JfQmtCQINCf0JXQoNCY0J7QlNCe0JIqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICAvLyDQpNC10YLRh9C40Lwg0LfQsNCz0L7Qu9C+0LLQutC4INC/0LXRgNC40L7QtNC+0LIg0YEg0YHQtdGA0LLQtdGA0LBcbiAgICAgICAgY29uc3QgZmV0Y2hQaWxsc0NhcHRpb24gPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJyb29kX2lkID0gZXZlbnQucmVsYXRlZFRhcmdldC5kYXRhc2V0LmJyb29kSWRcblxuICAgICAgICAgICAgY29uc3Qga2l0dHlQZXJpb2RzID0gYXdhaXQgKGF3YWl0IGZldGNoKCdzcmMvREIvbGF6eUZldGNoRGF0YS9mZXRjaFBlcmlvZHNDYXB0aW9uLnBocCcsIHsgXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYnJvb2RfaWQgfSksIFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICAgICAgfSkpLmpzb24oKVxuXG4gICAgICAgICAgICByZXR1cm4ga2l0dHlQZXJpb2RzXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCk0L7RgNC80LjRgNGD0LXQvCDQstC60LvQsNC00LrQuCDRgSDQt9Cw0LPQvtC70L7QstC60LDQvNC4INC/0LXRgNC40L7QtNC+0LJcbiAgICAgICAgY29uc3QgY3JlYXRlUGlsbHNQZXJpb2RzID0gYXN5bmMgKGRhdGFQZXJpb2RzKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJ1xuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9ICdhY3RpdmUnXG5cbiAgICAgICAgICAgIGRhdGFQZXJpb2RzLmZvckVhY2goKHtpZCwgbmFtZX0pID0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgK1xuICAgICAgICAgICAgICAgIGA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rICR7YWN0aXZlfVwiIGlkPVwicGVyaW9kXyR7aWR9XCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI3BlcmlvZF8ke2lkfVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwicGVyaW9kXyR7aWR9XCIgYXJpYS1zZWxlY3RlZD1cIiR7KGFjdGl2ZSAhPT0gJycgPyAndHJ1ZScgOiAnZmFsc2UnKX1cIj4ke25hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+YCAgICAgIFxuICAgICAgICAgICAgICAgIGFjdGl2ZSA9ICcnXG4gICAgICAgICAgICB9KSAgICAgICBcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyDQkNGB0LjQvdGF0YDQvtC90L3QviDQtNC+0LHQsNCy0LvRj9C10Lwg0LfQsNCz0L7Qu9C+0LLQutC4INC/0LXRgNC40L7QtNC+0LIg0Log0LzQvtC00LDQu9GM0L3QvtC80YMg0L7QutC90YNcbiAgICAgICAgY29uc3QgY3JlYXRlUGVyaW9kc0xheW91dCA9IGFzeW5jIChwaWxsc1BlcmlvZHMpID0+IHtcblxuICAgICAgICAgICAgJChcIiNwaG90b0tpdHR5Q29udGVudFwiKS5hcHBlbmQoYFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIGlkPVwicGhvdG9zS2l0dHlUYWJcIiByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAke3BpbGxzUGVyaW9kc31cbiAgICAgICAgICAgICAgICA8L3VsPiAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGhvdG9zS2l0dHlUYWJDb250ZW50XCIgY2xhc3M9XCJ0YWItY29udGVudCB0ZXh0LWNlbnRlciBteS0yIHNoYWRvdy1sZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJraXR0eUNhcHRpb25cIiBjbGFzcz1cImNvbnRhaW5lciBhbGVydCBhbGVydC1pbmZvIHRleHQtY2VudGVyXCIgcm9sZT1cImFsZXJ0XCI+PC9kaXY+YClcblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKirQl9CQ0JPQoNCj0JfQmtCQINCk0J7QotCe0JPQoNCQ0KTQmNCZKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgY29uc3Qga2l0dHlfaWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0LmRhdGFzZXQua2l0dHlJZFxuXG4gICAgICAgIC8vINCk0LXRgtGH0LjQvCDRhNC+0YLQvtCz0YDQsNGE0LjQuCDRgSDRgdC10YDQstC10YDQsFxuICAgICAgICBjb25zdCBmZXRjaEtpdHR5UGhvdG9zID0gYXN5bmMgKHBlcmlvZF9pZCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBraXR0eVBob3RvcyA9IGF3YWl0IChhd2FpdCBmZXRjaCgnc3JjL0RCL2xhenlGZXRjaERhdGEvZmV0Y2hDb250ZW50S2l0dHlQaG90by5waHAnLCB7IFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGtpdHR5X2lkLCBwZXJpb2RfaWQgfSksIFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IFxuICAgICAgICAgICAgfSkpLmpzb24oKVxuXG4gICAgICAgICAgICByZXR1cm4ga2l0dHlQaG90b3NcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JTQuNC90LDQvNC40YfQtdGB0LrQuCDRhNC+0YDQvNC40YDRg9C10Lwg0LrQvtC90YLQtdC90YIg0L/QviDQv9C10YDQuNC+0LTRg1xuICAgICAgICBjb25zdCBjb250ZW50UGVyaW9kID0gYXN5bmMgKGRhdGEsIHBlcmlvZF9pZCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgb3dsQ29udGVudCA9ICcnXG4gICAgICAgICAgICBsZXQgZmFuY3lDb250ZW50ID0gJydcblxuICAgICAgICAgICAgY29uc3QgcGF0aHMgPSBkYXRhWydwYXRocyddXG5cbiAgICAgICAgICAgIHBhdGhzLmZvckVhY2goKHtwYXRoLCBjaGVja2JveH0pID0+IHtcblxuICAgICAgICAgICAgICAgIG93bENvbnRlbnQgPSBvd2xDb250ZW50ICtcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BhdGh9XCIgYWx0PVwi0JjQt9C+0LHRgNCw0LbQtdC90LjQtSDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuXG4gICAgICAgICAgICAgICAgZmFuY3lDb250ZW50ID0gZmFuY3lDb250ZW50ICtcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC00IGNvbC02IHRodW1iXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtZmFuY3lib3g9XCJraXR0eV8ke2tpdHR5X2lkfV8ke3BlcmlvZF9pZH1cIiBocmVmPVwiJHtwYXRofVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1mbHVpZFwiIHNyYz1cIiR7cGF0aH1cIiBhbHQ9XCLQmNC30L7QsdGA0LDQttC10L3QuNC1INC+0YLRgdGD0YLRgdGC0LLRg9C10YJcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAke2NoZWNrYm94fVxuICAgICAgICAgICAgICAgIDwvZGl2PmBcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgJCgnI3Bob3Rvc0tpdHR5VGFiQ29udGVudCcpLmFwcGVuZChgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cIiR7cGVyaW9kX2lkfVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImhvbWUtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZGF0YVsnc2VjdGlvbl9yb290J119XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXQtMSBhbGVydCBhbGVydC1wcmltYXJ5XCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3dsLWNhcm91c2VsXCI+JHtvd2xDb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBhbGVydCBhbGVydC1wcmltYXJ5XCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+JHtmYW5jeUNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAke2RhdGFbJ2J1dHRvbl9kZWxldGUnXX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuXG5cbiAgICAgICAgICAgICQoJyNraXR0eUNhcHRpb24nKS5lbXB0eSgpLmFwcGVuZChkYXRhWydkZXNjcnlwdGlvbiddKVxuXG4gICAgICAgICAgICAkKCcja2l0dHlQaG90b0NvbnRlbnRUaXRsZScpLmVtcHR5KCkuYXBwZW5kKGRhdGFbJ25hbWUnXSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbWFydFNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgMTAwMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICQoYCNwaG90b3NLaXR0eVRhYkNvbnRlbnQgIyR7cGVyaW9kX2lkfWApLmF0dHIoJ2RhdGEtbG9hZGluZy1kb25lJywgJzEnKVxuXG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyDQl9Cw0LvQuNCy0LDQtdC8INC/0L7Qu9GD0YfQtdC90L3Ri9C1INGBINGB0LXRgNCy0LXRgNCwINGE0L7RgtC+0LPRgNCw0YTQuNC4INCyINCw0YHQuNC90YXRgNC+0L3QvdC+0Lwg0YDQtdC20LjQvNC1XG4gICAgICAgIGNvbnN0IGNyZWF0ZVBob3RvUGVyaW9kID0gYXN5bmMgKHBlcmlvZF9pZCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoJChgI3Bob3Rvc0tpdHR5VGFiQ29udGVudCAjJHtwZXJpb2RfaWR9YCkuYXR0cignZGF0YS1sb2FkaW5nLWRvbmUnKSA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBjb250ZW50UGVyaW9kKGF3YWl0IGZldGNoS2l0dHlQaG90b3MocGVyaW9kX2lkKSwgcGVyaW9kX2lkKVxuXG4gICAgICAgICAgICAgICAgYXdhaXQgaW5pdE9uZURyb3B6b25lKGtpdHR5X2lkLCBwZXJpb2RfaWQuc3BsaXQoJ18nKVsxXSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnI3Bob3Rvc0tpdHR5VGFiQ29udGVudCAudGFiLXBhbmUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAkKGAjcGhvdG9zS2l0dHlUYWJDb250ZW50ICMke3BlcmlvZF9pZH1gKS50YWIoJ3Nob3cnKVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyDQpNC+0YDQvNC40YDRg9C10Lwg0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQv9C10YDQtdGF0L7QtNCwINC/0L4g0LLQutC70LDQtNC60LDQvCDQv9C10YDQuNC+0LTQvtCyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUhhbmRsZXJQaWxscyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICQoJyNwaG90b3NLaXR0eVRhYiBhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykub24oJ3Nob3duLmJzLnRhYicsIGFzeW5jIGZ1bmN0aW9uKCkgeyAgXG4gICAgICAgICAgICAgICAgYXdhaXQgY3JlYXRlUGhvdG9QZXJpb2QoJCh0aGlzKS5hdHRyKCdpZCcpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKirQntCh0J3QntCS0J3QkNCvINCn0JDQodCi0KwqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICBpZiAoJChcIiNwaG90b0tpdHR5Q29udGVudFwiKS5jaGlsZHJlbigpLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICBjb25zdCBwaWxsc0NhcHRpb24gPSBhd2FpdCBmZXRjaFBpbGxzQ2FwdGlvbigpXG5cbiAgICAgICAgICAgIGlmIChwaWxsc0NhcHRpb24ubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LLQutC70LDQtNC+0Log0YEg0L/QtdGA0LjQvtC00LDQvNC4XG4gICAgICAgICAgICAgICAgYXdhaXQgY3JlYXRlUGVyaW9kc0xheW91dChhd2FpdCBjcmVhdGVQaWxsc1BlcmlvZHMocGlsbHNDYXB0aW9uKSlcblxuICAgICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQsNGFINC/0L4g0LLQutC70LDQtNC60LDQvCDQv9C10YDQuNC+0LTQvtCyXG4gICAgICAgICAgICAgICAgYXdhaXQgY3JlYXRlSGFuZGxlclBpbGxzKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDRhNC+0YLQvtC60L7QvdGC0LXQvdGC0LBcbiAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVQaG90b1BlcmlvZChgcGVyaW9kXyR7cGlsbHNDYXB0aW9uWzBdLmlkfWApXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgJCgnI2tpdHR5UGhvdG9Db250ZW50Jykub24oJ2hpZGUuYnMubW9kYWwnLCAoKSA9PiAkKFwiI3Bob3RvS2l0dHlDb250ZW50XCIpLmVtcHR5KCkpXG4gICAgXG59ICAgXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRIYW5kbGVyc0xhenlGZXRjaGluZ0RhdGEiLCJjb25zdCBkZWxldGVCeUlkID0gYXN5bmMgKG1vZGFsV2luZG93LCB1cmwsIGlkX2ZpZWxkX25hbWUpID0+IHtcblxuICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcblxuICAgIHRyeSB7XG5cbiAgICAgICAgYXdhaXQgZmV0Y2godXJsLCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsICBcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IChhc3luYyAoKSA9PiBtb2RhbFdpbmRvdy5tb2RhbCgnaGlkZScpKSgpXG5cbiAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7Qu9GD0YfQuNGC0Ywg0LTQsNC90L3Ri9C1INC+0YIg0YHQtdGA0LLQtdGA0LAnKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0Q2hlY2tJbWdzID0gYXN5bmMgKGlkLCBpZF9maWVsZF9uYW1lKSA9PiB7XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHQ7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpcm1hdGlvbnMgPSAobW9kYWxXaW5kb3csIHRhcmdldEJ1dHRvbiwgdXJsLCBpZF9maWVsZF9uYW1lKSA9PiB7XG5cbiAgICB0YXJnZXRCdXR0b24uY2xpY2soKCkgPT4gZGVsZXRlQnlJZChtb2RhbFdpbmRvdywgdXJsLCBpZF9maWVsZF9uYW1lKSlcblxuICAgIG1vZGFsV2luZG93Lm9uKCdzaG93bi5icy5tb2RhbCcsXG4gICAgICAgIGV2ZW50ID0+IHRhcmdldEJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIGV2ZW50LnJlbGF0ZWRUYXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpKSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcyA9ICgpID0+IHtcblxuICAgIGxldCBtb2RhbFdpbmRvdyAgID0gJCgnI21vZGFsRGVsZXRlU3RhdGUnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9zdGF0ZScpXG4gICAgbGV0IGlkX2ZpZWxkX25hbWUgPSAnc3RhdGVfaWQnXG4gICAgbGV0IHVybCAgICAgICAgICAgPSAnc3JjL0RCL2tpdHR5X0NSVUQvc3RhdGVfQ1JVRC9zdGF0ZV9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgY29uc3QgZmV0Y2hEZWxldGVJbWdzID0gYXN5bmMgKGNoZWNrcykgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcyB9XG4gICAgICAgIGxldCBoZWFkZXJzICAgICA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRfaW5mKSwgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncygndHJ1ZScsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcylcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maXJtYXRpb25zUGVyaW9kID0gKCkgPT4ge1xuXG4gICAgbGV0IG1vZGFsV2luZG93ICAgPSAkKCcjbW9kYWxEZWxldGVQZXJpb2QnKVxuICAgIGxldCBidXR0b24gICAgICAgID0gJCgnI2RlbGV0ZV9wZXJpb2QnKVxuICAgIGxldCBpZF9maWVsZF9uYW1lID0gJ2Jyb29kX2lkJ1xuICAgIGxldCB1cmwgICAgICAgICAgID0gJ3NyYy9EQi9raXR0eV9DUlVEL3BlcmlvZF9DUlVEL3BlcmlvZF9kZWxldGVfZ3JvdXAucGhwJ1xuXG4gICAgLy8gRFJZIC0g0L/RgNC+0LHRgNC+0YEg0YEg0LrQvdC+0L/QutC4INC30LDQv9GD0YHQutCwINC80L7QtNCw0LvQutC4INC90LAg0LrQvdC+0L/QutGDINGD0LTQsNC70LXQvdC40Y8g0LLRi9C90LXRgdGC0Lgg0LIg0YPRgtC40LvQuNGC0YtcbiAgICBtb2RhbFdpbmRvdy5vbignc2hvd24uYnMubW9kYWwnLCBcbiAgICAgICAgZXZlbnQgPT4gYnV0dG9uLmF0dHIoaWRfZmllbGRfbmFtZSwgXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmdldEF0dHJpYnV0ZShpZF9maWVsZF9uYW1lKSkpXG5cbiAgICBjb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCBpZCkgPT4ge1xuICAgIFxuICAgICAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgaWQgfVxuICAgICAgICBsZXQgaGVhZGVycyAgICAgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IGlkICAgICA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSlcbiAgICAgICAgbGV0IGNoZWNrcyA9IGF3YWl0IGdldENoZWNrSW1ncyhpZCwgaWRfZmllbGRfbmFtZSlcblxuICAgICAgICBhd2FpdCBmZXRjaERlbGV0ZUltZ3MoY2hlY2tzLCBpZClcbiAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IG1vZGFsV2luZG93Lm1vZGFsKCdoaWRlJykpKClcbiAgICB9XG5cbiAgICBidXR0b24uY2xpY2soZXZlbnQgPT4gbWFpbkhhbmRsZXIoZXZlbnQpKVxuXG59IiwibGV0IHVybCA9J3NyYy9EQi9leGhpYml0aW9uZXJfQ1JVRC9pbWdfQ1JVRC9pbWdfZGVsZXRlX2dyb3VwLnBocCdcblxuY29uc3QgZGVsZXRlSW1nID0gKG1vZGFsV2luZG93LCBidXR0b24sIGlkX2ZpZWxkX25hbWUsIHRhYmxlX25hbWUpID0+IHtcblxuICAgIC8vIERSWSAtINC/0YDQvtCx0YDQvtGBINGBINC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCDQvNC+0LTQsNC70LrQuCDQvdCwINC60L3QvtC/0LrRgyDRg9C00LDQu9C10L3QuNGPINCy0YvQvdC10YHRgtC4INCyINGD0YLQuNC70LjRgtGLXG4gICAgbW9kYWxXaW5kb3cub24oJ3Nob3duLmJzLm1vZGFsJywgXG4gICAgICAgIGV2ZW50ID0+IGJ1dHRvbi5hdHRyKGlkX2ZpZWxkX25hbWUsIFxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC5nZXRBdHRyaWJ1dGUoaWRfZmllbGRfbmFtZSkpKVxuXG4gICAgY29uc3QgbWFpbkhhbmRsZXIgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGxldCBpZCAgICAgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGlkX2ZpZWxkX25hbWUpXG4gICAgICAgIGxldCBjaGVja3MgPSBhd2FpdCBnZXRDaGVja0ltZ3MoaWQsIGlkX2ZpZWxkX25hbWUpXG5cbiAgICAgICAgYXdhaXQgZmV0Y2hEZWxldGVJbWdzKGNoZWNrcywgdXJsLCB0YWJsZV9uYW1lKVxuICAgICAgICBhd2FpdCAoYXN5bmMgKCkgPT4gbW9kYWxXaW5kb3cubW9kYWwoJ2hpZGUnKSkoKVxuICAgIH1cblxuICAgIGJ1dHRvbi5jbGljayhldmVudCA9PiBtYWluSGFuZGxlcihldmVudCkpIFxuXG59XG5cbi8vIERSWSAtINGB0L7QvtGC0L3QvtGB0LjRgtGB0Y8g0YEg0YPQtNCw0LvQtdC90LjQtdC8INC/0LXRgNC40L7QtNCwXG5jb25zdCBnZXRDaGVja0ltZ3MgPSBhc3luYyAoaWQsIGlkX2ZpZWxkX25hbWUpID0+IHsgXG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgJChgaW5wdXRbJHtpZF9maWVsZF9uYW1lfSA9ICR7aWR9XWApLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbUpRID0gJChpdGVtKVxuICAgICAgICBpZiAoY3VycmVudEl0ZW1KUS5wcm9wKFwiY2hlY2tlZFwiKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRJdGVtSlEudmFsKCkpXG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcblxufVxuXG5jb25zdCBmZXRjaERlbGV0ZUltZ3MgPSBhc3luYyAoY2hlY2tzLCB1cmwsIHRhYmxlX25hbWUpID0+IHtcbiAgICBcbiAgICBsZXQgY3VycmVudF9pbmYgPSB7IGNoZWNrcywgdGFibGVfbmFtZSB9XG4gICAgbGV0IGhlYWRlcnMgICAgID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cblxuICAgIGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoY3VycmVudF9pbmYpLCBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSW1nIiwiY29uc3QgaW5pdF9vd2wgPSAoKSA9PiB7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDMwMDAsXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRfb3dsIiwiaW1wb3J0IGluaXRfb3dsIGZyb20gJy4vZnJvbnQvdXRpbHMvaW5pdF9vd2xfY2FydXNlbCdcbmltcG9ydCB7IGRyb3B6b25lSGFuZGxlcnNDb21tb24gfSBmcm9tICcuL2Zyb250L2Ryb3B6b25lcy9kcm9wem9uZXNIYW5kbGVyc19JbmRleC5qcydcbmltcG9ydCBkcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsIGZyb20gJy4vZnJvbnQvZHJvcHpvbmVzL2Ryb3B6b25lc0hhbmRsZXJzX2tpdHR5X3RodW1ibmFpbC5qcydcbmltcG9ydCBkZWxldGVJbWcgZnJvbSAnLi9mcm9udC91dGlscy9jb25maXJtYXRpb25fZGVsZXRlX2ltZydcbmltcG9ydCB7IGRlbGV0ZUNvbmZpcm1hdGlvbnMsIGRlbGV0ZUNvbmZpcm1hdGlvbnNQZXJpb2QsIGRlbGV0ZUNvbmZpcm1hdGlvbnNTdGF0ZXMgfSBmcm9tICcuL2Zyb250L3V0aWxzL2NvbmZpcm1hdGlvbl9kZWxldGUnXG5pbXBvcnQgaW5pdEhhbmRsZXJzIGZyb20gJy4vZnJvbnQvYnJvb2RzJ1xuaW1wb3J0IGluaXRIYW5kbGVyc0Jhbm5lciBmcm9tICcuL2Zyb250L2Jhbm5lcidcbmltcG9ydCBpbml0SGFuZGxlcnNMYXp5RmV0Y2hpbmdEYXRhIGZyb20gJy4vZnJvbnQvbGF6eUZldGNoRGF0YS9mZXRjaENvbnRlbnRLaXR0eSdcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LTRgNC+0L/Qt9C+0L0g0LTQu9GPINC+0LHRidC40YUg0YTQvtGC0L5cbmRyb3B6b25lSGFuZGxlcnNDb21tb24oJ215LWRyb3B6b25lJywgJ2NvbW1vbicpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC00YDQvtC/0LfQvtC9INC00LvRjyDQt9Cw0LPRgNGD0LfQutC4INGE0L7RgtC+INC60L7RgtGP0YIg0LIg0YDQsNC30YDQtdC30LUg0LLRgNC10LzQtdC90L3Ri9GFINC/0LXRgNC40L7QtNC+0LJcbi8vZHJvcHpvbmVIYW5kbGVycygnaW1na2l0dHknKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC60L7RgtGP0YJcbmRlbGV0ZUNvbmZpcm1hdGlvbnMoXG4gICAgJCgnI21vZGFsRGVsZXRlS2l0dHknKSwgXG4gICAgJCgnI2RlbGV0ZV9raXR0eScpLCBcbiAgICAnc3JjL0RCL2tpdHR5X0NSVUQva2l0dHlfZGVsZXRlLnBocCcsXG4gICAgJ2tpdHR5X2lkJylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQv9C+0LzQtdGC0L7QslxuZGVsZXRlQ29uZmlybWF0aW9ucyhcbiAgICAkKCcjbW9kYWxEZWxldGVCcm9vZCcpLCBcbiAgICAkKCcjZGVsZXRlX2Jyb29kJyksIFxuICAgICdzcmMvREIva2l0dHlfQ1JVRC9icm9vZF9DUlVEL2Jyb29kX2RlbGV0ZS5waHAnLFxuICAgICdicm9vZF9pZCcpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0L/QtdGA0LjQvtC00L7QslxuZGVsZXRlQ29uZmlybWF0aW9uc1BlcmlvZCgpXG5cbi8vINCj0LTQsNC70LXQvdC40LUg0YHRgtCw0YLRg9GB0L7QslxuZGVsZXRlQ29uZmlybWF0aW9uc1N0YXRlcygpXG5cbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC00YDQvtC/0LfQvtC9INC00LvRjyDQs9C70LDQstC90L7Qs9C+INGE0L7RgtC+INC60L7RgtC10L3QutCwXG5kcm9wem9uZUhhbmRsZXJzQ29tbW9uVGh1bWJuYWlsKClcblxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQvtCy0LjQvdC+0Lkg0LrQsNGA0YPRgdC10LvQuFxuaW5pdF9vd2woKVxuXG4vLyDQo9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Lkg0LrQvtGC0L7QslxuZGVsZXRlSW1nKFxuICAgICQoJyNtb2RhbERlbGV0ZUltZycpLFxuICAgICQoJyNkZWxldGVfaW1nJyksIFxuICAgICdncm91cF9pZCcsXG4gICAgJ2ltZ2tpdHR5JylcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQvtCx0YnQuNGFINGE0L7RgtC+XG5kZWxldGVJbWcoXG4gICAgJCgnI21vZGFsRGVsZXRlQ29tbW9uSW1nJyksXG4gICAgJCgnI2RlbGV0ZV9jb21tb25faW1nJyksIFxuICAgICdncm91cF9pZCcsIFxuICAgICdpbWdjb21tb24nKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQvtCx0YDQsNCx0L7RgtGH0LjQutC+0LIg0L/QtdGA0LXQvNC10YnQtdC90LjRjyDQv9C+0LzQtdGC0L7QsiDQsiDQsNGA0YXQuNCyXG5pbml0SGFuZGxlcnMoKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQvtCx0YDQsNCx0L7RgtGH0LjQutC+0LIg0LLRgdC/0LvRi9Cy0LDRjtGJ0LXQs9C+INGA0LXQutC70LDQvNC90L7Qs9C+INCx0LDQvdC90LXRgNCwXG5pbml0SGFuZGxlcnNCYW5uZXIoKVxuXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQvtCx0YDQsNCx0L7RgtGH0LjQutC+0LIgXCLQu9C10L3QuNCy0L7QuVwiINC30LDQs9GA0YPQt9C60Lgg0YTQvtGC0L7QutC+0L3RgtC10L3RgtCwXG5pbml0SGFuZGxlcnNMYXp5RmV0Y2hpbmdEYXRhKCkiXSwic291cmNlUm9vdCI6IiJ9