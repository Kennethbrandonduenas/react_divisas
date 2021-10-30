import React, { useState, useEffect } from 'react'
import {Menu} from '@material-ui/core';
import "./distribucion.css"

const Distribucion = (props) => {
    const [objetos, setObjetos] = useState(props.objetos);



    

    

    useEffect(() => {
        setObjetos(props.objetos);
    }, [props.objetos])

    const indexStyle=(id)=>{
        if(id>3){
        return {right:"60px"}
        }
        return {left:"60px"}
    }


    return (
        <div className="distribucion-container">

            <div className="distribucion-label-response" style={{marginBottom:"8px"}}>
                <span>Mujer</span>

            </div>

            <div className="distribucion-labels">
                <div className="dt-label">
                    <span>Mujer</span>
                </div>

                <div className="dt-label">
                    <span>Hombre</span>
                </div>

            </div>

            <div className="distribucion-elements-container">


                <div className="dtc-line"></div>
                {
                    objetos.map((x,index)=>{
                       return <div className="distribucion-element" key={index}  >


                           
                        <div className="de-superior"> <div style={{height:x.PA}}  > <span style={{top:"-20px"}}>{x.PA}</span> </div> </div>
                        <div className="de-inferior"> <div style={{height:x.PO}}> <span>{x.PO}</span> </div> </div>
                        <div className="dt-title">
                            <span>{x.nombre}</span>
                        </div>


                            <div  className="distribucion-boxInfo"  style={indexStyle(index)}>
                                <div className="distribucion-infoItems" style={{marginBottom:"14px"}}>
                                    <span className="distriinfo-title">Mujeres ({x.nombre})</span>
                                    <span className="distriinfo-subtitle"> {x.PACantidad.toLocaleString()} Personas</span>
                                </div>

                                <div className="distribucion-infoItems">
                                    <span className="distriinfo-title">Hombres ({x.nombre})</span>
                                    <span className="distriinfo-subtitle">{x.POCantidad.toLocaleString()} Personas</span>
                                </div>

                            </div>
    
                        </div>
                    })
                }


            </div>
            <div className="distribucion-label-response" style={{marginTop:"8px"}}>
                    <span>Hombre</span>

            </div>
        </div>
    )
}

export default Distribucion
