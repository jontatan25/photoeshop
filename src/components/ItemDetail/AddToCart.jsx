import {React,useEffect} from "react";

const AddToCart = ({ item, cart, setCart, quantity, setQuantity, id }) => {
  let Onadd = (item) => {
    let addItem = {
      category: item.category,
      description: item.description,
      id: item.id,
      image: item.image,
      price: item.price,
      cantidad: quantity,
    };

    const index = cart.findIndex(
      (productToFind) => productToFind.id === item.id
    );
    
    if (index === -1){
        setCart([...cart, addItem]);
        console.log("Not found, adding");
    }
     else {
        let copyCart = [...cart];
        copyCart[index] = addItem
        setCart(copyCart);
        console.log("replaced");
    }
    
};

useEffect(() => {
    console.log(cart)
            }
, [cart])

  return (
    <div>
      <button
        onClick={() => Onadd(item)}
        className="itemDetail__container-right-properties-button"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCart;
