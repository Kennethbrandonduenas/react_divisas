import React from 'react'

const ReporteDAfiliados = (props) => {
    return (
        <div style={{display:"none"}}>
        <table className="tableMapa" id="table-Dafiliados">

                <thead>
                    <tr >
                        <th >Institución</th>
                        <th >Total de la región</th>
                        <th >Porcentaje de la región</th>


                    </tr>
                </thead>

                <tbody>

                    {
                        props.registros.map((x,index)=>{

                          
                                return <tr key={index}>
                                <td >{x.Institucion} <div className="maptable-line"></div></td>
                                <td >{x.CantidadAfiliados} <div className="maptable-line"></div></td>
                                <td >{x.PorcentajeAfiliados} <div className="maptable-line"></div></td>
                                </tr>
            
                        })


                    }

                    
                </tbody>

                </table>
        </div>
    )
}

export default ReporteDAfiliados