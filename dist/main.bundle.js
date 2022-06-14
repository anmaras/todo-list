"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header-style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header-style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header > h1 {\n  padding-left: 6rem;\n  font-weight: 100;\n}\nheader > h1::after {\n  font-weight: 900;\n  content: \"Todo\";\n  color: var(--eerie-black);\n}\n", "",{"version":3,"sources":["webpack://./src/css/header-style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,yBAAyB;AAC3B","sourcesContent":["header > h1 {\n  padding-left: 6rem;\n  font-weight: 100;\n}\nheader > h1::after {\n  font-weight: 900;\n  content: \"Todo\";\n  color: var(--eerie-black);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/left-section/add-project-btn.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/left-section/add-project-btn.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".left-section__projects__add-btn {\n  margin: 0 auto;\n  min-width: 140px;\n  display: none;\n}\n\n/* Make span relative for the after content */\n.left-section__projects__add-btn span {\n  transition: 0.5s;\n  position: relative;\n}\n\n/* Add content  */\n.left-section__projects__add-btn span::after {\n  content: \"\\00bb\";\n  position: absolute;\n  top: 0;\n  right: -18px;\n  transition: 0.5s;\n  opacity: 0;\n}\n\n/* On span hover use padding */\n.left-section__projects__add-btn:hover span {\n  padding-right: 20px;\n}\n\n/* On span hover make the after content visible and change its position */\n.left-section__projects__add-btn:hover span::after {\n  opacity: 1;\n  right: 0px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/left-section/add-project-btn.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;AACf;;AAEA,6CAA6C;AAC7C;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,gBAAgB;EAChB,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,gBAAgB;EAChB,UAAU;AACZ;;AAEA,8BAA8B;AAC9B;EACE,mBAAmB;AACrB;;AAEA,yEAAyE;AACzE;EACE,UAAU;EACV,UAAU;AACZ","sourcesContent":[".left-section__projects__add-btn {\n  margin: 0 auto;\n  min-width: 140px;\n  display: none;\n}\n\n/* Make span relative for the after content */\n.left-section__projects__add-btn span {\n  transition: 0.5s;\n  position: relative;\n}\n\n/* Add content  */\n.left-section__projects__add-btn span::after {\n  content: \"\\00bb\";\n  position: absolute;\n  top: 0;\n  right: -18px;\n  transition: 0.5s;\n  opacity: 0;\n}\n\n/* On span hover use padding */\n.left-section__projects__add-btn:hover span {\n  padding-right: 20px;\n}\n\n/* On span hover make the after content visible and change its position */\n.left-section__projects__add-btn:hover span::after {\n  opacity: 1;\n  right: 0px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/left-section/home-container.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/left-section/home-container.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".left-section__home-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.left-section__home-container > h2 {\n  border-bottom: 2px solid var(--Ghost-white);\n  padding-bottom: 1rem;\n  /* color: var(--Ultramarine-blue); */\n}\n\n/* Select the divs in home container  */\n.left-section__home-container > div {\n  padding: 1rem;\n  border-radius: var(--border-radius-value);\n  position: relative;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 1rem;\n}\n\n.left-section__home-container > div:hover {\n  background-color: var(--Ghost-white);\n\n  cursor: pointer;\n  box-shadow: var(--box-shadows);\n}\n.left-section__home-container > div:hover * {\n  fill: var(--Ultramarine-blue);\n  color: var(--Ultramarine-blue);\n}\n\n.left-section__home-container > div > svg:hover {\n  transition: 0.5s ease-in-out;\n  transform: rotate(360deg);\n}\n", "",{"version":3,"sources":["webpack://./src/css/left-section/home-container.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,2CAA2C;EAC3C,oBAAoB;EACpB,oCAAoC;AACtC;;AAEA,uCAAuC;AACvC;EACE,aAAa;EACb,yCAAyC;EACzC,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,oCAAoC;EACpC,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,oCAAoC;;EAEpC,eAAe;EACf,8BAA8B;AAChC;AACA;EACE,6BAA6B;EAC7B,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;EAC5B,yBAAyB;AAC3B","sourcesContent":[".left-section__home-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.left-section__home-container > h2 {\n  border-bottom: 2px solid var(--Ghost-white);\n  padding-bottom: 1rem;\n  /* color: var(--Ultramarine-blue); */\n}\n\n/* Select the divs in home container  */\n.left-section__home-container > div {\n  padding: 1rem;\n  border-radius: var(--border-radius-value);\n  position: relative;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 1rem;\n}\n\n.left-section__home-container > div:hover {\n  background-color: var(--Ghost-white);\n\n  cursor: pointer;\n  box-shadow: var(--box-shadows);\n}\n.left-section__home-container > div:hover * {\n  fill: var(--Ultramarine-blue);\n  color: var(--Ultramarine-blue);\n}\n\n.left-section__home-container > div > svg:hover {\n  transition: 0.5s ease-in-out;\n  transform: rotate(360deg);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/left-section/main-left-style.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/left-section/main-left-style.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#left-section {\n  flex: 1;\n  max-width: 400px;\n  background-color: var(--White);\n  padding: 2rem;\n  border-radius: var(--bottom-radius-section);\n\n  display: flex;\n  flex-direction: column;\n}\n", "",{"version":3,"sources":["webpack://./src/css/left-section/main-left-style.css"],"names":[],"mappings":"AAAA;EACE,OAAO;EACP,gBAAgB;EAChB,8BAA8B;EAC9B,aAAa;EACb,2CAA2C;;EAE3C,aAAa;EACb,sBAAsB;AACxB","sourcesContent":["#left-section {\n  flex: 1;\n  max-width: 400px;\n  background-color: var(--White);\n  padding: 2rem;\n  border-radius: var(--bottom-radius-section);\n\n  display: flex;\n  flex-direction: column;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/left-section/project-container.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/left-section/project-container.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".left-section__projects {\n  padding: 1rem;\n}\n.left-section__projects > h2 {\n  border-bottom: 2px solid var(--Ghost-white);\n\n  padding-bottom: 1rem;\n}\n\n.left-section__projects__container ul {\n  display: flex;\n  flex-direction: column;\n}\n\n.left-section__projects__container ul > li {\n  margin-top: 1rem;\n  padding: 1rem;\n  border-radius: var(--border-radius-value);\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: auto max-content;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n#projectInput {\n  width: 100%;\n  border: none;\n  padding: 0.8rem 1rem;\n  border-radius: 4px;\n}\n\n#projectInput:focus {\n  outline: 1px solid var(--Ghost-white3);\n}\n\n#garbageIcon {\n  filter: invert(53%) sepia(16%) saturate(326%) hue-rotate(199deg) brightness(90%) contrast(88%);\n}\n\n#garbageIcon:hover {\n  transform: scale(1.2);\n}\n\n.left-section__projects__container ul > li:hover {\n  background-color: var(--Ghost-white);\n  box-shadow: var(--box-shadows);\n  cursor: pointer;\n}\n\n/* Select all p when li is hover */\n.left-section__projects__container ul > li:hover p {\n  color: var(--Ultramarine-blue);\n}\n\n/* Select all svg when li is hover */\n\n.left-section__projects__container ul > li:hover svg {\n  fill: var(--Ultramarine-blue);\n}\n\n.left-section__projects__container ul > li:hover #garbageIcon {\n  filter: invert(38%) sepia(72%) saturate(1087%) hue-rotate(208deg) brightness(93%) contrast(97%);\n}\n", "",{"version":3,"sources":["webpack://./src/css/left-section/project-container.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;AACA;EACE,2CAA2C;;EAE3C,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,uCAAuC;EACvC,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,8FAA8F;AAChG;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;EACpC,8BAA8B;EAC9B,eAAe;AACjB;;AAEA,kCAAkC;AAClC;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;;AAEpC;EACE,6BAA6B;AAC/B;;AAEA;EACE,+FAA+F;AACjG","sourcesContent":[".left-section__projects {\n  padding: 1rem;\n}\n.left-section__projects > h2 {\n  border-bottom: 2px solid var(--Ghost-white);\n\n  padding-bottom: 1rem;\n}\n\n.left-section__projects__container ul {\n  display: flex;\n  flex-direction: column;\n}\n\n.left-section__projects__container ul > li {\n  margin-top: 1rem;\n  padding: 1rem;\n  border-radius: var(--border-radius-value);\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: auto max-content;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n#projectInput {\n  width: 100%;\n  border: none;\n  padding: 0.8rem 1rem;\n  border-radius: 4px;\n}\n\n#projectInput:focus {\n  outline: 1px solid var(--Ghost-white3);\n}\n\n#garbageIcon {\n  filter: invert(53%) sepia(16%) saturate(326%) hue-rotate(199deg) brightness(90%) contrast(88%);\n}\n\n#garbageIcon:hover {\n  transform: scale(1.2);\n}\n\n.left-section__projects__container ul > li:hover {\n  background-color: var(--Ghost-white);\n  box-shadow: var(--box-shadows);\n  cursor: pointer;\n}\n\n/* Select all p when li is hover */\n.left-section__projects__container ul > li:hover p {\n  color: var(--Ultramarine-blue);\n}\n\n/* Select all svg when li is hover */\n\n.left-section__projects__container ul > li:hover svg {\n  fill: var(--Ultramarine-blue);\n}\n\n.left-section__projects__container ul > li:hover #garbageIcon {\n  filter: invert(38%) sepia(72%) saturate(1087%) hue-rotate(208deg) brightness(93%) contrast(97%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/left-section/project-create-form.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/left-section/project-create-form.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Add Task style */\n.main__task-list__add-task_container {\n  width: 100%;\n  display: flex;\n  padding: 1rem 0.8rem;\n  gap: 0.2rem;\n  border-radius: var(--border-radius-value);\n  background-color: var(--White);\n}\n\n.main__task-list__add-task_container:focus-within {\n  border: 1px solid var(--Ghost-white3);\n}\n\n.main__task-list__add-task_container > svg:hover {\n  fill: var(--Ultramarine-blue);\n}\n\n#main__task-list__add-task {\n  width: 100%;\n  border: none;\n  padding: 0rem 0.2rem;\n}\n\n#main__task-list__add-task:focus {\n  outline: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/left-section/project-create-form.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;EACE,WAAW;EACX,aAAa;EACb,oBAAoB;EACpB,WAAW;EACX,yCAAyC;EACzC,8BAA8B;AAChC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf","sourcesContent":["/* Add Task style */\n.main__task-list__add-task_container {\n  width: 100%;\n  display: flex;\n  padding: 1rem 0.8rem;\n  gap: 0.2rem;\n  border-radius: var(--border-radius-value);\n  background-color: var(--White);\n}\n\n.main__task-list__add-task_container:focus-within {\n  border: 1px solid var(--Ghost-white3);\n}\n\n.main__task-list__add-task_container > svg:hover {\n  fill: var(--Ultramarine-blue);\n}\n\n#main__task-list__add-task {\n  width: 100%;\n  border: none;\n  padding: 0rem 0.2rem;\n}\n\n#main__task-list__add-task:focus {\n  outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/main-middle-style.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/main-middle-style.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#middle-section {\n  flex: 5;\n  background-color: var(--Ghost-white);\n  /* inside main border */\n  border-top-left-radius: 35px;\n  padding: 1rem 3rem;\n  position: relative;\n}\n", "",{"version":3,"sources":["webpack://./src/css/middle-section/main-middle-style.css"],"names":[],"mappings":"AAAA;EACE,OAAO;EACP,oCAAoC;EACpC,uBAAuB;EACvB,4BAA4B;EAC5B,kBAAkB;EAClB,kBAAkB;AACpB","sourcesContent":["#middle-section {\n  flex: 5;\n  background-color: var(--Ghost-white);\n  /* inside main border */\n  border-top-left-radius: 35px;\n  padding: 1rem 3rem;\n  position: relative;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/middle-header.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/middle-header.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main__container__header {\n  display: none;\n  position: relative;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main__container__header.visible {\n  display: flex;\n}\n\n.main__container__header h2 {\n  width: 50%;\n  font-size: 2.4rem;\n  padding: 1.6rem 2rem;\n  border-radius: var(--border-radius-value);\n  /* background-color: var(--White); */\n  user-select: none;\n}\n\n.main__header__sort-container {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.8rem;\n  border-radius: var(--border-radius-value);\n  user-select: none;\n}\n\n.main__header__sort-container svg {\n  width: 20px;\n}\n\n.main__header__sort-container:hover {\n  background-color: var(--Ghost-white3);\n  box-shadow: var(--box-shadows);\n  transform: scale(1.02);\n}\n\n.main__header__sort-container:active {\n  transform: translateY(1px);\n}\n\n.main__header__sort-container:hover,\n.main__header__sort-container:hover svg {\n  color: var(--Ultramarine-blue);\n  cursor: pointer;\n  fill: var(--Ultramarine-blue);\n}\n", "",{"version":3,"sources":["webpack://./src/css/middle-section/middle-header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,oBAAoB;EACpB,yCAAyC;EACzC,oCAAoC;EACpC,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,yCAAyC;EACzC,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,qCAAqC;EACrC,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;;EAEE,8BAA8B;EAC9B,eAAe;EACf,6BAA6B;AAC/B","sourcesContent":[".main__container__header {\n  display: none;\n  position: relative;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main__container__header.visible {\n  display: flex;\n}\n\n.main__container__header h2 {\n  width: 50%;\n  font-size: 2.4rem;\n  padding: 1.6rem 2rem;\n  border-radius: var(--border-radius-value);\n  /* background-color: var(--White); */\n  user-select: none;\n}\n\n.main__header__sort-container {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.8rem;\n  border-radius: var(--border-radius-value);\n  user-select: none;\n}\n\n.main__header__sort-container svg {\n  width: 20px;\n}\n\n.main__header__sort-container:hover {\n  background-color: var(--Ghost-white3);\n  box-shadow: var(--box-shadows);\n  transform: scale(1.02);\n}\n\n.main__header__sort-container:active {\n  transform: translateY(1px);\n}\n\n.main__header__sort-container:hover,\n.main__header__sort-container:hover svg {\n  color: var(--Ultramarine-blue);\n  cursor: pointer;\n  fill: var(--Ultramarine-blue);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/middle-sorting-box.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/middle-sorting-box.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main__sorting-order {\n  visibility: hidden;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.2rem;\n  padding: 0.5rem 0.8rem;\n  align-items: center;\n}\n\n.main__sorting-order.visibility {\n  visibility: visible;\n}\n\n.main__sorting-order > svg {\n  padding: 0.1rem;\n  width: 20px;\n}\n\n.main__sorting-order > svg:hover {\n  background-color: var(--battleship-gray);\n}\n\n/* ----------------------------------------- */\n\n.main__header__sort-container__options {\n  width: 200px;\n  padding: 2rem 0rem 1rem;\n  position: absolute;\n  right: 0;\n  top: 50px;\n\n  background-color: var(--White);\n  box-shadow: var(--box-shadows);\n\n  display: none;\n  flex-direction: column;\n  gap: 1.5rem;\n  border-radius: var(--border-radius-value);\n  z-index: 10;\n}\n.main__header__sort-container__options.visible {\n  display: flex;\n}\n\n.main__header__sort-container__options > p {\n  padding-bottom: 2rem;\n  font-weight: 800;\n  text-align: center;\n  border-bottom: 1px solid var(--Ghost-white);\n}\n\n.main__header__sort-container__options > div {\n  padding: 0.8rem 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.main__header__sort-container__options > div p {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.main__header__sort-container__options > div:hover,\n.main__header__sort-container__options > div:hover svg {\n  color: var(--Ultramarine-blue);\n  background-color: var(--Ghost-white);\n\n  fill: var(--Ultramarine-blue);\n}\n", "",{"version":3,"sources":["webpack://./src/css/middle-section/middle-sorting-box.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,wCAAwC;AAC1C;;AAEA,8CAA8C;;AAE9C;EACE,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;;EAET,8BAA8B;EAC9B,8BAA8B;;EAE9B,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,yCAAyC;EACzC,WAAW;AACb;AACA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;EAClB,2CAA2C;AAC7C;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;;EAEE,8BAA8B;EAC9B,oCAAoC;;EAEpC,6BAA6B;AAC/B","sourcesContent":[".main__sorting-order {\n  visibility: hidden;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.2rem;\n  padding: 0.5rem 0.8rem;\n  align-items: center;\n}\n\n.main__sorting-order.visibility {\n  visibility: visible;\n}\n\n.main__sorting-order > svg {\n  padding: 0.1rem;\n  width: 20px;\n}\n\n.main__sorting-order > svg:hover {\n  background-color: var(--battleship-gray);\n}\n\n/* ----------------------------------------- */\n\n.main__header__sort-container__options {\n  width: 200px;\n  padding: 2rem 0rem 1rem;\n  position: absolute;\n  right: 0;\n  top: 50px;\n\n  background-color: var(--White);\n  box-shadow: var(--box-shadows);\n\n  display: none;\n  flex-direction: column;\n  gap: 1.5rem;\n  border-radius: var(--border-radius-value);\n  z-index: 10;\n}\n.main__header__sort-container__options.visible {\n  display: flex;\n}\n\n.main__header__sort-container__options > p {\n  padding-bottom: 2rem;\n  font-weight: 800;\n  text-align: center;\n  border-bottom: 1px solid var(--Ghost-white);\n}\n\n.main__header__sort-container__options > div {\n  padding: 0.8rem 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.main__header__sort-container__options > div p {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.main__header__sort-container__options > div:hover,\n.main__header__sort-container__options > div:hover svg {\n  color: var(--Ultramarine-blue);\n  background-color: var(--Ghost-white);\n\n  fill: var(--Ultramarine-blue);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/middle-todo-list.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/middle-todo-list.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main__task-list__container {\n  width: 100%;\n  /* display: none; */\n}\n\n/* List Style */\n.main__task-list__list {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n\n/* ----------------------------------------------------------- */\n\n/* List item style */\n\n.main__task-list__list-item {\n  padding: 2rem;\n  background-color: var(--White);\n  /* min-height: 260px; */\n\n  border-radius: var(--border-radius-value);\n  border-left: 8px solid var(--battleship-gray);\n\n  display: grid;\n  grid-template-columns: 3fr 330px;\n  grid-template-rows: auto auto 1fr 2fr;\n  column-gap: 0.8rem;\n  row-gap: 1rem;\n}\n.main__task-list__list-item.visible {\n  display: block;\n}\n\n.main__task-list__list-item.low {\n  border-left: 8px solid var(--Carolina-blue);\n}\n.main__task-list__list-item.medium {\n  border-left: 8px solid var(--Maximum-yellow-red);\n}\n.main__task-list__list-item.high {\n  border-left: 8px solid var(--Orange-red-crayola);\n}\n.main__task-list__list-item.none {\n  border-left: 8px solid var(--battleship-gray);\n}\n\n/* ------------------------------------------------------------ */\n\n/* List item header */\n.main__task-list__list-item__title-container {\n  grid-column: 1/-1;\n  grid-row: 1/2;\n  display: flex;\n  align-items: center;\n  padding: 0.4rem;\n}\n\n.main__task-list__list-item__title-container div {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n\n#main__task-list__list-item__title {\n  flex: 1;\n  margin-right: 1rem;\n  padding: 0.4rem;\n  border: none;\n  border-radius: 5px;\n}\n\n/* when checkbox is active */\n.checked {\n  text-decoration: line-through;\n  color: var(--Dark-liver);\n  user-select: none;\n}\n\n#main__task-list__list-item__title:focus {\n  outline: 1px solid var(--Ghost-white3);\n}\n\n.main__task-list__list-item__title-container div:nth-child(1) {\n  flex: 1;\n}\n\n#list-arrow {\n  transition: 0.2s;\n  border-radius: 5px;\n  filter: invert(53%) sepia(16%) saturate(326%) hue-rotate(199deg) brightness(90%) contrast(88%);\n}\n\n#list-arrow:hover {\n  filter: invert(39%) sepia(36%) saturate(2261%) hue-rotate(210deg) brightness(95%) contrast(93%);\n}\n\n#list-arrow.rotate {\n  transform: rotate(180deg);\n}\n\n/* -------------------------------------------------------------- */\n/* List Item Notes */\n.main__task-list__list-item__notes-container {\n  grid-column: 1/2;\n  grid-row: 2/5;\n  display: flex;\n  flex-direction: column;\n}\n\n.main__task-list__list-item__notes-container label {\n  margin-bottom: 0.4rem;\n}\n\n#main__task-list__list-item__textarea {\n  resize: none;\n  height: 100%;\n  width: 100%;\n  background-color: var(--Ghost-white);\n  padding: 1rem;\n  border-radius: var(--border-radius-value);\n  color: var(--Dark-liver);\n  border: none;\n}\n\n#main__task-list__list-item__textarea:focus {\n  outline: 2px solid var(--Ghost-white3);\n}\n\n/* ---------------------------------------------------------------- */\n\n/* List Item Date */\n.main__task-list__list-item__date-container {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.main__task-list__list-item__date-title {\n  margin-bottom: 0.4rem;\n}\n\n.main__task-list__list-item__date-container > div {\n  display: flex;\n}\n\n#today-btn {\n  border-top-left-radius: var(--border-radius-value);\n  border-bottom-left-radius: var(--border-radius-value);\n  border-bottom-right-radius: 0px;\n  border-top-right-radius: 0px;\n}\n\n#tomorrow-btn {\n  border-radius: 0px;\n}\n\n#main__task-list__list-item__date {\n  border: none;\n  background-color: var(--Ultramarine-blue);\n  color: var(--White);\n  padding: 1rem;\n  border-top-right-radius: var(--border-radius-value);\n  border-bottom-right-radius: var(--border-radius-value);\n}\n\n.activeDate {\n  background-color: var(--Paradise-Pink);\n}\n\n#main__task-list__list-item__date.activeDate {\n  background-color: var(--Paradise-Pink);\n}\n\n#main__task-list__list-item__date:hover,\n.main__task-list__list-item__date-container > div > button:hover {\n  background-color: var(--Ultra-Red);\n}\n\n#main__task-list__list-item__date:active,\n.main__task-list__list-item__date-container > div > button:active {\n  transform: translateY(1px);\n}\n\n#main__task-list__list-item__date:focus,\n.main__task-list__list-item__date-container > div > button:focus {\n  outline: none;\n  background-color: var(--Paradise-Pink);\n  position: relative;\n}\n\n/* change the color of date icon */\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  filter: invert(100%);\n}\n\n/* -------------------------------------------------------------------- */\n\n/* List Item Priority */\n.main__task-list__list-item__priority-container {\n  grid-column: 2/3;\n  grid-row: 3/4;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.main__task-list__list-item__priority-container label {\n  margin-bottom: 0.4rem;\n}\n\n#main__task-list__list-item__priority {\n  border: none;\n  background-color: var(--Ultramarine-blue);\n  color: var(--White);\n  border-radius: var(--border-radius-value);\n  outline: none;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n#main__task-list__list-item__priority option {\n  background: var(--Ghost-white);\n  color: var(--Dark-liver);\n}\n\n/* ------------------------------------------------------------ */\n\n/* List Item Btn */\n.main__task-list__list-item__delete-task__btn {\n  justify-self: end;\n  align-self: flex-end;\n}\n\n/* ------------------------------------------------------------------------------ */\n\n/* Add Task style */\n.middle__task-list__add-task_container {\n  width: 100%;\n  padding: 1rem 0.8rem;\n  gap: 0.2rem;\n  border-radius: var(--border-radius-value);\n  background-color: var(--White);\n  display: none;\n}\n\n.middle__task-list__add-task_container.visible {\n  display: flex;\n}\n\n.middle__task-list__add-task_container:focus-within {\n  border: 1px solid var(--Ghost-white3);\n}\n\n.middle__task-list__add-task_container > svg:hover {\n  fill: var(--Ultramarine-blue);\n}\n\n#main__task-list__add-task,\n#todo__task-list__add-todo {\n  width: 100%;\n  border: none;\n  padding: 0rem 0.2rem;\n}\n\n#main__task-list__add-task:focus,\n#todo__task-list__add-todo:focus {\n  outline: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/middle-section/middle-todo-list.css"],"names":[],"mappings":"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","sourcesContent":[".main__task-list__container {\n  width: 100%;\n  /* display: none; */\n}\n\n/* List Style */\n.main__task-list__list {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n\n/* ----------------------------------------------------------- */\n\n/* List item style */\n\n.main__task-list__list-item {\n  padding: 2rem;\n  background-color: var(--White);\n  /* min-height: 260px; */\n\n  border-radius: var(--border-radius-value);\n  border-left: 8px solid var(--battleship-gray);\n\n  display: grid;\n  grid-template-columns: 3fr 330px;\n  grid-template-rows: auto auto 1fr 2fr;\n  column-gap: 0.8rem;\n  row-gap: 1rem;\n}\n.main__task-list__list-item.visible {\n  display: block;\n}\n\n.main__task-list__list-item.low {\n  border-left: 8px solid var(--Carolina-blue);\n}\n.main__task-list__list-item.medium {\n  border-left: 8px solid var(--Maximum-yellow-red);\n}\n.main__task-list__list-item.high {\n  border-left: 8px solid var(--Orange-red-crayola);\n}\n.main__task-list__list-item.none {\n  border-left: 8px solid var(--battleship-gray);\n}\n\n/* ------------------------------------------------------------ */\n\n/* List item header */\n.main__task-list__list-item__title-container {\n  grid-column: 1/-1;\n  grid-row: 1/2;\n  display: flex;\n  align-items: center;\n  padding: 0.4rem;\n}\n\n.main__task-list__list-item__title-container div {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n\n#main__task-list__list-item__title {\n  flex: 1;\n  margin-right: 1rem;\n  padding: 0.4rem;\n  border: none;\n  border-radius: 5px;\n}\n\n/* when checkbox is active */\n.checked {\n  text-decoration: line-through;\n  color: var(--Dark-liver);\n  user-select: none;\n}\n\n#main__task-list__list-item__title:focus {\n  outline: 1px solid var(--Ghost-white3);\n}\n\n.main__task-list__list-item__title-container div:nth-child(1) {\n  flex: 1;\n}\n\n#list-arrow {\n  transition: 0.2s;\n  border-radius: 5px;\n  filter: invert(53%) sepia(16%) saturate(326%) hue-rotate(199deg) brightness(90%) contrast(88%);\n}\n\n#list-arrow:hover {\n  filter: invert(39%) sepia(36%) saturate(2261%) hue-rotate(210deg) brightness(95%) contrast(93%);\n}\n\n#list-arrow.rotate {\n  transform: rotate(180deg);\n}\n\n/* -------------------------------------------------------------- */\n/* List Item Notes */\n.main__task-list__list-item__notes-container {\n  grid-column: 1/2;\n  grid-row: 2/5;\n  display: flex;\n  flex-direction: column;\n}\n\n.main__task-list__list-item__notes-container label {\n  margin-bottom: 0.4rem;\n}\n\n#main__task-list__list-item__textarea {\n  resize: none;\n  height: 100%;\n  width: 100%;\n  background-color: var(--Ghost-white);\n  padding: 1rem;\n  border-radius: var(--border-radius-value);\n  color: var(--Dark-liver);\n  border: none;\n}\n\n#main__task-list__list-item__textarea:focus {\n  outline: 2px solid var(--Ghost-white3);\n}\n\n/* ---------------------------------------------------------------- */\n\n/* List Item Date */\n.main__task-list__list-item__date-container {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.main__task-list__list-item__date-title {\n  margin-bottom: 0.4rem;\n}\n\n.main__task-list__list-item__date-container > div {\n  display: flex;\n}\n\n#today-btn {\n  border-top-left-radius: var(--border-radius-value);\n  border-bottom-left-radius: var(--border-radius-value);\n  border-bottom-right-radius: 0px;\n  border-top-right-radius: 0px;\n}\n\n#tomorrow-btn {\n  border-radius: 0px;\n}\n\n#main__task-list__list-item__date {\n  border: none;\n  background-color: var(--Ultramarine-blue);\n  color: var(--White);\n  padding: 1rem;\n  border-top-right-radius: var(--border-radius-value);\n  border-bottom-right-radius: var(--border-radius-value);\n}\n\n.activeDate {\n  background-color: var(--Paradise-Pink);\n}\n\n#main__task-list__list-item__date.activeDate {\n  background-color: var(--Paradise-Pink);\n}\n\n#main__task-list__list-item__date:hover,\n.main__task-list__list-item__date-container > div > button:hover {\n  background-color: var(--Ultra-Red);\n}\n\n#main__task-list__list-item__date:active,\n.main__task-list__list-item__date-container > div > button:active {\n  transform: translateY(1px);\n}\n\n#main__task-list__list-item__date:focus,\n.main__task-list__list-item__date-container > div > button:focus {\n  outline: none;\n  background-color: var(--Paradise-Pink);\n  position: relative;\n}\n\n/* change the color of date icon */\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  filter: invert(100%);\n}\n\n/* -------------------------------------------------------------------- */\n\n/* List Item Priority */\n.main__task-list__list-item__priority-container {\n  grid-column: 2/3;\n  grid-row: 3/4;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.main__task-list__list-item__priority-container label {\n  margin-bottom: 0.4rem;\n}\n\n#main__task-list__list-item__priority {\n  border: none;\n  background-color: var(--Ultramarine-blue);\n  color: var(--White);\n  border-radius: var(--border-radius-value);\n  outline: none;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n#main__task-list__list-item__priority option {\n  background: var(--Ghost-white);\n  color: var(--Dark-liver);\n}\n\n/* ------------------------------------------------------------ */\n\n/* List Item Btn */\n.main__task-list__list-item__delete-task__btn {\n  justify-self: end;\n  align-self: flex-end;\n}\n\n/* ------------------------------------------------------------------------------ */\n\n/* Add Task style */\n.middle__task-list__add-task_container {\n  width: 100%;\n  padding: 1rem 0.8rem;\n  gap: 0.2rem;\n  border-radius: var(--border-radius-value);\n  background-color: var(--White);\n  display: none;\n}\n\n.middle__task-list__add-task_container.visible {\n  display: flex;\n}\n\n.middle__task-list__add-task_container:focus-within {\n  border: 1px solid var(--Ghost-white3);\n}\n\n.middle__task-list__add-task_container > svg:hover {\n  fill: var(--Ultramarine-blue);\n}\n\n#main__task-list__add-task,\n#todo__task-list__add-todo {\n  width: 100%;\n  border: none;\n  padding: 0rem 0.2rem;\n}\n\n#main__task-list__add-task:focus,\n#todo__task-list__add-todo:focus {\n  outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/noproject-style.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/noproject-style.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".middle-section__noprojects__container {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transition: var(--opacity-transition);\n  text-align: center;\n}\n\n.middle-section__noprojects__container.visible {\n  /* display: flex; */\n}\n\n.middle-section__noprojects__container > svg {\n  height: auto;\n  width: 200px;\n}\n\n.middle-section__noprojects__container h2 {\n}\n", "",{"version":3,"sources":["webpack://./src/css/middle-section/noproject-style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;AACA","sourcesContent":[".middle-section__noprojects__container {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transition: var(--opacity-transition);\n  text-align: center;\n}\n\n.middle-section__noprojects__container.visible {\n  /* display: flex; */\n}\n\n.middle-section__noprojects__container > svg {\n  height: auto;\n  width: 200px;\n}\n\n.middle-section__noprojects__container h2 {\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/shared-style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/shared-style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --rich-black: #0e0e0f;\n  --eerie-black: #212121;\n  --gainsboro: #dbd6dd;\n  --battleship-gray: #898989;\n  --desert-sand: #ebbca1;\n  --white: #ffff;\n  --canary: #fff689;\n  --Verdigris: #28afb0;\n  --Orange-Yellow-Crayola: #f4d35e;\n  --Orange-red-crayola: #ff5757;\n  --Paradise-Pink: #ef476f;\n  --Caribian-Green: #06cfd6;\n  --Ultra-Red: #ff6978;\n  --Baby-Powder: #fffcf9;\n  --Celeste: #b1ede8;\n  --Carolina-blue: #4e9fd1;\n  --Robin-egg-blue: #42c7c8;\n  --Blue-yonder: #4874a8;\n  --Cyber-grape: #5e4170;\n  --Purple-Navy: #595386;\n  --Pistachio: #8ac06d;\n  --Maximum-yellow-red: #ffcc74;\n  --Blue-sapphire: #125d82;\n  --Magnolia: #e5e2eb;\n  --Ghost-white: #f1f4fd;\n  --Ghost-white2: #f7f6fb;\n  --Ghost-white3: #e3e6ed;\n  --Ultramarine-blue: #5468ea;\n  --White: #ffffff;\n  --Dark-liver: #7b7c8e;\n\n  /* ----border--- */\n  --top-radius: 30px 30px 0px 0px;\n  --bottom-radius: 0px 0px 30px 30px;\n  --bottom-radius-section: 0px 0px 0px 30px;\n\n  /* DATE Input border radius */\n  --border-radius-value: 10px;\n\n  /* Box-Shadows */\n  --box-shadows: 1px 1px 2px 1px #ededed;\n\n  /* Opacity transition */\n  --opacity-transition: 0.25s;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  min-height: 100vh;\n  padding: 5rem;\n  background-color: var(--Magnolia);\n  display: grid;\n  font-size: 1.6rem;\n  color: var(--Dark-liver);\n  font-family: Arial, Helvetica, sans-serif;\n  /*   --jb-date-input-value-color: var(--White);\n  --jb-date-input-bgcolor: var(--Ultramarine-blue);\n  --jb-date-input-box-height: max-content;\n  --jb-date-input-margin: 1rem; */\n}\n\nbutton {\n  padding: 1.2rem 2rem;\n  border: none;\n  cursor: pointer;\n  border-radius: var(--border-radius-value);\n  background-color: var(--Ultramarine-blue);\n  color: var(--Ghost-white);\n}\n\nbutton:hover {\n  transform: scaleX(1.025);\n  transition: 0.1s;\n  background-color: var(--Ultra-Red);\n}\n\nbutton:active {\n  transform: translateY(2px);\n  transition: 0.1s;\n  background-color: var(--Paradise-Pink);\n}\n\nbutton,\nlabel,\ninput,\ntextarea,\nselect,\noption {\n  font-size: 1.6rem;\n  font-family: inherit;\n}\n\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nh2,\nh3 {\n  color: var(--eerie-black);\n}\n\nsvg {\n  fill: var(--Dark-liver);\n  height: auto;\n  width: 24px;\n}\n\n#bg {\n  border-radius: 35px;\n  background-color: var(--White);\n  display: grid;\n  grid-template-rows: max-content auto;\n}\n\nheader {\n  background-color: var(--White);\n  padding: 2rem;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n\nmain {\n  display: flex;\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n.visible {\n  display: block;\n}\n\n.flex {\n  display: flex !important;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.active {\n  background-color: var(--Ghost-white);\n}\n\n.opacityOn {\n  opacity: 1 !important;\n}\n\n.opacityOff {\n  opacity: 0 !important;\n}\n", "",{"version":3,"sources":["webpack://./src/css/shared-style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,oBAAoB;EACpB,0BAA0B;EAC1B,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB,oBAAoB;EACpB,gCAAgC;EAChC,6BAA6B;EAC7B,wBAAwB;EACxB,yBAAyB;EACzB,oBAAoB;EACpB,sBAAsB;EACtB,kBAAkB;EAClB,wBAAwB;EACxB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,oBAAoB;EACpB,6BAA6B;EAC7B,wBAAwB;EACxB,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,2BAA2B;EAC3B,gBAAgB;EAChB,qBAAqB;;EAErB,kBAAkB;EAClB,+BAA+B;EAC/B,kCAAkC;EAClC,yCAAyC;;EAEzC,6BAA6B;EAC7B,2BAA2B;;EAE3B,gBAAgB;EAChB,sCAAsC;;EAEtC,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,iCAAiC;EACjC,aAAa;EACb,iBAAiB;EACjB,wBAAwB;EACxB,yCAAyC;EACzC;;;iCAG+B;AACjC;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,yCAAyC;EACzC,yCAAyC;EACzC,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,kCAAkC;AACpC;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,sCAAsC;AACxC;;AAEA;;;;;;EAME,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;;EAEE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,+BAA+B;EAC/B,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[":root {\n  --rich-black: #0e0e0f;\n  --eerie-black: #212121;\n  --gainsboro: #dbd6dd;\n  --battleship-gray: #898989;\n  --desert-sand: #ebbca1;\n  --white: #ffff;\n  --canary: #fff689;\n  --Verdigris: #28afb0;\n  --Orange-Yellow-Crayola: #f4d35e;\n  --Orange-red-crayola: #ff5757;\n  --Paradise-Pink: #ef476f;\n  --Caribian-Green: #06cfd6;\n  --Ultra-Red: #ff6978;\n  --Baby-Powder: #fffcf9;\n  --Celeste: #b1ede8;\n  --Carolina-blue: #4e9fd1;\n  --Robin-egg-blue: #42c7c8;\n  --Blue-yonder: #4874a8;\n  --Cyber-grape: #5e4170;\n  --Purple-Navy: #595386;\n  --Pistachio: #8ac06d;\n  --Maximum-yellow-red: #ffcc74;\n  --Blue-sapphire: #125d82;\n  --Magnolia: #e5e2eb;\n  --Ghost-white: #f1f4fd;\n  --Ghost-white2: #f7f6fb;\n  --Ghost-white3: #e3e6ed;\n  --Ultramarine-blue: #5468ea;\n  --White: #ffffff;\n  --Dark-liver: #7b7c8e;\n\n  /* ----border--- */\n  --top-radius: 30px 30px 0px 0px;\n  --bottom-radius: 0px 0px 30px 30px;\n  --bottom-radius-section: 0px 0px 0px 30px;\n\n  /* DATE Input border radius */\n  --border-radius-value: 10px;\n\n  /* Box-Shadows */\n  --box-shadows: 1px 1px 2px 1px #ededed;\n\n  /* Opacity transition */\n  --opacity-transition: 0.25s;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  min-height: 100vh;\n  padding: 5rem;\n  background-color: var(--Magnolia);\n  display: grid;\n  font-size: 1.6rem;\n  color: var(--Dark-liver);\n  font-family: Arial, Helvetica, sans-serif;\n  /*   --jb-date-input-value-color: var(--White);\n  --jb-date-input-bgcolor: var(--Ultramarine-blue);\n  --jb-date-input-box-height: max-content;\n  --jb-date-input-margin: 1rem; */\n}\n\nbutton {\n  padding: 1.2rem 2rem;\n  border: none;\n  cursor: pointer;\n  border-radius: var(--border-radius-value);\n  background-color: var(--Ultramarine-blue);\n  color: var(--Ghost-white);\n}\n\nbutton:hover {\n  transform: scaleX(1.025);\n  transition: 0.1s;\n  background-color: var(--Ultra-Red);\n}\n\nbutton:active {\n  transform: translateY(2px);\n  transition: 0.1s;\n  background-color: var(--Paradise-Pink);\n}\n\nbutton,\nlabel,\ninput,\ntextarea,\nselect,\noption {\n  font-size: 1.6rem;\n  font-family: inherit;\n}\n\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nh2,\nh3 {\n  color: var(--eerie-black);\n}\n\nsvg {\n  fill: var(--Dark-liver);\n  height: auto;\n  width: 24px;\n}\n\n#bg {\n  border-radius: 35px;\n  background-color: var(--White);\n  display: grid;\n  grid-template-rows: max-content auto;\n}\n\nheader {\n  background-color: var(--White);\n  padding: 2rem;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n\nmain {\n  display: flex;\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n.visible {\n  display: block;\n}\n\n.flex {\n  display: flex !important;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.active {\n  background-color: var(--Ghost-white);\n}\n\n.opacityOn {\n  opacity: 1 !important;\n}\n\n.opacityOff {\n  opacity: 0 !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isTomorrow/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isTomorrow/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */

function isTomorrow(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now(), 1));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfTomorrow/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfTomorrow/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfTomorrow)
/* harmony export */ });
/**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @description
 * Return the start of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/css/header-style.css":
/*!**********************************!*\
  !*** ./src/css/header-style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/left-section/add-project-btn.css":
/*!**************************************************!*\
  !*** ./src/css/left-section/add-project-btn.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_add_project_btn_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./add-project-btn.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/left-section/add-project-btn.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_add_project_btn_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_add_project_btn_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_add_project_btn_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_add_project_btn_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/left-section/home-container.css":
/*!*************************************************!*\
  !*** ./src/css/left-section/home-container.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_container_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./home-container.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/left-section/home-container.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_container_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_container_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/left-section/main-left-style.css":
/*!**************************************************!*\
  !*** ./src/css/left-section/main-left-style.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_left_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main-left-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/left-section/main-left-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_left_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_left_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_left_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_left_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/left-section/project-container.css":
/*!****************************************************!*\
  !*** ./src/css/left-section/project-container.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_container_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./project-container.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/left-section/project-container.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_container_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_project_container_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_project_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_project_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/left-section/project-create-form.css":
/*!******************************************************!*\
  !*** ./src/css/left-section/project-create-form.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_create_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./project-create-form.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/left-section/project-create-form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_create_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_project_create_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_project_create_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_project_create_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/middle-section/main-middle-style.css":
/*!******************************************************!*\
  !*** ./src/css/middle-section/main-middle-style.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_middle_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main-middle-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/main-middle-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_middle_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_middle_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_middle_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_middle_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/middle-section/middle-header.css":
/*!**************************************************!*\
  !*** ./src/css/middle-section/middle-header.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_middle_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./middle-header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/middle-header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_middle_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_middle_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_middle_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_middle_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/middle-section/middle-sorting-box.css":
/*!*******************************************************!*\
  !*** ./src/css/middle-section/middle-sorting-box.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_middle_sorting_box_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./middle-sorting-box.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/middle-sorting-box.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_middle_sorting_box_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_middle_sorting_box_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_middle_sorting_box_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_middle_sorting_box_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/middle-section/middle-todo-list.css":
/*!*****************************************************!*\
  !*** ./src/css/middle-section/middle-todo-list.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_middle_todo_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./middle-todo-list.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/middle-todo-list.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_middle_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_middle_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_middle_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_middle_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/middle-section/noproject-style.css":
/*!****************************************************!*\
  !*** ./src/css/middle-section/noproject-style.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_noproject_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./noproject-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/middle-section/noproject-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_noproject_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_noproject_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_noproject_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_noproject_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/shared-style.css":
/*!**********************************!*\
  !*** ./src/css/shared-style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shared_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./shared-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/shared-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shared_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shared_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_shared_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_shared_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_shared_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/shared-style.css */ "./src/css/shared-style.css");
