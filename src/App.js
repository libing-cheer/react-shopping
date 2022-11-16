//
// function App() {
//     return <div className="App">
//         <Home/>
//     </div>;
// }
//
// export default App;
import {Routes, Route} from 'react-router-dom'
import Home from './views/home/Home'

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </div>
    )
}

export default App