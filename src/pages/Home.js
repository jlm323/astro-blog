
import { useEffect } from "react"

export default function Home({signs, handleFetch}) {

    useEffect(() => {
        handleFetch()
    }, [])

    const loaded = () => {
        return (
            <div>
                <h1>Astro Blog</h1>
                {/* <div className="all-signs">
                    {signs?.map((sign) => {
                        return (
                            <div key={sign.id} className="sign-name">
                                {sign.name}
                            </div>
                        )
                    })}
                </div> */}
            </div>
            
        )
    }

    const loading = () => {
        return (
            <div>
                <h1>Astro Blog</h1>
                <h2>Loading...</h2>
            </div>
        )
    }

    return signs ? loaded() : loading()
    
}