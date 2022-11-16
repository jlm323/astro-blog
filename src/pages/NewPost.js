// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import blogService from './services/blogService';

export default function NewPost({user}) {

    // let [newPost, setNewPost] = useState();

    // const navigate = useNavigate();
    // const notesRef = useRef();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     let token = localStorage.getItem("token")

    //     let newBlog = {
    //         notes: notesRef.current.value,
    //         user
    //     }

    //     try {
    //         const response = await blogService.add(newBlog)
    //         setBlog([...blog, response.data.blog])
    //         notesRef.current.value = ''
    //         setNewPost();
    //         navigate('/blog');
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div className="content" id="new-post">
            <h1>New Post</h1>
            <form className="newForm">
                <label htmlFor="title" className="titleLabel">Title: </label><br/>
                <input type="text" placeholder="Title" className="writeTitle" /><br /><br />
                <label htmlFor="post" className="postLabel">Blog Post: </label><br/>
                <textarea placeholder="Write your blog post here..." type="text" className="write"></textarea>
                <br/><br/>
                <button className="submitPost">Post</button>
            </form>
        </div>
    )
}