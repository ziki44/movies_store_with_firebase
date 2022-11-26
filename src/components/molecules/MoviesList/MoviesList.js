import React from "react";
import Button from "../../atoms/Button/Button.js";
import styled from "styled-components";

const MoviesList = ({movies, handleMovieDelete}) => {
    return (
        <ul>
            {movies.map(movie => {
                return (
                    <li key={movie.id}>
                        <span>{movie.title}</span>
                        <Button 
                            handleMovieDelete={() => handleMovieDelete(movie.id)}
                        >
                            X
                        </Button>
                        <p>{movie.description}</p>
                        <IMG src={movie.poster} alt="Movie poster"></IMG>                       
                        <p>{movie.description}</p>
                    </li>
                )
            })}
        </ul>
    )
}

const IMG = styled.img`
    height: 200px;
    width: 150px;
`

export default MoviesList;