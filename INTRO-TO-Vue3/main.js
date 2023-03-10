// const product = 'Socks'
const app =Vue.createApp({
    data() {
        return {
            product :'Socks',
            description:'A warm fuzzy pair of socks.',
            image:'./assets/images/socks_blue.jpg',
            url:'https://cn.vuejs.org',
            inStock:true,
            // isShow:true,
            details:[
            {
                image:'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/e81eb0929b869d2098cb441da709ae66.jpeg?x-oss-process=style/s300x300',
                imgs:'./assets/images/2.jpg',
                name:'许莫淇',
                subject:'后端工程化开发',
                class:'软件2232 web2班 ',
                lable1:'发起签到',
                lable2:'课堂表现',
                isShow:false,
                // finished:false
            },
            {
                image:'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/effaea97669cecb86c6b9e9d2dce54cd.jpg?x-oss-process=style/s300x300',
                imgs:'./assets/images/2.jpg',
                name:'许莫淇',
                subject:'前端工程化开发',
                class:'软件2232 web2班 ',
                lable1:'发起签到',
                lable2:'课堂表现',
                isShow:false,
                // finished:false
            },
            {
                image:'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/319aa0a5a02386312000d5df99aa1a9d.jpeg?x-oss-process=style/s300x300',
                imgs:'./assets/images/2.jpg',
                name:'许莫淇',
                subject:'Web应用开发',
                class:'软件2232 web2班 ' ,
                lable1:'发起签到',
                lable2:'课堂表现',
                isShow:false,
            },
            {
                image:'./assets/images/3.png',
                imgs:'https://public-cdn-oss.mosoteach.cn/avatar/2017/2E/fef90ac6cde7f2ac9b91bcf31064b28a.png?v=1506683443&x-oss-process=style/s300x300',
                name:'林茂',
                subject:'2021毕业设计',
                class:'计算机应用 19级' ,
                lable1:'发起签到',
                lable2:'课堂表现',
                isShow:false,
                finished:true   
            },
        ],
            count:7
        }
    },
    methods: {
        change(item){
            console.log(item.isShow);
            // if(item.isShow){
            //     return
            // }
            item.isShow = !item.isShow
            // item.finished =!item.finished
        }
    },
})