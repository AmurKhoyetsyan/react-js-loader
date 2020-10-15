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
    
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABz1JREFUeJztm3eMFUUcxz93gBx4iAiIp4CciAdEuiZiQQWMEhVssaCxxRKNvUWiCcSKEdGo/KFGUWOPkWBvQaPEQpFiQRAQBCGKooJ079Y/vjPs3mPnvZ19+x6XwDeZ7Mu8mV+ZmZ35lVnYjV0bFWXgUQUMBvoDdcAhQEeg2pT/gPWmrAAWAj8CXwELyiBfSdAJuBH4BNgMBDFlM/APUvw/R5tVwAvAqUDzsmqQEsOBt4FthEqsBF4EbgCGAbVAq5x+FUA7oA9wFnA38DGwKULnd2ACcECplUiDk9CStcIuA+5CChWDVsBI4BXClbQFeIImMhAHAlMJFZ+OBK4sAa/2wB3AGsNrPXAzO/HVuBT41wjzHXBimfhWA+OAjYb3N0CPMvEGYE/gecLlOIadMwu1aJ8IgHXAueVg2gGYYZguAvqVg2keVKDXwG66d5aSWVd0PgfAe8BepWTmiWOBP5Fsj1EC+6YjmvEALf+meCb3REduADyUJeFqYJYh/Byl2eGzQnfgVyTrbVkRfc0QfBtolhXREuJQ4G+gAdknReFqpPz3aCVkhfbISDoCGIRmLsvXagRQj2yG1AZTHbK+NgK9ihSoPXAVMpqsIZNbtgJzgYnAUUXyA7jH0P0oLQF7xl5XhBCHAM8ieyFO6XxlAXAx6V+75shICkhhI5xtOs4g3abXEhiPZtVX8dwyBzgshQyg16seeZWJX+FKNPoB8uN9UUs48lmVrcD1KWQBeMbQuDVph7MId31f9AFWk63y0TIxhUxd0Su4GgVnCsK6tUd7MjoY+I3SKW/L/Z5ygfahALi8UMOepuFcTwbVhK+NLRvRu1eMsi4aF3jKN8j0m16o4X2k2/mfYkchx5r/DgIeADbEtHGVL4FRQAvkc+Rupv8C3TxlnGf6HpSv0Q/IgqrxIHyk6ZOrxPCcdp2RjX4ler1qkXdZA/QFzkDL+6IYHtYUj5apHjKCPMUAeY+xqDENZnsSnhYjXAAM8KSTD+87eBzuQWOg6fOOq8F5psEED6L9HYIFZGCHRzDHweNVDxoVwF8oeLLd7I4aOYPMc4YH0Qvz/LefB518qEDueBxGAW0T0gmQbm2IhNCiA1BnnvM9hDvVUf8pcp2zQIDij3FoCZzgQetb8+xpK3IHIAB+TkisBp39cRhraGWFD4EvHP8N8aCzxDztZDcagE4orLQlIbHejvq1wOceQiWFa9d3yRGHlebZyVZEB6AaCZ8UXR31i8l29i0WOeq7edCw+rWxFXYAWpvfSWe/EZEcNHjQ8EG9pxxx2Jzbxw6AnTGfaKqr7d4eNHzQzlOOfG23r1A7AJvQCCfylgz+cdTXIhM2a7iyPy454mCTsuttRXQPWI9CV0mxwlHfknRxhEIY6qhf7kHD6rfOVkQHYBVaZq0TEstnLxR0Oz3RG/egzvOg08U8V9mK6AAsNE/X2Z6LNShTFIfR+J3P+dAMmIT7Xfc5cq1u2+WODoCt9Mn3vemorwTeQGHvYlCFghnHOf7fhIK3SWF1Wxj35+lod5zkQbA3jZ2TjwiTpwFKWj6KNkYftETOmc1FusrzHjSbo5jEHzhW0z7oJPC9mPRuRKB70ZI9kx1D4fNR4GSgg04lMqHfRxtyksCJz2o9xvR5PV+j2aZR0n0A5BLXR4R60dTfGCPwSjS7LtwU08dVXvaQERSmD1CCxokxppFvnn1ijnCno2X2OI2jRQ8XoLM/yZRfa9omRQWwFN1Gy+umd0GzuQQ/C6uKcPUEwEzCDbYWOBmFvZLQLJRMaUAD7IPjTd/3kjT+wDR2+foudEZGiRX0aZLbFFEUSqPdnoKmvch1TpLGwwgjs77ojpaaFfYP4CUUZnsSBT4LId8KSHMFpi9aNYvxyDPa5MjIFAz3RTdE4xRIkp6KuzW6ATg/hSwAbxkal/l0Gmo6/YSfg2RRiXb0dfgv39wQ+zTSX4MbYWgsIIWD9rLpPD4lc1Dk5UF0YyNAg1II9kbodOCUIni3QeG9ALcjlRc1KIxcT/F2fRVKlCTZFAcQCVoWgeeQ8i8UQ+Q0Q2Q1fufuzsYVSO4lZHCd7xFDbDbZ3hMqFYYjH2QLYa6jKDRH6SS7IeVedW9KGIz8iAYSnvlJ0RrF5QOU9GhKt0QthhI6UdeWgkFb4DNCz65bKZikxCXIgGpAH2aUDFXAFDQIf5LOUMoSrdDHEwEagNHlYGr9dusCP4NiCeXGEMKAyXJKE4jNi+NRZNja/NcAe5SBby3yL6ylOIWdMwGAjsUJhPf1lyNrL2nK2gd9gcmEztIylB5vEuiFIkHWkdmIZukMijsxeqArLTMJZ3w1cAvpXO0dkPWHBd3RBavR6P4PaFDmAF+jb4uWorj8WmSsNEPKdEAJ1zoU6zuSxgnYWWi/mUyY42uyaIECKk8hczRpnC9atiKHaBzFX9Z2ohyfzoI+r+uHnJw6NNttTNlG+OnsL2hnX4hmfEOZ5NuNXRb/A8OgtRmGP+tQAAAAAElFTkSuQmCC" alt="git" />
    
    
