import React from 'react'

const newChat = ({setNewChat,lupa}) => {
    return (
        <div className="relative w-full h-full z-10 ">
            <div style={{backgroundColor:"#009688"}} className="w-full h-1/5 flex items-end px-5 pb-5 text-white">
              <button onClick={()=>setNewChat(false)} className="focus:outline-none text-xl"> &larr; </button>
              <p className="ml-5">Nuevo chat</p>  
            </div>
            <div className="flex h-8 px-2 bg-white rounded-full mx-2 items-center mt-2 mb-2">
                <img alt="" className="w-3 h-3 mr-5" src={lupa}/>
                <input className="focus:outline-none"/>
            </div>
            <div className="px-3 py-5 bg-white border-b">
                <p className="text-green-500">FRECUENTES</p>
            </div>
        </div>
    )
}

export default newChat
