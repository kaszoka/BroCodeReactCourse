import profilePic from './assets/spangebob.jpg'

function Card(){

    return(

    <div className="card">
        <img className="card-image" src={profilePic} alt="Profile picture"></img>
        <h2 className='card-title'>Krzysztof Zalech</h2>
        <p className='card-text'>I make websites</p>
    </div>

    );
}

export default Card