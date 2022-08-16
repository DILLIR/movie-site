import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Container from '../../Container';
import Search from '../Search/Search';
import cl from "./Navigation.module.css";
import menu__icon from "../../../img/menu-burger.svg"

function Navigation() {

  

  const [submenuActive, setSubmenuActive] = useState(false);
  let submenu__classes = [cl.submenu];
  if(submenuActive){
    submenu__classes.push(cl.active);
  }

  const genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];

  const [navClasses, setNavClasses] = useState("")

  return (
    <nav className={navClasses}>
        <Container className={cl.container}>
            <div className={cl.logo}>
              <Link to="/">Popcorn cinema</Link>
              <div className={cl.menu__icon} onClick={()=>{navClasses ? setNavClasses("") : setNavClasses(cl.mobile)}}>
                <img src={menu__icon} alt="" />
              </div>
            </div>
            <div className={cl.menu}>
                <Link to="/" className={cl.menu__item}>Now Playing</Link>
                <div className={[cl.menu__item].join("")}>
                  <span onClick={()=>{submenuActive ? setSubmenuActive(false) : setSubmenuActive(true)}}>Genres</span>
                  <div className={submenu__classes.join(" ")}>
                    {genres.map((genre => {
                      return ( <Link to={"/genres/" + genre.id}  key={genre.id} className={cl.genre} onClick={()=>{setSubmenuActive(false)}}>{genre.name}</Link>)
                    }))}
                  </div>
                </div>
                <a href="https://github.com/DILLIR/movie-site" className={cl.menu__item}>GitHub repo</a>
            </div>
            <Search/>
        </Container>
    </nav>
  )
}

export default Navigation