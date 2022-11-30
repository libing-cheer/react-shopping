/**
 * 负责统一管理数据状态改变的函数执行，给reducer分配相应的action
 */

import * as actionTypes from './constants'

export const changeCartItemInfo = (data) => ({
    type: actionTypes.CHANGE_CART_ITEM_INFO,
    data
});

export const changeCartItemCheckInfo = (data) => ({
    type: actionTypes.CHANGE_CART_ITEM_CHECK_INFO,
    data
});

export const setCartItemCheckedInfo = (data) => ({
    type: actionTypes.SET_CART_ITEM_CHECKED,
    data
});

export const cleanCartProductInfo = (data) => ({
    type: actionTypes.CLEAN_CART_PRODUCT,
    data
});

export const clearCartDataInfo = (data) => ({
    type: actionTypes.CLEAR_CART_DATA_INFO,
    data
});

export const changeShopNameInfo = (data) => ({
    type: actionTypes.CHANGE_SHOP_NAME,
    data
});
