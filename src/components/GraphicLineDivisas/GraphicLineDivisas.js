import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import dataFormaternumber from '../../helpers/formaternumber'


//estilos
import GraphicLineDivisas from './GraphicLineDivisas.css'
import '../../pages/dashboard/dashboard.css'

//graficos


const ComponentGraphicLineDivisas = (props) => {
    const [dataStadisticdivisas, setStadisticdivisas] = useState(props.dataStadisticdivisas)

    return (
        <div className="large--container stadistic-bar-age" >
            <div className="de--title row" style={{marginBottom:'10px'}}>
                <span className="col-lg-11 col-xl-11 col-10">Estadísticas de las Divisas</span>
                
            </div>
            <div style={{height:'400px'}}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={dataStadisticdivisas}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={dataFormaternumber}/>
                        <Tooltip />
                        <Line type="monotone" dataKey="valor" stroke="#82ca9d"  />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ComponentGraphicLineDivisas
