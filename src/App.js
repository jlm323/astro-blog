import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
 import axios from "axios";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import NewPost from "./pages/NewPost";

import userService from './services/userService';
import SignInfo from "./pages/SignInfo";
import signs from "./data/signs";
 

let initialRender = true

function App() {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    

    const currentUserInfo = async (token) => {

    try {
        const info = await userService.info()
       console.log(info);
       const { username, email } = info.data;
       setUser({ username, email });
     } catch (error) {
       let message = error.response.data.error;

       if (message.includes("expire")) {
         localStorage.removeItem("token");
       }

       console.log(message);
     } finally {
       setIsLoading(false);
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
                    <Route path="/" element={<Home 
                        signs={signs} 
                         />} />
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
                    <Route path='/newpost' element={<NewPost user={user.username} />} />
                    <Route path='/signinfo' element={<SignInfo signs={signs} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            )
        } else {
            routes = (
                <Routes>
                    <Route path="/" element={<Home 
                        signs={signs}  
                    />} />
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/register" element={<Register setUser={setUser} />} />
                    <Route path='/signinfo' element={<SignInfo signs={signs} />} />
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