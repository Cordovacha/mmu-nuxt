<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <v-btn
    size="small"
    variant="outlined"
    rounded="lg"
    elevation="4"
    class="margin-small zindex"
  >
    <v-img
      :src="flag"
      width="32"
      height="32"
      alt="Spanish flag"
      style="padding-right: 4px"
    />
    {{ label }}
  </v-btn>
</template>
<style lang="scss" scoped>
.zindex {
  z-index: 9999;

  padding-bottom: 5px;
}
</style>
