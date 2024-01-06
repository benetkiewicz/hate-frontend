import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <ul className="nav">
                <li className="nav"><Link to="/hate-frontend/">Home</Link></li>
                <li className="nav"><Link to="/hate-frontend/posts">Posts</Link></li>
                <li className="nav"><a href="/">Author</a></li>
            </ul>
        </nav>
    )
}

export default Nav;