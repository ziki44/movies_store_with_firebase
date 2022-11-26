import React from "react";

const Input = ({type, name, value, handleInputChange}) => {
    return (
        <input type={type} name={name} onChange={handleInputChange}></input>
    )
}

export default Input;