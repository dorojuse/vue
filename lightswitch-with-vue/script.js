Vue.createApp({
  data() {
    return {
      isItMorning: true,
      onText: "Good Morning",
      onClassName: "body--morning",
      onButtonName: "button--morning",
      offText: "Good Night",
      offClassName: "body--night",
      offButtonName: "button--night",
    };
  },
  methods: {
    active() {
      if (this.isItMorning === true) {
        document.title = this.onText;
        document.body.classList.add(this.onClassName);
        document.body.querySelector("button").classList.add(this.onButtonName);
        document.body.classList.remove(this.offClassName);
        document.body
          .querySelector("button")
          .classList.remove(this.offButtonName);
      } else if (this.isItMorning === false) {
        document.title = this.offText;
        document.body.classList.add(this.offClassName);
        document.body.querySelector("button").classList.add(this.offButtonName);
      }
    },
  },
}).mount("#app");
