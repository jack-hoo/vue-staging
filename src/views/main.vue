<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="liveMan" @on-select="">
            <div class="layout-logo"><a href="/"><h3>ADMIN</h3></a></div>

            <Dropdown style="float: right" placement="bottom-end" @on-click="me">
                <Avatar class="avatar" :src="avatar">

                </Avatar>
                <DropdownMenu slot="list">
                    <DropdownItem>我的主页</DropdownItem>
                    <DropdownItem>系统反馈</DropdownItem>
                    <DropdownItem name="logout">退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>

        </Menu>

        <div class="layout-content">
            <Row style="height: 100%" class="">
                <Col span="4">
                <Menu theme="light" active-name="1-2" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            访问控制

                        </template>
                        <MenuItem name="1-1">权限管理</MenuItem>
                        <MenuItem name="1-2">角色管理</MenuItem>
                        <MenuItem name="1-3">用户管理</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            角色管理

                        </template>
                        <MenuItem name="2-1">新增用户</MenuItem>
                        <MenuItem name="2-2">活跃用户</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计分析

                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
                </Col>
                <Col span="20">
                <div class="layout-content-main">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    export default {
        computed:{
            avatar(){
              return this.$store.state.userInfo.avatar;
            }
        },
        data(){
            return {}
        },
        methods: {
            me(name){
                /*if (name == "logout") {
                    this.$store.dispatch('LogOut').then(() => {
                        this.$router.push({path: '/login'});
                    })
                }
*/
            },
            goMenu(name){
                //this.$router.push({name: name})

            }
        },
        mounted:function () {
          console.log(this.avatar)
          //console.log(this.$store.state.userInfo.avatar)
        }
    }
</script>
<style scoped>
    .add {
        float: right;
        margin-right: 80px;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        //float: right;
        margin-right: 20px;
        top: 0px;
    }

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }

    .layout-logo {
        width: 150px;
        height: 40px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 10px;
        left: 20px;
        text-align: center;
        line-height: 40px;
        color: white;
        a {
            color: white;
        }
        a:hover {
            color: rgba(202, 202, 202, 0.49);
        }
    }

    /*.layout-nav {
        width: 480px;
        margin: 0 auto;
    }

    .layout-assistant {
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }*/

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        padding: 15px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
