import styled from 'styled-components';
import TopArea from './TopArea';
import ProductList from './ProductList';
import Order from './Order';


const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eeeeee;
  overflow-y: scroll;
  font-size: .12rem;
`;

function OrderConfirmation() {
    return (
        <Wrapper>
            <TopArea/>
            <ProductList/>
            <Order/>
        </Wrapper>
    )
}

export default OrderConfirmation