import React, {useState, useEffect} from 'react'
import {get} from '../../utils/request'
import '../../style/iconfont.scss'

function StaticPart() {
    const [data, setData] = useState({result: []})
    useEffect(() => {
        const getStaticPartList = async () => {
            const res = await get('/api/staticList')
            if (res?.status && res?.result) {
                setData(res)
            }
        }
        getStaticPartList()
    }, [])

    return (
        <div>
            <div className="position">北京理工大学国防科技园2号楼10层</div>
            <div className="search">
                <span className="search__icon iconfont">&#xeb86;</span>
                <span className="search__text">山姆会员商店优惠商品</span>
            </div>
            <div className="banner">
                <img
                    className="banner__img"
                    src="https://pic.ntimg.cn/file/20221005/32998011_120000395105_2.jpg"
                    alt=""
                />
            </div>
            <div className="icons">
                {
                    data.result.map(item => {
                        return (
                            <div className="icons__item"
                                 key={item.id}>
                                <img v-show={item.imgUrl}
                                     className="icons__item__img"
                                     src={item.imgUrl}
                                     alt=""/>
                                <p className="icons__item__desc">{item?.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="gap"></div>
        </div>
    )

}

export default StaticPart