import React from 'react';
import './style.css';


const Character = (props) => {
    return (
        <div className={`img ${props.animation}`} onClick={() => props.handleSelection(props.id)}>
            <img src={props.image} alt={props.name}></img>
        </div>
    )
}

export default Character;