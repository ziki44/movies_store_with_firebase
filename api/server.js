import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { 
    getMovies,
    getMovie,
    saveMovie,
    removeMovie,
    updateMovie
} from "./controllers/movies.js" 

const app = express();
const port = 7009;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/movies', (req, res) => {
    getMovies()
    .then(data => {
        res.status(200).send(data);
    })
})

app.get('/movies/:movieId', (req, res) => {
    getMovie(req.params.movieId)
      .then(movie => {
        res.status(200).send(movie);
      })
  })
  
app.post('/movies', (req, res) => {
  if(!req.body.id) {
    return res.status(400).send('You must give me id');
  }

  saveMovie(req.body)
    .then(() => {
      res.status(200).send('OK!');
    })
    .catch(e => console.log(e.message))
})
  
app.delete('/movies/:movieId', (req, res) => {
  console.log(req.params.messageId);
  console.log("remove")
  removeMovie(req.params.movieId)
    .then(() => {
      res.status(200).send('OK!');
    })
})

app.put('/movies', (req, res) => {
  if(!req.body.id) {
    return res.status(400).send('You must give me id');
  }

  updateMovie(req.body)
    .then(() => {
      res.status(200).send('OK!');
    })
})





















app.listen(port, () => {
    console.log(`Server is running od port: ${port}`)
});