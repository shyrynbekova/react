import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import TodosPage from './pages/TodosPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>ОШИБКА</div>,
  },
  {
    path: "/categories",
    element: <NewForm />
  },
  {
    path: "/restaurants/:id",
    element: <Details />
  },
  {
    path: "/todos",
    element: <TodosPage />
  }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

