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

var rgbToHex = function rgbToHex(rgb) {
  var hex = Number(rgb).toString(16);

  if (hex.length < 2) {
    hex = "0" + hex;
  }

  return hex;
};

var fullColorHex = function fullColorHex(r, g, b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red + green + blue;
};

var rgbToPart = function rgbToPart(color, alpha) {
  if (color.indexOf("rgb") === -1) {
    return color + alpha;
  }

  var arrBefore = color.substring(4, color.length - 1);
  var arr = arrBefore.split(",");
  return "#" + fullColorHex(arr[0], arr[1], arr[2]) + alpha;
};

var _default = rgbToPart;
exports.default = _default;