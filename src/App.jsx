import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from "./components/HomePage"
import UserPage from './components/MyPage'
import { LoginContext } from './context'

import "./App.css"

function App() {
  const [num] = React.useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <h1>NavBar failed to load!</h1>,
      children: [
        {
          index: true,
          element: <h1>Default HomePage</h1>,
        },
        {
          path: "documents",
          element: <h1>DOCUMENTS PAGE!!!</h1>
        },
        {
          path: "orders",
          element: <h1>ORDERS PAGE!!!</h1>
        },
      ]
    },
    {
      path: "/myPage",
      element: <UserPage />,
      children:[
        {
          index: true,
          element: <h1>Yeah</h1>
        },
        {
          path: "home",
          element: <h1>Home</h1>
        },
        {
          path: "documents",
          element: <h1>Documents</h1>
        },
        {
          path: "orders",
          element: <h1>Orders</h1>
        }
      ]
    }
  ])

  if (num < 0) {
    return <h1>Bruh</h1>
  }

  return (
    <>
      <LoginContext.Provider value={true}>
        <RouterProvider router={router} />
      </LoginContext.Provider>
      
    </>
  )
}

export default App
