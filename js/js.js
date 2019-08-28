

//首页组件
Vue.component('shouye', {
    template: '#shouye',
    data() {
        return {
            spanBgd1: [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ],
            spanBgd2: [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ],
            spanBgd3: [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ],
            spanBgd4: [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ],
            spanBgd5: [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ],
            spanBgd6: [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ],
        }
    },

    methods: {
        change1: function () {
            this.spanBgd1 = [
                { backgroundColor: "#039BE5", border: "solid #81D4FA 5px" }
            ]
        },
        change2: function () {
            this.spanBgd2 = [
                { backgroundColor: "#039BE5", border: "solid #81D4FA 5px" }
            ]
        },
        change3: function () {
            this.spanBgd3 = [
                { backgroundColor: "#039BE5", border: "solid #81D4FA 5px" }
            ]
        },
        change4: function () {
            this.spanBgd4 = [
                { backgroundColor: "#039BE5", border: "solid #81D4FA 5px" }
            ]
        },
        change5: function () {
            this.spanBgd5 = [
                { backgroundColor: "#039BE5", border: "solid #81D4FA 5px" }
            ]
        },
        change6: function () {
            this.spanBgd6 = [
                { backgroundColor: "#039BE5", border: "solid #81D4FA 5px" }
            ]
        },

        leave1: function () {
            this.spanBgd1 = [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ]
        },
        leave2: function () {
            this.spanBgd2 = [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ]
        },
        leave3: function () {
            this.spanBgd3 = [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ]
        },
        leave4: function () {
            this.spanBgd4 = [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ]
        },
        leave5: function () {
            this.spanBgd5 = [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ]
        },
        leave6: function () {
            this.spanBgd6 = [
                { backgroundColor: "#94874e", border: "solid #cbc6af 5px" }
            ]
        }

    }

})
//政府组件
Vue.component('zhengfu', {
    template: '#zhengfu',
    data() {
        return {

            one_zan: 6,
        }
    },
    methods: {
        add() {
            this.one_zan = this.one_zan + 1
        }
    }
})
//政府table组件
Vue.component('zhengfu_table', {
    template: '#zhengfu_table',
    data() {
        return {
            tableData: [
                { date: '深圳', name: '广东省', address: '28.4297', paiming: '1' },
                { date: '广州', name: '广东省', address: '19.3143', paiming: '2' },
                { date: '北京', name: '北京市', address: '15.4414', paiming: '3' },
                { date: '上海', name: '上海市', address: '11.4235', paiming: '4' },
                { date: '成都', name: '四川省', address: '8.2939', paiming: '5' },
                { date: '武汉', name: '湖北省', address: '7.6144', paiming: '6' },
                { date: '重庆', name: '重庆市', address: '6.4946', paiming: '7' },
                { date: '东莞', name: '广东省', address: '6.4452', paiming: '8' },
                { date: '杭州', name: '浙江省', address: '5.5673', paiming: '9' },
                { date: '长沙', name: '湖南省', address: '5.2398', paiming: '10' },
                { date: '佛山', name: '广东省', address: '5.0606', paiming: '11' },
                { date: '郑州', name: '河南省', address: '4.9192', paiming: '12' },
                { date: '苏州', name: '江苏省', address: '4.9126', paiming: '13' },
                { date: '西安', name: '陕西省', address: '4.2335', paiming: '14' },
                { date: '福州', name: '福建省', address: '4.1455', paiming: '15' },
                { date: '厦门', name: '福建省', address: '3.8059', paiming: '16' },
                { date: '南京', name: '江苏省', address: '3.3612', paiming: '17' },
                { date: '天津', name: '天津市', address: '3.2111', paiming: '18' },
                { date: '宁波', name: '浙江省', address: '3.1242', paiming: '19' },
                { date: '青岛', name: '山东省', address: '3.0731', paiming: '20' },
                { date: '泉州', name: '福建省', address: '2.9825', paiming: '21' },
                { date: '昆明', name: '云南省', address: '2.8970', paiming: '22' },
                { date: '南宁', name: '广西壮族自治区', address: '2.8427', paiming: '23' },
                { date: '济南', name: '山东省', address: '2.7837', paiming: '24' },
                { date: '惠州', name: '上海市', address: '2.7257', paiming: '25' }

            ],

        }
    }
})


