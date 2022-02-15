<script lang="ts" src="./highlightText.service"></script>
<template>
  <div class="highlight-text">
    <span
      v-for="item in texts"
      :key="item.text"
      :class="{ on: item.type === 1 }"
      >{{ item.text }}</span
    >
  </div>
</template>