/**
 * 负责统一管理数据状态改变的函数执行，给reducer分配相应的action
 */

import * as actionTypes from './constants'

export const changeCartItemInfo = (data) => ({
    type: actionTypes.CHANGE_CARTITEM_INFO,
    data
})