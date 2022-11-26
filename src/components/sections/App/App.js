import React, {useState, useEffect} from 'react';
import './App.css';
import AddMoviesForm from '../../molecules/AddMoviesForm/AddMoviesForm.js';
import MoviesList from '../../molecules/MoviesList/MoviesList.js';
import WelcomeMessage from '../../atoms/WelcomeMessage/WelcomeMessage.js';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  const getMovies = () => {
    fetch("http://localhost:7009/movies")
    .then(res => res.json())
    .then(data => setMovies(data.movies)) 
    .catch((e) => console.log(e.message))
  } 

  useEffect(() => {
    getMovies();
  }, []);

  const handleMovieDelete = (id) => {
    fetch(`http://localhost:7009/movies/${id}`, {
      method: "DELETE"
    })
    .then(() => getMovies())
  } 

  const clearState = () => {
    console.log("ClearState")
      setTitle('');
      setDescription('');
      setYear('');
      setPoster('')
  }

  const handleInputChange = (event) => {
      if (event.target.name === "title") {
          setTitle(event.target.value)
          console.log(title)            
      }
      if (event.target.name === "description") {
          setDescription(event.target.value)
          console.log(description)
      }
      if (event.target.name === "year") {
          setYear(event.target.value)
          console.log(year)
      }
      if (event.target.name === "poster") {
          setPoster(event.target.value)
          console.log(poster)
      }
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      const newMovie = {
          id: uuidv4(),
          title: title,
          description: description,
          year: year,
          poster: poster
      }

      fetch('http://localhost:7009/movies', {
          method: "POST",
          headers: {
              "Content-Type": 'application/json'
          },
          body: JSON.stringify(newMovie)
      })
      .then(() => getMovies())
      .then(() => clearState())
      .catch(e => console.log(e.message))


  }


  return (
      <Wrapper>
        <WelcomeMessage>
          Movies Store
        </WelcomeMessage>
        <AddMoviesForm getMovies={getMovies} handleInputChange={handleInputChange} handleSubmit={handleSubmit} title={title} description={description} year={year} poster={poster}/>
        <MoviesList movies={movies} handleMovieDelete={handleMovieDelete}/>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`

export default App;
