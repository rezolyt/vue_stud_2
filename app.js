Vue.createApp({
  data: () => ({
    myHtml: "<h1>Vue.js app</h1>",
    title: "123",
    person: {
      firstName: "4214",
      lastName: "9999",
      age: 22,
    },
    items: [1, 2, 3, 4, 5, 6, 7],
  }),
  methods: {
    addItem(){
        this.items.unshift(this.$refs.myInput.value);
        this.$refs.myInput.value ='';
    },
    remove(i) {
        this.items.splice(i,1)
    },
    log(item){
        console.log(item);
    }
  },
  computed: {
    evenItems() {
        return this.items.filter(i=>i % 2 ==0);
    }
  },
}).mount("#app");
