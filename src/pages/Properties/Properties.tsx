import './Properties.scss'
import hahaha from './hahaha.svg'
import hahaha1 from './hahaha1.svg'
import hahaha2 from './hahaha2.svg'
import image from './image.png'
import image1 from './image1.png'
import image2 from './image2.png'
import Vector222 from './Vector222.svg'


export const Properties = () =>
{
    return (
<div className="properties">
            <div className="prop-prop">
                <div className="properties1">
                    <div className="dop-class1">
                        <p className="prop-text1">Featured Properties</p>
                        <span className="prop-text2">Everything you need to know when you're looking</span> 
                    </div>
                    <div className="dop-class2">
                        <span className="prop-text3">View All Properties</span>
                        <span className="prop-text3-arrow"><img className="arrow-text" src={Vector222} alt=""/></span>
                    </div>
                </div>
                <div className="properties2">
                    <div className="image-link">
                        <img className="imggg" src={image} alt=""/>
                        <p className="values">$35000</p>
                        <p className="place">8502 Preston Rd. Inglewood, Maine 98280</p>
                        <div className="foricons">
                            <div className="ikkk">
                                <img className="ikon1" src={hahaha} alt=""/>
                                <span className="ikon11">5 Beds</span>
                            </div>
                            <div className="ikkk">
                                <img className="ikon2" src={hahaha1} alt=""/>
                                <span className="ikon22">2 both</span>
                            </div>
                            <div className="ikkk">
                                <img className="ikon3" src={hahaha2} alt=""/>
                                <span className="inon33">2000 sqft</span>
                            </div>
                        </div>
                    </div>
                    <div className="image-link">
                        <img className="imggg" src={image1} alt=""/>
                        <p className="values">$35000</p>
                        <p className="place">8502 Preston Rd. Inglewood, Maine 98280</p>
                        <div className="foricons">
                            <div className="ikkk1">
                                <img className="ikon1" src={hahaha} alt=""/>
                                <span className="ikon11">5 Beds</span>
                            </div>
                            <div className="ikkk2">
                                <img className="ikon2" src={hahaha1} alt=""/>
                                <span className="ikon22">2 both</span>
                            </div>
                            <div className="ikkk3">
                                <img className="ikon3" src={hahaha2} alt=""/>
                                <span className="ikon33" >2000 sqft</span>
                            </div>
                        </div>
                    </div>
                    <div className="image-link">
                        <img className="imggg" src={image2} alt=""/>
                        <p className="values">$35000</p>
                        <p className="place">8502 Preston Rd. Inglewood, Maine 98280</p>
                        <div className="foricons">
                            <div className="ikkk1">
                                <img className="ikon1" src={hahaha} alt=""/>
                                <span className="ikon11">5 Beds</span>
                            </div>
                            <div className="ikkk2">
                                <img className="ikon2" src={hahaha1} alt=""/>
                                <span className="ikon22">2 both</span>
                            </div>
                            <div className="ikkk3">
                                <img className="ikon3" src={hahaha2} alt=""/>
                                <span className="ikon33">2000 sqft</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
};