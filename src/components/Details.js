import React from 'react';
import noImg from "../img/no-img.jpg";

const Details = (props) => {

    const handleModalClosing = () => {
        props.handleDetailsModalUpdate(false, {});
    }

    return (
        <div onClick={handleModalClosing} className="bg-layover position-fixed w-100 h-100 position-tl-0 z-low">
            <div onClick={(e) => e.stopPropagation()} className="card bg-white border border-secondary rounded position-fixed w-75 position-tl-50 transform-center z-high">
                <div className="card-body">
                    <img src={ (props.book.imageLinks) ? props.book.imageLinks.smallThumbnail : noImg} className="float-right border border-secondary rounded w-20" alt="..." />
                    <div className="mb-3">
                        <h3 className="card-title">TITLE</h3>
                        <span className="text-primary">{props.book.title} </span>
                    </div>
                    <div className="mb-3">
                        <h6 className="card-title">AUTHOR</h6>
                        { (props.book.authors) ? props.book.authors.map( (author, index) => <span key={index} className="text-primary">{author}</span> ) : <span className="text-primary">Unknown</span> }
                    </div>
                    <div className="mb-3">
                        <h6 className="card-title">CATEGORY</h6>
                        { (props.book.categories) ? props.book.categories.map( (category, index) => <span key={index} className="text-primary">{category}</span> ) : <span  className="text-primary">n.d.</span> }
                    </div>
                    <div className="mb-3">
                        <h6 className="card-title">PUBLISHING DATE</h6>
                        { (props.book.publishedDate) ? <span className="text-primary">{props.book.publishedDate}</span> : <span className="text-primary">n.d.</span>}
                    </div>
                    <div className="mb-3">
                        <h6 className="card-title">LINK</h6>
                        <a className="card-link" href={props.book.infoLink}>{props.book.infoLink}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;