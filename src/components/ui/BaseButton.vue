<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button {
  background-color: #4caf50;
  border: solid;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  width: 150px;
  height: 50px;
}

button:hover {
  background-color: #122b13;
  cursor: pointer;
  font-size: 22px;
}
</style>
