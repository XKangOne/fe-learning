app.component("shop-details", {
    props: {
        yu: {
            // type:Array
            type: Object
        }
    },
    // template:`
    // <div class="t1" v-for="(item,index) in yu" :key="index">
    //     <p class="e1">来源地：{{item.origin}} </p> 
    //     <p class="e2">价格：{{item.price}}</p>
    //     <p class="e3">功效：{{item.effect}}</p>
    // </div>`

    //可以写成这样类型，前面type类型写成Object,在html页面中用v-for遍历
    template: `
    <div class="t1">
        <p>来源地：{{yu.origin}} </p> 
        <p>价格：{{yu.price}}</p>
        <p>功效：{{yu.effect}}</p>
    </div>`
})