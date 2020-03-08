new Vue({
    el: '#vue-app',
    data: {
        title: 'Refs',
        output: 'Your output '
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
    }
})