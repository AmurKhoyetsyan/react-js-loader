import React from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";

const Box = props => {
    switch(props.typeCount) {
        case 1: return <Box1 {...props} />;
        case 2: return <Box2 {...props} />;
        case 3: return <Box3 {...props} />;
        default: return <Box1 {...props} />;
    }
}

export default Box;