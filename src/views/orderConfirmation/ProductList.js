import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import {connect} from "react-redux";
import {memo} from 'react';

const ProductsWrapper = styled.div`
  margin: 0.16rem 0.18rem 0rem 0.18rem;
  background: #ffffff;
`;
const ProductItem = styled.div`
  position: relative;
  display: flex;
  padding: 0 0.16rem 0.16rem 0.16rem;
`

function ProductList(props) {
    const location = useLocation();
    const shopId = location.pathname.split('/')[2];
    const {cartList} = props.cartList;
    const productList = cartList[shopId]?.productList;
    const shopName = cartList[shopId]?.shopName;

    return (
        <ProductsWrapper>
            <div className="products__title">{shopName}</div>
            <div className="products__wrapper">
                <div className='products__list'>
                    {
                        Object.values(productList).map(item => {
                            return (
                                <ProductItem
                                    key={item._id}
                                >
                                    <img
                                        className='products__item__imgs'
                                        src={item.imgUrl}
                                        alt=''
                                    />
                                    <div className="products__item__detail">
                                        <h4 className="products__item__title">{item.name}</h4>
                                        <p className="products__item__price">
                                            <span>
                                                <span className="products__item__price__yen"> &yen;</span>
                                                {item.prices} x {item.count}
                                            </span>
                                            <span className="products__item__price__total">
                                                <span className="products__item__price__yen"> &yen; </span>
                                                { (item.prices * item.count).toFixed(2) }
                                            </span>
                                        </p>
                                    </div>
                                </ProductItem>
                            )
                        })
                    }
                </div>
            </div>
        </ProductsWrapper>
    )
}

const mapStateToProps = (state) => {
    return {...state}
};
export default connect(mapStateToProps)(memo(ProductList));
