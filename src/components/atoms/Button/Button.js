import React from "react";

const Button = ({children, type="text", handleMovieDelete}) => {
    return (
        <button type={type} onClick={handleMovieDelete}>
            {children}
        </button>
    )
}

export default Button;