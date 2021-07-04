/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/simon-game/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Board_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Board.vue */ \"./src/components/Board.vue\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  components: {\n   Board: _components_Board_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n});\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Board.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Board.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Square_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square.vue */ \"./src/components/Square.vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"./src/constants.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: `Board`,\n  components: { Square: _Square_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"] },\n\n  setup() {\n    let roundNumber = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"ref\"])(_constants__WEBPACK_IMPORTED_MODULE_2__[\"DEFAULT_ROUND_NUMBER\"]);\n    let squares = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"ref\"])([]);\n    let squareState = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"ref\"])(_constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_STATUS\"].NONE);\n    let playerMoves = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"ref\"])([]);\n    let simonMoves = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"ref\"])([]);\n    let difficultLevel = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"ref\"])(\"level_1\");\n    const number = 4;\n\n    const setAudio = (id) => {\n      switch (id) {\n        case _constants__WEBPACK_IMPORTED_MODULE_2__[\"CELL\"].CELL_1:\n          return new Audio(__webpack_require__(/*! @/assets/sounds/1.mp3 */ \"./src/assets/sounds/1.mp3\"));\n        case _constants__WEBPACK_IMPORTED_MODULE_2__[\"CELL\"].CELL_2:\n          return new Audio(__webpack_require__(/*! @/assets/sounds/2.mp3 */ \"./src/assets/sounds/2.mp3\"));\n        case _constants__WEBPACK_IMPORTED_MODULE_2__[\"CELL\"].CELL_3:\n          return new Audio(__webpack_require__(/*! @/assets/sounds/3.mp3 */ \"./src/assets/sounds/3.mp3\"));\n        case _constants__WEBPACK_IMPORTED_MODULE_2__[\"CELL\"].CELL_4:\n          return new Audio(__webpack_require__(/*! @/assets/sounds/4.mp3 */ \"./src/assets/sounds/4.mp3\"));\n        default:\n          return null;\n      }\n    };\n\n    const init = () => {\n      simonMoves.value = [];\n      playerMoves.value = [];\n      squares.value = [];\n      for (let i = 0; i < number; i++) {\n        squares.value.push({\n          id: i + 1,\n          value: _constants__WEBPACK_IMPORTED_MODULE_2__[\"FIELD\"].EMPTY,\n          audio: setAudio(i + 1),\n        });\n      }\n    };\n\n    Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"onBeforeMount\"])(init);\n\n    const difficultTimeOut = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"computed\"])(() => {\n      if (difficultLevel.value == \"level_3\") {\n        return _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_LEVELS\"].HARD_LEVEL;\n      } else if (difficultLevel.value == \"level_2\") {\n        return _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_LEVELS\"].MIDDLE_LEVEL;\n      } else {\n        return _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_LEVELS\"].EASY_LEVEL;\n      }\n    });\n\n    const selectSquare = (id) => {\n      const index = squares.value.findIndex((square) => {\n        return square.id === id;\n      });\n      console.log(\"UAUA\");\n      squares.value[index].audio.play();\n      playerMoves.value.push(squares.value[index].id);\n\n      if (index > -1) {\n        checkGame();\n      }\n    };\n\n    const checkGame = () => {\n      if (\n        playerMoves.value.every((element, index) => {\n          return element == simonMoves.value[index];\n        })\n      ) {\n        if (playerMoves.value.length == simonMoves.value.length) {\n          setWinGame();\n        }\n      } else {\n        setGameOver();\n      }\n    };\n    const startGame = () => {\n      init();\n      showSquares(squares, squareState, simonMoves);\n      roundNumber.value = _constants__WEBPACK_IMPORTED_MODULE_2__[\"DEFAULT_ROUND_NUMBER\"];\n    };\n\n    const setGameOver = () => {\n      squareState.value = _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_STATUS\"].GAME_OVER;\n    };\n\n    const sleep = (ms) => {\n      return new Promise((resolve) => setTimeout(resolve, ms));\n    };\n\n    const random = (min, max) => {\n      return Math.floor(Math.random() * (max - min)) + min;\n    };\n\n    const showSquares = async (squares, squareState, simonMoves) => {\n      squareState.value = _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_STATUS\"].PREVIEW;\n      const index = random(0, number - 1);\n      simonMoves.value.push(squares.value[index].id);\n\n      for (let id of simonMoves.value) {\n        const simonMove = squares.value.find((square) => {\n          return square.id === id;\n        });\n\n        await sleep(difficultTimeOut.value / 2);\n\n        simonMove.value = _constants__WEBPACK_IMPORTED_MODULE_2__[\"FIELD\"].FIELD;\n        simonMove.audio.play();\n\n        await sleep(difficultTimeOut.value / 2);\n\n        simonMove.value = _constants__WEBPACK_IMPORTED_MODULE_2__[\"FIELD\"].EMPTY;\n      }\n      squareState.value = _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_STATUS\"].STARTED;\n    };\n\n    const setWinGame = () => {\n      setTimeout(async () => {\n        roundNumber.value += 1;\n        playerMoves.value = [];\n        await Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"nextTick\"])();\n        showSquares(squares, squareState, simonMoves);\n      }, difficultTimeOut.value * 2);\n    };\n\n    const isGameOver = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"computed\"])(() => {\n      return squareState.value === _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_STATUS\"].GAME_OVER;\n    });\n\n    return {\n      roundNumber,\n      number,\n      squares,\n      init,\n      squareState,\n      selectSquare,\n      random,\n      showSquares,\n      startGame,\n      isGameOver,\n      difficultLevel,\n      difficultTimeOut,\n    };\n  },\n});\n\n\n//# sourceURL=webpack:///./src/components/Board.vue?./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Square.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Square.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants */ \"./src/constants.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Square\",\n  props: {\n    square: {\n      type: Object,\n      require: true,\n    },\n    squareState: {\n      type: Number,\n      require: false,\n      default: _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_STATUS\"].NONE,\n    },\n  },\n\n  setup(props) {\n    const maybeSetActive = (classes) => {\n      if (\n        props.square.value === _constants__WEBPACK_IMPORTED_MODULE_0__[\"FIELD\"].FIELD &&\n        props.squareState === _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_STATUS\"].PREVIEW\n      ) {\n        return (classes += \"highlight\");\n      }\n      return classes;\n    };\n\n    const getBoardItemClasses = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"computed\"])(() => {\n      let classes = \"square\";\n      switch (props.square.id) {\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL\"].CELL_1:\n          classes += _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL\"].CELL_1 + \" \";\n          break;\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL\"].CELL_2:\n          classes += _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL\"].CELL_2 + \" \";\n          break;\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL\"].CELL_3:\n          classes += _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL\"].CELL_3 + \" \";\n          break;\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL\"].CELL_4:\n          classes += _constants__WEBPACK_IMPORTED_MODULE_0__[\"CELL\"].CELL_4 + \" \";\n          break;\n        default:\n          break;\n      }\n\n      return maybeSetActive(classes);\n    });\n    return { getBoardItemClasses };\n  },\n  methods: {\n    select(id) {\n      if (this.squareState === _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_STATUS\"].STARTED) {\n        this.$emit(\"selectSquare\", id);\n      }\n    },\n  },\n});\n\n\n//# sourceURL=webpack:///./src/components/Square.vue?./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#app {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n#app h1 {\\n    text-align: center;\\n    margin: 30px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".board {\\n  background-color: #fff;\\n  width: 280px;\\n  margin: 0 auto;\\n  text-align: center;\\n}\\n.wrapper {\\n  margin-bottom: 40px;\\n  text-align: center;\\n}\\nbutton {\\n  background-color: #4caf50;\\n  color: #ffffff;\\n  border: none;\\n  padding: 10px 20px;\\n  font-size: 17px;\\n  font-family: Raleway;\\n  cursor: pointer;\\n}\\nbutton:hover {\\n  opacity: 0.8;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Board.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Square.vue?vue&type=style&index=0&id=689728cd&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Square.vue?vue&type=style&index=0&id=689728cd&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".square1, .square1.highlight,\\n.square1:active, .square2, .square2.highlight,\\n.square2:active, .square3, .square3.highlight,\\n.square3:active, .square4, .square4.highlight,\\n.square4:active {\\n  display: inline-block;\\n  position: relative;\\n  width: 140px;\\n  height: 150px;\\n  cursor: pointer;\\n}\\n.square1 {\\n  background: #8e8efa;\\n}\\n.square1.highlight,\\n.square1:active {\\n  background: blue;\\n}\\n.square2 {\\n  background: #f78a8a;\\n}\\n.square2.highlight,\\n.square2:active {\\n  background: red;\\n}\\n.square3 {\\n  background: #8bfc8b;\\n}\\n.square3.highlight,\\n.square3:active {\\n  background: #02d602;\\n}\\n.square4 {\\n  background: #f3f380;\\n}\\n.square4.highlight,\\n.square4:active {\\n  background: yellow;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Square.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"app\" }\nconst _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", { class: \"details\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"h1\", null, \" Simon The Game\")\n], -1 /* HOISTED */)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Board = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"Board\")\n\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", _hoisted_1, [\n    _hoisted_2,\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_Board)\n  ]))\n}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Board.vue?vue&type=template&id=e1ee1034":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Board.vue?vue&type=template&id=e1ee1034 ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"board\" }\nconst _hoisted_2 = { class: \"wrapper\" }\nconst _hoisted_3 = { class: \"levels\" }\nconst _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Легкий \")\nconst _hoisted_5 = { class: \"levels\" }\nconst _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Средний \")\nconst _hoisted_7 = { class: \"levels\" }\nconst _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Сложный \")\nconst _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Раунд: \")\nconst _hoisted_10 = {\n  key: 0,\n  class: \"game-over\"\n}\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Square = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"Square\")\n\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, [\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_1, [\n      (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($setup.squares, (square) => {\n        return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_Square, {\n          squareState: $setup.squareState,\n          square: square,\n          key: square.id,\n          onSelectSquare: _cache[1] || (_cache[1] = $event => ($setup.selectSquare($event)))\n        }, null, 8 /* PROPS */, [\"squareState\", \"square\"]))\n      }), 128 /* KEYED_FRAGMENT */))\n    ]),\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_2, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_3, [\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"input\", {\n          type: \"radio\",\n          value: \"level_1\",\n          \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => ($setup.difficultLevel = $event))\n        }, null, 512 /* NEED_PATCH */), [\n          [vue__WEBPACK_IMPORTED_MODULE_0__[\"vModelRadio\"], $setup.difficultLevel]\n        ]),\n        _hoisted_4\n      ]),\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_5, [\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"input\", {\n          type: \"radio\",\n          value: \"level_2\",\n          \"onUpdate:modelValue\": _cache[3] || (_cache[3] = $event => ($setup.difficultLevel = $event))\n        }, null, 512 /* NEED_PATCH */), [\n          [vue__WEBPACK_IMPORTED_MODULE_0__[\"vModelRadio\"], $setup.difficultLevel]\n        ]),\n        _hoisted_6\n      ]),\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_7, [\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"input\", {\n          type: \"radio\",\n          value: \"level_3\",\n          \"onUpdate:modelValue\": _cache[4] || (_cache[4] = $event => ($setup.difficultLevel = $event))\n        }, null, 512 /* NEED_PATCH */), [\n          [vue__WEBPACK_IMPORTED_MODULE_0__[\"vModelRadio\"], $setup.difficultLevel]\n        ]),\n        _hoisted_8\n      ]),\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"p\", null, [\n        _hoisted_9,\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"strong\", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($setup.roundNumber), 1 /* TEXT */)\n      ]),\n      ($setup.isGameOver)\n        ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"p\", _hoisted_10, \" Вы проиграли после \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($setup.roundNumber) + \" раундов! \", 1 /* TEXT */))\n        : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true),\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"button\", {\n        onClick: _cache[5] || (_cache[5] = (...args) => ($setup.startGame && $setup.startGame(...args)))\n      }, \"Старт\")\n    ])\n  ], 64 /* STABLE_FRAGMENT */))\n}\n\n//# sourceURL=webpack:///./src/components/Board.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Square.vue?vue&type=template&id=689728cd":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Square.vue?vue&type=template&id=689728cd ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"span\", {\n    class: $setup.getBoardItemClasses,\n    onClick: _cache[1] || (_cache[1] = $event => ($options.select($props.square.id)))\n  }, null, 2 /* CLASS */))\n}\n\n//# sourceURL=webpack:///./src/components/Square.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2cce70f6\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"d3e87b0a\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Board.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Square.vue?vue&type=style&index=0&id=689728cd&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Square.vue?vue&type=style&index=0&id=689728cd&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Square.vue?vue&type=style&index=0&id=689728cd&lang=scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Square.vue?vue&type=style&index=0&id=689728cd&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"320e4da8\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Square.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss\");\n\n\n\n\n\n_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/App.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./App.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!******************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--8-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/sounds/1.mp3":
/*!*********************************!*\
  !*** ./src/assets/sounds/1.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"media/1.99e50f7d.mp3\";\n\n//# sourceURL=webpack:///./src/assets/sounds/1.mp3?");

/***/ }),

