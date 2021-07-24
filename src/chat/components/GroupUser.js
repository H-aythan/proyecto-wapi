import React from 'react'
import '../components/GroupUser.css'
//iconos
import avatar from '../../img/avatar.jpg'
import sound from '../../img/iconSound.png'
import dbCheck from '../../img/dbCheck.png'
const userInfo=[
    {remitente:"juan",mensaje:"hola",hora:"8:13"},
    {remitente:"pedro",mensaje:"nos vemos",hora:"8:25"},
    {remitente:"jose",mensaje:"hola",hora:"10:13"},
    {remitente:"norma",mensaje:"que tal?",hora:"8:45"},
    {remitente:"mario",mensaje:"hola",hora:"8:13"},
    {remitente:"armando",mensaje:"claro!",hora:"11:13"}
]

const GroupUser = () => {
    return (
        <div style={{height:"100&"}} className="w-full bg-gray-300 overflow-x-hidden">
            

            {userInfo.map(item=>{
                return(
                <div className="w-full h-14 bg-white GridUser" >
                    <div className="row-span-2 flex justify-center items-center ">
                        <img src={avatar} alt="" className="w-10 h-10 rounded-full"/>
                    </div>
                    <div className=" w-full overflow-hidden">
                        <p className="mt-2">{item.remitente}</p>
                        <div className="w-full flex items-center">
                            <img alt="" src={dbCheck} className="border w-3 h-3"/>
                            <p className="text-xs">{item.mensaje}</p>
                        </div>
                    </div>
                    <div className=" flex items-center flex-wrap justify-center">
                        <p className="text-xs w-full">{item.hora} p.m</p>
                        <div className="flex letras">
                            <img alt="" src={sound} className="w-5 h-5 mr-2"/>
                            <div style={{backgroundColor:"rgb(37, 215, 78)"}} className="w-5 h-5 rounded-full flex justify-center items-center">5</div>
                        </div>
                    </div>
                    
                    
                </div>
                )
            })}
            
        </div>
    )
}

export default GroupUser
