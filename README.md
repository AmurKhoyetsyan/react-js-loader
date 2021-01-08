# React-js-loader

### Install

    npm i react-js-loader

<img src="https://raw.githubusercontent.com/AmurKhoyetsyan/react-js-loader/master/img/loader.gif" alt="loader" />

props

| Name                | Type               |
| ------------------- | ------------------ |
| type                | String             |
| bgColor             | String             |
| color               | String             |
| title               | String             |
| LICENSE             | [LICENSE](LICENSE) |

| Types               |
| ------------------- |
| box-rotate-x        |
| box-rotate-y        |
| box-rotate-z        |
| box-rectangular     |
| heart               |
| bubble-scale        |
| bubble-top          |
| bubble-ping         |
| spinner-cub         |
| spinner-circle      |
| spinner-default     |
| ekvalayzer          |

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
        </div>
    );