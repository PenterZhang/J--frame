<template>
    <div class="swiper oh post-r">
        <div class="swiper-image oh" :style="{'width': width + '%'}">
            <div class="image-list fl" :style="{'width': 100 / bannerList.length +'%'}" v-for="item in bannerList" :key="item">
                <img class="show" :src="item" alt="">
            </div>
        </div>
        <div class="round flex post-a" :style="roundStyle.fath" v-if="roundBtn">
            <span class="show" :class="[ roundMargin ? 'auto' :'' ]" v-for="(item,index) in bannerList" :style="round(roundStyle.child,roundStyle.margin,index)"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        parameter: Object
    },
    data(){
        return{
            bannerList:[],
            selectBtn: false,
            roundBtn: false,
            width: 0,
            selectStyle:'',
            roundStyle:'',
            roundMargin: false,
        }
    },
    methods:{
        swiper(data){
            this.bannerList = data.bannerList;
            this.roundBtn = data.round.show;
            this.width = data.bannerList.length * 100;
            switch(data.leftAndRight.show){
                case true:
                    this.selectBtn = true;
                    if(data.leftAndRight.style){
                        this.selectStyle = data.leftAndRight.style;
                    }else{
                        this.selectStyle = data.leftAndRight.position;
                    }
                break;
                default:
                    this.selectBtn = false;
                    this.selectStyle = false;
            };
            switch(data.round.show){
                case true:
                    this.roundBtn = true;
                    if(data.round.style){
                        this.roundStyle = data.round.style;
                    }else{
                        this.roundStyle = data.round.position;
                    }
                break;
                default:
                    this.roundBtn = false;
                    this.roundStyle = false;
            };

            console.log(this.selectStyle,this.roundStyle);

        },
        round(style,margin,index){
            if(index == 1){
                return style + 'margin:0px ' + margin + 'px'
            }else{
                return style
            }
        }
    },
    created(){
        this.swiper(this.parameter)
    }
}
</script>

<style scoped>

</style>