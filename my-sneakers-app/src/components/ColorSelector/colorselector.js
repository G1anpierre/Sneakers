import React from 'react';
import './colorselector.scss'



const ColorSelector = props => {


    function colorOptions() {
        const colorsArr = props.colors;
        
        return colorsArr.map( element => {
            return (
                <option value={element} key={element}>{element}</option>
            )
        });   
    }

    function onChangeColor(e) {
        console.log(e.target.value);
        props.handleColorChange(e.target.value);
    }


    return (


        <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect02" defaultValue={props.color}  onChange={onChangeColor}>
                {colorOptions()}
            </select>
            <div class="input-group-append">
                <label class="input-group-text" for="inputGroupSelect02">Shoe Color</label>
            </div>
        </div>
    )
}

export default ColorSelector;

