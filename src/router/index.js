import Home from '../views/home/Home'
import CartList from '../views/cartList/CartList'
import OrderList from '../views/orderList/OrderList'
import OwnPage from '../views/ownPage/OwnPage'
import OrderConfirmation from '../views/orderConfirmation/OrderConfirmation'
import Shop from '../views/shop/Shop'
import Login from '../views/login/Login'
import Register from '../views/register/Register'

const router = [
    {
        path: '/',
        element: <Home/>,
        exact: true
    },
    {
        path: '/cartList',
        element: <CartList/>,
        exact: true
    },
    {
        path: '/orderList',
        element: <OrderList />,
        exact: true
    },
    {
        path: '/ownPage',
        element: <OwnPage />,
        exact: true
    },
    {
        path: '/orderConfirmation/:id',
        element: <OrderConfirmation/>,
        exact: true
    },
    {
        path: '/shop/:id',
        element: <Shop />,
        exact: true
    },
    {
        path: '/login',
        element: <Login />,
        exact: true,
        beforeEnter: (to, from, next) => {
            const isLogin = localStorage.isLogin
            isLogin ? next({name: 'Home'}) : next()
        }
    },
    {
        path: '/register',
        element: <Register />,
        exact: true,
        beforeEnter: (to, from, next) => {
            const isLogin = localStorage.isLogin
            isLogin ? next({name: 'Home'}) : next()
        }
    }
]

export default router