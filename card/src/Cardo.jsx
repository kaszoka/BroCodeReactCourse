import profilepictures from './assets/spangebob.jpg'

function Cardo(){

    return(

        <div className="cardo">
            <img className='cardo-image' src={profilepictures} alt="profilepictures"></img>
            <h3 className='cardo-title'>Spangebob</h3>
            <p className='cardo-text'>I'm crying</p>
        </div>

    );

};

export default Cardo
