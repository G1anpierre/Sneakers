import React from 'react';
import './custom.scss';
import ProductImage from './components/ProductImage/ProductImage';
import Selector from './components/Selectors/selector';
import ColorSelector from './components/ColorSelector/colorselector';
import Inventory from './components/Inventory';
import logo from './logo.svg';
import './App.scss';



function App(props) {

  let [defaultsize, setdefaultSize] = React.useState(8);
  let [sizes, setSizes] = React.useState(Inventory.allSizes);
  let [colors, setColors] = React.useState(Inventory.allColors);

  let [defaultColor, setColor] = React.useState("green");

  return (
    
        
        <div className="container h-100">

          <div className="row">
            <div className="col-8 vh-50">
                <h1>Here will come my customize product</h1>
                < ProductImage color={defaultColor}/>
            </div>
            <div className="col-4 d-flex align-items-center">
              <div className="selector-content">
                 <Selector size={defaultsize} inventory={sizes}  />
                 <ColorSelector color={defaultColor}  colors={colors} />
              </div>
                
            </div>
          </div>


        </div>
 
      
  );
}

export default App;
