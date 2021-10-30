import React, {useState,useEffect} from 'react'



const Item = (props) => {
    const [objeto, setObjeto] = useState(props.objeto);
    var porcentaje=0


    useEffect(() => {
        setObjeto(props.objeto)
      }, [props]);

    const calcularAltura=(cantidad)=>{
        if(cantidad>10000){
            return 100
        }else{

            return Math.round(((cantidad*100)/(10000)))
        }
        
    }

    return (
        <div className="barrasSuperiores-graficC-item" style={{background:props.numero>10 ? "#F2F2F2" :"#fff"}}>
        <div className="barraSuperior--total">
               { 
                        <>

                        <div className="barraSuperior-popuver" > 
                        <span className="dl-item-title">Hombres: {objeto.male} Personas</span>
                        <span className="dl-item-title">Mujeres: {objeto.female} Personas</span>
                        </div>

                        <div className="barraSuperior-total"  style={{height:calcularAltura(objeto.male)+'%', width: '50%', background:"#3871E5", borderTopRightRadius:"6px",borderTopLeftRadius:  "6px"}}></div>
                        <div className="barraSuperior-total"  style={{height:calcularAltura(objeto.female)+'%', width: '50%', background:"#E6282E", borderTopRightRadius:"6px",borderTopLeftRadius:  "6px",marginLeft:'13px'}}></div>  
                        
                        </>
            }

                
                
                
        </div>
        
        <div className="barraSuperior--labelBotton">
            <span>{props.nombre}</span>
        </div>
    </div>
    )
}

export default Item
