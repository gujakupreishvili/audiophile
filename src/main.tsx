import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ProductsPage from './pages/products/products.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path:'/products',
        element:<ProductsPage />
    }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
