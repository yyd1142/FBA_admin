"use strict";

import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';
import fbaComponent from '../components/message/fba.vue';
import amazonComponent from  '../components/message/amazon.vue';
import addressComponent from  '../components/message/address.vue';
import driverComponent from  '../components/message/driver.vue';
import localComponent from  '../components/message/local.vue';
import truckComponent from  '../components/message/truck.vue';
import typeComponent from  '../components/message/type.vue';
module.exports = {
    data() {
        return {
            show: 0
        }
    },
    ready(){
        $('.ui.menu a.item').on('click', function() {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
    },
    components: {
        headerComponent,
        footerComponent,
        fbaComponent,
        amazonComponent,
        addressComponent,
        driverComponent,
        localComponent,
        truckComponent,
        typeComponent
    },
    methods: {
        tab(id){
            this.show = id;
        }
    }
};
