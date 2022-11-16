import {useState, useEffect} from 'react'
import {get} from '../../utils/request'
import Header from './Header'
import Favorite from './Favorite'
import Order from './Order'
import Happy from './Happy'
import Benefit from './Benefit'
import Docker from '../../components/Docker'
import './index.scss'

function OwnPage() {
    const [data, setData] = useState({})

    useEffect(() => {
        const getOwnPageData = async () => {
            const res = await get('/api/ownPage')
            if (res?.status && res?.data) {
                setData(res.data)
            }
        }
        getOwnPageData()

    }, [])

    return (
        <div className='wrappers'>
            <Header data={data}/>
            <Favorite data={data}/>
            <Order data={data}/>
            <Happy data={data}/>
            <Benefit data={data}/>
            <Docker/>
        </div>
    )
}

export default OwnPage