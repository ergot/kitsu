<template>
<div class="flexrow">
  <div class="flexrow-item">
    <search-icon></search-icon>
  </div>
  <div class="flexrow-item search-field">
    <input
      ref="input"
      class="input search-input"
      type="text"
      :placeholder="placeholder"
      @input="onSearchChange"
      v-focus
    />
  </div>
  <div class="flexrow-item erase-search">
    <span
      class="tag"
      @click="clearSearch"
    >
      x
    </span>
  </div>
</div>
</template>

<script>
import { SearchIcon, XIcon } from 'vue-feather-icons'

export default {
  name: 'search-field',
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  components: {
    XIcon,
    SearchIcon
  },
  computed: {
  },
  methods: {
    onSearchChange () {
      this.$emit('change', this.$refs.input.value)
    },
    setValue (value) {
      this.$refs.input.value = value
    },
    getValue (value) {
      return this.$refs.input.value
    },
    focus () {
      this.$refs.input.focus()
    },
    clearSearch () {
      this.setValue('')
      this.onSearchChange()
    }
  }
}
</script>
<style>
.erase-search {
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.search-field {
  margin-right: 0.2em;
}

.search-input {
  width: 300px;
}

.search-input::placeholder {
  color: #CCC;
}
</style>
