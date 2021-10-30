import React, {useState,useEffect} from 'react'

//item
import Item from './item/item'

const BarrasSuperioresDobles = (props) => {
    const [objeto, setObjeto] = useState(props.objeto);
    
    useEffect(() => {
        setObjeto(props.objeto)
      }, [props]);

    return (
        <div className="barrasSuperiores-container barras-graficoC">


            <div className="bsGrafic-contenedor">
                <div className="bsGrafic-labels">
                    <span>10k</span>
                    <span>9k</span>
                    <span>8k</span>
                    <span>7k</span>
                    <span>6k</span>
                    <span>5k</span>
                    <span>4k</span>
                    <span>3k</span>
                    <span>2k</span>
                    <span>1k</span>
                    <span>0</span>


                </div>

                <div className="barrasSuperiores-graficC">
                    {
                        objeto.map((x,index)=>{
                            
                            return <Item objeto={x} numero={index} nombre={x.month || x.year} key={index}></Item>
                        })
                    }

                </div>

            </div>
            


        </div>
    )
}

export default BarrasSuperioresDobles
