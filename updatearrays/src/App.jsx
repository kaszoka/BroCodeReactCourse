import React, { useState } from "react"


function App() {

  const [foods, setFoods] = useState(["jablko", "banan", "pomarancza"]);

  function handleAddFood(){
    const newFood = document.getElementById("foodinput").value
    document.getElementById("foodinput").value = "";

    setFoods(f => [...f, newFood]);
  };

  function handleRemoveFood(index){

    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <>

    <div>
      <h2>List of food</h2>
      <ul>
        {foods.map((food, index) => <li key={index} onClick={() =>handleRemoveFood(index)}>{food}</li>)}
      </ul>
      <input type="text" id="foodinput" placeholder="enter food name"/>
      <button onClick={handleAddFood}>Add food</button>
    </div>

    </>
  )
}

export default App
