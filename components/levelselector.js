import React, { useState } from "react";
import { JWPepperSearch } from "./jwpeppersearch";

export function LevelSelector() {
    //set level and pass it as a prop to JWPepperSearch component
    const [level, setLevel] = useState('easy');
    const [show, setShow] = useState(true);

    function toggle() {
        if (show === true) {
            setShow(false)
        } else if (show === false) {
            setShow(true)
        }
    }

    return(
        <div>
            <button className="btn lvl-select" onClick={() => {setLevel('Very Easy')}}>Very Easy</button>
            <button className="btn lvl-select" onClick={() => {setLevel('Easy')}}>Easy</button>
            <button className="btn lvl-select" onClick={() => {setLevel('Medium-Easy')}}>Medium Easy</button>
            <button className="btn lvl-select" onClick={() => {setLevel('Medium')}}>Medium</button>
            <button className="btn lvl-select" onClick={() => {setLevel('Medium-Advanced')}}>Medium Advanced</button>
            <button className="btn lvl-select" onClick={() => {setLevel('Advanced')}}>Advanced</button>
            <button className="btn lvl-select" onClick={() => {setLevel('Collegiate')}}>Collegiate</button>
            <br />
            <button className="btn lvl-select" onClick={toggle}>Show/Hide</button>
            <JWPepperSearch 
            level={level} 
            show={show} />
        </div>
    )
}