

function Food(){

    const food1 = "Hamburger";
    const food2 = "Kebab";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}   


export default Food