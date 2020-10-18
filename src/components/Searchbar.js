import React from 'react';
import axios from 'axios';

const Searchbar = (props) => {
    return (
      <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
      </form>
    );
}

export default Searchbar;