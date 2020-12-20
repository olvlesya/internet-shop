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

function _templateObject() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 10px;\n  font-size: 1.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var LoadMoreButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject());
_c = LoadMoreButton;
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
      lineNumber: 58,
      columnNumber: 7
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_componets_common_Spinner__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }, this), items.length < limit ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
      style: {
        textAlign: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LoadMoreButton, {
        onClick: function onClick() {
          setLimit(limit + 8);
        },
        children: "Load more"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

_s(Home, "KUvgNgGrneYg7p8nmfY/WlFC31w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c2 = Home;

var _c, _c2;

$RefreshReg$(_c, "LoadMoreButton");
$RefreshReg$(_c2, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvYWRNb3JlQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwiSG9tZSIsImlzTG9hZGluZyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzb3J0Iiwic2VhcmNoUXVlcnkiLCJpdGVtcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImxpbWl0Iiwic2V0TGltaXQiLCJ1c2VFZmZlY3QiLCJzdGFydExvYWRpbmciLCJpdGVtc0luaXQiLCJsaW1pdFF1ZXJ5IiwidHJpbSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzdG9wTG9hZGluZyIsInJlZ0V4cCIsIlJlZ0V4cCIsImZpbHRlciIsIml0ZW0iLCJ0ZXN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLE1BQVYsbUJBQXBCO0tBQU1GLGM7QUFLUyxTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLFNBQVMsR0FBR0MsK0RBQVcsQ0FDM0IsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsU0FBakI7QUFBQSxHQUQyQixDQUE3QjtBQUdBLE1BQU1HLElBQUksR0FBR0YsK0RBQVcsQ0FBdUIsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUF2QixDQUF4QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0gsK0RBQVcsQ0FDN0IsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0UsV0FBakI7QUFBQSxHQUQ2QixDQUEvQjtBQUdBLE1BQU1DLEtBQUssR0FBR0osK0RBQVcsQ0FBd0IsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csS0FBakI7QUFBQSxHQUF4QixDQUF6QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBVDZCLGtCQVVIQyxzREFBUSxDQUFDLENBQUQsQ0FWTDtBQUFBLE1BVXRCQyxLQVZzQjtBQUFBLE1BVWZDLFFBVmU7O0FBWTdCQyx5REFBUyxDQUFDLFlBQU07QUFDZEwsWUFBUSxDQUFDTSwyREFBWSxFQUFiLENBQVI7QUFDQU4sWUFBUSxDQUFDTyx3REFBUyxDQUFDLEVBQUQsQ0FBVixDQUFSO0FBRUEsUUFBTUMsVUFBVSxHQUFHVixXQUFXLENBQUNXLElBQVosT0FBdUIsRUFBdkIsbUJBQXFDTixLQUFyQyxJQUErQyxFQUFsRTtBQUVBTyxTQUFLLDZDQUFzQ0YsVUFBdEMsbUJBQXlEWCxJQUF6RCxFQUFMLENBQ0djLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRSxJQUFELEVBQVU7QUFDZGIsY0FBUSxDQUFDYywwREFBVyxFQUFaLENBQVI7O0FBRUEsVUFBSWhCLFdBQVcsQ0FBQ1csSUFBWixPQUF1QixFQUEzQixFQUErQjtBQUM3QixZQUFNTSxNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXbEIsV0FBWCxFQUF3QixHQUF4QixDQUFmO0FBQ0FFLGdCQUFRLENBQ05PLHdEQUFTLEVBQ1A7QUFDQU0sWUFBSSxDQUFDSSxNQUFMLENBQ0UsVUFBQ0MsSUFBRDtBQUFBLGlCQUNFSCxNQUFNLENBQUNJLElBQVAsQ0FBWUQsSUFBSSxDQUFDRSxLQUFqQixLQUEyQkwsTUFBTSxDQUFDSSxJQUFQLENBQVlELElBQUksQ0FBQ0csV0FBakIsQ0FEN0I7QUFBQSxTQURGLENBRk8sQ0FESCxDQUFSO0FBU0QsT0FYRCxNQVdPO0FBQ0xyQixnQkFBUSxDQUFDTyx3REFBUyxDQUFDTSxJQUFELENBQVYsQ0FBUjtBQUNEO0FBQ0YsS0FuQkg7QUFvQkQsR0ExQlEsRUEwQk4sQ0FBQ2hCLElBQUQsRUFBT0MsV0FBUCxFQUFvQkssS0FBcEIsQ0ExQk0sQ0FBVDtBQTRCQSxzQkFDRSxxRUFBQyw0REFBRDtBQUFBLDRCQUNFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHVCxTQUFTLGlCQUFJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGaEIsRUFHR0ssS0FBSyxDQUFDdUIsTUFBTixHQUFlbkIsS0FBZixHQUF1QixJQUF2QixnQkFDQztBQUFTLFdBQUssRUFBRTtBQUFFb0IsaUJBQVMsRUFBRTtBQUFiLE9BQWhCO0FBQUEsNkJBQ0UscUVBQUMsY0FBRDtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNibkIsa0JBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNELFNBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBekR1QlYsSTtVQUNKRSx1RCxFQUdMQSx1RCxFQUNPQSx1RCxFQUdOQSx1RCxFQUNHTSx1RDs7O01BVEtSLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjc5Nzk5ZmY2NWEzNGI5NWUwYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcIi4uL2NvbXBvbmV0cy9jb21tb24vU3Bpbm5lclwiO1xuaW1wb3J0IHsgUGFnZUxheW91dCB9IGZyb20gXCIuLi9jb21wb25ldHMvY29tbW9uXCI7XG5pbXBvcnQgeyBpdGVtIH0gZnJvbSBcIi4uL3R5cGVzL2l0ZW1cIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3R5cGVzL3N0b3JlXCI7XG5pbXBvcnQgeyBpdGVtc0luaXQsIHN0YXJ0TG9hZGluZywgc3RvcExvYWRpbmcgfSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gXCIuLi9jb21wb25ldHMvU2VhcmNoUmVzdWx0c1wiO1xuXG5jb25zdCBMb2FkTW9yZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3I8c3RvcmUsIHN0b3JlW1wiaXNMb2FkaW5nXCJdPihcbiAgICAoc3RhdGUpID0+IHN0YXRlLmlzTG9hZGluZ1xuICApO1xuICBjb25zdCBzb3J0ID0gdXNlU2VsZWN0b3I8c3RvcmUsIHN0b3JlW1wic29ydFwiXT4oKHN0YXRlKSA9PiBzdGF0ZS5zb3J0KTtcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSB1c2VTZWxlY3RvcjxzdG9yZSwgc3RvcmVbXCJzZWFyY2hRdWVyeVwiXT4oXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeVxuICApO1xuICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yPHN0b3JlLCBzdG9yZVtcIml0ZW1zXCJdPigoc3RhdGUpID0+IHN0YXRlLml0ZW1zKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKDgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc3RhcnRMb2FkaW5nKCkpO1xuICAgIGRpc3BhdGNoKGl0ZW1zSW5pdChbXSkpO1xuXG4gICAgY29uc3QgbGltaXRRdWVyeSA9IHNlYXJjaFF1ZXJ5LnRyaW0oKSA9PT0gXCJcIiA/IGBsaW1pdD0ke2xpbWl0fWAgOiBcIlwiO1xuXG4gICAgZmV0Y2goYGh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cz8ke2xpbWl0UXVlcnl9JnNvcnQ9JHtzb3J0fWApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpIGFzIFByb21pc2U8aXRlbVtdPilcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHN0b3BMb2FkaW5nKCkpO1xuXG4gICAgICAgIGlmIChzZWFyY2hRdWVyeS50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKHNlYXJjaFF1ZXJ5LCBcImlcIik7XG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBpdGVtc0luaXQoXG4gICAgICAgICAgICAgIC8vIEZJWE1FOiBmYWtlc3RvcmVhcGkgZG9lc24ndCBzdXBwb3J0IGZpbHRlcmluZ1xuICAgICAgICAgICAgICBqc29uLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgIHJlZ0V4cC50ZXN0KGl0ZW0udGl0bGUpIHx8IHJlZ0V4cC50ZXN0KGl0ZW0uZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGl0ZW1zSW5pdChqc29uKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbc29ydCwgc2VhcmNoUXVlcnksIGxpbWl0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUxheW91dD5cbiAgICAgIDxTZWFyY2hSZXN1bHQgLz5cbiAgICAgIHtpc0xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XG4gICAgICB7aXRlbXMubGVuZ3RoIDwgbGltaXQgPyBudWxsIDogKFxuICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgPExvYWRNb3JlQnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldExpbWl0KGxpbWl0ICsgOCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvYWQgbW9yZVxuICAgICAgICAgIDwvTG9hZE1vcmVCdXR0b24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICl9XG4gICAgPC9QYWdlTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==