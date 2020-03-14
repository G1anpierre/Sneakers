import React from 'react';


import './productImage.scss';

const ProductImage = props => {

    const variable = new String(props.color);
    
    console.log(typeof(variable));

    


    return(

       
        <div className="img-container h-100">
            
                <div className={`  ${props.color} `}></div>
             
        </div>
        
    )
}

export default ProductImage;



