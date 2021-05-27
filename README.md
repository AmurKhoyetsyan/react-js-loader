# React-js-loader

### Install

    npm i react-js-loader

<img src="https://raw.githubusercontent.com/AmurKhoyetsyan/react-js-loader/master/img/loader.gif" alt="loader" />

### For Pure JS Smart Loader

[Smart Loader](https://github.com/AmurKhoyetsyan/smart-loaders)

<br />

### Documentation

props

| Name                | Type               |
| ------------------- | ------------------ |
| type                | String             |
| bgColor             | String             |
| color               | String             |
| title               | String             |
| size                | Integer            |
| LICENSE             | [LICENSE](LICENSE) |

<br />

| Types Color          | Types    | Value Example                   |
| -------------------- | -------- | ------------------------------- |
| rgb                  | String   | rgb(0, 0, 0) or rgb(0%, 0%, 0%) |
| hex                  | String   | #000000 or #000                 |
| hsl                  | String   | hsl(0deg 0% 0%)                 |
| name                 | String   | black                           |

<br/>

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
| bubble-spin         |
| spinner-cub         |
| spinner-circle      |
| spinner-default     |
| ekvalayzer          |
| hourglass           |
| rectangular-ping    |

<br />

    color and bgColor = rgb or hex


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
                    <Loader type="box-rotate-x" bgColor={"#FFFFFF"} title={"box-rotate-x"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="box-rotate-y" bgColor={"#FFFFFF"} title={"box-rotate-y"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="box-rotate-z" bgColor={"#FFFFFF"} title={"box-rotate-z"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="box-up" bgColor={"#FFFFFF"} title={"box-up"} size={100} />
                </div>
            </div>
            <div className={"row"}>
                <div className={"item"}>
                    <Loader type="bubble-scale" bgColor={"#FFFFFF"} title={"bubble-scale"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="heart" bgColor={"#FFFFFF"} title={"heart"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="bubble-top" bgColor={"#FFFFFF"} title={"bubble-top"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="spinner-cub" bgColor={"#FFFFFF"} title={"spinner-cub"} size={100} />
                </div>
            </div>
            <div className={"row"}>
                <div className={"item"}>
                    <Loader type="spinner-circle" bgColor={"#FFFFFF"} title={"spinner-circle"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="spinner-default" bgColor={"#FFFFFF"} title={"spinner-default"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="bubble-ping" bgColor={"#FFFFFF"} title={"bubble-ping"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="ekvalayzer" bgColor={"#FFFFFF"} title={"ekvalayzer"} size={100} />
                </div>
            </div>
            <div className={"row"}>
                <div className={"item"}>
                    <Loader type="box-rectangular" bgColor={"#FFFFFF"} title={"box-rectangular"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="hourglass" bgColor={"#FFFFFF"} title={"hourglass"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="bubble-spin" bgColor={"#FFFFFF"} title={"bubble-spin"} size={100} />
                </div>
                <div className={"item"}>
                    <Loader type="rectangular-ping" bgColor={"#FFFFFF"} title={"rectangular-ping"} size={100} />
                </div>
            </div>
        </div>
    );