webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_navbar_navbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar/navbar.js */ \"./components/navbar/navbar.js\");\n/* harmony import */ var _components_pagebar_pagebar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/pagebar/pagebar.js */ \"./components/pagebar/pagebar.js\");\n/* harmony import */ var _components_content_content_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/content/content.js */ \"./components/content/content.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/kantapatchankasem/Work/konlakueng-next/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      shopData = _useState[0],\n      setShopData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      categoryList = _useState2[0],\n      setCategoryList = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      merchantsLists = _useState3[0],\n      setMerchantsList = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"ทั้งหมด\"),\n      selectedCategory = _useState4[0],\n      setSelectedCategory = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isDrawerOpen = _useState5[0],\n      setIsDrawerOpen = _useState5[1];\n\n  var showDrawer = function showDrawer() {\n    setIsDrawerOpen(true);\n  };\n\n  var onClose = function onClose() {\n    setIsDrawerOpen(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var getShopData = /*#__PURE__*/function () {\n      var _ref = Object(_Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _yield$axios$get, data;\n\n        return _Users_kantapatchankasem_Work_konlakueng_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(\"https://panjs.com/ywc18.json\");\n\n              case 2:\n                _yield$axios$get = _context.sent;\n                data = _yield$axios$get.data;\n                setShopData(data);\n                setMerchantsList(data.merchants); // setMerchantsList([])\n\n                setCategoryList(data.categories);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getShopData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getShopData();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n        children: \"\\u0E04\\u0E19\\u0E25\\u0E30\\u0E04\\u0E23\\u0E36\\u0E48\\u0E07\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_navbar_navbar_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      shopData: shopData,\n      categoryList: categoryList,\n      setSelectedCategory: setSelectedCategory,\n      showDrawer: showDrawer\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_pagebar_pagebar_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_content_content_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      shopData: shopData,\n      selectedCategory: selectedCategory,\n      setSelectedCategory: setSelectedCategory,\n      isDrawerOpen: isDrawerOpen,\n      onClose: onClose,\n      merchantsLists: merchantsLists\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"31S9hDjbN4CLiJczN7cgfCJHgAQ=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJzaG9wRGF0YSIsInNldFNob3BEYXRhIiwiY2F0ZWdvcnlMaXN0Iiwic2V0Q2F0ZWdvcnlMaXN0IiwibWVyY2hhbnRzTGlzdHMiLCJzZXRNZXJjaGFudHNMaXN0Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJpc0RyYXdlck9wZW4iLCJzZXRJc0RyYXdlck9wZW4iLCJzaG93RHJhd2VyIiwib25DbG9zZSIsInVzZUVmZmVjdCIsImdldFNob3BEYXRhIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwibWVyY2hhbnRzIiwiY2F0ZWdvcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxFQURYO0FBQUEsTUFDdEJDLFFBRHNCO0FBQUEsTUFDWkMsV0FEWTs7QUFBQSxtQkFFV0Ysc0RBQVEsRUFGbkI7QUFBQSxNQUV0QkcsWUFGc0I7QUFBQSxNQUVSQyxlQUZROztBQUFBLG1CQUdjSixzREFBUSxDQUFDLElBQUQsQ0FIdEI7QUFBQSxNQUd0QkssY0FIc0I7QUFBQSxNQUdOQyxnQkFITTs7QUFBQSxtQkFJbUJOLHNEQUFRLENBQUMsU0FBRCxDQUozQjtBQUFBLE1BSXRCTyxnQkFKc0I7QUFBQSxNQUlKQyxtQkFKSTs7QUFBQSxtQkFLV1Isc0RBQVEsQ0FBQyxLQUFELENBTG5CO0FBQUEsTUFLdEJTLFlBTHNCO0FBQUEsTUFLUkMsZUFMUTs7QUFPN0IsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkQsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDRCxHQUZEOztBQUlBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJGLG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0QsR0FGRDs7QUFJQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsV0FBVztBQUFBLHNUQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNLQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsOEJBQVYsQ0FETDs7QUFBQTtBQUFBO0FBQ1ZDLG9CQURVLG9CQUNWQSxJQURVO0FBRWxCZiwyQkFBVyxDQUFDZSxJQUFELENBQVg7QUFDQVgsZ0NBQWdCLENBQUNXLElBQUksQ0FBQ0MsU0FBTixDQUFoQixDQUhrQixDQUlsQjs7QUFDQWQsK0JBQWUsQ0FBQ2EsSUFBSSxDQUFDRSxVQUFOLENBQWY7O0FBTGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVhMLFdBQVc7QUFBQTtBQUFBO0FBQUEsT0FBakI7O0FBT0FBLGVBQVc7QUFDWixHQVRRLEVBU04sRUFUTSxDQUFUO0FBVUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsb0VBQUQ7QUFDRSxjQUFRLEVBQUViLFFBRFo7QUFFRSxrQkFBWSxFQUFFRSxZQUZoQjtBQUdFLHlCQUFtQixFQUFFSyxtQkFIdkI7QUFJRSxnQkFBVSxFQUFFRztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVVFLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQVdFLHFFQUFDLHNFQUFEO0FBQ0UsY0FBUSxFQUFFVixRQURaO0FBRUUsc0JBQWdCLEVBQUVNLGdCQUZwQjtBQUdFLHlCQUFtQixFQUFFQyxtQkFIdkI7QUFJRSxrQkFBWSxFQUFFQyxZQUpoQjtBQUtFLGFBQU8sRUFBRUcsT0FMWDtBQU1FLG9CQUFjLEVBQUVQO0FBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBLGtCQURGO0FBc0JEOztHQS9DdUJOLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanNcIlxuaW1wb3J0IFBhZ2ViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZWJhci9wYWdlYmFyLmpzXCJcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5qc1wiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Nob3BEYXRhLCBzZXRTaG9wRGF0YV0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtjYXRlZ29yeUxpc3QsIHNldENhdGVnb3J5TGlzdF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFttZXJjaGFudHNMaXN0cywgc2V0TWVyY2hhbnRzTGlzdF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIuC4l+C4seC5ieC4h+C4q+C4oeC4lFwiKVxuICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2hvd0RyYXdlciA9ICgpID0+IHtcbiAgICBzZXRJc0RyYXdlck9wZW4odHJ1ZSlcbiAgfVxuXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0SXNEcmF3ZXJPcGVuKGZhbHNlKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRTaG9wRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9wYW5qcy5jb20veXdjMTguanNvblwiKVxuICAgICAgc2V0U2hvcERhdGEoZGF0YSlcbiAgICAgIHNldE1lcmNoYW50c0xpc3QoZGF0YS5tZXJjaGFudHMpXG4gICAgICAvLyBzZXRNZXJjaGFudHNMaXN0KFtdKVxuICAgICAgc2V0Q2F0ZWdvcnlMaXN0KGRhdGEuY2F0ZWdvcmllcylcbiAgICB9XG4gICAgZ2V0U2hvcERhdGEoKVxuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7guITguJnguKXguLDguITguKPguLbguYjguIc8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdmJhclxuICAgICAgICBzaG9wRGF0YT17c2hvcERhdGF9XG4gICAgICAgIGNhdGVnb3J5TGlzdD17Y2F0ZWdvcnlMaXN0fVxuICAgICAgICBzZXRTZWxlY3RlZENhdGVnb3J5PXtzZXRTZWxlY3RlZENhdGVnb3J5fVxuICAgICAgICBzaG93RHJhd2VyPXtzaG93RHJhd2VyfVxuICAgICAgLz5cbiAgICAgIDxQYWdlYmFyIC8+XG4gICAgICA8Q29udGVudFxuICAgICAgICBzaG9wRGF0YT17c2hvcERhdGF9XG4gICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk9e3NlbGVjdGVkQ2F0ZWdvcnl9XG4gICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnk9e3NldFNlbGVjdGVkQ2F0ZWdvcnl9XG4gICAgICAgIGlzRHJhd2VyT3Blbj17aXNEcmF3ZXJPcGVufVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICBtZXJjaGFudHNMaXN0cz17bWVyY2hhbnRzTGlzdHN9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})