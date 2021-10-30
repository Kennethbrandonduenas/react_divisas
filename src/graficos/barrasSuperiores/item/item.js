import React, {useState,useEffect} from 'react'

const Item = (props) => {
    const [objeto, setObjeto] = useState([]);
    const [ishistoricsex, setishistoricsex] = useState(false)

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
        var objetosResultado= ordenarObjetos(indexArray(props.objeto))
        objetosResultado=indexArray(objetosResultado)
        setObjeto(objetosResultado)
      }, []);

    useEffect(() => {
        var objetosResultado= ordenarObjetos(indexArray(props.objeto))
        objetosResultado=indexArray(objetosResultado)
        setObjeto(objetosResultado)
      }, [props]);

    return (
        <div className="barrasSuperiores-graficC-item" style={{background:props.numero>10 ? "#F2F2F2" :"#fff"}}>
        <div className="barraSuperior--total">
               { 
                objeto.map((x,index)=>{
                    var color=""
                    if(x.nombre==="NSE A" || x.nombre==="Severo" ){
                        color="#E6282E"
                        
                    }
                    else if(x.nombre==="NSE B" || x.nombre==="Moderado"){
                        color="#FAFC00"
                    }
                    else if(x.nombre==="Leve"){
                        color="#0AFF19"
                    }
                    else if(x.nombre==="NSE C" ){
                        color="#8F5CD5"
                    }
                    else if(x.nombre==="NSE D" ){
                        color="#3871E5"
                    }
                    else if(x.nombre==="NSE E" ){
                        color="#DF1B8D"
                    }
                    else{
                        color="#E0E0E0"
                    }

                    var estilo

                    if(props.index>7){
                        estilo={
                            right:"0",
                            left:"auto"
    
                        }
                    }
                    else{
                        estilo={
                            right:"auto",
                            left:"0"
    
                        }
                    }

                    if(x.id===1){
                        porcentaje=porcentaje+x.porcentaje

                        var resultadoLabels=[]

                        for (let index2 = 0; index2 < objeto.length; index2++) {
                            

                            var objetoRes=<span className="dl-item-title">{objeto[index2].nombre}: {objeto[index2].porcentaje}%</span>
                            resultadoLabels.push(objetoRes)
                        }

                        return<>

                        <div className="barraSuperior-popuver" style={estilo}> 
                                {resultadoLabels}
                        </div>

                        <div className="barraSuperior-total" key={x.id} style={{height:"100%", width: '100%',background:color, borderTopRightRadius:"6px",borderTopLeftRadius:  "6px"}}></div>
                         </> 
                        
                    }
                    else{
                        var total= 100 - porcentaje
                        porcentaje= porcentaje + x.porcentaje
                        total=total+ "%"
                        return <>

                        <div className="barraSuperior-total" key={x.id} style={{height:total, width: '100%',background:color}}></div>
                        </>
                    }
                    
                    
                })
            }

                
                
                
        </div>
        
        <div className="barraSuperior--labelBotton">
            <span>{props.nombre|| props.label}</span>
        </div>
    </div>
    )
}

export default Item
