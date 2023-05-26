import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import { Layout } from './Components/appLayout/Layout'
import { UserForm } from './Components/pageViews/UserForm'



const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: UserForm,
      },
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
