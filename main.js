const app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "A pair of warm fuzzy socks socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    image_alt: "green socks with Vue logo",
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    }
  }
});
