<template>
  <div>
    <h1>app</h1>
    <NuxtPage />
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "bodyClose",
    },
  ],
});
</script>
<style lang="scss" scoped></style>
