<script setup>
const props = defineProps({
  showModal: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const menuList = useLocalStorage("menuList", []);
const shouldOpenModal = computed(() => {
  if (props.showModal && menuList.value.length === 0) {
    return true;
  }
  return false;
});
const isOpen = ref(shouldOpenModal.value);
const loader = ref(false);
const router = useRouter();

async function languageSelection(blockId) {
  loader.value = true;
  const data = await useBLockFetch(blockId);
  menuList.value = data;
  isOpen.value = false;
  loader.value = false;
  router.push({ path: "/" });
  // for i18n
}
const bg = {
  style: `background-image: url(/img/pattern.png);`,
};
</script>

<template>
  <v-app v-bind="bg">
    <TheSideBar :menu-list="menuList" />
    <v-container>
      <slot />
    </v-container>
    <FloatButtons @language-selection="(block) => languageSelection(block)" />
    <TheModal
      :isOpen="isOpen"
      :loader="loader"
      @language-selection="(block) => languageSelection(block)"
    />
    <TheFooter />
  </v-app>
</template>
<style lang="scss" scoped></style>
