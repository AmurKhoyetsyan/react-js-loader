/**
 * React-js-loader by Amur
 * https://github.com/AmurKhoyetsyan/react-js-loader
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bubble3 = function Bubble3(props) {
  return _react.default.createElement("div", {
    className: "bubble3"
  }, _react.default.createElement("div", {
    className: "loader"
  }, _react.default.createElement("div", {
    className: "loader-items"
  }, _react.default.createElement("div", {
    className: "bubble",
    style: {
      "--i": 0,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }), _react.default.createElement("div", {
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
  }))), props.title !== undefined ? _react.default.createElement("div", {
    className: "loader-title",
    style: {
      "--cl": props.color || "#FFFFFF"
    }
  }, _react.default.createElement("span", null, props.title)) : null);
};

var _default = Bubble3;
exports.default = _default;