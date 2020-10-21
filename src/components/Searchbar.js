import React from 'react';
import axios from 'axios';

const Searchbar = (props) => {
    
    const handleAjaxCall = (e) => {
      const query = e.target.value;
      const API = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`; //added parameter |maxResults=40| to get as many results as possible
      axios
        .get(API)
        .then((res) => {
          const data = res.data.items ? res.data.items : [];
          console.log(res.data);
          props.handleResultsUpdate(data);
        })
        .catch((err) => {
          console.log(err);
          props.handleResultsUpdate([]);
        });
    }

    return (
      <form className="form-inline w-75 mx-auto" onChange={handleAjaxCall} onSubmit={(e) => e.preventDefault()}>
        <input className="form-control border-dark border-lg rounded w-75 pt-3 pb-3 font-weight-bold" type="search" placeholder="Search for a book..." aria-label="Search"></input>
      </form>
    );
}

export default Searchbar;