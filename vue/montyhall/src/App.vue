<template>
  <div id="app">
    <h1>Problema de Monte Hall</h1>
    <Gift />
  </div>
</template>

<script>
  import Gift from "./components/Gift";
  
  export default {
    name: "App",
    components: { Gift }
  }
</script>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background: linear-gradient(to right, rgb(105, 212, 159), rgb(21, 87, 153))
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
  }
</style>
