<template>
    <ul :id="menu" class="nav-menu" >
      <li v-for="item in list_items" class="nav-menu__item">
        <router-link class="nav-menu__link" :to="item.href">{{ item.text }}</router-link></li>
    </ul>
</template>

<script>
export default {
  name: "Menu",
  el: "menu",
  data: function () {
    return {list_items: [
        {text: 'Click Button', href: '/click'},
        {text: 'Colors Form', href: '/colors'},
      ]
    }
  },
  methods: {

  }
}
</script>

<style  scoped lang="scss">
  .nav-menu {
    flex-grow: 1;
    padding-left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    font-family: Gotham-Book, sans-serif;
    &__item {
      list-style-type: none;
      font-size: 28px;
      padding: 10px;
      border: 1px solid gray;
      border-radius: 20px;
      margin-bottom: 20px;
      cursor: pointer;
    }
    &__item:hover {
      background-color: #42b983;
    }
  }
</style>