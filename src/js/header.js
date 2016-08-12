/**
 * Created by YYD on 8/5/16.
 */
"use strict";
var tab = [{name: '概况', link: '/', active: 'sidebar-active', icon: 'dashboard'},
    {name: '客户管理', link: '/users', active: '', icon: 'users'},
    {name: '订单管理', link: '/order', active: '', icon: 'list Layout'},
    {name: '配置信息', link: '/message', active: '', icon: 'browser'},
    {name: '统计', link: '/chart', active: '', icon: 'bar chart'},
    {name: '设置', link: '/setting', active: '', icon: 'setting'}];
module.exports = {
    data() {
        return{
            tabItems: tab
        }
    },
    ready(){
        let name = this.$route.name;
        this.tabItems.forEach(function(item){
           if(item.name == name){
               item.active = 'sidebar-active';
           }else {
               item.active = '';
           }
        });
    },
    methods: {
        go(index){
            let link = '';
            this.tabItems.forEach(function(item){
               if(index == tab.indexOf(item)){
                   link = item.link;
                   item.active = 'sidebar-active';
               }else{
                   item.active = '';
               }
            });
            this.$router.go(link);
        }
    }
};