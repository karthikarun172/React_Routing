import React from 'react'
import { useParams } from 'react-router'


function Profile() {

    let { name } = useParams()
    console.log(name);


    return (
        <div>
            Profile - {name}
        </div>
    )
}

export default Profile