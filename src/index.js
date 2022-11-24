import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter as Router, useRoutes} from "react-router-dom";
import router from './router/index'
import "./style/index.scss";

import {Provider} from 'react-redux'
import store from './store/index'

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
    // 根组件配置：Provider声明式开发，提供给子组件数据管理功能
    <Provider store={store}>
        <SetRoutes/>
    </Provider>
)
/*
* 如果你想开始测量你的应用程序的性能，传递一个函数
* 记录结果（例如：reportWebVitals(console.log)）
* 或发送到分析端点。 了解更多：https://bit.ly/CRA-vitals
*/
reportWebVitals();
