import './App.scss'
import Layout from './Components/Layout/Layout'
import Content from './Components/Main/Content/Content'
import LeftNavbar from './Components/Main/LeftNavbar/LeftNavbar'

function App() {
  return (
    <Layout>

      <section className='main container'>
        <LeftNavbar />
        <Content />
      </section>

    </Layout>
  )
}

export default App
