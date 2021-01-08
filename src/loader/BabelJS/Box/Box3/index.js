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

const Box3 = props => (
    <div className={"box3"}>
        <div className={"loader"}>
            <div className={"loader-items"}>
                <div className={"parent-cub"}>
                    <div className={"cub"} style={{
                        "--bg" : props.bgColor || "#FFFFFF"
                    }}></div>
                </div>
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

export default Box3;