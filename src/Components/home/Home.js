import React from 'react';
import './Home.css';
import Carousel from './Carousel';
import FoodCard from './FoodCard';
import SearchBar from './SearchBar';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory();

    const searchHandler = (query) => {
        history.push(`/search/${query}`);
    }
    
    return (
        <div className="home">
            
            <div style={{padding:"0 10px"}}>
            <SearchBar searchHandler = {searchHandler}/>
            <Carousel/>
            </div>

            <div className="row" style={{marginTop: '10px'}}>
                <div className="col m4 s12"><FoodCard service={'Diet Plan'} description={'Easy to follow diet plans at you figer tips that fit into you lifestyle without big compromise'} image={'http://localhost:3000/images/card-1.jpg'}/></div>
                <div className="col m4 s12"><FoodCard service={'Home Workout'} description={'Finding a workout is as easy as scrolling down, picking out the session that matches your goals'} image={'http://localhost:3000/images/card-2.jpg'}/></div>
                <div className="col m4 s12"><FoodCard service={'Free Services'} description={'Our platform provides free nutrition detals service for any type of food'} image={'http://localhost:3000/images/card-3.jpg'}/></div>
                {/* <div className="col m3 s12"><FoodCard service={'Service 4'}/></div> */}
            </div>

        </div>
    )
}