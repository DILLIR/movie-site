import React, {useState} from 'react'
import Container from '../components/Container';
import Baner from '../components/UI/Banner/Baner';
import banerImg from "../img/geoffrey-moffett-TFRezw7pQwI-unsplash.jpg";
import poster from "../img/18480576-2068460.jpeg" 
import FilmsBlock from '../components/FilmsBlock';


function CurrentMovies() {


  const [films, setFilms] = useState([{poster: poster, info: {name: "Швидкий поїзд", trailer: "https://www.youtube.com/watch?v=pYdJy0DQg3I", release: 2019, description: " П’ятеро найманих вбивць, яких пов’язує одна й та сама місія, опиняються разом в швидкісному поїзді. Що це, дивний збіг чи хитросплетений план? Герої з’ясують це власними методами.", rating: "7/10", airing: ["8:30", "12:20", "13:30", "19:00"]}}, {poster: poster, info: {name: "Швидкий поїзд", trailer: "https://www.youtube.com/watch?v=pYdJy0DQg3I", release: 2019, description: " П’ятеро найманих вбивць, яких пов’язує одна й та сама місія, опиняються разом в швидкісному поїзді. Що це, дивний збіг чи хитросплетений план? Герої з’ясують це власними методами.", rating: "7/10", airing: ["8:30", "12:20", "13:30", "19:00"]}}, {poster: poster, info: {name: "Швидкий поїзд", trailer: "https://www.youtube.com/watch?v=pYdJy0DQg3I", release: 2019, description: " П’ятеро найманих вбивць, яких пов’язує одна й та сама місія, опиняються разом в швидкісному поїзді. Що це, дивний збіг чи хитросплетений план? Герої з’ясують це власними методами.", rating: "7/10", airing: ["8:30", "12:20", "13:30", "19:00"]}},{poster: poster, info: {name: "Швидкий поїзд", trailer: "https://www.youtube.com/watch?v=pYdJy0DQg3I", release: 2019, description: " П’ятеро найманих вбивць, яких пов’язує одна й та сама місія, опиняються разом в швидкісному поїзді. Що це, дивний збіг чи хитросплетений план? Герої з’ясують це власними методами.", rating: "7/10", airing: ["8:30", "12:20", "13:30", "19:00"]}},{poster: poster, info: {name: "Швидкий поїзд", trailer: "https://www.youtube.com/watch?v=pYdJy0DQg3I", release: 2019, description: " П’ятеро найманих вбивць, яких пов’язує одна й та сама місія, опиняються разом в швидкісному поїзді. Що це, дивний збіг чи хитросплетений план? Герої з’ясують це власними методами.", rating: "7/10", airing: ["8:30", "12:20", "13:30", "19:00"]}},{poster: poster, info: {name: "Швидкий поїзд", trailer: "https://www.youtube.com/watch?v=pYdJy0DQg3I", release: 2019, description: " П’ятеро найманих вбивць, яких пов’язує одна й та сама місія, опиняються разом в швидкісному поїзді. Що це, дивний збіг чи хитросплетений план? Герої з’ясують це власними методами.", rating: "7/10", airing: ["8:30", "12:20", "13:30", "19:00"]}}])

  return (
    <main>
      <Baner src={banerImg} text="Watch our current premieres"></Baner>
      <FilmsBlock films={films}></FilmsBlock>
    </main>
   
  )
}

export default CurrentMovies;