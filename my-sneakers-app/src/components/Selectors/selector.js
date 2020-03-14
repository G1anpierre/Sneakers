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

    return (
        <div className="selectors">
            <div className="field-group">
                <label htmlFor="size-options">Size:</label>
                <select defaultValue={props.size} name="sizeOptions" id="size-options">

                    {sizeOptions()}

                </select>
            </div>
            
        </div>
    )
}


export default Selector;