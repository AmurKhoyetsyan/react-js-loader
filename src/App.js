/**
 * Copyright (c) Amur 2020
 * 
 * React-js-loader by Amur
 * https://github.com/AmurKhoyetsyan/react-js-loader
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React, { useState } from "react";
 import "./App.css";
 import ColorBar from "./ColorBar";
 import Loader from "react-js-loader";

 const App = props=> {
   const [color, setColor] = useState('#FFFFFF');
   
   return (
    <div className={"App"}>
      <div className={"content"}>
        <div className={"zoom-out"}>
          <ColorBar setColor={color => setColor(color)} />
          <div className={"row"}>
            <div className={"item"}>
              <Loader type="box-rotate-x" bgColor={color} color={color} title={"box-rotate-x"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="box-rotate-y" bgColor={color} color={color} title={"box-rotate-y"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="box-rotate-z" bgColor={color} color={color} title={"box-rotate-z"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="box-up" bgColor={color} color={color} title={"box-up"} size={100} />
            </div>
          </div>
          <div className={"row"}>
            <div className={"item"}>
              <Loader type="bubble-scale" bgColor={color} color={color} title={"bubble-scale"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="heart" bgColor={color} color={color} title={"heart"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="bubble-top" bgColor={color} color={color} title={"bubble-top"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="spinner-cub" bgColor={color} color={color} title={"spinner-cub"} size={100} />
            </div>
          </div>
          <div className={"row"}>
            <div className={"item"}>
              <Loader type="spinner-circle" bgColor={color} color={color} title={"spinner-circle"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="spinner-default" bgColor={color} color={color} title={"spinner-default"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="bubble-ping" bgColor={color} color={color} title={"bubble-ping"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="ekvalayzer" bgColor={color} color={color} title={"ekvalayzer"} size={100} />
            </div>
          </div>
          <div className={"row"}>
            <div className={"item"}>
              <Loader type="box-rectangular" bgColor={color} color={color} title={"box-rectangular"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="hourglass" bgColor={color} color={color} title={"hourglass"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="bubble-spin" bgColor={color} color={color} title={"bubble-spin"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="rectangular-ping" bgColor={color} color={color} title={"rectangular-ping"} size={100} />
            </div>
          </div>
          <div className={"row"}>
            <div className={"item"}>
              <Loader type="bubble-loop" bgColor={color} color={color} title={"bubble-loop"} size={100} />
            </div>
            <div className={"item"}>
              <Loader type="ping-cube" bgColor={color} color={color} title={"ping-cube"} size={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 }
 
 export default App; 
