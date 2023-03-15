const app = Vue.createApp({
    data() {
        return {
            count: 0,
            resColor: "grey",
        };
    },
    methods: {
        increment() {
            this.count += 1;
            if (this.count > 10) {
                this.resColor = "green";
            }else if(this.count>=0&&this.count<10){
                this.resColor="grey";
            }
        },
        decrement() {
            this.count -= 1;
            if (this.count < 0) {
                this.resColor = "red";
            }else if(this.count>=0 && this.count <10){
                this.resColor="grey"
            }
        },
        reset() {
            this.count = 0;
        },
    },
}).mount("#app");