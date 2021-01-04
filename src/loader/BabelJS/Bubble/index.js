import React from "react";
import Bubble1 from "./Bubble1";
import Bubble2 from "./Bubble2";

const Bubble = props => {
    switch(props.typeCount) {
        case 1: return <Bubble1 {...props} />;
        case 2: return <Bubble2 {...props} />;
        default: return <Bubble1 {...props} />;
    }
}

export default Bubble;