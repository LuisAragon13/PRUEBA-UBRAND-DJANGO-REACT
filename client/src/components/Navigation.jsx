import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div>
      
      <Link to="/books">
        <h1>Books App</h1>
      </Link>
      <Link to="/books-create">Create Book</Link>
    </div>
  )
}