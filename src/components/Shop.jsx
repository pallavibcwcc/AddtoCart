import list from "../list"
import Card from "./Card"
const Shop = ({handleClick}) => {
    return(
      <section>
       {list.map((item)=>{
        return <Card item={item} key={item.id} 
        // handleClick={handleClick}
         handleClick={handleClick}/>

       })}
      </section>
    )
}
export default Shop