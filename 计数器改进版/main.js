const app = Vue.createApp({
    data() {
        return {
            bg: "yellow",
            num: 100,
            width: 100,
        }
    },
    methods: {
        less() {
            this.num--;
            this.width -= 1;
        },
        add() {
            this.num++;
            this.width += 1;
        },
        reset() {
            this.num = 0;
            this.width = 0;
        }
    },
    computed:{
        changeColor(){
            if(this.num<0){
                this.bg="red"
            }else if(this.num>=0&&this.num<10){
                this.bg="gray"                
            }else{
                this.bg="green"
            }
            return this.bg
        }
    }
})