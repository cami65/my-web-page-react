import './Header.scss'
import logo from './Logo.svg';
import Home from './Group 439.svg';
export const Header = () => {
    return(
<header>
        <div className="hd">
            <img className="imag " src={logo} alt="My Logo" />
            <nav className="navig desktop-only">
                <a className="aa" href="">Home</a>
                <a className="aa" href="">Fratures</a>
                <a className="aa" href="">Service</a>
                <a className="aa" href="">Listed</a>
                <a className="aa" href="">Contact</a>
            </nav>

            <form className="fb">
                <button className="burger-menu mobile-only">Menu</button>
                <button className="btn1">Sign Up</button>
                <button className="btn2">Register</button>
            </form>
        </div>
        <div className="container1">
            <h1 className="ha">Welcome to Besnik Agency</h1>
            <h1 className="hb">Discover a place
                you'll love to live.</h1>
            <p className="hc">Get the best real estate deals first,
                before they hit the mass market! hsot foreclosure deals with one simple search</p>
                <br className="mobile-only" />
            <button className="btn3">More About Us</button>    
        </div>
            <img className="house" src={Home} alt=""/>    
    </header>
    );
};