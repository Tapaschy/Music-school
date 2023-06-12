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
import MyClasses from '../pages/users/instructor/MyClasses'
import UpdateClass from '../pages/users/instructor/UpdateClass'
import ManageClasses from '../pages/users/admin/ManageClasses'
import Errorpage from '../pages/errorpage/Errorpage'
import MyselectedClasses from '../pages/users/student/MyselectedClasses'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'
import AdminHome from '../pages/users/admin/AdminHome'
import InstructorHome from '../pages/users/instructor/InstructorHome'
import StudentHome from '../pages/users/student/StudentHome'
import EnrolledClasses from '../pages/users/student/EnrolledClasses'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<Errorpage></Errorpage>,
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
        {
            path: 'manageuser',
            element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
          },
        {
            path: 'manageclasses',
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
        {
            path: 'adminhome',
            element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
          },
        {
            path: 'addclass',
            element: <AddClasses></AddClasses>
          },
        {
            path: 'instuctorhome',
            element: <InstructorHome></InstructorHome>
          },
        {
            path: 'studenthome',
            element: <StudentHome></StudentHome>
          },
        {
            path: 'enrolled',
            element: <EnrolledClasses></EnrolledClasses>
          },
        {
            path: 'myclass',
            element: <MyClasses></MyClasses>
          },
        {
            path: 'updateclass/:id',
            element: <UpdateClass></UpdateClass>,
            loader:({params})=>fetch(`https://assignment-12-server-olive.vercel.app/classes/updateclass/${params.id}`)
          },
          {
            path: 'selectedclass',
            element: <MyselectedClasses></MyselectedClasses>
          },
    ]
  },
])
