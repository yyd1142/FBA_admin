"use strict";

import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';

module.exports = {
    data() {
        return {
            home: {},
            footer: {}
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
    }
};
