"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Heart = _interopRequireDefault(require("./Heart"));

var _Box = _interopRequireDefault(require("./Box/Box1"));

var _Box2 = _interopRequireDefault(require("./Box/Box2"));

var _Box3 = _interopRequireDefault(require("./Box/Box3"));

var _Box4 = _interopRequireDefault(require("./Box/Box4"));

var _Bubble = _interopRequireDefault(require("./Bubble/Bubble1"));

var _Bubble2 = _interopRequireDefault(require("./Bubble/Bubble2"));

var _Bubble3 = _interopRequireDefault(require("./Bubble/Bubble3"));

var _Spinner = _interopRequireDefault(require("./Spinner/Spinner1"));

var _Spinner2 = _interopRequireDefault(require("./Spinner/Spinner2"));

var _Spinner3 = _interopRequireDefault(require("./Spinner/Spinner3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(props) {
  switch (props.type) {
    case "box-rotate-x":
      return _react.default.createElement(_Box.default, props);
      break;

    case "box-rotate-y":
      return _react.default.createElement(_Box2.default, props);
      break;

    case "box-rotate-z":
      return _react.default.createElement(_Box3.default, props);
      break;

    case "box-rectangular":
      return _react.default.createElement(_Box4.default, props);
      break;

    case "heart":
      return _react.default.createElement(_Heart.default, props);
      break;

    case "bubble-scale":
      return _react.default.createElement(_Bubble.default, props);
      break;

    case "bubble-top":
      return _react.default.createElement(_Bubble2.default, props);
      break;

    case "bubble-ping":
      return _react.default.createElement(_Bubble3.default, props);
      break;

    case "spinner-cub":
      return _react.default.createElement(_Spinner.default, props);
      break;

    case "spinner-circle":
      return _react.default.createElement(_Spinner2.default, props);
      break;

    case "spinner-default":
      return _react.default.createElement(_Spinner3.default, props);
      break;

    default:
      return _react.default.createElement(_Spinner3.default, props);
  }
};

var _default = Loader;
exports.default = _default;