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
      <div className="vw-100 vh-100 d-flex flex-column justify-content-center pt-3 bg-gradient-primary">  
        <h1 className="w-75 mx-auto mt-2 mb-3 display-2 text-3d">React Bookshelf</h1>
        <Searchbar handleResultsUpdate={this.handleResultsUpdate} />
        <Bookshelf
          searchResults={this.state.searchResults}
          resultsPerPage={this.state.resultsPerPage}
          currentPage={this.state.currentPage}
          handleDetailsModalUpdate={this.handleDetailsModalUpdate}
        />
        {this.state.detailsModalIsOpen && (
          <Details
            handleDetailsModalUpdate={this.handleDetailsModalUpdate}
            book={this.state.mediaShowingInModal}
          />
        )}
          <Paginator
            handlePaginationUpdate={this.handlePaginationUpdate}
            totalPages={Math.ceil(
              this.state.searchResults.length / this.state.resultsPerPage
            )}
            resultsPerPage={this.state.resultsPerPage}
            currentPage={this.state.currentPage}
          />
      </div>
    );
  }
}

export default App;
