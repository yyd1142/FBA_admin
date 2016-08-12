<template>
    <table class="ui very basic right aligned table">
        <thead>
        <tr>
            <th class="left aligned">费用ID</th>
            <th>起运地</th>
            <th>目的地</th>
            <th>邮编开头</th>
            <th>带电池</th>
            <th>货类</th>
            <th>21KG</th>
            <th>+100KG</th>
            <th>+300KG</th>
            <th>+500KG</th>
            <th>+1000KG</th>
            <th>最快(天)</th>
            <th>最慢(天)</th>
            <th>有效日期</th>
            <th class="center aligned">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in 5">
            <td class="left aligned">10001</td>
            <td>深圳ShenZhen</td>
            <td>日本Japan</td>
            <td>6</td>
            <td>N</td>
            <td>B</td>
            <td>25</td>
            <td>23.4</td>
            <td>22.1</td>
            <td>20.9</td>
            <td>19.9</td>
            <td>5</td>
            <td>8</td>
            <td>2016-08-09</td>
            <td class="center aligned">
                <div class="ui buttons">
                    <button class="ui button">编辑</button>
                    <div class="or"></div>
                    <button class="ui negative button">删除</button>
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

<script type="text/javascript" src="../../js/message/amazon.js"></script>

<style lang="less" src="../../style/message.less" scoped></style>