<template>
  <div>
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

import dayjs from 'dayjs';

export default {
  components: { TheHeader, MemberList, WeekView, BaseContainer },
  setup() {
    console.log(dayjs());
  },
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

.main {
  display: flex;
  gap: 10px;
}
</style>
