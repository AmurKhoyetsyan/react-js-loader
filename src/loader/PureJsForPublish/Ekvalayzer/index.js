/**
 * Copyright (c) Amur 2020
 * 
 * React-js-loader by Amur
 * https://github.com/AmurKhoyetsyan/react-js-loader
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Amur 2020
 * 
 * React-js-loader by Amur
 * https://github.com/AmurKhoyetsyan/react-js-loader
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ekvalayzer1 = function Ekvalayzer1(props) {
  return _react.default.createElement("div", {
    className: "ekvalayzer"
  }, _react.default.createElement("div", {
    className: "loader-items"
  }, _react.default.createElement("div", {
    className: "parent-rectangular"
  }, _react.default.createElement("div", {
    className: "rectangular",
    style: {
      "--bg": props.bgColor || "#FFFFFF",
      "--w": 2,
      "--i": 1
    }
  })), _react.default.createElement("div", {
    className: "parent-rectangular"
  }, _react.default.createElement("div", {
    className: "rectangular",
    style: {
      "--bg": props.bgColor || "#FFFFFF",
      "--w": 1,
      "--i": 0
    }
  })), _react.default.createElement("div", {
    className: "parent-rectangular"
  }, _react.default.createElement("div", {
    className: "rectangular",
    style: {
      "--bg": props.bgColor || "#FFFFFF",
      "--w": 2,
      "--i": 1
    }
  })), _react.default.createElement("div", {
    className: "parent-rectangular"
  }, _react.default.createElement("div", {
    className: "rectangular",
    style: {
      "--bg": props.bgColor || "#FFFFFF",
      "--w": 1,
      "--i": 2
    }
  })), _react.default.createElement("div", {
    className: "parent-rectangular"
  }, _react.default.createElement("div", {
    className: "rectangular",
    style: {
      "--bg": props.bgColor || "#FFFFFF",
      "--w": 2,
      "--i": 1
    }
  })), _react.default.createElement("div", {
    className: "parent-rectangular"
  }, _react.default.createElement("div", {
    className: "rectangular",
    style: {
      "--bg": props.bgColor || "#FFFFFF",
      "--w": 1,
      "--i": 0
    }
  })), _react.default.createElement("div", {
    className: "parent-rectangular"
  }, _react.default.createElement("div", {
    className: "rectangular",
    style: {
      "--bg": props.bgColor || "#FFFFFF",
      "--w": 2,
      "--i": 2
    }
  }))), props.title !== undefined ? _react.default.createElement("div", {
    className: "loader-title",
    style: {
      "--cl": props.color || "#FFFFFF"
    }
  }, _react.default.createElement("span", null, props.title)) : null);
};

var _default = Ekvalayzer1;
exports.default = _default;