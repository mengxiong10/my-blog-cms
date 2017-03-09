<template>
  <section>
    <v-dropdown class="tag-wrap" position="left">
      <i class="fa fa-tags"> 标签</i>
      <v-dropmenu slot="dropdown" :options="tagOptions" option-key="_id" v-model="tags"></v-dropmenu>
      <v-dropmenu slot="dropdown" :options="['添加标签']" @input="showDialog = true"></v-dropmenu>
    </v-dropdown>
    <v-dialog v-model="showDialog" title="添加标签">
      <form id="tag-form" @submit.prevent="saveTag">
        <input class="form-text" type="text" placeholder="创建新标签" v-model="tag" required>
      </form>
      <button class="btn btn-primary" form="tag-form" slot="footer">创建</button>
    </v-dialog>
  </section>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name:'tagSection',
  props:{
    tags:Array
  },
  data () {
    return {
      showDialog:false,
      tag:'',
    }
  },
  computed:mapState({
    tagOptions : ({tag}) => tag.tagList
  }),
  watch:{
    showDialog (val) {
      if (val) {
        this.tag = ''
      }
    }
  },
  methods:{
    saveTag () {
      this.addTag(this.tag).then(()=>{
        this.showDialog = false
      })
    },
    ...mapActions(['getTagList','addTag'])
  },
  created () {
    this.getTagList()
  }
}
</script>


<style lang="less" scoped>
.tag-wrap{
  border:1px solid #ccc;
  border-radius:4px;
}
</style>
