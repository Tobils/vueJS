<template>
    <!-- sot name digunakan untuk menerima data dari slot lain -->
    <div id="slot">
        <slot name="title"></slot>
        <form>
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            <div id="form-fields">
                <slot name="form-fields"></slot>
            </div>
            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>
            <div id="useful-links">
                <ul>
                    <li><a href="">Link 1</a></li>
                    <li><a href="">Link 2</a></li>
                    <li><a href="">Link 3</a></li>
                    <li><a href="">Link 4</a></li>
                    <li><a href="">Link 5</a></li>
                    <li><a href="">Link 6</a></li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#useful-links {
    /* max-width: 960px; */
    margin: 0 auto;
}

#useful-links ul {
    padding: 0;
}

#useful-links li {
    display: inline-block;
    margin-right: 10px;
}

form > div {
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}

#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}

</style>