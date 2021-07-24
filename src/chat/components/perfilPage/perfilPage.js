
import lapizIcon from '../../../img/lapizIcons.png'

import Seccion from './components/Seccion'
const PerfilPage = ({setAvatar,avatarIcon,info}) => {
    
    return (
        <div style={{width:""}} className="relative h-full z-10 box-border">
            <div style={{backgroundColor:"#009688"}} className="w-full h-1/5 flex items-end px-5 pb-5 text-white">
              <button onClick={()=>setAvatar(false)} className="focus:outline-none text-xl"> &larr; </button>
              <p className="ml-5">Perfil</p>  
            </div>
            <div className="w-full  h-4/5 ">
                <div className="w-full flex justify-center ">
                    <div className="relative text-white flex justify-center items-center">
                        <img alt="" src={avatarIcon} className="w-40 h-40 rounded-full border-2 my-10 "/>
                        <p className="absolute text-center ">AÑADIR UNA FOTO DE PERFIL</p>
                    </div>
                </div>
                <Seccion lapizIcon={lapizIcon} title="Tu nombre" info={info.nombre}/>
                <div className="text-gray-500 text-sm flex justify-center">
                    <p style={{width:"90%"}} className="">Este no es tu nombre de usuario ni un PIN. Este nombre sera visible para tu s contactos de WhatsApp
                    </p>
                </div>
                <Seccion lapizIcon={lapizIcon} title="info." info="que tal"/>
            </div>
        </div>
    )
}

export default PerfilPage
