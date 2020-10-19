import React from 'react';

const Book = (props) => {

    const handleModalOpening = () => {
      props.handleDetailsModalUpdate(true, props.book);
    };

    return (
        <li onClick={handleModalOpening} className="media mb-5 border-bottom">
            <img src={ (props.book.imageLinks) ? props.book.imageLinks.smallThumbnail : '' } className="mr-3" alt="..." />
            <div className="media-body">
                <h5 className="mt-0">{props.book.title}</h5>
            </div>
        </li>
    );
}

export default Book;