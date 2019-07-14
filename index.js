var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warn, funny socks',
    image: 'http://4.bp.blogspot.com/-7OLAdV7SZwg/T7PPDn5L-hI/AAAAAAAAAEc/VS72sPK_Z_E/s1600/ilustraciones-pinturas-surrealistas-surrealismo-dise%C3%B1o-Jacek-Yerka.jpg',
    link: 'https://www.amazon.com/Staroar-Special-Crystal-Rhinestone-Painting/dp/B07QHTY6WS/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=paintings&qid=1563057027&s=arts-crafts-intl-ship&sr=1-1',
    inStock: false,
    inventory: 100,
    details: ["80% Cotton", "20% polyester", "Gender-natural"],
    variants: [
      {
        variantId: 90,
        variantColor: "Blue",
        variantImage: 'https://www.futurity.org/wp/wp-content/uploads/2018/10/foil-ball-asteroid2_1600.jpg'
      },
      {
        variantId: 91,
        variantColor: "Green",
        variantImage: 'https://cdn.cnn.com/cnnnext/dam/assets/170604224537-colorscope-green-leaves-image-full-169.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})
