<template>
  <div class="ui fixed inverted menu">
    <div class="ui container">
      <a href="#" class="header item">
        <img class="logo" src="../../logo.png">
        FBA 管理后台
      </a>
      <div class="right menu">
        <div class="ui simple dropdown item">
          1142yyd <i class="dropdown icon"></i>
          <div class="menu">
            <a class="item" href="#">我的收藏</a>
            <a class="item" href="#">退出</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sidebar-left">
    <a class="sidebar-item" v-for="item in tabItems" :class="item.active" v-on:click="go($index)">
      <i class="icon" :class="item.icon"></i> {{item.name}}
    </a>
  </div>
</template>

<script type="text/javascript" src="../js/header.js"></script>

<style lang="less" src="../style/index.less" scoped></style>

