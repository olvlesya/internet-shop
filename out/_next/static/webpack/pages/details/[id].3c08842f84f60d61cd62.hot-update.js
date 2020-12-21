webpackHotUpdate_N_E("pages/details/[id]",{

/***/ "./componets/Detail/Detail.tsx":
/*!*************************************!*\
  !*** ./componets/Detail/Detail.tsx ***!
  \*************************************/
/*! exports provided: Detail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Detail", function() { return Detail; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledComponents */ "./componets/Detail/styledComponents.tsx");
/* harmony import */ var _common_ThemeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ThemeLink */ "./componets/common/ThemeLink.tsx");


var _jsxFileName = "D:\\Work\\internet-shop\\componets\\Detail\\Detail.tsx",
    _this = undefined;




var Detail = function Detail(_ref) {
  var category = _ref.category,
      title = _ref.title,
      price = _ref.price,
      image = _ref.image,
      description = _ref.description;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailWrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailImageWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailImage"], {
        src: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailContent"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailTitle"], {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_ThemeLink__WEBPACK_IMPORTED_MODULE_3__["ThemeLink"], {
          href: "/category/".concat(category),
          children: category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailPrice"], {
        children: ["$", price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailInformation"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), description]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};
_c = Detail;

var _c;

$RefreshReg$(_c, "Detail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./componets/Detail/styledComponents.tsx":
/*!***********************************************!*\
  !*** ./componets/Detail/styledComponents.tsx ***!
  \***********************************************/
/*! exports provided: DetailImage, DetailTitle, DetailWrapper, DetailImageWrapper, DetailInformation, DetailPrice, DetailContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailImage", function() { return DetailImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTitle", function() { return DetailTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailWrapper", function() { return DetailWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailImageWrapper", function() { return DetailImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailInformation", function() { return DetailInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPrice", function() { return DetailPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailContent", function() { return DetailContent; });
/* harmony import */ var D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject7() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-left: 40px;\n  @media (max-width: 1024px) {\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.5rem;\n  color: #0a0d0f;\n  letter-spacing: 0.3px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 18px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  @media (max-width: 1024px) {\n    justify-content: center;\n    margin-bottom: 40px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  width: 80%;\n  margin: auto;\n\n  @media (max-width: 1024px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.5rem;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  color: #0a0d0f;\n  letter-spacing: 0.3px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 400px;\n  max-height: 400px;\n  transition: transform 500ms;\n  border: 1px solid #00000033;\n  background-color: #fff;\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.05);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var DetailImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject());
var DetailTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1(_templateObject2());
var DetailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article(_templateObject3());
var DetailImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var DetailInformation = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject5());
var DetailPrice = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject6());
var DetailContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject7());

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./componets/SearchPanel/SearchPanel.tsx":
/*!***********************************************!*\
  !*** ./componets/SearchPanel/SearchPanel.tsx ***!
  \***********************************************/
/*! exports provided: SearchPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPanel", function() { return SearchPanel; });
/* harmony import */ var D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* harmony import */ var _common_ThemeLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/ThemeLink */ "./componets/common/ThemeLink.tsx");
/* harmony import */ var _DropdownButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DropdownButton */ "./componets/SearchPanel/DropdownButton.tsx");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styledComponents */ "./componets/SearchPanel/styledComponents.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../routes */ "./routes.ts");



