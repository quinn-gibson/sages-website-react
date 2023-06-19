import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer>
        <p className="book-footer">
          <Link to="booking">Book Now</Link>
        </p>
        <div id="social-media"></div>
        <p>©All Rights Reserved Sage Nieve Beauty</p>
      </footer>
    </>
  )
}

export default Footer
