/**
 * React-js-loader by Amur
 * https://github.com/AmurKhoyetsyan/react-js-loader
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