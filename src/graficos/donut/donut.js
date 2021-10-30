import React, { useState, useEffect } from 'react'
import './donut.css'

const Donut = (props) => {
    const [objetos, setObjetos] = useState(props.objetos);

    useEffect(() => {
        setObjetos(props.objetos);
    }, [props.objetos])

    var porcentaje=0
    const tipo=props.tipo

    return (
        <div className="donut-container">

            <div className="donut-char" style={{width: tipo=="simple" ? "100%" : "50%", marginLeft: tipo=="simple" ? "25%" : "0%"}}>
                <svg width={tipo=="simple" ? "60%" : "70%"}  height="100%" viewBox="0 0 42 42" className="donut">
                   
                    <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                    <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#fff" strokeWidth="3"></circle>
                    

                        {
                            objetos.map((x,index)=>{
                                
                                var resto=100 - x.porcentaje
                                var valor= x.porcentaje + " " + resto
                                var offset="25"
                                if(x.id!==objetos[0].id){
                                    offset=100-porcentaje+25
                                    offset=offset.toString()

                                }
                                porcentaje=porcentaje+ x.porcentaje

                                if(x.porcentaje===0){
                                    return <div key={index}></div>
                                }
                                else{
                                    return <g>

                                        <g className="hover-donut">
                                        <circle className="donut-segment" strokeLinecap="round" data-per={x.porcentaje.toString()} cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke={x.color} strokeWidth="4" strokeDasharray={valor} strokeDashoffset={offset} key={index}></circle>
                                      
                                        </g>

                                        {/* <a className="text-donut-in">
                                        <g>
                                        <rect id="Rectangle 51" x={0} y="0" width="30" height="30" rx="10" fill="white"/>
                                        </g>
                                        </a> */}
    


                                      

                                  
                                    </g>
                                }
                                
                            })
                        }


                </svg>
            </div>

            <div className="donut-text" style={{width: tipo=="simple" ? "100%" : "50%"}}>

                {
                    objetos.map((x, index)=>{

                        return <div key={index}className="item-donut" style={{width: tipo=="simple" ? "50%" : "100%"}} > <div className="label-donut" style={{background:x.color}}></div> <div className="text-donut"><span>{x.nombre? x.nombre :"NN"} <span style={{display: props.p===false ? "none" : "inline"}} > ({x.porcentaje}%) </span> </span> <span> {x.cantidad} {x.labels}</span></div>  </div>

                    })
                }

            </div>

        </div>
    )
}

export default Donut
