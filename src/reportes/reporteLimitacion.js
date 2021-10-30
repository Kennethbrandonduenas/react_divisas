import React from 'react'

const ReporteLimitacion = (props) => {
    return (
        <div style={{display:"none"}}>
        <table className="tableMapa" id="table-limitacion">

                <thead>
                    <tr >
                        <th style={{borderTopLeftRadius:"10px"}} >Departamento</th>
                        <th >Provincia</th>
                        <th >Distrito</th>
                        <th >Tipo</th>
                        <th >Total de la región</th>

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
                                    <td >{x.cantidad} <div className="maptable-line"></div></td>
                                    </tr>
                        })


                    }

                    
                </tbody>

                </table>
        </div>
    )
}

export default ReporteLimitacion