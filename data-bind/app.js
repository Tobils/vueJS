new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'http://thenetninja.co.uk',
        websiteTag: '<a href="http://thenetninja.co.uk">The Net Ninja Websites</a>'
    },
    methods: {
        greet: function(time) {
            return "Good " + time + ' ' + this.name;
        }
    }
});