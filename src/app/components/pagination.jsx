import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';


const Pagination = ({count, size, page, onChange}) => {
    const numPages = Math.ceil(count / size);
    if (numPages < 2) return null;
    const pages = _.range(1, numPages + 1);

    return <nav>
        <ul className="pagination">
            {pages.map(numPage => <li className={'page-item' + (numPage===page?' active':'')} key={'page_'+numPage}>
                <button href='#' className="page-link" onClick={() => onChange(numPage)}>{numPage}</button>
            </li>)}
        </ul>
    </nav>;
}
Pagination.propTypes = {
    count: PropTypes.number.isRequired, 
    size: PropTypes.number.isRequired, 
    page: PropTypes.number.isRequired, 
    onChange: PropTypes.func.isRequired
};
 
export default Pagination;