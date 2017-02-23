import React from "react";


export default ({user}) => user ? <div className="user-block">
    <h1>{user.name}</h1>
    <img src={user.image} alt="user"/>
  </div> :
  <p>Loading...</p>;