"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Spinner = _interopRequireDefault(require("./Spinner1"));

var _Spinner2 = _interopRequireDefault(require("./Spinner2"));

var _Spinner3 = _interopRequireDefault(require("./Spinner3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(props) {
  switch (props.typeCount) {
    case 1:
      return _react.default.createElement(_Spinner.default, props);

    case 2:
      return _react.default.createElement(_Spinner2.default, props);

    case 3:
      return _react.default.createElement(_Spinner3.default, props);

    default:
      return _react.default.createElement(_Spinner.default, props);
  }
};

var _default = Spinner;
exports.default = _default;