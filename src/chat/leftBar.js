import{ useState } from 'react'
import GroupUser from '../chat/components/GroupUser'
import PerfilPage from '../chat/components/perfilPage/perfilPage'
import NewChat from '../chat/components/newChat/newChat'
//iconos
import avatarIcon from '../img/avatar.jpg'
import iconMensaje from '../img/iconMensaje.png'
import puntos from '../img/3puntos.png'
import lupa from '../img/iconLupa.png'

const LeftBar = ({info}) => {
    const [menu,setMenu]=useState(false);
    const [avatar,setAvatar]=useState(false)
    const [newChat,setNewChat]=useState(false)
    return (
        <aside style={{minWidth:"35%"}} className=" relative bg-gray-100 h-full flex-grow">
            {avatar&&<PerfilPage setAvatar={setAvatar} avatarIcon={avatarIcon} info={info}/>}
            {newChat&&<NewChat setNewChat={setNewChat} lupa={lupa}/>}
            <div className="flex border px-4 justify-between bg-gray-200 h-12" >
                <button className="w-8 focus:outline-none" onClick={()=>setAvatar(!avatar)}>
                    <img src={avatarIcon}/>
                </button>
                
                <div className="h-full w-24 flex py-2 justify-around ">
                    <button className="focus:outline-none " onClick={()=>setNewChat(!newChat)}>
                        <img src={iconMensaje} className="w-5 h-5 "/>
                    </button>
                    <button className={`relative focus:outline-none w-8 h-8 rounded-full ${menu&&"bg-gray-300"} p-1`} onClick={()=>setMenu(!menu)}>
                        <img src={puntos} className="w-5 h-5"/>
                        {menu&&
                            <ul className="w-24 absolute bg-white -left-12 mt-2">
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
            
            <div style={{width:"95%"}} className="m-2 h-10 rounded-full border flex bg-white px-2">
                <button className="w-5 opacity-75 focus:outline-none" >
                    <img src={lupa} className="w-4"/>
                </button>
                <input className="w-4/5 mx-3 h-full focus:outline-none" placeholder="Busca un chat o inicia uno nuevo" />
            </div>
            
            <GroupUser/>
            

        </aside>
    )
}

export default LeftBar
