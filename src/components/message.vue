<!-- component -->
<template>
    <header-component></header-component>
    <div class="page-main home-page-main">
        <div class="">
            <div class="ui tabular menu user-menu">
                <a class="item active" v-on:click="tab(0)">FBA仓库</a>
                <a class="item" v-on:click="tab(1)">亚马逊双清费用</a>
                <a class="item" v-on:click="tab(2)">提货拖车费用</a>
                <a class="item" v-on:click="tab(3)">提货司机</a>
                <a class="item" v-on:click="tab(4)">仓库地址</a>
                <a class="item" v-on:click="tab(5)">本地费用</a>
                <a class="item" v-on:click="tab(6)">货物类型</a>
                <div class="right menu">
                    <div class="item">
                        <button class="ui icon button primary">
                            <i class="plus icon"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="user-tabular">
                <fba-component v-if="show == 0"></fba-component>
                <amazon-component v-if="show == 1"></amazon-component>
                <truck-component v-if="show == 2"></truck-component>
                <driver-component v-if="show == 3"></driver-component>
                <address-component v-if="show == 4"></address-component>
                <local-component v-if="show == 5"></local-component>
                <type-component v-if="show == 6"></type-component>
            </div>
        </div>
    </div>
    <footer-component></footer-component>
</template>

<script type="text/javascript" src="../js/message.js"></script>

<style lang="less" src="../style/message.less" scoped></style>