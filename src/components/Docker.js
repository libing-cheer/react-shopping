import {useState} from 'react'
import {Link} from "react-router-dom";
import './index.scss'

function Docker() {
    const [data] = useState({
        dockerList: [
            {text: "首页", index: 0, to: {name: "Home"}, path: '/'},
            {text: "购物车", index: 1, to: {name: "CartList"}, path: '/cartList'},
            {text: "订单", index: 2, to: {name: "OrderList"}, path: '/orderList'},
            {text: "我的", index: 3, to: {name: "OwnPage"}, path: '/ownPage'}
        ]
    })
    return (
        <div className='docker'>
            {
                data.dockerList.map(item => {
                    return (
                        <div className='docker__item' key={item.index}>
                            <Link to={item.path}>
                                <div className='docker__title'>
                                    {item.text}
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Docker