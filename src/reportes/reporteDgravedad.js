import React from 'react'

const ReporteDGravedad = (props) => {
    return (
        <div style={{display:"none"}}>
        <table className="tableMapa" id="table-Dgravedad">

                <thead>
                    <tr >
                        <th >Sexo</th>
                        <th >Gravedad</th>
                        <th >Total de la región</th>
                        <th >Porcentaje de la región</th>


                    </tr>
                </thead>

                <tbody>

                    {
                        props.registros.map((x,index)=>{

                            if(index!==0){
                                return <tr key={index}>
                                <td >{x.Sexo} <div className="maptable-line"></div></td>
                                <td >{x.NivelGravedad} <div className="maptable-line"></div></td>
                                <td >{x.Cantidad} <div className="maptable-line"></div></td>
                                <td >{x.porcentaje} <div className="maptable-line"></div></td>
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

export default ReporteDGravedad