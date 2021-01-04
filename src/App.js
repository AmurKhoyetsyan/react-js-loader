import React from 'react';
import './App.css';

// import Loader from "react-js-loader";
import Loader from './loader/BabelJS';

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
          <Loader type="box-rectangular" bgColor={"#FFFFFF"} title={"box-rectangular"} />
        </div>
      </div>
    </div>
  );
}

export default App;
