import { useState } from "react";
import axios from "axios";

export function TitleSearch() {
    const [query, setQuery] = useState();
    const [exact, setExact] = useState([]);
    const [partial, setParial] = useState([]);

    let displayExact = [];
    let displayPartial = [];

    function handleSearch() {
        axios.get(`/api/title?title=${query}`)
            .then((res) => {
                //console.log(res.data)
                setExact(res.data.exact)
                setParial(res.data.partial)
            })
            .catch((err) => {
                if (err) console.error(err.message)
            })
    }

    function handleInput(e) {
        setQuery(e.target.value)
    }

    const handleDisplayExact = (array) => {
        //reset array before repopulating each time
        displayExact = []; 
        for (let i = 0; i < array.length; i++) {
                displayExact.push(<li key={i}>{array[i].title} by {array[i].composer}: {array[i].level} </li>)
        }
   }
    handleDisplayExact(exact);

    const handleDisplayPartial = (array) => {
        //reset array before repopulating each time
        displayPartial = []; 
        if (partial.length === 0 && exact.length === 0) {
            displayPartial.push(<li>No results</li>)
        } else {
            for (let i = 0; i < array.length; i++) {
                displayPartial.push(<li key={i}>{array[i].title} by {array[i].composer}: {array[i].level} </li>)
            }
        }
      }
    handleDisplayPartial(partial)

    return(
        <div>
            <h3>Search by Piece Title</h3>
            <input type="text" name="composer" onChange={handleInput}></input>
            <button onClick={handleSearch}>Search</button> 
            <div>
                <div>
                {displayExact}
                </div>
                <div>
                {displayPartial}
                </div>
            </div>     
        </div>
    )
}