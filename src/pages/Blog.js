import { FaPen } from 'react-icons/fa';
import { useEffect, useState, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import blogService from '../services/blogService'
import NewPost from './NewPost';
import articles from '../data/articles';

function Blog ({ user }) {

    const [blog, setBlog] = useState([])
    const blogRef = useRef();
    const navigate = useNavigate();

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
            title: blogRef.current.value,
            content: blogRef.current.value,
            user
        }

        try {
            const response = await blogService.add(newBlog)
            setBlog([...blog, response.data.blog])
            navigate('/blog')
        } catch (error) {
            console.log(error)
        }
    }


    return ( 
        <div className="content" id="blog">
            <h1>Blog</h1>
            <div className="link-container" >
                <Link to="/newpost">
                    <span className="new-post-link">
                        New Post
                        <FaPen className='write-icon' /> 
                    </span>
                </Link>
            </div>


            <ul id="blog-index">
                {articles.map(a => {
                    return (
                        <div key={a._id} className="one-article">
                            {a.image}<br/>
                            {a.title}<br/>
                            {a.author}<br/>
                            {a.time}<br/>
                            {a.content}
                        </div>
                    )
                })}
            </ul>            

        </div>
    );
}

export default Blog ;



/*
{blog.map((b) => {
                    return (
                        <li key={b._id}> {b.title}<br/>
                        {b.content}</li>
                    )
                }
                )}

*/