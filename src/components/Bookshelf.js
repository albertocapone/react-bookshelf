import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {

    const last = props.resultsPerPage * props.currentPage;
    const first = last - props.resultsPerPage;

    return (
        <ul className="list-unstyled">
            {props.searchResults.slice(first, last).map((res) => (  //map applies on a new array returned by slice which contains just a section of the original searchResults array
                <Book 
                    key={res.id}
                    book={res.volumeInfo}
                    handleDetailsModalUpdate={props.handleDetailsModalUpdate}
                />
            ))}
        </ul>
    );
}

export default Bookshelf;