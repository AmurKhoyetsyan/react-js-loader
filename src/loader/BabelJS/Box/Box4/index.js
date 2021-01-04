import React from "react";
import "./style.css";

const Box4 = props => (
    <div className={"box4"}>
        <div className={"loader"}>
            <div className={"loader-items"}>
                <div className={"rectangular"} style={{
                    "--i" : 1,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className={"rectangular"} style={{
                    "--i" : 2,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className={"rectangular"} style={{
                    "--i" : 3,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className={"rectangular"} style={{
                    "--i" : 4,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className={"rectangular"} style={{
                    "--i" : 5,
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

export default Box4;