import React from 'react';
import redSneakers from './images/red.jpg';
import blueSneakers from './images/blue.jpg';
import brownSneakers from './images/brown.jpg';
import greenSneakers from './images/green.jpg';
import purpleSneakers from './images/purple.jpg';

import './productImage.scss';

const ProductImage = props => {

    const variable = new String(props.color);
    
    console.log(typeof(variable));

    


    return(

       
        <div className="img-container h-100">
            
                <div className={` ${props.color} `}></div>
            
            
        </div>
        
    )
}

export default ProductImage;



