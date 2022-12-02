import React from 'react';
import './index.scss';
import StaticPart from './StaticPart';
import Nearby from './Nearby'
import Docker from '../../components/Docker';
import {Navigate} from 'react-router-dom';

function Home() {
    const isLogin = localStorage.isLogin;
    return (

        <div>
            {
                isLogin &&
                <div className='wrapper'>
                    <StaticPart/>
                    <Nearby/>
                </div>
            }
            {
                !isLogin && <Navigate to={'/login'} replace/>
            }
            <Docker pageIndex={0}/>
        </div>
    )
}

export default Home