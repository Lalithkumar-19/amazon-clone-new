import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useSelector } from 'react-redux';


function App() {
const user=useSelector(state=>state.user);

  
return(<>



<div className='app'>
  


 <BrowserRouter>
<Routes>
<Route path="/" element={[<Header/>,<Home/>]} />
<Route path='/checkout' element={[<Header/>,<Checkout/>]}/>
<Route path='/login' element={<Login/>}/>



</Routes>
</BrowserRouter>
      
    


  




</div>


</>
)







}

  
   export default  App;
