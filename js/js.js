
Vue.component('shouye', {
    template: '#shouye',
    data(){
        return {
            spanBgd1:[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ],
            spanBgd2:[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ],
            spanBgd3:[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ],
            spanBgd4:[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ],
            spanBgd5:[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ],
            spanBgd6:[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ],
        }
    },
    methods:{
        change1:function(){
            this.spanBgd1=[
                {backgroundColor:"#039BE5",border:"solid #81D4FA 5px"}
            ]
        },
        change2:function(){
            this.spanBgd2=[
                {backgroundColor:"#039BE5",border:"solid #81D4FA 5px"}
            ]
        },
        change3:function(){
            this.spanBgd3=[
                {backgroundColor:"#039BE5",border:"solid #81D4FA 5px"}
            ]
        },
        change4:function(){
            this.spanBgd4=[
                {backgroundColor:"#039BE5",border:"solid #81D4FA 5px"}
            ]
        },
        change5:function(){
            this.spanBgd5=[
                {backgroundColor:"#039BE5",border:"solid #81D4FA 5px"}
            ]
        },
        change6:function(){
            this.spanBgd6=[
                {backgroundColor:"#039BE5",border:"solid #81D4FA 5px"}
            ]
        },

        leave1:function(){
            this.spanBgd1=[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ]
        },
        leave2:function(){
            this.spanBgd2=[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ]
        },
        leave3:function(){
            this.spanBgd3=[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ]
        },
        leave4:function(){
            this.spanBgd4=[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ]
        },
        leave5:function(){
            this.spanBgd5=[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ]
        },
        leave6:function(){
            this.spanBgd6=[
                {backgroundColor:"#94874e",border:"solid #cbc6af 5px"}
            ]
        }
        
    }
    
})
Vue.component('lishi', {
    template: '#lishi'
})
Vue.component('fazhan', {
    template: '#fazhan'
})
Vue.component('zhuangkuang', {
    template: '#zhuangkuang'
})
Vue.component('yingyong', {
    template: '#yingyong'
})
Vue.component('yingxiang', {
    template: '#yingxiang'
})
Vue.component('weilai', {
    template: '#weilai'
})

var vm = new Vue({
    el:'#app',
    data:{
        comName: 'shouye',
        

    },
    methods:{
       
    }
})