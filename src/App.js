import React from 'react';
import './App.css';

// import Loader from "react-js-loader";
import Loader from './loader/BabelJS';

function App() {
  return (
    <div className="App">
      <div className={"row"}>
        <div className={"item"}>
          <Loader type="box" typeCount={1} bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="box" typeCount={2} bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="box" typeCount={3} bgColor={"#FFFFFF"} />
        </div>
      </div>
      <div className={"row"}>
        <div className={"item"}>
          <Loader type="bubble" typeCount={1} bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="heart" bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="bubble" typeCount={2} bgColor={"#FFFFFF"} />
        </div>
      </div>
      <div className={"row"}>
        <div className={"item"}>
          <Loader type="spinner" typeCount={1} bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="spinner" typeCount={2} bgColor={"#FFFFFF"} />
        </div>
        <div className={"item"}>
          <Loader type="spinner" typeCount={3} bgColor={"#FFFFFF"} />
        </div>
      </div>
    </div>
  );
}

export default App;
