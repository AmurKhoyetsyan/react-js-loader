# React-js-loader

## [demo page](https://amurkhoyetsyan.github.io/smart-loaders/)

### Install

    npm i react-js-loader

<img src="https://raw.githubusercontent.com/AmurKhoyetsyan/react-js-loader/master/img/loader.gif" alt="loader" />

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
| ping-cube           |
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