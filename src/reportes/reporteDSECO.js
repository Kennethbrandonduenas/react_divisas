import React from 'react'

const ReporteDSECO = (props) => {
    return (
        <div style={{display:"none"}}>
        <table className="tableMapa" id="table-DSECO">

                <thead>
                    <tr >
                        <th >Tipo</th>
                        <th >Total de la región</th>
                        <th >Porcentaje de la región</th>


                    </tr>
                </thead>

                <tbody>

                    {
                        props.registros.map((x,index)=>{

                          
                                return <tr key={index}>
                                    <td >{x.nombre} <div className="maptable-line"></div></td>
                                    <td >{x.cantidad} <div className="maptable-line"></div></td>
                                    <td >{x.porcentaje} <div className="maptable-line"></div></td>
                                </tr>
            
                        })


                    }

                    
                </tbody>

                </table>
        </div>
    )
}

export default ReporteDSECO