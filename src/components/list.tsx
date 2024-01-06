import { Link } from "react-router-dom";

const List = () => {
    return (<ul>
        <li><Link to="/hate-frontend/posts/test-error">Test Error</Link></li>
        <li><Link to="/hate-frontend/posts/hello-world">Hello World!</Link></li>
    </ul>);
}

export default List;