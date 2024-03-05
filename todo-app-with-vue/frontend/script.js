const URL = "http://localhost:4730/todos";

Vue.createApp({
  data() {
    return {
      todos: [],
      selectedFilter: "all",
      newTodoInput: "",
    };
  },
  methods: {
    refresh() {
      fetch(URL)
        .then((res) => res.json())
        .then((todos) => {
          this.todos = todos;
        });
    },
    onAddTodoSubmit() {
      fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          description: this.newTodoInput,
          done: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          this.newTodoInput = "";
        }
        this.refresh();
      });
    },
    onTodoItemCheckedChange(todo) {
      fetch(URL + "/" + todo.id, {
        method: "PATCH",
        body: JSON.stringify({
          done: !todo.done,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        this.refresh();
      });
    },
    removeAllDone() {
      this.todos.forEach((todo) => {
        if (todo.done) {
          fetch(URL + "/" + todo.id, {
            method: "DELETE",
          }).then((res) => {
            this.refresh();
          });
        }
      });
    },
  },
  computed: {
    filteredTodos() {
      return this.todos.filter((todo) => {
        if (this.selectedFilter == "all") {
          return true;
        }
        if (this.selectedFilter == "done") {
          return todo.done;
        }
        return !todo.done;
      });
    },
  },
  mounted() {
    this.refresh();
  },
}).mount("#app");
