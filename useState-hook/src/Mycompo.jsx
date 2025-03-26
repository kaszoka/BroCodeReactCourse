import React, {useState} from 'react'

function Mycompo(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
         setName("krzysztof");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName} >Set Name</button>

            <p>age: {age}</p>
            <button onClick={incrementAge} >increment Age</button>

            <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployedStatus} >Toggle Status</button>
        </div>
    );

};

export default Mycompo