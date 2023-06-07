import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function JWPepperSearch(props) {
    const [data, setData] = useState([]);
    const [show, setShow] = useState()

    const query = props.level.toLowerCase();
    //Fetch data each time query changes
    useEffect(() => {
        axios.get(`/api/level?level=${query}`)
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    },[props.level])
    
    let displayArray = [];
    console.log(data[0])
    
    const handleDisplay = (array) => {
        //reset array before repopulating each time
        displayArray = []; 
        if (!data[0] && props.show === true) {
            displayArray.push(<h4>Loading...</h4>)
        } else if (props.show === true) {
        //Makes a li element for each composer and piece
        for (let i = 0; i < array.length; i++) {
          displayArray.push(<li>{array[i].title} by {array[i].composer}</li>)
        }}
      }
    handleDisplay(data);

    return (
        <div className='container comp-list'>
            <h2>{props.level} Pieces</h2>
            {show}
            <div>
                {displayArray}
            </div>
        </div>
    )
}