import * as React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { HomePage } from './Components/pages/HomePage/HomePage'
import { TodoList } from "./Components/pages/TodoList/TodoList";
import { Weather } from "./Components/pages/Weather/Weather";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },

      {
        path: "/todos",
        Component: TodoList,
      },

      {
        path: "/weahter",
        Component: Weather,
      },
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
