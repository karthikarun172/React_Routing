import React from 'react'
import { useLocation, useNavigate } from 'react-router'


function Home() {

    let navigate = useNavigate()


    return (
        <div>
            Home
            <button onClick={() => navigate("/about")} >to about</button>


        </div>
    )
}

export default Home