"use strict";

var _interopRequireWildcard = require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Landing = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Cards = _interopRequireDefault(require("./Cards"));

var _Filters = _interopRequireDefault(require("./Filters"));

var Landing = function Landing() {
  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      filters = _useState2[0],
      setFilters = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_Filters.default, {
    onClick: setFilters,
    filters: filters
  }), /*#__PURE__*/_react.default.createElement(_Cards.default, {
    filters: filters
  }));
};

exports.Landing = Landing;
var _default = Landing;
exports.default = _default;
