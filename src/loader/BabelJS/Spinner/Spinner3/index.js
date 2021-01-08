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
import Services from "../../Services";

const Spinner3 = props => (
    <div className={"spinner3"}>
        <div className={"loader"}>
            <div className={"loader-parent"}>
                <div className={"circle"} style={{
                    "--bg" : props.bgColor || "#FFFFFF",
                    "--border" : Services(props.bgColor, "50") || "#FFFFFF50"
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

export default Spinner3;