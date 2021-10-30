import React, {useEffect,useState} from 'react'
import axios from 'axios';
import URL from '../../url.json'
import LoadingComponent from '../../components/loadingComponent/loadingComponent'
import ComponentGraphicLineDivisas from '../../components/GraphicLineDivisas/GraphicLineDivisas'



import "./dashboard.css"

const Dashboard = () => {
    let [dataDivisasname,setdataDivisasName] = useState([])
    const [dataDivisas, setdataDivisas] = useState(null)
    let [dataStadisticdivisas, setStadisticdivisas] = useState(null)

    //variables de error
    const [ErrorDatadivisas, setErrordataDivisas] = useState(null);


    useEffect(async() => {
        getdivisas()
    }, []);

    const getdivisas= ()=>{
        axios.post(URL.apiURL+'latest?access_key='+URL.access_key+'&format=1/latest')
        .then(response => getResponsedata(response.data))
        .catch(err=> {errorResponsedata(err);})
    }

    const getResponsedata = (data)=>{
        setStadisticdivisas(null)
        setdataDivisas(null)
        let dataDivisas = Object.entries(data.rates);
        dataDivisas.forEach(element => {
            dataDivisasname.push({
                name: element[0],
                value: element[1]
            })
        })
        setdataDivisas(dataDivisasname)        
        let filterDataDivisas = dataDivisasname.filter(data=>data.name!=='Todas las divisas')
        setStadisticdivisas(filterDataDivisas)
    }
    

    const errorResponsedata = (err)=>{
        setdataDivisas(null)
        setErrordataDivisas(err)

    }

    
    
    const callComponentgraphicLinedivisas=()=>{
        if(dataStadisticdivisas){
            return <ComponentGraphicLineDivisas  dataStadisticdivisas={dataStadisticdivisas}/>
        }
        else{
            return <div class='de--title row' style={{marginLeft:'8%'}}><LoadingComponent configuracion="large" error={ErrorDatadivisas} funcionrefresh={getdivisas}    ></LoadingComponent></div>
        }
    }
  
    return (
        <main >
            {/* sugerencia para ubicacion de contenedores dashboard */}
            
            <div class="row justify-content-center" style={{marginLeft:"0.5%"}}>
                {callComponentgraphicLinedivisas()}
            </div>
        </main>
    )
}

export default Dashboard