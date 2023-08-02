<script setup>
import { computed } from "vue";
const props = defineProps({
  text: { required: true, type: String },
  type: { required: false, type: String, default: "paragraph" },
});
const is = computed(() => {
  switch (props.type) {
    case "heading_1":
      return "h1";
    case "heading_2":
      return "h2";
    case "heading_3":
      return "h3";
    case "paragraph":
      return "p";

    default:
      return "p";
  }
});
</script>
<template>
  <component :is="is" v-html="text"></component>
</template>
