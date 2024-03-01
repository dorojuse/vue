Vue.createApp({
  data() {
    return {
      ontext: "Good Morning",
      offtext: "Good Night",
      isItMorning: true,
    };
  },
  methods: {
    changeText() {
      if (this.isItMorning) {
        document.title = this.ontext;
      } else {
        document.title = this.offtext;
      }
    },
  },
}).mount("#app");
