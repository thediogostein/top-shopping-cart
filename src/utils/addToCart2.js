export function addToCart2(cart, setCart, itemToAdd) {
    const existingItem = cart.find((item) => item.id === itemToAdd.id);

    if (existingItem) {
        const updatedCart = cart.map((item) =>
            item.id === itemToAdd.id
                ? { ...item, quantity: item.quantity + itemToAdd.quantity }
                : item
        );
        setCart(updatedCart);
    } else {
        setCart((prev) => [...prev, itemToAdd]);
    }
}