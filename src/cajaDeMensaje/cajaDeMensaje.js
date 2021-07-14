import React,{useState} from 'react'
import chatImg from '../img/fondoChat.jpg'
import avatar from '../img/avatar.jpg'
import puntos from '../img/3puntos.png'
import lupa from '../img/iconLupa.png'
const CajaDeMensaje = ({info}) => {
    const [menu,setMenu]=useState(false);
    
    return (
        <div style={{background:`url(${chatImg})`,}} className="w-full h-full">
            <div className="w-full h-12 bg-gray-200 border-l-2 border-gray-300 flex">
                <div className="w-10/12 border h-full flex items-center">
                    <img src={avatar} className="w-8 h-8 rounded-full"/>
                    <p className="text-xs ml-2">{info.nombre}</p>
                </div>
                <div className="border flex-grow flex items-center justify-end pr-2">

                    <button className="w-5 opacity-75 focus:outline-none mr-1" >
                        <img src={lupa} className="w-4"/>
                    </button>
                    <button className={`relative focus:outline-none w-8 h-8 rounded-full ${menu&&"bg-gray-300"} p-1`} onClick={()=>setMenu(!menu)}>
                            <img src={puntos} className="w-5 h-5"/>
                            {menu&&
                                <ul className="w-24 absolute bg-white -left-12 mt-2 z-10">
                                    {[1,2,3,4,5].map(items=>{
                                        return(
                                            <li className="text-xs text-left hover:bg-gray-200 w-full pl-4 py-1 " >opcion {items}</li>
                                            )
                                        })}    
                                </ul>
                            }
                        </button>
                </div>
            </div>
            <div className="W-full h-5/6 px-16 pt-10">
                <div className="relative ">
                    <div style={{width:"min-content"}} className="bg-white w-auto pl-2 rounded-md flex">
                        <p  className="">hola</p>
                        <p className="text-xs opacity-50 flex w-16 mt-3 ml-5">10:12 p.m.</p>
                    </div>
                    <div style={{width:"min-content"}} className="absolute right-0 bg-green-100 w-auto pl-2 rounded-md flex ">
                        <p  className="">hola</p>
                        <p className="text-xs opacity-50 flex w-16 mt-3 ml-5">10:12 p.m.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CajaDeMensaje
