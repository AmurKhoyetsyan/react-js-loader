"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Bubble = _interopRequireDefault(require("./Bubble1"));

var _Bubble2 = _interopRequireDefault(require("./Bubble2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bubble = function Bubble(props) {
  switch (props.typeCount) {
    case 1:
      return _react.default.createElement(_Bubble.default, props);

    case 2:
      return _react.default.createElement(_Bubble2.default, props);

    default:
      return _react.default.createElement(_Bubble.default, props);
  }
};

var _default = Bubble;
exports.default = _default;