import React from "react";
import "./style.css";

const Bubble3 = props => (
    <div className={"bubble3"}>
        <div className={"loader"}>
            <div className={"loader-items"}>
                <div className={"bubble"} style={{
                    "--i" : 0,
                    "--bg" : props.bgColor || "#FFFFFF"
                }}></div>
                <div className={"bubble"} style={{
                    "--i" : 1,
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

export default Bubble3;