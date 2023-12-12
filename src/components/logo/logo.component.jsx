import Tilt from 'react-parallax-tilt';
import logo from '../../assets/logo.png';
import './logo.style.css';


const Logo = () => {
    return (
        <div>
            <Tilt className='logo-bg center br3 shadow-3' style={{ width: '150px', height: '150px' }} >
                <div>
                    <img src={logo} alt='logo' height={'170px'} width={'150px'}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;