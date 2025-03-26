import PropTypes from 'prop-types';

function UserGreeting(props){

    const welcomemes = <h2 className="welcome">Welcome {props.username}</h2>
    const loginmes = <h2 className="login">Please log in to continue</h2>

    return(props.isLoggedIn ? welcomemes : loginmes);

}
UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",

}

export default UserGreeting