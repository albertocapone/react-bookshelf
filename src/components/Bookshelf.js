import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
    return (
        <div>
            {props.searchResults.map((res) => (
                <Book 
                    key={res.id}
                    title={res.title}
                    image={res.image}
                />
            ))}
        </div>
    );
}

export default Bookshelf;