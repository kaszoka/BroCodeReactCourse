
function Profilepic(){

    const imageUrl = './src/assets/spangebob.jpg';

    const handleClick = (e) => e.target.style.display = "none"
    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="img" />
    );

};

export default Profilepic