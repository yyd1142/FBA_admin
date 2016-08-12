<!-- component -->
<template>
    <header-component></header-component>
    <div class="page-main home-page-main">
        <div class="ui secondary menu" style="position: relative">
            <a class="item" v-link="{path: '/users'}"><i class="icon chevron left"></i>返回</a>
            <div class="user-title">黄子韬</div>
            <div class="right menu">
                <a class="item active"><i class="icon edit"></i>编辑</a>
            </div>
        </div>
        <div class="">
            <div class="ui tabular menu user-menu">
                <a class="item active" v-on:click="tab(0)">基本信息</a>
                <a class="item" v-on:click="tab(1)">订单</a>
            </div>
            <div class="user-tabular" v-if="show == 0">
                <img class="user-header-image image" src="../../dist/images/wireframe/square-image.png">
                <div class="user-conent">
                    <span>用户名：</span><span>黄子韬</span>
                </div>
                <div class="user-conent">
                    <span>Email：</span><span>yyd123@hotmail.com</span>
                </div>
                <div class="user-conent">
                    <span>手机号码：</span><span>13454544434</span>
                </div>
                <div class="user-conent">
                    <span>公司名称：</span><span>深圳市猫空科技有限公司</span>
                </div>
                <div class="user-conent">
                    <span>公司电话：</span><span>0755-2988282828</span>
                </div>
                <div class="user-conent">
                    <span>公司地址：</span><span>深圳市南山区东方科技大厦1103</span>
                </div>
                <div class="user-conent">
                    <span>邮政编码：</span><span>518000</span>
                </div>
                <div class="ui divider"></div>
                <div class="user-conent">
                    <span>创建时间：</span><span>2015-02-19</span>
                </div>
                <div class="user-conent">
                    <span>最后登录时间：</span><span>2016-08-14</span>
                </div>
                <div class="ui divider"></div>
                <div class="user-conent">
                    <div class="user-address">常用地址：</div>
                    <ul class="user-address-view">
                        <li>广东省深圳市白石洲沙河西</li>
                        <li>广东省深圳市白石洲沙河西</li>
                        <li>广东省深圳市白石洲沙河西</li>
                    </ul>
                </div>
                <div class="user-conent">
                    <span>业务员：</span><span>宁泽涛</span>
                </div>
            </div v-id>
            <div class="user-tabular" v-if="show == 1">
                <table class="ui very basic right aligned table">
                    <thead>
                    <tr>
                        <th class="left aligned">编号</th>
                        <th>起运地</th>
                        <th>目的港</th>
                        <th>FBA仓</th>
                        <th>品名</th>
                        <th>重量</th>
                        <th>价格(￥)</th>
                        <th>订单时间</th>
                        <th class="center aligned">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in 3">
                        <td class="left aligned">10001</td>
                        <td>深圳ShenZhen</td>
                        <td>日本Japan</td>
                        <td>PHL6CARSLISE,PA,1054</td>
                        <td>普货</td>
                        <td>10KGS<br>12.20CBM</td>
                        <td>7450.98</td>
                        <td>2016-08-19</td>
                        <td class="center aligned">
                            <div class="ui buttons">
                                <button class="ui positive button">查看</button>
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
</template>

<script type="text/javascript" src="../js/orderDetails.js"></script>

<style lang="less" src="../style/users.less" scoped></style>