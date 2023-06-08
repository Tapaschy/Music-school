import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Main from '../layouts/Main'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Dashboard from '../layouts/Dashboard'
import ManageUser from '../pages/users/admin/ManageUser'
import AddClasses from '../pages/users/instructor/AddClasses'
import AllClasses from '../pages/Classes/AllClasses'
import Allinstructor from '../pages/Allinstructor/Allinstructor'

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
      {
        path: '/classes',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/instructors',
        element: <Allinstructor></Allinstructor>
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children:[
        {
            path: 'manageuser',
            element: <ManageUser></ManageUser>
          },
        {
            path: 'addclass',
            element: <AddClasses></AddClasses>
          },
    ]
  },
])
