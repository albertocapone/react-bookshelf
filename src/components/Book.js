import React, { useState } from 'react';
import ClampLines from "react-clamp-lines";
import noImg from "../img/no-img.jpg";


const Book = (props) => {

    const [hover, setHover] = useState(false);

    const handleModalOpening = () => {
      props.handleDetailsModalUpdate(true, props.book);
    }

    const handleHover = (e) => {
        const hovering = (e.type === 'mouseenter')? true : false;
        setHover(hovering);
    }

    return (
        <li onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleModalOpening} className={`media pt-2 pb-2 pl-2 border-bottom ${ (hover) ? 'bg-hover' : ''}`} style={{height: "80px"}}>
            <img src={ (props.book.imageLinks) ? props.book.imageLinks.smallThumbnail : noImg } className="mr-3 h-100 rounded" alt="..." />
            <ClampLines
                text={props.book.title}
                lines={2}
                ellipsis="[...]"
                buttons={false}
                className="media-body"  //<div class=media-body> will be the parent
                innerElement="h6"       //<h6> clamped-title </h6> will be its child node
            />
        </li>
    );
}

export default Book;