import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
    return (
        <div>
            {props.searchResults.map((res) => (
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