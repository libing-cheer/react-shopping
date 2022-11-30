import {useState, useEffect} from 'react'
import {get} from '../../utils/request'
import Docker from '../../components/Docker'
import './index.scss'
import styled from "styled-components";
const Products = styled.div`
  margin: 0.16rem 0.18rem 0rem 0.18rem;
  background: #ffffff;
`
function CartList() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getCartList = async () => {
            const res = await get("/api/cartList")
            if (res?.status && res?.data) {
                setData(res.data)
            }
        }
        getCartList()
    }, [])
    return (
        <div>
            <div className='wrapper__cart'>
                <div className="title">我的购物车</div>
                <Products>
                    <div className='products__list'>
                        {
                            data.map(item => {
                                return <div key={item._id} className="products__list__main">
                                    <div className="products__title">{item.shopName}</div>
                                    <div className="products__item">
                                        <img className="products__item__imgs" v-show={item.imgUrl} src={item?.imgUrl}
                                             alt=""/>
                                        <div className="products__item__detail">
                                            <h4 className="products__item__title">{item?.name}</h4>
                                            <p className="products__item__price">
                                                <span>
                                                  <span className="products__item__price__yen"> &yen; </span>
                                                    {item?.prices} x {item?.sales}
                                                </span>
                                                <span className="products__item__price__total">
                                                  <span className="products__item__price__yen"> &yen; </span>
                                                    {(item?.prices * item?.sales).toFixed(2)}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </Products>
            </div>
            < Docker/>
        </div>

    )
}

export default CartList