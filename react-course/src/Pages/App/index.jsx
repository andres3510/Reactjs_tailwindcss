import {useRoutes, BrowserRouter} from "react-router-dom";
import {ShoppingCartProvider} from "../../Context/index.jsx";
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/my-account', element: <MyAccount/>},
        {path: '/my-order', element: <MyOrder/>},
        {path: '/my-orders', element: <MyOrders/>},
        {path: '/sign-In', element: <SignIn/>},
        {path: '/*', element: <NotFound/>},
    ])
}

const App = () => {

    return (
        <div>
            <ShoppingCartProvider>
                <BrowserRouter>
                    <AppRoutes/>
                    <Navbar/>
                </BrowserRouter>
            </ShoppingCartProvider>
        </div>
    )
}

export default App
