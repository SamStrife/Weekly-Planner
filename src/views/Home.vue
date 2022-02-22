<template>
  <base-container class="page">
    <div class="main">
      <member-list class="list"></member-list>
      <week-view class="weekview"></week-view>
    </div>
  </base-container>
</template>

<script setup>
import MemberList from '../components/members/MemberList.vue';
import WeekView from '../components/week/WeekView.vue';
</script>

<style>
.page {
  display: flex;
  flex-grow: 1;
  height: 90vh;
}

.main {
  display: flex;
  gap: 10px;
  flex-grow: 1;
}
.weekview {
  display: flex;
  flex-direction: column;
}

.list {
  width: 15rem;
}
</style>
