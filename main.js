Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: /*html*/ `<div class="product">
  <div class="product-image">
    <img :src="image" :alt="image_alt" />
  </div>
  <div class="product-info">
    <h1>{{title}}</h1>
    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>
    <p>Shipping: {{ shipping }}</p>
    <ul>
      <li v-for="detail in details">{{detail}}</li>
    </ul>
    <div
      v-for="(variant, index) in variants"
      :key="variant.variantId"
      class="color-box"
      :style="{backgroundColor: variant.variantColor }"
      @mouseover="updateProduct(index)"
    ></div>
    <button
      v-on:click="addToCart"
      :disabled="!inStock"
      :class="{disabledButton: !inStock}"
    >
      Add to cart
    </button>
    <div class="cart">
      <p>Cart {{cart}}</p>
    </div>
  </div>
</div>`,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      description: "A pair of warm fuzzy socks socks",
      // image: "./assets/vmSocks-green-onWhite.jpg",
      selectedVariant: 0,
      image_alt: "green socks with Vue logo",
      // inStock: true,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./assets/vmSocks-green-onWhite.jpg",
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./assets/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0
        }
      ],
      cart: 0
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      // this.image = variantImage;
      (this.selectedVariant = index), console.log(index);
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping(){
      if(this.premium){
        return "Free"
      }
      return 2.99
    }
  }
});
const app = new Vue({
  el: "#app",
  data: {
    premium: true
  }
});
