import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Gamelist from './routes/GamesList/Gamelist.jsx';
import Dota2Pages from './routes/Dota2/Dota2Pages.jsx';
import RainbowSixPage from './routes/RainbowSix/RainbowSixPage.jsx';
import EldenringPage from './routes/Eldenring/EldenringPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/Gameslist",
    element:<Gamelist/>
  },
  {
    path:"/Dota2Pages",
    element:<Dota2Pages/>
  },
  {
    path:"/RainbowSixPage",
    element:<RainbowSixPage/>
  },
  {
    path:"/EldenringPage",
    element:<EldenringPage/>
  },
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);