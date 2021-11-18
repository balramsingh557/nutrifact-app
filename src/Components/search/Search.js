import React, { useEffect, useState } from 'react';
import './Search.css';
import SearchBar from '../home/SearchBar';
import SearchResult from './SearchResult';
import { useHistory, useParams } from 'react-router-dom';
import PreLoader from '../preLoader/PreLoader';

export default function Search() {

    let { query } = useParams();
    const history = useHistory();
    const [queryString, setQueryString] = useState(query);
    let [message, setMessage] = useState(<PreLoader />);
    let condition = false;
    
    const noDataFound = (
        <div style={{minHeight: "47vh"}}>
            <h5 className="center-align">No Data Found</h5>
        </div>
    )

    const [searchResult, setSearchResutl] = useState([]);
    const api = 'qq1wtyiHo3p6VHthxxPQ9Msaaqc7ChFLwnYcyDb8';
    const baseUrl = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=" + api;

    useEffect(() => {
        setMessage(<PreLoader/>);
        setQueryString(query);
        doSearch();
    }, [query]);


    const doSearch = () => {
        if(query !== undefined && query !== '')
        {
            const urlForSearch = `${baseUrl}&query=${query}&pageSize=25&pageNumber=1`;
            
            fetch(urlForSearch)
            .then((res) => {
                if(res.ok){
                    return res.json();
                }
            })
            .then((result) => {
                if(result.foods.length === 0){
                    setSearchResutl('');
                    setMessage(noDataFound);
                }
                else{
                    setSearchResutl(result.foods);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    const searchHandler = (query) => {
        history.push(`/search/${query}`);
    }


    if(searchResult !== undefined && searchResult.length !== 0){
        condition = true;
    }

    return (
        
        <div className="search">
            
            <SearchBar searchHandler = {searchHandler} queryString={queryString}/>

            

            {(condition)
            ?
            <div className="search-container">
            {searchResult.map((food) => 
            <SearchResult
                decription = {food.description}
                dataType = {food.dataType}
                brandOwner = {food.brandOwner}
                key = {food.fdcId}
                id = {food.fdcId}
            />)}
            </div>
            :message
            }

            
        </div>
        

    )
}