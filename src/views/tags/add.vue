<template>
  <v-dialog v-model="showDialog" :title="this.tag ? '修改标签' : '添加标签'">
    <form id="tag-form" @submit.prevent="saveTag">
      <input class="form-text" type="text" placeholder="标签" v-model="internalTag.name" required>
    </form>
    <button class="btn btn-primary" form="tag-form" slot="footer">保存</button>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'addTag',
  props: {
    tag: Object,
    index: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      showDialog: false,
      internalTag: this.tag ? JSON.parse(JSON.stringify(this.tag)) : { name: '' },
    }
  },
  watch: {
    showDialog(newVal) {
      if (newVal) {
        this.internalTag = this.tag ? JSON.parse(JSON.stringify(this.tag)) : { name: '' }
      }
    },
  },
  methods: {
    show() {
      this.showDialog = true
    },
    saveTag() {
      const p = this.internalTag._id
        ? this.updateTag({ tag: this.internalTag, index: this.index })
        : this.addTag(this.internalTag)
      p.then(() => {
        this.showDialog = false
      })
    },
    ...mapActions(['addTag', 'updateTag']),
  },
}
</script>


<style lang="less" scoped>
.tag-wrap{
  border:1px solid #ccc;
  border-radius:4px;
}
</style>
