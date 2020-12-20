webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* harmony import */ var _common_ThemeLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/ThemeLink */ "./componets/common/ThemeLink.tsx");
/* harmony import */ var _DropdownButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DropdownButton */ "./componets/SearchPanel/DropdownButton.tsx");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styledComponents */ "./componets/SearchPanel/styledComponents.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../routes */ "./routes.ts");



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









var CategoryLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_common_ThemeLink__WEBPACK_IMPORTED_MODULE_6__["ThemeLink"])(_templateObject());
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_8__["Find"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_8__["SideTitle"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_8__["HomePageLink"], {
          href: "/",
          children: "All goods"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_8__["Controls"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_8__["ControlWrapper"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_8__["FindGoods"], {
            placeholder: "find goods",
            value: value,
            onChange: function onChange(e) {
              setValue(e.target.value);
            },
            onKeyDown: function onKeyDown(e) {
              if (e.key === "Escape") {
                dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_5__["searchItems"])(""));
                setValue("");
              }

              if (e.key === "Enter") {
                dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_5__["searchItems"])(value));
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_8__["FindButton"], {
            onClick: function onClick() {
              dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_5__["searchItems"])(value));
            },
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_8__["ControlWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_DropdownButton__WEBPACK_IMPORTED_MODULE_7__["DropdownButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_8__["CategoryLinks"], {
      children: _routes__WEBPACK_IMPORTED_MODULE_9__["categories"].map(function (category, id) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CategoryLink, {
          href: category.route,
          children: category.title
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s(SearchPanel, "98XkT9kanHDNI4TjyQXHlmnmU8Q=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL1NlYXJjaFBhbmVsL1NlYXJjaFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDYXRlZ29yeUxpbmsiLCJzdHlsZWQiLCJUaGVtZUxpbmsiLCJTZWFyY2hQYW5lbCIsInNlYXJjaFF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJlIiwidGFyZ2V0Iiwia2V5Iiwic2VhcmNoSXRlbXMiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJpZCIsInJvdXRlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsaUVBQU0sQ0FBQ0MsMkRBQUQsQ0FBVCxtQkFBbEI7S0FBTUYsWTtBQUlDLElBQU1HLFdBQW9DLEdBQUcsU0FBdkNBLFdBQXVDLEdBQU07QUFBQTs7QUFDeEQsTUFBTUMsV0FBVyxHQUFHQywrREFBVyxDQUM3QixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixXQUFqQjtBQUFBLEdBRDZCLENBQS9COztBQUR3RCxrQkFJOUJHLHNEQUFRLENBQUNILFdBQUQsQ0FKc0I7QUFBQSxNQUlqREksS0FKaUQ7QUFBQSxNQUkxQ0MsUUFKMEM7O0FBS3hELE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxzQkFDRSxxRUFBQyx3REFBRDtBQUFBLDRCQUNFLHFFQUFDLHNEQUFEO0FBQUEsOEJBQ0UscUVBQUMsMkRBQUQ7QUFBQSwrQkFDRSxxRUFBQyw4REFBRDtBQUFjLGNBQUksRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLDBEQUFEO0FBQUEsZ0NBQ0UscUVBQUMsZ0VBQUQ7QUFBQSxrQ0FDRSxxRUFBQywyREFBRDtBQUNFLHVCQUFXLEVBQUMsWUFEZDtBQUVFLGlCQUFLLEVBQUVILEtBRlQ7QUFHRSxvQkFBUSxFQUFFLGtCQUFDSSxDQUFELEVBQU87QUFDZkgsc0JBQVEsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNMLEtBQVYsQ0FBUjtBQUNELGFBTEg7QUFNRSxxQkFBUyxFQUFFLG1CQUFDSSxDQUFELEVBQU87QUFDaEIsa0JBQUlBLENBQUMsQ0FBQ0UsR0FBRixLQUFVLFFBQWQsRUFBd0I7QUFDdEJKLHdCQUFRLENBQUNLLDBEQUFXLENBQUMsRUFBRCxDQUFaLENBQVI7QUFDQU4sd0JBQVEsQ0FBQyxFQUFELENBQVI7QUFDRDs7QUFDRCxrQkFBSUcsQ0FBQyxDQUFDRSxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQkosd0JBQVEsQ0FBQ0ssMERBQVcsQ0FBQ1AsS0FBRCxDQUFaLENBQVI7QUFDRDtBQUNGO0FBZEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWlCRSxxRUFBQyw0REFBRDtBQUNFLG1CQUFPLEVBQUUsbUJBQU07QUFDYkUsc0JBQVEsQ0FBQ0ssMERBQVcsQ0FBQ1AsS0FBRCxDQUFaLENBQVI7QUFDRCxhQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUEwQkUscUVBQUMsZ0VBQUQ7QUFBQSxpQ0FDRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFvQ0UscUVBQUMsK0RBQUQ7QUFBQSxnQkFDR1Esa0RBQVUsQ0FBQ0MsR0FBWCxDQUFlLFVBQUNDLFFBQUQsRUFBV0MsRUFBWDtBQUFBLDRCQUNkLHFFQUFDLFlBQUQ7QUFBdUIsY0FBSSxFQUFFRCxRQUFRLENBQUNFLEtBQXRDO0FBQUEsb0JBQ0dGLFFBQVEsQ0FBQ0c7QUFEWixXQUFtQkYsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOENELENBckRNOztHQUFNaEIsVztVQUNTRSx1RCxFQUlITSx1RDs7O01BTE5SLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmY3Y2YyYWNmNWY1YTFkZjE1NDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgc2VhcmNoSXRlbXMgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgVGhlbWVMaW5rIH0gZnJvbSBcIi4uL2NvbW1vbi9UaGVtZUxpbmtcIjtcclxuaW1wb3J0IHsgRHJvcGRvd25CdXR0b24gfSBmcm9tIFwiLi9Ecm9wZG93bkJ1dHRvblwiO1xyXG5pbXBvcnQge1xyXG4gIENvbnRyb2xXcmFwcGVyLFxyXG4gIEZpbmQsXHJcbiAgRmluZEJ1dHRvbixcclxuICBGaW5kR29vZHMsXHJcbiAgSG9tZVBhZ2VMaW5rLFxyXG4gIFNpZGVUaXRsZSxcclxuICBDb250cm9scyxcclxuICBDYXRlZ29yeUxpbmtzLFxyXG4gIEhlYWRlcixcclxufSBmcm9tIFwiLi9zdHlsZWRDb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcblxyXG5jb25zdCBDYXRlZ29yeUxpbmsgPSBzdHlsZWQoVGhlbWVMaW5rKWBcclxuICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaFBhbmVsOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBzZWFyY2hRdWVyeSA9IHVzZVNlbGVjdG9yPHN0b3JlLCBzdG9yZVtcInNlYXJjaFF1ZXJ5XCJdPihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnlcclxuICApO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoc2VhcmNoUXVlcnkpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXI+XHJcbiAgICAgIDxGaW5kPlxyXG4gICAgICAgIDxTaWRlVGl0bGU+XHJcbiAgICAgICAgICA8SG9tZVBhZ2VMaW5rIGhyZWY9XCIvXCI+QWxsIGdvb2RzPC9Ib21lUGFnZUxpbms+XHJcbiAgICAgICAgPC9TaWRlVGl0bGU+XHJcbiAgICAgICAgPENvbnRyb2xzPlxyXG4gICAgICAgICAgPENvbnRyb2xXcmFwcGVyPlxyXG4gICAgICAgICAgICA8RmluZEdvb2RzXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmaW5kIGdvb2RzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2VhcmNoSXRlbXMoXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRWYWx1ZShcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNlYXJjaEl0ZW1zKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPjwvRmluZEdvb2RzPlxyXG4gICAgICAgICAgICA8RmluZEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNlYXJjaEl0ZW1zKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICA8L0ZpbmRCdXR0b24+XHJcbiAgICAgICAgICA8L0NvbnRyb2xXcmFwcGVyPlxyXG4gICAgICAgICAgPENvbnRyb2xXcmFwcGVyPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gLz5cclxuICAgICAgICAgIDwvQ29udHJvbFdyYXBwZXI+XHJcbiAgICAgICAgPC9Db250cm9scz5cclxuICAgICAgPC9GaW5kPlxyXG4gICAgICA8Q2F0ZWdvcnlMaW5rcz5cclxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpZCkgPT4gKFxyXG4gICAgICAgICAgPENhdGVnb3J5TGluayBrZXk9e2lkfSBocmVmPXtjYXRlZ29yeS5yb3V0ZX0+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeS50aXRsZX1cclxuICAgICAgICAgIDwvQ2F0ZWdvcnlMaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0NhdGVnb3J5TGlua3M+XHJcbiAgICA8L0hlYWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9