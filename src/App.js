import React from 'react';
import './App.css';

// import Loader from "react-js-loader";
import Loader from './loader/BabelJS';

function App() {
  return (
    <div className="App">
      <div className={"row"}>
        <div className={"item"}>
          <Loader type="box-rotate-x" bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="box-rotate-y" bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="box-rotate-z" bgColor={"#FFFFFF"} />
        </div>
      </div>
      <div className={"row"}>
        <div className={"item"}>
          <Loader type="bubble-scale" bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="heart" bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="bubble-top" bgColor={"#FFFFFF"} />
        </div>
      </div>
      <div className={"row"}>
        <div className={"item"}>
          <Loader type="spinner-cub" typeCount={1} bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="spinner-circle" typeCount={2} bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="spinner-default" typeCount={3} bgColor={"#FFFFFF"} />
        </div>
      </div>
    </div>
  );
}

export default App;
