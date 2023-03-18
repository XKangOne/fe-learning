const app = Vue.createApp({
    data() {
        return {
            product:"Socket",
            brand:"Vue",
            books:"VUe2",
            firstname:"张",
            lastname:"三",
            price:34,
            num:0,
            author:{
                name:'John',
                books:["Vue2-Advanced","Vue3-Basic","Vue4-Future"]
            }
        }
    },
    methods: {
        add(){
            this.num+=1
        },
        remove(){
            this.num-=1
        }
    },
    computed:{
        title(){
            return this.brand +" "+this.product
        },
        publishMsg(){
            return this.author.books.length >0 ? "yes" : "no";
        },
        fullname:{
            get(){
                return this.firstname+"-"+this.lastname;
            },
            set(newValue){
                //解析赋值
                let res = newValue.split("-")
                this.firstname = res[0]
                this.lastname = res[1]
                // [this.firstname,this.lastname] = newValue.split("-")
            }
        },
        pricenum:{
            get(){
                return this.price*this.num
            }
        }

    }
})