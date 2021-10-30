import React, {useState,useEffect} from 'react'

import './distribucionLineal.css'

//item
import Item from './item/item'

const DistribucionLineal = (props) => {
    const [objeto, setObjeto] = useState(props.objeto);


    useEffect(() => {
        setObjeto(props.objeto)
      }, [props.objeto]);



    return (
        <div className="distribucionLineal--container">

            <div className="distribucionLineal--labels">

                <span>0</span>
                <span>4k</span>
                <span>8k</span>
                <span>12k</span>
                <span>16k</span>
                <span>20k</span>
                <span>24k</span>
                <span>28k</span>
                <span>32k</span>
                <span>36k</span>
                <span>40k</span>

            </div>

            <div className="distribucionLineal--grafico">

                <div className="distribucionLineal--lineaContenedor">
                    <div className="distribucionLineal--linea"></div>
                    <div className="distribucionLineal--linea"></div>
                    <div className="distribucionLineal--linea"></div>
                    <div className="distribucionLineal--linea"></div>
                    <div className="distribucionLineal--linea"></div>
                    <div className="distribucionLineal--linea"></div>
                    <div className="distribucionLineal--linea"></div>
                    <div className="distribucionLineal--linea"></div>
                    <div className="distribucionLineal--linea"></div>
                    <div className="distribucionLineal--linea"></div>
                    <div className="distribucionLineal--linea"></div>
                </div>

                
                {
                    objeto.map((x,index)=>{
                        return <Item objeto={x.objetos} region={x.distrito} total={x.total} key={index}></Item>
                    })
                }

            </div>


            
        </div>
    )
}

export default DistribucionLineal
