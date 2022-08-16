import React, {useState} from 'react'
import Modal from './UI/Modal/Modal';
import "./css/FilmItem.css";

function FilmItem({poster, info, setImgLoaded}) {

  const [show, setShow] = useState(false);

  const [imgClass, setImgClass] = useState(["film"]);

  return (
    <div className={imgClass.join(" ")} >
        <img src={poster} alt=""  onLoad={(e)=>{setImgClass(["film", "loaded"])}} onClick={() => {setShow(true)}}/>
        <Modal isVisible={show} setVisible={setShow}>
          <div className='film__modal'>
              <img className='film__img' src={poster} alt="" />
              <div className='film__info'>
                <h3 className='film__name'>{info.original_title}</h3>
                <p className='film__rating'>{info.vote_average}</p>
                <p className='film__release'>Realise date: {info.release_date}</p>
                <a href="https://en.wikipedia.org/wiki/Main_Page" className='film__play'>play trailer</a>
                <p className='film__desc'>{info.overview}</p>
              </div>
            </div>
        </Modal>
    </div>
  )
}

export default FilmItem