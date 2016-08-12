<template>
    <table class="ui very basic right aligned table">
        <thead>
        <tr>
            <th class="left aligned">ID</th>
            <th class="center aligned">头像</th>
            <th>用户名</th>
            <th>Email</th>
            <th>手机</th>
            <th>创建日期</th>
            <th>状态</th>
            <th>业务员</th>
            <th class="center aligned">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in 8">
            <td class="left aligned">10001</td>
            <td class="center aligned"><img class="header-image" src="../../../dist/images/wireframe/image.png"></td>
            <td>Tony</td>
            <td>yyd-yyd@hotmail.com</td>
            <td>13244444444</td>
            <td>2016-08-09</td>
            <td>正常</td>
            <td>宁泽涛</td>
            <td class="center aligned">
                <div class="ui buttons">
                    <button class="ui button">编辑</button>
                    <div class="or"></div>
                    <button class="ui positive button" v-link="{path: '/userinfo'}">查看</button>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
    <div class="ui basic buttons">
        <div class="ui button">上一页</div>
        <div class="ui button active">1</div>
        <div class="ui button">2</div>
        <div class="ui button">3</div>
        <div class="ui button">4</div>
        <div class="ui button">下一页</div>
    </div>
</template>

<script type="text/javascript" src="../../js/message/driver.js"></script>

<style lang="less" src="../../style/message.less" scoped></style>