import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("");

    function handleNamechange(event){
        setName(event.target.value);
    }

    return(
        <>
            <div>
                <input value={name} onChange={handleNamechange} />
                <p>Name: {name}</p>
            </div>
        </>
    );

};

export default MyComponent