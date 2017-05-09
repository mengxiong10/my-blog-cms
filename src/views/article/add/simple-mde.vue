<template>
  <textarea ref="editor"></textarea>
</template>

<script>
import 'simplemde/dist/simplemde.min.css'
import Simplemde from 'simplemde'

export default {
  props: ['value'],
  data () {
    return {
      mde: null
    }
  },
  watch: {
    value (newVal) {
      if (newVal === this.mde.value()) {
        return
      }
      this.mde.value(newVal)
    }
  },
  mounted () {
    this.mde = new Simplemde({
      autoDownloadFontAwesome: false,
      element: this.$refs.editor,
      spellChecker: false
    })
    this.mde.value(this.value)
    this.mde.codemirror.on('change', () => {
      this.$emit('input', this.mde.value())
    })
  },
  beforeDestroy () {
    this.mde.toTextArea()
  }
}

</script>
