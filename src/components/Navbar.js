import { Link } from 'react-router-dom';

export default function Navbar({ user, setUser }) {
    const logout = () => {
        setUser({})
        localStorage.removeItem("token")
    }
    return (
        <ul>
            <li>Home</li>
            <li>Login</li>
            <li>Register</li>
        </ul>
    )
}