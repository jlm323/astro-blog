

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import blogService from '../services/blogService'

function Blog ({ user }) {

    const [blog, setBlog] = useState([])

    let notesRef = useRef()

    const getAllBlogs = async () => {

        try {
            
            const response = await blogService.index()

            setBlog(response.data.blog)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllBlogs()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        let newBlog = {
            notes: notesRef.current.value,
            user
        }

        try {

            const response = await blogService.add(newBlog)

            setBlog([...blog, response.data.blog])
            notesRef.current.value = ''

        } catch (error) {
            console.log(error)
        }

        
    }

    return ( 
        <div className="content" id="blog">
            <h1>Blog</h1>

            <ul id="blog-index">
                {blog.map((b) => {
                    return (
                        <li key={b._id}> {b.notes}</li>
                    )
                }
                )}
            </ul>

            {/* <form onSubmit={handleSubmit}>
                <input type="text" ref={notesRef} /><br /><br />
                <button>Post Blog</button>
            </form> */}

            <Link to="/newpost">New Post</Link>
        </div>
    );
}

export default Blog ;