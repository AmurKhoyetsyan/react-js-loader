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

const Ekvalayzer1 = props => (
    <div className={"ekvalayzer"}>
        <div className={"loader-items"}>
            <div className={"parent-rectangular"}>
                <div className={"rectangular"} style={{
                    "--bg" : props.bgColor || "#FFFFFF",
                    "--w" : 2,
                    "--i": 1
                }}></div>
            </div>
            <div className={"parent-rectangular"}>
                <div className={"rectangular"} style={{
                    "--bg" : props.bgColor || "#FFFFFF",
                    "--w" : 1,
                    "--i": 0
                }}></div>
            </div>
            <div className={"parent-rectangular"}>
                <div className={"rectangular"} style={{
                    "--bg" : props.bgColor || "#FFFFFF",
                    "--w" : 2,
                    "--i": 1
                }}></div>
            </div>
            <div className={"parent-rectangular"}>
                <div className={"rectangular"} style={{
                    "--bg" : props.bgColor || "#FFFFFF",
                    "--w" : 1,
                    "--i": 2
                }}></div>
            </div>
            <div className={"parent-rectangular"}>
                <div className={"rectangular"} style={{
                    "--bg" : props.bgColor || "#FFFFFF",
                    "--w" : 2,
                    "--i": 1
                }}></div>
            </div>
            <div className={"parent-rectangular"}>
                <div className={"rectangular"} style={{
                    "--bg" : props.bgColor || "#FFFFFF",
                    "--w" : 1,
                    "--i": 0
                }}></div>
            </div>
            <div className={"parent-rectangular"}>
                <div className={"rectangular"} style={{
                    "--bg" : props.bgColor || "#FFFFFF",
                    "--w" : 2,
                    "--i": 2
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

export default Ekvalayzer1;