
import React, {useState} from 'react';


export default function Exercise01 (){

    
    const [fruitList, _] = useState(["uva","banana","morango","abacaxi","laranja"])
 
    return (
        <ul>
            {fruitList.map(fruit=> <li>{fruit}</li>)}
        </ul>
    
    )

}
