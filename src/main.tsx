import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ProductsPage from './pages/products/products.tsx'
import AboutHeadphone1 from './pages/aboutheadphone1/abouthd1.tsx'
import {  Context  } from './context/index.tsx'
import CheckOut from './pages/checkout/checkout.tsx'
import Headphones from './pages/headphones/headphones.tsx'
import Speakers from './pages/speakers/speakers.tsx'
import Earphones from './pages/earphones/earphones.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path:'/products',
        element:<ProductsPage />
    },
    {
        path:"/products/:id",
        element:<AboutHeadphone1 />
    },
    {
        path:"/checkout",
        element:<CheckOut />
    },
    {
        path:"headphones",
        element: <Headphones />
    },
    {
        path: "speakers",
        element: <Speakers/>
    },
    {
        path: "earphones",
        element: <Earphones />
    }
])

createRoot(document.getElementById('root')!).render(
    <Context>
        <RouterProvider router={router}/>
    </Context>
)
