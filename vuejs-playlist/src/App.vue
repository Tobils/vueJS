<template>
    <div>
        <!-- <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header> -->
        <!-- <app-ninjas v-bind:ninjas="ninjas"></app-ninjas> -->
        <!-- <form-helper>
            <div slot="form-header">
                <h2 slot="title">{{ slotTitle }}</h2>
                <p> information about the form</p>
            </div>

            <div slot="form-fields">
                <input type="text" placeholder="name" required>
                <input type="password" placeholder="password" required>
            </div>
            
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
            </div>

        </form-helper> -->
        <!-- <app-footer v-bind:title="title"></app-footer> -->

        <!-- <form-one></form-one>
        <form-two></form-two> -->

        <!-- select directly from component for dynamic -->
        <!-- <keep-alive>    
            <component v-bind:is="component"></component>
        </keep-alive>
        <button v-on:click="component = 'form-one'">Show form One</button>
        <button v-on:click="component = 'form-two'">Show form Two</button> -->

        <!-- add blog input binding  -->
        <add-blog>

        </add-blog>
        
    </div>
    
</template>

<script>
import Header from './components/Header.vue'
import Ninjas from './components/Ninjas.vue'
import Footer from './components/Footer.vue'

// slot 
import formHelper from './components/formHelper'
import formOne from './components/formOne'
import formTwo from './components/formTwo'


// add blog input binding 
import addBlog from './components/addBlog'

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-ninjas': Ninjas,
        'form-helper': formHelper,
        'form-one': formOne,
        'form-two': formTwo,
        'add-blog':addBlog
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
            title: "Vuejs Nested",
            slotTitle : 'Plase fill out form ...',
            component : 'form-one'
        }
    }, 
    methods: {
        updateTitle: function(updateTitle) {
            this.title = updateTitle;
        },

        
    }
}
</script>

<style scoped>
/* for blog input binding */
body {
    margin: 0;
    font-family: 'Nunito SemiBold';
}
h1 {
    color: aqua;
}
</style>
