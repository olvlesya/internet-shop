webpackHotUpdate_N_E("pages/details/[id]",{

/***/ "./componets/Detail/styledComponents.tsx":
/*!***********************************************!*\
  !*** ./componets/Detail/styledComponents.tsx ***!
  \***********************************************/
/*! exports provided: DetailImage, DetailTitle, DetailWrapper, DetailInformation, DetailPrice, DetailContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailImage", function() { return DetailImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTitle", function() { return DetailTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailWrapper", function() { return DetailWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailInformation", function() { return DetailInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPrice", function() { return DetailPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailContent", function() { return DetailContent; });
/* harmony import */ var D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-left: 40px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.5rem;\n  color: #0a0d0f;\n  letter-spacing: 0.3px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 18px;\n"]);

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
var DetailInformation = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject4());
var DetailPrice = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject5());
var DetailContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject6());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL0RldGFpbC9zdHlsZWRDb21wb25lbnRzLnRzeCJdLCJuYW1lcyI6WyJEZXRhaWxJbWFnZSIsInN0eWxlZCIsImltZyIsIkRldGFpbFRpdGxlIiwiaDEiLCJEZXRhaWxXcmFwcGVyIiwiYXJ0aWNsZSIsIkRldGFpbEluZm9ybWF0aW9uIiwic2VjdGlvbiIsIkRldGFpbFByaWNlIiwiaDIiLCJEZXRhaWxDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBakI7QUFhQSxJQUFNQyxXQUFXLEdBQUdGLHlEQUFNLENBQUNHLEVBQVYsb0JBQWpCO0FBUUEsSUFBTUMsYUFBYSxHQUFHSix5REFBTSxDQUFDSyxPQUFWLG9CQUFuQjtBQVVBLElBQU1DLGlCQUFpQixHQUFHTix5REFBTSxDQUFDTyxPQUFWLG9CQUF2QjtBQUlBLElBQU1DLFdBQVcsR0FBR1IseURBQU0sQ0FBQ1MsRUFBVixvQkFBakI7QUFNQSxJQUFNQyxhQUFhLEdBQUdWLHlEQUFNLENBQUNPLE9BQVYsb0JBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbHMvW2lkXS5kYWQ2MmExNjZhZWY1NWQxNjMwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuICBjb2xvcjogIzBhMGQwZjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsV3JhcHBlciA9IHN0eWxlZC5hcnRpY2xlYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbEluZm9ybWF0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbFByaWNlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiAjMGEwZDBmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxDb250ZW50ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=