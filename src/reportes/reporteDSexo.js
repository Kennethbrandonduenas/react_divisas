import React from 'react'

const ReporteDSexo = (props) => {
    return (
        <div style={{display:"none"}}>
        <table className="tableMapa" id="table-Dsexo">

                <thead>
                    <tr >
                        <th >Edad</th>
                        <th >Total de la región</th>
                        <th >Cantidad Mujeres</th>
                        <th >Porcentaje Mujeres</th>
                        <th >Cantidad Hombre</th>
                        <th >Porcentaje Hombres</th>

                    </tr>
                </thead>

                <tbody>

                    {
                        props.registros.map((x,index)=>{

                            if(index!==0){
                                return <tr key={index}>
                                <td >{x.RangoEdad} <div className="maptable-line"></div></td>
                                <td >{x.Cantidad} <div className="maptable-line"></div></td>
                                <td >{x.CantidadMujer} <div className="maptable-line"></div></td>
                                <td >{x.porcentajemujer} <div className="maptable-line"></div></td>
                                <td >{x.Cantidad -x.CantidadMujer} <div className="maptable-line"></div></td>
                                <td >{x.porcentajehombre} <div className="maptable-line"></div></td>
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

export default ReporteDSexo