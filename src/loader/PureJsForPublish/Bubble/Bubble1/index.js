"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bubble1 = function Bubble1(props) {
  return _react.default.createElement("div", {
    className: "bubble1"
  }, _react.default.createElement("div", {
    className: "loader"
  }, _react.default.createElement("div", {
    className: "loader-items"
  }, _react.default.createElement("div", {
    className: "bubble",
    style: {
      "--i": 1,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }), _react.default.createElement("div", {
    className: "bubble",
    style: {
      "--i": 2,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }), _react.default.createElement("div", {
    className: "bubble",
    style: {
      "--i": 3,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }))), props.title !== undefined ? _react.default.createElement("div", {
    className: "loader-title",
    style: {
      "--cl": props.color || "#FFFFFF"
    }
  }, _react.default.createElement("span", null, props.title)) : null);
};

var _default = Bubble1;
exports.default = _default;