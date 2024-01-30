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
import Cart from './components/Cart/Cart.jsx'
import { CartProvider } from './hooks/ContextProvider.jsx'
import About from './components/About/About.jsx'
import ErrorPage from './components/Error/ErrorPage.jsx'


const Router = () => {

    const router = createBrowserRouter([
        {
          path: '/',
          element: (
            <CartProvider>
              <App />
            </CartProvider>
          ),
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
                  element: <Under50 />,
                  children: [
                    {
                      path: ':id',
                      element: <Under30 />
                    }
                  ]
                }, {
                  path: 'under100',
                  element: <Under100 />,
                  children: [
                    {
                      path: ':id',
                      element: <Under30 />
                    }
                  ]
                },          
              ]
            },
            {
              path: 'cart',
              element: <Cart  />
            }, 
            {
              path: 'about',
              element: <About />
            },
          ],
          errorElement: <ErrorPage />
          
        }
    ])
    return (
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    )
}

export default Router;
