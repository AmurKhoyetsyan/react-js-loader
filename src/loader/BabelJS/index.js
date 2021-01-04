import React from "react";
import Heart from "./Heart";
import Bubble from "./Bubble";
import Spinner from "./Spinner";


import Box1 from "./Box/Box1";
import Box2 from "./Box/Box2";
import Box3 from "./Box/Box3";


// const Loader = props => {
//     switch(props.type) {
//         case "heart": return <Heart {...props} />;
//         case "bubble": return <Bubble {...props} />;
//         case "spinner": return <Spinner {...props} />;
//         default: return <Spinner {...props} />;
//     }
// }


const Loader = props => {
    console.log(props);
    switch(props.type) {
        case "box-rotate-x": return <Box1 {...props} /> ; break;
        case "box-rotate-y": return <Box2 {...props} /> ; break;
        case "box-rotate-z": return <Box3 {...props} /> ; break;
        case "heart": return <Heart {...props} />; break;
        default: return <Box1 {...props} /> ;
    }
}

export default Loader;