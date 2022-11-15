import React from 'react'
import './index.scss'
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from '../../components/Docker'

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className='wrapper'>
                    <StaticPart/>
                    <Nearby/>
                </div>
                <Docker/>
            </div>
        )
    }
}

export default Home