/* harmony import */ var _css_middle_section_main_middle_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/middle-section/main-middle-style.css */ "./src/css/middle-section/main-middle-style.css");
/* harmony import */ var _css_left_section_main_left_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/left-section/main-left-style.css */ "./src/css/left-section/main-left-style.css");
/* harmony import */ var _css_left_section_add_project_btn_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/left-section/add-project-btn.css */ "./src/css/left-section/add-project-btn.css");
/* harmony import */ var _css_left_section_home_container_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/left-section/home-container.css */ "./src/css/left-section/home-container.css");
/* harmony import */ var _css_left_section_project_container_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/left-section/project-container.css */ "./src/css/left-section/project-container.css");
/* harmony import */ var _css_left_section_project_create_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/left-section/project-create-form.css */ "./src/css/left-section/project-create-form.css");
/* harmony import */ var _css_middle_section_middle_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/middle-section/middle-header.css */ "./src/css/middle-section/middle-header.css");
/* harmony import */ var _css_middle_section_middle_sorting_box_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/middle-section/middle-sorting-box.css */ "./src/css/middle-section/middle-sorting-box.css");
/* harmony import */ var _css_middle_section_middle_todo_list_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/middle-section/middle-todo-list.css */ "./src/css/middle-section/middle-todo-list.css");
/* harmony import */ var _css_middle_section_noproject_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css/middle-section/noproject-style.css */ "./src/css/middle-section/noproject-style.css");
/* harmony import */ var _css_header_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/header-style.css */ "./src/css/header-style.css");
/* harmony import */ var _js_modules_event_listeners__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js-modules/event-listeners */ "./src/js-modules/event-listeners.js");















/***/ }),

/***/ "./src/js-modules/arrays.js":
/*!**********************************!*\
  !*** ./src/js-modules/arrays.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "todoArray": () => (/* binding */ todoArray)
/* harmony export */ });
const projectArray = [];

const todoArray = [];




/***/ }),

/***/ "./src/js-modules/dom-elements.js":
/*!****************************************!*\
  !*** ./src/js-modules/dom-elements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoTaskInputContainer": () => (/* binding */ addTodoTaskInputContainer),
/* harmony export */   "homeListDomeElement": () => (/* binding */ homeListDomeElement),
/* harmony export */   "middleSection": () => (/* binding */ middleSection),
/* harmony export */   "notProjectYetContainer": () => (/* binding */ notProjectYetContainer),
/* harmony export */   "projectInputDomElement": () => (/* binding */ projectInputDomElement),
/* harmony export */   "projectInputValue": () => (/* binding */ projectInputValue),
/* harmony export */   "projectListDomElement": () => (/* binding */ projectListDomElement),
/* harmony export */   "projectListItem": () => (/* binding */ projectListItem),
/* harmony export */   "shortingArrow": () => (/* binding */ shortingArrow),
/* harmony export */   "sortButton": () => (/* binding */ sortButton),
/* harmony export */   "todoHeaderContainer": () => (/* binding */ todoHeaderContainer),
/* harmony export */   "todoHeaderTitle": () => (/* binding */ todoHeaderTitle),
/* harmony export */   "todoList": () => (/* binding */ todoList),
/* harmony export */   "todoSortOptionsContainer": () => (/* binding */ todoSortOptionsContainer),
/* harmony export */   "todoSortOrder": () => (/* binding */ todoSortOrder)
/* harmony export */ });
const projectInputDomElement = document.querySelector("#main__task-list__add-task");
const projectListDomElement = document.querySelector(".left-section__projects__container ul");
const projectListItem = document.querySelectorAll(".project-list__item");
const projectInputValue = document.querySelector("#project");
const homeListDomeElement = document.querySelector(".left-section__home-container");
const notProjectYetContainer = document.querySelector(".middle-section__noprojects__container");
const middleSection = document.getElementById("middle-section");
const todoHeaderContainer = document.querySelector(".main__container__header");
const todoHeaderTitle = document.querySelector(".main__container__header h2");
const todoSortOptionsContainer = document.querySelector(".main__header__sort-container__options");
const todoSortOrder = document.querySelector(".main__sorting-order");
const addTodoTaskInputContainer = document.querySelector(".middle__task-list__add-task_container");
const todoList = document.querySelector(".main__task-list__list");
const sortButton = document.querySelector(".main__header__sort-container");
const shortingArrow = document.querySelector(".main__sorting-order svg");




/***/ }),

/***/ "./src/js-modules/event-listeners.js":
/*!*******************************************!*\
  !*** ./src/js-modules/event-listeners.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ "./src/js-modules/dom-elements.js");
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities-functions */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _mainEventFunctions_window_Load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainEventFunctions/window-Load */ "./src/js-modules/mainEventFunctions/window-Load.js");
/* harmony import */ var _mainEventFunctions_home_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainEventFunctions/home-Section */ "./src/js-modules/mainEventFunctions/home-Section.js");
/* harmony import */ var _mainEventFunctions_project_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainEventFunctions/project-Create */ "./src/js-modules/mainEventFunctions/project-Create.js");
/* harmony import */ var _mainEventFunctions_project_Item_Functionality__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainEventFunctions/project-Item-Functionality */ "./src/js-modules/mainEventFunctions/project-Item-Functionality.js");
/* harmony import */ var _mainEventFunctions_project_Rename__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainEventFunctions/project-Rename */ "./src/js-modules/mainEventFunctions/project-Rename.js");
/* harmony import */ var _mainEventFunctions_todo_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainEventFunctions/todo-create */ "./src/js-modules/mainEventFunctions/todo-create.js");
/* harmony import */ var _mainEventFunctions_todo_item_functionality__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainEventFunctions/todo-item-functionality */ "./src/js-modules/mainEventFunctions/todo-item-functionality.js");
/* harmony import */ var _mainEventFunctions_sort_todos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainEventFunctions/sort-todos */ "./src/js-modules/mainEventFunctions/sort-todos.js");











window.addEventListener("load", _mainEventFunctions_window_Load__WEBPACK_IMPORTED_MODULE_2__.localStorageHandler);
// home.addEventListener("click", homeSectionHandler);
_dom_elements__WEBPACK_IMPORTED_MODULE_0__.homeListDomeElement.addEventListener("click", (e) => {
  const { target, titleText, targetData, byDateObjectProperty } = _mainEventFunctions_home_Section__WEBPACK_IMPORTED_MODULE_3__.createDataObject(e);
  // if (!localStorage.length || !targetData) return;

  if (byDateObjectProperty.length) {
    _mainEventFunctions_home_Section__WEBPACK_IMPORTED_MODULE_3__.highlightHomeTabs(target);

    _mainEventFunctions_home_Section__WEBPACK_IMPORTED_MODULE_3__.setAttributeToSortButton(targetData);

    _mainEventFunctions_home_Section__WEBPACK_IMPORTED_MODULE_3__.changeTodoContainerTitle(titleText);

    _mainEventFunctions_home_Section__WEBPACK_IMPORTED_MODULE_3__.makeHeaderVisible();

    _mainEventFunctions_home_Section__WEBPACK_IMPORTED_MODULE_3__.makeTodoInputHidden();

    _mainEventFunctions_home_Section__WEBPACK_IMPORTED_MODULE_3__.deleteTodoDomList();

    _mainEventFunctions_home_Section__WEBPACK_IMPORTED_MODULE_3__.renderTasksByDate(byDateObjectProperty);
  }
});

_dom_elements__WEBPACK_IMPORTED_MODULE_0__.projectInputDomElement.addEventListener("keypress", _mainEventFunctions_project_Create__WEBPACK_IMPORTED_MODULE_4__.newProjectHandler);
_dom_elements__WEBPACK_IMPORTED_MODULE_0__.projectListDomElement.addEventListener("click", _mainEventFunctions_project_Item_Functionality__WEBPACK_IMPORTED_MODULE_5__.projectSectionSelectionHandler);
_dom_elements__WEBPACK_IMPORTED_MODULE_0__.projectListDomElement.addEventListener("keypress", _mainEventFunctions_project_Rename__WEBPACK_IMPORTED_MODULE_6__.renameProjectListItem);
_dom_elements__WEBPACK_IMPORTED_MODULE_0__.addTodoTaskInputContainer.addEventListener("keypress", _mainEventFunctions_todo_create__WEBPACK_IMPORTED_MODULE_7__.createTodoHandler);
_dom_elements__WEBPACK_IMPORTED_MODULE_0__.todoList.addEventListener("click", _mainEventFunctions_todo_item_functionality__WEBPACK_IMPORTED_MODULE_8__.todoSectionHandler);
_dom_elements__WEBPACK_IMPORTED_MODULE_0__.todoList.addEventListener("keypress", _mainEventFunctions_todo_item_functionality__WEBPACK_IMPORTED_MODULE_8__.todoRenameHandler);
_dom_elements__WEBPACK_IMPORTED_MODULE_0__.todoList.addEventListener("keypress", _mainEventFunctions_todo_item_functionality__WEBPACK_IMPORTED_MODULE_8__.todoTextAreaHandler);
_dom_elements__WEBPACK_IMPORTED_MODULE_0__.sortButton.addEventListener("click", _utilities_functions__WEBPACK_IMPORTED_MODULE_1__.toggleSortingOptionVisibility);
_dom_elements__WEBPACK_IMPORTED_MODULE_0__.todoSortOptionsContainer.addEventListener("click", _mainEventFunctions_sort_todos__WEBPACK_IMPORTED_MODULE_9__.sortTodoHandler);


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/home-Section.js":
/*!***********************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/home-Section.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTodoContainerTitle": () => (/* binding */ changeTodoContainerTitle),
/* harmony export */   "createDataObject": () => (/* binding */ createDataObject),
/* harmony export */   "deleteTodoDomList": () => (/* binding */ deleteTodoDomList),
/* harmony export */   "highlightHomeTabs": () => (/* binding */ highlightHomeTabs),
/* harmony export */   "makeHeaderVisible": () => (/* binding */ makeHeaderVisible),
/* harmony export */   "makeTodoInputHidden": () => (/* binding */ makeTodoInputHidden),
/* harmony export */   "renderTasksByDate": () => (/* binding */ renderTasksByDate),
/* harmony export */   "setAttributeToSortButton": () => (/* binding */ setAttributeToSortButton)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/render-project.js */ "./src/js-modules/render-project.js");
/* harmony import */ var _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js-modules/dom-elements.js */ "./src/js-modules/dom-elements.js");




// function homeSectionFunctionality(dataSet, text, projectProperty, homeSpecificDiv) {
// utilities.highlight(homeSpecificDiv);
// domElement.sortButton.setAttribute("data-mode", `${dataSet}`);
// domElement.todoHeaderTitle.textContent = text;
// domElement.todoHeaderContainer.classList.add("visible");
// domElement.addTodoTaskInputContainer.classList.remove("visible");
// domElement.todoList.replaceChildren();
// }

function setAttributeToSortButton(dataSet) {
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.sortButton.setAttribute("data-mode", `${dataSet}`);
}

function changeTodoContainerTitle(text) {
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoHeaderTitle.textContent = text;
}

function makeHeaderVisible() {
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoHeaderContainer.classList.add("visible");
}
function makeTodoInputHidden() {
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.addTodoTaskInputContainer.classList.remove("visible");
}

function deleteTodoDomList() {
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoList.replaceChildren();
}

function highlightHomeTabs(homeSpecificDiv) {
  _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.highlight(homeSpecificDiv);
}

function renderTasksByDate(projectProperty) {
  projectProperty.forEach((item) => _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectTodoListItem.call(item));
}

function createDataObject(e) {
  const target = e.target.closest("div");
  const titleText = target.children[1].textContent;
  const targetData = e.target.closest("div").dataset.array;
  const { [targetData]: byDateObjectProperty } = _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.getTodoByDate();

  // if (!localStorage.length || !targetData) return;

  // if (byDateObjectProperty.length) {
  //   homeSectionFunctionality(targetData, titleText, byDateObjectProperty, target);
  // }

  return { target, titleText, targetData, byDateObjectProperty };
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/project-Create.js":
/*!*************************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/project-Create.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectHandler": () => (/* binding */ newProjectHandler)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/render-project.js */ "./src/js-modules/render-project.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");
/* harmony import */ var _project_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-class */ "./src/js-modules/project-class.js");
/* harmony import */ var _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/js-modules/dom-elements.js */ "./src/js-modules/dom-elements.js");






