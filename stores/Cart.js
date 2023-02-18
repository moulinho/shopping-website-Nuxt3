import { useLocalStorage } from "@vueuse/core";

export const useCart = defineStore("cart", {
  state: () => ({
    items: useLocalStorage("items", []),
  }),
  //Save & persistence the state to localStorage
  hydrate(state, initialState) {
    state.items = useLocalStorage("items", []);
  },

  getters: {
    getItems: (state) => state.items,

    getTotalItems: (state) =>
      state.items.reduce((sum, current) => sum + current.quantity, 0),

    getToralAmount: (state) => state.items.reduce((sum,current) => sum + current.subTotal,0)
  },

  actions: {
    /**
     * Add item to cart
     *
     * @param {object} itemPayload
     */
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
          productCategory: itemPayload.category,
        });
      }
    },

    /**
     * If the item is not found, create a new one.
     *
     * @param {object} product
     */

    async incrementQuatity(product) {
      let existingItemIndex = this.items.findIndex(
        (item) => item.productId === product.productId
      );

      product.quantity += 1;

      product.subTotal = product.price * product.quantity;

      this.items[existingItemIndex] = product;
    },

    /**
     * Decrement the quantity of a product by one.
     *
     * @param {object} product
     */

    async decrementQuantity(product) {
      let existingItemIndex = this.items.findIndex(
        (item) => item.productId === product.productId
      );
      product.quantity -= 1;
      product.subTotal = product.price * product.quantity;
      this.items[existingItemIndex] = product;
      if (product.quantity < 1) {
        this.removeProductFromCart(product)
        
      }
    },


    async removeProductFromCart(product) {
      let existingItemIndex = this.items.findIndex(
        (item) => item.productId === product.productId
      );
      this.items.splice(existingItemIndex, 1);
    },

    /**
     * Clear all product
     */
    async clearCart() {
      this.items = [];
    },
  },
});
