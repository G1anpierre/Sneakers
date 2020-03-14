import React from 'react';
import './selector.scss';



const Selector = props => {

    

    function sizeOptions() {
        console.log(props.inventory);
        const sizes = props.inventory;
       
        return sizes.map(function(num) {
            return (
                <option  value={num} key={num}>{num}</option>
            )
        })
    }

    function onChangeSize(event) {
        props.handleSizeChange(event.target.value);

    }

    return (
        
        <div class="input-group mb-3">
            <select defaultValue={props.size} class="custom-select" id="inputGroupSelect02" onChange={onChangeSize}>
                 {sizeOptions()}
            </select>
            <div class="input-group-append">
            <label class="input-group-text" htmlFor="inputGroupSelect02">Shoe Size</label>
            </div>
        </div>
    )
}


export default Selector;