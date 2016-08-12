"use strict";

import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';

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
        footerComponent
    },
    methods: {
        tab(id){
            this.show = id;
        }
    }
};
