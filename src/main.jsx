import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import CategoriesPage from './pages/Categories.jsx';
import BaseButton from './components/BaseButton.jsx';
import RestaurantCard from './components/RestaurantCard.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>ОШИБКА</div>,
  },
  {
    path: '/categories',
    element: <CategoriesPage /> 
  },
  // {
  //   path: '/basebutton',
  //   element: <BaseButton/>
  // }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

