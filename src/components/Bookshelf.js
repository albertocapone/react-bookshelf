import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {

    constructor(props) {
        super(props);
        this.ulRef = React.createRef();
    }

    componentDidUpdate() {
        this.ulRef.current.scrollTo(0, 0);  // ul scrolls to top after re-rendering, for better ux 
    }

    render() {

        const last = this.props.resultsPerPage * this.props.currentPage;
        const first = last - this.props.resultsPerPage;

        return (
            <ul ref={this.ulRef} className="list-unstyled bg-light border-dark border-lg rounded w-75 h-50 mt-4 mb-4 mx-auto overflow-auto">
                {this.props.searchResults.slice(first, last).map((res) => (  //map applies on a new array returned by slice which contains just a section of the original searchResults array
                    <Book 
                        key={res.id}
                        book={res.volumeInfo}
                        handleDetailsModalUpdate={this.props.handleDetailsModalUpdate}
                    />
                ))}
            </ul>
        );
    }
}

export default Bookshelf;