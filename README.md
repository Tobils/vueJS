# vueJS
Belajar vue js

## Daftar isi
  - [Vue Intro](##\ /Vue\ /Intro)
  - [Data Binding dan Events](##\ /Data\ /Binding\ /dan\ /Events)
  - [Event modifier](##\ /Event\ /modifier)
  - [Conditionals](##\ /Conditionals)
  - [Component](##\ /Component)
  - [Refs](##\ /Refs)
  - [Vue CLI](##\ /Vue\ /CLI)
  - [Nesting Components](##\ /Nesting\ /Components)
---
## Vuejs Intro
- Why Vuejs ?
  - very lean [16kb]
  - very high run-time performance
- dokumentasi resmi vuejs
  - [scrimba](https://scrimba.com/p/pXKqta/)
  - [vuemastery](https://www.vuemastery.com/courses/)

- install `live-server` vs code agar bisa mengonline kan file web yang dibuat.
- membuat 2 file
  - index.html
    ```html
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <!-- development version, includes helpful console warnings, agar vue berjalan -->
          <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
      </head>

      <body>
          <div id="vue-app">
              <h1> {{ name }}</h1>
          </div>
          <script src="app.js"></script>
      </body>
    </html>
    ```
  - app.js
    ```js
    new Vue({
      el: '#vue-app',
      data: {
          name: 'Shaun',
          job: 'Ninja'
      },
      methods: {
          greet: function(time) {
              return "Good " + time + ' ' + this.name;
          }
      }
    });
    ```
---
## Data Binding dan Events
- Data Binding 
  - data binding menggunakan syntax : `v-bind:`
  - contoh :
    ```html
      <a v-bind:href="website">The Net Ninja</a>
    ```
  - `website` merupakan value yang sudah didefinisikan.
    ```js
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'http://thenetninja.co.uk',
        websiteTag: '<a href="http://thenetninja.co.uk">The Net Ninja Websites</a>'
    },
    ```
- Data Render html
  - syntax : `v-html:`
  - contoh :
    ```html
    <p v-html="websiteTag"></p>
    ```
- Events
  - kita dapat mengganti `v-on:click` menjadi `@click`
  - fungsi yang dilewatkan menggunakan syntax : `v-on:click="add(1)"`
    - contoh :
      ```html
        <button @click="add(1)">Add a year</button>
      ```
---
## Event modifier
- Event Modifier
  - event hanya berfungsi sekali : `v-on:click.once=`
  - event diprevent, tidak lanjut ke link yang dirujuk :  `v-on:click.prevent=`    
  - event modifier lainnya :
    - `.stop`
    - `.prevent`
    - `.once`
    - `.self`
    - `.capture`
- Event-Keyboard
  - syntax :
    - `onkeydown`
    - `onkeypress`
    - `onkeyup`
  - saat di enter, akan muncul log atau akan dieksekusi : `v-on:keyup.enter=`
  - enter dihold tidak berfungsi : `v-on:keyup.alt.enter=`
  - dan banyak lagi syntak lainnya
- 2-way data binding
  - biasanya digunakan untuk memberikan preview, dimana data yang diubah di browser akan ditampilkan perubahannya.
  - syntax : `<input type="text" v-model="age">` : age merupakan variable
- Computed properties memudahkan agar program dapat diproses dengan efisien, hanya yag berkaitan yang diproses.
  - syntax : computed properites merupakan salah satu object yg dapat didefinisikan sebagai berikut :
    ```js
    ,
    computed: {
        addToA: function() {
            console.log("addToA");
            return this.age + this.a;
        },

        addToB: function() {
            console.log("addToB");
            return this.age + this.b;
        }
    }
    ```
- Dynamic CSS
    - kita dapat membuat class css menggunakan syntax : `v-bind:class=`

---
## Conditionals
- `v-if=`
    - saat value bernilai false, maka element akan menghilang
- `v-show=`
    - saat value dari `v-show=false`, maka akan ada `style="display none` 
- `v-for=`
    - example : `<li v-for="character in characters"> {{ character }}</li>`

---
## Component
- `Vue.component({})`
    - mmebuat ceomponent yang re-usable, bisa digunaakn berulang-ulang
    - contoh declarasi component:
        ```js
        Vue.component('greeting', {});
        ```
    - memanggil component :
        ```html
        <greeting></greeting>
        ```

---
## Refs
- `this.$refs`
    - digunakan untuk mereferensi atau mengakses data dari satu element ke element lain.
    - contoh html:
        ```html
        <input type="text" ref="input" />
        <button v-on:click="readRefs">Submit</button>
        ```
    - app.js :
        ```js
        // output data by the logs
        console.log(this.$refs.input.value);
        ```
---
## Vue CLI
- create project : 
```bash
# create project
vue init webpack-somple vuejs-playlist

#To get started:
cd vuejs-playlist
npm install
npm run dev
```


---
## Component CSS [SCOPED]
- agar sepcific component, gunakan `scoped`
    ```html
    <style scoped>
    h1{
        color: blueviolet;
    }
    </style>
    ```

---
## Nesting Component
- Root component
    - Header Component
        - Title
    - Footer Component
        - Copyright notice
    - Ninja Component
        - list of ninja
- secara global :
    - main.js
        ```js
        // global component
        import Vue from 'vue'
        import App from './App.vue'
        import Ninjas from './Ninjas.vue'

        Vue.component('ninjas', Ninjas)

        new Vue({
            el: '#app',
            render: h => h(App)
        })
        ```
- secara local :
    - App.vue
        ```js
        // local component
        import Ninjas from './Ninjas.vue'
        export default {
            components: {
                'ninjas': Ninjas
            },
            data() {
                return {
                    title: 'Nested component'
                }
            }, 
            methods: {
                
            }
        }
        ```
---
## Props
- transfer data dari root component ke child component
- melewatkan data dari App.vue ke Ninja.vue
    - penerima Ninjas.vue : `props:['ninjas']`
    - pengirim App.vue : `data(){return ninjas}`

---
## Event Child to parents
- child  `Header.vue` : `<h1 v-on:click="changeTitle"> {{ title }} </h1>` : `changeTitle: function() {this.$emit('changeTitle','Ganti Judul from child')}`
    ```js
    <template>
        <header>
            <h1 v-on:click="changeTitle"> {{ title }} </h1>
        </header>
    </template>

    <script>
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
                this.$emit('changeTitle','Ganti Judul from child')
            }
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
    ```
- parents `App.vue` : 
    - template : `<app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>`
    - methods  : `updateTitle: function(updateTitle) { this.title = updateTitle; }`

---
## Event Bus
- komunikasi data antar child, tidak melalui parent
    - modify `Main.js`
        ```js
        // ...
        export const bus = new Vue();
        // ...
        ```
    - data dikirim dari `Header` ke `Footer`
    - modifikasi di `Header.vue` sebagai sender
        ```js
        // ...
        import {bus} from '../Main';
        // ...
        methods: {
            changeTitle: function(){
                this.$emit('titleChanged','value);
            }
        }
        // ...
        ```
    - modifikasi di `Footer.vue` sebagai receiver
        ```js
        // ...
        import {bus} from '../Main/'
        // ...
        export deafult(){
            props:{},
            // ...
            methods:{},
            // ...
            created: {
                bus.$on('titleChanged', (data) => {
                    this.title = data;
                })
            }
        }
        ````
---
## Life-Cycle Hooks
<p align="center">
    <a href="https://vuejs.org/v2/guide/instance.html"><img src="./images/lifecycle.png" width="50%"></a>
</p>

- `Ninjas.vue`
    ```js
    methods:(){}
    // ...
    // lifecycle hooks
    beforeCreated(){
        alert('beforeCreated');
    },
    cretaed(){
        alert('created');
    },
    beforeMount(){
        alert('beforeMount');
    },
    mounted(){
        alert('mounted');
    },
    beforeUpdate(){
        alert('beforeUpdate');
    },
    upadeted(){
        alert('updated');
    }
    ```
- Insight :
    ```
    Implementasi pada Ninjas.vue menunjukan life cycle Vue yang kita buat. setiap stage seperti beforeCreated() dan seterusnya akan diekseskusi oleh Vue.
    sebagai contoh, dapat digunakan alert untuk menunjukan bahwa lifecycle pada vue.js berjalan di setiap stage nya.
    ```

---
## SLOT
- digunakan untuk melewatkan data pada template
- `App.vue`
    ```js
    // ... template
     <template>
        <form-helper>
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

            </form-helper>
     </template>

     // ... script
     import formHelper from './components/formHelper'
     export dafault: {
        // ...
        'form-helper': formHelper
     },
     // ...
    ```
- `formHelper.vue`
    ```js
    // ... template
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
    </form>
    ```


---
## Dynamic Component
- membuat component menjadi dynamic, dengan mendefinisikan component mana yang akan digunakan secara otomatis
- `App.vue`
    ```js
    <template>
        <div>
            <!-- keep-alive membuat component dynamic kita berada pada konidis terakhirnya -->
            <keep-alive>    
                <component v-bind:is="component"></component>
            </keep-alive>
            <!-- component berubah sesuai dengan button yang di tekan -->
            <button v-on:click="component = 'form-one'">Show form One</button>
            <button v-on:click="component = 'form-two'">Show form Two</button>

        </div>
    </template>

    <script>
    // slot 
    import formHelper from './components/formHelper'
    import formOne from './components/formOne'
    import formTwo from './components/formTwo'

    export default {
        components: {
            'form-helper': formHelper,
            'form-one': formOne,
            'form-two': formTwo
        },
        data() {
            // component data 
            return {
                component : 'form-one'
            }
        }
    }
    </script>

    <style scoped>
    </style>
    ```
- `form One.vue`
    ```js
    <template>
        <!-- data dari form One dikirim ke form helper menggunakan slot  -->
        <form-helper>
            <div slot="form-header">
                <h3>Form One - Contact Us</h3>
                <p>Fill in this form to contact us</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required />
                <label>Your Message:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Send</button>
            </div>
        </form-helper>
    </template>

    <script>
    // gunakan component form helper
    import formHelper from './formHelper'
    export default {
        components: {
            'form-helper': formHelper
        }
    }
    </script>

    <style scoped>
    </style>
    ```

----
## Input Binding
- component baru dengan nama file `addBlog.vue`
    ```js
    <template>
        <div id="add-blog">
            <form action="">
                <label>Blog Title</label>
                <input type="text" v-model.lazy="blog.title" required>
                <label>Blog Content</label>
                <textarea v-model.lazy="blog.content"> </textarea>
            </form>

            <div id="preview">
                <h3>{{ blog.title }}</h3>
                <p>{{ blog.content }}</p>
            </div>

        </div>    
    </template>

    <script>
    export default {
        data(){
            return {
                blog: {
                    title:"", 
                    content:""
                }
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
    </style>
    ```
- sedikit penjelasan :
    v.model digunakan agar object terikat dengan data, sehingga bisa digunakan sebagai preview. sedangkan syntax lazy digunakan ketika preview di hold dan akan mnuncul setelah input di enter atau masuk ke input lain.

---
## Checkbox Binding
- menyimpan data check box ke dalam array.
- example
    ```js
    // checkbox
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
    // output
    <ul>
        <li v-for="category in blog.categories"> {{ category }}</li>
    </ul>

    // export default
    data(){
        return {
            blog: {
                categories: []
            }
        }
    }
    ```

---
## Select Box Binding
- menyimpan data yang dipilih ke dalam model
- example
    ```js
    // select is binding to model author
     <select v-model="blog.author">
        <option v-for="author in authors"> {{ author }} </option>
    </select>

    // preview
    <p>{{ blog.author }}</p>

    // data 
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
    ```

---
## HTTP Request
