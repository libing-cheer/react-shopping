function Favorite() {
    return (
        <div className="favorite">
            <div className="favorite__item">
                <span className="iconfont favorite__item__icon">&#xeca7;</span>
                <span className="favorite__item__text">收藏</span>
            </div>
            <div className="favorite__item">
                <span className="iconfont favorite__item__icon">&#xe683;</span>
                <span className="favorite__item__text">订阅店铺</span>
            </div>
            <div className="favorite__item">
                <span className="iconfont favorite__item__icon">&#xe614;</span>
                <span className="favorite__item__text">足迹</span>
            </div>
            <div className="favorite__item">
                <span className="iconfont favorite__item__icon">&#xe73d;</span>
                <span className="favorite__item__text">零钱 &yen;0.00</span>
            </div>
        </div>
    )
}

export default Favorite