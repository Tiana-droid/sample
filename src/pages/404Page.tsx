import "../styles/404Page.css"
import { Link } from "react-router-dom"

const Page404 = () => {
  return (
    <div className="page404">
      <h1>404</h1>
      <p>Unfortunately, the page you are looking for cannot be found</p>
      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  )
}

export default Page404
