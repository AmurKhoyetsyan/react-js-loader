import React from "react";
import Heart from "./Heart";
import Box1 from "./Box/Box1";
import Box2 from "./Box/Box2";
import Box3 from "./Box/Box3";
import Box4 from "./Box/Box4";
import Bubble1 from "./Bubble/Bubble1";
import Bubble2 from "./Bubble/Bubble2";
import Bubble3 from "./Bubble/Bubble3";
import Spinner1 from "./Spinner/Spinner1";
import Spinner2 from "./Spinner/Spinner2";
import Spinner3 from "./Spinner/Spinner3";

const Loader = props => {
    switch(props.type) {
        case "box-rotate-x": return <Box1 {...props} /> ; break;
        case "box-rotate-y": return <Box2 {...props} /> ; break;
        case "box-rotate-z": return <Box3 {...props} /> ; break;
        case "box-rectangular": return <Box4 {...props} /> ; break;
        case "heart": return <Heart {...props} />; break;
        case "bubble-scale": return <Bubble1 {...props} /> ; break;
        case "bubble-top": return <Bubble2 {...props} /> ; break;
        case "bubble-ping": return <Bubble3 {...props} /> ; break;
        case "spinner-cub": return <Spinner1 {...props} /> ; break;
        case "spinner-circle": return <Spinner2 {...props} /> ; break;
        case "spinner-default": return <Spinner3 {...props} /> ; break;
        default: return <Spinner3 {...props} /> ;
    }
}

export default Loader;