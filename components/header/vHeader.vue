<template>
  <div class="vHeader">
    <div class="vHeader__search">
      <input v-model="searchValue" type="search" name="" id="">
      <button @click="seachString(searchValue)">search</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name : "v-header",
    data () {
        return {
          searchValue : ''
        }
    },
    components : {
    },
    computed : {
      ...mapGetters(['SEARCH_VALUE'])
    },
    methods : {
      ...mapActions(['GET_SEARCH_VALUE']),
      seachString (value) {
        this.GET_SEARCH_VALUE(value);
      }
    }
}
</script>

<style lang="scss" scoped>
.vHeader{
  width: 100%;
  background: rgb(247, 245, 245);
  .vHeader__search{
    margin: 20px 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>