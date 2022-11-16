function Header(props) {
    const {data} = props
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <img
                        v-show="data.avatar"
                        className="header__left__img"
                        src={data?.avatar}
                        alt=""
                    />
                </div>

                <div className="header__right">
                    <div className="header__right__name">{data?.name}</div>
                    <div className="header__right__account">
                        账号名：{data?.accountName}
                        <span className="header__right__account__qrcode iconfont">&#xe600;</span>
                    </div>
                    <div className="header__right__info">
                        <div className="header__right__info__follow">关注：{data?.follow}</div>
                        <div className="header__right__info__fans">粉丝：{data?.fans}</div>
                        <div className="header__righ__infot__friends">
                            好友：{data?.friends}
                        </div>
                    </div>
                    <div className="header__right__setting">
                        <div className="header__right__setting__icon iconfont">&#xe8b7;</div>
                        <div className="header__right__setting__text">设置</div>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="header__bottom__vip">会员中心</div>
                <div className="header__bottom__package">88积分抽红包,中奖率100%</div>
                <div className="header__bottom__quick">马上抢</div>
            </div>
        </div>
    )
}

export default Header