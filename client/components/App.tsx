import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />

      <div id="page-content">
        <Outlet />
      </div>

      <Footer />
    </>
  )
}

export default App
