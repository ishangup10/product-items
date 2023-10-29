import React, { useEffect, useState } from "react";
import styles from './cartItem.module.css'

const CartItem = ({cartList,decreaseQuantity,increaseQuant}) => {
    const[total,setTotal] = useState(0);

    useEffect(() => {
        let totalTemp = 0;
        if(cartList.length > 0){
            cartList.forEach(element => {
                totalTemp = element.qty * element.price + totalTemp
            });
        }
        setTotal(totalTemp)
    },[cartList])


    return(
        <div>
            <div style={{color:"black", fontSize:"16px", textAlign:"center"}}>
                <p>Product for Checkout</p>
                <strong>total: <strong>${total}</strong></strong>
            </div>
            {cartList && cartList.map((data) => {
               return( 
               <div className={styles.flexContainer}>
                    <div className={styles.imageFlex}>
                        <img className={styles.image} src={data.thumbnail}/>
                    </div>
                    <div className={styles.textFlex}>
                        <div>
                            {data.title}
                        </div>
                        <div>
                            ${data.price}
                        </div>
                        <div className={styles.quantity}>
                            <span className={styles.quantityButton} onClick={() => decreaseQuantity(data)}>-</span>
                            <span>{data.qty}</span>
                            <span className={styles.quantityButton} onClick={()=> increaseQuant(data)}>+</span>
                        </div>
                    </div>
                </div>
               )
            })}
        </div>
    )
}

export default CartItem