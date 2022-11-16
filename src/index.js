import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./style/index.scss";
import {BrowserRouter as Router, useRoutes} from "react-router-dom";
import router from './router/index'

const GetRoutes = () => {
    return useRoutes(router)
}

const SetRoutes = () => {
    return (
        <Router>
            <GetRoutes/>
        </Router>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <SetRoutes/>
)
/*
* 如果你想开始测量你的应用程序的性能，传递一个函数
* 记录结果（例如：reportWebVitals(console.log)）
* 或发送到分析端点。 了解更多：https://bit.ly/CRA-vitals
*/
reportWebVitals();
