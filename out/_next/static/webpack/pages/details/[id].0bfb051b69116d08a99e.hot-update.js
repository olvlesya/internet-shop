webpackHotUpdate_N_E("pages/details/[id]",{

/***/ "./componets/common/ThemeLink.tsx":
/*!****************************************!*\
  !*** ./componets/common/ThemeLink.tsx ***!
  \****************************************/
/*! exports provided: ThemeLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLink", function() { return ThemeLink; });
/* harmony import */ var D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\Work\\internet-shop\\componets\\common\\ThemeLink.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      font-weight: 700;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #ff7733;\n  text-decoration: none;\n  font-size: 1.1rem;\n  margin-bottom: 10px;\n  cursor: pointer;\n  ", ";\n\n  :hover {\n    text-decoration: underline;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a(_templateObject(), function (props) {
  return props.active && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
});
_c = StyledLink;
var ThemeLink = function ThemeLink(_ref) {
  _s();

  var href = _ref.href,
      active = _ref.active,
      children = _ref.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(StyledLink, {
    active: active,
    onClick: function onClick(e) {
      e.preventDefault();
      router.push(href);
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(ThemeLink, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c2 = ThemeLink;

var _c, _c2;

$RefreshReg$(_c, "StyledLink");
$RefreshReg$(_c2, "ThemeLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL2NvbW1vbi9UaGVtZUxpbmsudHN4Il0sIm5hbWVzIjpbIlN0eWxlZExpbmsiLCJzdHlsZWQiLCJhIiwicHJvcHMiLCJhY3RpdmUiLCJjc3MiLCJUaGVtZUxpbmsiLCJocmVmIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVixvQkFNWixVQUFDQyxLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDQyxNQUFOLElBQ0FDLDZEQURBLG9CQURBO0FBQUEsQ0FOWSxDQUFoQjtLQUFNTCxVO0FBc0JDLElBQU1NLFNBQXlDLEdBQUcsU0FBNUNBLFNBQTRDLE9BSW5EO0FBQUE7O0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkgsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkksUUFDSSxRQURKQSxRQUNJO0FBQ0osTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLHNCQUNFLHFFQUFDLFVBQUQ7QUFDRSxVQUFNLEVBQUVOLE1BRFY7QUFFRSxXQUFPLEVBQUUsaUJBQUNPLENBQUQsRUFBTztBQUNkQSxPQUFDLENBQUNDLGNBQUY7QUFDQUgsWUFBTSxDQUFDSSxJQUFQLENBQVlOLElBQVo7QUFDRCxLQUxIO0FBQUEsY0FPR0M7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQWpCTTs7R0FBTUYsUztVQUtJSSxxRDs7O01BTEpKLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlscy9baWRdLjBiZmIwNTFiNjkxMTZkMDhhOTllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbnR5cGUgTGlua1Byb3BzID0ge1xuICBhY3RpdmU/OiBib29sZWFuO1xufTtcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hPExpbmtQcm9wcz5gXG4gIGNvbG9yOiAjZmY3NzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmFjdGl2ZSAmJlxuICAgIGNzc2BcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYH07XG5cbiAgOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcblxudHlwZSBQcm9wcyA9IHtcbiAgaHJlZjogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IFRoZW1lTGluazogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtcbiAgaHJlZixcbiAgYWN0aXZlLFxuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZExpbmtcbiAgICAgIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByb3V0ZXIucHVzaChocmVmKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3R5bGVkTGluaz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9