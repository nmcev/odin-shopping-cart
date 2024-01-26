import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import Under30 from './components/Products/under30/Under30.jsx'
import MainProductsPage from './components/Products/MainProductsPage.jsx'
import AllProducts from './components/Products/allProducts/AllProducts.jsx'
import Under50 from './components/Products/under50/Under50.jsx'
import Under100 from './components/Products/under100/Under100.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'products',
        element: <MainProductsPage />,
        children: [
          { 
            path: '',
            element: <AllProducts />

          },
          {
            path: 'under30',
            element: <Under30 />,
            children: [
              {
                path: ':id',
                element: <Under30 />
              }
            ]
          }, {
            path: 'under50',
            element: <Under50 />
          }, {
            path: 'under100',
            element: <Under100 />
          }, {
            path: 'all',
            element: <AllProducts />
          },
          {
            path: 'cart',
            element: <h1>Cart</h1>
          },
          
        ]
      },
    ]
    
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ChakraProvider>
      <RouterProvider router={router} />
      </ChakraProvider>

  </React.StrictMode>,
)
