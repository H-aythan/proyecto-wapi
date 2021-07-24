import React from 'react'

const Seccion = ({lapizIcon,title,info}) => {
    return (
        <div className="w-full px-8 bg-white">
        <p className="text-green-500 py-3">{title}</p>
        <div className="flex items-center justify-between">
            <p className="py-2">{info}</p>
            <img alt="" className=" w-5 h-5" src={lapizIcon}/>
        </div>                   
    </div>
    )
}

export default Seccion
