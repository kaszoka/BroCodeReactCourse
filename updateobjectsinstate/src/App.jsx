import React, { useState } from "react"

function App() {

  const [car, setCar] = useState({year: 1999, make: "mazda", model: "rx7"});

  function handleyearchange(event){
    setCar(c => ({...c, year: event.target.value}));
  };

  function handlemakechange(event){
    setCar(c => ({...c, make: event.target.value}));
  };

  function handlemodelchange(event){
    setCar(c => ({...c, model: event.target.value}));
  };

  return (
    <>
<div>

    <p>Your favorute car is: {car.year} {car.make} {car.model}</p>

    <input type="number" value={car.year} onChange={handleyearchange}  /> <br></br>
    <input type="text" value={car.make} onChange={handlemakechange} />    <br></br>
    <input type="text" value={car.model} onChange={handlemodelchange} />  <br></br>

</div>
    </>
  )
}

export default App
