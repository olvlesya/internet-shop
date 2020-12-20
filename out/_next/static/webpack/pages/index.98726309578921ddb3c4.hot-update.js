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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _componets_common_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componets/common/Spinner */ "./componets/common/Spinner.tsx");
/* harmony import */ var _componets_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componets/common */ "./componets/common/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _componets_SearchResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componets/SearchResults */ "./componets/SearchResults/index.ts");


var _jsxFileName = "D:\\Work\\internet-shop\\pages\\index.tsx",
    _s = $RefreshSig$();







function Home() {
  _s();

  var isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.isLoading;
  });
  var sort = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.sort;
  });
  var searchQuery = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.searchQuery;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(8),
      limit = _useState[0],
      setLimit = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_5__["startLoading"])());
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_5__["itemsInit"])([]));
    var limitQuery = searchQuery.trim() === "" ? "limit=".concat(limit) : "";
    fetch("https://fakestoreapi.com/products?".concat(limitQuery, "&sort=").concat(sort)).then(function (res) {
      return res.json();
    }).then(function (json) {
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_5__["stopLoading"])());

      if (searchQuery.trim() !== "") {
        var regExp = new RegExp(searchQuery, "i");
        dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_5__["itemsInit"])( // FIXME: fakestoreapi doesn't support filtering
        json.filter(function (item) {
          return regExp.test(item.title) || regExp.test(item.description);
        })));
      } else {
        dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_5__["itemsInit"])(json));
      }
    });
  }, [sort, searchQuery]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets_common__WEBPACK_IMPORTED_MODULE_4__["PageLayout"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets_SearchResults__WEBPACK_IMPORTED_MODULE_6__["SearchResult"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets_common_Spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

_s(Home, "mABYyjqo72DlIuAnjU3OfwyJl0w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJpc0xvYWRpbmciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic29ydCIsInNlYXJjaFF1ZXJ5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwibGltaXQiLCJzZXRMaW1pdCIsInVzZUVmZmVjdCIsInN0YXJ0TG9hZGluZyIsIml0ZW1zSW5pdCIsImxpbWl0UXVlcnkiLCJ0cmltIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInN0b3BMb2FkaW5nIiwicmVnRXhwIiwiUmVnRXhwIiwiZmlsdGVyIiwiaXRlbSIsInRlc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsU0FBUyxHQUFHQywrREFBVyxDQUMzQixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixTQUFqQjtBQUFBLEdBRDJCLENBQTdCO0FBR0EsTUFBTUcsSUFBSSxHQUFHRiwrREFBVyxDQUF1QixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQXZCLENBQXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSCwrREFBVyxDQUM3QixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRSxXQUFqQjtBQUFBLEdBRDZCLENBQS9CO0FBR0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFSNkIsa0JBU0hDLHNEQUFRLENBQUMsQ0FBRCxDQVRMO0FBQUEsTUFTdEJDLEtBVHNCO0FBQUEsTUFTZkMsUUFUZTs7QUFXN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkTCxZQUFRLENBQUNNLDJEQUFZLEVBQWIsQ0FBUjtBQUNBTixZQUFRLENBQUNPLHdEQUFTLENBQUMsRUFBRCxDQUFWLENBQVI7QUFFQSxRQUFNQyxVQUFVLEdBQUdULFdBQVcsQ0FBQ1UsSUFBWixPQUF1QixFQUF2QixtQkFBcUNOLEtBQXJDLElBQStDLEVBQWxFO0FBRUFPLFNBQUssNkNBQXNDRixVQUF0QyxtQkFBeURWLElBQXpELEVBQUwsQ0FDR2EsSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNFLElBQUQsRUFBVTtBQUNkYixjQUFRLENBQUNjLDBEQUFXLEVBQVosQ0FBUjs7QUFFQSxVQUFJZixXQUFXLENBQUNVLElBQVosT0FBdUIsRUFBM0IsRUFBK0I7QUFDN0IsWUFBTU0sTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBV2pCLFdBQVgsRUFBd0IsR0FBeEIsQ0FBZjtBQUNBQyxnQkFBUSxDQUNOTyx3REFBUyxFQUNQO0FBQ0FNLFlBQUksQ0FBQ0ksTUFBTCxDQUNFLFVBQUNDLElBQUQ7QUFBQSxpQkFDRUgsTUFBTSxDQUFDSSxJQUFQLENBQVlELElBQUksQ0FBQ0UsS0FBakIsS0FBMkJMLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZRCxJQUFJLENBQUNHLFdBQWpCLENBRDdCO0FBQUEsU0FERixDQUZPLENBREgsQ0FBUjtBQVNELE9BWEQsTUFXTztBQUNMckIsZ0JBQVEsQ0FBQ08sd0RBQVMsQ0FBQ00sSUFBRCxDQUFWLENBQVI7QUFDRDtBQUNGLEtBbkJIO0FBb0JELEdBMUJRLEVBMEJOLENBQUNmLElBQUQsRUFBT0MsV0FBUCxDQTFCTSxDQUFUO0FBNEJBLHNCQUNFLHFFQUFDLDREQUFEO0FBQUEsNEJBQ0UscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdKLFNBQVMsaUJBQUkscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztHQTdDdUJELEk7VUFDSkUsdUQsRUFHTEEsdUQsRUFDT0EsdUQsRUFHSEssdUQ7OztLQVJLUCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4NzI2MzA5NTc4OTIxZGRiM2M0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcIi4uL2NvbXBvbmV0cy9jb21tb24vU3Bpbm5lclwiO1xuaW1wb3J0IHsgUGFnZUxheW91dCB9IGZyb20gXCIuLi9jb21wb25ldHMvY29tbW9uXCI7XG5pbXBvcnQgeyBpdGVtIH0gZnJvbSBcIi4uL3R5cGVzL2l0ZW1cIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3R5cGVzL3N0b3JlXCI7XG5pbXBvcnQgeyBpdGVtc0luaXQsIHN0YXJ0TG9hZGluZywgc3RvcExvYWRpbmcgfSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gXCIuLi9jb21wb25ldHMvU2VhcmNoUmVzdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcjxzdG9yZSwgc3RvcmVbXCJpc0xvYWRpbmdcIl0+KFxuICAgIChzdGF0ZSkgPT4gc3RhdGUuaXNMb2FkaW5nXG4gICk7XG4gIGNvbnN0IHNvcnQgPSB1c2VTZWxlY3RvcjxzdG9yZSwgc3RvcmVbXCJzb3J0XCJdPigoc3RhdGUpID0+IHN0YXRlLnNvcnQpO1xuICBjb25zdCBzZWFyY2hRdWVyeSA9IHVzZVNlbGVjdG9yPHN0b3JlLCBzdG9yZVtcInNlYXJjaFF1ZXJ5XCJdPihcbiAgICAoc3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5XG4gICk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZSg4KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHN0YXJ0TG9hZGluZygpKTtcbiAgICBkaXNwYXRjaChpdGVtc0luaXQoW10pKTtcblxuICAgIGNvbnN0IGxpbWl0UXVlcnkgPSBzZWFyY2hRdWVyeS50cmltKCkgPT09IFwiXCIgPyBgbGltaXQ9JHtsaW1pdH1gIDogXCJcIjtcblxuICAgIGZldGNoKGBodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHM/JHtsaW1pdFF1ZXJ5fSZzb3J0PSR7c29ydH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSBhcyBQcm9taXNlPGl0ZW1bXT4pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICBkaXNwYXRjaChzdG9wTG9hZGluZygpKTtcblxuICAgICAgICBpZiAoc2VhcmNoUXVlcnkudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICAgICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChzZWFyY2hRdWVyeSwgXCJpXCIpO1xuICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgaXRlbXNJbml0KFxuICAgICAgICAgICAgICAvLyBGSVhNRTogZmFrZXN0b3JlYXBpIGRvZXNuJ3Qgc3VwcG9ydCBmaWx0ZXJpbmdcbiAgICAgICAgICAgICAganNvbi5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICByZWdFeHAudGVzdChpdGVtLnRpdGxlKSB8fCByZWdFeHAudGVzdChpdGVtLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChpdGVtc0luaXQoanNvbikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSwgW3NvcnQsIHNlYXJjaFF1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUxheW91dD5cbiAgICAgIDxTZWFyY2hSZXN1bHQgLz5cbiAgICAgIHtpc0xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XG4gICAgPC9QYWdlTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==