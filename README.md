# vueJS
Belajar front end menggunakan framework vuejs

## Daftar isi
  - [Day #1 Vue intro](##\ /Day\ /#1\ /Vuejs\ /Intro)
  - [Day #2 Vue Data Binding dan Events](##\ /Day\ /#2\ /Data\ /Binding\ /dan\ /Events)
---
## Day #1 Vuejs Intro
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
## Day #2 Data Binding dan Events
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
## Day #3 Event modifier
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
