import LeftBar from './chat/leftBar' 
import CajaDeMensaje from './cajaDeMensaje/cajaDeMensaje'
const Chat = () => {
    return (
        <div className="w-screen h-screen flex justify-center flex-wrap bg-gray-300 border-box">
        <div style={{backgroundColor:"#009688"}} className="w-full h-32"></div>
        <div style={{height:"95%",width:"75%"}} className="fixed top-5 bg-white flex">
          <LeftBar/>
          <CajaDeMensaje/>
        </div> 
        
          
       </div>
    )
}

export default Chat
