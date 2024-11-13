import { writable } from 'svelte/store';
export const cartStore = writable({
  items: [],
  isCartOpen: false,
});

export function addProductToCart(product) {
  console.log(product);
  cartStore.update((store) => {
    console.log(store);
    const existingItem = store.items.find((item) => item.id === product.id);

    console.log(existingItem);
    if (existingItem) {
      existingItem.amount += product.amount;
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
