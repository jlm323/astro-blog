

import { useEffect, useRef, useState } from "react";

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
        <div>
            <h1>Blog</h1>

            <ul>
                {blog.map(b => 
                    <li key={b._id}> {b.notes}</li>
                )}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" ref={notesRef} /><br /><br />
                <button>Post Blog</button>
            </form>
        </div>
    );
}

export default Blog ;