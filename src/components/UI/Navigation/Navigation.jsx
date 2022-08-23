import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Container";
import Search from "../Search/Search";
import cl from "./Navigation.module.css";
import menu__icon from "../../../img/menu-burger.svg";
import { genres } from "../../../data/genres";

function Navigation() {
  const [submenuActive, setSubmenuActive] = useState(false);
  let submenu__classes = [cl.submenu];
  if (submenuActive) {
    submenu__classes.push(cl.active);
  }

  const [navClasses, setNavClasses] = useState("");

  return (
    <nav className={navClasses}>
      <Container className={cl.container}>
        <div className={cl.logo}>
          <Link to="/">Popcorn cinema</Link>
          <div
            className={cl.menu__icon}
            onClick={() => {
              navClasses ? setNavClasses("") : setNavClasses(cl.mobile);
            }}
          >
            <img src={menu__icon} alt="" />
          </div>
        </div>
        <div className={cl.menu}>
          <Link to="/movie-site/" className={cl.menu__item}>
            Now Playing
          </Link>
          <div className={[cl.menu__item].join("")}>
            <span
              onClick={() => {
                submenuActive
                  ? setSubmenuActive(false)
                  : setSubmenuActive(true);
              }}
            >
              Genres
            </span>
            <div className={submenu__classes.join(" ")}>
              {genres.map((genre) => {
                return (
                  <Link
                    to={"/movie-site/genres/" + genre.id}
                    key={genre.id}
                    className={cl.genre}
                    onClick={() => {
                      setSubmenuActive(false);
                    }}
                  >
                    {genre.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <a
            href="https://github.com/DILLIR/movie-site"
            className={cl.menu__item}
          >
            GitHub repo
          </a>
        </div>
        <Search />
      </Container>
    </nav>
  );
}

export default Navigation;
