import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Bookmarks.css';

export default function Bookmarks() {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/favourites', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization' :  `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then((res) => {
            if(res.ok){
                return res.json();
            }
        })
        .then((foodList) => {
            if(Array.isArray(foodList))
                setFoods(foodList);
        })
    }, []);

    const deleteFavourties = (id) => {
        id = parseInt(id);
        fetch(`http://localhost:3001/api/v1/favourites/${id}`,{
            method: "DELETE",
            headers: {
                'Authorization' :  `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            if(res.ok){
                let newFoodData = foods.filter((food) => food.id !== id)
                setFoods(newFoodData);
            }
        })
    };
    return (
        <div className="bookmarks">
            <h5 className="center-align white-text">Bookmarked Foods</h5>

            <div className="flex-container">
            {
                foods.map((food) =>
                <ShowFavourites 
                key={food.id}
                foodName = {food.foodName}
                brandOwner = {food.brandOwner}
                id = {food.id}
                fdcId = {food.fdcId}
                delete = {deleteFavourties}
                />)
            }
            </div>
        </div>
    )
}

function ShowFavourites(props) {
    return (
        
        <div className="flex-items card">
            <div className="card-content">

                <h6>{props.foodName}</h6>
                <p>{props.brandOwner}</p>

                <div className="bottom-btn">
                    <Link to={"/food/"+props.fdcId} className="btn orange" style={{marginRight:'10px'}}>Open</Link>
                    <button onClick={() => {props.delete(props.id)}} className="btn red lighten-1">Delete</button>
                </div>

            </div>
        </div>
        
    )
}
