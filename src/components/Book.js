import React from 'react';

const Book = (props) => {
    return (
        <div className="media">
            <img src={props.image} className="mr-3" alt="..." />
            <div className="media-body">
                <h5 className="mt-0">{props.title}</h5>
            </div>
        </div>
    );
}

export default Book;