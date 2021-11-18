import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import PreLoader from '../preLoader/PreLoader';
import M from 'materialize-css';
import './NutrientsDetails.css';

export default function NutrientsDetails() {
    const { id } = useParams();
    const [foodDetails, setFoodDetails] = useState({});
    const [hieght, setHeight] = useState({height: '40vh'});

    const colDiv = useRef();

    const api = 'qq1wtyiHo3p6VHthxxPQ9Msaaqc7ChFLwnYcyDb8';
    const baseUrl = "https://api.nal.usda.gov/fdc/v1/food/";

    let condition=true;
    let message = <PreLoader/>;
    

    useEffect(() => {
        const finalUrl = `${baseUrl}${id}?api_key=${api}`;

        fetch(finalUrl)
        .then((res) => {
            if(res.ok){
                return res.json();
            }
        })
        .then((data) => {
            setFoodDetails(data);
            setHeight({height: (colDiv.current.clientHeight-22) + 'px'});
        })
        .catch((err) => {
            console.log(err);
        });

        
    }, [])

    const addToFavourites = () => {

        if(localStorage.getItem('name') === null){
            M.toast({html: '<b>Please Login First</b>', classes:'red lighten-1'});
            return;
        }
        
        let dataToSend = {fdcId: id, foodName : foodDetails.description, brandOwner: foodDetails.brandOwner};
        fetch("http://localhost:3001/api/v1/favourites", {
            method: "POST",
            headers: {
                'Content-type' : 'application/json',
                'Authorization' :  `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(dataToSend)
        })
        .then((res) => {
            if(res.status === 201){
                M.toast({html: "<b>Added to favourites successfully !!</b>", classes:'green darken-2'});
            }
            else{
                alert("Operation Failed !!")
            }
        })
    }

    if(foodDetails === undefined || Object.keys(foodDetails).length === 0){
        condition = true;
        if(foodDetails === undefined){
            message = <h4 className="center-align">No Data Found !!</h4>;
        }
    }
    else{
        condition = false;
    }
    
    return (
        <div className="nutrient-details container">
            {
            (condition)
            ?message
            :
                <div className="row">
                <div className="col m6 s12" ref={colDiv}>
                    <div className="row">

                        <div className="food-name card">
                        
                        <div className="card-stacked">
                            
                            <div className="card-content">
                            <h5>{foodDetails.description} </h5>
                            <p>{foodDetails.brandOwner}</p>
                            </div>
                            <div className="card-action">
                            <button
                            onClick={addToFavourites} 
                            className="orange waves-effect waves-light btn">
                                Add to favourites
                            </button>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div className="row">

                    <div className="addvertisement card">
                        
                    <div className="card-stacked">
                        
                        <div className="card-content">
                        <h5>Talk to experts</h5>
                        <p>Our experts are availabe 24/7 to provide customised diet plan</p>
                        </div>
                        <div className="card-action">
                        <button className="orange waves-effect waves-light btn">Connect</button>
                        </div>
                    </div>
                    </div>

                    </div>
                    

                </div>

                <div className="col m6 s12">
                    <div className="card values" style={hieght}>
                    <div className="card-image">
                       
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h5>Nutrient Count</h5>
                            <ul className="collection">
                            
                            {
                            foodDetails.foodNutrients.map((info) =>
                            <Display  
                                name = {info.nutrient.name}
                                unit = {info.nutrient.unitName}
                                amount = {info.amount !== undefined ? info.amount : ''}
                                key = {info.nutrient.id}
                            /> 
                            )}
                            </ul>

                        </div>
                    </div>
                    </div>

                </div>
               
            </div>
            }

            
        </div>
    )
}

function Display(props) {
    return(
      <li className="collection-item">{props.name} {props.amount} {props.unit}</li>
    );
}
