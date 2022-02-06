<template>
  <the-header></the-header>
  <div id="page" class="d-flex p-2 bd-highlight">
    <member-list></member-list>
    <week-view></week-view>
  </div>
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
