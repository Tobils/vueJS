var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "Vue App One"
    },
    methods: {

    },
    computed: {
        greet: function() {
            return "Hi, kamu berada di element pertama"
        }
    }
})

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: "vue App Two"
    },
    methods: {
        changeTitle: function() {
            one.title = "Hi, judul kamu sudah diubah oleh element kedua"
        }
    },
    computed: {
        greet: function() {
            return "Hi, kamu berada di element kedua"
        }
    }
})


two.title = "Judul element kedua diubah dari luar yaah"