import React from 'react';
import './Home.css';
import Carousel from './Carousel';
import FoodCard from './FoodCard';
import SearchBar from './SearchBar';
import { useHistory } from 'react-router-dom';
import card1 from '../../images/card-1.jpg'
import card2 from '../../images/card-2.jpg'
import card3 from '../../images/card-3.jpg'

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
                <div className="col m4 s12"><FoodCard service={'Diet Plan'} description={'Easy to follow diet plans at you figer tips that fit into you lifestyle without big compromise'} image={card1}/></div>
                <div className="col m4 s12"><FoodCard service={'Home Workout'} description={'Finding a workout is as easy as scrolling down, picking out the session that matches your goals'} image={card2}/></div>
                <div className="col m4 s12"><FoodCard service={'Free Services'} description={'Our platform provides free nutrition detals service for any type of food'} image={card3}/></div>
            </div>

        </div>
    )
}