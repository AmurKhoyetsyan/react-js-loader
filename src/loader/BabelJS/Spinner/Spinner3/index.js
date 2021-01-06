/**
 * React-js-loader by Amur
 * https://github.com/AmurKhoyetsyan/react-js-loader
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