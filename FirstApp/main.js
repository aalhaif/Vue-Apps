const App={
    data(){
        return{
            message: "Hello World",
            counter: 5,
            picture: "https://i.thatcopy.pw/cat/Nprmx6Y.jpg",
            items: [
                { item: 'Apple' },
                { item: 'Orange' },
                { item: 'Banana' }
            ],
            foods: [
                {type:"pizza", number:5},
                {type:"B", number:3},
                {type:"C", number:0}, // We can use === because we changed it from string to int, however if it is string we have to use == instead..
            ]
        }
    },
    methods: {
        increment(){
            setInterval(() => {
                this.counter=this.counter+1
                console.log("counter", this.counter)
            }, 1000);
        }
    }
}
Vue.createApp(App).mount('#app')