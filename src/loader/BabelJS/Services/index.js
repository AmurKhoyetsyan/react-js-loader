/**
 * Copyright (c) Amur 2020
 * 
 * React-js-loader by Amur
 * https://github.com/AmurKhoyetsyan/react-js-loader
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

let rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
};

let fullColorHex = function(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red + green + blue;
};

let rgbToPart = function (color, alpha) {
    if(color.indexOf("rgb") === -1) {
        return color + alpha;
    }
    let arrBefore = color.substring(4, color.length - 1);
    let arr = arrBefore.split(",");

    return "#" + fullColorHex(arr[0], arr[1], arr[2]) + alpha;
}

export default rgbToPart;