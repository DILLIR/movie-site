import React, { useState } from "react";
import cl from "./Search.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  function onEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate("/search/" + searchQuery);
      setSearchQuery("");
    }
  }

  return (
    <form className={cl.form}>
      <input
        type="text"
        placeholder="Search..."
        className={cl.input}
        value={searchQuery}
        onKeyDown={(e) => {
          onEnter(e);
        }}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <Link
        to={"/search/" + searchQuery}
        className={cl.submit}
        onClick={() => {
          setSearchQuery("");
        }}
      >
        Submit
      </Link>
    </form>
  );
}

export default Search;
