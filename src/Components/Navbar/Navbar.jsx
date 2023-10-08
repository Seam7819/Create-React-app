import PropTypes from 'prop-types'
const Navbar = ({route}) => {
    const {name,path} = route;
    return (
        <nav >
            
                <a href= {path} >
                <li className="mr-10">  {name} </li>
                </a>
            
        </nav>
    );
};
Navbar.propTypes = {
route : PropTypes.object
}
export default Navbar;