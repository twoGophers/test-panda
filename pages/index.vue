<template>
  <div class="app">
    <div class="appMain">
        <vHeader />
        <vMain />
    </div>

  </div>
</template>

<script>
import vHeader from "../components/header/vHeader";
import vMain from "../components/main/vMain";

export default {
  name : "app",
  components : {
    vHeader,
    vMain
  },
}
</script>

<style lang="scss">
html {
  width: 100%;
  body {
    margin: 0;
    padding: 0;
    .app {
      display: flex;
      justify-content: center;
      .appMain {
        width: 80%;
        margin-top: 5%;
        border: 1px solid rgb(224, 222, 222);
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    }
  }
}
</style>