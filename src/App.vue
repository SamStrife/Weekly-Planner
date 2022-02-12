<template>
  <div class="app">
    <the-header></the-header>
    <div class="main">
      <member-list class="list"></member-list>
      <week-view class="weekview"></week-view>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import MemberList from './components/members/MemberList.vue';
import BaseContainer from './components/ui/BaseContainer.vue';
import WeekView from './components/week/WeekView.vue';

export default {
  components: { TheHeader, MemberList, WeekView, BaseContainer },
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
  margin-top: 0px;
}

.app {
  display: flex;
  flex-direction: column;
}

the-header {
  flex-grow: 1;
}

.main {
  display: flex;
  gap: 10px;
  flex-grow: 1;
}
</style>
