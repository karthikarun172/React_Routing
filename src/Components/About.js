import React from 'react'
import { useNavigate } from 'react-router'

function About() {

    let navigate = useNavigate()
    console.log("Ds");
    return (
        <div>
            About
            <button onClick={() => navigate("/profile")} >to Profile</button>
            <button onClick={() => navigate("/")} > to Home</button>
        </div >

    )
}

export default About