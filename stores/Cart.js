export const useCart = defineStore("cart", {
  state: () => {
    items: [];
  },
  getters: {
    getItems: (state) => state.items,
  },
  actions: {
    async addTocart(itemPayload) {
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
          productImage: itemPayload.images,
          price: itemPayload.price,
          quantity : 1,
          subTotal : itemPayload.price
        });
      }
    },
  },
});
