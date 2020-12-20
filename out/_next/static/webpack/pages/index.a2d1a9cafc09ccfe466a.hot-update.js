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
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-right: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var CategoryLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_common_ThemeLink__WEBPACK_IMPORTED_MODULE_6__["ThemeLink"])(_templateObject());
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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_ThemeLink__WEBPACK_IMPORTED_MODULE_6__["ThemeLink"], {
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

_c = SearchPanel;

var _c;

$RefreshReg$(_c, "SearchPanel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL1NlYXJjaFBhbmVsL1NlYXJjaFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDYXRlZ29yeUxpbmsiLCJzdHlsZWQiLCJUaGVtZUxpbmsiLCJTZWFyY2hQYW5lbCIsInNlYXJjaFF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJlIiwidGFyZ2V0Iiwia2V5Iiwic2VhcmNoSXRlbXMiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJpZCIsInJvdXRlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsaUVBQU0sQ0FBQ0MsMkRBQUQsQ0FBVCxtQkFBbEI7QUFJTyxJQUFNQyxXQUFvQyxHQUFHLFNBQXZDQSxXQUF1QyxHQUFNO0FBQUE7O0FBQ3hELE1BQU1DLFdBQVcsR0FBR0MsK0RBQVcsQ0FDN0IsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsV0FBakI7QUFBQSxHQUQ2QixDQUEvQjs7QUFEd0Qsa0JBSTlCRyxzREFBUSxDQUFDSCxXQUFELENBSnNCO0FBQUEsTUFJakRJLEtBSmlEO0FBQUEsTUFJMUNDLFFBSjBDOztBQUt4RCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsc0JBQ0UscUVBQUMsd0RBQUQ7QUFBQSw0QkFDRSxxRUFBQyxzREFBRDtBQUFBLDhCQUNFLHFFQUFDLDJEQUFEO0FBQUEsK0JBQ0UscUVBQUMsOERBQUQ7QUFBYyxjQUFJLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQywwREFBRDtBQUFBLGdDQUNFLHFFQUFDLGdFQUFEO0FBQUEsa0NBQ0UscUVBQUMsMkRBQUQ7QUFDRSx1QkFBVyxFQUFDLFlBRGQ7QUFFRSxpQkFBSyxFQUFFSCxLQUZUO0FBR0Usb0JBQVEsRUFBRSxrQkFBQ0ksQ0FBRCxFQUFPO0FBQ2ZILHNCQUFRLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxLQUFWLENBQVI7QUFDRCxhQUxIO0FBTUUscUJBQVMsRUFBRSxtQkFBQ0ksQ0FBRCxFQUFPO0FBQ2hCLGtCQUFJQSxDQUFDLENBQUNFLEdBQUYsS0FBVSxRQUFkLEVBQXdCO0FBQ3RCSix3QkFBUSxDQUFDSywwREFBVyxDQUFDLEVBQUQsQ0FBWixDQUFSO0FBQ0FOLHdCQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0Q7O0FBQ0Qsa0JBQUlHLENBQUMsQ0FBQ0UsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckJKLHdCQUFRLENBQUNLLDBEQUFXLENBQUNQLEtBQUQsQ0FBWixDQUFSO0FBQ0Q7QUFDRjtBQWRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFpQkUscUVBQUMsNERBQUQ7QUFDRSxtQkFBTyxFQUFFLG1CQUFNO0FBQ2JFLHNCQUFRLENBQUNLLDBEQUFXLENBQUNQLEtBQUQsQ0FBWixDQUFSO0FBQ0QsYUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBMEJFLHFFQUFDLGdFQUFEO0FBQUEsaUNBQ0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBb0NFLHFFQUFDLCtEQUFEO0FBQUEsZ0JBQ0dRLGtEQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxRQUFELEVBQVdDLEVBQVg7QUFBQSw0QkFDZCxxRUFBQywyREFBRDtBQUFvQixjQUFJLEVBQUVELFFBQVEsQ0FBQ0UsS0FBbkM7QUFBQSxvQkFDR0YsUUFBUSxDQUFDRztBQURaLFdBQWdCRixFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4Q0QsQ0FyRE07O0dBQU1oQixXO1VBQ1NFLHVELEVBSUhNLHVEOzs7S0FMTlIsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMmQxYTljYWZjMDljY2ZlNDY2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi8uLi90eXBlcy9zdG9yZVwiO1xyXG5pbXBvcnQgeyBzZWFyY2hJdGVtcyB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBUaGVtZUxpbmsgfSBmcm9tIFwiLi4vY29tbW9uL1RoZW1lTGlua1wiO1xyXG5pbXBvcnQgeyBEcm9wZG93bkJ1dHRvbiB9IGZyb20gXCIuL0Ryb3Bkb3duQnV0dG9uXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29udHJvbFdyYXBwZXIsXHJcbiAgRmluZCxcclxuICBGaW5kQnV0dG9uLFxyXG4gIEZpbmRHb29kcyxcclxuICBIb21lUGFnZUxpbmssXHJcbiAgU2lkZVRpdGxlLFxyXG4gIENvbnRyb2xzLFxyXG4gIENhdGVnb3J5TGlua3MsXHJcbiAgSGVhZGVyLFxyXG59IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgY2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmNvbnN0IENhdGVnb3J5TGluayA9IHN0eWxlZChUaGVtZUxpbmspYFxyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hQYW5lbDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSB1c2VTZWxlY3RvcjxzdG9yZSwgc3RvcmVbXCJzZWFyY2hRdWVyeVwiXT4oXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5XHJcbiAgKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHNlYXJjaFF1ZXJ5KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyPlxyXG4gICAgICA8RmluZD5cclxuICAgICAgICA8U2lkZVRpdGxlPlxyXG4gICAgICAgICAgPEhvbWVQYWdlTGluayBocmVmPVwiL1wiPkFsbCBnb29kczwvSG9tZVBhZ2VMaW5rPlxyXG4gICAgICAgIDwvU2lkZVRpdGxlPlxyXG4gICAgICAgIDxDb250cm9scz5cclxuICAgICAgICAgIDxDb250cm9sV3JhcHBlcj5cclxuICAgICAgICAgICAgPEZpbmRHb29kc1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmluZCBnb29kc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNlYXJjaEl0ZW1zKFwiXCIpKTtcclxuICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZWFyY2hJdGVtcyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID48L0ZpbmRHb29kcz5cclxuICAgICAgICAgICAgPEZpbmRCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZWFyY2hJdGVtcyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgPC9GaW5kQnV0dG9uPlxyXG4gICAgICAgICAgPC9Db250cm9sV3JhcHBlcj5cclxuICAgICAgICAgIDxDb250cm9sV3JhcHBlcj5cclxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIC8+XHJcbiAgICAgICAgICA8L0NvbnRyb2xXcmFwcGVyPlxyXG4gICAgICAgIDwvQ29udHJvbHM+XHJcbiAgICAgIDwvRmluZD5cclxuICAgICAgPENhdGVnb3J5TGlua3M+XHJcbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaWQpID0+IChcclxuICAgICAgICAgIDxUaGVtZUxpbmsga2V5PXtpZH0gaHJlZj17Y2F0ZWdvcnkucm91dGV9PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnkudGl0bGV9XHJcbiAgICAgICAgICA8L1RoZW1lTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXRlZ29yeUxpbmtzPlxyXG4gICAgPC9IZWFkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==