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

var Spinner2 = function Spinner2(props) {
  return _react.default.createElement("div", {
    className: "spinner2"
  }, _react.default.createElement("div", {
    className: "loader"
  }, _react.default.createElement("div", {
    className: "loader-items"
  }, _react.default.createElement("div", {
    className: "item",
    style: {
      "--i": 0,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }), _react.default.createElement("div", {
    className: "item",
    style: {
      "--i": 1,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }), _react.default.createElement("div", {
    className: "item",
    style: {
      "--i": 2,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }), _react.default.createElement("div", {
    className: "item",
    style: {
      "--i": 3,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }), _react.default.createElement("div", {
    className: "item",
    style: {
      "--i": 4,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }), _react.default.createElement("div", {
    className: "item",
    style: {
      "--i": 5,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }), _react.default.createElement("div", {
    className: "item",
    style: {
      "--i": 6,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }), _react.default.createElement("div", {
    className: "item",
    style: {
      "--i": 7,
      "--bg": props.bgColor || "#FFFFFF"
    }
  }))), props.title !== undefined ? _react.default.createElement("div", {
    className: "loader-title",
    style: {
      "--cl": props.color || "#FFFFFF"
    }
  }, _react.default.createElement("span", null, props.title)) : null);
};

var _default = Spinner2;
exports.default = _default;