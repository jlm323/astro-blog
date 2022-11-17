import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {

    const logout = () => {
        setUser({})
        localStorage.removeItem("token")
    }

    if (user) {
        return (
            <ul className="navbar">
                <li>
                    <Link to="/">
                    <img src="./site-logo.png" alt="Astro Blog" id="site-logo" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="welcome-msg">
                   Logged In: {user}
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li onClick={logout}>
                    <Link>Logout</Link>
                </li>
            </ul>
        )
    } else {
        return (
            <ul className="navbar">
                <li>
                    <Link to="/">
                    <img src="./site-logo.png" alt="Astro Blog" id="site-logo"/>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        )
    }
}

export default Navbar;