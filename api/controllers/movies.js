import { getAllMovies, getItem, add, remove, update } from "../models/movies.js";

export const getMovies = () => {
    return getAllMovies();
}

export const getMovie = id => {
    return getItem(id)
      .then(foundMovie => {
        return foundMovie ? foundMovie : {}
      })
  }
  
  export const saveMovie = (movie) => {
    if(typeof movie.id === 'number') {
        movie.id = movie.id.toString()
    }
    console.log("saveMovie")
    return add(movie)
  }
  
  export const removeMovie = (idToRemove) => {
    return getItem(idToRemove)
      .then(() => {
        remove(idToRemove)
      })
      .catch(() => {
        return 'Cannot get movie with this id!'
      })
  }
  
  export const updateMovie = (movieToUpdate) => {
  
    return getItem(movieToUpdate.id)
      .then((movie) => {
        // Metoda PUT dziala tak, ze jak element jest, to go modyfikuje, a jak nie ma to go tworzy
  
        return movie ? update(movieToUpdate) : add(movieToUpdate)
      })
  }