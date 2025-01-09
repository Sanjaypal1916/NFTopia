import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import GarbageX from './Pages/GarbageX';
import Login from './Pages/Login';

const Router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
  },

  {
    path:"/garbage",
    element: <GarbageX/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
<RouterProvider router={Router}/>

  </StrictMode>,
)
