<!-- 分页组件 -->
<template>
  <div class="page-wrap" onselectstart = "return false">
    <button @click="--currentPage" :disabled="currentPage === 1">
      <i class="fa fa-chevron-left"></i>
    </button>
    <button
      v-for="page in pages"
      :class="{'active': page === currentPage}"
      :disabled="page =='...'"
      @click="currentPage = page"
      >{{page}}</button>
    <button @click="++currentPage" :disabled="currentPage === total">
      <i class="fa fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'VPage',
  props: {
    total: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 1
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    },
    pages () {
      const current = this.currentPage
      const last = this.total
      if (last <= 7) {
        return Array.apply(null, { length: last }).map((v, i) => i + 1)
      } else if (current - 3 <= 1) {
        return [1, 2, 3, 4, 5, 6, '...', last]
      } else if (current + 3 >= last) {
        return [1, '...', last - 5, last - 4, last - 3, last - 2, last - 1, last]
      } else {
        return [1, '...', current - 2, current - 1, current, current + 1, current + 2, '...', last]
      }
    }
  },
  watch: {
    total (val) {
      if (this.currentPage > val) {
        this.currentPage = val
      }
    }
  }
}
</script>

<style  scoped>
@import 'varible.css';

.page-wrap{
  font-size: 0;
  text-align: center;
}
button{
  display: inline-block;
  min-width: 28px;
  height: 28px;
  line-height: 28px;
  margin-right: -1px;
  padding: 0 5px;
  font-size: 14px;
  color:#48576a;
  background: #fff;
  border:1px solid #d1dbe5;
  outline: 0;
  cursor: pointer;
  &:hover{
    color:var(--color-blue);
  }
  &.active{
    color:#fff;
    border:1px solid var(--color-blue);
    background: var(--color-blue);
    cursor: default;
  }
  &[disabled]{
    color:var(--disabled-color);
    cursor: not-allowed;
  }
}
</style>
