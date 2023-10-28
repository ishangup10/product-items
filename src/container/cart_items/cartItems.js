import React from "react";
import styles from './cartItem.module.css'

const CartItem = ({cartList}) => {
    console.log(cartList)
    return(
        <div>
            <div style={{color:"black", fontSize:"16px", textAlign:"center"}}>
                Product for Checkout
            </div>
            {cartList && cartList.map((data) => {
               return( 
               <div className={styles.container}>
                    <span><img className={styles.image} src={data.thumbnail}/></span>
                    <span>{data.title}</span>
                    <span>{data.price}</span>
                </div>
               )
            })}
        </div>
    )
}

export default CartItem