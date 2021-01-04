"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

var _Services = _interopRequireDefault(require("../../Services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner3 = function Spinner3(props) {
  return _react.default.createElement("div", {
    className: "spinner3"
  }, _react.default.createElement("div", {
    className: "loader"
  }, _react.default.createElement("div", {
    className: "loader-parent"
  }, _react.default.createElement("div", {
    className: "circle",
    style: {
      "--bg": props.bgColor || "#FFFFFF",
      "--border": (0, _Services.default)(props.bgColor, "50") || "#FFFFFF50"
    }
  }))), props.title !== undefined ? _react.default.createElement("div", {
    className: "loader-title",
    style: {
      "--cl": props.color || "#FFFFFF"
    }
  }, _react.default.createElement("span", null, props.title)) : null);
};

var _default = Spinner3;
exports.default = _default;