function newProjectHandler(e) {
  const projectName = e.target.value;
  const projectId = _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.randomNumber();
  const project = new _project_class__WEBPACK_IMPORTED_MODULE_3__.Project(projectName, projectId);

  if (e.key === "Enter" && _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__.projectInputDomElement.value !== "") {
    _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_2__.projectArray.push(project);

    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_2__.projectArray);

    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.clearInputValue();

    _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectListItem.call(project);
  }
  _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.toggleNotProjectScreen();
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/project-Delete.js":
/*!*************************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/project-Delete.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProjectListItem": () => (/* binding */ deleteProjectListItem)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");
/* harmony import */ var _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js-modules/dom-elements.js */ "./src/js-modules/dom-elements.js");




function hideDomeElements() {
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoHeaderContainer.classList.remove("visible");
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.addTodoTaskInputContainer.classList.remove("visible");
}

function clearHeaderTitleText() {
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoHeaderTitle.textContent = "";
}

function deleteFromArrayAndDom(projectSelection, list, index) {
  _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.deleteFromArray(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray, index);
  list.removeChild(projectSelection);
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoList.replaceChildren();
}

function deleteProjectListItem(projectSelection, list, index) {
  hideDomeElements();

  clearHeaderTitleText();

  deleteFromArrayAndDom(projectSelection, list, index);

  _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray);

  _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoByDateTotals();

  if (!_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.length) {
    _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoList.replaceChildren();
    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.clearLocalStorage();
    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.toggleNotProjectScreen();
  }
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/project-Item-Functionality.js":
/*!*************************************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/project-Item-Functionality.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectSectionSelectionHandler": () => (/* binding */ projectSectionSelectionHandler)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");
/* harmony import */ var _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js-modules/dom-elements.js */ "./src/js-modules/dom-elements.js");
/* harmony import */ var _src_js_modules_mainEventFunctions_project_Delete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/js-modules/mainEventFunctions/project-Delete.js */ "./src/js-modules/mainEventFunctions/project-Delete.js");
/* harmony import */ var _src_js_modules_mainEventFunctions_project_Render_Todo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/js-modules/mainEventFunctions/project-Render-Todo.js */ "./src/js-modules/mainEventFunctions/project-Render-Todo.js");







function createTodoDataSet() {
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoHeaderContainer.setAttribute("data-project-id", this.id);
  const todoInput = _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.addTodoTaskInputContainer.lastElementChild;
  todoInput.setAttribute("data-project-Todo-ID", this.id);
}

function projectSectionSelectionHandler(e) {
  const projectDomItem = e.target.closest("li");
  if (!projectDomItem) return;
  const projectList = projectDomItem.parentElement;
  const projectListItemId = e.target.parentElement.dataset.projectId || projectDomItem.dataset.projectId;
  const projectIndex = _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.getIndex(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray, projectListItemId);
  const specificProject = _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[projectIndex];

  _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.highlight(projectDomItem);

  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoHeaderTitle.textContent = specificProject.name;

  createTodoDataSet.call(specificProject);

  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoHeaderContainer.classList.add("visible");

  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.addTodoTaskInputContainer.classList.add("visible");

  (0,_src_js_modules_mainEventFunctions_project_Render_Todo_js__WEBPACK_IMPORTED_MODULE_4__.renderTodoWhileSwitchingProjects)(specificProject);

  if (e.target.id === "garbageIcon") {
    (0,_src_js_modules_mainEventFunctions_project_Delete_js__WEBPACK_IMPORTED_MODULE_3__.deleteProjectListItem)(projectDomItem, projectList, projectIndex);
  }
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/project-Rename.js":
/*!*************************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/project-Rename.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renameProjectListItem": () => (/* binding */ renameProjectListItem)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");
/* harmony import */ var _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js-modules/dom-elements.js */ "./src/js-modules/dom-elements.js");




function renameProjectListItem(e) {
  const newText = e.target.value;
  const projectId = e.target.parentElement.dataset.projectId;

  if (e.key === "Enter" && newText) {
    _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.filter((project) => project.id === Number(projectId))
      .map((project) => {
        project.name = newText;
        _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoHeaderTitle.textContent = project.name;
        _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray);
        return project;
      });
  }
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/project-Render-Todo.js":
/*!******************************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/project-Render-Todo.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTodoWhileSwitchingProjects": () => (/* binding */ renderTodoWhileSwitchingProjects)
/* harmony export */ });
/* harmony import */ var _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/dom-elements.js */ "./src/js-modules/dom-elements.js");
/* harmony import */ var _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/render-project.js */ "./src/js-modules/render-project.js");



function renderTodoWhileSwitchingProjects(project) {
  /*Add attribute to sort button while click on project items so the sorting work for them*/
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.sortButton.setAttribute("data-mode", false);

  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.todoList.replaceChildren();

  project.todoList.forEach((todo) => {
    _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectTodoListItem.call(todo);
  });
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/sort-todos.js":
/*!*********************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/sort-todos.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortTodoHandler": () => (/* binding */ sortTodoHandler)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");
/* harmony import */ var _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js-modules/dom-elements.js */ "./src/js-modules/dom-elements.js");
/* harmony import */ var _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/js-modules/render-project.js */ "./src/js-modules/render-project.js");





const sortSwitch = _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.conditionSwitcher();

/* Sorting function */
function compare(property, condition) {
  /* if it is for priority sorting */
  if (property === "priority") {
    if (condition) {
      return function (a, b) {
        return changeToNum(a[property]) < changeToNum(b[property])
          ? -1
          : changeToNum(a[property]) > changeToNum(b[property])
          ? 1
          : 0;
      };
    } else {
      return function (a, b) {
        return changeToNum(a[property]) > changeToNum(b[property])
          ? -1
          : changeToNum(a[property]) < changeToNum(b[property])
          ? 1
          : 0;
      };
    }
  }
  /* Sort for letters and numbers */
  if (condition) {
    return function (a, b) {
      return a[property].toLowerCase() < b[property].toLowerCase()
        ? -1
        : a[property].toLowerCase() > b[property].toLowerCase()
        ? 1
        : 0;
    };
  } else {
    return function (a, b) {
      return a[property].toLowerCase() > b[property].toLowerCase()
        ? -1
        : a[property].toLowerCase() < b[property].toLowerCase()
        ? 1
        : 0;
    };
  }
}

function sortTodo(input, project, property, condition) {
  const { [input]: byDateObjectProperty = project } = _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.getTodoByDate();

  return byDateObjectProperty.sort(compare(property, condition));
}

function renderSortedArray(sortedArray) {
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoList.innerHTML = "";
  sortedArray.forEach((todo) => {
    _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProjectTodoListItem.call(todo);
  });
}

/* function that change the names of sorting options to match the object property names */
function sortOptionToPropertyName(text) {
  return text === "Priority" ? "priority" : text === "Alphabetically" ? "todoName" : text === "Due Date" ? "date" : "";
}

/* Change priority options to numbers it get sorted by numbers  */
function changeToNum(input) {
  let num;
  if (input === "low") {
    num = 3;
    return num;
  }
  if (input === "medium") {
    num = 2;
    return num;
  }
  if (input === "high") {
    num = 1;
    return num;
  }
  if (!input || input === "no") {
    num = 4;
    return num;
  }
}

function sortOptionContainerVisibility(button) {
  _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoSortOptionsContainer.classList.toggle("visible", !button);
}

function sortTodoHandler(e) {
  const sortByButton = e.target.closest("div div > p");
  if (!sortByButton) return;
  /* check id if its NaN at load, if it is NaN load the id of the first project in the list
  so it wont return error */
  const projectId = +_src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoHeaderContainer.dataset.projectId || _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[0].id;
  const projectIndex = _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.getIndex(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray, projectId);
  const todoArray = _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[projectIndex].todoList;
  const todoProperty = sortOptionToPropertyName(sortByButton.textContent);
  const homeData = _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.sortButton.getAttribute("data-mode");
  const sortedArray = sortTodo(homeData, todoArray, todoProperty, sortSwitch());

  sortOptionContainerVisibility(sortByButton);

  renderSortedArray(sortedArray);
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/todo-Dates.js":
/*!*********************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/todo-Dates.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodoDates": () => (/* binding */ getTodoDates)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfTomorrow/index.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");
/* harmony import */ var _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js-modules/dom-elements.js */ "./src/js-modules/dom-elements.js");




const TODAY = "today";
const TOMORROW = "tomorrow";
const SPECIFIC = "specific";

function getTodoDates(dateBtnDataSet, todoId, todo, calendarDisplay) {
  if (dateBtnDataSet.date === TODAY || dateBtnDataSet.date === TOMORROW || dateBtnDataSet.date === SPECIFIC) {
    setObjectInstanceDateProperty.call(todo, dateBtnDataSet.date, todoId);

    /* That way when user select from day picker dayRef and todo object update instant
       otherwise need dblclick (need to refactor that somehow) */
    _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoList.addEventListener("change", () => {
      const dateReference = document.querySelector(`[data-reference-id="${todoId}"]`);
      // if (!dateReference) return;
      const { date } = todo;
      dateReference.textContent = date;
      setObjectInstanceDateProperty.call(todo, dateBtnDataSet.date, todoId);
      _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoByDateTotals();
    });

    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoByDateTotals();

    dateButtonActionFocus(todoId, TODAY, TOMORROW, SPECIFIC, dateBtnDataSet);

    resetDateInputDisplay(dateBtnDataSet, calendarDisplay);
  }
}

/* Set the date in object depends the button */
function setObjectInstanceDateProperty(data, id) {
  const specificDate = document.querySelector(`[data-specific-id="${id}"]`);
  const dateReference = document.querySelector(`[data-reference-id="${id}"]`);

  // if (!specificDate) return;
  if (data === "today") {
    this.dateId = data;
    this.date = date_fns__WEBPACK_IMPORTED_MODULE_3__["default"](new Date(), "yyyy-MM-dd");
  }
  if (data === "tomorrow") {
    this.dateId = data;
    this.date = date_fns__WEBPACK_IMPORTED_MODULE_3__["default"](date_fns__WEBPACK_IMPORTED_MODULE_4__["default"](), "yyyy-MM-dd");
  }
  if (data === "specific") {
    this.dateId = data;
    this.date = specificDate.value;
  }

  dateReference.textContent = `Due Date ${this.date}`;

  _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray);
}

/* Class added for buttons to stay stick to action mode after date select */
function dateButtonActionFocus(todoId, today, tomorrow, specific, dateBtnDataSet) {
  const todayBtn = document.querySelector(`[data-today-id="${todoId}"]`);
  const tomorrowBtn = document.querySelector(`[data-tomorrow-id="${todoId}"]`);
  const specificDateBtn = document.querySelector(`[data-specific-id ="${todoId}"]`);
  todayBtn.classList.toggle("activeDate", dateBtnDataSet.date === today);

  tomorrowBtn.classList.toggle("activeDate", dateBtnDataSet.date === tomorrow);
  specificDateBtn.classList.toggle("activeDate", dateBtnDataSet.date === specific);
}

/* When the user select today or tomorrow the date at date input display reset */
function resetDateInputDisplay(dateBtnDataSet, calendarDisplay) {
  if (dateBtnDataSet.date === TODAY || dateBtnDataSet.date === TOMORROW) {
    calendarDisplay.value = "";
  }
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/todo-checkbox.js":
/*!************************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/todo-checkbox.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoCheckBoxFunctionality": () => (/* binding */ todoCheckBoxFunctionality)
/* harmony export */ });
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");



function todoCheckBoxFunctionality(e, todoTitle, isChecked, todoArray, todoIndex) {
  if (e.target.type === "checkbox") {
    todoTitle.classList.toggle("checked", isChecked);
  }

  if (isChecked && e.target.type === "checkbox") {
    todoArray[todoIndex].checkbox = "checked";
    todoTitle.disabled = isChecked;
    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_0__.projectArray);
  }
  if (!isChecked && e.target.type === "checkbox") {
    todoArray[todoIndex].checkbox = "";
    todoTitle.disabled = isChecked;
    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_0__.projectArray);
  }
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/todo-create.js":
/*!**********************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/todo-create.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodoHandler": () => (/* binding */ createTodoHandler)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");
/* harmony import */ var _src_js_modules_project_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js-modules/project-class.js */ "./src/js-modules/project-class.js");
/* harmony import */ var _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/js-modules/render-project.js */ "./src/js-modules/render-project.js");





function createTodoHandler(e) {
  const target = e.target.closest("input");
  const inputText = target.value;
  const projectId = e.target.dataset.projectTodoId;
  const objectIndex = _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.getIndex(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray, projectId);

  if (e.key === "Enter" && target.value !== "") {
    /* Create new todo */
    const todoObject = new _src_js_modules_project_class_js__WEBPACK_IMPORTED_MODULE_2__.Todo(inputText, projectId, _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.randomNumber());

    /* Push the todo to project array todo list */
    _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[objectIndex].todoList.push(todoObject);

    /* Save todo in local storage */
    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray);

    /* Render the todo */
    _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_3__.renderProjectTodoListItem.call(todoObject);

    /* Clear the todo input */
    target.value = "";

    /* Update the home section numbers */
    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoByDateTotals();
  }
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/todo-delete.js":
/*!**********************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/todo-delete.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");
/* harmony import */ var _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js-modules/dom-elements.js */ "./src/js-modules/dom-elements.js");




function deleteTodo(targetId, projectIndex, todoIndex, target) {
  if (targetId === "delete") {
    /* Delete todo from project property array */
    _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[projectIndex].todoList.splice(todoIndex, 1);
    /* delete it from dom */
    _src_js_modules_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.todoList.removeChild(target);
    /* Update json */
    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray);
    /* Update home section numbers */
    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoByDateTotals();
  }
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/todo-item-functionality.js":
/*!**********************************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/todo-item-functionality.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoRenameHandler": () => (/* binding */ todoRenameHandler),
/* harmony export */   "todoSectionHandler": () => (/* binding */ todoSectionHandler),
/* harmony export */   "todoTextAreaHandler": () => (/* binding */ todoTextAreaHandler)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");
/* harmony import */ var _src_js_modules_project_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js-modules/project-class.js */ "./src/js-modules/project-class.js");
/* harmony import */ var _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/js-modules/render-project.js */ "./src/js-modules/render-project.js");
/* harmony import */ var _todo_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-delete */ "./src/js-modules/mainEventFunctions/todo-delete.js");
/* harmony import */ var _todo_window_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-window-toggle */ "./src/js-modules/mainEventFunctions/todo-window-toggle.js");
/* harmony import */ var _todo_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-checkbox */ "./src/js-modules/mainEventFunctions/todo-checkbox.js");
/* harmony import */ var _todo_Dates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo-Dates */ "./src/js-modules/mainEventFunctions/todo-Dates.js");
/* harmony import */ var _todo_priority__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo-priority */ "./src/js-modules/mainEventFunctions/todo-priority.js");
/* harmony import */ var _todo_textArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo-textArea */ "./src/js-modules/mainEventFunctions/todo-textArea.js");
/* harmony import */ var _todo_rename__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo-rename */ "./src/js-modules/mainEventFunctions/todo-rename.js");












function todoSectionHandler(e) {
  const target = e.target.closest("li");
  if (!target) return;
  const todoId = target.dataset.todoId;
  const projectId = target.dataset.projectid;
  const projectIndex = _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.getIndex(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray, projectId);
  const todoArray = _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[projectIndex].todoList;

  const todoIndex = _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.getTodoListIndex(todoArray, todoId);
  const project = _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[projectIndex];
  const dateBtnDataSet = e.target.dataset;
  const targetId = e.target.id;
  const isChecked = e.target.checked;
  const todoTitle = e.target.parentElement.lastElementChild;
  const priority = document.querySelector(`[data-select-id ="${todoId}"]`);
  const todo = todoArray[todoIndex];
  const calendarDisplay = document.getElementById("main__task-list__list-item__date");
  // if (!projectArray.includes(project)) return;

  (0,_todo_window_toggle__WEBPACK_IMPORTED_MODULE_5__.todoWindowToggleSize)(targetId, target, todoId);

  (0,_todo_delete__WEBPACK_IMPORTED_MODULE_4__.deleteTodo)(targetId, projectIndex, todoIndex, target);

  (0,_todo_checkbox__WEBPACK_IMPORTED_MODULE_6__.todoCheckBoxFunctionality)(e, todoTitle, isChecked, todoArray, todoIndex);

  (0,_todo_Dates__WEBPACK_IMPORTED_MODULE_7__.getTodoDates)(dateBtnDataSet, todoId, todo, calendarDisplay);

  (0,_todo_priority__WEBPACK_IMPORTED_MODULE_8__.getTodoPriority)(todo, target, priority);
}

function todoRenameHandler(e) {
  const target = e.target.closest("input");
  if (!target) return;

  const newTodoName = e.target.value;
  const projectId = Number(target.parentElement.parentElement.parentElement.dataset.projectid);
  const todoId = Number(target.parentElement.parentElement.parentElement.dataset.todoId);
  const projectIndex = _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.getIndex(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray, projectId);
  const todoArray = _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[projectIndex].todoList;

  (0,_todo_rename__WEBPACK_IMPORTED_MODULE_10__.todoRename)(e, todoArray, target, newTodoName, todoId);
}

function todoTextAreaHandler(e) {
  const targetTextArea = e.target.closest("textarea");
  if (!targetTextArea) return;
  const todoId = targetTextArea.dataset.textareaId;
  const projectId = Number(targetTextArea.parentElement.parentElement.dataset.projectid);
  const projectIndex = _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.findIndex((obj) => obj.id === Number(projectId));

  const todoIndex = _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[projectIndex].todoList.findIndex((todo) => todo.todoId === Number(todoId));
  const project = _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[projectIndex];
  if (!_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.includes(project)) return;

  const todoArray = _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[projectIndex].todoList;

  (0,_todo_textArea__WEBPACK_IMPORTED_MODULE_9__.getTodoTextArea)(e, todoArray, targetTextArea, todoIndex);
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/todo-priority.js":
/*!************************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/todo-priority.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodoPriority": () => (/* binding */ getTodoPriority)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");



function getTodoPriority(todo, target, priority) {
  /* If there is no check for that value it reset the todo priority */
  if (priority.value === "none") return;

  if (todo.hasOwnProperty("priority")) {
    todo.priority = priority.value;
    target.classList.toggle("low", priority.value === "low");
    target.classList.toggle("medium", priority.value === "medium");
    target.classList.toggle("high", priority.value === "high");
    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray);
  }

  // todo.priority = priority.value;
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/todo-rename.js":
/*!**********************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/todo-rename.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoRename": () => (/* binding */ todoRename)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");



function todoRename(e, todoArray, targetInput, newTodoName, todoId) {
  if (e.key === "Enter") {
    /* for the specific project using the projectIndex filter its todoList
    for the todo item and then with map rename it */
    todoArray
      .filter((todoItem) => todoItem.todoId === todoId)
      .map((todo) => {
        /* todo name equals to new todo name */
        todo.todoName = newTodoName;
        /* Dom todo name change to new todo object name */
        targetInput.value = todo.todoName;

        _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray);

        return todo;
      });
  }
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/todo-textArea.js":
/*!************************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/todo-textArea.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodoTextArea": () => (/* binding */ getTodoTextArea)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");



function getTodoTextArea(e, todoArray, targetTextArea, todoIndex) {
  if (e.key === "Enter") {
    todoArray[todoIndex].notes = targetTextArea.value;
    _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage(_src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_1__.projectArray);
  }
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/todo-window-toggle.js":
/*!*****************************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/todo-window-toggle.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoWindowToggleSize": () => (/* binding */ todoWindowToggleSize)
/* harmony export */ });
function todoWindowToggleSize(targetId, target, todoId) {
  const listDropArrow = document.querySelector(`[data-chevron-id="${todoId}"]`);
  if (targetId === "list-arrow") {
    listDropArrow.classList.toggle("rotate");
    target.classList.toggle("visible");
    /* Toggle the hidden class from all dom element inside the todo */
    for (let i = 1; i < target.childElementCount; i++) {
      target.children[i].classList.toggle("hidden");
    }
  }
}


/***/ }),

/***/ "./src/js-modules/mainEventFunctions/window-Load.js":
/*!**********************************************************!*\
  !*** ./src/js-modules/mainEventFunctions/window-Load.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStorageHandler": () => (/* binding */ localStorageHandler)
/* harmony export */ });
/* harmony import */ var _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/js-modules/utilities-functions.js */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/js-modules/render-project.js */ "./src/js-modules/render-project.js");
/* harmony import */ var _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/js-modules/arrays.js */ "./src/js-modules/arrays.js");




function localStorageHandler() {
  /* If local storage is empty do nothing */
  if (!localStorage.length) return;
  /* Get all the data from json file */
  _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.getProject().forEach((item) => {
    /* Push everything to projectArray because its empty */
    _src_js_modules_arrays_js__WEBPACK_IMPORTED_MODULE_2__.projectArray.push(item);
    /* And render them on load */
    _src_js_modules_render_project_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectListItem.call(item);
  });

  /* Update all the todo numbers at home section */
  _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoByDateTotals();
  /* Close the no project img  */
  _src_js_modules_utilities_functions_js__WEBPACK_IMPORTED_MODULE_0__.toggleNotProjectScreen();
}


/***/ }),

/***/ "./src/js-modules/project-class.js":
/*!*****************************************!*\
  !*** ./src/js-modules/project-class.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.todoList = [];
  }
}

class Todo {
  constructor(name, projectId, todoId) {
    this.todoName = name;
    this.projectId = projectId;
    this.todoId = todoId;
    this.date = "";
    this.notes = "";
    this.priority = "";
    this.checkbox = "";
    this.dateId = "";
  }
}




/***/ }),

/***/ "./src/js-modules/render-project.js":
/*!******************************************!*\
  !*** ./src/js-modules/render-project.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectListItem": () => (/* binding */ renderProjectListItem),
/* harmony export */   "renderProjectTodoListItem": () => (/* binding */ renderProjectTodoListItem)
/* harmony export */ });
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ "./src/js-modules/dom-elements.js");
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities-functions */ "./src/js-modules/utilities-functions.js");
/* harmony import */ var _src_icons_delete_outline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/icons/delete-outline.png */ "./src/icons/delete-outline.png");
/* harmony import */ var _src_icons_chevron_down_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/icons/chevron-down.png */ "./src/icons/chevron-down.png");






/* Render Project Dom Elements Function */
function renderProjectListItem() {
  const createProjectElement = document.createElement("li");
  createProjectElement.id = this.id;
  createProjectElement.setAttribute("data-project-id", this.id);
  createProjectElement.className = "project-list__item";

  const projectListLabelInputMarkUp = `
         <input value="${this.name}" id="projectInput">
            <img src=${_src_icons_delete_outline_png__WEBPACK_IMPORTED_MODULE_2__} id="garbageIcon">`;
  createProjectElement.insertAdjacentHTML("beforeend", projectListLabelInputMarkUp);

  _dom_elements__WEBPACK_IMPORTED_MODULE_0__.projectListDomElement.append(createProjectElement);
  return _dom_elements__WEBPACK_IMPORTED_MODULE_0__.projectListDomElement;
}

function renderProjectTodoListItem() {
  const todoList = document.querySelector(".main__task-list__list");

  const listItemMarkup = `<li 
  class="main__task-list__list-item ${_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.classSetForSelect.call(this)} visible" 
  data-todo-id = ${this.todoId} data-projectId = ${this.projectId} >
   <!-- Header -->
   <div class="main__task-list__list-item__title-container">
      <div>
         <label for="main__task-list__list-item__checkbox"></label>
         <input
         type="checkbox" ${this.checkbox}
         id="main__task-list__list-item__checkbox "
         />
         <label for="main__task-list__list-item__title"></label>
         <input type="text" id="main__task-list__list-item__title" class="${this.checkbox}"
         value="${this.todoName}"
         ${_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.classSetForCheck.call(this)} />
      </div>
      <div>
         <p class="main__task-list__list-item__date-reference"
         data-reference-id = ${this.todoId}>
         Due Date ${_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.dateReference.call(this)}</p>
        <img src=${_src_icons_chevron_down_png__WEBPACK_IMPORTED_MODULE_3__} id="list-arrow" data-chevron-id=${this.todoId} alt="chevron icon" />

      </div>
   </div>
   <!-- Notes -->
   <div class="main__task-list__list-item__notes-container hidden">
      <label for="main__task-list__list-item__textarea"
         >Notes</label
         >
      <textarea
         id="main__task-list__list-item__textarea"
         data-textarea-id = ${this.todoId}
         placeholder = "Add your notes here..."
         >${this.notes}</textarea>
   </div>
   <!-- Date -->
   <div class="main__task-list__list-item__date-container hidden">
      <p class="main__task-list__list-item__date-title">Due Date</p>
      <div>
         <button 
         id="today-btn" 
         data-date="today" 
         data-today-id=${this.todoId}
         class="${_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.classSetForTodayButtons.call(this)}" >
         Today
         </button>

         <button 
         id="tomorrow-btn"
         data-date="tomorrow" 
         data-tomorrow-id = ${this.todoId}
         class="${_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.classSetForTomorrowButtons.call(this)}"
         >Tomorrow
         </button>

         <label for="main__task-list__list-item__date">
         </label>
         <input type="date" 
         value ="${_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.valueForDateDisplay.call(this)}" 
         id="main__task-list__list-item__date" 
         class="${_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.classSetForSpecificButtons.call(this)}"
         data-date="specific" 
         data-specific-id="${this.todoId}">
      </div>
   </div>
   <!-- Priority -->
   <div class="main__task-list__list-item__priority-container hidden">
      <label for="main__task-list__list-item__priority"
         >Priority</label
         >
      <select
         name="select-priority"
         id="main__task-list__list-item__priority"
         data-select-id = ${this.todoId}
         >
         <option value="none" selected="Select an option" disabled hidden>
            ${_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.selectTagText.call(this)}
         </option>
         <option value="low">Low</option>
         <option value="medium">Medium</option>
         <option value="high">High</option>
         <option value="no">None</option>
      </select>
   </div>
   <!-- Delete Btn -->
   <button id="delete" class="main__task-list__list-item__delete-task__btn hidden">
   Delete
   </button>
</li>`;

  return todoList.insertAdjacentHTML("beforeend", listItemMarkup);
}




/***/ }),

/***/ "./src/js-modules/utilities-functions.js":
/*!***********************************************!*\
  !*** ./src/js-modules/utilities-functions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classSetForCheck": () => (/* binding */ classSetForCheck),
