<template>
  <ul class="menu">
    <template v-if="opts.length">
      <li class="dropmenu-list"  v-for="(option,index) in opts" @click="selectValue(option)">
        <i class="fa fa-check"  v-show="isSelected(option)"></i>
        {{option.name}}
      </li>
    </template>
    <li class="dropmenu-list disabled" v-else>空</li>
  </ul>
</template>

<script>
export default {
  name: 'VDropmenu',
  props: {
    value: null,
    options: Array,
    optionKey: String
  },
  data () {
    return {
      key: this.optionKey || 'value'
    }
  },
  computed: {
    multiple () {
      return Array.isArray(this.value)
    },
    opts () {
      return this.options.map(v => {
        if (typeof v !== 'object' || v === null) {
          return { name: v, value: v }
        } else {
          return v
        }
      })
    }
  },
  methods: {
    isSelected (option) {
      if (this.multiple) {
        return this.value.indexOf(option[this.key]) > -1
      } else {
        return this.value === option[this.key]
      }
    },
    selectValue (option) {
      let index
      if (this.multiple) {
        index = this.value.indexOf(option[this.key])
        if (index >= 0) {
          this.value.splice(index, 1)
        } else {
          this.value.push(option[this.key])
        }
      } else {
        this.$emit('input', option[this.key])
      }
    }
  }
}
</script>


<style scoped>
@import 'varible.css';
.menu{
  min-width: 100px;
  max-width: 200px;
  max-height: 300px;
  padding:5px 0;
  overflow-y: auto;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.dropmenu-list{
  display: block;
  cursor: pointer;
  padding: 3px 30px;
  line-height: 20/14;
  color: #333;
  white-space: nowrap;
  &:hover{
    background: #f5f5f5;
  }
  &.disabled{
    color: var(--disabled-color);
    background: transparent;
    cursor: not-allowed;
  }
}
.fa-check{
  position: absolute;
  margin-left: -20px;
  color:var(--color-blue);
  line-height: inherit;
}
</style>
