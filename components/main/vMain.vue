<template>
  <div class="vMain">
    <div class="vMain__header">
      <p @click="clickPilarId" class="id">id</p>
      <p @click="clickPilarBody" class="body">body</p>
      <p @click="clickPilarTitle" class="title">title</p>
    </div>

    <vMainTable 
      v-for="row in pagenatedProducts"
      :key="row.id"
      :row_table="row"
    />

    <div class="vPagination">
      <div class="page"
        v-for="page in pages"
        :key="page"
        :class="{'page__activ' : page === pageNumder}"
        @click="pageClick(page)"
      >{{page}}</div>
    </div>

  </div>
</template>

<script>
import vMainTable from "./vMainTable"

import axios from 'axios'
import {mapGetters, mapActions} from "vuex";


export default {
  name : "vMain",
  data() {
    return {
      sumPages : 10,
      pageNumder : 1,
      sortUserOfUSER : [],
      clickBody : 0
    }
  },
  components : {
    vMainTable
  },

  computed: {

    pages() {
      return Math.ceil(this.sortUserOfUSER.length / this.sumPages);
      
    },

//Determine how many items to display
    pagenatedProducts() {
      // this.sortIdClick = [...this.USER];
      let from = (this.pageNumder - 1) * this.sumPages;
      let to = from + this.sumPages;
      return this.sortUserOfUSER.slice(from, to);
    },

    ...mapGetters([
      'USER',
      'SEARCH_VALUE'
      ]),
//Turn sorted Array or Objeckt 
    filteredProducts() {

      if (this.sortUserOfUSER.length) {
        return this.sortUserOfUSER;
      } else {
        return this.USER;
      }
    }
  },

//Determinetor page
  methods: {
    pageClick(page) {
      this.pageNumder = page;
    },

//Sort Body and Title
    sortProductsBySearchValue(value) {
        this.sortUserOfUSER = [...this.USER]
        if (value) {
          this.sortUserOfUSER = this.sortUserOfUSER.filter(function (item) {
              return  item.body.toLowerCase().includes(value.toLowerCase()) ||
                      item.title.toLowerCase().includes(value.toLowerCase())
          })
        }  else {
          this.sortUserOfUSER = this.USER;
        }
      },

//Click Body
      clickPilarBody () {
        this.sortUserOfUSER = [...this.USER]
        this.clickBody += 1
        if(this.clickBody % 2) {
          this.sortUserOfUSER.sort((a, b) => a.body.localeCompare(b.body))
        } else {
          this.sortUserOfUSER.sort((a, b) => b.body.localeCompare(a.body))
        }
      },

//Click Title
      clickPilarTitle () {
        this.sortUserOfUSER = [...this.USER]
        this.clickBody += 1
        if(this.clickBody % 2) {
          this.sortUserOfUSER.sort((a, b) => a.title.localeCompare(b.title))
        } else {
          this.sortUserOfUSER.sort((a, b) => b.title.localeCompare(a.title))
        }
      },
//Click id 
      clickPilarId () {
        this.sortUserOfUSER = [...this.USER]
        this.clickBody += 1
        if(this.clickBody % 2) {
          this.sortUserOfUSER.sort((a, b) => a.id - (b.id))
        } else {
          this.sortUserOfUSER.sort((a, b) => b.id - (a.id))
        }
      },

    ...mapActions(['GET_USER_FROM_API'])
  },

  mounted() {
      this.GET_USER_FROM_API()
      .then((response) => {
        if (response.data) {
          this.sortProductsBySearchValue(this.SEARCH_VALUE)
        }
      })
  },

  watch : {
    SEARCH_ID() {
      this.sortIdTable(this.SEARCH_ID);
    },
    SEARCH_VALUE() {
      this.sortProductsBySearchValue(this.SEARCH_VALUE);
    }
  }
}
</script>

<style lang="scss" scoped>
.vMain{
  margin-bottom: 100px;
  .vMain__header{
    width: 100%;
    display: flex;
    flex-direction: row;
    .id {
      width: 10%;
    }
    .body, .title {
      width: 45%;
    }
    .id, .body, .title {
      display: flex;
      justify-content: center;
      border: 1px solid rgb(214, 211, 211);
      margin: 0;
      padding: 10px;
      &:hover{
        background: rgb(245, 244, 244);
        transition: 0.5s;
        cursor: pointer;
        color: rgb(117, 116, 116);
      }
    }
  }
  .vPagination{
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    .page {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      border: 1px solid rgb(214, 211, 211);
      margin: 5px;
      padding: 5px;
      width: 20px;
      cursor: pointer;
      &:hover {
        background: rgb(212, 211, 211);
        transition: 0.5s;
      }
    }
    .page__activ {
      background: rgb(212, 211, 211);
      transition: 0.5s;
    }
  }
}
</style>