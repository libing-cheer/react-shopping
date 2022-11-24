/**
 * 主仓库配置
 */
import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // // 引入Redux可视化插件
const store = createStore(
    reducer, // 仓库数据
    composeEnhancers( // 组合中间件
        applyMiddleware(thunk) // 异步用中间件
    )
)

export default store