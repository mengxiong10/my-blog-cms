<template>
  <button :type="nativeType"
          class="btn"
          :class="btnType">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    nativeType: {
      default: 'button'
    },
    type: {
      // primary,success,text
      default: 'default'
    }
  },
  computed: {
    btnType () {
      return 'btn--' + this.type
    }
  }
}
</script>

<style scoped>
@import 'varible.css';
.btn {
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px/1;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  color: #1f2d3d #fff;
  border: var(--border-default);
  border-radius: 4px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
}

.btn--default {
  color: #1f2d3d;
  background: #fff;
  border-color: #ccc;
  &:hover {
    color: var(--color-blue);
    border-color: var(--color-blue);
  }
}

.btn--primary {
  color: #fff;
  background-color: var(--color-blue);
  border-color: color(var(--color-blue) saturation(50%));
  &:hover {
    background-color: color(var(--color-blue) lightness(40%));
    border-color: color(var(--color-blue) lightness(40%));
  }
}

.btn--success {
  color: #fff;
  background: var(--color-green);
  border-color: color(var(--color-green) saturation(50%));
  &:hover {
    background-color: color(var(--color-green) lightness(40%));
    border-color: color(var(--color-green) lightness(40%));
  }
}

.btn--text {
  color: var(--color-blue);
  background: transparent;
  border: 0;
  line-height: inherit;
}
</style>
