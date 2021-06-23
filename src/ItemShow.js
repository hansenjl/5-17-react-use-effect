import {useState} from 'react'
import {
    useParams
  } from "react-router-dom";

function ItemShow({items}){
    const [front, setFront] = useState(true)

    const {id}  = useParams()
    const item = items.find(i =>  i.id === parseInt(id))

    function flipCard(){
        setFront((f) => !f)
    }

    if(!item){
        return(
            <div>
                Item not found!
            </div>
        )
    }

    return(
        <div className="item" id={ id + "-item"}>
            <h3>{item.name}</h3> 
            <div onMouseEnter={flipCard} onMouseLeave={flipCard}>
                {
                    front ? 
                    <img alt={item.name + " image1"} src={item.image1}/> :
                    <img alt={item.name + " image2"} src={item.image2}/>
                }
                
            </div>
            <br/>
            Price: {item.price}
            <br/>
            <button>BACK</button>
         </div>
    )

}

export default ItemShow