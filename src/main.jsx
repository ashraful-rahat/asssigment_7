import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/root/Root';
import Error from './component/error/Error';
import Home from './component/home/Home';
import Dashboard from './component/dashborad/Dashboard';
import BookDetails from './component/bookdetail/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'books/:bookId',
        element:<BookDetails></BookDetails>,
        loader:()=> fetch('/booksData.json')
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
