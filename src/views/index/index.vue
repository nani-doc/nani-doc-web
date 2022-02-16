<script lang="ts" src="./index.service"></script>
<template>
  <div class="projects">
    <div class="title">项目列表</div>
    <a
      :href="`${basePath}/${item.projectName}/`"
      class="item"
      v-for="item in projects"
      :key="`page_${item.projectName}`"
    >
      {{ item.projectTitle }}
    </a>
  </div>
</template>