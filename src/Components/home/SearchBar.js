import React, {useState,useEffect} from 'react';

export default function Search(props) {

    const [query, setQuery] = useState('');

    useEffect(() => {
        if(props.queryString !== undefined){
            setQuery(props.queryString);
        }
    }, [props.queryString])

    const submitHandler = (e) => {
        e.preventDefault();
        if(query !== ""){
            props.searchHandler(query);
        }
    }
    return (
        <div className=" search-bar">
        <div className="nav-wrapper z-depth-1">
        <form onSubmit = {submitHandler}>
            <div className="input-field">
            <input id="search" type="search" required
            placeholder="Search for any food"
            value = {query}
            onChange = {(e) => {setQuery(e.target.value)}}/>
            <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
            </label>
            <i className="material-icons" onClick={() => {setQuery('')}}>close</i>
            </div>
        </form>
        </div>
        </div>
    )
}
