import React from 'react'
import Container from '../../Container';
import cl from "./Baner.module.css";

function Baner({src, text}) {
  return (
    <div className={cl.banner} style={{backgroundImage: `url(${src})`}}>
        <Container className={cl.container}><h1>{text}</h1></Container>
    </div>
  )
}

export default Baner