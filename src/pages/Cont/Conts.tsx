interface INumbersProps  {
  conttext1: string ;
  conttext2: string;  
  marginLeft?:string ;

}


export const Conts =(props:INumbersProps) =>{
const { conttext1 , conttext2 , marginLeft}=props ;

return (
<div className="smallcont211" style={ marginLeft ? { marginLeft: marginLeft } : {} }> 
  <p className="conttext1">${conttext1}</p> 
  <p className="conttext2">${conttext2} </p> 
</div> 
)
}