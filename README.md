# vueJS
Belajar front end menggunakan framework vuejs

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
  - [1](https://scrimba.com/p/pXKqta/)
  - [2](https://www.vuemastery.com/courses/)

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
## Nesting Components
- example :
    - root component
        - header component
            - links component
            - login component
        - article component
        - footer component

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