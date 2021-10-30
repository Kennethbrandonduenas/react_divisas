import React from 'react'

const ReporteEdad = (props) => {
    return (
        <div style={{display:"none"}}>
        <table className="tableMapa" id="table-edad">

                <thead>
                    <tr >
                        <th style={{borderTopLeftRadius:"10px"}} >Departamento</th>
                        <th >Provincia</th>
                        <th >Distrito</th>
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

                            var objeto={id:index,estatus:false}
                        
                            

                            return <tr key={index}>
                                    <td  > {props.departamento} <div className="maptable-line"></div></td>
                                    <td > {props.provincia} <div className="maptable-line"></div></td>
                                    <td >{props.distrito} <div className="maptable-line"></div></td>
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

export default ReporteEdad