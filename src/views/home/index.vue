<template>
  <div class="container">
    <!-- 容器 -->
    <el-container class="wrapper">
      <!-- 侧边栏导航 -->
      <el-aside :width="isCollapse?'64px':'200px'">
        <div class="logo" :class="{miniLogo:isCollapse}"></div>
        <!-- default-active 默认激活的菜单项-->
        <el-menu
          :collapse="isCollapse"
          :collapse-transition="false"
          :default-active="$route.path"
          background-color="#002033"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/welcome">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/article">
            <i class="el-icon-document"></i>
            <span slot="title">内容管理</span>
          </el-menu-item>
          <el-menu-item index="/image">
            <i class="el-icon-picture"></i>
            <span slot="title">素材管理</span>
          </el-menu-item>
          <el-menu-item index="/publish">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="/comment">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">评论管理</span>
          </el-menu-item>
          <el-menu-item index="/fans">
            <i class="el-icon-present"></i>
            <span slot="title">粉丝管理</span>
          </el-menu-item>
          <el-menu-item index="/setting">
            <i class="el-icon-setting"></i>
            <span slot="title">个人设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <span class="el-icon-s-fold" @click="toggleMenu()"></span>
          <span class="text">江苏传智播客科技教育有限公司</span>
          <el-dropdown class="my-dropdown" @command ='changeMenu'>
            <span class="el-dropdown-link">
              <img :src="photo" alt />
              {{name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon='el-icon-setting' command='setting'>个人设置</el-dropdown-item>
              <el-dropdown-item icon='el-icon-unlock' command='logout'>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <!-- 主体 -->
        <el-main>
          <!-- 二级路由的出口。显示组件位置 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      isCollapse: false,
      name: '',
      photo: ''
    }
  },
  created () {
    const user = store.getUser()
    this.name = user.name
    this.photo = user.photo
  },
  methods: {
    toggleMenu () {
      // 切换侧边栏展开与收起。默认展开
      this.isCollapse = !this.isCollapse
    },
    setting () {
      // click是点击事件，是原生的事件，原生dom支持事件
      // 把事件绑定在组件解析后的原生dom上。@click.native
      // this.$router.push({name:'article'})
      this.$router.push('/setting')
    },
    logout () {
      store.clearUser()
      this.$router.push('/login')
    },
    // 绑定事件的时候不加括号  为了接收默认参数
    changeMenu (menuType) {
      this[menuType]()
    }
  }
}
</script>

<style scoped lang='less'>
//标签的名称就是解析后标签的类名
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background-color: #002033;
  }
  .el-header {
    border-bottom: 1px solid #ccc;
    line-height: 60px;
    vertical-align: middle;
    .text {
      padding-left: 15px;
    }
  }
}
.my-dropdown {
  float: right;
  img {
    width: 30px;
    vertical-align: middle;
  }
  .el-dropdown-link {
    font-weight: 700;
  }
}
.logo {
  width: 100%;
  height: 60px;
  background: #002244 url(../../assets/images/logo_admin.png) no-repeat center /
    140px auto;
}
.miniLogo {
  background-image: url(../../assets/images/logo_admin_01.png);
  background-size: 35px;
}
.el-menu {
  border: none;
}
</style>
