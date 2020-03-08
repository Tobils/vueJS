<template>
  <div>
    <h1>
        {{ title }}
    </h1>
    <p>
        {{ greeting() }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title: 'Mantul, vue file pertama'
    }
  }, 
  methods: {
    greeting: function(){
        return 'Heyy buddy'
    }
  }
}
</script>

<style>
div {
    margin:  0px auto;
}
</style>
