# React-js-loader

### Install

    npm i react-js-loader

<img src="https://github.com/AmurKhoyetsyan/React-js-loader/img/loader.gif" alt="loader" />

props

| Name                | Type               |
| ------------------- | ------------------ |
| type                | String             |
| typeCount           | Number             |
| bgColor             | String             |
| color               | String             |
| title               | String             |
| LICENSE             | [LICENSE](LICENSE) |

    type = box || spinner || heart || bubble

    box typeCount = 1 || 2 || 3

    spinner typeCount = 1 || 2 || 3

    heart typeCount = none

    bubble typeCount = 1 || 2 

    bgColor and bgColor = rgb or hex


### Example

    import React from 'react';

    ....
    ....
    ....

    import Loader from "react-js-loader";

    ....
    ....
    ....

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
                    <Loader type="box" typeCount={3} bgColor={"#FFFFFF"} title={"Loding"} color={"#FFFFFF"} />
                </div>
            </div>
            <div className={"row"}>
                <div className={"item"}>
                    <Loader type="bubble" typeCount={1} bgColor={"#FFFFFF"} title={"Loding"} color={"#FFFFFF"} />
                </div>
                <div className={"item"}>
                    <Loader type="heart" bgColor={"#FFFFFF"} title={"Loding"} color={"#FFFFFF"} />
                </div>
                <div className={"item"}>
                    <Loader type="bubble" typeCount={2} bgColor={"#FFFFFF"} title={"Loding"} color={"#FFFFFF"} />
                </div>
            </div>
            <div className={"row"}>
                <div className={"item"}>
                    <Loader type="spinner" typeCount={1} bgColor={"#FFFFFF"} title={"Loding"} color={"#FFFFFF"} />
                </div>
                <div className={"item"}>
                    <Loader type="spinner" typeCount={2} bgColor={"#FFFFFF"} title={"Loding"} color={"#FFFFFF"} />
                </div>
                <div className={"item"}>
                    <Loader type="spinner" typeCount={3} bgColor={"#FFFFFF"} title={"Loding"} color={"#FFFFFF"} />
                </div>
            </div>
        </div>
    );