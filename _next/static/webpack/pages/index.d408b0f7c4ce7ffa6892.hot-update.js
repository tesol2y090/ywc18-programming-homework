webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_navbar_navbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar/navbar.js */ \"./components/navbar/navbar.js\");\n/* harmony import */ var _components_pagebar_pagebar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/pagebar/pagebar.js */ \"./components/pagebar/pagebar.js\");\n/* harmony import */ var _components_content_content_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/content/content.js */ \"./components/content/content.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/kantapatchankasem/Work/konlakueng-next/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      shopData = _useState[0],\n      setShopData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      categoryList = _useState2[0],\n      setCategoryList = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var getShopData = /*#__PURE__*/function () {\n      var _ref = Object(_Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _yield$axios$get, data;\n\n        return _Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(\"https://panjs.com/ywc18.json\");\n\n              case 2:\n                _yield$axios$get = _context.sent;\n                data = _yield$axios$get.data;\n                setShopData(data);\n                setCategoryList(data.categories);\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getShopData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getShopData();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [shopData && categoryList ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_navbar_navbar_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      provinces: shopData.provinces,\n      categoryList: categoryList\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      children: \"Loading ...\"\n    }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_pagebar_pagebar_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), shopData ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_content_content_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      merchants: shopData.merchants,\n      priceRange: shopData.priceRange,\n      provinces: shopData.provinces\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      children: \"Loading ...\"\n    }, void 0, false)]\n  }, void 0, true);\n}\n\n_s(Home, \"ncSExNkcbN+C08yfmjZZejEkW14=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJzaG9wRGF0YSIsInNldFNob3BEYXRhIiwiY2F0ZWdvcnlMaXN0Iiwic2V0Q2F0ZWdvcnlMaXN0IiwidXNlRWZmZWN0IiwiZ2V0U2hvcERhdGEiLCJheGlvcyIsImdldCIsImRhdGEiLCJjYXRlZ29yaWVzIiwicHJvdmluY2VzIiwibWVyY2hhbnRzIiwicHJpY2VSYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxFQURYO0FBQUEsTUFDdEJDLFFBRHNCO0FBQUEsTUFDWkMsV0FEWTs7QUFBQSxtQkFFV0Ysc0RBQVEsRUFGbkI7QUFBQSxNQUV0QkcsWUFGc0I7QUFBQSxNQUVSQyxlQUZROztBQUc3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsV0FBVztBQUFBLHNUQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNLQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsOEJBQVYsQ0FETDs7QUFBQTtBQUFBO0FBQ1ZDLG9CQURVLG9CQUNWQSxJQURVO0FBRWxCUCwyQkFBVyxDQUFDTyxJQUFELENBQVg7QUFDQUwsK0JBQWUsQ0FBQ0ssSUFBSSxDQUFDQyxVQUFOLENBQWY7O0FBSGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVhKLFdBQVc7QUFBQTtBQUFBO0FBQUEsT0FBakI7O0FBS0FBLGVBQVc7QUFDWixHQVBRLEVBT04sRUFQTSxDQUFUO0FBUUEsc0JBQ0U7QUFBQSxlQUNHTCxRQUFRLElBQUlFLFlBQVosZ0JBQ0MscUVBQUMsb0VBQUQ7QUFBUSxlQUFTLEVBQUVGLFFBQVEsQ0FBQ1UsU0FBNUI7QUFBdUMsa0JBQVksRUFBRVI7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGdCQUdDO0FBQUE7QUFBQSxxQkFKSixlQU1FLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixFQU9HRixRQUFRLGdCQUNQLHFFQUFDLHNFQUFEO0FBQ0UsZUFBUyxFQUFFQSxRQUFRLENBQUNXLFNBRHRCO0FBRUUsZ0JBQVUsRUFBRVgsUUFBUSxDQUFDWSxVQUZ2QjtBQUdFLGVBQVMsRUFBRVosUUFBUSxDQUFDVTtBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZ0JBT1A7QUFBQTtBQUFBLHFCQWRKO0FBQUEsa0JBREY7QUFtQkQ7O0dBOUJ1QlosSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qc1wiXG5pbXBvcnQgUGFnZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlYmFyL3BhZ2ViYXIuanNcIlxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmpzXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2hvcERhdGEsIHNldFNob3BEYXRhXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2NhdGVnb3J5TGlzdCwgc2V0Q2F0ZWdvcnlMaXN0XSA9IHVzZVN0YXRlKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRTaG9wRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9wYW5qcy5jb20veXdjMTguanNvblwiKVxuICAgICAgc2V0U2hvcERhdGEoZGF0YSlcbiAgICAgIHNldENhdGVnb3J5TGlzdChkYXRhLmNhdGVnb3JpZXMpXG4gICAgfVxuICAgIGdldFNob3BEYXRhKClcbiAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG9wRGF0YSAmJiBjYXRlZ29yeUxpc3QgPyAoXG4gICAgICAgIDxOYXZiYXIgcHJvdmluY2VzPXtzaG9wRGF0YS5wcm92aW5jZXN9IGNhdGVnb3J5TGlzdD17Y2F0ZWdvcnlMaXN0fSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5Mb2FkaW5nIC4uLjwvPlxuICAgICAgKX1cbiAgICAgIDxQYWdlYmFyIC8+XG4gICAgICB7c2hvcERhdGEgPyAoXG4gICAgICAgIDxDb250ZW50XG4gICAgICAgICAgbWVyY2hhbnRzPXtzaG9wRGF0YS5tZXJjaGFudHN9XG4gICAgICAgICAgcHJpY2VSYW5nZT17c2hvcERhdGEucHJpY2VSYW5nZX1cbiAgICAgICAgICBwcm92aW5jZXM9e3Nob3BEYXRhLnByb3ZpbmNlc31cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+TG9hZGluZyAuLi48Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})