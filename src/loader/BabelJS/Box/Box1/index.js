/**
 * React-js-loader by Amur
 * https://github.com/AmurKhoyetsyan/react-js-loader
 */

import React from "react";
import "./style.css";

const Box1 = props => (
    <div className={"box1"}>
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

export default Box1;