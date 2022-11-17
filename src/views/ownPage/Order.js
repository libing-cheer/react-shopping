function Order(props) {
    const {data} = props
    return <div className="order">
        <div className="order__header">
            <div className="order__header__title">我的订单</div>
            <div className="order__header__all">
                <div>全部</div>
                <div className="iconfont order__header__icon">&#xe6db;</div>
            </div>
        </div>
        <div className="order__content">
            <div className="order__content__item">
                <span className="iconfont order__content__item__icon"> &#xe60a; </span>
                <span className="order__content__item__text">待付款</span>
                <span className="order__content__item__num">{data?.needPaid}</span>
            </div>
            <div className="order__content__item">
                <span className="iconfont order__content__item__icon">&#xe601;</span>
                <span className="order__content__item__text">待发货</span>
                <span className="order__content__item__num">{data?.needShipped}</span>
            </div>
            <div className="order__content__item">
                <span className="iconfont orde__contentr__item__icon">&#xe66a;</span>
                <span className="order__content__item__text">待收货</span>
                <span className="order__content__item__num">{data?.needReceived}</span>
            </div>
            <div className="order__content__item">
                <span className="iconfont order__content__item__icon">&#xe609;</span>
                <span className="orde__contentr__item__text">待评价</span>
                <span className="order__content__item__num">{data?.needEvalauted}</span>
            </div>
            <div className="order__content__item">
                <span className="iconfont order__content__item__icon">&#xe602;</span>
                <span className="order__content__item__text">退款/售后</span>
                <span className="order__content__item__num">{data?.needReturn}</span>
            </div>
        </div>
        <div className="order__pick">
            <div className="order__pick__img">
                <img v-show={data?.recentImgUrl} src={data?.recentImgUrl} alt=""/>
            </div>
            <div className="order__pick__info">
                <div className="order__pick__info__code">
                    <div className="order__pick__info__pick">
                        取件码：{data?.recentPickingCode}
                    </div>
                    <div className="order__pick__info__date">{data?.recentDate}</div>
                </div>
                <div className="order__pick__info__message">{data?.recentMessage}</div>
            </div>
        </div>
    </div>
}

export default Order