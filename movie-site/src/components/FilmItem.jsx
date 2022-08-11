import React, {useState} from 'react'
import Modal from './UI/Modal/Modal';
import "./css/FilmItem.css";

function FilmItem({poster, info}) {

  const [show, setShow] = useState(false);

  return (
    <div className='film'>
        <img src={poster} alt="" onClick={() => {setShow(true)}}/>
        <Modal isVisible={show} setVisible={setShow}>
          <div className='film__modal'>
              <img className='film__img' src={poster} alt="" />
              <div className='film__info'>
                <h3 className='film__name'>{info.original_title}</h3>
                <a href="#" className='film__play'>play trailer</a>
                <p className='film__release'>Realise date: {info.release_date}</p>
                <p className='film__desc'>{info.overview}</p>
                <p className='film__rating'>{info.vote_average}</p>
                <div className='film__seanses'>
                  {info.genre_ids.map((film__time)=>{
                    return (<a href='https://www.kinolumiere.com/film/553' key={film__time}>{film__time}</a>)
                  })}
                </div>
              </div>
            </div>
        </Modal>
    </div>
  )
}

export default FilmItem