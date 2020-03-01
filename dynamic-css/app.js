new Vue({
    el: "#vue-app",
    data: {
        title: "Dynamic CSS",
        available: false,
        nearby: false
    },
    methods: {

    },
    computed: {
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
})