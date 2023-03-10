// const product = 'Socks'
const app =Vue.createApp({
    data() {
        return {
            product :'Socks',
            description:'A warm fuzzy pair of socks.',
            image:'./assets/images/socks_blue.jpg',
            url:'https://cn.vuejs.org',
            inStock:true
        }
    },
})