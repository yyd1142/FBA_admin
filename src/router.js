module.exports = function(router){
    router.map({
       '/': {
            component: require('./components/home.vue'),
            name: '概况'
        },
        '/login': {
            component: require('./components/login.vue'),
            name: '登录'
        },
        '/register': {
            component: require('./components/register.vue'),
            name: '注册'
        },
        '/users': {
            component: require('./components/users.vue'),
            name: '客户管理'
        },
        '/userinfo': {
            component: require('./components/userDetails.vue'),
            name: '客户管理'
        },
        '/order': {
            component: require('./components/order.vue'),
            name: '订单管理'
        },
        '/orderinfo': {
            component: require('./components/orderDetails.vue'),
            name: '订单管理'
        },
        '/message': {
            component: require('./components/message.vue'),
            name: '配置信息'
        }
    })
};