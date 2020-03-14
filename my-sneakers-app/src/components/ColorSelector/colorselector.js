import React from 'react';
import './colorselector.scss'



const ColorSelector = props => {


    function colorOptions() {
        const colorsArr = props.colors;
        
        return colorsArr.map( element => {
            return (
                <option value={element} value={element}>{element}</option>
            )
        });
        
    }


    return (

        
        <div className="field-group">
            <label >Color:</label>
            <select defaultValue={props.color} name="colorOptions" id="color-options">
                {colorOptions()}
            </select>
        </div>
    )
}

export default ColorSelector;

