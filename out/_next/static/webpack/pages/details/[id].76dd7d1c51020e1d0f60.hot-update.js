webpackHotUpdate_N_E("pages/details/[id]",{

/***/ "./componets/SideMenu/SideMenu.tsx":
/*!*****************************************!*\
  !*** ./componets/SideMenu/SideMenu.tsx ***!
  \*****************************************/
/*! exports provided: SideMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenu", function() { return SideMenu; });
/* harmony import */ var D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_ThemeLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/ThemeLink */ "./componets/common/ThemeLink.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes */ "./routes.ts");



var _jsxFileName = "D:\\Work\\internet-shop\\componets\\SideMenu\\SideMenu.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject3() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.3rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex: start;\n  width: 200px;\n  margin-left: 50px;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].aside(_templateObject());
_c = SideWrapper;
var SideCategories = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h2(_templateObject2());
_c2 = SideCategories;
var SideLinkSection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
_c3 = SideLinkSection;
var SideMenu = function SideMenu() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var category = router.query.category;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SideWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SideCategories, {
      children: "Categories"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SideLinkSection, {
      children: _routes__WEBPACK_IMPORTED_MODULE_6__["categories"].map(function (siteCategory, id) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_ThemeLink__WEBPACK_IMPORTED_MODULE_5__["ThemeLink"], {
          active: category === siteCategory.title,
          href: siteCategory.route,
          children: siteCategory.title
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s(SideMenu, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c4 = SideMenu;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "SideWrapper");
$RefreshReg$(_c2, "SideCategories");
$RefreshReg$(_c3, "SideLinkSection");
$RefreshReg$(_c4, "SideMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL1NpZGVNZW51L1NpZGVNZW51LnRzeCJdLCJuYW1lcyI6WyJTaWRlV3JhcHBlciIsInN0eWxlZCIsImFzaWRlIiwiU2lkZUNhdGVnb3JpZXMiLCJoMiIsIlNpZGVMaW5rU2VjdGlvbiIsImRpdiIsIlNpZGVNZW51Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY2F0ZWdvcnkiLCJxdWVyeSIsImNhdGVnb3JpZXMiLCJtYXAiLCJzaXRlQ2F0ZWdvcnkiLCJpZCIsInRpdGxlIiwicm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsS0FBVixtQkFBakI7S0FBTUYsVztBQVlOLElBQU1HLGNBQWMsR0FBR0YseURBQU0sQ0FBQ0csRUFBVixvQkFBcEI7TUFBTUQsYztBQUdOLElBQU1FLGVBQWUsR0FBR0oseURBQU0sQ0FBQ0ssR0FBVixvQkFBckI7TUFBTUQsZTtBQU9DLElBQU1FLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLEdBQU07QUFBQTs7QUFDckQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURxRCxNQUU3Q0MsUUFGNkMsR0FFaENGLE1BQU0sQ0FBQ0csS0FGeUIsQ0FFN0NELFFBRjZDO0FBR3JELHNCQUNFLHFFQUFDLFdBQUQ7QUFBQSw0QkFDRSxxRUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxlQUFEO0FBQUEsZ0JBQ0dFLGtEQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxZQUFELEVBQWVDLEVBQWY7QUFBQSw0QkFDZCxxRUFBQywyREFBRDtBQUVFLGdCQUFNLEVBQUVMLFFBQVEsS0FBS0ksWUFBWSxDQUFDRSxLQUZwQztBQUdFLGNBQUksRUFBRUYsWUFBWSxDQUFDRyxLQUhyQjtBQUFBLG9CQUtHSCxZQUFZLENBQUNFO0FBTGhCLFdBQ09ELEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0FuQk07O0dBQU1SLFE7VUFDSUUscUQ7OztNQURKRixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbHMvW2lkXS43NmRkN2QxYzUxMDIwZTFkMGY2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgVGhlbWVMaW5rIH0gZnJvbSBcIi4uL2NvbW1vbi9UaGVtZUxpbmtcIjtcclxuaW1wb3J0IHsgY2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmNvbnN0IFNpZGVXcmFwcGVyID0gc3R5bGVkLmFzaWRlYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiBzdGFydDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTaWRlQ2F0ZWdvcmllcyA9IHN0eWxlZC5oMmBcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuYDtcclxuY29uc3QgU2lkZUxpbmtTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlTWVudTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZVdyYXBwZXI+XHJcbiAgICAgIDxTaWRlQ2F0ZWdvcmllcz5DYXRlZ29yaWVzPC9TaWRlQ2F0ZWdvcmllcz5cclxuICAgICAgPFNpZGVMaW5rU2VjdGlvbj5cclxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKHNpdGVDYXRlZ29yeSwgaWQpID0+IChcclxuICAgICAgICAgIDxUaGVtZUxpbmtcclxuICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgYWN0aXZlPXtjYXRlZ29yeSA9PT0gc2l0ZUNhdGVnb3J5LnRpdGxlfVxyXG4gICAgICAgICAgICBocmVmPXtzaXRlQ2F0ZWdvcnkucm91dGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzaXRlQ2F0ZWdvcnkudGl0bGV9XHJcbiAgICAgICAgICA8L1RoZW1lTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TaWRlTGlua1NlY3Rpb24+XHJcbiAgICA8L1NpZGVXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=