var _jsxFileName = "D:\\Work\\internet-shop\\componets\\SearchPanel\\SearchPanel.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 10px 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var CategoryLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_common_ThemeLink__WEBPACK_IMPORTED_MODULE_7__["ThemeLink"])(_templateObject());
_c = CategoryLink;
var SearchPanel = function SearchPanel() {
  _s();

  var searchQuery = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.searchQuery;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(searchQuery),
      value = _useState[0],
      setValue = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var _router$query$categor = router.query.category,
      category = _router$query$categor === void 0 ? "" : _router$query$categor;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["Find"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["SideTitle"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["HomePageLink"], {
          onClick: function onClick(e) {
            e.preventDefault();
            router.push("/");
          },
          children: "All goods"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["Controls"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["ControlWrapper"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["FindGoods"], {
            placeholder: "find goods",
            value: value,
            onChange: function onChange(e) {
              setValue(e.target.value);
            },
            onKeyDown: function onKeyDown(e) {
              if (e.key === "Escape") {
                dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["searchItems"])(""));
                setValue("");
              }

              if (e.key === "Enter") {
                dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["searchItems"])(value));
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["FindButton"], {
            onClick: function onClick() {
              dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["searchItems"])(value));
            },
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["ControlWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_DropdownButton__WEBPACK_IMPORTED_MODULE_8__["DropdownButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["CategoryLinks"], {
      children: _routes__WEBPACK_IMPORTED_MODULE_10__["categories"].map(function (siteCategory, id) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CategoryLink, {
          active: category.toString().toLowerCase() === siteCategory.title.toLowerCase(),
          href: siteCategory.route,
          children: siteCategory.title
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(SearchPanel, "0b6jgSbEj1PcU6mFlAGpKK2Pxrc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c2 = SearchPanel;

var _c, _c2;

$RefreshReg$(_c, "CategoryLink");
$RefreshReg$(_c2, "SearchPanel");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL0RldGFpbC9EZXRhaWwudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25ldHMvRGV0YWlsL3N0eWxlZENvbXBvbmVudHMudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25ldHMvU2VhcmNoUGFuZWwvU2VhcmNoUGFuZWwudHN4Il0sIm5hbWVzIjpbIkRldGFpbCIsImNhdGVnb3J5IiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJEZXRhaWxJbWFnZSIsInN0eWxlZCIsImltZyIsIkRldGFpbFRpdGxlIiwiaDEiLCJEZXRhaWxXcmFwcGVyIiwiYXJ0aWNsZSIsIkRldGFpbEltYWdlV3JhcHBlciIsImRpdiIsIkRldGFpbEluZm9ybWF0aW9uIiwic2VjdGlvbiIsIkRldGFpbFByaWNlIiwiaDIiLCJEZXRhaWxDb250ZW50IiwiQ2F0ZWdvcnlMaW5rIiwiVGhlbWVMaW5rIiwiU2VhcmNoUGFuZWwiLCJzZWFyY2hRdWVyeSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwidGFyZ2V0Iiwia2V5Iiwic2VhcmNoSXRlbXMiLCJjYXRlZ29yaWVzIiwibWFwIiwic2l0ZUNhdGVnb3J5IiwiaWQiLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwicm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVNBO0FBRU8sSUFBTUEsTUFBcUMsR0FBRyxTQUF4Q0EsTUFBd0MsT0FNL0M7QUFBQSxNQUxKQyxRQUtJLFFBTEpBLFFBS0k7QUFBQSxNQUpKQyxLQUlJLFFBSkpBLEtBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxLQUVJLFFB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ZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTJDRSxxRUFBQywrREFBRDtBQUFBLGdCQUNHYSxtREFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsWUFBRCxFQUFlQyxFQUFmO0FBQUEsNEJBQ2QscUVBQUMsWUFBRDtBQUVFLGdCQUFNLEVBQ0oxQyxRQUFRLENBQUMyQyxRQUFULEdBQW9CQyxXQUFwQixPQUNBSCxZQUFZLENBQUN4QyxLQUFiLENBQW1CMkMsV0FBbkIsRUFKSjtBQU1FLGNBQUksRUFBRUgsWUFBWSxDQUFDSSxLQU5yQjtBQUFBLG9CQVFHSixZQUFZLENBQUN4QztBQVJoQixXQUNPeUMsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0REQsQ0FyRU07O0dBQU1yQixXO1VBQ1NFLHVELEVBSUhNLHVELEVBQ0ZFLHFEOzs7TUFOSlYsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWxzL1tpZF0uM2MwODg0MmY4NGY2MGQ2MWNkNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGl0ZW0gfSBmcm9tIFwiLi4vLi4vdHlwZXMvaXRlbVwiO1xuaW1wb3J0IHtcbiAgRGV0YWlsSW1hZ2UsXG4gIERldGFpbFRpdGxlLFxuICBEZXRhaWxXcmFwcGVyLFxuICBEZXRhaWxJbmZvcm1hdGlvbixcbiAgRGV0YWlsUHJpY2UsXG4gIERldGFpbENvbnRlbnQsXG4gIERldGFpbEltYWdlV3JhcHBlcixcbn0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVGhlbWVMaW5rIH0gZnJvbSBcIi4uL2NvbW1vbi9UaGVtZUxpbmtcIjtcblxuZXhwb3J0IGNvbnN0IERldGFpbDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8aXRlbT4gPSAoe1xuICBjYXRlZ29yeSxcbiAgdGl0bGUsXG4gIHByaWNlLFxuICBpbWFnZSxcbiAgZGVzY3JpcHRpb24sXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPERldGFpbFdyYXBwZXI+XG4gICAgICA8RGV0YWlsSW1hZ2VXcmFwcGVyPlxuICAgICAgICA8RGV0YWlsSW1hZ2Ugc3JjPXtpbWFnZX0gLz5cbiAgICAgIDwvRGV0YWlsSW1hZ2VXcmFwcGVyPlxuICAgICAgPERldGFpbENvbnRlbnQ+XG4gICAgICAgIDxEZXRhaWxUaXRsZT57dGl0bGV9PC9EZXRhaWxUaXRsZT5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPFRoZW1lTGluayBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YH0+e2NhdGVnb3J5fTwvVGhlbWVMaW5rPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxEZXRhaWxQcmljZT4ke3ByaWNlfTwvRGV0YWlsUHJpY2U+XG4gICAgICAgIDxEZXRhaWxJbmZvcm1hdGlvbj5cbiAgICAgICAgICA8aDM+RGVzY3JpcHRpb248L2gzPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9EZXRhaWxJbmZvcm1hdGlvbj5cbiAgICAgIDwvRGV0YWlsQ29udGVudD5cbiAgICA8L0RldGFpbFdyYXBwZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IERldGFpbEltYWdlID0gc3R5bGVkLmltZ2BcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGV0YWlsVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgY29sb3I6ICMwYTBkMGY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBEZXRhaWxXcmFwcGVyID0gc3R5bGVkLmFydGljbGVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBEZXRhaWxJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBEZXRhaWxJbmZvcm1hdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBmb250LXNpemU6IDE4cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRGV0YWlsUHJpY2UgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzBhMGQwZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuYDtcblxuZXhwb3J0IGNvbnN0IERldGFpbENvbnRlbnQgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi8uLi90eXBlcy9zdG9yZVwiO1xuaW1wb3J0IHsgc2VhcmNoSXRlbXMgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcbmltcG9ydCB7IFRoZW1lTGluayB9IGZyb20gXCIuLi9jb21tb24vVGhlbWVMaW5rXCI7XG5pbXBvcnQgeyBEcm9wZG93bkJ1dHRvbiB9IGZyb20gXCIuL0Ryb3Bkb3duQnV0dG9uXCI7XG5pbXBvcnQge1xuICBDb250cm9sV3JhcHBlcixcbiAgRmluZCxcbiAgRmluZEJ1dHRvbixcbiAgRmluZEdvb2RzLFxuICBIb21lUGFnZUxpbmssXG4gIFNpZGVUaXRsZSxcbiAgQ29udHJvbHMsXG4gIENhdGVnb3J5TGlua3MsXG4gIEhlYWRlcixcbn0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcblxuY29uc3QgQ2F0ZWdvcnlMaW5rID0gc3R5bGVkKFRoZW1lTGluaylgXG4gIG1hcmdpbjogMCAxMHB4IDEwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoUGFuZWw6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hRdWVyeSA9IHVzZVNlbGVjdG9yPHN0b3JlLCBzdG9yZVtcInNlYXJjaFF1ZXJ5XCJdPihcbiAgICAoc3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5XG4gICk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoc2VhcmNoUXVlcnkpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGNhdGVnb3J5ID0gXCJcIiB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHJldHVybiAoXG4gICAgPEhlYWRlcj5cbiAgICAgIDxGaW5kPlxuICAgICAgICA8U2lkZVRpdGxlPlxuICAgICAgICAgIDxIb21lUGFnZUxpbmtcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBbGwgZ29vZHNcbiAgICAgICAgICA8L0hvbWVQYWdlTGluaz5cbiAgICAgICAgPC9TaWRlVGl0bGU+XG4gICAgICAgIDxDb250cm9scz5cbiAgICAgICAgICA8Q29udHJvbFdyYXBwZXI+XG4gICAgICAgICAgICA8RmluZEdvb2RzXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmluZCBnb29kc1wiXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZWFyY2hJdGVtcyhcIlwiKSk7XG4gICAgICAgICAgICAgICAgICBzZXRWYWx1ZShcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNlYXJjaEl0ZW1zKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvRmluZEdvb2RzPlxuICAgICAgICAgICAgPEZpbmRCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNlYXJjaEl0ZW1zKHZhbHVlKSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9GaW5kQnV0dG9uPlxuICAgICAgICAgIDwvQ29udHJvbFdyYXBwZXI+XG4gICAgICAgICAgPENvbnRyb2xXcmFwcGVyPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIC8+XG4gICAgICAgICAgPC9Db250cm9sV3JhcHBlcj5cbiAgICAgICAgPC9Db250cm9scz5cbiAgICAgIDwvRmluZD5cbiAgICAgIDxDYXRlZ29yeUxpbmtzPlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKHNpdGVDYXRlZ29yeSwgaWQpID0+IChcbiAgICAgICAgICA8Q2F0ZWdvcnlMaW5rXG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgYWN0aXZlPXtcbiAgICAgICAgICAgICAgY2F0ZWdvcnkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICBzaXRlQ2F0ZWdvcnkudGl0bGUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHJlZj17c2l0ZUNhdGVnb3J5LnJvdXRlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzaXRlQ2F0ZWdvcnkudGl0bGV9XG4gICAgICAgICAgPC9DYXRlZ29yeUxpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXRlZ29yeUxpbmtzPlxuICAgIDwvSGVhZGVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=