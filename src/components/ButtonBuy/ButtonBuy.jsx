import { useState } from "react";

import ButtonCount from "../ButtonCount/ButtonCount";
import InputCount from "../InputCount/InputCount";



const ButtonBuy = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            {/* <h2>Item Description</h2> */}
            
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default ButtonBuy
