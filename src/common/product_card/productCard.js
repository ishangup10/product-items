import React from "react";
import styles from './product_card.module.css'

const ProductCard = ({image,price,title,data,addToCartList,cartList,id,removeFromCart}) => {

    return(
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img className={styles.image} src={image ? image : ""}/>
                <div className="row">
                    <h3 className={styles.title}>
                        {title && title.length > 20 ? `${title.substring(0,20)}...` : title}
                    </h3>
                    <p className={styles.price}>${price}</p>
                    { cartList.find((data) =>  data.id == id) ? 
                    <div className={styles.AddButton} onClick={()=>removeFromCart(data)}>
                        <button> Remove from Cart</button> 
                    </div> :
                    <div className={styles.AddButton} onClick={()=>addToCartList(data)}>
                        <button> Add To Cart</button> 
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard