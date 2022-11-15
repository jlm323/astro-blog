function Profile({ username, email }) {
    return ( 
        <div className="content" id="profile">
            <h1>Profile</h1>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
        
     );
}

export default Profile;