<template>
    <div class="login" id="login">
        <a href="javascript:;" class="log-close"><i class="icons close"></i></a>
        <div class="log-bg">
            <div class="log-cloud cloud1"></div>
            <div class="log-cloud cloud2"></div>
            <div class="log-cloud cloud3"></div>
            <div class="log-cloud cloud4"></div>

            <div class="log-logo">Welcome!</div>
        </div>
        <Form class="login-form" ref="loginForm" :model="loginForm" :rules="loginrules">
            <FormItem prop="user">
                <Input type="text" v-model="loginForm.username" placeholder="请输入账号">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="loginForm.password" placeholder="请输入密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" :loading="loading" long  @click="handleSubmit('loginForm')">登录</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    /*import { Form,FormItem,Input,Button } from 'element-ui';*/

    export default {
        name: 'Login',

        data(){
            return {
                loading: false,
                loginForm:{
                    username:'',
                    password:''
                },
                loginrules:{
                    username: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            //登录逻辑
            handleSubmit(name) {

                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        this.$store.dispatch('Login', this.loginForm).then(() => {
                            this.loading = false;
                            this.$router.push({ path: '/' });
                        }).catch(() => {
                            this.loading = false;
                        });
                    } else {
                        return false;
                    }
                })
            }

        },
        mounted:function () {
          //this.$Message.error('This is an error tip');
        }
    }
</script>

<style scoped>
    .login-form {
        padding: 20px 10px 10px;
    }
    .login {
        position: fixed;
        overflow: hidden;
        left: 80%;
        margin-left: -165px;
        top: 61%;
        margin-top: -345px;
        width: 400px;
        min-height: 555px;
        z-index: 10;
        right: 140px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0px 3px 16px -5px #070707;
    }
    .log-close{display: block; position: absolute; top:12px; right: 12px; opacity: 1;}
    .log-close:hover .icons{transform: rotate(180deg);}
    .log-close .icons{opacity: 1; transition: all .3s}
    .log-cloud{background-image: url(../images/login-cloud.png); width: 63px ;height: 40px; position: absolute; z-index: 1}
    .login .cloud1{top:21px; left: -30px; transform: scale(.6); animation: cloud1 20s linear infinite;}
    .login .cloud2{top:87px; right: 20px; animation: cloud2 19s linear infinite;}
    .login .cloud3{top:160px; left: 5px;transform: scale(.8);animation: cloud3 21s linear infinite;}
    .login .cloud4{top:150px; left: -40px;transform: scale(.4);animation: cloud4 19s linear infinite;}
    .log-bg{background: url(../images/login-bg.jpg); width: 100%; height: 312px; overflow: hidden;}
    .log-logo{height: 80px; margin: 120px auto 25px; text-align: center; color: #1fcab3; font-weight: bold; font-size: 40px;}
    .log-text{color: #57d4c3; font-size: 13px; text-align: center; margin: 0 auto;}
    .log-logo,.log-text{z-index: 2}
    .icons{background:url(../images/icons.png) no-repeat; display: inline-block;}
    .close{height:16px;width:16px;background-position:-13px 0;}
    .login-email{height:17px;width:29px;background-position:-117px 0;}
    .log-btns{padding: 15px 0; margin: 0 auto;}
    .log-btn{width:402px; display: block; text-align: left; line-height: 50px;margin:0 auto 15px; height:50px; color:#fff; font-size:13px;-webkit-border-radius: 5px; background-color: #3B5999;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;
        position: relative;
        width: 370px}
    .log-btn.tw{background-color: #13B4E9}
    .log-btn.email{background-color: #50E3CE}
    .log-btn:hover,.log-btn:focus{color: #fff; opacity: .8;}
    .log-email{text-align: center; margin-top: 20px;}
    .log-email .log-btn{background-color: #50E3CE;text-align: center;}
    .log-input-empty{border: 1px solid #f37474 !important;}
    .isloading{background: #d6d6d6}
    .log-btn .icons{margin-left: 30px; vertical-align: middle;}
    .log-btn .text{left: 95px; line-height: 50px; text-align: left; position: absolute;}
    .log-input{width: 370px;overflow: hidden; padding: 0 15px;font-size: 13px; border: 1px solid #EBEBEB; margin:0 auto 15px; height: 48px; line-height: 48px; -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;}
    .log-input.warn{border: 1px solid #f88787}
    @-webkit-keyframes cloud1 {
        0%{left: 200px}
        100%{left:-130px;}
    }
    @keyframes cloud1{
        0%{left: 200px}
        100%{left:-130px;}
    }
    @-webkit-keyframes cloud2 {
        0%{left:500px;}
        100%{left:-90px;}
    }
    @keyframes cloud2{
        0%{left:500px;}
        100%{left:-90px;}
    }
    @-webkit-keyframes cloud3 {
        0%{left:620px;}
        100%{left:-70px;}
    }
    @keyframes cloud3{
        0%{left:620px;}
        100%{left:-70px;}
    }@-webkit-keyframes cloud4 {
         0%{left:100px;}
         100%{left:-70px;}
     }
    @keyframes cloud4{
        0%{left:100px;}
        100%{left:-70px;}
    }
</style>
