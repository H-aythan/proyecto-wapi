
import { useState } from 'react';
import Chat from './Chat';
import Home from './Home';


const App=()=>{
  
  const [user,setUser]=useState(false);
  console.log(user);
  return(
    <>
      {user?<Chat info={user} />:<Home setInfo={setUser}/>}
    </>
    );
}




export default App;
