"use strict";

import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';

module.exports = {
    data() {
        return {

        }
    },
    ready(){
        $('.ui.menu a.item').on('click', function() {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
        $('.ui.selection.dropdown').dropdown();
    },
    components: {
        headerComponent,
        footerComponent
    },
    methods: {
        modalShow(){
            $('.ui.modal')
                .modal({
                    blurring: true,
                    closable: false
                })
                .modal('show')
        }
    }
};
