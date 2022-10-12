import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plan from './pages/Plan';
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import './styles.scss'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/plan",
        element: <Plan />,
      },
    ],

  },{
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

  function App() {
    return (
      <div className="app">
  
        <div className="conatiner">
          <RouterProvider router={router} />
        </div>
      </div>
    );
  }

export default App;