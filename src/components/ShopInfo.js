// 公共组件
import classnames from 'classnames'

function ShopInfo(props) {
    console.log(props)
    const {imgUrl, name, sales, expressLimit, expressPrice, slogan} = props.item;
    const {hideBorder} = props
    return (
        <div className='shop'>
            <img className='shop__img' src={imgUrl} alt=''/>
            {/*<div className={`shop__content ${!hideBorder ? 'shop__content--bordered' : ''}`}>*/}
            <div className={classnames({'shop__content': true, 'shop__content--bordered': !hideBorder})}>
                <div className='shop__content__title'>{name}</div>
                <div className="shop__content__tags">
                    <span className="shop__content__tag">
                      <span className="shop__content__text">月售：{sales}</span>
                      <span className="shop__content__text">起送：{expressLimit}</span>
                      <span className="shop__content__text">
                          基础运费：{expressPrice}
                      </span>
                    </span>
                </div>
                <p className="shop__content__highlight">{slogan}</p>
            </div>
        </div>
    )
}

export default ShopInfo