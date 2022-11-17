// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import blogService from './services/blogService';

export default function NewPost({user, handleSubmit}) {



    return (
        <div className="content" id="new-post">
            <h1>New Post</h1>
            <form className="newForm" onSubmit={handleSubmit}>
                <label htmlFor="title" className="titleLabel">Title: </label><br/>
                <input type="text" placeholder="Title" className="writeTitle" /><br /><br />
                <label htmlFor="post" className="postLabel">Blog Post: </label><br/>
                <textarea placeholder="Write your blog post here..." type="text" className="write"></textarea>
                <br/><br/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}