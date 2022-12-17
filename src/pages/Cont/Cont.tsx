import './Cont.scss' ;
import imageAndCard from './image and card.png' ;
import rectangle from  './Rectangle 64.svg'
import {useState} from 'react' ;
import {Conts  } from './Conts'




export const Cont=()=>{

    const conts = [ 
        { 
          id: 1, 
          conttext1: '2,500', 
          conttext2: `Homes For Sale`
        }, { 
            id: 2, 
            conttext1: '5,000+', 
            conttext2: `Homes Recently Sold`
          },
          { 
            id: 3, 
            conttext1: '170+', 
            conttext2: `Price Reduced`
          },  
          { 
            id: 1, 
            conttext1: '2,100', 
            conttext2: `Homes For Sale`
          }, { 
              id: 2, 
              conttext1: '6,000+', 
              conttext2: `Homes Recently Sold`
            },
            { 
              id: 3, 
              conttext1: '1720+', 
              conttext2: `Price Reduced`
            }
      ]; 



      const ContsWidth=411;
      const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
      const leftButtonClickHandler = () => {
          setCurrentSlideNumber(currentSlideNumber-1);
      }
  
      const rightButtonClickHandler = () => {
          setCurrentSlideNumber(currentSlideNumber+1);
      }



    return(
<div className="cont">
            <div className="small-cont">
                <div className="small-cont1">
                    <img className="card desktop-only" src={imageAndCard} alt=""/>
                    <div className="small-cont12">
                        <div className="small-cont121">
                            <img className="line" src={rectangle} alt=""/>
                            <p className="text-cont1211">You’ve found a neighborhood you love.</p>
                            <p className="text-cont1212">When you own a home, you’re committing to living in one location for a while. In a recent Trulia survey, we found that five out of six respondents said finding the right neighborhood </p>
                        </div>
                    </div>
                </div>
                <div className="smallcont2">
                {
                    conts.map((cont, index) =>(
                    <Conts 
                            conttext1={cont.conttext1}
                            conttext2={cont.conttext2}
                            marginLeft={index===0 ? `${-ContsWidth * currentSlideNumber}px` : ""}                    />
                    ))}
                </div>
                <div className="leftright">
                    <button className="carousel-button left" disabled={currentSlideNumber===0} onClick={leftButtonClickHandler}>left</button>
                    <button className="carousel-button right" disabled={currentSlideNumber===conts.length-3} onClick={rightButtonClickHandler}>right</button>
                </div>
            </div>
        </div>
    );
};