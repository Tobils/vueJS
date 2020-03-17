<template>
    <div id="add-blog">
        <form action="">
            <label>Blog Title</label>
            <input type="text" v-model.lazy="blog.title" required>
            <label>Blog Content</label>
            <textarea v-model.lazy="blog.content"> </textarea>
            <div id="checkboxes">
                <label> Ninjas </label>
                <input type="checkbox" value="ninjas" v-model="blog.categories"/>
                <label> Cheese </label>
                <input type="checkbox" value="cheese" v-model="blog.categories"/>
                <label> Mario </label>
                <input type="checkbox" value="mario" v-model="blog.categories"/>
                <label> Wizard </label>
                <input type="checkbox" value="wizard" v-model="blog.categories"/>
            </div>

            <label>Author</label>
            <select v-model="blog.author">
                <option v-for="author in authors"> {{ author }} </option>
            </select>

        </form>

        <div id="preview">
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.content }}</p>
            <ul>
                <li v-for="category in blog.categories"> {{ category }}</li>
            </ul>
            <p>{{ blog.author }}</p>
        </div>



    </div>    
</template>

<script>
export default {
    data(){
        return {
            blog: {
                title:"", 
                content:"",
                categories: [],
                author: ""
            },
            authors:["ade suhada","frika atrika","arif munarto"]
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type="text"],textarea{
    display: block;
    width: 100%;
    padding: 8px;
}

#preview{
    text-align: center;
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

h3 {
    margin-top: 10px;
}

#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label {
    display: inline-block;
}
</style>