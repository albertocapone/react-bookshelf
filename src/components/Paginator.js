import React from "react";

const Paginator = (props) => {
    let pages = [];

    const handlePageSelection = (e) => {
        const selection = Number(e.target.innerHTML);
        console.log('pagesNav', selection);
        props.handlePaginationUpdate(props.resultsPerPage, selection);
    };

    const handleResultsPerPageSelection = (e) => {
        const selection = Number(e.target.value);
        console.log('results', selection);
        props.handlePaginationUpdate(selection, 1);  //changing number of results brings you back to page 1
    };

    for(let k = 1; k <= props.totalPages; k++) {
        const isCurrent = (k === props.currentPage) ? "active" : null;
        pages.push(
          <li className={`page-item ${isCurrent}`} key={k}>
            <button onClick={handlePageSelection} className="page-link">
              {k}
            </button>
          </li>
        );
    }

    
    return (
        <div>
            <form className="form-inline">
                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Select results number for page</label>
                <select onChange={handleResultsPerPageSelection} className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </form>
            <ul className="pagination">
                {pages}
            </ul>
        </div>  
    );
}

export default Paginator;