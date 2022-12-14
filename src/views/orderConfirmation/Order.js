import styled from 'styled-components';
import {connect} from "react-redux";
import {memo, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {post} from '../../utils/request';
import {clearCartDataInfo} from '../shop/store/actionCreator';

const OrderWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 0.49rem;
  line-height: 0.49rem;
  background: #ffffff;
  border-top: 0.01rem solid #f1f1f1;
`;
const MaskWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index; 1;
  background: rgba(0, 0, 0, .5);
`;

function Order(props) {
    const [showConfirm, setShowConfirm] = useState(false);
    const {cartList} = props.cartList;
    const {clearCartDataInfoDispatch} = props;
    const location = useLocation();
    const navigate = useNavigate();
    const shopId = location.pathname.split('/')[2];
    const productList = cartList[shopId]?.productList || {};
    const shopName = cartList[shopId]?.shopName;
    const result = {total: 0, prices: 0};
    if (productList) {
        for (const i in productList) {
            const product = productList[i];
            result.total += product.count;

            if (product.check) {
                result.prices += product.count * product.prices
            }
        }
    }
    result.prices = result.prices.toFixed(2);

    const handleShowConfirmChange = (status) => {
        setShowConfirm(status);
    };

    const handleStopPropagation = (e) => {
      e.stopPropagation();
    };

    const handelConfirmOrder = async (isCanceled) => {
        const products = [];
        for (let i in productList) {
            let product = productList[i];
            products.push({ id: product._id, num: product.count});
        }
        try {
            const params = {
                shopId,
                shopName,
                products,
                isCanceled,
                addressId: 1
            }
            const result = await post('/api/createOrder', params);
            if (result?.status) {
                clearCartDataInfoDispatch({shopId});
                navigate('/orderList');
            }
        } catch (e) {
            console.log(e, '????????????');
        }
    };
    return (
        <div>
            <OrderWrapper>
                <div className='order__price'>
                    ???????????????<b>?? {result.prices}</b>
                </div>
                <div className="order__btn" onClick={() => handleShowConfirmChange(true)}>
                    ????????????
                </div>
            </OrderWrapper>
            {
                showConfirm &&
                <MaskWrapper
                    onClick={() => handleShowConfirmChange(false)}
                >
                    <div className="mask__content" onClick={e => handleStopPropagation(e)}>
                        <h3 className="mask__content__title">??????????????????????????????</h3>
                        <div className="mask__content__desc">??????????????????????????????????????????</div>
                        <div className="mask__content__btns">
                            <div
                                className="mask__content__btn mask__content__btn--first"
                                onClick={() => handelConfirmOrder(false)}
                            >
                                ????????????
                            </div>
                            <div
                                className="mask__content__btn mask__content__btn--last"
                                onClick={() => handelConfirmOrder(true)}
                            >
                                ????????????
                            </div>
                        </div>

                    </div>
                </MaskWrapper>
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {...state}
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearCartDataInfoDispatch(state) {
            dispatch(clearCartDataInfo(state))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Order));