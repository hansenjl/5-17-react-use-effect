import {useState} from 'react'

function ItemShow({item: {name, image1, image2, id, price}}){
    const [front, setFront] = useState(true)

    function flipCard(){
        setFront((f) => !f)
    }

    return(
        <div className="item" id={id + "-item"}>
            <h3>{name}</h3> 
            <div onMouseEnter={flipCard} onMouseLeave={flipCard}>
                {
                    front ? 
                    <img alt={name + " image1"} src={image1}/> :
                    <img alt={name + " image2"} src={image2}/>
                }
                
            </div>
            <br/>
            Price: {price}
            <br/>
            <button>BACK</button>
         </div>
    )

}

export default ItemShow