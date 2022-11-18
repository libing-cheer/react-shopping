import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {get} from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import Content from './Content';
import './index.scss'

function Shop() {
    const [data, setData] = useState({})
    const loaction = useLocation()
    const id = loaction.pathname.split('/')[2]
    useEffect(() => {
        const getItemData = async () => {
            const res = await get(`/api/shop/${id}`)
            if (res?.errno && res.data) {
                setData(res.data)
            }
        }
        getItemData()
    }, [])
    return <div className='wrapper__shop'>
        <div className='search__shop'>
            <div className='search__shop__back iconfont'>&#xe6db;</div>
            <div className='search__shop__content'>
                <span className="search__shop__content__icon iconfont">&#xeb86;</span>
                <input className="search__shop__content__input" placeholder="请输入商品名称"/>
            </div>
        </div>
        <ShopInfo item={data} hideBorder={true}/>
        <Content/>
    </div>
}

export default Shop

