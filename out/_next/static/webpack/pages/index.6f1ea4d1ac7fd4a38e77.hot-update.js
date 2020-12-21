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

  var navigateToSearch = function navigateToSearch() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var categoryLink = category ? "category/".concat(category, "/") : "";
    router.push("/".concat(categoryLink, "?query=").concat(query));
  };

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
          lineNumber: 44,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
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
                navigateToSearch("");
              }

              if (e.key === "Enter") {
                dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["searchItems"])(value));
                navigateToSearch(value);
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["FindButton"], {
            onClick: function onClick() {
              dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["searchItems"])(value));
            },
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["ControlWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_DropdownButton__WEBPACK_IMPORTED_MODULE_8__["DropdownButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["CategoryLinks"], {
      children: _routes__WEBPACK_IMPORTED_MODULE_10__["categories"].map(function (siteCategory, id) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CategoryLink, {
          active: category.toString().toLowerCase() === siteCategory.title.toLowerCase(),
          href: siteCategory.route,
          children: siteCategory.title
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL1NlYXJjaFBhbmVsL1NlYXJjaFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDYXRlZ29yeUxpbmsiLCJzdHlsZWQiLCJUaGVtZUxpbmsiLCJTZWFyY2hQYW5lbCIsInNlYXJjaFF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImNhdGVnb3J5IiwibmF2aWdhdGVUb1NlYXJjaCIsImNhdGVnb3J5TGluayIsInB1c2giLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJrZXkiLCJzZWFyY2hJdGVtcyIsImNhdGVnb3JpZXMiLCJtYXAiLCJzaXRlQ2F0ZWdvcnkiLCJpZCIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ0aXRsZSIsInJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxpRUFBTSxDQUFDQywyREFBRCxDQUFULG1CQUFsQjtLQUFNRixZO0FBSUMsSUFBTUcsV0FBb0MsR0FBRyxTQUF2Q0EsV0FBdUMsR0FBTTtBQUFBOztBQUN4RCxNQUFNQyxXQUFXLEdBQUdDLCtEQUFXLENBQzdCLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFdBQWpCO0FBQUEsR0FENkIsQ0FBL0I7O0FBRHdELGtCQUk5Qkcsc0RBQVEsQ0FBQ0gsV0FBRCxDQUpzQjtBQUFBLE1BSWpESSxLQUppRDtBQUFBLE1BSTFDQyxRQUowQzs7QUFLeEQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFOd0QsOEJBTzlCRCxN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ZGV4LjZmMWVhNGQxYWM3ZmQ0YTM4ZTc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc3RvcmVcIjtcbmltcG9ydCB7IHNlYXJjaEl0ZW1zIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XG5pbXBvcnQgeyBUaGVtZUxpbmsgfSBmcm9tIFwiLi4vY29tbW9uL1RoZW1lTGlua1wiO1xuaW1wb3J0IHsgRHJvcGRvd25CdXR0b24gfSBmcm9tIFwiLi9Ecm9wZG93bkJ1dHRvblwiO1xuaW1wb3J0IHtcbiAgQ29udHJvbFdyYXBwZXIsXG4gIEZpbmQsXG4gIEZpbmRCdXR0b24sXG4gIEZpbmRHb29kcyxcbiAgSG9tZVBhZ2VMaW5rLFxuICBTaWRlVGl0bGUsXG4gIENvbnRyb2xzLFxuICBDYXRlZ29yeUxpbmtzLFxuICBIZWFkZXIsXG59IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcbmltcG9ydCB7IGNhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XG5cbmNvbnN0IENhdGVnb3J5TGluayA9IHN0eWxlZChUaGVtZUxpbmspYFxuICBtYXJnaW46IDAgMTBweCAxMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaFBhbmVsOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSB1c2VTZWxlY3RvcjxzdG9yZSwgc3RvcmVbXCJzZWFyY2hRdWVyeVwiXT4oXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeVxuICApO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHNlYXJjaFF1ZXJ5KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBjYXRlZ29yeSA9IFwiXCIgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBuYXZpZ2F0ZVRvU2VhcmNoID0gKHF1ZXJ5ID0gXCJcIikgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5TGluayA9IGNhdGVnb3J5ID8gYGNhdGVnb3J5LyR7Y2F0ZWdvcnl9L2AgOiBcIlwiO1xuICAgIHJvdXRlci5wdXNoKGAvJHtjYXRlZ29yeUxpbmt9P3F1ZXJ5PSR7cXVlcnl9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZGVyPlxuICAgICAgPEZpbmQ+XG4gICAgICAgIDxTaWRlVGl0bGU+XG4gICAgICAgICAgPEhvbWVQYWdlTGlua1xuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFsbCBnb29kc1xuICAgICAgICAgIDwvSG9tZVBhZ2VMaW5rPlxuICAgICAgICA8L1NpZGVUaXRsZT5cbiAgICAgICAgPENvbnRyb2xzPlxuICAgICAgICAgIDxDb250cm9sV3JhcHBlcj5cbiAgICAgICAgICAgIDxGaW5kR29vZHNcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmaW5kIGdvb2RzXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNlYXJjaEl0ZW1zKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgIHNldFZhbHVlKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1NlYXJjaChcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNlYXJjaEl0ZW1zKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvU2VhcmNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9GaW5kR29vZHM+XG4gICAgICAgICAgICA8RmluZEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2VhcmNoSXRlbXModmFsdWUpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICA8L0ZpbmRCdXR0b24+XG4gICAgICAgICAgPC9Db250cm9sV3JhcHBlcj5cbiAgICAgICAgICA8Q29udHJvbFdyYXBwZXI+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gLz5cbiAgICAgICAgICA8L0NvbnRyb2xXcmFwcGVyPlxuICAgICAgICA8L0NvbnRyb2xzPlxuICAgICAgPC9GaW5kPlxuICAgICAgPENhdGVnb3J5TGlua3M+XG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoc2l0ZUNhdGVnb3J5LCBpZCkgPT4gKFxuICAgICAgICAgIDxDYXRlZ29yeUxpbmtcbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICBhY3RpdmU9e1xuICAgICAgICAgICAgICBjYXRlZ29yeS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIHNpdGVDYXRlZ29yeS50aXRsZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBocmVmPXtzaXRlQ2F0ZWdvcnkucm91dGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NpdGVDYXRlZ29yeS50aXRsZX1cbiAgICAgICAgICA8L0NhdGVnb3J5TGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L0NhdGVnb3J5TGlua3M+XG4gICAgPC9IZWFkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==