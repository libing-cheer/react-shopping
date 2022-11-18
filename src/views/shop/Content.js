import {useState, useEffect} from 'react'
import useMergeState from '../../utils/useMergeState'
import classnames from 'classnames'

function Content() {
    const [data, setData] = useMergeState({
        list: [],
        categories: [
            {name: "全部商品", tab: "all"},
            {name: "秒杀", tab: "seckill"},
            {name: "新鲜水果", tab: "fruit"},
        ]
    })
    const [currentTab, setCurrentTab] = useState('all')

    const handleTabClick = (tab) => {
        setCurrentTab(tab)
    }

    useEffect(() => {}, [])
    return <div className='content'>
        <div className='category'>
            {
                data.categories.map(item => {
                    return <div
                        className={classnames(
                            'category__item',
                            {'category__item--active': (currentTab === item.tab)}
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
        <div className='products'>
            <div className='products__item'>
                <img className='products__item__img'/>
            </div>
        </div>
    </div>
}

export default Content