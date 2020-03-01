new Vue({
    el: "#vue-app",
    data: {
        name: 'Event',
        age: 10,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc) {
            return this.age += inc;
        },
        substract: function(dec) {
            return this.age -= dec;
        },
        updateXY: function() {
            console.log(event);

            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})