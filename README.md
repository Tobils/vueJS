# vueJS
Belajar front end menggunakan framework vuejs

## Daftar isi

## Day #1 Vuejs
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