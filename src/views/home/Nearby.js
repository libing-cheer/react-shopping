import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {get} from "../../utils/request";
import ShopInfo from '../../components/ShopInfo'


function Nearby() {

    const [data, setData] = useState({result: []})

    useEffect(() => {
        const getShopList = async () => {
            const res = await get(`/api/list`);
            if (res?.status && res.result) {
                setData(res)
            }
        }
        getShopList()
    }, [])
    return <div className='nearby'>
        <h3 className="nearby__title">附近店铺</h3>
        {
            data.result.map(item => {
                return (
                    <div key={item.id}>
                        <Link to={'/shop/' + item.id}>
                            <ShopInfo item={item} hideBorder={false}/>
                        </Link>
                    </div>
                )
            })
        }

    </div>
}

export default Nearby