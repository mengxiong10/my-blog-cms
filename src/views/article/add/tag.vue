<template>
  <section>
    <label>标签</label>
    <div>
      <v-dropdown class="tag-wrap" position="left">
        <span>选择标签</span>
        <v-dropmenu slot="dropdown" :options="tagOptions" opt-key="id" v-model="tags"></v-dropmenu>
        <v-dropmenu slot="dropdown" :options="['添加标签']" @input="showDialog = true"></v-dropmenu>
      </v-dropdown>
    </div>
    <v-dialog v-model="showDialog" title="添加标签">
      <form @submit.prevent="save()">
        <input type="text" placeholder="创建新标签">
      </form>
      <button slot="footer" class="btn btn-primary">创建</button>
    </v-dialog>
  </section>
</template>

<script>
import api from 'src/api'
export default {
  name:'tagSecond',
  props:{
    tags:Array
  },
  data () {
    return {
      showDialog:false,
      tagOptions:[]
    }
  },
  created () {
    api.getTagList().then(res => this.tagOptions = res.data.data)
  }
}
</script>


<style lang="less" scoped>
.tag-wrap{
  border:1px solid #ccc;
  border-radius:4px;
}
</style>
