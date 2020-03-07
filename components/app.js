Vue.component('greeting', {
    template: '<p> Hi there, i am {{ name }}. <button v-on:click="changeName">change Name</button>  </p>',
    data: function() {
        return {
            name: 'Frika'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Suhada'
        }
    }
})

new Vue({
    el: '#vue-app-one',
    data: {
        title: "Vue App One"
    }
})

new Vue({
    el: '#vue-app-two',
    data: {
        title: "Vue App Two"
    }
})