<template>
  <div id="number" class="numbers">
    <button class="numbers__button" v-on:click="randomNumber">ДОБАВИТЬ</button>
    <h2 class="numbers__item">{{numbers}}</h2>
    <button class="numbers__button" v-on:click="emptyNumber">УДАЛИТЬ</button>
  </div>
</template>

<script>
import Header from "@/components/header/Header";

let random;
let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8,9]

export default {
name: "Click",
  el: "#number",
  props: {
    numbers: 0
  },
  methods: {
    randomNumber: function () {
      random = digits[(Math.random() *
          digits.length) | 0];
      if (this.$props.numbers === undefined) {
        this.$props.numbers = ''
      }
      this.$props.numbers += random.toString();
    },
    emptyNumber: function () {
      this.$props.numbers = this.$props.numbers.slice(0, -1)
    }
  },
  components: {
  Header,
  }
}
</script>

<style scoped lang="scss">
.numbers {
  width: 50%;
  margin: 0 auto;
  height: 500px;
  &__button {
    margin: 50px auto;
    width: 100px;
    height: 70px;
    background-color: #42b983;
    border: 1px solid gray;
    -webkit-box-shadow: 5px 5px 0 0 #0dee0f, 10px 10px 0 0 #2bde25, 15px 15px 0 0 #93cd8d, 20px 20px 0 0 #bed928, 25px 25px 0 0 #E1EEFF, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 5px 5px 0 0 #0dee0f, 10px 10px 0 0 #2bde25, 15px 15px 0 0 #93cd8d, 20px 20px 0 0 #bed928, 25px 25px 0 0 #E1EEFF, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    cursor: pointer;
  }
  &__button:active {
    transform: translate(20px, 20px);
    transition: transform 0.5s;
    box-shadow: none;
  }
  &__item {
    font-family: "Open Sans", sans-serif;
    font-size: 30px;
    word-break: break-word;
  }
}

</style>