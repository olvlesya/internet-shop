webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _componets_common_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componets/common/Spinner */ "./componets/common/Spinner.tsx");
/* harmony import */ var _componets_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componets/common */ "./componets/common/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _componets_SearchResults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componets/SearchResults */ "./componets/SearchResults/index.ts");



var _jsxFileName = "D:\\Work\\internet-shop\\pages\\index.tsx",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  height: 80px;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 8px;\n  font-size: 1.5rem;\n  background: transparent;\n  border: 1px solid #c2c0cf;\n  cursor: pointer;\n  color: #979797;\n  :hover,\n  :focus {\n    color: #0a0d0f;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var LoadMoreButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject());
_c = LoadMoreButton;
var LoadMoreButtonSection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject2());
_c2 = LoadMoreButtonSection;
function Home() {
  _s();

  var isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.isLoading;
  });
  var sort = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.sort;
  });
  var searchQuery = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.searchQuery;
  });
  var items = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.items;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(8),
      limit = _useState[0],
      setLimit = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_7__["startLoading"])());
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_7__["itemsInit"])([]));
    var limitQuery = searchQuery.trim() === "" ? "limit=".concat(limit) : "";
    fetch("https://fakestoreapi.com/products?".concat(limitQuery, "&sort=").concat(sort)).then(function (res) {
      return res.json();
    }).then(function (json) {
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_7__["stopLoading"])());

      if (searchQuery.trim() !== "") {
        var regExp = new RegExp(searchQuery, "i");
        dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_7__["itemsInit"])( // FIXME: fakestoreapi doesn't support filtering
        json.filter(function (item) {
          return regExp.test(item.title) || regExp.test(item.description);
        })));
      } else {
        dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_7__["itemsInit"])(json));
      }
    });
  }, [sort, searchQuery, limit]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_componets_common__WEBPACK_IMPORTED_MODULE_6__["PageLayout"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_componets_SearchResults__WEBPACK_IMPORTED_MODULE_8__["SearchResult"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_componets_common_Spinner__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }, this), items.length < limit ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LoadMoreButtonSection, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LoadMoreButton, {
        onClick: function onClick() {
          setLimit(limit + 8);
        },
        children: "Load more"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

_s(Home, "KUvgNgGrneYg7p8nmfY/WlFC31w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "LoadMoreButton");
$RefreshReg$(_c2, "LoadMoreButtonSection");
$RefreshReg$(_c3, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvYWRNb3JlQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwiTG9hZE1vcmVCdXR0b25TZWN0aW9uIiwic2VjdGlvbiIsIkhvbWUiLCJpc0xvYWRpbmciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic29ydCIsInNlYXJjaFF1ZXJ5IiwiaXRlbXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJsaW1pdCIsInNldExpbWl0IiwidXNlRWZmZWN0Iiwic3RhcnRMb2FkaW5nIiwiaXRlbXNJbml0IiwibGltaXRRdWVyeSIsInRyaW0iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic3RvcExvYWRpbmciLCJyZWdFeHAiLCJSZWdFeHAiLCJmaWx0ZXIiLCJpdGVtIiwidGVzdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVixtQkFBcEI7S0FBTUYsYztBQVlOLElBQU1HLHFCQUFxQixHQUFHRix5REFBTSxDQUFDRyxPQUFWLG9CQUEzQjtNQUFNRCxxQjtBQU9TLFNBQVNFLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsU0FBUyxHQUFHQywrREFBVyxDQUMzQixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixTQUFqQjtBQUFBLEdBRDJCLENBQTdCO0FBR0EsTUFBTUcsSUFBSSxHQUFHRiwrREFBVyxDQUF1QixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQXZCLENBQXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSCwrREFBVyxDQUM3QixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRSxXQUFqQjtBQUFBLEdBRDZCLENBQS9CO0FBR0EsTUFBTUMsS0FBSyxHQUFHSiwrREFBVyxDQUF3QixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxLQUFqQjtBQUFBLEdBQXhCLENBQXpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFUNkIsa0JBVUhDLHNEQUFRLENBQUMsQ0FBRCxDQVZMO0FBQUEsTUFVdEJDLEtBVnNCO0FBQUEsTUFVZkMsUUFWZTs7QUFZN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkTCxZQUFRLENBQUNNLDJEQUFZLEVBQWIsQ0FBUjtBQUNBTixZQUFRLENBQUNPLHdEQUFTLENBQUMsRUFBRCxDQUFWLENBQVI7QUFFQSxRQUFNQyxVQUFVLEdBQUdWLFdBQVcsQ0FBQ1csSUFBWixPQUF1QixFQUF2QixtQkFBcUNOLEtBQXJDLElBQStDLEVBQWxFO0FBRUFPLFNBQUssNkNBQXNDRixVQUF0QyxtQkFBeURYLElBQXpELEVBQUwsQ0FDR2MsSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNFLElBQUQsRUFBVTtBQUNkYixjQUFRLENBQUNjLDBEQUFXLEVBQVosQ0FBUjs7QUFFQSxVQUFJaEIsV0FBVyxDQUFDVyxJQUFaLE9BQXVCLEVBQTNCLEVBQStCO0FBQzdCLFlBQU1NLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVdsQixXQUFYLEVBQXdCLEdBQXhCLENBQWY7QUFDQUUsZ0JBQVEsQ0FDTk8sd0RBQVMsRUFDUDtBQUNBTSxZQUFJLENBQUNJLE1BQUwsQ0FDRSxVQUFDQyxJQUFEO0FBQUEsaUJBQ0VILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZRCxJQUFJLENBQUNFLEtBQWpCLEtBQTJCTCxNQUFNLENBQUNJLElBQVAsQ0FBWUQsSUFBSSxDQUFDRyxXQUFqQixDQUQ3QjtBQUFBLFNBREYsQ0FGTyxDQURILENBQVI7QUFTRCxPQVhELE1BV087QUFDTHJCLGdCQUFRLENBQUNPLHdEQUFTLENBQUNNLElBQUQsQ0FBVixDQUFSO0FBQ0Q7QUFDRixLQW5CSDtBQW9CRCxHQTFCUSxFQTBCTixDQUFDaEIsSUFBRCxFQUFPQyxXQUFQLEVBQW9CSyxLQUFwQixDQTFCTSxDQUFUO0FBNEJBLHNCQUNFLHFFQUFDLDREQUFEO0FBQUEsNEJBQ0UscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdULFNBQVMsaUJBQUkscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZoQixFQUdHSyxLQUFLLENBQUN1QixNQUFOLEdBQWVuQixLQUFmLEdBQXVCLElBQXZCLGdCQUNDLHFFQUFDLHFCQUFEO0FBQUEsNkJBQ0UscUVBQUMsY0FBRDtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNiQyxrQkFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7R0F6RHVCVixJO1VBQ0pFLHVELEVBR0xBLHVELEVBQ09BLHVELEVBR05BLHVELEVBQ0dNLHVEOzs7TUFUS1IsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNTA1ZWNhY2JkNjc3NGQ5M2I4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwiLi4vY29tcG9uZXRzL2NvbW1vbi9TcGlubmVyXCI7XG5pbXBvcnQgeyBQYWdlTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmV0cy9jb21tb25cIjtcbmltcG9ydCB7IGl0ZW0gfSBmcm9tIFwiLi4vdHlwZXMvaXRlbVwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vdHlwZXMvc3RvcmVcIjtcbmltcG9ydCB7IGl0ZW1zSW5pdCwgc3RhcnRMb2FkaW5nLCBzdG9wTG9hZGluZyB9IGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSBcIi4uL2NvbXBvbmV0cy9TZWFyY2hSZXN1bHRzXCI7XG5cbmNvbnN0IExvYWRNb3JlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMmMwY2Y7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM5Nzk3OTc7XG4gIDpob3ZlcixcbiAgOmZvY3VzIHtcbiAgICBjb2xvcjogIzBhMGQwZjtcbiAgfVxuYDtcbmNvbnN0IExvYWRNb3JlQnV0dG9uU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3I8c3RvcmUsIHN0b3JlW1wiaXNMb2FkaW5nXCJdPihcbiAgICAoc3RhdGUpID0+IHN0YXRlLmlzTG9hZGluZ1xuICApO1xuICBjb25zdCBzb3J0ID0gdXNlU2VsZWN0b3I8c3RvcmUsIHN0b3JlW1wic29ydFwiXT4oKHN0YXRlKSA9PiBzdGF0ZS5zb3J0KTtcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSB1c2VTZWxlY3RvcjxzdG9yZSwgc3RvcmVbXCJzZWFyY2hRdWVyeVwiXT4oXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeVxuICApO1xuICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yPHN0b3JlLCBzdG9yZVtcIml0ZW1zXCJdPigoc3RhdGUpID0+IHN0YXRlLml0ZW1zKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKDgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc3RhcnRMb2FkaW5nKCkpO1xuICAgIGRpc3BhdGNoKGl0ZW1zSW5pdChbXSkpO1xuXG4gICAgY29uc3QgbGltaXRRdWVyeSA9IHNlYXJjaFF1ZXJ5LnRyaW0oKSA9PT0gXCJcIiA/IGBsaW1pdD0ke2xpbWl0fWAgOiBcIlwiO1xuXG4gICAgZmV0Y2goYGh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cz8ke2xpbWl0UXVlcnl9JnNvcnQ9JHtzb3J0fWApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpIGFzIFByb21pc2U8aXRlbVtdPilcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHN0b3BMb2FkaW5nKCkpO1xuXG4gICAgICAgIGlmIChzZWFyY2hRdWVyeS50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKHNlYXJjaFF1ZXJ5LCBcImlcIik7XG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBpdGVtc0luaXQoXG4gICAgICAgICAgICAgIC8vIEZJWE1FOiBmYWtlc3RvcmVhcGkgZG9lc24ndCBzdXBwb3J0IGZpbHRlcmluZ1xuICAgICAgICAgICAgICBqc29uLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgIHJlZ0V4cC50ZXN0KGl0ZW0udGl0bGUpIHx8IHJlZ0V4cC50ZXN0KGl0ZW0uZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSW5pdChqc29uKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbc29ydCwgc2VhcmNoUXVlcnksIGxpbWl0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUxheW91dD5cbiAgICAgIDxTZWFyY2hSZXN1bHQgLz5cbiAgICAgIHtpc0xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XG4gICAgICB7aXRlbXMubGVuZ3RoIDwgbGltaXQgPyBudWxsIDogKFxuICAgICAgICA8TG9hZE1vcmVCdXR0b25TZWN0aW9uPlxuICAgICAgICAgIDxMb2FkTW9yZUJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRMaW1pdChsaW1pdCArIDgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2FkIG1vcmVcbiAgICAgICAgICA8L0xvYWRNb3JlQnV0dG9uPlxuICAgICAgICA8L0xvYWRNb3JlQnV0dG9uU2VjdGlvbj5cbiAgICAgICl9XG4gICAgPC9QYWdlTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==