import React from 'react';
import Searchbar from './components/Searchbar';
import Bookshelf from './components/Bookshelf';
import Details from './components/Details';  
import Paginator from './components/Paginator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      resultsPerPage: 5,
      currentPage: 1,
      detailsModalIsOpen: false,
      mediaShowingInModal: {}
    };
    this.handleResultsUpdate = this.handleResultsUpdate.bind(this);
    this.handlePaginationUpdate = this.handlePaginationUpdate.bind(this);
    this.handleDetailsModalUpdate = this.handleDetailsModalUpdate.bind(this);
  }

  handleResultsUpdate(searchResults) {
    this.setState(() => ({ searchResults }));
  }

  handlePaginationUpdate(resultsPerPage, currentPage) {
    this.setState(() => ({ resultsPerPage, currentPage }));
  }

  handleDetailsModalUpdate(detailsModalIsOpen, mediaShowingInModal) {
    this.setState(() => ({ detailsModalIsOpen, mediaShowingInModal }));
  }

  render() {
    return (
      <div className={`container ${this.state.detailsModalIsOpen && 'block-scroll'}`}>   {/* this class prevents container from scrolling when Details modal is open */}
        <h1 className="display-1">React Bookshelf</h1>
        <Searchbar handleResultsUpdate={this.handleResultsUpdate} />
        {this.state.searchResults.length > 0 && (
          <Bookshelf
            searchResults={this.state.searchResults}
            resultsPerPage={this.state.resultsPerPage}
            currentPage={this.state.currentPage}
            handleDetailsModalUpdate={this.handleDetailsModalUpdate}
          />
        )}
        {this.state.detailsModalIsOpen && (
          <Details
            handleDetailsModalUpdate={this.handleDetailsModalUpdate}
            book={this.state.mediaShowingInModal}
          />
        )}
        {this.state.searchResults.length > 0 && (
          <Paginator
            handlePaginationUpdate={this.handlePaginationUpdate}
            totalPages={Math.ceil(
              this.state.searchResults.length / this.state.resultsPerPage
            )}
            resultsPerPage={this.state.resultsPerPage}
            currentPage={this.state.currentPage}
          />
        )}
      </div>
    );
  }
}

export default App;
