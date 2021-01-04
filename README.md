# React-js-loader

### Install

    npm i react-js-loader

<img src="https://raw.githubusercontent.com/AmurKhoyetsyan/react-js-loader/master/img/loader.gif" alt="loader" />

props

| Name                | Type               |
| ------------------- | ------------------ |
| type                | String             |
| typeCount           | Number             |
| bgColor             | String             |
| color               | String             |
| title               | String             |
| LICENSE             | [LICENSE](LICENSE) |

| Types               |
| ------------------- |
| box-rotate-x        |
| box-rotate-y        |
| box-rotate-z        |
| heart               |
| bubble-scale        |
| bubble-top          |
| spinner-cub         |
| spinner-circle      |
| spinner-default     |

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
                    <Loader type="spinner-cub" bgColor={"#FFFFFF"} />
                </div>
                <div className={"item"}>
                    <Loader type="spinner-circle" bgColor={"#FFFFFF"} />
                </div>
                <div className={"item"}>
                    <Loader type="spinner-default" bgColor={"#FFFFFF"} />
                </div>
            </div>
        </div>
    );