/* harmony export */   "classSetForSelect": () => (/* binding */ classSetForSelect),
/* harmony export */   "classSetForSpecificButtons": () => (/* binding */ classSetForSpecificButtons),
/* harmony export */   "classSetForTodayButtons": () => (/* binding */ classSetForTodayButtons),
/* harmony export */   "classSetForTomorrowButtons": () => (/* binding */ classSetForTomorrowButtons),
/* harmony export */   "clearInputValue": () => (/* binding */ clearInputValue),
/* harmony export */   "clearLocalStorage": () => (/* binding */ clearLocalStorage),
/* harmony export */   "conditionSwitcher": () => (/* binding */ conditionSwitcher),
/* harmony export */   "dateReference": () => (/* binding */ dateReference),
/* harmony export */   "deleteFromArray": () => (/* binding */ deleteFromArray),
/* harmony export */   "getIndex": () => (/* binding */ getIndex),
/* harmony export */   "getProject": () => (/* binding */ getProject),
/* harmony export */   "getTodoByDate": () => (/* binding */ getTodoByDate),
/* harmony export */   "getTodoListIndex": () => (/* binding */ getTodoListIndex),
/* harmony export */   "highlight": () => (/* binding */ highlight),
/* harmony export */   "randomNumber": () => (/* binding */ randomNumber),
/* harmony export */   "saveProjectToLocalStorage": () => (/* binding */ saveProjectToLocalStorage),
/* harmony export */   "selectTagText": () => (/* binding */ selectTagText),
/* harmony export */   "toggleMiddleElementsVisibility": () => (/* binding */ toggleMiddleElementsVisibility),
/* harmony export */   "toggleNotProjectScreen": () => (/* binding */ toggleNotProjectScreen),
/* harmony export */   "toggleSortingOptionVisibility": () => (/* binding */ toggleSortingOptionVisibility),
/* harmony export */   "updateTodoByDateTotals": () => (/* binding */ updateTodoByDateTotals),
/* harmony export */   "valueForDateDisplay": () => (/* binding */ valueForDateDisplay)
/* harmony export */ });
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ "./src/js-modules/dom-elements.js");
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrays */ "./src/js-modules/arrays.js");
/* harmony import */ var _project_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-class */ "./src/js-modules/project-class.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isTomorrow/index.js");
/* harmony import */ var _render_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-project */ "./src/js-modules/render-project.js");






let selectedLi;

/* Clear Input values after event listener fired */
function clearInputValue() {
  _dom_elements__WEBPACK_IMPORTED_MODULE_0__.projectInputDomElement.value = "";
}

/* HighLight List Items And remove Highlight when another list item is clicked */
function highlight(li) {
  if (selectedLi) {
    /* if selected listItem is true remove class
  at first its falsy but when i click the first li it turns truthy */
    selectedLi.classList.remove("active");
  }
  /* add truthy value to variable outside the scope of the function */
  selectedLi = li;
  selectedLi.classList.add("active");
}

/* Remove the object from the array */
function deleteFromArray(array, index) {
  array.splice(index, 1);
}

/* Toggle notProjectScreen class */
function toggleNotProjectScreen() {
  if (_arrays__WEBPACK_IMPORTED_MODULE_1__.projectArray.length || localStorage.length) {
    _dom_elements__WEBPACK_IMPORTED_MODULE_0__.notProjectYetContainer.classList.add("hidden");
  } else {
    _dom_elements__WEBPACK_IMPORTED_MODULE_0__.notProjectYetContainer.classList.remove("hidden");
  }
}

/* Toggle the visibility for middle section title and todo input element */
function toggleMiddleElementsVisibility() {
  if (_arrays__WEBPACK_IMPORTED_MODULE_1__.projectArray.length) {
    _dom_elements__WEBPACK_IMPORTED_MODULE_0__.todoHeaderContainer.classList.add("visible");
    _dom_elements__WEBPACK_IMPORTED_MODULE_0__.addTodoTaskInputContainer.classList.add("visible");
  } else {
    _dom_elements__WEBPACK_IMPORTED_MODULE_0__.todoHeaderContainer.classList.remove("visible");
    _dom_elements__WEBPACK_IMPORTED_MODULE_0__.addTodoTaskInputContainer.classList.remove("visible");
  }
}

/* Toggle function for sort option container */
function toggleSortingOptionVisibility() {
  _dom_elements__WEBPACK_IMPORTED_MODULE_0__.todoSortOptionsContainer.classList.toggle("visible");
}

function conditionSwitcher() {
  let condition = true;

  function changeCondition() {
    condition = !condition;
    return condition;
  }
  return changeCondition;
}

/* Generate a random number */
function randomNumber() {
  return Math.floor(Math.random() * 9999);
}

/* Get the projects back from local storage */
function getProject() {
  return JSON.parse(localStorage.getItem("projects") || []);
}

/* Save the projects in to the local storage*/
function saveProjectToLocalStorage(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

/* Clear the local storage */
function clearLocalStorage() {
  localStorage.clear();
}

function selectTagText() {
  if (!this.priority) {
    let text = "Select an option";
    return text;
  }
  if (this.priority) {
    return this.priority.charAt(0).toUpperCase() + this.priority.slice(1);
  }
}

function classSetForSelect() {
  if (!this.priority) {
    return this.priority;
  }
  if (this.priority) {
    return this.priority.toLowerCase();
  }
}

function classSetForCheck() {
  if (!this.checkbox) {
    return "";
  }
  if (this.checkbox) {
    return "disabled";
  }
}

/* Need to find a way to make those 3 into 1 */
function classSetForTodayButtons() {
  if (!this.dateId) return "";

  if (this.dateId === "today") {
    return "activeDate";
  }
}

function classSetForTomorrowButtons() {
  if (!this.dateId) return "";

  if (this.dateId === "tomorrow") {
    return "activeDate";
  }
}
function classSetForSpecificButtons() {
  if (!this.dateId) return "";

  if (this.dateId === "specific") {
    return "activeDate";
  }
}

function dateReference() {
  return this.date;
}

/* Rendered date input value */
function valueForDateDisplay() {
  /* make a new date object from todo date */
  const date = new Date(this.date);
  /* Check if todo day is today */
  const todayCheck = date_fns__WEBPACK_IMPORTED_MODULE_4__["default"](date);
  /* Check if todo day is tomorrow */
  const tomorrowCheck = date_fns__WEBPACK_IMPORTED_MODULE_5__["default"](date);

  /* If condition met return ""
 that function is used in render module to keep the display
 value of date input to this.date if is set for days that are neither 
 today or tomorrow */
  if (todayCheck || tomorrowCheck) return "";

  return this.date;
}

/* function to create an object with grouped todos by date */
function getTodoByDate() {
  let allArray = [];
  getProject().forEach((project) => {
    allArray.push(...project.todoList);
  });
  const todayArray = allArray.filter((item) => item.dateId === "today");
  const tomorrowArray = allArray.filter((item) => item.dateId === "tomorrow");
  const scheduledArray = allArray.filter((item) => item.dateId === "specific");

  return { allArray, todayArray, tomorrowArray, scheduledArray };
}

/* Function for update the home container todo numbers */
function updateTodoByDateTotals() {
  const todoArrayObject = getTodoByDate();

  const all = document.querySelector(".left-section__home-container__all-tasks");
  const today = document.querySelector(".left-section__home-container__today");
  const tomorrow = document.querySelector(".left-section__home-container__tomorrow");
  const scheduled = document.querySelector(".left-section__home-container__scheduled");

  all.lastElementChild.textContent = todoArrayObject.allArray.length;
  today.lastElementChild.textContent = todoArrayObject.todayArray.length;
  tomorrow.lastElementChild.textContent = todoArrayObject.tomorrowArray.length;
  scheduled.lastElementChild.textContent = todoArrayObject.scheduledArray.length;
}

/* Function to find the index of an array */
function getIndex(array, data) {
  const index = array.findIndex((object) => object.id === +data);
  return index;
}

/* Function to find the index of an todoArray */
function getTodoListIndex(array, data) {
  const index = array.findIndex((object) => object.todoId === +data);
  return index;
}


/***/ }),

/***/ "./src/icons/chevron-down.png":
/*!************************************!*\
  !*** ./src/icons/chevron-down.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2b37933bf5bce199fde.png";

/***/ }),

