import React from 'react';
import {Link} from 'react-router-dom';

export default function SearchResult(props) {
    return (
        <Link to={'/food/' + props.id} className="search-result hoverable card">
        <div className="grey-text text-darken-3 center-align">
            <h5>{props.decription}</h5>

            <h6>
                {(props.dataType === 'Branded')
                ?props.brandOwner
                :<></>}
            </h6>
        </div>
        </Link>
    )
}
