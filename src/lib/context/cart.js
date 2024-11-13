import { writable } from 'svelte/store';
export const cartStore = writable({
  items: [],
  isCartOpen: false,
});

export function addProductToCart(product) {
  cartStore.update((store) => {
    const existingItem = store.items.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      store.items = [...store.items, product];
    }
    return store;
  });
}

export function removeProductFromCart(productId) {
  cartStore.update((store) => {
    store.items = store.items.filter((item) => item.id !== productId);
    return store;
  });
}

export function toggleCart() {
  cartStore.update((store) => {
    store.isCartOpen = !store.isCartOpen;
    return store;
  });
}
