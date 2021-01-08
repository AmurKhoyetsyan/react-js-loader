/**
 * Copyright (c) Amur 2020
 * 
 * React-js-loader by Amur
 * https://github.com/AmurKhoyetsyan/react-js-loader
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import "./style.css";

const Spinner2 = props => (
    <div className={"spinner2"}>
        <div className={"loader"}>
            <div className={"loader-items"}>
                <div className="item" style={{
                    "--i" : 0,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className="item" style={{
                    "--i" : 1,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className="item" style={{
                    "--i" : 2,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className="item" style={{
                    "--i" : 3,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className="item" style={{
                    "--i" : 4,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className="item" style={{
                    "--i" : 5,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className="item" style={{
                    "--i" : 6,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className="item" style={{
                    "--i" : 7,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
            </div>
        </div>
        {
            (props.title !== undefined)?(
                <div className={"loader-title"} style={{
                    "--cl" : props.color || "#FFFFFF"
                }}>
                    <span>{props.title}</span>
                </div>
            ):(
                null
            )
        }
    </div>
);

export default Spinner2;