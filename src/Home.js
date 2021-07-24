import React, { useState } from 'react'
import qr from './img/QrWs.PNG'
const Home = ({setInfo}) => {
    const [user,setUser]=useState({nombre:"",contraseña:""});
    
    const handleInfo=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        setInfo(user);
    }
    return (
        <div className="bg-black h-screen flex justify-center flex-wrap overflow-y-scroll">
           <div style={{height:"30%",background:"#00BFA5"}} className="w-screen flex justify-center ">
               <header style={{width:"70%"}} className="text-white flex justify-between">
                    <p style={{width:"max-content"}} className="mt-8">WHATSAPP WEB</p>
                    <form className="flex flex-col text-black" >
                        <input value={user.nombre} name="nombre" onChange={(e)=>handleInfo(e)} className="rounded mb-6" placeholder="nombre"/>
                        <input value={user.contraseña} name="contraseña" onChange={(e)=>handleInfo(e)} className="rounded" placeholder="contaseña"/>
                        <button className="text-white border" onClick={(e)=>submit(e)}>acceder</button>
                    </form>
               </header>
           </div>
           <div className="bg-white w-3/4 h-screen relative -top-24 rounded">
                <div className=" w-full h-1/2 pt-10">
                    <section className="flex justify-center">
                        <div className="text-lg w-7/12">
                            <h1 className="text-3xl mb-10">Para usar whatsApp en tu computadora :</h1>
                            <p className="mb-4 ">1. Abre whatsApp en tu telefono </p>
                            <p className="mb-4">2. toca menu o configuracion y selecciona whatsApp Web</p>
                            <p className="mb-14">3. cuando se active la camara, apunta tu telefono a esta pantalla para scanear el codigo </p>
                            <button className="text-green-500 focus:outline-none">¿necesitas ayuda para comenzar ?</button>
                        </div>
                        <div className="w-1/4 h-1/4 flex flex-wrap justify-center" >
                            <img alt="" src={qr}/>
                            <label className="mt-5 opacity-50"><input type="checkbox"/>Mantener sesion activa</label>
                        </div>
                    </section>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="border-2 w-1/2 h-4/5 border-green-500"></div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Home
