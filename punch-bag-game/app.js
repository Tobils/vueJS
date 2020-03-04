new Vue({
    el: "#vue-app",
    data: {
        title: "Punch Bag Game",
        health: 100,
        ended: false,
        border: 10
    },
    methods: {
        punch: function() {
            this.health -= 10;
            this.border += 10;
            if (this.health < 10) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false
        }
    },
    computed: {

    }
})