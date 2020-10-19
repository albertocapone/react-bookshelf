import React from 'react';

const Details = (props) => {

    const handleModalClosing = () => {
        props.handleDetailsModalUpdate(false, {});
    }

    return (
        <div onClick={handleModalClosing} className="bg-color-layover position-fixed w-100 h-100 position-tl-0 z-low">
            <div onClick={(e) => e.stopPropagation()} className="bg-white border rounded position-fixed w-75 h-75 position-tl-50 transform-center z-high">
                <h2>{props.book.title}</h2>
                <img src={ (props.book.imageLinks) ? props.book.imageLinks.smallThumbnail : ''} className="mr-3" alt="..." />
                {props.book.authors && props.book.authors.map( (author, index) => <h3 key={index} >{author}</h3> ) }
                {props.book.categories && props.book.categories.map( (category, index) => <h3 key={index} >{category}</h3> ) }
                <h3>{props.book.publishedDate}</h3>
                <h5>{props.book.infoLink}</h5>
            </div>
        </div>
    )
}

export default Details;