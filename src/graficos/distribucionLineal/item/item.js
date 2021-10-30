import React, {useState,useEffect} from 'react'

const Item = (props) => {
    const [objeto, setObjeto] = useState(props.objeto);

    var porcentaje=0

    function ordenarObjetos(nobjetos){
        
        var aOrdenar= nobjetos
        var aResultado=[]
        
        while(aOrdenar.length>0){
            var oMayor=aOrdenar[0]
           
            for (let index = 0; index < aOrdenar.length; index++) {
                if(aOrdenar[index].porcentaje> oMayor.porcentaje ){
                    oMayor=aOrdenar[index]
                }
            }
            aResultado.push(oMayor)
            aOrdenar=aOrdenar.filter(x=>x.id!==oMayor.id)
        }
        return aResultado
    }

    function indexArray(a){
        var newObjetos= a

        for (let index = 1; index <= newObjetos.length; index++) {
            newObjetos[index-1].id=index;
            
        }
        return newObjetos

    }

    const calculoPorcentaje=(cantidad)=>{
        return (cantidad*100)/40000
    }

    const getString=()=>{
        var stringR=props.region+ " Total:" + props.total

        var reversed= objeto.reverse()
        reversed.reverse()
        
        for (let index = 0; index < reversed.length; index++) {
            
            stringR=stringR +`     `+"  "+ " /  "+" " + reversed[index].nombre+":"+ reversed[index].cantidad +"("+ reversed[index].porcentaje+"%)  "
            stringR=stringR+"\ "
            
        }


        return stringR
    }

    useEffect(() => {
        var auxiliar=props.objeto
        var objetosResultado= ordenarObjetos(indexArray(auxiliar))
        objetosResultado=indexArray(objetosResultado)
        setObjeto(objetosResultado)

    }, [props.objeto]);

    return (
        <div className="item--container">



            <div className="dl-item-bar">

                <div className="dl-item-totalLabel">
                    <span>{getString()}</span>
                </div>

                {objeto.map((x,index)=>{
                    var color=""

                    if(x.nombre==="CONADIS"){
                        color="#E6282E"
                    }
                    else if(x.nombre==="MIDIS"){
                        color="#007676"
                    }
                    else if(x.nombre==="INEI"){
                        color="#0275d8"
                    }
                    else{
                        color="#DF1B8D"
                    }

                    return <div className="dl-item-bar-full" style={{background:color, width:calculoPorcentaje(x.cantidad)+"%"}} key={index}>
                            
                            <div className="dl-item-bar-full-container">
                                
                                <div className="dl-item-bar-full-label" style={{borderLeftColor:color}}>
                                <span className="dl-item-title">{props.region}</span>

                                <span className="dl-item-title">{x.nombre}</span>
                                <span>{x.cantidad} Personas</span>
                                <span>{x.porcentaje}%</span>


                                </div>
                            </div>

                    </div>

                })}

            </div>
            
        </div>
    )
}

export default Item
