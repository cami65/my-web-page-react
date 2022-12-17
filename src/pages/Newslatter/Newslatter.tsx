import './Newslatter.scss' ;
import illustration from './home illustration.svg' ;



export const Newslatter =()=>
{
    return(
        <div className="newsletter">
        <div className="mpnl">
            <div className="bluepart">
                <div className="text-and-button">
                    <p className="fp">Featured Properties</p>
                    <p className="eyn">Everything you need to know when you're looking</p>
                    <button className="btn-n">Get Started Now</button>
                </div>
                <img className="phone desktop-only" src={illustration} alt=""/>
            </div>
        </div>
    </div>
    );
};