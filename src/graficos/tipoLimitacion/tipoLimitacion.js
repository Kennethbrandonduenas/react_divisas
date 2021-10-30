import React, {useState,useEffect} from 'react'

//estilos
import './tipoLimitacion.css'

const TipoLimitacion = (props) => {
    const [objeto, setObjeto] = useState(props.objeto);
    return (
        <div className="tipoLimitacion--Container">
            
            {
                objeto.map((x,index)=>{
                    return <div className="tipol-item" key={index}>
                                <span>{x.titulo}</span>
                                <span>{x.especificacion}</span>
                            </div>
                    
                })
            }



        </div>
    )
}

export default TipoLimitacion
