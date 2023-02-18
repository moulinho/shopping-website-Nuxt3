import { useLocalStorage } from "@vueuse/core";

export const useCart = defineStore("cart", {
  state: () => ({
    items: useLocalStorage("items", [])
  }),

  hydrate(state, initialState) {
    state.items = useLocalStorage("items", []);
  },

  getters: {
    getItems: (state) => state.items,

    getTotalItems: (state) =>
      state.items.reduce((sum, current) => sum + current.quantity, 0),
  },

  actions: {
    async addTocart(itemPayload) {
      console.log("itemPayload", itemPayload);
     
        const existingItem = this.items.find((item) => {
          return item.productId === itemPayload.id;
        });

        if (existingItem) {
          let existingItemIndex = this.items.findIndex(
            (item) => item.productId === existingItem.productId
          );
          existingItem.quantity += 1;
          existingItem.subTotal = itemPayload.price * existingItem.quantity;
          this.items[existingItemIndex] = existingItem;
        } else {
          this.items.push({
            productId: itemPayload.id,
            productName: itemPayload.name,
            productImage: itemPayload.image,
            price: itemPayload.price,
            quantity: 1,
            subTotal: itemPayload.price,
            productCategory:itemPayload.category
          });
        }
      
    },
  },
});
