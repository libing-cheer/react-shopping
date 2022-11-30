/**
 * 负责根据action值，做相应操作，以实现数据流管理
 */
import * as actionTypes from './constants'

const setLocalCartList = (state) => {
    const {cartList} = state
    const cartListString = JSON.stringify(cartList)
    localStorage.cartList = cartListString
};

const getLocalCartList = () => {
    try {
        return JSON.parse(localStorage.cartList)
    } catch {
        return {}
    }
};
const defaultState = {
    cartList: getLocalCartList()
};

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CART_ITEM_INFO:
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
            setLocalCartList({...state});
            return {
                ...state
            };
        case actionTypes.CHANGE_CART_ITEM_CHECK_INFO:
            const productItem = state.cartList[action?.data.shopId].productList[action?.data.productId];
            productItem.check = !productItem.check

            setLocalCartList({...state});
            return {...state};
        case 'CLEAN_CART_PRODUCT':
            state.cartList[action.data.shopId].productList = {};
            setLocalCartList({...state});
            return {...state};
        case 'SET_CART_ITEM_CHECKED':
            const products = state.cartList[action?.data.shopId].productList;
            if (products) {
                for (const i in products) {
                    const product = products[i];
                    product.check = true;
                }
            }

            setLocalCartList({...state});

            return {...state};

        case actionTypes.CHANGE_SHOP_NAME:
            const shopInfos = state.cartList[action?.data.shopId] || {
                shopName: '',
                productList: {}
            };
            shopInfos.shopName = action?.data.shopName;
            setLocalCartList({...state});
            return {...state};

        case actionTypes.CLEAR_CART_DATA_INFO:
            state.cartList[action?.data.shopId].productList = {};

            setLocalCartList({...state});
            return {...state};

        default:
            return {...state};
    }
}

export default reducers;