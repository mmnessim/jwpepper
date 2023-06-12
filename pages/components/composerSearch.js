import { useState } from "react";
import axios from "axios";
import { ComposerDisplay } from "./composerDisplay";


export function ComposerSearch() {
    const [query, setQuery] = useState();
    const [exact, setExact] = useState([]);
    const [partial, setParial] = useState([]);

    let displayExact = [];
    let displayPartial = [];

    function handleSearch() {
        axios.get(`/api/composer?composer=${query}`)
            .then((res) => {
                console.log(res.data)
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
        if (exact.length = 0) {
            displayExact.push(<li>No exact results</li>)
        } else {
            for (let i = 0; i < array.length; i++) {
                displayExact.push(<li key={i}>{array[i].title} by {array[i].composer}: {array[i].level} </li>)
            }
        }
      }
    handleDisplayExact(exact);

    const handleDisplayPartial = (array) => {
        //reset array before repopulating each time
        displayPartial = []; 
        if (partial.length === 0) {
            displayPartial.push(<li>No partial results</li>)
        } else {
            for (let i = 0; i < array.length; i++) {
                displayPartial.push(<li key={i}>{array[i].title} by {array[i].composer}: {array[i].level} </li>)
            }
        }
      }
    handleDisplayPartial(partial)

    return(
        <div>
            <h3>Search by Composer Name</h3>
            <input type="text" name="composer" onChange={handleInput}></input>
            <button onClick={handleSearch}>Search</button> 
            <div>
                <h3>Exact Matches: </h3>
                <div>
                {displayExact}
                </div>
            </div>
            <div>
                <h3>Partial Matches: </h3>
                <div>
                {displayPartial}
                </div>
            </div>
            <ComposerDisplay 
            exact={exact}
            partial={partial}
            />
        </div>
    )
}