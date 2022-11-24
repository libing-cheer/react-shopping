/**
 * 负责根据action值，做相应操作，以实现数据流管理
 */
import * as actionTypes from './constants'

const setLocalCartList = (state) => {
    const {cartList} = state
    const cartListString = JSON.stringify(cartList)
    localStorage.cartList = cartListString
}

const getLocalCartList = () => {
    try {
        return JSON.parse(localStorage.cartList)
    } catch {
        return {}
    }
}
const defaultState = {
    cartList: getLocalCartList()
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CARTITEM_INFO:
            const {shopId, productId, productInfo, shopName} = action?.data;
            const shopInfo = state.cartList[shopId] || {
                shopName: "",
                productList: {},
            };

            let product = shopInfo.productList[productId];

            if (!product) {
                product = productInfo;
                product.count = 0;
            }
            shopInfo.shopName = shopName;
            product.count = product?.count + action?.data.num;
            product.count < 0 && (product.count = 0);
            action.data.num > 0 && (product.check = true);
            shopInfo.productList[productId] = product;
            state.cartList[shopId] = shopInfo;
            setLocalCartList(state)

            return {
                ...state
            }
        default:
            return state
    }
}