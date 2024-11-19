import { useState } from "react"
import Navbar from "./components/Navbar"
import Shop from "./components/Shop"

const App = () => {


  const[cart,setCart]=useState([]);
  const[warning,setWarning]=useState(false);
  const  handleClick = (item) => {
    let isPresent = false;
    console.log(item);
    cart.forEach((product)=>{
      if(item.id ===product.id)
        isPresent=true
    
    })
    if(isPresent){
      console.log('item already present');
    setWarning(true);
    setTimeout(()=>{
      setWarning(false);
    },2000);
    return;
  }

setCart([...cart,item])
  }


  return(
    <div>

<Navbar size={cart.length}/>
<Shop handleClick={handleClick}/>
{warning && <div className="warning">
  item is already there
  </div>}
    </div>
  )
}
export default App;