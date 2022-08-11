import React from 'react';
import { Link } from "react-router-dom";
import Container from '../../Container';
import cl from "./Navigation.module.css"

function Navigation() {
  return (
    <nav>
        <Container className={cl.container}>
            <div className={cl.logo}>Popcorn cinema</div>
            <div className={cl.menu}>
                <Link to="/" className={cl.menu__item}>Now Playing</Link>
                <Link to="/genres" className={cl.menu__item}>Genres</Link>
                <a href="https://github.com/DILLIR/movie-site" className={cl.menu__item}>GitHub repo</a>
            </div>
            <form className={cl.form}>
                <input type="text" placeholder='Search...'  className={cl.input}/>
                <button className={cl.submit}>submit</button>
            </form>
        </Container>
    </nav>
  )
}

export default Navigation