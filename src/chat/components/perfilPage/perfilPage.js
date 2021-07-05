import{useState} from 'react'
import lapizIcon from '../../../img/lapizIcons.png'

import Seccion from './components/Seccion'
const PerfilPage = ({setAvatar,avatarIcon}) => {
    const [name,setName]=useState("anthony")
    return (
        <div className="relative w-full h-full z-10 ">
            <div style={{backgroundColor:"#009688"}} className="w-full h-1/5 flex items-end px-5 pb-5 text-white">
              <button onClick={()=>setAvatar(false)} className="focus:outline-none text-xl"> &larr; </button>
              <p className="ml-5">Perfil</p>  
            </div>
            <div className="w-full  h-4/5 ">
                <div className="w-full flex justify-center ">
                    <div className="relative text-white flex justify-center items-center">
                        <img src={avatarIcon} className="w-40 h-40 rounded-full border-2 my-10 "/>
                        <p className="absolute text-center ">AÑADIR UNA FOTO DE PERFIL</p>
                    </div>
                </div>
                <Seccion lapizIcon={lapizIcon} title="Tu nombre" info={name}/>
                <p className="px-8 text-gray-500 text-sm">
                    Este no es tu nombre de usuario ni un PIN. Este nombre sera visible para tu s contactos de WhatsApp
                </p>
                <Seccion lapizIcon={lapizIcon} title="info." info="que tal"/>
            </div>
        </div>
    )
}

export default PerfilPage
