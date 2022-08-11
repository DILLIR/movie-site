import React, {useState, useEffect} from 'react'
import Baner from '../components/UI/Banner/Baner';
import banerImg from "../img/geoffrey-moffett-TFRezw7pQwI-unsplash.jpg";
import poster from "../img/18480576-2068460.jpeg" 
import FilmsBlock from '../components/FilmsBlock';


function CurrentMovies() {


  const [films, setFilms] = useState({});

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    let response = fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fa8c9ee28753865dee3125bbc077563b&language=en-US&page=1")
                  .then((data) => {return data.json()})
                  .then((data) =>  {setFilms(data)});
    setLoading(false);
  }, []);

  return (
    <main>
      <Baner src={banerImg} text="Watch our current premieres"></Baner>
      {loading ? <h1>Movies are loading</h1> : <FilmsBlock films={films}></FilmsBlock>}
    </main>
   
  )
}

export default CurrentMovies;