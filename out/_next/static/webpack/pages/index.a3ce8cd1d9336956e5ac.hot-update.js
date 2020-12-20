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
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 10px;\n  font-size: 1.5rem;\n  width: 160px;\n"]);

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
      lineNumber: 59,
      columnNumber: 7
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_componets_common_Spinner__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
        lineNumber: 63,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxvYWRNb3JlQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwiSG9tZSIsImlzTG9hZGluZyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzb3J0Iiwic2VhcmNoUXVlcnkiLCJpdGVtcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImxpbWl0Iiwic2V0TGltaXQiLCJ1c2VFZmZlY3QiLCJzdGFydExvYWRpbmciLCJpdGVtc0luaXQiLCJsaW1pdFF1ZXJ5IiwidHJpbSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzdG9wTG9hZGluZyIsInJlZ0V4cCIsIlJlZ0V4cCIsImZpbHRlciIsIml0ZW0iLCJ0ZXN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLE1BQVYsbUJBQXBCO0tBQU1GLGM7QUFNUyxTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLFNBQVMsR0FBR0MsK0RBQVcsQ0FDM0IsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsU0FBakI7QUFBQSxHQUQyQixDQUE3QjtBQUdBLE1BQU1HLElBQUksR0FBR0YsK0RBQVcsQ0FBdUIsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUF2QixDQUF4QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0gsK0RBQVcsQ0FDN0IsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0UsV0FBakI7QUFBQSxHQUQ2QixDQUEvQjtBQUdBLE1BQU1DLEtBQUssR0FBR0osK0RBQVcsQ0FBd0IsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csS0FBakI7QUFBQSxHQUF4QixDQUF6QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBVDZCLGtCQVVIQyxzREFBUSxDQUFDLENBQUQsQ0FWTDtBQUFBLE1BVXRCQyxLQVZzQjtBQUFBLE1BVWZDLFFBVmU7O0FBWTdCQyx5REFBUyxDQUFDLFlBQU07QUFDZEwsWUFBUSxDQUFDTSwyREFBWSxFQUFiLENBQVI7QUFDQU4sWUFBUSxDQUFDTyx3REFBUyxDQUFDLEVBQUQsQ0FBVixDQUFSO0FBRUEsUUFBTUMsVUFBVSxHQUFHVixXQUFXLENBQUNXLElBQVosT0FBdUIsRUFBdkIsbUJBQXFDTixLQUFyQyxJQUErQyxFQUFsRTtBQUVBTyxTQUFLLDZDQUFzQ0YsVUFBdEMsbUJBQXlEWCxJQUF6RCxFQUFMLENBQ0djLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRSxJQUFELEVBQVU7QUFDZGIsY0FBUSxDQUFDYywwREFBVyxFQUFaLENBQVI7O0FBRUEsVUFBSWhCLFdBQVcsQ0FBQ1csSUFBWixPQUF1QixFQUEzQixFQUErQjtBQUM3QixZQUFNTSxNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXbEIsV0FBWCxFQUF3QixHQUF4QixDQUFmO0FBQ0FFLGdCQUFRLENBQ05PLHdEQUFTLEVBQ1A7QUFDQU0sWUFBSSxDQUFDSSxNQUFMLENBQ0UsVUFBQ0MsSUFBRDtBQUFBLGlCQUNFSCxNQUFNLENBQUNJLElBQVAsQ0FBWUQsSUFBSSxDQUFDRSxLQUFqQixLQUEyQkwsTUFBTSxDQUFDSSxJQUFQLENBQVlELElBQUksQ0FBQ0csV0FBakIsQ0FEN0I7QUFBQSxTQURGLENBRk8sQ0FESCxDQUFSO0FBU0QsT0FYRCxNQVdPO0FBQ0xyQixnQkFBUSxDQUFDTyx3REFBUyxDQUFDTSxJQUFELENBQVYsQ0FBUjtBQUNEO0FBQ0YsS0FuQkg7QUFvQkQsR0ExQlEsRUEwQk4sQ0FBQ2hCLElBQUQsRUFBT0MsV0FBUCxFQUFvQkssS0FBcEIsQ0ExQk0sQ0FBVDtBQTRCQSxzQkFDRSxxRUFBQyw0REFBRDtBQUFBLDRCQUNFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHVCxTQUFTLGlCQUFJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGaEIsRUFHR0ssS0FBSyxDQUFDdUIsTUFBTixHQUFlbkIsS0FBZixHQUF1QixJQUF2QixnQkFDQztBQUFTLFdBQUssRUFBRTtBQUFFb0IsaUJBQVMsRUFBRTtBQUFiLE9BQWhCO0FBQUEsNkJBQ0UscUVBQUMsY0FBRDtBQUNFLGVBQU8sRUFBRSxtQkFBTTtBQUNibkIsa0JBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNELFNBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBekR1QlYsSTtVQUNKRSx1RCxFQUdMQSx1RCxFQUNPQSx1RCxFQUdOQSx1RCxFQUNHTSx1RDs7O01BVEtSLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTNjZThjZDFkOTMzNjk1NmU1YWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcIi4uL2NvbXBvbmV0cy9jb21tb24vU3Bpbm5lclwiO1xuaW1wb3J0IHsgUGFnZUxheW91dCB9IGZyb20gXCIuLi9jb21wb25ldHMvY29tbW9uXCI7XG5pbXBvcnQgeyBpdGVtIH0gZnJvbSBcIi4uL3R5cGVzL2l0ZW1cIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3R5cGVzL3N0b3JlXCI7XG5pbXBvcnQgeyBpdGVtc0luaXQsIHN0YXJ0TG9hZGluZywgc3RvcExvYWRpbmcgfSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gXCIuLi9jb21wb25ldHMvU2VhcmNoUmVzdWx0c1wiO1xuXG5jb25zdCBMb2FkTW9yZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB3aWR0aDogMTYwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcjxzdG9yZSwgc3RvcmVbXCJpc0xvYWRpbmdcIl0+KFxuICAgIChzdGF0ZSkgPT4gc3RhdGUuaXNMb2FkaW5nXG4gICk7XG4gIGNvbnN0IHNvcnQgPSB1c2VTZWxlY3RvcjxzdG9yZSwgc3RvcmVbXCJzb3J0XCJdPigoc3RhdGUpID0+IHN0YXRlLnNvcnQpO1xuICBjb25zdCBzZWFyY2hRdWVyeSA9IHVzZVNlbGVjdG9yPHN0b3JlLCBzdG9yZVtcInNlYXJjaFF1ZXJ5XCJdPihcbiAgICAoc3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5XG4gICk7XG4gIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3I8c3RvcmUsIHN0b3JlW1wiaXRlbXNcIl0+KChzdGF0ZSkgPT4gc3RhdGUuaXRlbXMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUoOCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChzdGFydExvYWRpbmcoKSk7XG4gICAgZGlzcGF0Y2goaXRlbXNJbml0KFtdKSk7XG5cbiAgICBjb25zdCBsaW1pdFF1ZXJ5ID0gc2VhcmNoUXVlcnkudHJpbSgpID09PSBcIlwiID8gYGxpbWl0PSR7bGltaXR9YCA6IFwiXCI7XG5cbiAgICBmZXRjaChgaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzPyR7bGltaXRRdWVyeX0mc29ydD0ke3NvcnR9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkgYXMgUHJvbWlzZTxpdGVtW10+KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc3RvcExvYWRpbmcoKSk7XG5cbiAgICAgICAgaWYgKHNlYXJjaFF1ZXJ5LnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICAgIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoc2VhcmNoUXVlcnksIFwiaVwiKTtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIGl0ZW1zSW5pdChcbiAgICAgICAgICAgICAgLy8gRklYTUU6IGZha2VzdG9yZWFwaSBkb2Vzbid0IHN1cHBvcnQgZmlsdGVyaW5nXG4gICAgICAgICAgICAgIGpzb24uZmlsdGVyKFxuICAgICAgICAgICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgcmVnRXhwLnRlc3QoaXRlbS50aXRsZSkgfHwgcmVnRXhwLnRlc3QoaXRlbS5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2goaXRlbXNJbml0KGpzb24pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sIFtzb3J0LCBzZWFyY2hRdWVyeSwgbGltaXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlTGF5b3V0PlxuICAgICAgPFNlYXJjaFJlc3VsdCAvPlxuICAgICAge2lzTG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cbiAgICAgIHtpdGVtcy5sZW5ndGggPCBsaW1pdCA/IG51bGwgOiAoXG4gICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICA8TG9hZE1vcmVCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TGltaXQobGltaXQgKyA4KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9hZCBtb3JlXG4gICAgICAgICAgPC9Mb2FkTW9yZUJ1dHRvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKX1cbiAgICA8L1BhZ2VMYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9