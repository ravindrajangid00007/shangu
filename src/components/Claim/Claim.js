import React , {useState } from 'react'
import './Claim.css';
import BuyShangu from '../../images/buy-shangu.cdc0a6ccc38939ca4169f149ee1b276f.svg'
import { Button } from '@material-ui/core';
import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai';
const Claim = () => {
    const [quantity, setQuantity] = useState(0);
    const decrementHandler = ()=>{
        if(quantity > 0){
            setQuantity(quantity-1);
        }
    }
    return (
        <>
            <div className="claimBox">
                <div className="claimImageBox">
                    <div className="limitedTimeBox">
                        <p>LIMITED TIME ONLY</p>
                    </div>
                </div>
                <div className="claimInfoBox">
                    <h3 className="claimInfoBoxHeading color-white">Claim Your <span className="color-yellow">Shangu</span></h3>
                    <p>Enter how many Shangu you want to mint here</p>
                    <div className="priceInfoBox">
                        <h3 className="color-white">Price Per Shangu <span className="color-yellow">Shangu</span></h3>
                        <p>Public Sale available from jan 20,2022</p>
                    </div>
                    <div className="quantityBox">
                        <h3>QUANTITY</h3>
                        <div className="quantityIncDec">
                            <AiOutlinePlus className="positive" onClick={()=>{setQuantity(quantity+1)}}/>
                            <div className="quantity">
                                {quantity}
                            </div>
                            <AiOutlineMinus className="negative" onClick={decrementHandler}/>
                        </div>
                    </div>
                    <div className="totalBox">
                        <h3>TOTAL</h3>
                        <div className="totalCryptoAmount">
                            {quantity*100}
                        </div>
                    </div>
                    <Button variant="contained" className="buyNowButton">Buy Now</Button>
                </div>
            </div>
        </>
    )
}

export default Claim
