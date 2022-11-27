import {memo} from "react";
import {connect} from "react-redux";
import {useLocation} from 'react-router-dom';
import {changeCartItemInfo} from "./store/actionCreator";

function Cart(props) {
    const location = useLocation();
    const shopId = location.pathname.split('/')[2];
    const {cartList} = props.cartList;
    const showCart = false;
    const productList = cartList[shopId]?.productList || {};
    const result = {total: 0, prices: 0, allChecked: true};
    if (productList) {
        for (const i in productList) {
            const product = productList[i];
            result.total += product.count;

            if (product.check) {
                result.prices += product.count * product.prices
            }

            if (product.count > 0 && !product.check) {
                result.allChecked = false
            }
        }
    }
    result.prices = result.prices.toFixed(2);



    return <div className='cart'>
        {
            showCart && <div className='products'>
                <div className='products__header'>
                    <div className='products__header__all'>
                        <span className='products__header__icon iconfont'></span>
                        全选
                    </div>
                    <div className='products__header__clear'>
                        <span className='products__header__clear__btn'>清空购物车</span>
                    </div>
                </div>
            </div>
        }
        <div className='check'>
            <div className='check__icon'>
                <img
                    src='http://www.dell-lee.com/imgs/vue3/basket.png'
                    alt=''
                    className='check__icon__img'
                />
                <div className='check__icon__tag'>{result.total}</div>
            </div>
            <div className='check__info'>
                总计：<span className="check__info__price">&yen; {result.prices}</span>
            </div>
            <div className='check__btn'>
                去结算
            </div>

        </div>

    </div>
}

const mapStateToProps = (state) => {
    return {...state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCartItemInfoDispatch(props) {
            dispatch(changeCartItemInfo(props))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Cart))