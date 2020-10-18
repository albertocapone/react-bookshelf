import React from 'react';
import Searchbar from "./components/Searchbar";
import Bookshelf from "./components/Bookshelf";
import Paginator from "./components/Paginator";



class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      resultsPerPage: 5,
      currentPage: 1,
    };
    this.handleResultsUpdate = this.handleResultsUpdate.bind(this);
  }

  handleResultsUpdate(searchResults) {
    this.setState( () => ( {searchResults} ) );
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-1">React Bookshelf</h1>
        <Searchbar handleResultsUpdate={this.handleResultsUpdate}/>
        {this.state.searchResults.length > 0 && <Bookshelf searchResults={this.state.searchResults}/>}
        {this.state.searchResults.length > 0 && <Paginator />}
      </div>
    );
  }
}

export default App;
