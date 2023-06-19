import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div id="nav-bar">
      <img src="../../images/logo.jpg" alt="" className="logo" />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="policy">Policy</Link>
        </li>
        <li>
          <Link to="booking">Book Now</Link>
        </li>
      </ul>
    </div>
  )
}

//services, gallery, policy, book now

export default Nav
