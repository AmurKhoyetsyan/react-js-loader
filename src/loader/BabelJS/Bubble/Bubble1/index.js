/**
 * React-js-loader by Amur
 * https://github.com/AmurKhoyetsyan/react-js-loader
 */

import React from "react";
import "./style.css";

const Bubble1 = props => (
    <div className={"bubble1"}>
        <div className={"loader"}>
            <div className={"loader-items"}>
                <div className={"bubble"} style={{
                    "--i" : 1,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className={"bubble"} style={{
                    "--i" : 2,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className={"bubble"} style={{
                    "--i" : 3,
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

export default Bubble1;