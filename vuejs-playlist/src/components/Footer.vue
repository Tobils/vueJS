<template>
<footer>
    <p>
        {{ copyright }}
    </p>
</footer>
</template>

<script>
export default {
    data() {
        return {
            copyright: 'Copyright 2020 learn vue-js' 
        }
    }, 
    methods: {
        
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
