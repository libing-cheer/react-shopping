import './index.scss'

const handleBackClick = () => {
    window.history.back();
};

function TopArea() {
    return (
        <div className='top'>
            <div className='top__header'>
                <div
                    className="iconfont top__header__back"
                    onClick={handleBackClick}
                >
                    &#xe6db;
                </div>
                确认订单
            </div>
            <div className="top__receiver">
                <div className="top__receiver__title">收货地址</div>
                <div className="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
                <div className="top__receiver__info">
                    <span className="top__receiver__info__name">瑶妹（先生）</span>
                    <span className="top__receiver__info__name">18340009900</span>
                </div>
                <div className="iconfont top__receiver__icon">&#xe6db;</div>
            </div>
        </div>
    )
}

export default TopArea;
