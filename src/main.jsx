import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Report from './pages/Report';
import Database from './pages/Database';
import EditData from './pages/EditData';
import Setting from './pages/Setting';
import EditDataUser from './pages/EditUser';
import AddUserPage from './pages/AddUser';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import ProfilUser from './pages/ProfilUser';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/add_data",
    element: <Report />,
  },
  {
    path: "/database",
    element: <Database />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/edit_data/:id",
    element: <EditData />,
  },
  {
    path: "/add_user",
    element: <AddUserPage />,
  },
  {
    path: "/edit_user/:id",
    element: <EditDataUser />,
  },
  {
    path: "/settings",
    element: <Setting />,
  },
  {
    path: "/profil",
    element: <ProfilUser />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forget_password",
    element: <ForgetPassword />,
  },
  {
    path: "/reset_password",
    element: <ResetPassword />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);