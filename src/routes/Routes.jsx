import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Main from '../layouts/Main'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
    ],
  },
])
