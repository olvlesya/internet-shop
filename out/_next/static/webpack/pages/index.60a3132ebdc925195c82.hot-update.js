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
  }, [sort, searchQuery, limit]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets_common__WEBPACK_IMPORTED_MODULE_4__["PageLayout"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets_SearchResults__WEBPACK_IMPORTED_MODULE_6__["SearchResult"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets_common_Spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        setLimit(limit + 8);
      },
      children: "Load more"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJpc0xvYWRpbmciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic29ydCIsInNlYXJjaFF1ZXJ5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwibGltaXQiLCJzZXRMaW1pdCIsInVzZUVmZmVjdCIsInN0YXJ0TG9hZGluZyIsIml0ZW1zSW5pdCIsImxpbWl0UXVlcnkiLCJ0cmltIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInN0b3BMb2FkaW5nIiwicmVnRXhwIiwiUmVnRXhwIiwiZmlsdGVyIiwiaXRlbSIsInRlc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsU0FBUyxHQUFHQywrREFBVyxDQUMzQixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixTQUFqQjtBQUFBLEdBRDJCLENBQTdCO0FBR0EsTUFBTUcsSUFBSSxHQUFHRiwrREFBVyxDQUF1QixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQXZCLENBQXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSCwrREFBVyxDQUM3QixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRSxXQUFqQjtBQUFBLEdBRDZCLENBQS9CO0FBR0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFSNkIsa0JBU0hDLHNEQUFRLENBQUMsQ0FBRCxDQVRMO0FBQUEsTUFTdEJDLEtBVHNCO0FBQUEsTUFTZkMsUUFUZTs7QUFXN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkTCxZQUFRLENBQUNNLDJEQUFZLEVBQWIsQ0FBUjtBQUNBTixZQUFRLENBQUNPLHdEQUFTLENBQUMsRUFBRCxDQUFWLENBQVI7QUFFQSxRQUFNQyxVQUFVLEdBQUdULFdBQVcsQ0FBQ1UsSUFBWixPQUF1QixFQUF2QixtQkFBcUNOLEtBQXJDLElBQStDLEVBQWxFO0FBRUFPLFNBQUssNkNBQXNDRixVQUF0QyxtQkFBeURWLElBQXpELEVBQUwsQ0FDR2EsSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNFLElBQUQsRUFBVTtBQUNkYixjQUFRLENBQUNjLDBEQUFXLEVBQVosQ0FBUjs7QUFFQSxVQUFJZixXQUFXLENBQUNVLElBQVosT0FBdUIsRUFBM0IsRUFBK0I7QUFDN0IsWUFBTU0sTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBV2pCLFdBQVgsRUFBd0IsR0FBeEIsQ0FBZjtBQUNBQyxnQkFBUSxDQUNOTyx3REFBUyxFQUNQO0FBQ0FNLFlBQUksQ0FBQ0ksTUFBTCxDQUNFLFVBQUNDLElBQUQ7QUFBQSxpQkFDRUgsTUFBTSxDQUFDSSxJQUFQLENBQVlELElBQUksQ0FBQ0UsS0FBakIsS0FBMkJMLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZRCxJQUFJLENBQUNHLFdBQWpCLENBRDdCO0FBQUEsU0FERixDQUZPLENBREgsQ0FBUjtBQVNELE9BWEQsTUFXTztBQUNMckIsZ0JBQVEsQ0FBQ08sd0RBQVMsQ0FBQ00sSUFBRCxDQUFWLENBQVI7QUFDRDtBQUNGLEtBbkJIO0FBb0JELEdBMUJRLEVBMEJOLENBQUNmLElBQUQsRUFBT0MsV0FBUCxFQUFvQkksS0FBcEIsQ0ExQk0sQ0FBVDtBQTRCQSxzQkFDRSxxRUFBQyw0REFBRDtBQUFBLDRCQUNFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHUixTQUFTLGlCQUFJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGaEIsZUFHRTtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiUyxnQkFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0QsT0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBcER1QlQsSTtVQUNKRSx1RCxFQUdMQSx1RCxFQUNPQSx1RCxFQUdISyx1RDs7O0tBUktQLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjBhMzEzMmViZGM5MjUxOTVjODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwiLi4vY29tcG9uZXRzL2NvbW1vbi9TcGlubmVyXCI7XG5pbXBvcnQgeyBQYWdlTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmV0cy9jb21tb25cIjtcbmltcG9ydCB7IGl0ZW0gfSBmcm9tIFwiLi4vdHlwZXMvaXRlbVwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vdHlwZXMvc3RvcmVcIjtcbmltcG9ydCB7IGl0ZW1zSW5pdCwgc3RhcnRMb2FkaW5nLCBzdG9wTG9hZGluZyB9IGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSBcIi4uL2NvbXBvbmV0cy9TZWFyY2hSZXN1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yPHN0b3JlLCBzdG9yZVtcImlzTG9hZGluZ1wiXT4oXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5pc0xvYWRpbmdcbiAgKTtcbiAgY29uc3Qgc29ydCA9IHVzZVNlbGVjdG9yPHN0b3JlLCBzdG9yZVtcInNvcnRcIl0+KChzdGF0ZSkgPT4gc3RhdGUuc29ydCk7XG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdXNlU2VsZWN0b3I8c3RvcmUsIHN0b3JlW1wic2VhcmNoUXVlcnlcIl0+KFxuICAgIChzdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnlcbiAgKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKDgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc3RhcnRMb2FkaW5nKCkpO1xuICAgIGRpc3BhdGNoKGl0ZW1zSW5pdChbXSkpO1xuXG4gICAgY29uc3QgbGltaXRRdWVyeSA9IHNlYXJjaFF1ZXJ5LnRyaW0oKSA9PT0gXCJcIiA/IGBsaW1pdD0ke2xpbWl0fWAgOiBcIlwiO1xuXG4gICAgZmV0Y2goYGh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cz8ke2xpbWl0UXVlcnl9JnNvcnQ9JHtzb3J0fWApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpIGFzIFByb21pc2U8aXRlbVtdPilcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHN0b3BMb2FkaW5nKCkpO1xuXG4gICAgICAgIGlmIChzZWFyY2hRdWVyeS50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKHNlYXJjaFF1ZXJ5LCBcImlcIik7XG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBpdGVtc0luaXQoXG4gICAgICAgICAgICAgIC8vIEZJWE1FOiBmYWtlc3RvcmVhcGkgZG9lc24ndCBzdXBwb3J0IGZpbHRlcmluZ1xuICAgICAgICAgICAgICBqc29uLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgIHJlZ0V4cC50ZXN0KGl0ZW0udGl0bGUpIHx8IHJlZ0V4cC50ZXN0KGl0ZW0uZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSW5pdChqc29uKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbc29ydCwgc2VhcmNoUXVlcnksIGxpbWl0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUxheW91dD5cbiAgICAgIDxTZWFyY2hSZXN1bHQgLz5cbiAgICAgIHtpc0xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRMaW1pdChsaW1pdCArIDgpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBMb2FkIG1vcmVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvUGFnZUxheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=