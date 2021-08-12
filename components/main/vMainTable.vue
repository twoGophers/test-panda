<template>
  <div class="vMain__table">
        <p class="id__table table">{{row_table.id}}</p>
        <p class="body__table table">{{row_table.body}}</p>
        <p class="title__table table">{{row_table.title}}</p>
  </div>
</template>

<script>
export default {
    name : "vMain__table",
    props : {
        row_table : {
            type : Object,
            default : () => {
                return {}
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.vMain__table{
    width: 100%;
    display: flex;
    flex-direction: row;
    .id__table {
        width: 10%;
    }
    .body__table, .title__table {
        width: 45%;
    }
    .table {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(214, 211, 211);
        padding: 10px;
        margin: 0;
    }
}
</style>