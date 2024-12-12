import ReactDOM from "react-dom/client"
import React from "react"
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Topics from "./components/Topics.jsx"
import Navbar from "./components/Navbar.jsx"

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path : "/Topics",
    element : <Topics/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
