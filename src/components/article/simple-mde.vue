<template>
  <textarea id="editor" ref="editor">kaka</textarea>
</template>

<script>
import Simplemde from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
export default {
  props:['value'],
  data () {
    return {
      mde:null
    }
  },
  mounted () {
    this.mde = new Simplemde({
      autoDownloadFontAwesome:false,
      element:document.getElementById('editor'),
      spellChecker:false,
    })
    this.mde.value(this.value)
    // this.mde.codemirror.on('change',()=>{
    //   this.$emit('input',this.mde.value())
    // })
  },
  // watch:{
  //   value (newValue) {
  //     this.mde.value(newValue)
  //   }
  // },
  beforeDestroy () {
    this.mde.toTextArea()
  }
}

</script>
