import { useState } from "react";
import { Link } from "react-router-dom";
import SignInfo from "../pages/SignInfo";

export default function SignCard({ signs }) {

    let [toggle, setToggle] = useState(false);
    return (
        <div className="zodiac-sign">
           <div className="get-info" onClick={() => setToggle(!toggle)}>
                {signs.sign}
           </div>
           {toggle && <SignInfo signs={signs}/>}
            
            
        </div>
    )
}