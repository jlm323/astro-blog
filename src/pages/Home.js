import SignCard from "../components/SignCard";
import signs from "../data/signs";
import { FaCircle } from 'react-icons/fa';


export default function Home() {

    return (
        <div className="content" id="home">
            <h1>Astro Blog</h1>

            <img src="./stars.jpg" alt="header" className="header" />

            <div className="all-signs">
               
                    {signs.map((s, i) => {
                        return (
                            <SignCard key={i} signs={s} />
                        )
                    })}
               
            </div>
            <h3 className="home-pg">The Twelve Signs</h3>
                <div className="mini-container">
                    {signs.map((s, i) => {
                        return (
                            <div key={i} signs={s} className="mini-info">
                                <span className="sign-label">{s.sign}</span><br/>
                                <span className="element-label">{s.element} </span>
                                <FaCircle className="circle" />
                                <span className="mode-label"> {s.modality}</span><br/>
                                <span className="mini-desc">{s.desc}</span><br/>
                            </div>
                        )
                    })}  
                </div>
        </div>
    )
    
}