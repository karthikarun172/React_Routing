import React from 'react'
import { useParams } from 'react-router'

function Profile() {

    let { id } = useParams()
    console.log(id);


    return (
        <div>Profile
            {id}
        </div>
    )
}

export default Profile