/***/ "./src/icons/delete-outline.png":
/*!**************************************!*\
  !*** ./src/icons/delete-outline.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0be814bb653e77d8cd3d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxhQUFhLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLGFBQWEsYUFBYSxNQUFNLFlBQVksWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLGFBQWEsYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9B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O0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ00sQ0FBQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0Y7QUFDdEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFlO0FBQ3BDO0FBQ0Esd0JBQXdCLGdEQUFrQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL2hlYWRlci1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9sZWZ0LXNlY3Rpb24vYWRkLXByb2plY3QtYnRuLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL2xlZnQtc2VjdGlvbi9ob21lLWNvbnRhaW5lci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9sZWZ0LXNlY3Rpb24vbWFpbi1sZWZ0LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL2xlZnQtc2VjdGlvbi9wcm9qZWN0LWNvbnRhaW5lci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9sZWZ0LXNlY3Rpb24vcHJvamVjdC1jcmVhdGUtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9taWRkbGUtc2VjdGlvbi9tYWluLW1pZGRsZS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9taWRkbGUtc2VjdGlvbi9taWRkbGUtaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL21pZGRsZS1zZWN0aW9uL21pZGRsZS1zb3J0aW5nLWJveC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9taWRkbGUtc2VjdGlvbi9taWRkbGUtdG9kby1saXN0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL21pZGRsZS1zZWN0aW9uL25vcHJvamVjdC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zaGFyZWQtc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9tb3Jyb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZUb21vcnJvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL2hlYWRlci1zdHlsZS5jc3M/ZDJlMSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL2xlZnQtc2VjdGlvbi9hZGQtcHJvamVjdC1idG4uY3NzP2E4MmUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9sZWZ0LXNlY3Rpb24vaG9tZS1jb250YWluZXIuY3NzPzljNDEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9sZWZ0LXNlY3Rpb24vbWFpbi1sZWZ0LXN0eWxlLmNzcz82ZGMxIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MvbGVmdC1zZWN0aW9uL3Byb2plY3QtY29udGFpbmVyLmNzcz80Mjk3Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MvbGVmdC1zZWN0aW9uL3Byb2plY3QtY3JlYXRlLWZvcm0uY3NzPzE5YWYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9taWRkbGUtc2VjdGlvbi9tYWluLW1pZGRsZS1zdHlsZS5jc3M/MDQyYiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL21pZGRsZS1zZWN0aW9uL21pZGRsZS1oZWFkZXIuY3NzP2VjNGMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9taWRkbGUtc2VjdGlvbi9taWRkbGUtc29ydGluZy1ib3guY3NzPzJiZjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9taWRkbGUtc2VjdGlvbi9taWRkbGUtdG9kby1saXN0LmNzcz9mZTAwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MvbWlkZGxlLXNlY3Rpb24vbm9wcm9qZWN0LXN0eWxlLmNzcz8wNzFiIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc2hhcmVkLXN0eWxlLmNzcz82OThmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL2FycmF5cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtbW9kdWxlcy9kb20tZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLW1vZHVsZXMvZXZlbnQtbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL21haW5FdmVudEZ1bmN0aW9ucy9ob21lLVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLW1vZHVsZXMvbWFpbkV2ZW50RnVuY3Rpb25zL3Byb2plY3QtQ3JlYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL21haW5FdmVudEZ1bmN0aW9ucy9wcm9qZWN0LURlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtbW9kdWxlcy9tYWluRXZlbnRGdW5jdGlvbnMvcHJvamVjdC1JdGVtLUZ1bmN0aW9uYWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLW1vZHVsZXMvbWFpbkV2ZW50RnVuY3Rpb25zL3Byb2plY3QtUmVuYW1lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL21haW5FdmVudEZ1bmN0aW9ucy9wcm9qZWN0LVJlbmRlci1Ub2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL21haW5FdmVudEZ1bmN0aW9ucy9zb3J0LXRvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL21haW5FdmVudEZ1bmN0aW9ucy90b2RvLURhdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL21haW5FdmVudEZ1bmN0aW9ucy90b2RvLWNoZWNrYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL21haW5FdmVudEZ1bmN0aW9ucy90b2RvLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtbW9kdWxlcy9tYWluRXZlbnRGdW5jdGlvbnMvdG9kby1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzLW1vZHVsZXMvbWFpbkV2ZW50RnVuY3Rpb25zL3RvZG8taXRlbS1mdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL21haW5FdmVudEZ1bmN0aW9ucy90b2RvLXByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL21haW5FdmVudEZ1bmN0aW9ucy90b2RvLXJlbmFtZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtbW9kdWxlcy9tYWluRXZlbnRGdW5jdGlvbnMvdG9kby10ZXh0QXJlYS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtbW9kdWxlcy9tYWluRXZlbnRGdW5jdGlvbnMvdG9kby13aW5kb3ctdG9nZ2xlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL21haW5FdmVudEZ1bmN0aW9ucy93aW5kb3ctTG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMtbW9kdWxlcy9wcm9qZWN0LWNsYXNzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL3JlbmRlci1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL3V0aWxpdGllcy1mdW5jdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoZWFkZXIgPiBoMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDZyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oZWFkZXIgPiBoMTo6YWZ0ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbnRlbnQ6IFxcXCJUb2RvXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1lZXJpZS1ibGFjayk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlciA+IGgxIHtcXG4gIHBhZGRpbmctbGVmdDogNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmhlYWRlciA+IGgxOjphZnRlciB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29udGVudDogXFxcIlRvZG9cXFwiO1xcbiAgY29sb3I6IHZhcigtLWVlcmllLWJsYWNrKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxlZnQtc2VjdGlvbl9fcHJvamVjdHNfX2FkZC1idG4ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtaW4td2lkdGg6IDE0MHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTWFrZSBzcGFuIHJlbGF0aXZlIGZvciB0aGUgYWZ0ZXIgY29udGVudCAqL1xcbi5sZWZ0LXNlY3Rpb25fX3Byb2plY3RzX19hZGQtYnRuIHNwYW4ge1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogQWRkIGNvbnRlbnQgICovXFxuLmxlZnQtc2VjdGlvbl9fcHJvamVjdHNfX2FkZC1idG4gc3Bhbjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXFwwMGJiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAtMThweDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4vKiBPbiBzcGFuIGhvdmVyIHVzZSBwYWRkaW5nICovXFxuLmxlZnQtc2VjdGlvbl9fcHJvamVjdHNfX2FkZC1idG46aG92ZXIgc3BhbiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiBPbiBzcGFuIGhvdmVyIG1ha2UgdGhlIGFmdGVyIGNvbnRlbnQgdmlzaWJsZSBhbmQgY2hhbmdlIGl0cyBwb3NpdGlvbiAqL1xcbi5sZWZ0LXNlY3Rpb25fX3Byb2plY3RzX19hZGQtYnRuOmhvdmVyIHNwYW46OmFmdGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICByaWdodDogMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2xlZnQtc2VjdGlvbi9hZGQtcHJvamVjdC1idG4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEseUVBQXlFO0FBQ3pFO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGVmdC1zZWN0aW9uX19wcm9qZWN0c19fYWRkLWJ0biB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1pbi13aWR0aDogMTQwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBNYWtlIHNwYW4gcmVsYXRpdmUgZm9yIHRoZSBhZnRlciBjb250ZW50ICovXFxuLmxlZnQtc2VjdGlvbl9fcHJvamVjdHNfX2FkZC1idG4gc3BhbiB7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBBZGQgY29udGVudCAgKi9cXG4ubGVmdC1zZWN0aW9uX19wcm9qZWN0c19fYWRkLWJ0biBzcGFuOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcXDAwYmJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IC0xOHB4O1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi8qIE9uIHNwYW4gaG92ZXIgdXNlIHBhZGRpbmcgKi9cXG4ubGVmdC1zZWN0aW9uX19wcm9qZWN0c19fYWRkLWJ0bjpob3ZlciBzcGFuIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIE9uIHNwYW4gaG92ZXIgbWFrZSB0aGUgYWZ0ZXIgY29udGVudCB2aXNpYmxlIGFuZCBjaGFuZ2UgaXRzIHBvc2l0aW9uICovXFxuLmxlZnQtc2VjdGlvbl9fcHJvamVjdHNfX2FkZC1idG46aG92ZXIgc3Bhbjo6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIHJpZ2h0OiAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sZWZ0LXNlY3Rpb25fX2hvbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmxlZnQtc2VjdGlvbl9faG9tZS1jb250YWluZXIgPiBoMiB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tR2hvc3Qtd2hpdGUpO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAvKiBjb2xvcjogdmFyKC0tVWx0cmFtYXJpbmUtYmx1ZSk7ICovXFxufVxcblxcbi8qIFNlbGVjdCB0aGUgZGl2cyBpbiBob21lIGNvbnRhaW5lciAgKi9cXG4ubGVmdC1zZWN0aW9uX19ob21lLWNvbnRhaW5lciA+IGRpdiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5sZWZ0LXNlY3Rpb25fX2hvbWUtY29udGFpbmVyID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUdob3N0LXdoaXRlKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3dzKTtcXG59XFxuLmxlZnQtc2VjdGlvbl9faG9tZS1jb250YWluZXIgPiBkaXY6aG92ZXIgKiB7XFxuICBmaWxsOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG59XFxuXFxuLmxlZnQtc2VjdGlvbl9faG9tZS1jb250YWluZXIgPiBkaXYgPiBzdmc6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbGVmdC1zZWN0aW9uL2hvbWUtY29udGFpbmVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxvQkFBb0I7RUFDcEIsb0NBQW9DO0FBQ3RDOztBQUVBLHVDQUF1QztBQUN2QztFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQ0FBb0M7O0VBRXBDLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sZWZ0LXNlY3Rpb25fX2hvbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmxlZnQtc2VjdGlvbl9faG9tZS1jb250YWluZXIgPiBoMiB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tR2hvc3Qtd2hpdGUpO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAvKiBjb2xvcjogdmFyKC0tVWx0cmFtYXJpbmUtYmx1ZSk7ICovXFxufVxcblxcbi8qIFNlbGVjdCB0aGUgZGl2cyBpbiBob21lIGNvbnRhaW5lciAgKi9cXG4ubGVmdC1zZWN0aW9uX19ob21lLWNvbnRhaW5lciA+IGRpdiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5sZWZ0LXNlY3Rpb25fX2hvbWUtY29udGFpbmVyID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUdob3N0LXdoaXRlKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3dzKTtcXG59XFxuLmxlZnQtc2VjdGlvbl9faG9tZS1jb250YWluZXIgPiBkaXY6aG92ZXIgKiB7XFxuICBmaWxsOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG59XFxuXFxuLmxlZnQtc2VjdGlvbl9faG9tZS1jb250YWluZXIgPiBkaXYgPiBzdmc6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNsZWZ0LXNlY3Rpb24ge1xcbiAgZmxleDogMTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm90dG9tLXJhZGl1cy1zZWN0aW9uKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2xlZnQtc2VjdGlvbi9tYWluLWxlZnQtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLDJDQUEyQzs7RUFFM0MsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbGVmdC1zZWN0aW9uIHtcXG4gIGZsZXg6IDE7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvdHRvbS1yYWRpdXMtc2VjdGlvbik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxlZnQtc2VjdGlvbl9fcHJvamVjdHMge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmxlZnQtc2VjdGlvbl9fcHJvamVjdHMgPiBoMiB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tR2hvc3Qtd2hpdGUpO1xcblxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi5sZWZ0LXNlY3Rpb25fX3Byb2plY3RzX19jb250YWluZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sZWZ0LXNlY3Rpb25fX3Byb2plY3RzX19jb250YWluZXIgdWwgPiBsaSB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWF4LWNvbnRlbnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNwcm9qZWN0SW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuI3Byb2plY3RJbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tR2hvc3Qtd2hpdGUzKTtcXG59XFxuXFxuI2dhcmJhZ2VJY29uIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoMTYlKSBzYXR1cmF0ZSgzMjYlKSBodWUtcm90YXRlKDE5OWRlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDg4JSk7XFxufVxcblxcbiNnYXJiYWdlSWNvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5sZWZ0LXNlY3Rpb25fX3Byb2plY3RzX19jb250YWluZXIgdWwgPiBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HaG9zdC13aGl0ZSk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93cyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFNlbGVjdCBhbGwgcCB3aGVuIGxpIGlzIGhvdmVyICovXFxuLmxlZnQtc2VjdGlvbl9fcHJvamVjdHNfX2NvbnRhaW5lciB1bCA+IGxpOmhvdmVyIHAge1xcbiAgY29sb3I6IHZhcigtLVVsdHJhbWFyaW5lLWJsdWUpO1xcbn1cXG5cXG4vKiBTZWxlY3QgYWxsIHN2ZyB3aGVuIGxpIGlzIGhvdmVyICovXFxuXFxuLmxlZnQtc2VjdGlvbl9fcHJvamVjdHNfX2NvbnRhaW5lciB1bCA+IGxpOmhvdmVyIHN2ZyB7XFxuICBmaWxsOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG59XFxuXFxuLmxlZnQtc2VjdGlvbl9fcHJvamVjdHNfX2NvbnRhaW5lciB1bCA+IGxpOmhvdmVyICNnYXJiYWdlSWNvbiB7XFxuICBmaWx0ZXI6IGludmVydCgzOCUpIHNlcGlhKDcyJSkgc2F0dXJhdGUoMTA4NyUpIGh1ZS1yb3RhdGUoMjA4ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoOTclKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9sZWZ0LXNlY3Rpb24vcHJvamVjdC1jb250YWluZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSwyQ0FBMkM7O0VBRTNDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsOEZBQThGO0FBQ2hHOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxvQ0FBb0M7O0FBRXBDO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsK0ZBQStGO0FBQ2pHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sZWZ0LXNlY3Rpb25fX3Byb2plY3RzIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5sZWZ0LXNlY3Rpb25fX3Byb2plY3RzID4gaDIge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLUdob3N0LXdoaXRlKTtcXG5cXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubGVmdC1zZWN0aW9uX19wcm9qZWN0c19fY29udGFpbmVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGVmdC1zZWN0aW9uX19wcm9qZWN0c19fY29udGFpbmVyIHVsID4gbGkge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1heC1jb250ZW50O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jcHJvamVjdElucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbiNwcm9qZWN0SW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLUdob3N0LXdoaXRlMyk7XFxufVxcblxcbiNnYXJiYWdlSWNvbiB7XFxuICBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDE2JSkgc2F0dXJhdGUoMzI2JSkgaHVlLXJvdGF0ZSgxOTlkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4jZ2FyYmFnZUljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubGVmdC1zZWN0aW9uX19wcm9qZWN0c19fY29udGFpbmVyIHVsID4gbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR2hvc3Qtd2hpdGUpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvd3MpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTZWxlY3QgYWxsIHAgd2hlbiBsaSBpcyBob3ZlciAqL1xcbi5sZWZ0LXNlY3Rpb25fX3Byb2plY3RzX19jb250YWluZXIgdWwgPiBsaTpob3ZlciBwIHtcXG4gIGNvbG9yOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG59XFxuXFxuLyogU2VsZWN0IGFsbCBzdmcgd2hlbiBsaSBpcyBob3ZlciAqL1xcblxcbi5sZWZ0LXNlY3Rpb25fX3Byb2plY3RzX19jb250YWluZXIgdWwgPiBsaTpob3ZlciBzdmcge1xcbiAgZmlsbDogdmFyKC0tVWx0cmFtYXJpbmUtYmx1ZSk7XFxufVxcblxcbi5sZWZ0LXNlY3Rpb25fX3Byb2plY3RzX19jb250YWluZXIgdWwgPiBsaTpob3ZlciAjZ2FyYmFnZUljb24ge1xcbiAgZmlsdGVyOiBpbnZlcnQoMzglKSBzZXBpYSg3MiUpIHNhdHVyYXRlKDEwODclKSBodWUtcm90YXRlKDIwOGRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDk3JSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEFkZCBUYXNrIHN0eWxlICovXFxuLm1haW5fX3Rhc2stbGlzdF9fYWRkLXRhc2tfY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDFyZW0gMC44cmVtO1xcbiAgZ2FwOiAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG59XFxuXFxuLm1haW5fX3Rhc2stbGlzdF9fYWRkLXRhc2tfY29udGFpbmVyOmZvY3VzLXdpdGhpbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1HaG9zdC13aGl0ZTMpO1xcbn1cXG5cXG4ubWFpbl9fdGFzay1saXN0X19hZGQtdGFza19jb250YWluZXIgPiBzdmc6aG92ZXIge1xcbiAgZmlsbDogdmFyKC0tVWx0cmFtYXJpbmUtYmx1ZSk7XFxufVxcblxcbiNtYWluX190YXNrLWxpc3RfX2FkZC10YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMHJlbSAwLjJyZW07XFxufVxcblxcbiNtYWluX190YXNrLWxpc3RfX2FkZC10YXNrOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbGVmdC1zZWN0aW9uL3Byb2plY3QtY3JlYXRlLWZvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjtBQUNuQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQWRkIFRhc2sgc3R5bGUgKi9cXG4ubWFpbl9fdGFzay1saXN0X19hZGQtdGFza19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMXJlbSAwLjhyZW07XFxuICBnYXA6IDAuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbn1cXG5cXG4ubWFpbl9fdGFzay1saXN0X19hZGQtdGFza19jb250YWluZXI6Zm9jdXMtd2l0aGluIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUdob3N0LXdoaXRlMyk7XFxufVxcblxcbi5tYWluX190YXNrLWxpc3RfX2FkZC10YXNrX2NvbnRhaW5lciA+IHN2Zzpob3ZlciB7XFxuICBmaWxsOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fYWRkLXRhc2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwcmVtIDAuMnJlbTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fYWRkLXRhc2s6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI21pZGRsZS1zZWN0aW9uIHtcXG4gIGZsZXg6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HaG9zdC13aGl0ZSk7XFxuICAvKiBpbnNpZGUgbWFpbiBib3JkZXIgKi9cXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHg7XFxuICBwYWRkaW5nOiAxcmVtIDNyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWlkZGxlLXNlY3Rpb24vbWFpbi1taWRkbGUtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsT0FBTztFQUNQLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI21pZGRsZS1zZWN0aW9uIHtcXG4gIGZsZXg6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HaG9zdC13aGl0ZSk7XFxuICAvKiBpbnNpZGUgbWFpbiBib3JkZXIgKi9cXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHg7XFxuICBwYWRkaW5nOiAxcmVtIDNyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluX19jb250YWluZXJfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW5fX2NvbnRhaW5lcl9faGVhZGVyLnZpc2libGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW5fX2NvbnRhaW5lcl9faGVhZGVyIGgyIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIHBhZGRpbmc6IDEuNnJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7ICovXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNHJlbTtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYWluX19oZWFkZXJfX3NvcnQtY29udGFpbmVyIHN2ZyB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR2hvc3Qtd2hpdGUzKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3dzKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcbi5tYWluX19oZWFkZXJfX3NvcnQtY29udGFpbmVyOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXG59XFxuXFxuLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXI6aG92ZXIsXFxuLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXI6aG92ZXIgc3ZnIHtcXG4gIGNvbG9yOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbGw6IHZhcigtLVVsdHJhbWFyaW5lLWJsdWUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21pZGRsZS1zZWN0aW9uL21pZGRsZS1oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIseUNBQXlDO0VBQ3pDLG9DQUFvQztFQUNwQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluX19jb250YWluZXJfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW5fX2NvbnRhaW5lcl9faGVhZGVyLnZpc2libGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW5fX2NvbnRhaW5lcl9faGVhZGVyIGgyIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIHBhZGRpbmc6IDEuNnJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7ICovXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNHJlbTtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYWluX19oZWFkZXJfX3NvcnQtY29udGFpbmVyIHN2ZyB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR2hvc3Qtd2hpdGUzKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3dzKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcbi5tYWluX19oZWFkZXJfX3NvcnQtY29udGFpbmVyOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXG59XFxuXFxuLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXI6aG92ZXIsXFxuLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXI6aG92ZXIgc3ZnIHtcXG4gIGNvbG9yOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbGw6IHZhcigtLVVsdHJhbWFyaW5lLWJsdWUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbl9fc29ydGluZy1vcmRlciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMC4ycmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluX19zb3J0aW5nLW9yZGVyLnZpc2liaWxpdHkge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLm1haW5fX3NvcnRpbmctb3JkZXIgPiBzdmcge1xcbiAgcGFkZGluZzogMC4xcmVtO1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5tYWluX19zb3J0aW5nLW9yZGVyID4gc3ZnOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhdHRsZXNoaXAtZ3JheSk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXJfX29wdGlvbnMge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMnJlbSAwcmVtIDFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogNTBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3dzKTtcXG5cXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4ubWFpbl9faGVhZGVyX19zb3J0LWNvbnRhaW5lcl9fb3B0aW9ucy52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluX19oZWFkZXJfX3NvcnQtY29udGFpbmVyX19vcHRpb25zID4gcCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tR2hvc3Qtd2hpdGUpO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyX19zb3J0LWNvbnRhaW5lcl9fb3B0aW9ucyA+IGRpdiB7XFxuICBwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5tYWluX19oZWFkZXJfX3NvcnQtY29udGFpbmVyX19vcHRpb25zID4gZGl2IHAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5tYWluX19oZWFkZXJfX3NvcnQtY29udGFpbmVyX19vcHRpb25zID4gZGl2OmhvdmVyLFxcbi5tYWluX19oZWFkZXJfX3NvcnQtY29udGFpbmVyX19vcHRpb25zID4gZGl2OmhvdmVyIHN2ZyB7XFxuICBjb2xvcjogdmFyKC0tVWx0cmFtYXJpbmUtYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HaG9zdC13aGl0ZSk7XFxuXFxuICBmaWxsOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9taWRkbGUtc2VjdGlvbi9taWRkbGUtc29ydGluZy1ib3guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBLDhDQUE4Qzs7QUFFOUM7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUzs7RUFFVCw4QkFBOEI7RUFDOUIsOEJBQThCOztFQUU5QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsb0NBQW9DOztFQUVwQyw2QkFBNkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW5fX3NvcnRpbmctb3JkZXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDAuMnJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbl9fc29ydGluZy1vcmRlci52aXNpYmlsaXR5IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5tYWluX19zb3J0aW5nLW9yZGVyID4gc3ZnIHtcXG4gIHBhZGRpbmc6IDAuMXJlbTtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ubWFpbl9fc29ydGluZy1vcmRlciA+IHN2Zzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXR0bGVzaGlwLWdyYXkpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5tYWluX19oZWFkZXJfX3NvcnQtY29udGFpbmVyX19vcHRpb25zIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDJyZW0gMHJlbSAxcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDUwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93cyk7XFxuXFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXJfX29wdGlvbnMudmlzaWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyX19zb3J0LWNvbnRhaW5lcl9fb3B0aW9ucyA+IHAge1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLUdob3N0LXdoaXRlKTtcXG59XFxuXFxuLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXJfX29wdGlvbnMgPiBkaXYge1xcbiAgcGFkZGluZzogMC44cmVtIDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyX19zb3J0LWNvbnRhaW5lcl9fb3B0aW9ucyA+IGRpdiBwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4ubWFpbl9faGVhZGVyX19zb3J0LWNvbnRhaW5lcl9fb3B0aW9ucyA+IGRpdjpob3ZlcixcXG4ubWFpbl9faGVhZGVyX19zb3J0LWNvbnRhaW5lcl9fb3B0aW9ucyA+IGRpdjpob3ZlciBzdmcge1xcbiAgY29sb3I6IHZhcigtLVVsdHJhbWFyaW5lLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR2hvc3Qtd2hpdGUpO1xcblxcbiAgZmlsbDogdmFyKC0tVWx0cmFtYXJpbmUtYmx1ZSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluX190YXNrLWxpc3RfX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxufVxcblxcbi8qIExpc3QgU3R5bGUgKi9cXG4ubWFpbl9fdGFzay1saXN0X19saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBMaXN0IGl0ZW0gc3R5bGUgKi9cXG5cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW0ge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIC8qIG1pbi1oZWlnaHQ6IDI2MHB4OyAqL1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWJhdHRsZXNoaXAtZ3JheSk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMzMwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnIgMmZyO1xcbiAgY29sdW1uLWdhcDogMC44cmVtO1xcbiAgcm93LWdhcDogMXJlbTtcXG59XFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtLnZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbS5sb3cge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1DYXJvbGluYS1ibHVlKTtcXG59XFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtLm1lZGl1bSB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLU1heGltdW0teWVsbG93LXJlZCk7XFxufVxcbi5tYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbS5oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0tT3JhbmdlLXJlZC1jcmF5b2xhKTtcXG59XFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtLm5vbmUge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1iYXR0bGVzaGlwLWdyYXkpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBMaXN0IGl0ZW0gaGVhZGVyICovXFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX190aXRsZS1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxufVxcblxcbi5tYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fdGl0bGUtY29udGFpbmVyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4jbWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX3RpdGxlIHtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIHdoZW4gY2hlY2tib3ggaXMgYWN0aXZlICovXFxuLmNoZWNrZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tRGFyay1saXZlcik7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX190aXRsZTpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tR2hvc3Qtd2hpdGUzKTtcXG59XFxuXFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX190aXRsZS1jb250YWluZXIgZGl2Om50aC1jaGlsZCgxKSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jbGlzdC1hcnJvdyB7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSgxNiUpIHNhdHVyYXRlKDMyNiUpIGh1ZS1yb3RhdGUoMTk5ZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoODglKTtcXG59XFxuXFxuI2xpc3QtYXJyb3c6aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoMzklKSBzZXBpYSgzNiUpIHNhdHVyYXRlKDIyNjElKSBodWUtcm90YXRlKDIxMGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDkzJSk7XFxufVxcblxcbiNsaXN0LWFycm93LnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIExpc3QgSXRlbSBOb3RlcyAqL1xcbi5tYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fbm90ZXMtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi81O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fbm90ZXMtY29udGFpbmVyIGxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX190ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUdob3N0LXdoaXRlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1EYXJrLWxpdmVyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX190ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tR2hvc3Qtd2hpdGUzKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIExpc3QgSXRlbSBEYXRlICovXFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG59XFxuXFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlLWNvbnRhaW5lciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdG9kYXktYnRuIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcXG59XFxuXFxuI3RvbW9ycm93LWJ0biB7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcblxcbiNtYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fZGF0ZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbn1cXG5cXG4uYWN0aXZlRGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QYXJhZGlzZS1QaW5rKTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlLmFjdGl2ZURhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUGFyYWRpc2UtUGluayk7XFxufVxcblxcbiNtYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fZGF0ZTpob3ZlcixcXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX2RhdGUtY29udGFpbmVyID4gZGl2ID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVVsdHJhLVJlZCk7XFxufVxcblxcbiNtYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fZGF0ZTphY3RpdmUsXFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlLWNvbnRhaW5lciA+IGRpdiA+IGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxufVxcblxcbiNtYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fZGF0ZTpmb2N1cyxcXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX2RhdGUtY29udGFpbmVyID4gZGl2ID4gYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QYXJhZGlzZS1QaW5rKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogY2hhbmdlIHRoZSBjb2xvciBvZiBkYXRlIGljb24gKi9cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBMaXN0IEl0ZW0gUHJpb3JpdHkgKi9cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX3ByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX3ByaW9yaXR5LWNvbnRhaW5lciBsYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcblxcbiNtYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fcHJpb3JpdHkge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tVWx0cmFtYXJpbmUtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19wcmlvcml0eSBvcHRpb24ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tR2hvc3Qtd2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLURhcmstbGl2ZXIpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBMaXN0IEl0ZW0gQnRuICovXFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kZWxldGUtdGFza19fYnRuIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIEFkZCBUYXNrIHN0eWxlICovXFxuLm1pZGRsZV9fdGFzay1saXN0X19hZGQtdGFza19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDAuOHJlbTtcXG4gIGdhcDogMC4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWlkZGxlX190YXNrLWxpc3RfX2FkZC10YXNrX2NvbnRhaW5lci52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5taWRkbGVfX3Rhc2stbGlzdF9fYWRkLXRhc2tfY29udGFpbmVyOmZvY3VzLXdpdGhpbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1HaG9zdC13aGl0ZTMpO1xcbn1cXG5cXG4ubWlkZGxlX190YXNrLWxpc3RfX2FkZC10YXNrX2NvbnRhaW5lciA+IHN2Zzpob3ZlciB7XFxuICBmaWxsOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fYWRkLXRhc2ssXFxuI3RvZG9fX3Rhc2stbGlzdF9fYWRkLXRvZG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwcmVtIDAuMnJlbTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fYWRkLXRhc2s6Zm9jdXMsXFxuI3RvZG9fX3Rhc2stbGlzdF9fYWRkLXRvZG86Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9taWRkbGUtc2VjdGlvbi9taWRkbGUtdG9kby1saXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBLGdFQUFnRTs7QUFFaEUsb0JBQW9COztBQUVwQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCOztFQUV2Qix5Q0FBeUM7RUFDekMsNkNBQTZDOztFQUU3QyxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBLGlFQUFpRTs7QUFFakUscUJBQXFCO0FBQ3JCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDhGQUE4RjtBQUNoRzs7QUFFQTtFQUNFLCtGQUErRjtBQUNqRzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxtRUFBbUU7QUFDbkUsb0JBQW9CO0FBQ3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQSxxRUFBcUU7O0FBRXJFLG1CQUFtQjtBQUNuQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQscURBQXFEO0VBQ3JELCtCQUErQjtFQUMvQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbURBQW1EO0VBQ25ELHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQSx5RUFBeUU7O0FBRXpFLHVCQUF1QjtBQUN2QjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhOztFQUViLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHdCQUF3QjtBQUMxQjs7QUFFQSxpRUFBaUU7O0FBRWpFLGtCQUFrQjtBQUNsQjtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUEsbUZBQW1GOztBQUVuRixtQkFBbUI7QUFDbkI7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW5fX3Rhc2stbGlzdF9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG59XFxuXFxuLyogTGlzdCBTdHlsZSAqL1xcbi5tYWluX190YXNrLWxpc3RfX2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIExpc3QgaXRlbSBzdHlsZSAqL1xcblxcbi5tYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbSB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgLyogbWluLWhlaWdodDogMjYwcHg7ICovXFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0tYmF0dGxlc2hpcC1ncmF5KTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAzMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmciAyZnI7XFxuICBjb2x1bW4tZ2FwOiAwLjhyZW07XFxuICByb3ctZ2FwOiAxcmVtO1xcbn1cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW0udmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtLmxvdyB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLUNhcm9saW5hLWJsdWUpO1xcbn1cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW0ubWVkaXVtIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0tTWF4aW11bS15ZWxsb3ctcmVkKTtcXG59XFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtLmhpZ2gge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1PcmFuZ2UtcmVkLWNyYXlvbGEpO1xcbn1cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW0ubm9uZSB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWJhdHRsZXNoaXAtZ3JheSk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIExpc3QgaXRlbSBoZWFkZXIgKi9cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX3RpdGxlLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG59XFxuXFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX190aXRsZS1jb250YWluZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNyZW07XFxufVxcblxcbiNtYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fdGl0bGUge1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLyogd2hlbiBjaGVja2JveCBpcyBhY3RpdmUgKi9cXG4uY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiB2YXIoLS1EYXJrLWxpdmVyKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jbWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX3RpdGxlOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1HaG9zdC13aGl0ZTMpO1xcbn1cXG5cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX3RpdGxlLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNsaXN0LWFycm93IHtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDE2JSkgc2F0dXJhdGUoMzI2JSkgaHVlLXJvdGF0ZSgxOTlkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4jbGlzdC1hcnJvdzpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCgzOSUpIHNlcGlhKDM2JSkgc2F0dXJhdGUoMjI2MSUpIGh1ZS1yb3RhdGUoMjEwZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoOTMlKTtcXG59XFxuXFxuI2xpc3QtYXJyb3cucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogTGlzdCBJdGVtIE5vdGVzICovXFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19ub3Rlcy1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19ub3Rlcy1jb250YWluZXIgbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4jbWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX3RleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR2hvc3Qtd2hpdGUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgY29sb3I6IHZhcigtLURhcmstbGl2ZXIpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jbWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX3RleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1HaG9zdC13aGl0ZTMpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogTGlzdCBJdGVtIERhdGUgKi9cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX2RhdGUtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX2RhdGUtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX2RhdGUtY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0b2RheS1idG4ge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG5cXG4jdG9tb3Jyb3ctYnRuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVVsdHJhbWFyaW5lLWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxufVxcblxcbi5hY3RpdmVEYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBhcmFkaXNlLVBpbmspO1xcbn1cXG5cXG4jbWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX2RhdGUuYWN0aXZlRGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QYXJhZGlzZS1QaW5rKTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlOmhvdmVyLFxcbi5tYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fZGF0ZS1jb250YWluZXIgPiBkaXYgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tVWx0cmEtUmVkKTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlOmFjdGl2ZSxcXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX2RhdGUtY29udGFpbmVyID4gZGl2ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlOmZvY3VzLFxcbi5tYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fZGF0ZS1jb250YWluZXIgPiBkaXYgPiBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBhcmFkaXNlLVBpbmspO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBjaGFuZ2UgdGhlIGNvbG9yIG9mIGRhdGUgaWNvbiAqL1xcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIExpc3QgSXRlbSBQcmlvcml0eSAqL1xcbi5tYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fcHJpb3JpdHktY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMy80O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fcHJpb3JpdHktY29udGFpbmVyIGxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG59XFxuXFxuI21haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19wcmlvcml0eSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX3ByaW9yaXR5IG9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1HaG9zdC13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tRGFyay1saXZlcik7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIExpc3QgSXRlbSBCdG4gKi9cXG4ubWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX2RlbGV0ZS10YXNrX19idG4ge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogQWRkIFRhc2sgc3R5bGUgKi9cXG4ubWlkZGxlX190YXNrLWxpc3RfX2FkZC10YXNrX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMC44cmVtO1xcbiAgZ2FwOiAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5taWRkbGVfX3Rhc2stbGlzdF9fYWRkLXRhc2tfY29udGFpbmVyLnZpc2libGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1pZGRsZV9fdGFzay1saXN0X19hZGQtdGFza19jb250YWluZXI6Zm9jdXMtd2l0aGluIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUdob3N0LXdoaXRlMyk7XFxufVxcblxcbi5taWRkbGVfX3Rhc2stbGlzdF9fYWRkLXRhc2tfY29udGFpbmVyID4gc3ZnOmhvdmVyIHtcXG4gIGZpbGw6IHZhcigtLVVsdHJhbWFyaW5lLWJsdWUpO1xcbn1cXG5cXG4jbWFpbl9fdGFzay1saXN0X19hZGQtdGFzayxcXG4jdG9kb19fdGFzay1saXN0X19hZGQtdG9kbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDByZW0gMC4ycmVtO1xcbn1cXG5cXG4jbWFpbl9fdGFzay1saXN0X19hZGQtdGFzazpmb2N1cyxcXG4jdG9kb19fdGFzay1saXN0X19hZGQtdG9kbzpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWlkZGxlLXNlY3Rpb25fX25vcHJvamVjdHNfX2NvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdHJhbnNpdGlvbjogdmFyKC0tb3BhY2l0eS10cmFuc2l0aW9uKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1pZGRsZS1zZWN0aW9uX19ub3Byb2plY3RzX19jb250YWluZXIudmlzaWJsZSB7XFxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbn1cXG5cXG4ubWlkZGxlLXNlY3Rpb25fX25vcHJvamVjdHNfX2NvbnRhaW5lciA+IHN2ZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5taWRkbGUtc2VjdGlvbl9fbm9wcm9qZWN0c19fY29udGFpbmVyIGgyIHtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9taWRkbGUtc2VjdGlvbi9ub3Byb2plY3Qtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1pZGRsZS1zZWN0aW9uX19ub3Byb2plY3RzX19jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRyYW5zaXRpb246IHZhcigtLW9wYWNpdHktdHJhbnNpdGlvbik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5taWRkbGUtc2VjdGlvbl9fbm9wcm9qZWN0c19fY29udGFpbmVyLnZpc2libGUge1xcbiAgLyogZGlzcGxheTogZmxleDsgKi9cXG59XFxuXFxuLm1pZGRsZS1zZWN0aW9uX19ub3Byb2plY3RzX19jb250YWluZXIgPiBzdmcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubWlkZGxlLXNlY3Rpb25fX25vcHJvamVjdHNfX2NvbnRhaW5lciBoMiB7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcmljaC1ibGFjazogIzBlMGUwZjtcXG4gIC0tZWVyaWUtYmxhY2s6ICMyMTIxMjE7XFxuICAtLWdhaW5zYm9ybzogI2RiZDZkZDtcXG4gIC0tYmF0dGxlc2hpcC1ncmF5OiAjODk4OTg5O1xcbiAgLS1kZXNlcnQtc2FuZDogI2ViYmNhMTtcXG4gIC0td2hpdGU6ICNmZmZmO1xcbiAgLS1jYW5hcnk6ICNmZmY2ODk7XFxuICAtLVZlcmRpZ3JpczogIzI4YWZiMDtcXG4gIC0tT3JhbmdlLVllbGxvdy1DcmF5b2xhOiAjZjRkMzVlO1xcbiAgLS1PcmFuZ2UtcmVkLWNyYXlvbGE6ICNmZjU3NTc7XFxuICAtLVBhcmFkaXNlLVBpbms6ICNlZjQ3NmY7XFxuICAtLUNhcmliaWFuLUdyZWVuOiAjMDZjZmQ2O1xcbiAgLS1VbHRyYS1SZWQ6ICNmZjY5Nzg7XFxuICAtLUJhYnktUG93ZGVyOiAjZmZmY2Y5O1xcbiAgLS1DZWxlc3RlOiAjYjFlZGU4O1xcbiAgLS1DYXJvbGluYS1ibHVlOiAjNGU5ZmQxO1xcbiAgLS1Sb2Jpbi1lZ2ctYmx1ZTogIzQyYzdjODtcXG4gIC0tQmx1ZS15b25kZXI6ICM0ODc0YTg7XFxuICAtLUN5YmVyLWdyYXBlOiAjNWU0MTcwO1xcbiAgLS1QdXJwbGUtTmF2eTogIzU5NTM4NjtcXG4gIC0tUGlzdGFjaGlvOiAjOGFjMDZkO1xcbiAgLS1NYXhpbXVtLXllbGxvdy1yZWQ6ICNmZmNjNzQ7XFxuICAtLUJsdWUtc2FwcGhpcmU6ICMxMjVkODI7XFxuICAtLU1hZ25vbGlhOiAjZTVlMmViO1xcbiAgLS1HaG9zdC13aGl0ZTogI2YxZjRmZDtcXG4gIC0tR2hvc3Qtd2hpdGUyOiAjZjdmNmZiO1xcbiAgLS1HaG9zdC13aGl0ZTM6ICNlM2U2ZWQ7XFxuICAtLVVsdHJhbWFyaW5lLWJsdWU6ICM1NDY4ZWE7XFxuICAtLVdoaXRlOiAjZmZmZmZmO1xcbiAgLS1EYXJrLWxpdmVyOiAjN2I3YzhlO1xcblxcbiAgLyogLS0tLWJvcmRlci0tLSAqL1xcbiAgLS10b3AtcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcXG4gIC0tYm90dG9tLXJhZGl1czogMHB4IDBweCAzMHB4IDMwcHg7XFxuICAtLWJvdHRvbS1yYWRpdXMtc2VjdGlvbjogMHB4IDBweCAwcHggMzBweDtcXG5cXG4gIC8qIERBVEUgSW5wdXQgYm9yZGVyIHJhZGl1cyAqL1xcbiAgLS1ib3JkZXItcmFkaXVzLXZhbHVlOiAxMHB4O1xcblxcbiAgLyogQm94LVNoYWRvd3MgKi9cXG4gIC0tYm94LXNoYWRvd3M6IDFweCAxcHggMnB4IDFweCAjZWRlZGVkO1xcblxcbiAgLyogT3BhY2l0eSB0cmFuc2l0aW9uICovXFxuICAtLW9wYWNpdHktdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiA1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTWFnbm9saWEpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6IHZhcigtLURhcmstbGl2ZXIpO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAvKiAgIC0tamItZGF0ZS1pbnB1dC12YWx1ZS1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgLS1qYi1kYXRlLWlucHV0LWJnY29sb3I6IHZhcigtLVVsdHJhbWFyaW5lLWJsdWUpO1xcbiAgLS1qYi1kYXRlLWlucHV0LWJveC1oZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgLS1qYi1kYXRlLWlucHV0LW1hcmdpbjogMXJlbTsgKi9cXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEuMnJlbSAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1VbHRyYW1hcmluZS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1HaG9zdC13aGl0ZSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxLjAyNSk7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tVWx0cmEtUmVkKTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QYXJhZGlzZS1QaW5rKTtcXG59XFxuXFxuYnV0dG9uLFxcbmxhYmVsLFxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCxcXG5vcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgyLFxcbmgzIHtcXG4gIGNvbG9yOiB2YXIoLS1lZXJpZS1ibGFjayk7XFxufVxcblxcbnN2ZyB7XFxuICBmaWxsOiB2YXIoLS1EYXJrLWxpdmVyKTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG4jYmcge1xcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogaW5oZXJpdDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGluaGVyaXQ7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUdob3N0LXdoaXRlKTtcXG59XFxuXFxuLm9wYWNpdHlPbiB7XFxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcGFjaXR5T2ZmIHtcXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zaGFyZWQtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixxQkFBcUI7O0VBRXJCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLHlDQUF5Qzs7RUFFekMsNkJBQTZCO0VBQzdCLDJCQUEyQjs7RUFFM0IsZ0JBQWdCO0VBQ2hCLHNDQUFzQzs7RUFFdEMsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4Qix5Q0FBeUM7RUFDekM7OztpQ0FHK0I7QUFDakM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMseUNBQXlDO0VBQ3pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixzQ0FBc0M7QUFDeEM7O0FBRUE7Ozs7OztFQU1FLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1yaWNoLWJsYWNrOiAjMGUwZTBmO1xcbiAgLS1lZXJpZS1ibGFjazogIzIxMjEyMTtcXG4gIC0tZ2FpbnNib3JvOiAjZGJkNmRkO1xcbiAgLS1iYXR0bGVzaGlwLWdyYXk6ICM4OTg5ODk7XFxuICAtLWRlc2VydC1zYW5kOiAjZWJiY2ExO1xcbiAgLS13aGl0ZTogI2ZmZmY7XFxuICAtLWNhbmFyeTogI2ZmZjY4OTtcXG4gIC0tVmVyZGlncmlzOiAjMjhhZmIwO1xcbiAgLS1PcmFuZ2UtWWVsbG93LUNyYXlvbGE6ICNmNGQzNWU7XFxuICAtLU9yYW5nZS1yZWQtY3JheW9sYTogI2ZmNTc1NztcXG4gIC0tUGFyYWRpc2UtUGluazogI2VmNDc2ZjtcXG4gIC0tQ2FyaWJpYW4tR3JlZW46ICMwNmNmZDY7XFxuICAtLVVsdHJhLVJlZDogI2ZmNjk3ODtcXG4gIC0tQmFieS1Qb3dkZXI6ICNmZmZjZjk7XFxuICAtLUNlbGVzdGU6ICNiMWVkZTg7XFxuICAtLUNhcm9saW5hLWJsdWU6ICM0ZTlmZDE7XFxuICAtLVJvYmluLWVnZy1ibHVlOiAjNDJjN2M4O1xcbiAgLS1CbHVlLXlvbmRlcjogIzQ4NzRhODtcXG4gIC0tQ3liZXItZ3JhcGU6ICM1ZTQxNzA7XFxuICAtLVB1cnBsZS1OYXZ5OiAjNTk1Mzg2O1xcbiAgLS1QaXN0YWNoaW86ICM4YWMwNmQ7XFxuICAtLU1heGltdW0teWVsbG93LXJlZDogI2ZmY2M3NDtcXG4gIC0tQmx1ZS1zYXBwaGlyZTogIzEyNWQ4MjtcXG4gIC0tTWFnbm9saWE6ICNlNWUyZWI7XFxuICAtLUdob3N0LXdoaXRlOiAjZjFmNGZkO1xcbiAgLS1HaG9zdC13aGl0ZTI6ICNmN2Y2ZmI7XFxuICAtLUdob3N0LXdoaXRlMzogI2UzZTZlZDtcXG4gIC0tVWx0cmFtYXJpbmUtYmx1ZTogIzU0NjhlYTtcXG4gIC0tV2hpdGU6ICNmZmZmZmY7XFxuICAtLURhcmstbGl2ZXI6ICM3YjdjOGU7XFxuXFxuICAvKiAtLS0tYm9yZGVyLS0tICovXFxuICAtLXRvcC1yYWRpdXM6IDMwcHggMzBweCAwcHggMHB4O1xcbiAgLS1ib3R0b20tcmFkaXVzOiAwcHggMHB4IDMwcHggMzBweDtcXG4gIC0tYm90dG9tLXJhZGl1cy1zZWN0aW9uOiAwcHggMHB4IDBweCAzMHB4O1xcblxcbiAgLyogREFURSBJbnB1dCBib3JkZXIgcmFkaXVzICovXFxuICAtLWJvcmRlci1yYWRpdXMtdmFsdWU6IDEwcHg7XFxuXFxuICAvKiBCb3gtU2hhZG93cyAqL1xcbiAgLS1ib3gtc2hhZG93czogMXB4IDFweCAycHggMXB4ICNlZGVkZWQ7XFxuXFxuICAvKiBPcGFjaXR5IHRyYW5zaXRpb24gKi9cXG4gIC0tb3BhY2l0eS10cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NYWdub2xpYSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBjb2xvcjogdmFyKC0tRGFyay1saXZlcik7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIC8qICAgLS1qYi1kYXRlLWlucHV0LXZhbHVlLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICAtLWpiLWRhdGUtaW5wdXQtYmdjb2xvcjogdmFyKC0tVWx0cmFtYXJpbmUtYmx1ZSk7XFxuICAtLWpiLWRhdGUtaW5wdXQtYm94LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAtLWpiLWRhdGUtaW5wdXQtbWFyZ2luOiAxcmVtOyAqL1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMS4ycmVtIDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVVsdHJhbWFyaW5lLWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLUdob3N0LXdoaXRlKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEuMDI1KTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1VbHRyYS1SZWQpO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBhcmFkaXNlLVBpbmspO1xcbn1cXG5cXG5idXR0b24sXFxubGFiZWwsXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0LFxcbm9wdGlvbiB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaDIsXFxuaDMge1xcbiAgY29sb3I6IHZhcigtLWVlcmllLWJsYWNrKTtcXG59XFxuXFxuc3ZnIHtcXG4gIGZpbGw6IHZhcigtLURhcmstbGl2ZXIpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDI0cHg7XFxufVxcblxcbiNiZyB7XFxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGluaGVyaXQ7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGluaGVyaXQ7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogaW5oZXJpdDtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR2hvc3Qtd2hpdGUpO1xcbn1cXG5cXG4ub3BhY2l0eU9uIHtcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG59XFxuXFxuLm9wYWNpdHlPZmYge1xcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHNlY29uZCBhcmd1bWVudCBpcyBub3cgcmVxdWlyZWQgZm9yIHRoZSBzYWtlIG9mIGV4cGxpY2l0bmVzcy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgXCJ5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4XCIpXG4gKiAgIGBgYFxuICpcbiAqIC0gTmV3IGZvcm1hdCBzdHJpbmcgQVBJIGZvciBgZm9ybWF0YCBmdW5jdGlvblxuICogICB3aGljaCBpcyBiYXNlZCBvbiBbVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1XShodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlKS5cbiAqICAgU2VlIFt0aGlzIHBvc3RdKGh0dHBzOi8vYmxvZy5kYXRlLWZucy5vcmcvcG9zdC91bmljb2RlLXRva2Vucy1pbi1kYXRlLWZucy12Mi1zcmVhdHlraTkxamcpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogLSBDaGFyYWN0ZXJzIGFyZSBub3cgZXNjYXBlZCB1c2luZyBzaW5nbGUgcXVvdGUgc3ltYm9scyAoYCdgKSBpbnN0ZWFkIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvbW9ycm93XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvbW9ycm93P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvbW9ycm93P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvbW9ycm93XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDcgT2N0b2JlciAxNDowMDowMCB0b21vcnJvdz9cbiAqIHZhciByZXN1bHQgPSBpc1RvbW9ycm93KG5ldyBEYXRlKDIwMTQsIDksIDcsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9tb3Jyb3coZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgYWRkRGF5cyhEYXRlLm5vdygpLCAxKSk7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsIi8qKlxuICogQG5hbWUgc3RhcnRPZlRvbW9ycm93XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgdG9tb3Jyb3cuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiB0b21vcnJvdy5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBuZXcgRGF0ZSgpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIHRvbW9ycm93XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlRvbW9ycm93KClcbiAqIC8vPT4gVHVlIE9jdCA3IDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlRvbW9ycm93KCkge1xuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgdmFyIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoID0gbm93LmdldE1vbnRoKCk7XG4gIHZhciBkYXkgPSBub3cuZ2V0RGF0ZSgpO1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXkgKyAxKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXItc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXItc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FkZC1wcm9qZWN0LWJ0bi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FkZC1wcm9qZWN0LWJ0bi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS1jb250YWluZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLWNvbnRhaW5lci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi1sZWZ0LXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi1sZWZ0LXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LWNvbnRhaW5lci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QtY29udGFpbmVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LWNyZWF0ZS1mb3JtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC1jcmVhdGUtZm9ybS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi1taWRkbGUtc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLW1pZGRsZS1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWlkZGxlLWhlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21pZGRsZS1oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21pZGRsZS1zb3J0aW5nLWJveC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21pZGRsZS1zb3J0aW5nLWJveC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWlkZGxlLXRvZG8tbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21pZGRsZS10b2RvLWxpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcHJvamVjdC1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcHJvamVjdC1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hhcmVkLXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hhcmVkLXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2Nzcy9zaGFyZWQtc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9taWRkbGUtc2VjdGlvbi9tYWluLW1pZGRsZS1zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2xlZnQtc2VjdGlvbi9tYWluLWxlZnQtc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9sZWZ0LXNlY3Rpb24vYWRkLXByb2plY3QtYnRuLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvbGVmdC1zZWN0aW9uL2hvbWUtY29udGFpbmVyLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvbGVmdC1zZWN0aW9uL3Byb2plY3QtY29udGFpbmVyLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvbGVmdC1zZWN0aW9uL3Byb2plY3QtY3JlYXRlLWZvcm0uY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9taWRkbGUtc2VjdGlvbi9taWRkbGUtaGVhZGVyLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvbWlkZGxlLXNlY3Rpb24vbWlkZGxlLXNvcnRpbmctYm94LmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvbWlkZGxlLXNlY3Rpb24vbWlkZGxlLXRvZG8tbGlzdC5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL21pZGRsZS1zZWN0aW9uL25vcHJvamVjdC1zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2hlYWRlci1zdHlsZS5jc3NcIjtcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tIFwiLi9qcy1tb2R1bGVzL2V2ZW50LWxpc3RlbmVyc1wiO1xuIiwiY29uc3QgcHJvamVjdEFycmF5ID0gW107XG5cbmNvbnN0IHRvZG9BcnJheSA9IFtdO1xuXG5leHBvcnQgeyBwcm9qZWN0QXJyYXksIHRvZG9BcnJheSB9O1xuIiwiY29uc3QgcHJvamVjdElucHV0RG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbl9fdGFzay1saXN0X19hZGQtdGFza1wiKTtcbmNvbnN0IHByb2plY3RMaXN0RG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1zZWN0aW9uX19wcm9qZWN0c19fY29udGFpbmVyIHVsXCIpO1xuY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3RfX2l0ZW1cIik7XG5jb25zdCBwcm9qZWN0SW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFwiKTtcbmNvbnN0IGhvbWVMaXN0RG9tZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtc2VjdGlvbl9faG9tZS1jb250YWluZXJcIik7XG5jb25zdCBub3RQcm9qZWN0WWV0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWRkbGUtc2VjdGlvbl9fbm9wcm9qZWN0c19fY29udGFpbmVyXCIpO1xuY29uc3QgbWlkZGxlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkZGxlLXNlY3Rpb25cIik7XG5jb25zdCB0b2RvSGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19jb250YWluZXJfX2hlYWRlclwiKTtcbmNvbnN0IHRvZG9IZWFkZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fY29udGFpbmVyX19oZWFkZXIgaDJcIik7XG5jb25zdCB0b2RvU29ydE9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2hlYWRlcl9fc29ydC1jb250YWluZXJfX29wdGlvbnNcIik7XG5jb25zdCB0b2RvU29ydE9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19zb3J0aW5nLW9yZGVyXCIpO1xuY29uc3QgYWRkVG9kb1Rhc2tJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlX190YXNrLWxpc3RfX2FkZC10YXNrX2NvbnRhaW5lclwiKTtcbmNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX190YXNrLWxpc3RfX2xpc3RcIik7XG5jb25zdCBzb3J0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19oZWFkZXJfX3NvcnQtY29udGFpbmVyXCIpO1xuY29uc3Qgc2hvcnRpbmdBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fc29ydGluZy1vcmRlciBzdmdcIik7XG5cbmV4cG9ydCB7XG4gIHByb2plY3RJbnB1dERvbUVsZW1lbnQsXG4gIHByb2plY3RMaXN0RG9tRWxlbWVudCxcbiAgcHJvamVjdExpc3RJdGVtLFxuICBwcm9qZWN0SW5wdXRWYWx1ZSxcbiAgaG9tZUxpc3REb21lRWxlbWVudCxcbiAgbm90UHJvamVjdFlldENvbnRhaW5lcixcbiAgbWlkZGxlU2VjdGlvbixcbiAgdG9kb0hlYWRlclRpdGxlLFxuICB0b2RvSGVhZGVyQ29udGFpbmVyLFxuICB0b2RvU29ydE9wdGlvbnNDb250YWluZXIsXG4gIHRvZG9Tb3J0T3JkZXIsXG4gIGFkZFRvZG9UYXNrSW5wdXRDb250YWluZXIsXG4gIHNvcnRCdXR0b24sXG4gIHRvZG9MaXN0LFxuICBzaG9ydGluZ0Fycm93LFxufTtcbiIsImltcG9ydCB7XG4gIHByb2plY3RJbnB1dERvbUVsZW1lbnQgYXMgaW5wdXQsXG4gIHByb2plY3RMaXN0RG9tRWxlbWVudCBhcyBwcm9qZWN0TGlzdCxcbiAgaG9tZUxpc3REb21lRWxlbWVudCBhcyBob21lLFxuICBhZGRUb2RvVGFza0lucHV0Q29udGFpbmVyIGFzIHRvZG9JbnB1dCxcbiAgc29ydEJ1dHRvbixcbiAgdG9kb0xpc3QsXG4gIHRvZG9Tb3J0T3B0aW9uc0NvbnRhaW5lcixcbn0gZnJvbSBcIi4vZG9tLWVsZW1lbnRzXCI7XG5pbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSBcIi4vdXRpbGl0aWVzLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlSGFuZGxlciB9IGZyb20gXCIuL21haW5FdmVudEZ1bmN0aW9ucy93aW5kb3ctTG9hZFwiO1xuaW1wb3J0ICogYXMgaG9tZUZ1bmMgZnJvbSBcIi4vbWFpbkV2ZW50RnVuY3Rpb25zL2hvbWUtU2VjdGlvblwiO1xuaW1wb3J0IHsgbmV3UHJvamVjdEhhbmRsZXIgfSBmcm9tIFwiLi9tYWluRXZlbnRGdW5jdGlvbnMvcHJvamVjdC1DcmVhdGVcIjtcbmltcG9ydCB7IHByb2plY3RTZWN0aW9uU2VsZWN0aW9uSGFuZGxlciB9IGZyb20gXCIuL21haW5FdmVudEZ1bmN0aW9ucy9wcm9qZWN0LUl0ZW0tRnVuY3Rpb25hbGl0eVwiO1xuaW1wb3J0IHsgcmVuYW1lUHJvamVjdExpc3RJdGVtIH0gZnJvbSBcIi4vbWFpbkV2ZW50RnVuY3Rpb25zL3Byb2plY3QtUmVuYW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvSGFuZGxlciB9IGZyb20gXCIuL21haW5FdmVudEZ1bmN0aW9ucy90b2RvLWNyZWF0ZVwiO1xuaW1wb3J0IHtcbiAgdG9kb1NlY3Rpb25IYW5kbGVyLFxuICB0b2RvUmVuYW1lSGFuZGxlcixcbiAgdG9kb1RleHRBcmVhSGFuZGxlcixcbn0gZnJvbSBcIi4vbWFpbkV2ZW50RnVuY3Rpb25zL3RvZG8taXRlbS1mdW5jdGlvbmFsaXR5XCI7XG5pbXBvcnQgeyBzb3J0VG9kb0hhbmRsZXIgfSBmcm9tIFwiLi9tYWluRXZlbnRGdW5jdGlvbnMvc29ydC10b2Rvc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbG9jYWxTdG9yYWdlSGFuZGxlcik7XG4vLyBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lU2VjdGlvbkhhbmRsZXIpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQsIHRpdGxlVGV4dCwgdGFyZ2V0RGF0YSwgYnlEYXRlT2JqZWN0UHJvcGVydHkgfSA9IGhvbWVGdW5jLmNyZWF0ZURhdGFPYmplY3QoZSk7XG4gIC8vIGlmICghbG9jYWxTdG9yYWdlLmxlbmd0aCB8fCAhdGFyZ2V0RGF0YSkgcmV0dXJuO1xuXG4gIGlmIChieURhdGVPYmplY3RQcm9wZXJ0eS5sZW5ndGgpIHtcbiAgICBob21lRnVuYy5oaWdobGlnaHRIb21lVGFicyh0YXJnZXQpO1xuXG4gICAgaG9tZUZ1bmMuc2V0QXR0cmlidXRlVG9Tb3J0QnV0dG9uKHRhcmdldERhdGEpO1xuXG4gICAgaG9tZUZ1bmMuY2hhbmdlVG9kb0NvbnRhaW5lclRpdGxlKHRpdGxlVGV4dCk7XG5cbiAgICBob21lRnVuYy5tYWtlSGVhZGVyVmlzaWJsZSgpO1xuXG4gICAgaG9tZUZ1bmMubWFrZVRvZG9JbnB1dEhpZGRlbigpO1xuXG4gICAgaG9tZUZ1bmMuZGVsZXRlVG9kb0RvbUxpc3QoKTtcblxuICAgIGhvbWVGdW5jLnJlbmRlclRhc2tzQnlEYXRlKGJ5RGF0ZU9iamVjdFByb3BlcnR5KTtcbiAgfVxufSk7XG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBuZXdQcm9qZWN0SGFuZGxlcik7XG5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdFNlY3Rpb25TZWxlY3Rpb25IYW5kbGVyKTtcbnByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCByZW5hbWVQcm9qZWN0TGlzdEl0ZW0pO1xudG9kb0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBjcmVhdGVUb2RvSGFuZGxlcik7XG50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb1NlY3Rpb25IYW5kbGVyKTtcbnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCB0b2RvUmVuYW1lSGFuZGxlcik7XG50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgdG9kb1RleHRBcmVhSGFuZGxlcik7XG5zb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlsaXRpZXMudG9nZ2xlU29ydGluZ09wdGlvblZpc2liaWxpdHkpO1xudG9kb1NvcnRPcHRpb25zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzb3J0VG9kb0hhbmRsZXIpO1xuIiwiaW1wb3J0ICogYXMgdXRpbGl0aWVzIGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvdXRpbGl0aWVzLWZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0ICogYXMgcmVuZGVyTW9kdWxlIGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvcmVuZGVyLXByb2plY3QuanNcIjtcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnQgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy9kb20tZWxlbWVudHMuanNcIjtcblxuLy8gZnVuY3Rpb24gaG9tZVNlY3Rpb25GdW5jdGlvbmFsaXR5KGRhdGFTZXQsIHRleHQsIHByb2plY3RQcm9wZXJ0eSwgaG9tZVNwZWNpZmljRGl2KSB7XG4vLyB1dGlsaXRpZXMuaGlnaGxpZ2h0KGhvbWVTcGVjaWZpY0Rpdik7XG4vLyBkb21FbGVtZW50LnNvcnRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1tb2RlXCIsIGAke2RhdGFTZXR9YCk7XG4vLyBkb21FbGVtZW50LnRvZG9IZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IHRleHQ7XG4vLyBkb21FbGVtZW50LnRvZG9IZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4vLyBkb21FbGVtZW50LmFkZFRvZG9UYXNrSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4vLyBkb21FbGVtZW50LnRvZG9MaXN0LnJlcGxhY2VDaGlsZHJlbigpO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlVG9Tb3J0QnV0dG9uKGRhdGFTZXQpIHtcbiAgZG9tRWxlbWVudC5zb3J0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtbW9kZVwiLCBgJHtkYXRhU2V0fWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVG9kb0NvbnRhaW5lclRpdGxlKHRleHQpIHtcbiAgZG9tRWxlbWVudC50b2RvSGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUhlYWRlclZpc2libGUoKSB7XG4gIGRvbUVsZW1lbnQudG9kb0hlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVG9kb0lucHV0SGlkZGVuKCkge1xuICBkb21FbGVtZW50LmFkZFRvZG9UYXNrSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb2RvRG9tTGlzdCgpIHtcbiAgZG9tRWxlbWVudC50b2RvTGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hsaWdodEhvbWVUYWJzKGhvbWVTcGVjaWZpY0Rpdikge1xuICB1dGlsaXRpZXMuaGlnaGxpZ2h0KGhvbWVTcGVjaWZpY0Rpdik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrc0J5RGF0ZShwcm9qZWN0UHJvcGVydHkpIHtcbiAgcHJvamVjdFByb3BlcnR5LmZvckVhY2goKGl0ZW0pID0+IHJlbmRlck1vZHVsZS5yZW5kZXJQcm9qZWN0VG9kb0xpc3RJdGVtLmNhbGwoaXRlbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0YU9iamVjdChlKSB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlVGV4dCA9IHRhcmdldC5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcbiAgY29uc3QgdGFyZ2V0RGF0YSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXZcIikuZGF0YXNldC5hcnJheTtcbiAgY29uc3QgeyBbdGFyZ2V0RGF0YV06IGJ5RGF0ZU9iamVjdFByb3BlcnR5IH0gPSB1dGlsaXRpZXMuZ2V0VG9kb0J5RGF0ZSgpO1xuXG4gIC8vIGlmICghbG9jYWxTdG9yYWdlLmxlbmd0aCB8fCAhdGFyZ2V0RGF0YSkgcmV0dXJuO1xuXG4gIC8vIGlmIChieURhdGVPYmplY3RQcm9wZXJ0eS5sZW5ndGgpIHtcbiAgLy8gICBob21lU2VjdGlvbkZ1bmN0aW9uYWxpdHkodGFyZ2V0RGF0YSwgdGl0bGVUZXh0LCBieURhdGVPYmplY3RQcm9wZXJ0eSwgdGFyZ2V0KTtcbiAgLy8gfVxuXG4gIHJldHVybiB7IHRhcmdldCwgdGl0bGVUZXh0LCB0YXJnZXREYXRhLCBieURhdGVPYmplY3RQcm9wZXJ0eSB9O1xufVxuIiwiaW1wb3J0ICogYXMgdXRpbGl0aWVzIGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvdXRpbGl0aWVzLWZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0ICogYXMgcmVuZGVyTW9kdWxlIGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvcmVuZGVyLXByb2plY3QuanNcIjtcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvYXJyYXlzLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL3Byb2plY3QtY2xhc3NcIjtcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnQgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy9kb20tZWxlbWVudHMuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Byb2plY3RIYW5kbGVyKGUpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgY29uc3QgcHJvamVjdElkID0gdXRpbGl0aWVzLnJhbmRvbU51bWJlcigpO1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RJZCk7XG5cbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgZG9tRWxlbWVudC5wcm9qZWN0SW5wdXREb21FbGVtZW50LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XG5cbiAgICB1dGlsaXRpZXMuc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuXG4gICAgdXRpbGl0aWVzLmNsZWFySW5wdXRWYWx1ZSgpO1xuXG4gICAgcmVuZGVyTW9kdWxlLnJlbmRlclByb2plY3RMaXN0SXRlbS5jYWxsKHByb2plY3QpO1xuICB9XG4gIHV0aWxpdGllcy50b2dnbGVOb3RQcm9qZWN0U2NyZWVuKCk7XG59XG4iLCJpbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy91dGlsaXRpZXMtZnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL2FycmF5cy5qc1wiO1xuaW1wb3J0ICogYXMgZG9tRWxlbWVudCBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL2RvbS1lbGVtZW50cy5qc1wiO1xuXG5mdW5jdGlvbiBoaWRlRG9tZUVsZW1lbnRzKCkge1xuICBkb21FbGVtZW50LnRvZG9IZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gIGRvbUVsZW1lbnQuYWRkVG9kb1Rhc2tJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJIZWFkZXJUaXRsZVRleHQoKSB7XG4gIGRvbUVsZW1lbnQudG9kb0hlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZGVsZXRlRnJvbUFycmF5QW5kRG9tKHByb2plY3RTZWxlY3Rpb24sIGxpc3QsIGluZGV4KSB7XG4gIHV0aWxpdGllcy5kZWxldGVGcm9tQXJyYXkocHJvamVjdEFycmF5LCBpbmRleCk7XG4gIGxpc3QucmVtb3ZlQ2hpbGQocHJvamVjdFNlbGVjdGlvbik7XG4gIGRvbUVsZW1lbnQudG9kb0xpc3QucmVwbGFjZUNoaWxkcmVuKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0TGlzdEl0ZW0ocHJvamVjdFNlbGVjdGlvbiwgbGlzdCwgaW5kZXgpIHtcbiAgaGlkZURvbWVFbGVtZW50cygpO1xuXG4gIGNsZWFySGVhZGVyVGl0bGVUZXh0KCk7XG5cbiAgZGVsZXRlRnJvbUFycmF5QW5kRG9tKHByb2plY3RTZWxlY3Rpb24sIGxpc3QsIGluZGV4KTtcblxuICB1dGlsaXRpZXMuc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuXG4gIHV0aWxpdGllcy51cGRhdGVUb2RvQnlEYXRlVG90YWxzKCk7XG5cbiAgaWYgKCFwcm9qZWN0QXJyYXkubGVuZ3RoKSB7XG4gICAgZG9tRWxlbWVudC50b2RvTGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB1dGlsaXRpZXMuY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICB1dGlsaXRpZXMudG9nZ2xlTm90UHJvamVjdFNjcmVlbigpO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy91dGlsaXRpZXMtZnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL2FycmF5cy5qc1wiO1xuaW1wb3J0IHtcbiAgYWRkVG9kb1Rhc2tJbnB1dENvbnRhaW5lciBhcyB0b2RvSW5wdXQsXG4gIHRvZG9IZWFkZXJUaXRsZSBhcyB0b2RvVGl0bGUsXG4gIHRvZG9IZWFkZXJDb250YWluZXIgYXMgaGVhZGVyLFxuICBhZGRUb2RvVGFza0lucHV0Q29udGFpbmVyIGFzIG5ld1RvZG9JbnB1dCxcbn0gZnJvbSBcIi9zcmMvanMtbW9kdWxlcy9kb20tZWxlbWVudHMuanNcIjtcblxuaW1wb3J0IHsgZGVsZXRlUHJvamVjdExpc3RJdGVtIH0gZnJvbSBcIi9zcmMvanMtbW9kdWxlcy9tYWluRXZlbnRGdW5jdGlvbnMvcHJvamVjdC1EZWxldGUuanNcIjtcbmltcG9ydCB7IHJlbmRlclRvZG9XaGlsZVN3aXRjaGluZ1Byb2plY3RzIH0gZnJvbSBcIi9zcmMvanMtbW9kdWxlcy9tYWluRXZlbnRGdW5jdGlvbnMvcHJvamVjdC1SZW5kZXItVG9kby5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvRGF0YVNldCgpIHtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCB0aGlzLmlkKTtcbiAgY29uc3QgdG9kb0lucHV0ID0gbmV3VG9kb0lucHV0Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gIHRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtVG9kby1JRFwiLCB0aGlzLmlkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RTZWN0aW9uU2VsZWN0aW9uSGFuZGxlcihlKSB7XG4gIGNvbnN0IHByb2plY3REb21JdGVtID0gZS50YXJnZXQuY2xvc2VzdChcImxpXCIpO1xuICBpZiAoIXByb2plY3REb21JdGVtKSByZXR1cm47XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gcHJvamVjdERvbUl0ZW0ucGFyZW50RWxlbWVudDtcbiAgY29uc3QgcHJvamVjdExpc3RJdGVtSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdElkIHx8IHByb2plY3REb21JdGVtLmRhdGFzZXQucHJvamVjdElkO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSB1dGlsaXRpZXMuZ2V0SW5kZXgocHJvamVjdEFycmF5LCBwcm9qZWN0TGlzdEl0ZW1JZCk7XG4gIGNvbnN0IHNwZWNpZmljUHJvamVjdCA9IHByb2plY3RBcnJheVtwcm9qZWN0SW5kZXhdO1xuXG4gIHV0aWxpdGllcy5oaWdobGlnaHQocHJvamVjdERvbUl0ZW0pO1xuXG4gIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHNwZWNpZmljUHJvamVjdC5uYW1lO1xuXG4gIGNyZWF0ZVRvZG9EYXRhU2V0LmNhbGwoc3BlY2lmaWNQcm9qZWN0KTtcblxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG5cbiAgdG9kb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuXG4gIHJlbmRlclRvZG9XaGlsZVN3aXRjaGluZ1Byb2plY3RzKHNwZWNpZmljUHJvamVjdCk7XG5cbiAgaWYgKGUudGFyZ2V0LmlkID09PSBcImdhcmJhZ2VJY29uXCIpIHtcbiAgICBkZWxldGVQcm9qZWN0TGlzdEl0ZW0ocHJvamVjdERvbUl0ZW0sIHByb2plY3RMaXN0LCBwcm9qZWN0SW5kZXgpO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy91dGlsaXRpZXMtZnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL2FycmF5cy5qc1wiO1xuaW1wb3J0IHsgdG9kb0hlYWRlclRpdGxlIGFzIHRvZG9UaXRsZSB9IGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvZG9tLWVsZW1lbnRzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVQcm9qZWN0TGlzdEl0ZW0oZSkge1xuICBjb25zdCBuZXdUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQ7XG5cbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgbmV3VGV4dCkge1xuICAgIHByb2plY3RBcnJheVxuICAgICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gTnVtYmVyKHByb2plY3RJZCkpXG4gICAgICAubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QubmFtZSA9IG5ld1RleHQ7XG4gICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgdXRpbGl0aWVzLnNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UocHJvamVjdEFycmF5KTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc29ydEJ1dHRvbiwgdG9kb0xpc3QgfSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL2RvbS1lbGVtZW50cy5qc1wiO1xuaW1wb3J0ICogYXMgcmVuZGVyTW9kdWxlIGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvcmVuZGVyLXByb2plY3QuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvZG9XaGlsZVN3aXRjaGluZ1Byb2plY3RzKHByb2plY3QpIHtcbiAgLypBZGQgYXR0cmlidXRlIHRvIHNvcnQgYnV0dG9uIHdoaWxlIGNsaWNrIG9uIHByb2plY3QgaXRlbXMgc28gdGhlIHNvcnRpbmcgd29yayBmb3IgdGhlbSovXG4gIHNvcnRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1tb2RlXCIsIGZhbHNlKTtcblxuICB0b2RvTGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBwcm9qZWN0LnRvZG9MaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICByZW5kZXJNb2R1bGUucmVuZGVyUHJvamVjdFRvZG9MaXN0SXRlbS5jYWxsKHRvZG8pO1xuICB9KTtcbn1cbiIsImltcG9ydCAqIGFzIHV0aWxpdGllcyBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL3V0aWxpdGllcy1mdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvYXJyYXlzLmpzXCI7XG5pbXBvcnQgKiBhcyBkb21FbGVtZW50IGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvZG9tLWVsZW1lbnRzLmpzXCI7XG5pbXBvcnQgKiBhcyByZW5kZXJNb2R1bGUgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy9yZW5kZXItcHJvamVjdC5qc1wiO1xuXG5jb25zdCBzb3J0U3dpdGNoID0gdXRpbGl0aWVzLmNvbmRpdGlvblN3aXRjaGVyKCk7XG5cbi8qIFNvcnRpbmcgZnVuY3Rpb24gKi9cbmZ1bmN0aW9uIGNvbXBhcmUocHJvcGVydHksIGNvbmRpdGlvbikge1xuICAvKiBpZiBpdCBpcyBmb3IgcHJpb3JpdHkgc29ydGluZyAqL1xuICBpZiAocHJvcGVydHkgPT09IFwicHJpb3JpdHlcIikge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gY2hhbmdlVG9OdW0oYVtwcm9wZXJ0eV0pIDwgY2hhbmdlVG9OdW0oYltwcm9wZXJ0eV0pXG4gICAgICAgICAgPyAtMVxuICAgICAgICAgIDogY2hhbmdlVG9OdW0oYVtwcm9wZXJ0eV0pID4gY2hhbmdlVG9OdW0oYltwcm9wZXJ0eV0pXG4gICAgICAgICAgPyAxXG4gICAgICAgICAgOiAwO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBjaGFuZ2VUb051bShhW3Byb3BlcnR5XSkgPiBjaGFuZ2VUb051bShiW3Byb3BlcnR5XSlcbiAgICAgICAgICA/IC0xXG4gICAgICAgICAgOiBjaGFuZ2VUb051bShhW3Byb3BlcnR5XSkgPCBjaGFuZ2VUb051bShiW3Byb3BlcnR5XSlcbiAgICAgICAgICA/IDFcbiAgICAgICAgICA6IDA7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICAvKiBTb3J0IGZvciBsZXR0ZXJzIGFuZCBudW1iZXJzICovXG4gIGlmIChjb25kaXRpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhW3Byb3BlcnR5XS50b0xvd2VyQ2FzZSgpIDwgYltwcm9wZXJ0eV0udG9Mb3dlckNhc2UoKVxuICAgICAgICA/IC0xXG4gICAgICAgIDogYVtwcm9wZXJ0eV0udG9Mb3dlckNhc2UoKSA+IGJbcHJvcGVydHldLnRvTG93ZXJDYXNlKClcbiAgICAgICAgPyAxXG4gICAgICAgIDogMDtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGFbcHJvcGVydHldLnRvTG93ZXJDYXNlKCkgPiBiW3Byb3BlcnR5XS50b0xvd2VyQ2FzZSgpXG4gICAgICAgID8gLTFcbiAgICAgICAgOiBhW3Byb3BlcnR5XS50b0xvd2VyQ2FzZSgpIDwgYltwcm9wZXJ0eV0udG9Mb3dlckNhc2UoKVxuICAgICAgICA/IDFcbiAgICAgICAgOiAwO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydFRvZG8oaW5wdXQsIHByb2plY3QsIHByb3BlcnR5LCBjb25kaXRpb24pIHtcbiAgY29uc3QgeyBbaW5wdXRdOiBieURhdGVPYmplY3RQcm9wZXJ0eSA9IHByb2plY3QgfSA9IHV0aWxpdGllcy5nZXRUb2RvQnlEYXRlKCk7XG5cbiAgcmV0dXJuIGJ5RGF0ZU9iamVjdFByb3BlcnR5LnNvcnQoY29tcGFyZShwcm9wZXJ0eSwgY29uZGl0aW9uKSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNvcnRlZEFycmF5KHNvcnRlZEFycmF5KSB7XG4gIGRvbUVsZW1lbnQudG9kb0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgc29ydGVkQXJyYXkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIHJlbmRlck1vZHVsZS5yZW5kZXJQcm9qZWN0VG9kb0xpc3RJdGVtLmNhbGwodG9kbyk7XG4gIH0pO1xufVxuXG4vKiBmdW5jdGlvbiB0aGF0IGNoYW5nZSB0aGUgbmFtZXMgb2Ygc29ydGluZyBvcHRpb25zIHRvIG1hdGNoIHRoZSBvYmplY3QgcHJvcGVydHkgbmFtZXMgKi9cbmZ1bmN0aW9uIHNvcnRPcHRpb25Ub1Byb3BlcnR5TmFtZSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0ID09PSBcIlByaW9yaXR5XCIgPyBcInByaW9yaXR5XCIgOiB0ZXh0ID09PSBcIkFscGhhYmV0aWNhbGx5XCIgPyBcInRvZG9OYW1lXCIgOiB0ZXh0ID09PSBcIkR1ZSBEYXRlXCIgPyBcImRhdGVcIiA6IFwiXCI7XG59XG5cbi8qIENoYW5nZSBwcmlvcml0eSBvcHRpb25zIHRvIG51bWJlcnMgaXQgZ2V0IHNvcnRlZCBieSBudW1iZXJzICAqL1xuZnVuY3Rpb24gY2hhbmdlVG9OdW0oaW5wdXQpIHtcbiAgbGV0IG51bTtcbiAgaWYgKGlucHV0ID09PSBcImxvd1wiKSB7XG4gICAgbnVtID0gMztcbiAgICByZXR1cm4gbnVtO1xuICB9XG4gIGlmIChpbnB1dCA9PT0gXCJtZWRpdW1cIikge1xuICAgIG51bSA9IDI7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuICBpZiAoaW5wdXQgPT09IFwiaGlnaFwiKSB7XG4gICAgbnVtID0gMTtcbiAgICByZXR1cm4gbnVtO1xuICB9XG4gIGlmICghaW5wdXQgfHwgaW5wdXQgPT09IFwibm9cIikge1xuICAgIG51bSA9IDQ7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0T3B0aW9uQ29udGFpbmVyVmlzaWJpbGl0eShidXR0b24pIHtcbiAgZG9tRWxlbWVudC50b2RvU29ydE9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIiwgIWJ1dHRvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VG9kb0hhbmRsZXIoZSkge1xuICBjb25zdCBzb3J0QnlCdXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KFwiZGl2IGRpdiA+IHBcIik7XG4gIGlmICghc29ydEJ5QnV0dG9uKSByZXR1cm47XG4gIC8qIGNoZWNrIGlkIGlmIGl0cyBOYU4gYXQgbG9hZCwgaWYgaXQgaXMgTmFOIGxvYWQgdGhlIGlkIG9mIHRoZSBmaXJzdCBwcm9qZWN0IGluIHRoZSBsaXN0XG4gIHNvIGl0IHdvbnQgcmV0dXJuIGVycm9yICovXG4gIGNvbnN0IHByb2plY3RJZCA9ICtkb21FbGVtZW50LnRvZG9IZWFkZXJDb250YWluZXIuZGF0YXNldC5wcm9qZWN0SWQgfHwgcHJvamVjdEFycmF5WzBdLmlkO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSB1dGlsaXRpZXMuZ2V0SW5kZXgocHJvamVjdEFycmF5LCBwcm9qZWN0SWQpO1xuICBjb25zdCB0b2RvQXJyYXkgPSBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XS50b2RvTGlzdDtcbiAgY29uc3QgdG9kb1Byb3BlcnR5ID0gc29ydE9wdGlvblRvUHJvcGVydHlOYW1lKHNvcnRCeUJ1dHRvbi50ZXh0Q29udGVudCk7XG4gIGNvbnN0IGhvbWVEYXRhID0gZG9tRWxlbWVudC5zb3J0QnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtbW9kZVwiKTtcbiAgY29uc3Qgc29ydGVkQXJyYXkgPSBzb3J0VG9kbyhob21lRGF0YSwgdG9kb0FycmF5LCB0b2RvUHJvcGVydHksIHNvcnRTd2l0Y2goKSk7XG5cbiAgc29ydE9wdGlvbkNvbnRhaW5lclZpc2liaWxpdHkoc29ydEJ5QnV0dG9uKTtcblxuICByZW5kZXJTb3J0ZWRBcnJheShzb3J0ZWRBcnJheSk7XG59XG4iLCJpbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy91dGlsaXRpZXMtZnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi9zcmMvanMtbW9kdWxlcy9hcnJheXMuanNcIjtcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnQgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy9kb20tZWxlbWVudHMuanNcIjtcbmNvbnN0IFRPREFZID0gXCJ0b2RheVwiO1xuY29uc3QgVE9NT1JST1cgPSBcInRvbW9ycm93XCI7XG5jb25zdCBTUEVDSUZJQyA9IFwic3BlY2lmaWNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9EYXRlcyhkYXRlQnRuRGF0YVNldCwgdG9kb0lkLCB0b2RvLCBjYWxlbmRhckRpc3BsYXkpIHtcbiAgaWYgKGRhdGVCdG5EYXRhU2V0LmRhdGUgPT09IFRPREFZIHx8IGRhdGVCdG5EYXRhU2V0LmRhdGUgPT09IFRPTU9SUk9XIHx8IGRhdGVCdG5EYXRhU2V0LmRhdGUgPT09IFNQRUNJRklDKSB7XG4gICAgc2V0T2JqZWN0SW5zdGFuY2VEYXRlUHJvcGVydHkuY2FsbCh0b2RvLCBkYXRlQnRuRGF0YVNldC5kYXRlLCB0b2RvSWQpO1xuXG4gICAgLyogVGhhdCB3YXkgd2hlbiB1c2VyIHNlbGVjdCBmcm9tIGRheSBwaWNrZXIgZGF5UmVmIGFuZCB0b2RvIG9iamVjdCB1cGRhdGUgaW5zdGFudFxuICAgICAgIG90aGVyd2lzZSBuZWVkIGRibGNsaWNrIChuZWVkIHRvIHJlZmFjdG9yIHRoYXQgc29tZWhvdykgKi9cbiAgICBkb21FbGVtZW50LnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZVJlZmVyZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJlZmVyZW5jZS1pZD1cIiR7dG9kb0lkfVwiXWApO1xuICAgICAgLy8gaWYgKCFkYXRlUmVmZXJlbmNlKSByZXR1cm47XG4gICAgICBjb25zdCB7IGRhdGUgfSA9IHRvZG87XG4gICAgICBkYXRlUmVmZXJlbmNlLnRleHRDb250ZW50ID0gZGF0ZTtcbiAgICAgIHNldE9iamVjdEluc3RhbmNlRGF0ZVByb3BlcnR5LmNhbGwodG9kbywgZGF0ZUJ0bkRhdGFTZXQuZGF0ZSwgdG9kb0lkKTtcbiAgICAgIHV0aWxpdGllcy51cGRhdGVUb2RvQnlEYXRlVG90YWxzKCk7XG4gICAgfSk7XG5cbiAgICB1dGlsaXRpZXMudXBkYXRlVG9kb0J5RGF0ZVRvdGFscygpO1xuXG4gICAgZGF0ZUJ1dHRvbkFjdGlvbkZvY3VzKHRvZG9JZCwgVE9EQVksIFRPTU9SUk9XLCBTUEVDSUZJQywgZGF0ZUJ0bkRhdGFTZXQpO1xuXG4gICAgcmVzZXREYXRlSW5wdXREaXNwbGF5KGRhdGVCdG5EYXRhU2V0LCBjYWxlbmRhckRpc3BsYXkpO1xuICB9XG59XG5cbi8qIFNldCB0aGUgZGF0ZSBpbiBvYmplY3QgZGVwZW5kcyB0aGUgYnV0dG9uICovXG5mdW5jdGlvbiBzZXRPYmplY3RJbnN0YW5jZURhdGVQcm9wZXJ0eShkYXRhLCBpZCkge1xuICBjb25zdCBzcGVjaWZpY0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zcGVjaWZpYy1pZD1cIiR7aWR9XCJdYCk7XG4gIGNvbnN0IGRhdGVSZWZlcmVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yZWZlcmVuY2UtaWQ9XCIke2lkfVwiXWApO1xuXG4gIC8vIGlmICghc3BlY2lmaWNEYXRlKSByZXR1cm47XG4gIGlmIChkYXRhID09PSBcInRvZGF5XCIpIHtcbiAgICB0aGlzLmRhdGVJZCA9IGRhdGE7XG4gICAgdGhpcy5kYXRlID0gZGF0ZUZucy5mb3JtYXQobmV3IERhdGUoKSwgXCJ5eXl5LU1NLWRkXCIpO1xuICB9XG4gIGlmIChkYXRhID09PSBcInRvbW9ycm93XCIpIHtcbiAgICB0aGlzLmRhdGVJZCA9IGRhdGE7XG4gICAgdGhpcy5kYXRlID0gZGF0ZUZucy5mb3JtYXQoZGF0ZUZucy5zdGFydE9mVG9tb3Jyb3coKSwgXCJ5eXl5LU1NLWRkXCIpO1xuICB9XG4gIGlmIChkYXRhID09PSBcInNwZWNpZmljXCIpIHtcbiAgICB0aGlzLmRhdGVJZCA9IGRhdGE7XG4gICAgdGhpcy5kYXRlID0gc3BlY2lmaWNEYXRlLnZhbHVlO1xuICB9XG5cbiAgZGF0ZVJlZmVyZW5jZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZSAke3RoaXMuZGF0ZX1gO1xuXG4gIHV0aWxpdGllcy5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKHByb2plY3RBcnJheSk7XG59XG5cbi8qIENsYXNzIGFkZGVkIGZvciBidXR0b25zIHRvIHN0YXkgc3RpY2sgdG8gYWN0aW9uIG1vZGUgYWZ0ZXIgZGF0ZSBzZWxlY3QgKi9cbmZ1bmN0aW9uIGRhdGVCdXR0b25BY3Rpb25Gb2N1cyh0b2RvSWQsIHRvZGF5LCB0b21vcnJvdywgc3BlY2lmaWMsIGRhdGVCdG5EYXRhU2V0KSB7XG4gIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9kYXktaWQ9XCIke3RvZG9JZH1cIl1gKTtcbiAgY29uc3QgdG9tb3Jyb3dCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b21vcnJvdy1pZD1cIiR7dG9kb0lkfVwiXWApO1xuICBjb25zdCBzcGVjaWZpY0RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zcGVjaWZpYy1pZCA9XCIke3RvZG9JZH1cIl1gKTtcbiAgdG9kYXlCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZURhdGVcIiwgZGF0ZUJ0bkRhdGFTZXQuZGF0ZSA9PT0gdG9kYXkpO1xuXG4gIHRvbW9ycm93QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVEYXRlXCIsIGRhdGVCdG5EYXRhU2V0LmRhdGUgPT09IHRvbW9ycm93KTtcbiAgc3BlY2lmaWNEYXRlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVEYXRlXCIsIGRhdGVCdG5EYXRhU2V0LmRhdGUgPT09IHNwZWNpZmljKTtcbn1cblxuLyogV2hlbiB0aGUgdXNlciBzZWxlY3QgdG9kYXkgb3IgdG9tb3Jyb3cgdGhlIGRhdGUgYXQgZGF0ZSBpbnB1dCBkaXNwbGF5IHJlc2V0ICovXG5mdW5jdGlvbiByZXNldERhdGVJbnB1dERpc3BsYXkoZGF0ZUJ0bkRhdGFTZXQsIGNhbGVuZGFyRGlzcGxheSkge1xuICBpZiAoZGF0ZUJ0bkRhdGFTZXQuZGF0ZSA9PT0gVE9EQVkgfHwgZGF0ZUJ0bkRhdGFTZXQuZGF0ZSA9PT0gVE9NT1JST1cpIHtcbiAgICBjYWxlbmRhckRpc3BsYXkudmFsdWUgPSBcIlwiO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL2FycmF5cy5qc1wiO1xuaW1wb3J0ICogYXMgdXRpbGl0aWVzIGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvdXRpbGl0aWVzLWZ1bmN0aW9ucy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0NoZWNrQm94RnVuY3Rpb25hbGl0eShlLCB0b2RvVGl0bGUsIGlzQ2hlY2tlZCwgdG9kb0FycmF5LCB0b2RvSW5kZXgpIHtcbiAgaWYgKGUudGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tlZFwiLCBpc0NoZWNrZWQpO1xuICB9XG5cbiAgaWYgKGlzQ2hlY2tlZCAmJiBlLnRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICB0b2RvQXJyYXlbdG9kb0luZGV4XS5jaGVja2JveCA9IFwiY2hlY2tlZFwiO1xuICAgIHRvZG9UaXRsZS5kaXNhYmxlZCA9IGlzQ2hlY2tlZDtcbiAgICB1dGlsaXRpZXMuc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuICB9XG4gIGlmICghaXNDaGVja2VkICYmIGUudGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgIHRvZG9BcnJheVt0b2RvSW5kZXhdLmNoZWNrYm94ID0gXCJcIjtcbiAgICB0b2RvVGl0bGUuZGlzYWJsZWQgPSBpc0NoZWNrZWQ7XG4gICAgdXRpbGl0aWVzLnNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UocHJvamVjdEFycmF5KTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgdXRpbGl0aWVzIGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvdXRpbGl0aWVzLWZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi9zcmMvanMtbW9kdWxlcy9hcnJheXMuanNcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL3Byb2plY3QtY2xhc3MuanNcIjtcbmltcG9ydCAqIGFzIHJlbmRlck1vZHVsZSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL3JlbmRlci1wcm9qZWN0LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvSGFuZGxlcihlKSB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJpbnB1dFwiKTtcbiAgY29uc3QgaW5wdXRUZXh0ID0gdGFyZ2V0LnZhbHVlO1xuICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RUb2RvSWQ7XG4gIGNvbnN0IG9iamVjdEluZGV4ID0gdXRpbGl0aWVzLmdldEluZGV4KHByb2plY3RBcnJheSwgcHJvamVjdElkKTtcblxuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiB0YXJnZXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAvKiBDcmVhdGUgbmV3IHRvZG8gKi9cbiAgICBjb25zdCB0b2RvT2JqZWN0ID0gbmV3IFRvZG8oaW5wdXRUZXh0LCBwcm9qZWN0SWQsIHV0aWxpdGllcy5yYW5kb21OdW1iZXIoKSk7XG5cbiAgICAvKiBQdXNoIHRoZSB0b2RvIHRvIHByb2plY3QgYXJyYXkgdG9kbyBsaXN0ICovXG4gICAgcHJvamVjdEFycmF5W29iamVjdEluZGV4XS50b2RvTGlzdC5wdXNoKHRvZG9PYmplY3QpO1xuXG4gICAgLyogU2F2ZSB0b2RvIGluIGxvY2FsIHN0b3JhZ2UgKi9cbiAgICB1dGlsaXRpZXMuc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuXG4gICAgLyogUmVuZGVyIHRoZSB0b2RvICovXG4gICAgcmVuZGVyTW9kdWxlLnJlbmRlclByb2plY3RUb2RvTGlzdEl0ZW0uY2FsbCh0b2RvT2JqZWN0KTtcblxuICAgIC8qIENsZWFyIHRoZSB0b2RvIGlucHV0ICovXG4gICAgdGFyZ2V0LnZhbHVlID0gXCJcIjtcblxuICAgIC8qIFVwZGF0ZSB0aGUgaG9tZSBzZWN0aW9uIG51bWJlcnMgKi9cbiAgICB1dGlsaXRpZXMudXBkYXRlVG9kb0J5RGF0ZVRvdGFscygpO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy91dGlsaXRpZXMtZnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL2FycmF5cy5qc1wiO1xuaW1wb3J0ICogYXMgZG9tRWxlbWVudCBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL2RvbS1lbGVtZW50cy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9kbyh0YXJnZXRJZCwgcHJvamVjdEluZGV4LCB0b2RvSW5kZXgsIHRhcmdldCkge1xuICBpZiAodGFyZ2V0SWQgPT09IFwiZGVsZXRlXCIpIHtcbiAgICAvKiBEZWxldGUgdG9kbyBmcm9tIHByb2plY3QgcHJvcGVydHkgYXJyYXkgKi9cbiAgICBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XS50b2RvTGlzdC5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICAvKiBkZWxldGUgaXQgZnJvbSBkb20gKi9cbiAgICBkb21FbGVtZW50LnRvZG9MaXN0LnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gICAgLyogVXBkYXRlIGpzb24gKi9cbiAgICB1dGlsaXRpZXMuc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuICAgIC8qIFVwZGF0ZSBob21lIHNlY3Rpb24gbnVtYmVycyAqL1xuICAgIHV0aWxpdGllcy51cGRhdGVUb2RvQnlEYXRlVG90YWxzKCk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHV0aWxpdGllcyBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL3V0aWxpdGllcy1mdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvYXJyYXlzLmpzXCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi9zcmMvanMtbW9kdWxlcy9wcm9qZWN0LWNsYXNzLmpzXCI7XG5pbXBvcnQgKiBhcyByZW5kZXJNb2R1bGUgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy9yZW5kZXItcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgZGVsZXRlVG9kbyB9IGZyb20gXCIuL3RvZG8tZGVsZXRlXCI7XG5pbXBvcnQgeyB0b2RvV2luZG93VG9nZ2xlU2l6ZSB9IGZyb20gXCIuL3RvZG8td2luZG93LXRvZ2dsZVwiO1xuaW1wb3J0IHsgdG9kb0NoZWNrQm94RnVuY3Rpb25hbGl0eSB9IGZyb20gXCIuL3RvZG8tY2hlY2tib3hcIjtcbmltcG9ydCB7IGdldFRvZG9EYXRlcyB9IGZyb20gXCIuL3RvZG8tRGF0ZXNcIjtcbmltcG9ydCB7IGdldFRvZG9Qcmlvcml0eSB9IGZyb20gXCIuL3RvZG8tcHJpb3JpdHlcIjtcbmltcG9ydCB7IGdldFRvZG9UZXh0QXJlYSB9IGZyb20gXCIuL3RvZG8tdGV4dEFyZWFcIjtcbmltcG9ydCB7IHRvZG9SZW5hbWUgfSBmcm9tIFwiLi90b2RvLXJlbmFtZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kb1NlY3Rpb25IYW5kbGVyKGUpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdChcImxpXCIpO1xuICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICBjb25zdCB0b2RvSWQgPSB0YXJnZXQuZGF0YXNldC50b2RvSWQ7XG4gIGNvbnN0IHByb2plY3RJZCA9IHRhcmdldC5kYXRhc2V0LnByb2plY3RpZDtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gdXRpbGl0aWVzLmdldEluZGV4KHByb2plY3RBcnJheSwgcHJvamVjdElkKTtcbiAgY29uc3QgdG9kb0FycmF5ID0gcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF0udG9kb0xpc3Q7XG5cbiAgY29uc3QgdG9kb0luZGV4ID0gdXRpbGl0aWVzLmdldFRvZG9MaXN0SW5kZXgodG9kb0FycmF5LCB0b2RvSWQpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF07XG4gIGNvbnN0IGRhdGVCdG5EYXRhU2V0ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgY29uc3QgdGFyZ2V0SWQgPSBlLnRhcmdldC5pZDtcbiAgY29uc3QgaXNDaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgY29uc3QgdG9kb1RpdGxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNlbGVjdC1pZCA9XCIke3RvZG9JZH1cIl1gKTtcbiAgY29uc3QgdG9kbyA9IHRvZG9BcnJheVt0b2RvSW5kZXhdO1xuICBjb25zdCBjYWxlbmRhckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlXCIpO1xuICAvLyBpZiAoIXByb2plY3RBcnJheS5pbmNsdWRlcyhwcm9qZWN0KSkgcmV0dXJuO1xuXG4gIHRvZG9XaW5kb3dUb2dnbGVTaXplKHRhcmdldElkLCB0YXJnZXQsIHRvZG9JZCk7XG5cbiAgZGVsZXRlVG9kbyh0YXJnZXRJZCwgcHJvamVjdEluZGV4LCB0b2RvSW5kZXgsIHRhcmdldCk7XG5cbiAgdG9kb0NoZWNrQm94RnVuY3Rpb25hbGl0eShlLCB0b2RvVGl0bGUsIGlzQ2hlY2tlZCwgdG9kb0FycmF5LCB0b2RvSW5kZXgpO1xuXG4gIGdldFRvZG9EYXRlcyhkYXRlQnRuRGF0YVNldCwgdG9kb0lkLCB0b2RvLCBjYWxlbmRhckRpc3BsYXkpO1xuXG4gIGdldFRvZG9Qcmlvcml0eSh0b2RvLCB0YXJnZXQsIHByaW9yaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9SZW5hbWVIYW5kbGVyKGUpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdChcImlucHV0XCIpO1xuICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuXG4gIGNvbnN0IG5ld1RvZG9OYW1lID0gZS50YXJnZXQudmFsdWU7XG4gIGNvbnN0IHByb2plY3RJZCA9IE51bWJlcih0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0aWQpO1xuICBjb25zdCB0b2RvSWQgPSBOdW1iZXIodGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQudG9kb0lkKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gdXRpbGl0aWVzLmdldEluZGV4KHByb2plY3RBcnJheSwgcHJvamVjdElkKTtcbiAgY29uc3QgdG9kb0FycmF5ID0gcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF0udG9kb0xpc3Q7XG5cbiAgdG9kb1JlbmFtZShlLCB0b2RvQXJyYXksIHRhcmdldCwgbmV3VG9kb05hbWUsIHRvZG9JZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvVGV4dEFyZWFIYW5kbGVyKGUpIHtcbiAgY29uc3QgdGFyZ2V0VGV4dEFyZWEgPSBlLnRhcmdldC5jbG9zZXN0KFwidGV4dGFyZWFcIik7XG4gIGlmICghdGFyZ2V0VGV4dEFyZWEpIHJldHVybjtcbiAgY29uc3QgdG9kb0lkID0gdGFyZ2V0VGV4dEFyZWEuZGF0YXNldC50ZXh0YXJlYUlkO1xuICBjb25zdCBwcm9qZWN0SWQgPSBOdW1iZXIodGFyZ2V0VGV4dEFyZWEucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdGlkKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdEFycmF5LmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IE51bWJlcihwcm9qZWN0SWQpKTtcblxuICBjb25zdCB0b2RvSW5kZXggPSBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XS50b2RvTGlzdC5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8udG9kb0lkID09PSBOdW1iZXIodG9kb0lkKSk7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XTtcbiAgaWYgKCFwcm9qZWN0QXJyYXkuaW5jbHVkZXMocHJvamVjdCkpIHJldHVybjtcblxuICBjb25zdCB0b2RvQXJyYXkgPSBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XS50b2RvTGlzdDtcblxuICBnZXRUb2RvVGV4dEFyZWEoZSwgdG9kb0FycmF5LCB0YXJnZXRUZXh0QXJlYSwgdG9kb0luZGV4KTtcbn1cbiIsImltcG9ydCAqIGFzIHV0aWxpdGllcyBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL3V0aWxpdGllcy1mdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIvc3JjL2pzLW1vZHVsZXMvYXJyYXlzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvUHJpb3JpdHkodG9kbywgdGFyZ2V0LCBwcmlvcml0eSkge1xuICAvKiBJZiB0aGVyZSBpcyBubyBjaGVjayBmb3IgdGhhdCB2YWx1ZSBpdCByZXNldCB0aGUgdG9kbyBwcmlvcml0eSAqL1xuICBpZiAocHJpb3JpdHkudmFsdWUgPT09IFwibm9uZVwiKSByZXR1cm47XG5cbiAgaWYgKHRvZG8uaGFzT3duUHJvcGVydHkoXCJwcmlvcml0eVwiKSkge1xuICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImxvd1wiLCBwcmlvcml0eS52YWx1ZSA9PT0gXCJsb3dcIik7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJtZWRpdW1cIiwgcHJpb3JpdHkudmFsdWUgPT09IFwibWVkaXVtXCIpO1xuICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlnaFwiLCBwcmlvcml0eS52YWx1ZSA9PT0gXCJoaWdoXCIpO1xuICAgIHV0aWxpdGllcy5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKHByb2plY3RBcnJheSk7XG4gIH1cblxuICAvLyB0b2RvLnByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWU7XG59XG4iLCJpbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy91dGlsaXRpZXMtZnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL2FycmF5cy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kb1JlbmFtZShlLCB0b2RvQXJyYXksIHRhcmdldElucHV0LCBuZXdUb2RvTmFtZSwgdG9kb0lkKSB7XG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgLyogZm9yIHRoZSBzcGVjaWZpYyBwcm9qZWN0IHVzaW5nIHRoZSBwcm9qZWN0SW5kZXggZmlsdGVyIGl0cyB0b2RvTGlzdFxuICAgIGZvciB0aGUgdG9kbyBpdGVtIGFuZCB0aGVuIHdpdGggbWFwIHJlbmFtZSBpdCAqL1xuICAgIHRvZG9BcnJheVxuICAgICAgLmZpbHRlcigodG9kb0l0ZW0pID0+IHRvZG9JdGVtLnRvZG9JZCA9PT0gdG9kb0lkKVxuICAgICAgLm1hcCgodG9kbykgPT4ge1xuICAgICAgICAvKiB0b2RvIG5hbWUgZXF1YWxzIHRvIG5ldyB0b2RvIG5hbWUgKi9cbiAgICAgICAgdG9kby50b2RvTmFtZSA9IG5ld1RvZG9OYW1lO1xuICAgICAgICAvKiBEb20gdG9kbyBuYW1lIGNoYW5nZSB0byBuZXcgdG9kbyBvYmplY3QgbmFtZSAqL1xuICAgICAgICB0YXJnZXRJbnB1dC52YWx1ZSA9IHRvZG8udG9kb05hbWU7XG5cbiAgICAgICAgdXRpbGl0aWVzLnNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UocHJvamVjdEFycmF5KTtcblxuICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSBcIi9zcmMvanMtbW9kdWxlcy91dGlsaXRpZXMtZnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL2FycmF5cy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb1RleHRBcmVhKGUsIHRvZG9BcnJheSwgdGFyZ2V0VGV4dEFyZWEsIHRvZG9JbmRleCkge1xuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIHRvZG9BcnJheVt0b2RvSW5kZXhdLm5vdGVzID0gdGFyZ2V0VGV4dEFyZWEudmFsdWU7XG4gICAgdXRpbGl0aWVzLnNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UocHJvamVjdEFycmF5KTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvZG9XaW5kb3dUb2dnbGVTaXplKHRhcmdldElkLCB0YXJnZXQsIHRvZG9JZCkge1xuICBjb25zdCBsaXN0RHJvcEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY2hldnJvbi1pZD1cIiR7dG9kb0lkfVwiXWApO1xuICBpZiAodGFyZ2V0SWQgPT09IFwibGlzdC1hcnJvd1wiKSB7XG4gICAgbGlzdERyb3BBcnJvdy5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlXCIpO1xuICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICAvKiBUb2dnbGUgdGhlIGhpZGRlbiBjbGFzcyBmcm9tIGFsbCBkb20gZWxlbWVudCBpbnNpZGUgdGhlIHRvZG8gKi9cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRhcmdldC5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG4gICAgICB0YXJnZXQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHV0aWxpdGllcyBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL3V0aWxpdGllcy1mdW5jdGlvbnMuanNcIjtcbmltcG9ydCAqIGFzIHJlbmRlck1vZHVsZSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL3JlbmRlci1wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiL3NyYy9qcy1tb2R1bGVzL2FycmF5cy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxTdG9yYWdlSGFuZGxlcigpIHtcbiAgLyogSWYgbG9jYWwgc3RvcmFnZSBpcyBlbXB0eSBkbyBub3RoaW5nICovXG4gIGlmICghbG9jYWxTdG9yYWdlLmxlbmd0aCkgcmV0dXJuO1xuICAvKiBHZXQgYWxsIHRoZSBkYXRhIGZyb20ganNvbiBmaWxlICovXG4gIHV0aWxpdGllcy5nZXRQcm9qZWN0KCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIC8qIFB1c2ggZXZlcnl0aGluZyB0byBwcm9qZWN0QXJyYXkgYmVjYXVzZSBpdHMgZW1wdHkgKi9cbiAgICBwcm9qZWN0QXJyYXkucHVzaChpdGVtKTtcbiAgICAvKiBBbmQgcmVuZGVyIHRoZW0gb24gbG9hZCAqL1xuICAgIHJlbmRlck1vZHVsZS5yZW5kZXJQcm9qZWN0TGlzdEl0ZW0uY2FsbChpdGVtKTtcbiAgfSk7XG5cbiAgLyogVXBkYXRlIGFsbCB0aGUgdG9kbyBudW1iZXJzIGF0IGhvbWUgc2VjdGlvbiAqL1xuICB1dGlsaXRpZXMudXBkYXRlVG9kb0J5RGF0ZVRvdGFscygpO1xuICAvKiBDbG9zZSB0aGUgbm8gcHJvamVjdCBpbWcgICovXG4gIHV0aWxpdGllcy50b2dnbGVOb3RQcm9qZWN0U2NyZWVuKCk7XG59XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaWQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRvZG9MaXN0ID0gW107XG4gIH1cbn1cblxuY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3RJZCwgdG9kb0lkKSB7XG4gICAgdGhpcy50b2RvTmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gICAgdGhpcy50b2RvSWQgPSB0b2RvSWQ7XG4gICAgdGhpcy5kYXRlID0gXCJcIjtcbiAgICB0aGlzLm5vdGVzID0gXCJcIjtcbiAgICB0aGlzLnByaW9yaXR5ID0gXCJcIjtcbiAgICB0aGlzLmNoZWNrYm94ID0gXCJcIjtcbiAgICB0aGlzLmRhdGVJZCA9IFwiXCI7XG4gIH1cbn1cblxuZXhwb3J0IHsgUHJvamVjdCwgVG9kbyB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdExpc3REb21FbGVtZW50IH0gZnJvbSBcIi4vZG9tLWVsZW1lbnRzXCI7XG5pbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSBcIi4vdXRpbGl0aWVzLWZ1bmN0aW9uc1wiO1xuXG5pbXBvcnQgSWNvbiBmcm9tIFwiL3NyYy9pY29ucy9kZWxldGUtb3V0bGluZS5wbmdcIjtcbmltcG9ydCBjaGV2cm9uIGZyb20gXCIvc3JjL2ljb25zL2NoZXZyb24tZG93bi5wbmdcIjtcblxuLyogUmVuZGVyIFByb2plY3QgRG9tIEVsZW1lbnRzIEZ1bmN0aW9uICovXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdEl0ZW0oKSB7XG4gIGNvbnN0IGNyZWF0ZVByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjcmVhdGVQcm9qZWN0RWxlbWVudC5pZCA9IHRoaXMuaWQ7XG4gIGNyZWF0ZVByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCB0aGlzLmlkKTtcbiAgY3JlYXRlUHJvamVjdEVsZW1lbnQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWxpc3RfX2l0ZW1cIjtcblxuICBjb25zdCBwcm9qZWN0TGlzdExhYmVsSW5wdXRNYXJrVXAgPSBgXG4gICAgICAgICA8aW5wdXQgdmFsdWU9XCIke3RoaXMubmFtZX1cIiBpZD1cInByb2plY3RJbnB1dFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9JHtJY29ufSBpZD1cImdhcmJhZ2VJY29uXCI+YDtcbiAgY3JlYXRlUHJvamVjdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHByb2plY3RMaXN0TGFiZWxJbnB1dE1hcmtVcCk7XG5cbiAgcHJvamVjdExpc3REb21FbGVtZW50LmFwcGVuZChjcmVhdGVQcm9qZWN0RWxlbWVudCk7XG4gIHJldHVybiBwcm9qZWN0TGlzdERvbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUb2RvTGlzdEl0ZW0oKSB7XG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX190YXNrLWxpc3RfX2xpc3RcIik7XG5cbiAgY29uc3QgbGlzdEl0ZW1NYXJrdXAgPSBgPGxpIFxuICBjbGFzcz1cIm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtICR7dXRpbGl0aWVzLmNsYXNzU2V0Rm9yU2VsZWN0LmNhbGwodGhpcyl9IHZpc2libGVcIiBcbiAgZGF0YS10b2RvLWlkID0gJHt0aGlzLnRvZG9JZH0gZGF0YS1wcm9qZWN0SWQgPSAke3RoaXMucHJvamVjdElkfSA+XG4gICA8IS0tIEhlYWRlciAtLT5cbiAgIDxkaXYgY2xhc3M9XCJtYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICAgPGxhYmVsIGZvcj1cIm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19jaGVja2JveFwiPjwvbGFiZWw+XG4gICAgICAgICA8aW5wdXRcbiAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiICR7dGhpcy5jaGVja2JveH1cbiAgICAgICAgIGlkPVwibWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX2NoZWNrYm94IFwiXG4gICAgICAgICAvPlxuICAgICAgICAgPGxhYmVsIGZvcj1cIm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX190aXRsZVwiPjwvbGFiZWw+XG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX190aXRsZVwiIGNsYXNzPVwiJHt0aGlzLmNoZWNrYm94fVwiXG4gICAgICAgICB2YWx1ZT1cIiR7dGhpcy50b2RvTmFtZX1cIlxuICAgICAgICAgJHt1dGlsaXRpZXMuY2xhc3NTZXRGb3JDaGVjay5jYWxsKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICAgPHAgY2xhc3M9XCJtYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fZGF0ZS1yZWZlcmVuY2VcIlxuICAgICAgICAgZGF0YS1yZWZlcmVuY2UtaWQgPSAke3RoaXMudG9kb0lkfT5cbiAgICAgICAgIER1ZSBEYXRlICR7dXRpbGl0aWVzLmRhdGVSZWZlcmVuY2UuY2FsbCh0aGlzKX08L3A+XG4gICAgICAgIDxpbWcgc3JjPSR7Y2hldnJvbn0gaWQ9XCJsaXN0LWFycm93XCIgZGF0YS1jaGV2cm9uLWlkPSR7dGhpcy50b2RvSWR9IGFsdD1cImNoZXZyb24gaWNvblwiIC8+XG5cbiAgICAgIDwvZGl2PlxuICAgPC9kaXY+XG4gICA8IS0tIE5vdGVzIC0tPlxuICAgPGRpdiBjbGFzcz1cIm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19ub3Rlcy1jb250YWluZXIgaGlkZGVuXCI+XG4gICAgICA8bGFiZWwgZm9yPVwibWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX3RleHRhcmVhXCJcbiAgICAgICAgID5Ob3RlczwvbGFiZWxcbiAgICAgICAgID5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgaWQ9XCJtYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fdGV4dGFyZWFcIlxuICAgICAgICAgZGF0YS10ZXh0YXJlYS1pZCA9ICR7dGhpcy50b2RvSWR9XG4gICAgICAgICBwbGFjZWhvbGRlciA9IFwiQWRkIHlvdXIgbm90ZXMgaGVyZS4uLlwiXG4gICAgICAgICA+JHt0aGlzLm5vdGVzfTwvdGV4dGFyZWE+XG4gICA8L2Rpdj5cbiAgIDwhLS0gRGF0ZSAtLT5cbiAgIDxkaXYgY2xhc3M9XCJtYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fZGF0ZS1jb250YWluZXIgaGlkZGVuXCI+XG4gICAgICA8cCBjbGFzcz1cIm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlLXRpdGxlXCI+RHVlIERhdGU8L3A+XG4gICAgICA8ZGl2PlxuICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgIGlkPVwidG9kYXktYnRuXCIgXG4gICAgICAgICBkYXRhLWRhdGU9XCJ0b2RheVwiIFxuICAgICAgICAgZGF0YS10b2RheS1pZD0ke3RoaXMudG9kb0lkfVxuICAgICAgICAgY2xhc3M9XCIke3V0aWxpdGllcy5jbGFzc1NldEZvclRvZGF5QnV0dG9ucy5jYWxsKHRoaXMpfVwiID5cbiAgICAgICAgIFRvZGF5XG4gICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgIGlkPVwidG9tb3Jyb3ctYnRuXCJcbiAgICAgICAgIGRhdGEtZGF0ZT1cInRvbW9ycm93XCIgXG4gICAgICAgICBkYXRhLXRvbW9ycm93LWlkID0gJHt0aGlzLnRvZG9JZH1cbiAgICAgICAgIGNsYXNzPVwiJHt1dGlsaXRpZXMuY2xhc3NTZXRGb3JUb21vcnJvd0J1dHRvbnMuY2FsbCh0aGlzKX1cIlxuICAgICAgICAgPlRvbW9ycm93XG4gICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgPGxhYmVsIGZvcj1cIm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlXCI+XG4gICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgXG4gICAgICAgICB2YWx1ZSA9XCIke3V0aWxpdGllcy52YWx1ZUZvckRhdGVEaXNwbGF5LmNhbGwodGhpcyl9XCIgXG4gICAgICAgICBpZD1cIm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kYXRlXCIgXG4gICAgICAgICBjbGFzcz1cIiR7dXRpbGl0aWVzLmNsYXNzU2V0Rm9yU3BlY2lmaWNCdXR0b25zLmNhbGwodGhpcyl9XCJcbiAgICAgICAgIGRhdGEtZGF0ZT1cInNwZWNpZmljXCIgXG4gICAgICAgICBkYXRhLXNwZWNpZmljLWlkPVwiJHt0aGlzLnRvZG9JZH1cIj5cbiAgICAgIDwvZGl2PlxuICAgPC9kaXY+XG4gICA8IS0tIFByaW9yaXR5IC0tPlxuICAgPGRpdiBjbGFzcz1cIm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19wcmlvcml0eS1jb250YWluZXIgaGlkZGVuXCI+XG4gICAgICA8bGFiZWwgZm9yPVwibWFpbl9fdGFzay1saXN0X19saXN0LWl0ZW1fX3ByaW9yaXR5XCJcbiAgICAgICAgID5Qcmlvcml0eTwvbGFiZWxcbiAgICAgICAgID5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgIG5hbWU9XCJzZWxlY3QtcHJpb3JpdHlcIlxuICAgICAgICAgaWQ9XCJtYWluX190YXNrLWxpc3RfX2xpc3QtaXRlbV9fcHJpb3JpdHlcIlxuICAgICAgICAgZGF0YS1zZWxlY3QtaWQgPSAke3RoaXMudG9kb0lkfVxuICAgICAgICAgPlxuICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIiBzZWxlY3RlZD1cIlNlbGVjdCBhbiBvcHRpb25cIiBkaXNhYmxlZCBoaWRkZW4+XG4gICAgICAgICAgICAke3V0aWxpdGllcy5zZWxlY3RUYWdUZXh0LmNhbGwodGhpcyl9XG4gICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vXCI+Tm9uZTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICA8L2Rpdj5cbiAgIDwhLS0gRGVsZXRlIEJ0biAtLT5cbiAgIDxidXR0b24gaWQ9XCJkZWxldGVcIiBjbGFzcz1cIm1haW5fX3Rhc2stbGlzdF9fbGlzdC1pdGVtX19kZWxldGUtdGFza19fYnRuIGhpZGRlblwiPlxuICAgRGVsZXRlXG4gICA8L2J1dHRvbj5cbjwvbGk+YDtcblxuICByZXR1cm4gdG9kb0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGxpc3RJdGVtTWFya3VwKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdExpc3RJdGVtLCByZW5kZXJQcm9qZWN0VG9kb0xpc3RJdGVtIH07XG4iLCJpbXBvcnQge1xuICBwcm9qZWN0SW5wdXREb21FbGVtZW50IGFzIGlucHV0LFxuICBub3RQcm9qZWN0WWV0Q29udGFpbmVyLFxuICB0b2RvSGVhZGVyVGl0bGUsXG4gIHRvZG9IZWFkZXJDb250YWluZXIsXG4gIGFkZFRvZG9UYXNrSW5wdXRDb250YWluZXIsXG4gIHRvZG9Tb3J0T3B0aW9uc0NvbnRhaW5lcixcbiAgYWRkVG9kb1Rhc2tJbnB1dENvbnRhaW5lciBhcyBuZXdUb2RvSW5wdXQsXG4gIHRvZG9MaXN0LFxufSBmcm9tIFwiLi9kb20tZWxlbWVudHNcIjtcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL2FycmF5c1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtY2xhc3NcIjtcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VG9kb0xpc3RJdGVtIH0gZnJvbSBcIi4vcmVuZGVyLXByb2plY3RcIjtcblxubGV0IHNlbGVjdGVkTGk7XG5cbi8qIENsZWFyIElucHV0IHZhbHVlcyBhZnRlciBldmVudCBsaXN0ZW5lciBmaXJlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFySW5wdXRWYWx1ZSgpIHtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG4vKiBIaWdoTGlnaHQgTGlzdCBJdGVtcyBBbmQgcmVtb3ZlIEhpZ2hsaWdodCB3aGVuIGFub3RoZXIgbGlzdCBpdGVtIGlzIGNsaWNrZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWdobGlnaHQobGkpIHtcbiAgaWYgKHNlbGVjdGVkTGkpIHtcbiAgICAvKiBpZiBzZWxlY3RlZCBsaXN0SXRlbSBpcyB0cnVlIHJlbW92ZSBjbGFzc1xuICBhdCBmaXJzdCBpdHMgZmFsc3kgYnV0IHdoZW4gaSBjbGljayB0aGUgZmlyc3QgbGkgaXQgdHVybnMgdHJ1dGh5ICovXG4gICAgc2VsZWN0ZWRMaS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG4gIC8qIGFkZCB0cnV0aHkgdmFsdWUgdG8gdmFyaWFibGUgb3V0c2lkZSB0aGUgc2NvcGUgb2YgdGhlIGZ1bmN0aW9uICovXG4gIHNlbGVjdGVkTGkgPSBsaTtcbiAgc2VsZWN0ZWRMaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG4vKiBSZW1vdmUgdGhlIG9iamVjdCBmcm9tIHRoZSBhcnJheSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZyb21BcnJheShhcnJheSwgaW5kZXgpIHtcbiAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuLyogVG9nZ2xlIG5vdFByb2plY3RTY3JlZW4gY2xhc3MgKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVOb3RQcm9qZWN0U2NyZWVuKCkge1xuICBpZiAocHJvamVjdEFycmF5Lmxlbmd0aCB8fCBsb2NhbFN0b3JhZ2UubGVuZ3RoKSB7XG4gICAgbm90UHJvamVjdFlldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICAgIG5vdFByb2plY3RZZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxufVxuXG4vKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgZm9yIG1pZGRsZSBzZWN0aW9uIHRpdGxlIGFuZCB0b2RvIGlucHV0IGVsZW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVNaWRkbGVFbGVtZW50c1Zpc2liaWxpdHkoKSB7XG4gIGlmIChwcm9qZWN0QXJyYXkubGVuZ3RoKSB7XG4gICAgdG9kb0hlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICBhZGRUb2RvVGFza0lucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICB9IGVsc2Uge1xuICAgIHRvZG9IZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgYWRkVG9kb1Rhc2tJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgfVxufVxuXG4vKiBUb2dnbGUgZnVuY3Rpb24gZm9yIHNvcnQgb3B0aW9uIGNvbnRhaW5lciAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNvcnRpbmdPcHRpb25WaXNpYmlsaXR5KCkge1xuICB0b2RvU29ydE9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25kaXRpb25Td2l0Y2hlcigpIHtcbiAgbGV0IGNvbmRpdGlvbiA9IHRydWU7XG5cbiAgZnVuY3Rpb24gY2hhbmdlQ29uZGl0aW9uKCkge1xuICAgIGNvbmRpdGlvbiA9ICFjb25kaXRpb247XG4gICAgcmV0dXJuIGNvbmRpdGlvbjtcbiAgfVxuICByZXR1cm4gY2hhbmdlQ29uZGl0aW9uO1xufVxuXG4vKiBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21OdW1iZXIoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5KTtcbn1cblxuLyogR2V0IHRoZSBwcm9qZWN0cyBiYWNrIGZyb20gbG9jYWwgc3RvcmFnZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3QoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgfHwgW10pO1xufVxuXG4vKiBTYXZlIHRoZSBwcm9qZWN0cyBpbiB0byB0aGUgbG9jYWwgc3RvcmFnZSovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZShwcm9qZWN0cykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbi8qIENsZWFyIHRoZSBsb2NhbCBzdG9yYWdlICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0VGFnVGV4dCgpIHtcbiAgaWYgKCF0aGlzLnByaW9yaXR5KSB7XG4gICAgbGV0IHRleHQgPSBcIlNlbGVjdCBhbiBvcHRpb25cIjtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuICBpZiAodGhpcy5wcmlvcml0eSkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcmlvcml0eS5zbGljZSgxKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NTZXRGb3JTZWxlY3QoKSB7XG4gIGlmICghdGhpcy5wcmlvcml0eSkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG4gIGlmICh0aGlzLnByaW9yaXR5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NTZXRGb3JDaGVjaygpIHtcbiAgaWYgKCF0aGlzLmNoZWNrYm94KSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgaWYgKHRoaXMuY2hlY2tib3gpIHtcbiAgICByZXR1cm4gXCJkaXNhYmxlZFwiO1xuICB9XG59XG5cbi8qIE5lZWQgdG8gZmluZCBhIHdheSB0byBtYWtlIHRob3NlIDMgaW50byAxICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NTZXRGb3JUb2RheUJ1dHRvbnMoKSB7XG4gIGlmICghdGhpcy5kYXRlSWQpIHJldHVybiBcIlwiO1xuXG4gIGlmICh0aGlzLmRhdGVJZCA9PT0gXCJ0b2RheVwiKSB7XG4gICAgcmV0dXJuIFwiYWN0aXZlRGF0ZVwiO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc1NldEZvclRvbW9ycm93QnV0dG9ucygpIHtcbiAgaWYgKCF0aGlzLmRhdGVJZCkgcmV0dXJuIFwiXCI7XG5cbiAgaWYgKHRoaXMuZGF0ZUlkID09PSBcInRvbW9ycm93XCIpIHtcbiAgICByZXR1cm4gXCJhY3RpdmVEYXRlXCI7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc1NldEZvclNwZWNpZmljQnV0dG9ucygpIHtcbiAgaWYgKCF0aGlzLmRhdGVJZCkgcmV0dXJuIFwiXCI7XG5cbiAgaWYgKHRoaXMuZGF0ZUlkID09PSBcInNwZWNpZmljXCIpIHtcbiAgICByZXR1cm4gXCJhY3RpdmVEYXRlXCI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVSZWZlcmVuY2UoKSB7XG4gIHJldHVybiB0aGlzLmRhdGU7XG59XG5cbi8qIFJlbmRlcmVkIGRhdGUgaW5wdXQgdmFsdWUgKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZvckRhdGVEaXNwbGF5KCkge1xuICAvKiBtYWtlIGEgbmV3IGRhdGUgb2JqZWN0IGZyb20gdG9kbyBkYXRlICovXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpO1xuICAvKiBDaGVjayBpZiB0b2RvIGRheSBpcyB0b2RheSAqL1xuICBjb25zdCB0b2RheUNoZWNrID0gZGF0ZUZucy5pc1RvZGF5KGRhdGUpO1xuICAvKiBDaGVjayBpZiB0b2RvIGRheSBpcyB0b21vcnJvdyAqL1xuICBjb25zdCB0b21vcnJvd0NoZWNrID0gZGF0ZUZucy5pc1RvbW9ycm93KGRhdGUpO1xuXG4gIC8qIElmIGNvbmRpdGlvbiBtZXQgcmV0dXJuIFwiXCJcbiB0aGF0IGZ1bmN0aW9uIGlzIHVzZWQgaW4gcmVuZGVyIG1vZHVsZSB0byBrZWVwIHRoZSBkaXNwbGF5XG4gdmFsdWUgb2YgZGF0ZSBpbnB1dCB0byB0aGlzLmRhdGUgaWYgaXMgc2V0IGZvciBkYXlzIHRoYXQgYXJlIG5laXRoZXIgXG4gdG9kYXkgb3IgdG9tb3Jyb3cgKi9cbiAgaWYgKHRvZGF5Q2hlY2sgfHwgdG9tb3Jyb3dDaGVjaykgcmV0dXJuIFwiXCI7XG5cbiAgcmV0dXJuIHRoaXMuZGF0ZTtcbn1cblxuLyogZnVuY3Rpb24gdG8gY3JlYXRlIGFuIG9iamVjdCB3aXRoIGdyb3VwZWQgdG9kb3MgYnkgZGF0ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9CeURhdGUoKSB7XG4gIGxldCBhbGxBcnJheSA9IFtdO1xuICBnZXRQcm9qZWN0KCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGFsbEFycmF5LnB1c2goLi4ucHJvamVjdC50b2RvTGlzdCk7XG4gIH0pO1xuICBjb25zdCB0b2RheUFycmF5ID0gYWxsQXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmRhdGVJZCA9PT0gXCJ0b2RheVwiKTtcbiAgY29uc3QgdG9tb3Jyb3dBcnJheSA9IGFsbEFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5kYXRlSWQgPT09IFwidG9tb3Jyb3dcIik7XG4gIGNvbnN0IHNjaGVkdWxlZEFycmF5ID0gYWxsQXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmRhdGVJZCA9PT0gXCJzcGVjaWZpY1wiKTtcblxuICByZXR1cm4geyBhbGxBcnJheSwgdG9kYXlBcnJheSwgdG9tb3Jyb3dBcnJheSwgc2NoZWR1bGVkQXJyYXkgfTtcbn1cblxuLyogRnVuY3Rpb24gZm9yIHVwZGF0ZSB0aGUgaG9tZSBjb250YWluZXIgdG9kbyBudW1iZXJzICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9kb0J5RGF0ZVRvdGFscygpIHtcbiAgY29uc3QgdG9kb0FycmF5T2JqZWN0ID0gZ2V0VG9kb0J5RGF0ZSgpO1xuXG4gIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1zZWN0aW9uX19ob21lLWNvbnRhaW5lcl9fYWxsLXRhc2tzXCIpO1xuICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1zZWN0aW9uX19ob21lLWNvbnRhaW5lcl9fdG9kYXlcIik7XG4gIGNvbnN0IHRvbW9ycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LXNlY3Rpb25fX2hvbWUtY29udGFpbmVyX190b21vcnJvd1wiKTtcbiAgY29uc3Qgc2NoZWR1bGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LXNlY3Rpb25fX2hvbWUtY29udGFpbmVyX19zY2hlZHVsZWRcIik7XG5cbiAgYWxsLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlPYmplY3QuYWxsQXJyYXkubGVuZ3RoO1xuICB0b2RheS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gdG9kb0FycmF5T2JqZWN0LnRvZGF5QXJyYXkubGVuZ3RoO1xuICB0b21vcnJvdy5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gdG9kb0FycmF5T2JqZWN0LnRvbW9ycm93QXJyYXkubGVuZ3RoO1xuICBzY2hlZHVsZWQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IHRvZG9BcnJheU9iamVjdC5zY2hlZHVsZWRBcnJheS5sZW5ndGg7XG59XG5cbi8qIEZ1bmN0aW9uIHRvIGZpbmQgdGhlIGluZGV4IG9mIGFuIGFycmF5ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5kZXgoYXJyYXksIGRhdGEpIHtcbiAgY29uc3QgaW5kZXggPSBhcnJheS5maW5kSW5kZXgoKG9iamVjdCkgPT4gb2JqZWN0LmlkID09PSArZGF0YSk7XG4gIHJldHVybiBpbmRleDtcbn1cblxuLyogRnVuY3Rpb24gdG8gZmluZCB0aGUgaW5kZXggb2YgYW4gdG9kb0FycmF5ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0xpc3RJbmRleChhcnJheSwgZGF0YSkge1xuICBjb25zdCBpbmRleCA9IGFycmF5LmZpbmRJbmRleCgob2JqZWN0KSA9PiBvYmplY3QudG9kb0lkID09PSArZGF0YSk7XG4gIHJldHVybiBpbmRleDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==