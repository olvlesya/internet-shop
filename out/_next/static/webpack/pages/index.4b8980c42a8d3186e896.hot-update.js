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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL1NlYXJjaFBhbmVsL1NlYXJjaFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDYXRlZ29yeUxpbmsiLCJzdHlsZWQiLCJUaGVtZUxpbmsiLCJTZWFyY2hQYW5lbCIsInNlYXJjaFF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImNhdGVnb3J5IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInRhcmdldCIsImtleSIsInNlYXJjaEl0ZW1zIiwiY2F0ZWdvcmllcyIsIm1hcCIsInNpdGVDYXRlZ29yeSIsImlkIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInRpdGxlIiwicm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLGlFQUFNLENBQUNDLDJEQUFELENBQVQsbUJBQWxCO0tBQU1GLFk7QUFJQyxJQUFNRyxXQUFvQyxHQUFHLFNBQXZDQSxXQUF1QyxHQUFNO0FBQUE7O0FBQ3hELE1BQU1DLFdBQVcsR0FBR0MsK0RBQVcsQ0FDN0IsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsV0FBakI7QUFBQSxHQUQ2QixDQUEvQjs7QUFEd0Qsa0JBSTlCRyxzREFBUSxDQUFDSCxXQUFELENBSnNCO0FBQUEsTUFJakRJLEtBSmlEO0FBQUEsTUFJMUNDLFFBSjBDOztBQUt4RCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQU53RCw4QkFPOUJELE1BQU0sQ0FBQ0UsS0FQdUIsQ0FPaERDLFFBUGdEO0FBQUEsTUFPaERBLFFBUGdELHNDQU9yQyxFQVBxQztBQVN4RCxzQkFDRSxxRUFBQyx3REFBRDtBQUFBLDRCQUNFLHFFQUFDLHNEQUFEO0FBQUEsOEJBQ0UscUVBQUMsMkRBQUQ7QUFBQSwrQkFDRSxxRUFBQyw4REFBRDtBQUNFLGlCQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBTztBQUNkQSxhQUFDLENBQUNDLGNBQUY7QUFDQUwsa0JBQU0sQ0FBQ00sSUFBUCxDQUFZLEdBQVo7QUFDRCxXQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBV0UscUVBQUMsMERBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxnRUFBRDtBQUFBLGtDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsdUJBQVcsRUFBQyxZQURkO0FBRUUsaUJBQUssRUFBRVYsS0FGVDtBQUdFLG9CQUFRLEVBQUUsa0JBQUNRLENBQUQsRUFBTztBQUNmUCxzQkFBUSxDQUFDTyxDQUFDLENBQUNHLE1BQUYsQ0FBU1gsS0FBVixDQUFSO0FBQ0QsYUFMSDtBQU1FLHFCQUFTLEVBQUUsbUJBQUNRLENBQUQsRUFBTztBQUNoQixrQkFBSUEsQ0FBQyxDQUFDSSxHQUFGLEtBQVUsUUFBZCxFQUF3QjtBQUN0QlYsd0JBQVEsQ0FBQ1csMERBQVcsQ0FBQyxFQUFELENBQVosQ0FBUjtBQUNBWix3QkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNEOztBQUNELGtCQUFJTyxDQUFDLENBQUNJLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCVix3QkFBUSxDQUFDVywwREFBVyxDQUFDYixLQUFELENBQVosQ0FBUjtBQUNEO0FBQ0Y7QUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBaUJFLHFFQUFDLDREQUFEO0FBQ0UsbUJBQU8sRUFBRSxtQkFBTTtBQUNiRSxzQkFBUSxDQUFDVywwREFBVyxDQUFDYixLQUFELENBQVosQ0FBUjtBQUNELGFBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQTBCRSxxRUFBQyxnRUFBRDtBQUFBLGlDQUNFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTJDRSxxRUFBQywrREFBRDtBQUFBLGdCQUNHYyxtREFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsWUFBRCxFQUFlQyxFQUFmO0FBQUEsNEJBQ2QscUVBQUMsWUFBRDtBQUVFLGdCQUFNLEVBQ0pWLFFBQVEsQ0FBQ1csUUFBVCxHQUFvQkMsV0FBcEIsT0FDQUgsWUFBWSxDQUFDSSxLQUFiLENBQW1CRCxXQUFuQixFQUpKO0FBTUUsY0FBSSxFQUFFSCxZQUFZLENBQUNLLEtBTnJCO0FBQUEsb0JBUUdMLFlBQVksQ0FBQ0k7QUFSaEIsV0FDT0gsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0REQsQ0FyRU07O0dBQU10QixXO1VBQ1NFLHVELEVBSUhNLHVELEVBQ0ZFLHFEOzs7TUFOSlYsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40Yjg5ODBjNDJhOGQzMTg2ZTg5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3N0b3JlXCI7XG5pbXBvcnQgeyBzZWFyY2hJdGVtcyB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xuaW1wb3J0IHsgVGhlbWVMaW5rIH0gZnJvbSBcIi4uL2NvbW1vbi9UaGVtZUxpbmtcIjtcbmltcG9ydCB7IERyb3Bkb3duQnV0dG9uIH0gZnJvbSBcIi4vRHJvcGRvd25CdXR0b25cIjtcbmltcG9ydCB7XG4gIENvbnRyb2xXcmFwcGVyLFxuICBGaW5kLFxuICBGaW5kQnV0dG9uLFxuICBGaW5kR29vZHMsXG4gIEhvbWVQYWdlTGluayxcbiAgU2lkZVRpdGxlLFxuICBDb250cm9scyxcbiAgQ2F0ZWdvcnlMaW5rcyxcbiAgSGVhZGVyLFxufSBmcm9tIFwiLi9zdHlsZWRDb21wb25lbnRzXCI7XG5pbXBvcnQgeyBjYXRlZ29yaWVzIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xuXG5jb25zdCBDYXRlZ29yeUxpbmsgPSBzdHlsZWQoVGhlbWVMaW5rKWBcbiAgbWFyZ2luOiAwIDEwcHggMTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hQYW5lbDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdXNlU2VsZWN0b3I8c3RvcmUsIHN0b3JlW1wic2VhcmNoUXVlcnlcIl0+KFxuICAgIChzdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnlcbiAgKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShzZWFyY2hRdWVyeSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgY2F0ZWdvcnkgPSBcIlwiIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZGVyPlxuICAgICAgPEZpbmQ+XG4gICAgICAgIDxTaWRlVGl0bGU+XG4gICAgICAgICAgPEhvbWVQYWdlTGlua1xuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFsbCBnb29kc1xuICAgICAgICAgIDwvSG9tZVBhZ2VMaW5rPlxuICAgICAgICA8L1NpZGVUaXRsZT5cbiAgICAgICAgPENvbnRyb2xzPlxuICAgICAgICAgIDxDb250cm9sV3JhcHBlcj5cbiAgICAgICAgICAgIDxGaW5kR29vZHNcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmaW5kIGdvb2RzXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNlYXJjaEl0ZW1zKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgIHNldFZhbHVlKFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2VhcmNoSXRlbXModmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9GaW5kR29vZHM+XG4gICAgICAgICAgICA8RmluZEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2VhcmNoSXRlbXModmFsdWUpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICA8L0ZpbmRCdXR0b24+XG4gICAgICAgICAgPC9Db250cm9sV3JhcHBlcj5cbiAgICAgICAgICA8Q29udHJvbFdyYXBwZXI+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gLz5cbiAgICAgICAgICA8L0NvbnRyb2xXcmFwcGVyPlxuICAgICAgICA8L0NvbnRyb2xzPlxuICAgICAgPC9GaW5kPlxuICAgICAgPENhdGVnb3J5TGlua3M+XG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoc2l0ZUNhdGVnb3J5LCBpZCkgPT4gKFxuICAgICAgICAgIDxDYXRlZ29yeUxpbmtcbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICBhY3RpdmU9e1xuICAgICAgICAgICAgICBjYXRlZ29yeS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIHNpdGVDYXRlZ29yeS50aXRsZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBocmVmPXtzaXRlQ2F0ZWdvcnkucm91dGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NpdGVDYXRlZ29yeS50aXRsZX1cbiAgICAgICAgICA8L0NhdGVnb3J5TGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L0NhdGVnb3J5TGlua3M+XG4gICAgPC9IZWFkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==