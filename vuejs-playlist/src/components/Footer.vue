<template>
<footer>
    <p v-on:click="ubahJudul">
        {{ copyright }} - {{ title }}
    </p>
</footer>
</template>

<script>
import {bus} from '../main'
export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            copyright: 'Copyright 2020' 
        }
    }, 
    methods: {
        ubahJudul: function(){
            bus.$emit('ubahJudul','Ubah dari Footer');
        }
    },
    created(){
        bus.$on('titleChanged', (data) => {
            this.title = data;
        })
    }
}
</script>

<style scoped> 
footer {
    background: #222;
    padding: 6px;
}

p {
    color: lightgreen;
    text-align: center;
}

</style>
