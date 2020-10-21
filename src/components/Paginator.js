import React from 'react';

const Paginator = (props) => {
    let pages = [];

    const handlePageSelection = (e) => {
        const selection = Number(e.target.innerHTML);
        props.handlePaginationUpdate(props.resultsPerPage, selection);
    };

    const handleResultsPerPageSelection = (e) => {
        const selection = Number(e.target.value);
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
        <div className="w-75 h-25 mx-auto">
            <form className="form-inline">
                <label className="mr-sm-2 font-weight-bold font-italic">Results for page</label>
                <select onChange={handleResultsPerPageSelection} className="ml-2 border-dark border-m rounded font-weight-bold no-outline">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </form>
            <ul className={`pagination pagination-sm justify-content-center mt-4 border-dark border-m rounded mx-auto w-fit scale-x-0 ${pages.length > 0 ? 'scale-x-transition' : ''}`}>
                {pages}
            </ul>
        </div>  
    );
}

export default Paginator;