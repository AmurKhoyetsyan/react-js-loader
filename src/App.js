/**
 * Copyright (c) Amur 2020
 * 
 * React-js-loader by Amur
 * https://github.com/AmurKhoyetsyan/react-js-loader
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import './App.css';
import Loader from "react-js-loader";

function App() {
  return (
    <div className="App">
      <div className={"row"}>
        <div className={"item"}>
          <Loader type="box-rotate-x" bgColor={"#FFFFFF"} title={"box-rotate-x"} />
        </div>
        <div className={"item"}>
          <Loader type="box-rotate-y" bgColor={"#FFFFFF"} title={"box-rotate-y"} />
        </div>
        <div className={"item"}>
          <Loader type="box-rotate-z" bgColor={"#FFFFFF"} title={"box-rotate-z"} />
        </div>
      </div>
      <div className={"row"}>
        <div className={"item"}>
          <Loader type="bubble-scale" bgColor={"#FFFFFF"} title={"bubble-scale"} />
        </div>
        <div className={"item"}>
          <Loader type="heart" bgColor={"#FFFFFF"} title={"heart"} />
        </div>
        <div className={"item"}>
          <Loader type="bubble-top" bgColor={"#FFFFFF"} title={"bubble-top"} />
        </div>
      </div>
      <div className={"row"}>
        <div className={"item"}>
          <Loader type="spinner-cub" bgColor={"#FFFFFF"} title={"spinner-cub"} />
        </div>
        <div className={"item"}>
          <Loader type="spinner-circle" bgColor={"#FFFFFF"} title={"spinner-circle"} />
        </div>
        <div className={"item"}>
          <Loader type="spinner-default" bgColor={"#FFFFFF"} title={"spinner-default"} />
        </div>
      </div>
      <div className={"row"}>
        <div className={"item"}>
          <Loader type="bubble-ping" bgColor={"#FFFFFF"} title={"bubble-ping"} />
        </div>
        <div className={"item"}>
          <Loader type="ekvalayzer" bgColor={"#FFFFFF"} title={"ekvalayzer"} />
        </div>
        <div className={"item"}>
          <Loader type="box-rectangular" bgColor={"#FFFFFF"} title={"box-rectangular"} />
        </div>
      </div>
      <div className={"row"}>
        <div className={"item"}>
          <Loader type="hourglass" bgColor={"#FFFFFF"} title={"hourglass"} />
        </div>
        <div className={"item"}>
          <Loader type="bubble-spin" bgColor={"#FFFFFF"} title={"bubble-spin"} />
        </div>
        <div className={"item"}>
          <Loader type="rectangular-ping" bgColor={"#FFFFFF"} title={"rectangular-ping"} />
        </div>
      </div>
    </div>
  );
}

export default App;
