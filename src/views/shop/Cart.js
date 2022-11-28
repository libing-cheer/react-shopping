import {memo, useState} from "react";
import {connect} from "react-redux";
import {useLocation} from 'react-router-dom';
import {
    changeCartItemInfo,
    changeCartItemCheckInfo,
    setCartItemCheckedInfo,
    cleanCartProductInfo
} from "./store/actionCreator";
import {Link} from "react-router-dom";

function Cart(props) {
    const location = useLocation();
    const shopId = location.pathname.split('/')[2];
    const {cartList} = props.cartList;
    const {
        changeCartItemCheckInfoDispatch,
        setCartItemCheckedInfoDispatch,
        cleanCartProductInfoDispatch,
        changeCartItemInfoDispatch,
        shopName
    } = props;
    const [showCart, setShowCart] = useState(false);

    const productList = cartList[shopId]?.productList || {};
    const notEmptyProductList = {};

    for (const i in productList) {
        const product = productList[i];
        if (product.count > 0) {
            notEmptyProductList[i] = product
        }
    }

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

    const handleCartShowChange = () => {
        setShowCart((!showCart && result.total > 0));
    };
    const changeCartItemCheck = (shopId, productId) => {
        const data = {shopId, productId}
        changeCartItemCheckInfoDispatch({...data})
    };
    const setCartItemChecked = (shopId) => {
        setCartItemCheckedInfoDispatch({shopId})
    };
    const cleanCartProduct = (shopId) => {
        cleanCartProductInfoDispatch({shopId})
    };

    const changeCartItem = (shopId, productId, productInfo, num, shopName) => {
        const data = {shopId, productId, productInfo, num, shopName};
        changeCartItemInfoDispatch({...data})
    };


    return (
        <div>
            {
                (showCart && result.total > 0) &&
                <div className='mask'
                     onClick={handleCartShowChange}></div>
            }
            <div className='cart'>
                {
                    (showCart && result.total > 0) &&
                    <div className='products'>
                        <div className='products__header'>
                            <div className='products__header__all'>
                                {result.allChecked ?
                                    <span
                                        className='products__header__icon iconfont'
                                        onClick={() => setCartItemChecked(shopId)}
                                    >&#xe69b;</span> :
                                    <span
                                        className='products__header__icon iconfont'
                                        onClick={() => setCartItemChecked(shopId)}
                                    >&#xe619;</span>}
                                全选
                            </div>
                            <div className='products__header__clear'>
                                <span
                                    className='products__header__clear__btn'
                                    onClick={() => {
                                        cleanCartProduct(shopId)
                                    }}
                                >清空购物车</span>
                            </div>
                        </div>
                        {
                            Object.values(notEmptyProductList).map(item => {
                                return (
                                    <div className='products__item' key={item._id}>
                                        {
                                            item.check ?
                                                <div
                                                    className='products__item__checked iconfont'
                                                    onClick={() => changeCartItemCheck(shopId, item._id)}
                                                >&#xe69b;</div> :
                                                <div
                                                    className='products__item__checked iconfont'
                                                    onClick={() => changeCartItemCheck(shopId, item._id)}
                                                >&#xe619;</div>
                                        }
                                        <img
                                            className='products__item__cartImg'
                                            src={item.imgUrl}
                                            alt=''
                                        />
                                        <div className='products__item__detail'>
                                            <h4 className='products__item__title'>{item.name}</h4>
                                            <p className='products__item__price'>
                                                <span className="products__item__price__yen">
                                                    &yen;
                                                </span>
                                                {item.prices}
                                                <span className="products__item__price__origin">
                                                    &yen;
                                                    {item.oldPrices}
                                                </span
                                                >
                                            </p>
                                        </div>
                                        <div className='products__numbers'>
                                            <span
                                                className='products__number__minus iconfont'
                                                onClick={() => changeCartItem(shopId, item._id, item, -1, shopName)}
                                            >
                                                &#xe677;
                                            </span>
                                            {item.count || 0}
                                            <span
                                                className='products__number__plus iconfont'
                                                onClick={() => changeCartItem(shopId, item._id, item, 1, shopName)}
                                            >
                                                &#xe675;
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                <div className='check'>
                    <div className='check__icon'>
                        <img
                            src='http://www.dell-lee.com/imgs/vue3/basket.png'
                            alt=''
                            className='check__icon__img'
                            onClick={handleCartShowChange}
                        />
                        <div className='check__icon__tag'>{result.total}</div>
                    </div>
                    <div className='check__info'>
                        总计：<span className="check__info__price">&yen; {result.prices}</span>
                    </div>
                    {
                        result.total > 0 && <div className='check__btn'>
                            <Link to={'/OrderConfirmation/' + shopId}>
                                去结算
                            </Link>
                        </div>
                    }

                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {...state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCartItemInfoDispatch(state) {
            dispatch(changeCartItemInfo(state))
        },
        changeCartItemCheckInfoDispatch(state) {
            dispatch(changeCartItemCheckInfo(state))
        },
        setCartItemCheckedInfoDispatch(state) {
            dispatch(setCartItemCheckedInfo(state))
        },
        cleanCartProductInfoDispatch(state) {
            dispatch(cleanCartProductInfo(state))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Cart))