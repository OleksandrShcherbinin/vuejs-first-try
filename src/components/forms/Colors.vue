<template>
  <div id="color" class="colors">
    <form action="#" class="colors-form" v-bind:style="$data">
      <label for="colorInput">Введите цвет на английском</label>
      <input id="colorInput" class="colors-form__text" type="text" placeholder="Введите цвет" required v-on:input="changeColor">
    </form>
  </div>
</template>

<script>
import Header from "@/components/header/Header";

export default {
name: "Colors",
  el: '#color',
  data: function () {
    return {
      backgroundColor: "white"
    }
  },
  methods: {
    changeColor: function (event) {
      this.$data.backgroundColor = event.target.value
    }
  },
  components: {
  Header,
  },
}
</script>

<style scoped lang="scss">
.colors {
  margin: 0 auto;
  &-form {
    margin: 0 auto;
    min-width: 320px;
    max-width: 500px;
    border: 1px solid gray;
    border-radius: 10px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    label {
      font-weight: bold;
      margin-bottom: 20px;
    }
    &__text {
      height: 45px;
      padding: 10px;
    }
  }
}

</style>