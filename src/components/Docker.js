import {useState} from 'react';
import {Link} from "react-router-dom";
import classnames from 'classnames';
import './index.scss';

function Docker(props) {
    const {pageIndex} = props;
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
                        <div
                            key={item.index}
                            className='docker__item'
                        >
                            <Link to={item.path}>
                                <div className={classnames('docker__title',
                                    {'docker__item--active': item.index === pageIndex})}
                                >
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