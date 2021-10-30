import React from 'react'
import Button from '@material-ui/core/Button';

//estilos

//graficos

const bargraphictypelimitation = (props) => {
    console.log(props)
    return (
        <div class="row" >
            <div class="col-lg-6 col-xl-6">
                {props.ResumLimitation[0]!==undefined? <div class="row" >
                    <div class="col-lg-3 col-xl-3 col-3">
                        <Button variant="contained" style={{backgroundColor:'#f9373c',height: '60px'}} endIcon={<img src={'/img/logo-e16110054289492.png'} style={{marginLeft:-15, height: '30px', width: '30px' }}  alt="Todas las limitaciones"/> }>
                        </Button>
                    </div>
                    <div class="col-8">
                        <div class="row">
                            <div class="col-8">
                                <label style={{fontWeight:'bold'}}>{props.ResumLimitation[0].Descripcion}</label>
                            </div>
                            {props.ResumLimitation[0].Hombres !==null ? <div class="col-4 text-center">
                                <label style={{marginLeft:'55%'}}>{props.ResumLimitation[0].total.toLocaleString()}</label>
                            </div>:null}
                            <div class="col-6" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[0].Hombres !==null ? <label >{'Hombres ' +'('+Math.round(props.ResumLimitation[0].Hombres_percentage)+'%) '+ props.ResumLimitation[0].Hombres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>
                            {props.ResumLimitation[0].Mujeres !==null ? <div class="col-6 text-center" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[0].Hombres !==null ? <label style={{marginLeft:'10%'}}>{'Mujeres ' +'('+Math.round(props.ResumLimitation[0].Mujeres_percentage)+'%) '+ props.ResumLimitation[0].Mujeres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>:null}
                            {props.ResumLimitation[0].Mujeres !==null || props.ResumLimitation[0].Hombres !==null ? <div class="col-12">
                                <div class="progress" style={{background:'#E6282E'}}>
                                    <div class="progress-bar" style={{width:Math.round(props.ResumLimitation[0].Hombres_percentage)+'%',background:'#3871E5'}}>
                                    </div>
                                    
                                    </div>
                                </div>:null}
                        </div>
                    </div>
                </div>:null}
                <div class="row"  style={{marginTop:'20px'}}>
                    <div class="col-lg-3 col-xl-3 col-3">
                        <Button variant="contained" style={{backgroundColor:'#f9373c',height: '60px'}} endIcon={<img src={'/img/Vector (2).png'} style={{marginLeft:-15, height: '30px', width: '30px',color:'white' }}  alt="De la comunicación"/> }>
                        </Button>
                    </div>
                    <div class="col-8">
                        <div class="row">
                        <div class="col-8">
                                <label style={{fontWeight:'bold'}}>{props.ResumLimitation[1].Descripcion}</label>
                            </div>
                            {props.ResumLimitation[1].Hombres !==null ? <div class="col-4 text-center">
                                <label style={{marginLeft:'55%'}}>{props.ResumLimitation[1].total.toLocaleString()}</label>
                            </div>:null}
                            <div class="col-6" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[1].Hombres !==null ? <label >{'Hombres ' +'('+Math.round(props.ResumLimitation[1].Hombres_percentage)+'%) '+ props.ResumLimitation[1].Hombres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>
                            {props.ResumLimitation[1].Mujeres !==null ? <div class="col-6 text-center" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[1].Hombres !==null ? <label style={{marginLeft:'10%'}}>{'Mujeres ' +'('+Math.round(props.ResumLimitation[1].Mujeres_percentage)+'%) '+ props.ResumLimitation[1].Mujeres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>:null}
                            {props.ResumLimitation[1].Mujeres !==null || props.ResumLimitation[1].Hombres !==null ? <div class="col-12">
                                <div class="progress" style={{background:'#E6282E'}}>
                                    <div class="progress-bar" style={{width:Math.round(props.ResumLimitation[1].Hombres_percentage)+'%',background:'#3871E5'}}>
                                    </div>
                                    
                                    </div>
                                </div>:null}
                        </div>
                    </div>
                </div>
                <div class="row"  style={{marginTop:'20px'}}>
                    <div class="col-lg-3 col-xl-3 col-3">
                        <Button variant="contained" style={{backgroundColor:'#f9373c',height: '60px'}} endIcon={<img src={'/img/Vector (3).png'} style={{marginLeft:-15, height: '30px', width: '30px' }} alt="De la conducta" /> }>
                        </Button>
                    </div>
                    <div class="col-8">
                        <div class="row">
                        <div class="col-8">
                                <label style={{fontWeight:'bold'}}>{props.ResumLimitation[2].Descripcion}</label>
                            </div>
                            {props.ResumLimitation[2].Hombres !==null ? <div class="col-4 text-center">
                                <label style={{marginLeft:'55%'}}>{props.ResumLimitation[2].total.toLocaleString()}</label>
                            </div>:null}
                            <div class="col-6" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[2].Hombres !==null ? <label >{'Hombres ' +'('+Math.round(props.ResumLimitation[2].Hombres_percentage)+'%) '+ props.ResumLimitation[2].Hombres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>
                            {props.ResumLimitation[2].Mujeres !==null ? <div class="col-6 text-center" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[2].Hombres !==null ? <label style={{marginLeft:'10%'}}>{'Mujeres ' +'('+Math.round(props.ResumLimitation[2].Mujeres_percentage)+'%) '+ props.ResumLimitation[2].Mujeres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>:null}
                            {props.ResumLimitation[2].Mujeres !==null || props.ResumLimitation[2].Hombres !==null ? <div class="col-12">
                                <div class="progress" style={{background:'#E6282E'}}>
                                    <div class="progress-bar" style={{width:Math.round(props.ResumLimitation[2].Hombres_percentage)+'%',background:'#3871E5'}}>
                                    </div>
                                    
                                    </div>
                                </div>:null}
                        </div>
                    </div>
                </div>
                <div class="row"  style={{marginTop:'20px'}}>
                    <div class="col-lg-3 col-xl-3 col-3">
                        <Button variant="contained" style={{backgroundColor:'#f9373c',height: '60px'}} endIcon={<img src={'/img/Group (3).png'} style={{marginLeft:-15, height: '30px', width: '30px' }}  alt="Del cuidado personal"/> }>
                        </Button>
                    </div>
                    <div class="col-8">
                        <div class="row">
                        <div class="col-8">
                                <label style={{fontWeight:'bold'}}>{props.ResumLimitation[3].Descripcion}</label>
                            </div>
                            {props.ResumLimitation[3].Hombres !==null ? <div class="col-4 text-center">
                                <label style={{marginLeft:'55%'}}>{props.ResumLimitation[3].total.toLocaleString()}</label>
                            </div>:null}
                            <div class="col-6" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[3].Hombres !==null ? <label >{'Hombres ' +'('+Math.round(props.ResumLimitation[3].Hombres_percentage)+'%) '+ props.ResumLimitation[3].Hombres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>
                            {props.ResumLimitation[3].Mujeres !==null ? <div class="col-6 text-center" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[3].Hombres !==null ? <label style={{marginLeft:'10%'}}>{'Mujeres ' +'('+Math.round(props.ResumLimitation[3].Mujeres_percentage)+'%) '+ props.ResumLimitation[3].Mujeres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>:null}
                            {props.ResumLimitation[3].Mujeres !==null || props.ResumLimitation[3].Hombres !==null ? <div class="col-12">
                                <div class="progress" style={{background:'#E6282E'}}>
                                    <div class="progress-bar" style={{width:Math.round(props.ResumLimitation[3].Hombres_percentage)+'%',background:'#3871E5'}}>
                                    </div>
                                    
                                    </div>
                                </div>:null}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-xl-6" >
                <div class="row" >
                    <div class="col-lg-3 col-xl-3 col-3">
                        <Button variant="contained" style={{backgroundColor:'#f9373c',height: '60px'}} endIcon={<img src={'/img/dist.png'} style={{marginLeft:-15, height: '40px', width: '40px' }}  alt="De la locomoción"/> }>
                        </Button>
                    </div>
                    <div class="col-8">
                        <div class="row">
                        <div class="col-8">
                                <label style={{fontWeight:'bold'}}>{props.ResumLimitation[4].Descripcion}</label>
                            </div>
                            {props.ResumLimitation[4].Hombres !==null ? <div class="col-4 text-center">
                                <label style={{marginLeft:'55%'}}>{props.ResumLimitation[4].total.toLocaleString()}</label>
                            </div>:null}
                            <div class="col-6" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[4].Hombres !==null ? <label >{'Hombres ' +'('+Math.round(props.ResumLimitation[4].Hombres_percentage)+'%) '+ props.ResumLimitation[4].Hombres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>
                            {props.ResumLimitation[4].Mujeres !==null ? <div class="col-6 text-center" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[4].Hombres !==null ? <label style={{marginLeft:'10%'}}>{'Mujeres ' +'('+Math.round(props.ResumLimitation[4].Mujeres_percentage)+'%) '+ props.ResumLimitation[4].Mujeres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>:null}
                            {props.ResumLimitation[4].Mujeres !==null || props.ResumLimitation[4].Hombres !==null ? <div class="col-12">
                                <div class="progress" style={{background:'#E6282E'}}>
                                    <div class="progress-bar" style={{width:Math.round(props.ResumLimitation[4].Hombres_percentage)+'%',background:'#3871E5'}}>
                                    </div>
                                    
                                    </div>
                                </div>:null}
                        
                        </div>
                    </div>
                    
                </div>
                <div class="row" style={{marginTop:'20px'}}>
                    <div class="col-lg-3 col-xl-3 col-3">
                        <Button variant="contained" style={{backgroundColor:'#f9373c',height: '60px'}} endIcon={<img src={'/img/Group (4).png'} style={{marginLeft:-15, height: '30px', width: '30px' }}  alt="Disposición corporal"/> }>
                        </Button>
                    </div>
                    <div class="col-8">
                        <div class="row">
                        <div class="col-8">
                                <label style={{fontWeight:'bold'}}>{props.ResumLimitation[5].Descripcion}</label>
                            </div>
                            {props.ResumLimitation[4].Hombres !==null ? <div class="col-4 text-center">
                                <label style={{marginLeft:'55%'}}>{props.ResumLimitation[5].total.toLocaleString()}</label>
                            </div>:null}
                            <div class="col-6" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[5].Hombres !==null ? <label >{'Hombres ' +'('+Math.round(props.ResumLimitation[5].Hombres_percentage)+'%) '+ props.ResumLimitation[5].Hombres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>
                            {props.ResumLimitation[5].Mujeres !==null ? <div class="col-6 text-center" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[5].Hombres !==null ? <label style={{marginLeft:'10%'}}>{'Mujeres ' +'('+Math.round(props.ResumLimitation[5].Mujeres_percentage)+'%) '+ props.ResumLimitation[5].Mujeres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>:null}
                            {props.ResumLimitation[5].Mujeres !==null || props.ResumLimitation[5].Hombres !==null ? <div class="col-12">
                                <div class="progress" style={{background:'#E6282E'}}>
                                    <div class="progress-bar" style={{width:Math.round(props.ResumLimitation[5].Hombres_percentage)+'%',background:'#3871E5'}}>
                                    </div>
                                    
                                    </div>
                                </div>:null}
                        
                        </div>
                    </div>
                    
                </div>
                <div class="row" style={{marginTop:'20px'}}>
                    <div class="col-lg-3 col-xl-3 col-3">
                        <Button variant="contained" style={{backgroundColor:'#f9373c',height: '60px'}} endIcon={<img src={'/img/Vector (4).png'} style={{marginLeft:-15, height: '30px', width: '30px' }}  alt="De la destreza"/> }>
                        </Button>
                    </div>
                    <div class="col-8">
                        <div class="row">
                        <div class="col-8">
                                <label style={{fontWeight:'bold'}}>{props.ResumLimitation[6].Descripcion}</label>
                            </div>
                            {props.ResumLimitation[6].Hombres !==null ? <div class="col-4 text-center">
                                <label style={{marginLeft:'55%'}}>{props.ResumLimitation[6].total.toLocaleString()}</label>
                            </div>:null}
                            <div class="col-6" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[6].Hombres !==null ? <label >{'Hombres ' +'('+Math.round(props.ResumLimitation[6].Hombres_percentage)+'%) '+ props.ResumLimitation[6].Hombres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>
                            {props.ResumLimitation[6].Mujeres !==null ? <div class="col-6 text-center" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[6].Hombres !==null ? <label style={{marginLeft:'10%'}}>{'Mujeres ' +'('+Math.round(props.ResumLimitation[6].Mujeres_percentage)+'%) '+ props.ResumLimitation[6].Mujeres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>:null}
                            {props.ResumLimitation[6].Mujeres !==null || props.ResumLimitation[6].Hombres !==null ? <div class="col-12">
                                <div class="progress" style={{background:'#E6282E'}}>
                                    <div class="progress-bar" style={{width:Math.round(props.ResumLimitation[6].Hombres_percentage)+'%',background:'#3871E5'}}>
                                    </div>
                                    
                                    </div>
                                </div>:null}
                        
                        </div>
                    </div>
                    
                </div>
                <div class="row" style={{marginTop:'20px'}}>
                    <div class="col-lg-3 col-xl-3 col-3">
                        <Button variant="contained" style={{backgroundColor:'#f9373c',height: '60px'}} endIcon={<img src={'/img/Vector (5).png'} style={{marginLeft:-15, height: '30px', width: '30px' }}  alt="De la situación"/> }>
                        </Button>
                    </div>
                    <div class="col-8">
                        <div class="row">
                        <div class="col-8">
                                <label style={{fontWeight:'bold'}}>{props.ResumLimitation[7].Descripcion}</label>
                            </div>
                            {props.ResumLimitation[7].Hombres !==null ? <div class="col-4 text-center">
                                <label style={{marginLeft:'55%'}}>{props.ResumLimitation[7].total.toLocaleString()}</label>
                            </div>:null}
                            <div class="col-6" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[7].Hombres !==null ? <label >{'Hombres ' +'('+Math.round(props.ResumLimitation[7].Hombres_percentage)+'%) '+ props.ResumLimitation[7].Hombres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>
                            {props.ResumLimitation[7].Mujeres !==null ? <div class="col-6 text-center" style={{marginTop:'10px'}}>
                                {props.ResumLimitation[7].Hombres !==null ? <label style={{marginLeft:'10%'}}>{'Mujeres ' +'('+Math.round(props.ResumLimitation[7].Mujeres_percentage)+'%) '+ props.ResumLimitation[7].Mujeres.toLocaleString()}</label>:<label >no hay datos</label>}
                            </div>:null}
                            {props.ResumLimitation[7].Mujeres !==null || props.ResumLimitation[7].Hombres !==null ? <div class="col-12">
                                <div class="progress" style={{background:'#E6282E'}}>
                                    <div class="progress-bar" style={{width:Math.round(props.ResumLimitation[7].Hombres_percentage)+'%',background:'#3871E5'}}>
                                    </div>
                                    
                                    </div>
                                </div>:null}
                        
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default bargraphictypelimitation