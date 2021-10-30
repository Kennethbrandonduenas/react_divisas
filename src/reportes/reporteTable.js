import React, {useState,useEffect} from 'react'



const ReporteTable = (props) => {
    const [registros, setRegistros] = useState(props.registros);
    const [windowsStatus, setWindowsStatus] = useState([]);

    useEffect(() => {

        setRegistros(props.registros)
      }, [props]);


    function openMenu(id){
        console.log(id)
        var ventanas= windowsStatus

        ventanas.map(x=>{
            if(x.id===id){
                x.estatus= !x.estatus
            }
            return x

        })

        setWindowsStatus(ventanas)

        console.log(windowsStatus)

    }

    function estilosMenu(index){
        if(windowsStatus.filter(x=>x.id===index)[0].estatus===true){
            return {
                display: "flex" 

            }
        }
        else{
            return {
                display: "none" 

            }
        }

    }

    return (
        <div className="mapaTable--secction"  style={{display:"none"}}>

            <table className="tableMapa" id="table-to-xls">

                <thead>
                    <tr >
                        <th style={{borderTopLeftRadius:"10px"}} >Región</th>
                        <th >Provincia</th>
                        <th >Distrito</th>
                        <th >Total de PCD</th>
                        <th >NSE Pred.</th>
                        <th >Edad promedio</th>
                        <th >Estado Lab</th>
                        <th style={{borderTopRightRadius:"10px", color:"#E6282E"}}></th>
                    </tr>
                </thead>

                <tbody>

                    {
                        registros.map((x,index)=>{

                            var objeto={id:index,estatus:false}
                            

                            windowsStatus.push(objeto)
                            

                            return <tr key={index}>
                                    <td  >{x.REGION} <div className="maptable-line"></div></td>
                                    <td >{x.PROVINCIA} <div className="maptable-line"></div></td>
                                    <td >{x.DISTRITO} <div className="maptable-line"></div></td>
                                    <td >{x.TOTAL} <div className="maptable-line"></div></td>
                                    <td >{x.NSE} <div className="maptable-line"></div></td>
                                    <td >{x.EDAD} <div className="maptable-line"></div></td>
                                    <td  >{x.LABORAL}</td>
                                    </tr>
                        })


                    }

                    
                </tbody>

            </table>

        </div>
    )
}

export default ReporteTable