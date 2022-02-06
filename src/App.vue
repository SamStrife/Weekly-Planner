<template>
  <the-header></the-header>
  <member-list></member-list>
  <week-view></week-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import MemberList from './components/members/MemberList.vue';
import WeekView from './components/week/WeekView.vue';

export default {
  components: { TheHeader, MemberList, WeekView },
  setup() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
