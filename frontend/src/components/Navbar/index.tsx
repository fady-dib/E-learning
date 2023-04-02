import {useNavigate} from 'react-router-dom';
import Logo from '../../Assets/e-learningLogo.png';
import Button from '../Button'
import './Navbar.css';

const NavBar = () => {
    const navigator = useNavigate();
    const registerNavigation = () => {
        navigator('/login');
    }
    const signupNavigation = () => {
        navigator('/register');
    }
    return (
        <div className='nav-container'>
            <div className="nav-logo-container">
                <a href="/"><img className = "logo" src={Logo} alt="Logo" /></a>
            </div>
            <div className='title'><h1>E-learning</h1></div>
            <div className='nav-btn-container'>
            <Button className="nav-btn" name={'Register'} handleClick={signupNavigation}/>
            <Button name={'Log In'} handleClick={registerNavigation}/>
            </div>
        </div>
    );
}
export default NavBar;