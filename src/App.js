import { useState, useEffect } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Blog from "./pages/Blog";

import userService from './services/userService'

let initialRender = true

function App() {

    const { signName } = useParams();

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [signs, setSigns] = useState()

    const options = {
    method: 'POST',
    url: `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signName}`,
    params: {sign: 'aquarius', day: 'today'},
    headers: {
        'X-RapidAPI-Key': 'b15b9401acmsh970d1bbc08b4831p1707d5jsnfef8665a116d',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }
    };

    const handleFetch = () => {
        axios.request(options).then(function (response) {
        console.log(response.data);
        setSigns(response.data)
    }).catch(function (error) {
        console.error(error);
    });
    }

    const currentUserInfo = async () => {
        try {

            const info = await userService.info()

            const { username, email } = info.data
            setUser({ username, email })
            
        } catch (error) {

            let message = error.response.data.error

            if (message.includes('expire')) {
                localStorage.removeItem('token')
            }
            
            console.log(message)

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {

        let token = localStorage.getItem('token')

        if (initialRender) {
            if (token) {
                currentUserInfo(token)
                initialRender = false
            } else {
                setIsLoading(false)
            }
        }

    }, [])

    let routes;
    let loggedIn = user.username

    if (!isLoading) {
        if (loggedIn) {
            routes = (
                <Routes>
                    <Route path="/" element={<Home signs={signs} handleFetch={handleFetch} />} />
                    <Route 
                        path="/profile" 
                        element={
                            <Profile 
                                username={user.username} 
                                email={user.email} 
                            />
                        } 
                    />
                    <Route path='/blog' element={<Blog user={user.username} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            )
        } else {
            routes = (
                <Routes>
                    <Route path="/" element={<Home signs={signs} handleFetch={handleFetch} />} />
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/register" element={<Register setUser={setUser} />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            )
        }
    }

    return ( 
        <div className="app">
            <Navbar user={user.username} setUser={setUser} />
            {routes}
        </div>
     );
}

export default App;