import React from 'react'

const Profile = props => {

return(
<div>
    <figure><img src="https://images-na.ssl-images-amazon.com/images/I/41Jf0GcKyqL._AC_SX425_.jpg" alt="sample img"></img></figure>
    <h1>Soy el perfil de p*ta madre, Hola :{props.loggedInUser.username}</h1>
</div>
)}


export default Profile