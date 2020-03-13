<template>
  <header>
    <h1 v-on:click="changeTitle"> {{ title }} </h1>
  </header>
</template>

<script>
import {bus} from '../main';

export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            title: 'Vue Ninjas' 
        }
    }, 
    methods: {
        changeTitle: function() {
            // this.title = " Ganti gaaan !"
            // this.$emit('changeTitle','Ganti Judul from child')
            // this.title = 'Vue Wizards'
            bus.$emit('titleChanged','Ubah Dari Header');
        }
    },
    created(){
        bus.$on('ubahJudul', (data) => {
            this.title = data;
        })
    }
}
</script>

<style scoped>
header {
    background: lightgreen;
    padding: 10px;
}

h1 {
    color: #222;
    text-align: center;
}
</style>
