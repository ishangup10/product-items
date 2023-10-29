import React, { useEffect, useState } from 'react'
import ProductCard from '../../common/product_card/productCard'
import CartItem from '../cart_items/cartItems'
import styles from './product.module.css'


const Product = () => {
    const[productList, setProductList] = useState([]);
    const[cartList, setCartList] = useState([]);
    const[toggleCart,setToggleCart] = useState(false);

    useEffect(() => {
        const getProductListData = async() => {
            const resp = await fetch('https://dummyjson.com/products');
            const data = await resp.json();
            if(resp.status === 200 && data.products.length > 0){
                setProductList(data.products)
            }else{
                setProductList([]);
            }
        }
        getProductListData();
    },[])

    const addToCartList = (e) => {
        let tempArr = [...cartList]
        if(tempArr.length !== 0 && tempArr.find((data)=> data.id == e.id)){
            console.log('already exist')
        }
        else{
            tempArr.push({
                id:e.id,
                qty:1,
                thumbnail: e.thumbnail,
                title:e.title,
                price:e.price
            })
        }
        setCartList(tempArr)
    }

    const removeFromCart = (e) => {
        let tempArr = [...cartList];
        if(tempArr.some((data) => data.id == e.id)){
            let ind = tempArr.findIndex((data) => data.id == e.id)
            tempArr.splice(ind,1);
        }
        setCartList(tempArr);
    }

    const decreaseQuantity = (e) => {
        if(e.qty == 1){
            removeFromCart(e)
        }else{
            let tempArr = [...cartList]
            let finddata = tempArr.find((data) => data.id == e.id)
            finddata.qty = finddata.qty - 1
            setCartList(tempArr)
        }
    }

    const increaseQuant = (e) => {
        let tempArr = [...cartList];
        let dataObj = tempArr.find((data) => data.id == e.id)
        dataObj.qty = dataObj.qty + 1
        setCartList(tempArr)
    }

    return(
        <>
        <h1>Welcome to the Electronics Mart</h1>
        <button onClick={() => setToggleCart(!toggleCart)}>Open Cart</button>
        <div className={styles.productCardRow}>
            {productList && productList.length > 0 && productList.map((data,index) => {
                return(
                    <div key={data.index} className={styles.productWidth}>
                        <ProductCard image={data.images[0]}
                        id={data.id}
                        price={data.price}
                        title={data.title}
                        setCartList={setCartList}
                        data={data}
                        addToCartList={addToCartList}
                        cartList={cartList}
                        removeFromCart={removeFromCart}
                        />
                    </div>
                )
            })}
        </div>
        {toggleCart ? 
        <div className={styles.cartItem}>
            <CartItem 
            cartList={cartList}
            decreaseQuantity={decreaseQuantity}
            increaseQuant={increaseQuant} />
        </div> : ""}
        </>
    )
}


export default Product