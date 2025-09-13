
// App.jsx

import { useState } from 'react'

import './App.css'

import All_Component from './component/All_Component'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Turf_Finder_Project_Details from './pages/Turf_Finder_Project_Details'
import Chatting_App_Using_Firebase_Project_Details from './pages/Chatting_App_Using_Firebase_Project_Details'
import Airline_Reservation_System_Project_Details from './pages/Airline_Reservation_System_Project_Details'

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <><All_Component /></>
    },
    {
      path : "/project-turf-finder-details",
      element : <><Turf_Finder_Project_Details /></>
    },
    {
      path : "/project-chatting-app-using-firebase-details",
      element : <><Chatting_App_Using_Firebase_Project_Details /></>
    },
    {
      path : "/project-airline-reservation-system-details",
      element : <><Airline_Reservation_System_Project_Details /></>
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
