const app = Vue.createApp({
    data() {
        return {
            fruit:[
                {
                    id:1,
                    name:'香蕉',
                    url:'https://i.zw3e.com/zw_news_map/550/2017081/1502164032572439662.jpg'
                },
                {
                    id:2,
                    name:'苹果',
                    url:'https://img2.baidu.com/it/u=2365203419,438543602&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333'
                },
                {
                    id:3,
                    name:'西瓜',
                    url:'https://img1.baidu.com/it/u=4108434870,2496367536&fm=253&fmt=auto&app=138&f=JPEG?w=747&h=500'
                }
            ],
        details:[
            {
                origin:'杭州',
                price:'10/斤',
                effect:'美颜'
            },
            {
                origin:'广东',
                price:'12/斤',
                effect:'润肠'
            },
            {
                origin:'广西',
                price:'9/斤',
                effect:'解渴'
            }
        ]
    }
        
    },
    methods: {
        changeDetail(e){
            alert(e);
        }
    },
})