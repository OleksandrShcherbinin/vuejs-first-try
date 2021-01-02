<template>
  <nav class="nav">
    <img src="../../assets/logo.png" alt="logo" class="nav-logo">
  <Menu></Menu>
  </nav>
</template>

<script>
import Menu from "@/components/header/Menu";
export default {
  name: "Header",
  components: {Menu}
}
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  &-logo {
    width: 100px;
    height: 100px;
  }
}
</style>