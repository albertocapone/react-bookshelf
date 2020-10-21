import React from 'react';
import ClampLines from "react-clamp-lines";
import noImg from "../img/no-img.jpg";


class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
        this.handleModalOpening = this.handleModalOpening.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    handleModalOpening() {
      this.props.handleDetailsModalUpdate(true, this.props.book);
    };

    handleHover(e) {
        const hover = (e.type === 'mouseenter')? true : false;
        this.setState( () => ( { hover } ) );
    }

    render() {
        return (
            <li onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={this.handleModalOpening} className={`media pt-2 pb-2 pl-2 border-bottom ${ (this.state.hover) ? 'bg-hover' : ''}`} style={{height: "80px"}}>
                <img src={ (this.props.book.imageLinks) ? this.props.book.imageLinks.smallThumbnail : noImg } className="mr-3 h-100 rounded" alt="..." />
                <ClampLines
                    text={this.props.book.title}
                    lines={2}
                    ellipsis="[...]"
                    buttons={false}
                    className="media-body"  //<div class=media-body> will be the parent
                    innerElement="h6"       //<h6> clamped-title </h6> will be its child node
                />
            </li>
        );
    }
}

export default Book;