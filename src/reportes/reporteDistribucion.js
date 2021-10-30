import React from 'react'

const ReporteDistribucion = (props) => {
    return (
        <div style={{display:"none"}}>
        <table className="tableMapa" id="table-distribucionPage">

                <thead>
                    <tr >
                        <th >Región</th>
                        <th >Total de la región</th>
                        <th >CONADIS total en la región</th>
                        <th >CONADIS porcentaje en la región</th>
                        <th >MIDIS total en la región</th>
                        <th >MIDIS porcentaje en la región</th>
                        <th >INEI total en la región</th>
                        <th >INEI porcentaje en la región</th>


                    </tr>
                </thead>

                <tbody>

                    {
                        props.registros.map((x,index)=>{

                            var resultado=[]
                            resultado.push(<>
                                <td >{x.distrito} <div className="maptable-line"></div></td>
                                <td >{x.total} <div className="maptable-line"></div></td>
                                </>
                                )

                            var auxArr =[]
                            var labelsArr=["CONADIS","MIDIS", "INEI"]

                            for (let index2 = 0; index2 < labelsArr.length; index2++) {
                                
                                auxArr=x.objetos.filter(y=>y.nombre===labelsArr[index2])
  
                                if(auxArr.length>0){
                                    var objetoResult=<>
                                    <td >{auxArr[0].cantidad} <div className="maptable-line"></div></td>
                                    <td >{auxArr[0].porcentaje} <div className="maptable-line"></div></td>
                                    
                                    </>
                                    resultado.push(objetoResult)
                                }
                                else{

                                    var objetoResult=<>
                                    <td >-<div className="maptable-line"></div></td>
                                    <td >- <div className="maptable-line"></div></td>
                                    
                                    </>
                                    resultado.push(objetoResult)

                                }
                                
                            }
                            



                            if(index!==0){
                                return <tr key={index}>
                                {resultado}
                                </tr>
                            }
                            return

                        })


                    }

                    
                </tbody>

                </table>
        </div>
    )
}

export default ReporteDistribucion