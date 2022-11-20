import {useState, useEffect} from 'react'
import {get} from '../../utils/request'
import Docker from '../../components/Docker'
import './index.scss'
import styled from "styled-components";

const Order = styled.div`
  padding: 0.16rem;
  margin: 0.16rem 0.18rem;
  background: #ffffff;
  font-size: 0.16rem;
`

function OrderList() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getOrderList = async () => {
            const res = await get('/api/order')
            if (res?.status && res?.data) {
                const orderList = res.data;
                let totalPrice = 0;
                let totalNum = 0;
                orderList.forEach((order) => {
                    const products = order.products || []
                    products.forEach((productItem) => {
                        totalPrice += productItem?.product?.prices * productItem?.orderSales || 0
                        totalNum += productItem?.orderSales || 0
                    })
                    order.totalPrice = totalPrice
                    order.totalNum = totalNum
                })
                setData(orderList)
            }
        }
        getOrderList()
    }, [])
    return <div>
        <div className='wrapper__order'>
            <div className="title">我的订单</div>
            {
                data.map((item, index) => {
                    return <div className='orders' key={index}>
                        <Order>
                            <div className='order__title'>
                                {item.shopName}
                                <span className="order__status">{
                                    item.isCanceled ? "已取消" : "已下单"
                                }</span>
                            </div>

                            <div className="order__content">
                                <div className="order__content__imgs">
                                    {
                                        item.products.map((innerItem, innerIndex) => {
                                            const isShowImg = innerIndex <= 3 ? 1 : 0; // todo 展示/隐藏
                                            return <span key={innerIndex} v-show={isShowImg}>
                                                <img

                                                    className="order__content__img"
                                                    src={innerItem.product.imgUrl}
                                                    alt="image"
                                                />
                                            </span>
                                        })
                                    }
                                </div>
                                <div className="order__content__info">
                                    <div className="order__content__info__price">
                                        &yen; {item?.totalPrice || 0}
                                    </div>
                                    <div className="order__content__info__count">
                                        共{item?.totalNum || 0}件
                                    </div>
                                </div>
                            </div>
                        </Order>

                    </div>
                })
            }
        </div>
        <Docker/>

    </div>
}

export default OrderList