/***/ "./src/assets/sounds/2.mp3":
/*!*********************************!*\
  !*** ./src/assets/sounds/2.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"media/2.d2c4a2c4.mp3\";\n\n//# sourceURL=webpack:///./src/assets/sounds/2.mp3?");

/***/ }),

/***/ "./src/assets/sounds/3.mp3":
/*!*********************************!*\
  !*** ./src/assets/sounds/3.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"media/3.c1c96b44.mp3\";\n\n//# sourceURL=webpack:///./src/assets/sounds/3.mp3?");

/***/ }),

/***/ "./src/assets/sounds/4.mp3":
/*!*********************************!*\
  !*** ./src/assets/sounds/4.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"media/4.36d5a722.mp3\";\n\n//# sourceURL=webpack:///./src/assets/sounds/4.mp3?");

/***/ }),

/***/ "./src/components/Board.vue":
/*!**********************************!*\
  !*** ./src/components/Board.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_vue_vue_type_template_id_e1ee1034__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.vue?vue&type=template&id=e1ee1034 */ \"./src/components/Board.vue?vue&type=template&id=e1ee1034\");\n/* harmony import */ var _Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.vue?vue&type=script&lang=js */ \"./src/components/Board.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Board_vue_vue_type_style_index_0_id_e1ee1034_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss */ \"./src/components/Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss\");\n\n\n\n\n\n_Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _Board_vue_vue_type_template_id_e1ee1034__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/components/Board.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Board.vue?");

