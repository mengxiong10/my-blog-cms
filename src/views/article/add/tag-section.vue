<template>
  <section>
    <v-dropdown class="tag-wrap" position="left">
      <i class="fa fa-tags"> 标签</i>
      <v-dropmenu slot="dropdown" :options="tagOptions" option-key="_id" v-model="tags"></v-dropmenu>
      <v-dropmenu slot="dropdown" :options="['添加标签']" @click.native="showDialog"></v-dropmenu>
    </v-dropdown>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'tagSection',
  props: {
    // 已选中的标签
    tags: Array
  },
  computed: mapState({
    // 所有标签
    tagOptions: ({ tag }) => tag.tagList
  }),
  methods: {
    showDialog () {
      this.$modal.prompt({ title: '添加标签' }).then((data) => {
        this.addTag(data)
      }, () => { })
    },
    ...mapActions(['getTagList', 'addTag'])
  },
  created () {
    this.getTagList()
  }
}
</script>


<style scoped>
.tag-wrap{
  border:1px solid #ccc;
  border-radius:4px;
}
</style>
