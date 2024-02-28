Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    removeFruits(fruittoRemove) {
      this.fruitBasket = this.fruitBasket.filter(
        (fruit) => fruit !== fruittoRemove
      );
    },
  },
}).mount("#app");
