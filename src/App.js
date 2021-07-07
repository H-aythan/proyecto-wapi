
import { useState } from 'react';
import Chat from './Chat';
import Home from './Home';


const App=()=>{
  const [user,setUser]=useState(false);
  return(
    <>
      {user?<Chat/>:<Home/>}
    </>
    );
}




export default App;
