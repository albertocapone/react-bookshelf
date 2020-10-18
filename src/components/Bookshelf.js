import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {

    const last = props.resultsPerPage * props.currentPage;
    const first = last - props.resultsPerPage;

    return (
        <div>
            {props.searchResults.slice(first, last).map((res) => (  //map applies on a new array returned by slice which contains just a section of the original searchResults array
                <Book 
                    key={res.id}
                    title={res.volumeInfo.title}
                    image={res.volumeInfo.imageLinks? res.volumeInfo.imageLinks.smallThumbnail : ""} //some media don't have an image link
                />
            ))}
        </div>
    );
}

export default Bookshelf;