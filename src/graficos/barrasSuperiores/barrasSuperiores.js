import React, {useState,useEffect} from 'react'

//estilos
import './barrasSuperiores.css'

//item
import Item from './item/item'


const BarrasSuperiores = (props) => {
    const [objeto, setObjeto] = useState(props.objeto);
    
    useEffect(() => {
        setObjeto(props.objeto)
      }, [props]);



    return (
        <div className="barrasSuperiores-container barras-graficoC">


            <div className="bsGrafic-contenedor">
                <div className="bsGrafic-labels">
                    <span>100%</span>
                    <span>90%</span>
                    <span>80%</span>
                    <span>70%</span>
                    <span>60%</span>
                    <span>50%</span>
                    <span>40%</span>
                    <span>30%</span>
                    <span>20%</span>
                    <span>10%</span>
                    <span>0</span>


                </div>

                <div className="barrasSuperiores-graficC">
                    {
                        objeto.map((x,index)=>{

                            return <Item objeto={x.objetos} numero={index} nombre={x.nombre || x.label} key={index}></Item>
                        })
                    }

                </div>

            </div>
            


        </div>
    )
}

export default BarrasSuperiores
