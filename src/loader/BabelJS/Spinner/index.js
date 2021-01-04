import React from "react";
import Spinner1 from "./Spinner1";
import Spinner2 from "./Spinner2";
import Spinner3 from "./Spinner3";

const Spinner = props => {
    switch(props.typeCount) {
        case 1: return <Spinner1 {...props} />;
        case 2: return <Spinner2 {...props} />;
        case 3: return <Spinner3 {...props} />;
        default: return <Spinner1 {...props} />;
    }
}

export default Spinner;