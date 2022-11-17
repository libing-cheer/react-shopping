function Benefit(props) {
    const {data} = props
    return (
        <div className="benefit">
            <div className="benefit__header">
                <div className="benefit__header__title">我的权益</div>
                <div className="benefit__header__all">
                    <div>全部</div>
                    <div className="iconfont benefit__header__icon">&#xe6db;</div>
                </div>
            </div>
            <div className="benefit__content">
                <div className="benefit__content__item">
        <span className="benefit__content__item__icon">
          &yen; {data?.redEnevelopes}</span
        >
                    <span className="benefit__content__item__text"> 红包 </span>
                </div>
                <div className="benefit__content__item">
                    <span className="benefit__content__item__icon"> {data?.coupon} 张</span>
                    <span className="benefit__content__item__text">优惠券</span>
                </div>
                <div className="benefit__content__item">
        <span className="benefit__content__item__icon">
          开卡享 &yen; {data?.activeCardMoney}</span
        >
                    <span className="benefit__content__item__text">淘宝省钱卡</span>
                </div>
                <div className="benefit__content__item">
        <span className="benefit__content__item__icon">
          &yen; {data?.goldRushCoin}</span
        >
                    <span className="benefit__content__item__text">淘金币可抵</span>
                    <span className="benefit__content__item__num">{data?.needReturn}</span>
                </div>
            </div>
            <div className="benefit__sport">
                <div className="benefit__sport__text">
                    <span className="iconfont benefit__sport__iconfont">&#x1008c;</span>
                    您有{data?.sportCoupon}元户外券待领取
                </div>
                <div className="iconfont benefit__sport__all">
                    <div>去领取</div>
                    <div className="iconfont benefit__sport__icon">&#xe6db;</div>
                </div>
            </div>
        </div>
    )
}

export default Benefit