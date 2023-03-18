app.component('shop-list',{
    props:{
        list:{
            type:Array,
            required: true,
        }
    },
    template:`
    <div class="t3" v-for="(item,index) in list" :key="item.id" @click="changeDetail(index)">
        <span class="t2"><img :src="item.url">{{item.name}}:</span>
    </div>`,
   methods: {
        changeDetail(index){
            this.$emit('change-detail',index)
        }
   },
})