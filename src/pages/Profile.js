function Profile({ username, email }) {
    return ( 
        <div className="content" id="profile">
            <h1>Profile</h1>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Edit profile</p>

        <form action="#">
        <label htmlFor="allSigns">Sign:</label>
            <select name="signs" id="sign">
            <option value="select">Choose your sign</option>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="capricorn">Capricorn</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
            </select>
        </form>
            
        </div>
        
     );
}

export default Profile;