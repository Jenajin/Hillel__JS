import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import { Layout } from './Components/appLayout/Layout'
import { HomePage } from './Components/pageViews/HomePage'
import { AlbumsPage } from './Components/pageViews/AlbumsPage/AlbumsPage'

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json()
}


const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    loader: fetchUsers,
    children: [
      {
        index: true,
        Component: HomePage,
      },

      // {
      //   path: 'albums',
      //   Component: AlbumsPage,
      // },

      {
        path: '/:id',
        Component: AlbumsPage,
      }
    ]
  }
])



function App() {
  return (

    <div className='container'>
      <RouterProvider router={routes} />
    </div>

  )
}

export default App
