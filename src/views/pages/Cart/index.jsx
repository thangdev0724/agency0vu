import { reload } from "@/store/reloadSlice";
import { getCartListLocal, saveCartCookie } from "@/utils/cookies";
import CartList from "@/views/sections/Cart/CartList";
import EmptyCart from "@/views/sections/Cart/EmptyCart";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
function CartPage() {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  function updateProduct(updatedProducts) {
    saveCartCookie(updatedProducts);
    setCartItems(updatedProducts);
    dispatch(reload());
  }
  useEffect(() => {
    const itemsLocal = getCartListLocal();
    setCartItems(itemsLocal);
  }, []);
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-screen-xl p-4">
        {cartItems && cartItems.length > 0 ? (
          <CartList items={cartItems} updateProduct={updateProduct} />
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
}

export default CartPage;
