const { createApp, ref, reactive } = Vue;
createApp({
    setup() {
        const currentIdx = ref(0);

        const tabs = reactive([
            {
                image:"./image/资源.png",
                name: "资源",
                count: 3,
            },
            {
                image:"./image/成员.png",
                name: "成员",
                count: 31,
            },
            {
                image:"./image/活动.png",
                name: "活动",
                count: 13,
            },
            {
                image:"./image/分组.png",
                name: "分组",
                count: 5,
            }
        ]);

        const contents = reactive([
            {
                list: [
                       "选项卡练习.pdf",
                       "计算器练习.pdf"
                    ],
            },
            {
                list: [
                    {
                        url:'https://public-cdn-oss.mosoteach.cn/avatar/2021/91/125cc0794c06f55ec6628339b4baee63.jpg?v=1615285685&x-oss-process=style/s300x300',
                        name:"孙宇航",
                      
                    },{
                        url:'https://public-cdn-oss.mosoteach.cn/avatar/2019/4C/3117093603a057f6bf0e5dd65aa5b8ff.jpg?v=1676265419&x-oss-process=style/s300x300',
                        name:"⾦晨星",
                       
                    },{
                        url:'https://public-cdn-oss.mosoteach.cn/avatar/2023/6C/98dd2bc694ed7355d14a6f60af1d6762.jpg?v=1676537680&x-oss-process=style/s300x300',
                        name:"曹栋梁",
               
                    },{
                        url:'https://public-cdn-oss.mosoteach.cn/avatar/2023/43/7fe99803c9eb5be9762025514be2501e.jpg?v=1677922731&x-oss-process=style/s300x300',
                        name:"杨⻄澳",
                  
                    },{
                        url:'https://public-cdn-oss.mosoteach.cn/avatar/2019/8D/a91561b401a7c135dcf4c7adcd108e6d.jpg?v=1676101855&x-oss-process=style/s300x300',
                        name:"王瀚锋",
           
                    }
                 ],
            },
            {
                list: ["uni-app 练习", "计数器练习", "选项卡练习"],
            },
            {
                list: [
                    "Vue 3 起步",
                    "Composition API",
                    "Vue 路由",
                    "Pinia 状态管理",
                    "综合案例",
                ],
            },
        ]);
        //改变currentIdx 的值为当前点击项的索引
        const changeTab=(index)=>{
            currentIdx.value=index;
        };
        return{
            currentIdx,
            tabs,
            contents,
            changeTab,
        };
    }
}).mount("#app");
