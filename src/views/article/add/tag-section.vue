<template>
  <section>
    <v-dropdown class="tag-wrap" position="left">
      <i class="fa fa-tags"> 标签</i>
      <v-dropmenu slot="dropdown" :options="tagOptions" option-key="_id" v-model="tags"></v-dropmenu>
      <v-dropmenu slot="dropdown" :options="['添加标签']" @input="showDialog"></v-dropmenu>
    </v-dropdown>
    <add-tag  ref="tagForm"></add-tag>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AddTag from 'src/views/tags/add'

export default {
  name: 'tagSection',
  components: { AddTag },
  props: {
    // 已选中的标签
    tags: Array,
  },
  computed: mapState({
    // 所有标签
    tagOptions: ({ tag }) => tag.tagList,
  }),
  methods: {
    showDialog() {
      this.$refs.tagForm.show()
    },
    ...mapActions(['getTagList']),
  },
  created() {
    this.getTagList()
  },
}
</script>


<style lang="less" scoped>
.tag-wrap{
  border:1px solid #ccc;
  border-radius:4px;
}
</style>
