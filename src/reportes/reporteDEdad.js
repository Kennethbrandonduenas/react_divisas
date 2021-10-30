import React from 'react'

const ReporteDEdad = (props) => {
    return (
        <div style={{display:"none"}}>
        <table className="tableMapa" id="table-Dedad">

                <thead>
                    <tr >
                        <th >Edad</th>
                        <th >Cantidad Mujeres</th>
                        <th >Porcentaje Mujeres</th>
                        <th >Cantidad Hombre</th>
                        <th >Porcentaje Hombres</th>

                    </tr>
                </thead>

                <tbody>

                    {
                        props.registros.map((x,index)=>{


                            return <tr key={index}>
                                    <td >{x.nombre} <div className="maptable-line"></div></td>
                                    <td >{x.PACantidad} <div className="maptable-line"></div></td>
                                    <td >{x.PA} <div className="maptable-line"></div></td>
                                    <td >{x.POCantidad} <div className="maptable-line"></div></td>
                                    <td >{x.PO} <div className="maptable-line"></div></td>
                                    </tr>
                        })


                    }

                    
                </tbody>

                </table>
        </div>
    )
}

export default ReporteDEdad