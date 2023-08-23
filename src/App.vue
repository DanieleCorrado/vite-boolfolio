<script>
import headerComp from './components/headerComp.vue';

export default {
  name: 'App',
  components: {
    headerComp
  }
}
</script>

<template>
  <header-comp />
  <router-view></router-view>
</template>

