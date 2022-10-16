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
import Booked from "./pages/Booked";
import Activities from "./pages/Activities";
import VideoCarousel from "./components/VideoCarousel";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
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
        path: "/pricing",
        element: <Plan />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
    ],

  },{
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/confirm",
    element: <Booked />,
  },
  {
    path: "/test",
    element: <VideoCarousel />,
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