import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/hate-frontend/">Home</Link></li>
            </ul>
            <ul>
                <li><Link to="/hate-frontend/posts">Posts</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;