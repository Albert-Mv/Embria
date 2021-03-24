/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/App.scss":
/*!*************************!*\
  !*** ./client/App.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"app\":\"app___jV-Os\"});\n\n//# sourceURL=webpack://embria/./client/App.scss?");

/***/ }),

/***/ "./client/components/Header/Header.scss":
/*!**********************************************!*\
  !*** ./client/components/Header/Header.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"header\":\"header___gSYHz\",\"headerTitle\":\"headerTitle___1R2sy\",\"headerTitleEnd\":\"headerTitleEnd___1Guz2\",\"headerMenu\":\"headerMenu___3QfqJ\",\"btn\":\"btn___N2RWA\"});\n\n//# sourceURL=webpack://embria/./client/components/Header/Header.scss?");

/***/ }),

/***/ "./client/components/VideoViewer/VideoViewer.scss":
/*!********************************************************!*\
  !*** ./client/components/VideoViewer/VideoViewer.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"videoViewer\":\"videoViewer___19cRX\",\"videoFrame\":\"videoFrame___3gVKW\",\"btn\":\"btn___38Kga\"});\n\n//# sourceURL=webpack://embria/./client/components/VideoViewer/VideoViewer.scss?");

/***/ }),

/***/ "./client/pages/Main/Main.scss":
/*!*************************************!*\
  !*** ./client/pages/Main/Main.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"mainContainer\":\"mainContainer___BrD0C\"});\n\n//# sourceURL=webpack://embria/./client/pages/Main/Main.scss?");

/***/ }),

/***/ "./client/App.tsx":
/*!************************!*\
  !*** ./client/App.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar App_scss_1 = __importDefault(__webpack_require__(/*! ./App.scss */ \"./client/App.scss\"));\nvar Main_1 = __importDefault(__webpack_require__(/*! ./pages/Main/Main */ \"./client/pages/Main/Main.tsx\"));\nvar App = function () {\n    return (react_1.default.createElement(\"div\", { className: App_scss_1.default.app },\n        react_1.default.createElement(Main_1.default, null)));\n};\nexports.default = App;\n\n\n//# sourceURL=webpack://embria/./client/App.tsx?");

/***/ }),

/***/ "./client/components/Header/Header.tsx":
/*!*********************************************!*\
  !*** ./client/components/Header/Header.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Header_scss_1 = __importDefault(__webpack_require__(/*! ./Header.scss */ \"./client/components/Header/Header.scss\"));\nvar Header = function (_a) {\n    var setIsActive = _a.setIsActive, setStream = _a.setStream, streams = _a.streams;\n    return (react_1.default.createElement(\"div\", { className: Header_scss_1.default.header },\n        react_1.default.createElement(\"img\", { src: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/004/389/5/logo/medium_1f607c4a007042306fc38030ff7ac15d.png', alt: 'Embria streaming!' }),\n        react_1.default.createElement(\"span\", { className: Header_scss_1.default.headerTitle }, 'Embria'),\n        react_1.default.createElement(\"span\", { className: Header_scss_1.default.headerTitle + \" \" + Header_scss_1.default.headerTitleEnd },\n            \"\\u00A0\",\n            'streaming'),\n        react_1.default.createElement(\"div\", { className: Header_scss_1.default.headerMenu },\n            react_1.default.createElement(\"select\", { onChange: function (e) { return setStream(Number(e.target.value)); } }, streams.map(function (item) { return (react_1.default.createElement(\"option\", { key: item, value: item }, \"\\u041F\\u043E\\u0442\\u043E\\u043A \" + item)); })),\n            react_1.default.createElement(\"button\", { className: Header_scss_1.default.btn, onClick: function () { return setIsActive(true); } }, \"Connect\"),\n            react_1.default.createElement(\"button\", { className: Header_scss_1.default.btn, onClick: function () { return setIsActive(false); } }, \"Disconnect\"))));\n};\nexports.default = Header;\n\n\n//# sourceURL=webpack://embria/./client/components/Header/Header.tsx?");

/***/ }),

/***/ "./client/components/VideoViewer/VideoViewer.tsx":
/*!*******************************************************!*\
  !*** ./client/components/VideoViewer/VideoViewer.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar VideoViewer_scss_1 = __importDefault(__webpack_require__(/*! ./VideoViewer.scss */ \"./client/components/VideoViewer/VideoViewer.scss\"));\nvar VideoViewer = function (_a) {\n    var isActive = _a.isActive;\n    return (react_1.default.createElement(\"div\", { className: VideoViewer_scss_1.default.videoViewer }, isActive && (react_1.default.createElement(\"iframe\", { className: VideoViewer_scss_1.default.videoFrame, src: \"https://www.youtube.com/embed/LHMwHkmhCMc\", frameBorder: \"0\", allow: \"autoplay; encrypted-media\", allowFullScreen: true }))));\n};\nexports.default = VideoViewer;\n//wss://ms-web.arcademy.live:8989\n\n\n//# sourceURL=webpack://embria/./client/components/VideoViewer/VideoViewer.tsx?");

/***/ }),

/***/ "./client/pages/Main/Main.tsx":
/*!************************************!*\
  !*** ./client/pages/Main/Main.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Header_1 = __importDefault(__webpack_require__(/*! ../../components/Header/Header */ \"./client/components/Header/Header.tsx\"));\nvar VideoViewer_1 = __importDefault(__webpack_require__(/*! ../../components/VideoViewer/VideoViewer */ \"./client/components/VideoViewer/VideoViewer.tsx\"));\nvar Main_scss_1 = __importDefault(__webpack_require__(/*! ./Main.scss */ \"./client/pages/Main/Main.scss\"));\nvar Main = function () {\n    var streams = [100, 101];\n    var _a = react_1.useState(false), isActive = _a[0], setIsActive = _a[1];\n    var _b = react_1.useState(streams[0]), stream = _b[0], setStream = _b[1];\n    return (react_1.default.createElement(\"div\", { className: Main_scss_1.default.mainContainer },\n        react_1.default.createElement(Header_1.default, { setIsActive: setIsActive, setStream: setStream, streams: streams }),\n        react_1.default.createElement(VideoViewer_1.default, { isActive: isActive })));\n};\nexports.default = Main;\n\n\n//# sourceURL=webpack://embria/./client/pages/Main/Main.tsx?");

/***/ }),

/***/ "./server/server.tsx":
/*!***************************!*\
  !*** ./server/server.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __importDefault(__webpack_require__(/*! ../client/App */ \"./client/App.tsx\"));\nvar port = 3000;\nvar app = express_1.default();\nvar __dirname = path_1.default.resolve();\napp.use(express_1.default.static(path_1.default.resolve(__dirname, 'build')));\n// app.use(express.json({ extended: true }))\napp.get(\"/\", function (req, res) {\n    var app = server_1.default.renderToString(react_1.default.createElement(App_1.default, null));\n    var indexFile = path_1.default.resolve(__dirname, \"build/index.html\");\n    fs_1.default.readFile(indexFile, \"utf8\", function (err, data) {\n        res.set(\"Content-Type\", \"text/html\");\n        if (err) {\n            console.log(err);\n            return res\n                .status(500)\n                .send(\"Something error happened. Try go to home page or visit us later!\");\n        }\n        return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\" + app + \"</div>\"));\n    });\n});\napp.listen(port, function () {\n    console.log(\"\\u26A1\\uFE0F[server]: App have been started at port \" + port);\n});\n\n\n//# sourceURL=webpack://embria/./server/server.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.tsx");
/******/ 	
/******/ })()
;