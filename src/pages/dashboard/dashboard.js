import React, {useEffect,useState} from 'react'
import axios from 'axios';
import URL from '../../url.json'
import LoadingComponent from '../../components/loadingComponent/loadingComponent'
import ComponentGraphicLineDivisas from '../../components/GraphicLineDivisas/GraphicLineDivisas'



import "./dashboard.css"

const Dashboard = () => {
    const [dataDivisasname,setdataDivisasName] = useState([])
    const [dataDivisas, setdataDivisas] = useState(null)
    let [nameDivisaselected, setNamedivisaSelected] = useState('Todas las Divisas')
    let [dataStadisticdivisas, setStadisticdivisas] = useState(null)

    //variables de error
    const [ErrorDatadivisas, setErrordataDivisas] = useState(null);


    useEffect(async() => {
        getDivisas()
    }, []);

    

    const getDivisas= ()=>{

        axios.post(URL.apiURL+'latest?access_key='+URL.access_key+'&format=1/latest')
        .then(response => getResponsedata(response.data))
        .catch(err=> {errorResponsedata(err);})
    }

    const getResponsedata = (data)=>{
        setStadisticdivisas(null)
        setdataDivisas(null)
        setdataDivisasName([])
        let dataDivisas = Object.entries(data.rates);
        let dataDivisasName = [] 
        dataDivisas.forEach(element => {
            dataDivisasName.push({
                name: element[0],
                valor: element[1]
            })
        })
        dataDivisasName.unshift({
            name: 'Todas las Divisas',
            value: 0
        })
        setdataDivisasName(dataDivisasName)
        setdataDivisas(dataDivisasname)
        let filterDataDivisas = []
        let allDivisas = nameDivisaselected === 'Todas las Divisas'
        if(allDivisas){
            filterDataDivisas = dataDivisasName.filter(data=>data.name!==nameDivisaselected)
        }else{
            filterDataDivisas = dataDivisasName.filter(data=>data.name===nameDivisaselected)
        }     
        setStadisticdivisas(filterDataDivisas)
    }
    

    const errorResponsedata = (err)=>{
        setdataDivisas(null)
        setErrordataDivisas(err)
    }

    const changeNamedivisas = async(event)=>{
        setNamedivisaSelected(event.target.value)
        nameDivisaselected = event.target.value
        getDivisas()
    }

    const filterDatadivisa = async()=>{
        setStadisticdivisas(null)
        setdataDivisas(null)
        dataStadisticdivisas = null
        let allDivisas = nameDivisaselected === 'Todas Las divisas'
        let datadivisas = dataDivisas
        if(allDivisas){
            datadivisas.filter(data=>data.name !== 'Todas las divisas')
        }else{
            datadivisas.filter(data=>data.name === nameDivisaselected)
        }
        setdataDivisas(datadivisas)
        dataStadisticdivisas = dataDivisas
        setStadisticdivisas(dataDivisas)
        callComponentgraphicLinedivisas()
    }

    
    
    const callComponentgraphicLinedivisas=()=>{
        if(dataStadisticdivisas){
            return <ComponentGraphicLineDivisas  dataStadisticdivisas={dataStadisticdivisas}/>
        }
        else{
            return <div class='de--title row' style={{marginLeft:'8%'}}><LoadingComponent configuracion="large" error={ErrorDatadivisas} funcionrefresh={getDivisas}    ></LoadingComponent></div>
        }
    }
  
    return (
        <main >
            {/* sugerencia para ubicacion de contenedores dashboard */}
            <div className="large--container" style={{marginLeft:"8%"}}>
                <div className="de--title row justify-content-center">
                    <div class="col-lg-12">
                        <div class="col-12 labelubicationclass">
                            <label>Seleccione la moneda</label>
                        </div>
                        <select class="form-select divselect" onChange={changeNamedivisas} value={nameDivisaselected}  >
                            {
                                
                                dataDivisasname.map((x,index)=>{
                                    
                                    return <option value={x.name}>{x.name}</option>
                                })
                                
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center" style={{marginLeft:"0.5%"}}>
                {callComponentgraphicLinedivisas()}
            </div>
        </main>
    )
}

export default Dashboard