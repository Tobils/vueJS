<template>
<div>
    <app-header></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
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
            ]
        }
    }, 
    methods: {
        
    }
}
</script>

<style scoped>
h1 {
    color: aqua;
}
</style>
