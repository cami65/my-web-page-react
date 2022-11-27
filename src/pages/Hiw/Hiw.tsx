import './Hiw.scss';
import Rectangle from './Rectangle.svg'
import icon from './icon.svg'
import Vector from './Vector.svg'
import icon1 from './icon1.svg'
import icon2 from './icon2.svg'


export const Hiw = () => {
    return (
<div className="hiw">
            <div className="ft">
                <div className="ftt">
                    <div className="for-image">
                    <img className="line-img" src={Rectangle} alt=""/>
                </div>
                    <h1 className="line-head">How its works ?</h1>
                    <p className="line-parag">Everything you need to know when you're looking to buy, rent, or sell - all in one place.</p>
                </div>
                <div className="seller">
                    <div className="seller1">
                        <div className="image">
                            <img className="icon" src={icon} alt=""/>
                        </div>
                        <p className="par">Buyer Guides</p>
                        <a className="link" href="">How to buy <img className="arrow" src={Vector} alt=""/></a>
                    </div>
                    <div className="seller2">
                        <div className="image">
                            <img className="icon" src={icon1} alt=""/>
                        </div>
                        <p className="par">Renter Guides</p>
                        <a className="link" href="">How to rent <img className="arrow" src={Vector} alt=""/></a></div>
                    <div className="seller3"><div className="image">
                        <img className="icon" src={icon2} alt=""/>
                    </div>
                    <p className="par">Seller Guides</p>
                    <a className="link" href="">How to sell <img className="arrow" src={Vector} alt=""/></a></div>
                </div>
                    <button className="btn-3">Sell Full Guidelines</button>
                </div>
            </div> 
    );
};