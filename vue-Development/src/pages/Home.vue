<template>
    <div class="index">

        <Swiper :parameter="swiper"><!-- 轮播图 --></Swiper>
    
    </div>
</template>

<script>

    import { Swiper,Row,List } from '@/assets/js/com'
    export default {
        name: 'com',
        components: {
            Swiper,
            Row,
            List
        },
        data(){
            return{
                swiper:{
                    /*
                    
                        1. 图片
                        2. 是否显示左右切换按钮
                            ①、 如果显示，位置在哪里？ 顶部？底部？还是哪里？ 这里要传style;
                            ②、 是图片还是icon？
                        3. 是否显示小圆点
                            ①、 如果显示，位置哪里？ 颜色什么？也要传style

                    */

                    bannerList:[
                       require('@/assets/logo.png'),
                       require('@/assets/logo.png'),
                       require('@/assets/logo.png')
                    ],
                    leftAndRight:{
                        show: true,
                        position: 'center', // 此处定位有三个方法： center、left、right、top,如果想自定义位置只需要把position更改为style即可,style示例： round->style
                        // style: 'do something'
                        icon:{
                            isFont: false, // 区分按钮文件属性，如果是icon请看round调用示例，如果是图片，请看本示例。
                            img: require('@/assets/images/select.png') //此处只需要放一个左图即可，会自动生成右侧图片。
                        }
                    },
                    round:{
                        show: true,
                        // position: "center",
                        style:{
                            fath:`
                                width: 22px;
                                height: 6px;
                                bottom:10px;
                                right: 20px;
                            `,
                            child:`
                                width:6px;
                                height: 6px;
                                background:black;
                                color:white;
                                border-radius: 50px;
                            `,
                            // margin: 2 //margin不写的话 默认为auto
                        },
                        icon:{
                            isFont: true,
                            img: 'icon-left' //传全局icon类名！注意icon引用格式，如果需要两个类名则两个类名都要写，如下所示：
                            // img: 'iconfont icon-left'
                        }
                    }
                }
            }
        },
        methods:{

        },
        created(){

        }
    }
</script>

<style>

</style>