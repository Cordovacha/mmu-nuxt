<script setup></script>
<template>
  <v-container>
    <div>
      <v-progress-circular color="light"></v-progress-circular>
    </div>
  </v-container>
</template>
<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  border-radius: var(--small);
  background-color: rgba($color: #000000, $alpha: 0.15);
}
</style>
