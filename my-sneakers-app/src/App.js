import React from 'react';
import './custom.scss';
import ProductImage from './components/ProductImage/ProductImage';
import Selector from './components/Selectors/selector';
import ColorSelector from './components/ColorSelector/colorselector';
import Navbar from './components/Navbar/navbar';
import Inventory from './components/Inventory';
import './App.scss';



function App(props) {

  let [defaultColor, setDefaultcolor] = React.useState("green");
  let [defaultsize, setDefaultsize] = React.useState(8);
  let [sizes, setSizes] = React.useState(Inventory.allSizes);
  let [colors, setColors] = React.useState(Inventory.allColors);

  function handleColorChange(selectedColor) {
    const availableSizes = Inventory.byColor[selectedColor];
    setSizes(availableSizes);
    setDefaultcolor(selectedColor);

  
    
  }

  function handleSizeChange(selectedSize) {
    const availableColors = Inventory.bySize[selectedSize];
    setColors(availableColors);
    setDefaultsize(selectedSize);
  }

  

  return (

        <React.Fragment>
          <Navbar/>
          <div className="container h-100">
            <div className="row">
              <div className="col-8 vh-50">
                  <h1 className="title"> <span className="red">Customize</span>  <span className="green">Chuck</span> <span className="brown">Taylor</span>   <span className="blue">All Star</span></h1>
                  < ProductImage color={defaultColor} />
              </div>
              <div className="col-4 d-flex align-items-center">
                <div className="selector-content">
                  <Selector size={defaultsize} inventory={sizes}  handleSizeChange={handleSizeChange}/>
                  <ColorSelector color={defaultColor}  colors={colors}  handleColorChange={handleColorChange}/>
                </div>
                  
              </div>
            </div>
          </div>
        </React.Fragment>
 
  );
}

export default App;
