
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
//政府组件
Vue.component('zhengfu', {
    template: '#zhengfu',
    data(){
        return {
           
            one_zan:6,
        }
    },
    methods:{
        add(){
            this.one_zan=this.one_zan+1
        }
    }
})
//政府table组件
Vue.component('zhengfu_table',{
    template:'#zhengfu_table',
    data(){
        return {
          tableData:[
              {date:'深圳',name:'广东省',address:'28.4297',paiming:'1'},
              {date:'广州',name:'广东省',address:'19.3143',paiming:'2'},
              {date:'北京',name:'北京市',address:'15.4414',paiming:'3'},
              {date:'上海',name:'上海市',address:'11.4235',paiming:'4'},
              {date:'成都',name:'四川省',address:'8.2939',paiming:'5'},
              {date:'武汉',name:'湖北省',address:'7.6144',paiming:'6'},
              {date:'重庆',name:'重庆市',address:'6.4946',paiming:'7'},
              {date:'东莞',name:'广东省',address:'6.4452',paiming:'8'},
              {date:'杭州',name:'浙江省',address:'5.5673',paiming:'9'},
              {date:'长沙',name:'湖南省',address:'5.2398',paiming:'10'},
              {date:'佛山',name:'广东省',address:'5.0606',paiming:'11'},
              {date:'郑州',name:'河南省',address:'4.9192',paiming:'12'},
              {date:'苏州',name:'江苏省',address:'4.9126',paiming:'13'},
              {date:'西安',name:'陕西省',address:'4.2335',paiming:'14'},
              {date:'福州',name:'福建省',address:'4.1455',paiming:'15'},
              {date:'厦门',name:'福建省',address:'3.8059',paiming:'16'},
              {date:'南京',name:'江苏省',address:'3.3612',paiming:'17'},
              {date:'天津',name:'天津市',address:'3.2111',paiming:'18'},
              {date:'宁波',name:'浙江省',address:'3.1242',paiming:'19'},
              {date:'青岛',name:'山东省',address:'3.0731',paiming:'20'},
              {date:'泉州',name:'福建省',address:'2.9825',paiming:'21'},
              {date:'昆明',name:'云南省',address:'2.8970',paiming:'22'},
              {date:'南宁',name:'广西壮族自治区',address:'2.8427',paiming:'23'},
              {date:'济南',name:'山东省',address:'2.7837',paiming:'24'},
              {date:'惠州',name:'上海市',address:'2.7257',paiming:'25'}
          ],
        
        }
    }
})



Vue.component('tongxun', {
    template: '#tongxun',
    data(){
        return {
            person_one_input:'',
            person_one_list:[
             {name:'Rone',info:'你好呀'}
            ],
            drawer: false,
            direction: 'ltr',
          
           
        }
    },
    methods:{
        sendmessageToRone(){
          
            if(this.person_one_input==''){
                return
            }else if(this.person_one_list.length<22){
                let msg = {name:'Jack',info:this.person_one_input}
                this.person_one_list.push(msg)
                this.person_one_input=''
            }else{
                let msg = {name:'Jack',info:this.person_one_input}
                this.person_one_list.splice(0,1);
                this.person_one_list.push(msg)
                this.person_one_input=''
            }
        },
        sendmessageToJack(){
            if(this.person_one_input==''){
                return
            }else if(this.person_one_list.length<22){
                let msg = {name:'Rone',info:this.person_one_input}
                this.person_one_list.push(msg)
                this.person_one_input=''
            }else{
                let msg = {name:'Rone',info:this.person_one_input}
                this.person_one_list.splice(0,1);
                this.person_one_list.push(msg)
                this.person_one_input=''
            }
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
          }
     
       
    }
})

Vue.component('wenyu', {
    template: '#wenyu'
})

Vue.component('gouwu', {
    template: '#gouwu'
})

Vue.component('yingxiang', {
    template: '#yingxiang'
})

Vue.component('weilai', {
    template: '#weilai'
})
//vue实例
var vm = new Vue({
    el:'#app',
    data:{
        comName: 'shouye',
      
    },
    methods:{
       
    },
  

})
//评论功能组件
Vue.component('pinglun',{
    template:'#pinglun',
    data(){
        return {
            person:'',
            neirong:'',
            list:[
                {person:'种花家',neirong:'厉害了，我的国'},
              
            ]
        }
    },
    methods:{
        addpinglun(){
            if(this.person == ''){
                alert('评论人不应为空')
            }else if(this.neirong == ''){
                alert('内容不应为空')
            }else {
          var newpinglun = {person:this.person,neirong:this.neirong}
          this.list.unshift(newpinglun)
          this.person = this.neirong = ''
        }
      }
    }
})
