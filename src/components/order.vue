<!-- component -->
<template>
    <header-component></header-component>
    <div class="page-main home-page-main">
        <div class="">
            <div class="ui tabular menu user-menu">
                <a class="item active">客户列表</a>
                <a class="item">已认证</a>
                <div class="right menu">
                    <div class="item">
                        <div class="ui action left icon input">
                            <i class="search icon"></i>
                            <input type="text" placeholder="请输入查找内容..">
                            <button class="ui button">查找</button>
                        </div>
                    </div>
                    <div class="item">
                        <button class="ui primary button" v-on:click="modalShow()">
                            <i class="plus icon"></i>新建客户
                        </button>
                    </div>
                </div>
            </div>
            <div class="user-tabular">
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
                        <td class="center aligned"><img class="header-image" src="../../dist/images/wireframe/image.png"></td>
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
            </div>
        </div>
    </div>
    <footer-component></footer-component>
    <div class="ui modal">
        <i class="close icon"></i>
        <div class="header">
            新建客户
        </div>
        <div class="content">
            <form class="ui form">
                <div class="field">
                    <label>用户名</label>
                    <input type="text" placeholder="输入用户名">
                </div>
                <div class="field">
                    <label>Email</label>
                    <input type="email" placeholder="输入邮箱">
                </div>
                <div class="field">
                    <label>手机号码</label>
                    <input type="tel" placeholder="输入手机号码" maxlength="11">
                </div>
                <div class="field">
                    <label>密码</label>
                    <input type="password" placeholder="输入密码，不少于6位数">
                </div>
                <div class="field">
                    <label>业务员</label>
                    <div class="ui selection dropdown">
                        <input type="hidden" name="card[type]">
                        <div class="default text">请选择业务员</div>
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item">Lily </div>
                            <div class="item">Sasa </div>
                            <div class="item">Tony </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="actions">
            <div class="ui black deny button">
                取消
            </div>
            <div class="ui positive button">
                保存
            </div>
        </div>
    </div>
</template>

<script type="text/javascript" src="../js/order.js"></script>

<style lang="less" src="../style/users.less" scoped></style>