import React, {useState,useEffect} from 'react'

//estilos
import './simpleVariado.css'

const SimpleVariado = (props) => {
    const [objeto, setObjeto] = useState([]);
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



    useEffect(() => {

        

        
      }, []);


    useEffect(() => {
        var objetosResultado= ordenarObjetos(indexArray(props.objeto))
        objetosResultado=indexArray(objetosResultado)
        setObjeto(objetosResultado)
    }, [props]);



    return (
        <div className="simpleVariado--container">
            <div className="sv-containerBar">

                {
                    objeto.map(x=>{
                        
                        if(x.id===1){
                            porcentaje=porcentaje+x.porcentaje

                            var resultadoLabels=[]

                            for (let index2 = 0; index2 < objeto.length; index2++) {
                                
                                var objetoRes=<span className="dl-item-title">{objeto[index2].nombre}: {objeto[index2].cantidad} personas</span>
                                resultadoLabels.push(objetoRes)
                            }

                            return<>

                            <div className="simplevariado-popuver" style={{top:0}}> 
                                   {resultadoLabels}
                            </div>

                             <div className="sv-barItem" key={x.id} style={{width:"100%", background:x.color, borderBottomRightRadius:"6px", borderTopRightRadius:"6px",borderTopLeftRadius:  "6px", borderBottomLeftRadius:"6px"}}></div>
                            </>
                        }
                        else{
                            var total= 100 - porcentaje
                            porcentaje= porcentaje + x.porcentaje
                            total=total+ "%"
                            return <div className="sv-barItem" key={x.id} style={{width:total, background:x.color,borderTopLeftRadius:  "6px", borderBottomLeftRadius:"6px" }}></div>
                        }
                    })
                }
            </div>
            
            <div className={"" + (props.tipo==="map" ? 'sv-labelSimple' : 'sv-labels')}>


                {
                    objeto.map((x,index)=>{

                        return <div className="sv-label" key={objeto[ (objeto.length - 1) - index].id}>

                                <div className="sv-labelColor" style={{background:objeto[ (objeto.length - 1) - index].color}}>
            
                                </div>
            
                                <div className="sv-texS">
                                    <span> {objeto[ (objeto.length - 1) - index].nombre} </span>
                                    <span> {objeto[ (objeto.length - 1) - index].cantidad} ({objeto[ (objeto.length - 1) - index].porcentaje}%) </span>
                                </div>
                             </div>
                    })
                }

            </div>
        </div>
    )
}

export default SimpleVariado
