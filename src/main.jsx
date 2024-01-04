import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import {
  RoadmapPage,
  HomePage,
  Visualizations,
  Team,
  Contribute,
  Trending
} from './Pages'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App />}>
      <Route path='' element={<HomePage />} />
      <Route path='RoadMap' element={<RoadmapPage />} />
      <Route path='Team' element={<Team />} />
      <Route path='Visualizations' element={<Visualizations />} />
      <Route path='Contribute' element={<Contribute />} />
      <Route path='Trending' element={<Trending/>}/>


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
