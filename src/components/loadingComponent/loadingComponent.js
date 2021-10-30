import React, {useState,useEffect} from 'react'

//estilos
import './loadingComponent.css'
import Spiner from '../spiner/spiner'

const LoadingComponent = (props) => {
    const [configuracion, setConfiguracion] = useState(props.configuracion);
    const refreshFunction=()=>{
        props.funcionrefresh(props.id)
    }
    const funcionalidad=()=>{

        if(!props.error){
            return <div >
                    <div className="title--left" style={{display:configuracion==="otro"?"none":"block"}}>
                        <span> Cargando...</span>
                    </div>

                    <Spiner></Spiner>
                </div>


                
        }
        else if (props.error.error !== undefined && props.error.error === 'no hay datos'){
            return<div >
                    <div className="title--left" >
                        <span> No hay datos</span>
                    </div>

                    <div className="refresh-button" style={{cursor:"pointer"}}  onClick={()=>{ refreshFunction()}} >
                        <span className="mpb--dash">Recargar</span>
                    </div>
            </div>
        }
        else{
            return<div >
                    <div className="title--left">
                        <span> Error de conexion</span>
                    </div>

                    <div className="refresh-button" style={{cursor:"pointer"}}  onClick={()=>{ refreshFunction()}} >
                        <span className="mpb--dash">Recargar</span>
                    </div>
            </div>
        }
    }

    return (
        <div style={{marginBottom:props.mb===true?"40px" :"0px"}}  className={configuracion==="single"?"sigle--component" : configuracion==="large"? "large--container": configuracion==="medium"?"duo--container" :"loading--component"}>

        {
            funcionalidad()
        }

        </div>
    )
}

export default LoadingComponent
