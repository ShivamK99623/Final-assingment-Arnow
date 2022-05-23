import React from 'react'
import { Link,useNavigate ,useLocation} from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate()
    const location=useLocation()

  return (
      <>
    <div>
           
     { ((location.pathname==="/")) &&<Link style={{margin:"3px 6px"}} to="/Home">Login</Link>}
    <Link to="/Home">Home</Link>
    </div>
    </>
  )
}

export default Navbar