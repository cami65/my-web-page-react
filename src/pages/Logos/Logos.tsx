import './Logos.scss' ;
import LOGO from './Logo.svg'
import Star from './Star.svg'
import logo2 from './logo2.svg'
import logo3 from './logo3.svg'
import logo4 from './logo4.svg'
import Union from './Union.svg'
import slack from './slack.svg'

export const Logos = () => {
    return(
        <div className="logos">
            <div className="logos-kt">
                <div className="logos-vb">
                    <div className="logos1">
                        <img className="imag1" src={LOGO} alt=""/>
                        <p className="text2">More than 45,000+ companies trust besnik</p>
                    </div>
                    <div className="logos2">
                        <img className="imag2" src={Star} alt=""/>
                        <p className="text3">5 Star Ratings (2k+ Review)</p>
                    </div>
                </div>
                    <div className="logos3">
                        <div className="img1">
                            <img  src={logo2} alt=""/>
                        </div>
                        <div className="img2">
                            <img  src={slack} alt=""/>
                        </div>
                        <div className="img3">
                            <img  src={Union} alt=""/>
                        </div>
                        <div className="img4">
                            <img  src={logo3} alt=""/>
                        </div>
                        <div className="img5">
                            <img  src={logo4} alt=""/>
                        </div>
                    </div>
                </div>
        </div>
    )
}