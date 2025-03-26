import React, { useState } from "react";

function Mycompo(){

    const[count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 3);
    };

    function decrement(){
        setCount(c => c - 3);
    };

    function reset(){
        setCount(0);
    };

    return( 
        <>
        <h2>Count: {count}</h2>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <button onClick={increment}>increment</button>
        </>
    );

};

export default Mycompo