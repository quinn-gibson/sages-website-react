import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Booking from './components/Booking'
import Services from './components/Services'
import Policy from './components/Policy'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="services" element={<Services />} />
        <Route path="policy" element={<Policy />} />
      </Route>
    </>
  )
)

export default router