/***/ }),

/***/ "./src/components/Board.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/components/Board.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Board.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Board.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Board_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/Board.vue?");

/***/ }),

/***/ "./src/components/Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss":
/*!*******************************************************************************!*\
  !*** ./src/components/Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Board_vue_vue_type_style_index_0_id_e1ee1034_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Board.vue?vue&type=style&index=0&id=e1ee1034&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Board_vue_vue_type_style_index_0_id_e1ee1034_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Board_vue_vue_type_style_index_0_id_e1ee1034_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Board_vue_vue_type_style_index_0_id_e1ee1034_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Board_vue_vue_type_style_index_0_id_e1ee1034_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Board.vue?");

/***/ }),

/***/ "./src/components/Board.vue?vue&type=template&id=e1ee1034":
/*!****************************************************************!*\
  !*** ./src/components/Board.vue?vue&type=template&id=e1ee1034 ***!
  \****************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Board_vue_vue_type_template_id_e1ee1034__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Board.vue?vue&type=template&id=e1ee1034 */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Board.vue?vue&type=template&id=e1ee1034\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Board_vue_vue_type_template_id_e1ee1034__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Board.vue?");

/***/ }),

/***/ "./src/components/Square.vue":
/*!***********************************!*\
  !*** ./src/components/Square.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Square_vue_vue_type_template_id_689728cd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square.vue?vue&type=template&id=689728cd */ \"./src/components/Square.vue?vue&type=template&id=689728cd\");\n/* harmony import */ var _Square_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Square.vue?vue&type=script&lang=js */ \"./src/components/Square.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Square_vue_vue_type_style_index_0_id_689728cd_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Square.vue?vue&type=style&index=0&id=689728cd&lang=scss */ \"./src/components/Square.vue?vue&type=style&index=0&id=689728cd&lang=scss\");\n\n\n\n\n\n_Square_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _Square_vue_vue_type_template_id_689728cd__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_Square_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/components/Square.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Square_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Square.vue?");

