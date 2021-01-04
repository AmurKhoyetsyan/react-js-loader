import React from "react";
import Box from "./Box";
import Heart from "./Heart";
import Bubble from "./Bubble";
import Spinner from "./Spinner";

const Loader = props => {
    switch(props.type) {
        case "box": return <Box {...props} />;
        case "heart": return <Heart {...props} />;
        case "bubble": return <Bubble {...props} />;
        case "spinner": return <Spinner {...props} />;
        default: return <Spinner {...props} />;
    }
}

export default Loader;