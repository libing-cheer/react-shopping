import styled from 'styled-components';

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
`

function Order() {
    return (
        <OrderWrapper>
            <div className='order__price'>
                实付金额：<b>¥ </b>
            </div>
            <div className="order__btn">
                提交订单
            </div>
        </OrderWrapper>
    )
}

export default Order;