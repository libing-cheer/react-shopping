import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import useMergeState from '../../utils/useMergeState'
import {get} from "../../utils/request";
import classnames from 'classnames'
import styled from 'styled-components'

const Products = styled.div`
  flex: 1;
  overflow-y: scroll;
`

function Content(props) {
    const {shopName} = props
    const location = useLocation()
    const [data, setData] = useMergeState({
        list: [],
        categories: [
            {name: "全部商品", tab: "all"},
            {name: "秒杀", tab: "seckill"},
            {name: "新鲜水果", tab: "fruit"},
        ],
        currentTab: 'all',
        shopId: null
    })

    const handleTabClick = (tab) => {
        setData({currentTab: tab})
    }

    useEffect(() => {
        setData({shopId: location.pathname.split('/')[2]})
        const getContentData = async () => {
            const res = await get(`/api/shop/${data.shopId}/products`, {
                tab: data.currentTab
            })
            if (res?.errno && res?.data) {
                setData({list: res.data.filter(item => item.tab === data.currentTab)})
            }
        }
        getContentData()
    }, [data.currentTab])
    return <div className='content'>
        <div className='category'>
            {
                data.categories.map(item => {
                    return <div
                        className={classnames(
                            'category__item',
                            {'category__item--active': (data.currentTab === item.tab)}
                        )
                        }
                        key={item.tab}
                        onClick={() => handleTabClick(item.tab)}
                    >
                        {item.name}
                    </div>
                })
            }
        </div>
        <Products>
            {
                data.list.map(item => {
                    return <div className='products__item' key={item._id}>
                        <img
                            className='products__item__img'
                            src={item.imgUrl}
                        />
                        <div className="products__item__detail">
                            <h4 className="products__item__title">{item.name}</h4>
                            <p className="products__item__sales">月售{item.sales}份</p>
                            <p className="products__item__price">
                                <span className="products__item__price__yen">&yen;</span>{item.prices}
                                <span className="products__item__price__origin">&yen;{item.oldPrices}</span>
                            </p>
                        </div>
                        <div className='products__number'>
                            <span className='products__number__minus iconfont'>&#xe677;</span>
                            2
                            <span className='products__number__plus iconfont'>&#xe675;</span>
                        </div>
                    </div>
                })
            }
        </Products>
    </div>
}

export default Content