/***/ }),

/***/ "./src/components/Square.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/Square.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Square_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Square.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Square.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Square_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/Square.vue?");

/***/ }),

/***/ "./src/components/Square.vue?vue&type=style&index=0&id=689728cd&lang=scss":
/*!********************************************************************************!*\
  !*** ./src/components/Square.vue?vue&type=style&index=0&id=689728cd&lang=scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Square_vue_vue_type_style_index_0_id_689728cd_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Square.vue?vue&type=style&index=0&id=689728cd&lang=scss */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Square.vue?vue&type=style&index=0&id=689728cd&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Square_vue_vue_type_style_index_0_id_689728cd_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Square_vue_vue_type_style_index_0_id_689728cd_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Square_vue_vue_type_style_index_0_id_689728cd_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Square_vue_vue_type_style_index_0_id_689728cd_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Square.vue?");

/***/ }),

/***/ "./src/components/Square.vue?vue&type=template&id=689728cd":
/*!*****************************************************************!*\
  !*** ./src/components/Square.vue?vue&type=template&id=689728cd ***!
  \*****************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Square_vue_vue_type_template_id_689728cd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Square.vue?vue&type=template&id=689728cd */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Square.vue?vue&type=template&id=689728cd\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Square_vue_vue_type_template_id_689728cd__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Square.vue?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: FIELD, DEFAULT_ROUND_NUMBER, MAX_ROUND_NUMBER, GAME_LEVELS, GAME_STATUS, CELL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FIELD\", function() { return FIELD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEFAULT_ROUND_NUMBER\", function() { return DEFAULT_ROUND_NUMBER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_ROUND_NUMBER\", function() { return MAX_ROUND_NUMBER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_LEVELS\", function() { return GAME_LEVELS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_STATUS\", function() { return GAME_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CELL\", function() { return CELL; });\nconst FIELD = {\r\n    EMPTY: 0,\r\n    FIELD: 1,\r\n}\r\n\r\nconst DEFAULT_ROUND_NUMBER = 1;\r\nconst MAX_ROUND_NUMBER = 4;\r\n\r\nconst GAME_LEVELS = {\r\n    EASY_LEVEL: 1500,\r\n    MIDDLE_LEVEL: 1000,\r\n    HARD_LEVEL: 400,\r\n}\r\n\r\nconst GAME_STATUS = {\r\n    NONE: 0,\r\n    PREVIEW: 1,\r\n    STARTED: 2,\r\n    GAME_WIN: 3,\r\n    GAME_OVER: 4,\r\n}\r\n\r\nconst CELL = {\r\n    CELL_1: 1,\r\n    CELL_2: 2,\r\n    CELL_3: 3,\r\n    CELL_4: 4,\r\n\r\n}\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n\r\n\r\n\r\nconst app = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createApp\"])(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\napp.mount('#app');\r\n\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });