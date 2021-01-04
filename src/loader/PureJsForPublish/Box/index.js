"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("./Box1"));

var _Box2 = _interopRequireDefault(require("./Box2"));

var _Box3 = _interopRequireDefault(require("./Box3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = function Box(props) {
  switch (props.typeCount) {
    case 1:
      return _react.default.createElement(_Box.default, props);

    case 2:
      return _react.default.createElement(_Box2.default, props);

    case 3:
      return _react.default.createElement(_Box3.default, props);

    default:
      return _react.default.createElement(_Box.default, props);
  }
};

var _default = Box;
exports.default = _default;