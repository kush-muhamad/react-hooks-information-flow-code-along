import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

 // initial value for color state
 function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  // ...

  
  function handleChangeColor (newChildColor){
    const newRandomColor = getRandomColor()
    setColor(newRandomColor);// update color to a new state
    setChildrenColor(newChildColor)
  }
  function Child({ onChangeColor, color }) {
    function handleClick(){
      const newColor = getRandomColor()
      onChangeColor(newColor)
    }
    return <div onClick ={handleClick}className="child" style={{ backgroundColor: color}} />;



  }
  
  return (
      <div className="parent" style={{ backgroundColor: color }}>
        <Child color={childrenColor} onChangeColor={handleChangeColor} />
        <Child color={childrenColor} onChangeColor={handleChangeColor} />
      </div>
  );
}

export default Parent;
