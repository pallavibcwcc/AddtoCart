import { useState } from "react"
import Navbar from "./components/Navbar"
import Shop from "./components/Shop"

const App = () => {


  const[cart,setCart]=useState([]);
  const[warning,setWarning]=useState(false);
  const  handleClick =(item) => {
    let isPresent = false;
    // console.log(item);
    cart.forEach((product)=>{
      if(item.id ===product.id)
        isPresent=true
    
    })
    if(isPresent)
      console.log('item already present');
setCart([...cart,item])
  }


  return(
    <div>

<Navbar size={cart.length}/>
<Shop handleClick={handleClick}/>
    </div>
  )
}
export default App;