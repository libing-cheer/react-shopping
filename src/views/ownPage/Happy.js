function Happy(props) {
    const {data} = props
    return (
        <div className="happy">
            <div className="happy__header">
                <div className="happy__header__title">天猫双十一狂欢季</div>
                <div className="happy__header__activity">每满300减50</div>
            </div>
            <div className="happy__content">
                <div className="happy__content__item">
                    <img
                        v-if={data?.mainImageOne}
                        className="happy__content__item__img"
                        src={data?.mainImageOne}
                        alt=""
                    />
                    <span className="happy__content__item__text">主会场</span>
                </div>
                <div className="happy__content__item">
                    <img
                        v-if={data?.mainImageTwo}
                        className="happy__content__item__img"
                        src={data?.mainImageTwo}
                        alt=""
                    />
                    <span className="happy__content__item__text">10亿红包</span>
                </div>
                <div className="happy__content__item">
                    <img
                        v-if={data?.mainImageThree}
                        className="happy__content__item__img"
                        src={data?.mainImageThree}
                        alt=""
                    />
                    <span className="happy__content__item__text">满减不封顶</span>
                </div>
                <div className="happy__content__item">
                    <img
                        v-if={data?.mainImageFour}
                        className="happy__content__item__img"
                        src={data?.mainImageFour}
                        alt=""
                    />
                    <span className="happy__content__item__text">我的双十一</span>
                </div>
            </div>
        </div>
    )
}

export default Happy