"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("./Box"));

var _Heart = _interopRequireDefault(require("./Heart"));

var _Bubble = _interopRequireDefault(require("./Bubble"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(props) {
  switch (props.type) {
    case "box":
      return _react.default.createElement(_Box.default, props);

    case "heart":
      return _react.default.createElement(_Heart.default, props);

    case "bubble":
      return _react.default.createElement(_Bubble.default, props);

    case "spinner":
      return _react.default.createElement(_Spinner.default, props);

    default:
      return _react.default.createElement(_Spinner.default, props);
  }
};

var _default = Loader;
exports.default = _default;