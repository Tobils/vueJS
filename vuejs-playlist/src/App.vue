<template>
    <div>
        <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
        <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
        <app-footer v-bind:title="title"></app-footer>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Ninjas from './components/Ninjas.vue'
import Footer from './components/Footer.vue'

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-ninjas': Ninjas
    },
    data() {
        return {
             ninjas: [
                {name:'Ryu', speciality: 'Vue Component', show:false},
                {name:'Crystal', speciality: 'HTML Component', show:false},
                {name:'Hitoshi', speciality: 'Event Component', show:false},
                {name:'Tango', speciality: 'Click Component', show:false},
                {name:'Kami', speciality: 'Webpack', show:false},
                {name:'Yoshi', speciality: 'Data Digin', show:false},
            ],
            title: "Vuejs Nested"
        }
    }, 
    methods: {
        updateTitle: function(updateTitle) {
            this.title = updateTitle;
        }
        
    }
}
</script>

<style scoped>
h1 {
    color: aqua;
}
</style>