//通讯组件
Vue.component('tongxun', {
    template: '#tongxun',
    data() {
        return {
            person_one_input: '',
            person_one_list: [
                { name: 'Rone', info: '你好呀' }
            ],
            drawer: false,
            direction: 'ltr',


        }
    },
    methods: {
        sendmessageToRone() {

            if (this.person_one_input == '') {
                return
            } else if (this.person_one_list.length < 30) {
                let msg = { name: 'Jack', info: this.person_one_input }
                this.person_one_list.push(msg)
                this.person_one_input = ''
            } else {
                let msg = { name: 'Jack', info: this.person_one_input }
                this.person_one_list.splice(0, 1);
                this.person_one_list.push(msg)
                this.person_one_input = ''
            }
        },
        sendmessageToJack() {
            if (this.person_one_input == '') {
                return
            } else if (this.person_one_list.length < 30) {
                let msg = { name: 'Rone', info: this.person_one_input }
                this.person_one_list.push(msg)
                this.person_one_input = ''
            } else {
                let msg = { name: 'Rone', info: this.person_one_input }
                this.person_one_list.splice(0, 1);
                this.person_one_list.push(msg)
                this.person_one_input = ''
            }
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        }


    }
})
//文娱组件
Vue.component('wenyu', {
    template: '#wenyu',
    data() {
        return {
            drawer: false,
            direction: 'ltr',

            pingfen1: 0,
            all: [{
                name: '爱奇艺',
                pingfen: 0,
                src: 'https://iqiyi.com',
                Imgsrc: "http://img0.imgtn.bdimg.com/it/u=3589996579,3523600269&fm=26&gp=0.jpg"
            },
            {
                name: '优酷',
                pingfen: 1,
                src: 'https://www.youku.com/',
                Imgsrc: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1323129228,3911389697&fm=26&gp=0.jpg"
            },
            {
                name: '腾讯视频',
                pingfen: 3,
                src: 'https://v.qq.com/',
                Imgsrc: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78312614,195873733&fm=26&gp=0.jpg"
            },
            {
                name: '斗鱼直播',
                pingfen: 1,
                src: 'https://www.douyu.com/',
                Imgsrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1539358689,1302782700&fm=26&gp=0.jpg'
            },
            {
                name: '虎牙直播',
                pingfen: 5,
                src: 'https://www.huya.com/',
                Imgsrc: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=311919940,2663431228&fm=26&gp=0.jpg"
            },
            {
                name: '抖音',
                pingfen: 1,
                src: 'https://www.douyin.com/',
                Imgsrc: "data:image/jpeg;base64,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"
            },
            {
                name: '快手',
                pingfen: 1,
                src: 'https://www.kuaishou.com/',
                Imgsrc: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1684644280,1419190911&fm=26&gp=0.jpg"
            },
            {
                name: 'QQ音乐',
                pingfen: 1,
                src: 'https://y.qq.com',
                Imgsrc: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4159736598,1006037859&fm=26&gp=0.jpg"
            },
            {
                name: '网易云音乐',
                pingfen: 4,
                src: 'https://music.163.com/',
                Imgsrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3385815941,444543061&fm=26&gp=0.jpg"
            },
            {
                name: '酷狗音乐',
                pingfen: 1,
                src: 'https://www.kugou.com/',
                Imgsrc: "data:image/jpeg;base64,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"
            },
            {
                name: "微博",
                pingfen: 5,
                src: 'https://weibo.com/',
                Imgsrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=398347507,2864688659&fm=26&gp=0.jpg"
            },
            {
                name: '英雄联盟',
                pingfen: 5,
                src: 'https://lol.qq.com/main.shtml',
                Imgsrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2289301338,665787010&fm=26&gp=0.jpg'
            },
            {
                name: '全民K歌',
                pingfen: 1,
                src: 'https://kg.qq.com/',
                Imgsrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1275971664,3779601265&fm=26&gp=0.jpg'
            },
            {
                name: 'Bibili',
                pingfen: 4,
                src: 'https://www.bilibili.com/',
                Imgsrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=370824870,2418967570&fm=26&gp=0.jpg'
            }

            ]
        }
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        }
    }
})

//购物出行组件
Vue.component('gouwu', {
    template: '#gouwu',
    data() {
        return {
            two_zan: 3,
        }
    },
    methods: {
        add() {
            this.two_zan = this.two_zan + 1
        }
    }
})
//影响组件
Vue.component('yingxiang', {
    template: '#yingxiang',
    data() {
        return {
            activeName: '1',
            one_zan: 3,
            list: [
                {
                    name: '互联网',
                    src: 'https://baike.baidu.com/item/%E4%BA%92%E8%81%94%E7%BD%91/199186?fr=aladdin'
                },
                {
                    name: '互联网+政务服务',
                    src: 'https://baike.baidu.com/item/%E4%BA%92%E8%81%94%E7%BD%91+%E6%94%BF%E5%8A%A1%E6%9C%8D%E5%8A%A1/19435857'
                },
                {
                    name: '互联网企业',
                    src: 'https://baike.baidu.com/item/%E4%BA%92%E8%81%94%E7%BD%91%E4%BC%81%E4%B8%9A'
                },
                {
                    name: '互联网思维',
                    src: 'https://baike.baidu.com/item/%E4%BA%92%E8%81%94%E7%BD%91%E6%80%9D%E7%BB%B4/12028763'
                }
            ]
        };
    },
    methods: {
        add() {
            this.one_zan = this.one_zan + 1
        }
    }
})
//未来组件
Vue.component('weilai', {
    template: '#weilai',
    data(){
        return {
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            show5:false,
            show6:false,
            show7:false,
            

        }
    }
})
//vue实例
var vm = new Vue({
    el: '#app',
    data: {
        comName: 'shouye',

    },
    methods: {

    },


})
//评论功能组件
Vue.component('pinglun', {
    template: '#pinglun',
    data() {
        return {
            person: '',
            neirong: '',
            list: [
                { person: '种花家', neirong: '厉害了，我的国' },

            ]
        }
    },
    methods: {
        addpinglun() {
            if (this.person == '') {
                alert('评论人不应为空')
            } else if (this.neirong == '') {
                alert('内容不应为空')
            } else {
                var newpinglun = { person: this.person, neirong: this.neirong }
                this.list.unshift(newpinglun)
                this.person = this.neirong = ''
            }
        }
    }
})
