import fs from 'fs';
const fsp = fs.promises;

const MOVIES_JSON_PATH = 'api/db/movies.json';

const getJSONFile = (fileName) => {
    return fsp.readFile(fileName, 'utf8')
    .then(data => JSON.parse(data))
}

const saveToJSONFile = (fileName, objectToSave) => {
    return fsp.writeFile(fileName, JSON.stringify(objectToSave), 'utf8');
}

export const getAllMovies = () => {
    return getJSONFile(MOVIES_JSON_PATH);
}

export const getItem = (id) => {
    return getJSONFile(MOVIES_JSON_PATH)
    .then(data => {
        return data.movies.find((movie) => movie.id === id)
    })
}

export const add = (newObject) => {
    return getJSONFile(MOVIES_JSON_PATH)
    .then(data => {
        console.log(data)
        console.log(newObject)
        data.movies.push(newObject);

        return saveToJSONFile(MOVIES_JSON_PATH, data)
    })
} 

export const remove = id => {
    return getJSONFile(MOVIES_JSON_PATH)
      .then(data => {
        const filteredElements = data.movies.filter(movie => {
          return movie.id !== id
        })
  
        const dataToSave = {
            movies: filteredElements
        }
  
        return saveToJSONFile(MOVIES_JSON_PATH, dataToSave)
      })
  }

  export const update = objectToUpdate => {
    return getJSONFile(MOVIES_JSON_PATH)
      .then(data => {
        const foundElementIndex = data.movies.findIndex(movie => movie.id === objectToUpdate.id)
  
        // if(objectToUpdate.message) {
        //   data.messages[foundElementIndex].message = objectToUpdate.message
        // }
        // if(objectToUpdate.author) {
        //   data.messages[foundElementIndex].author = objectToUpdate.author
        // }
  
        return saveToJSONFile(MOVIES_JSON_PATH, data)
      })
  }