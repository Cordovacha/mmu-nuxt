<script setup>
const router = useRouter();

const props = defineProps({
  menuList: {
    type: Object,
    required: true,
  },
});

const cleanBlock = computed(() => {
  if (props.menuList?.results) {
    const resultCleanBlock = props.menuList.results.filter(
      (elem) => elem.has_children === true,
    );
    return resultCleanBlock;
  }
  return [];
});

const open = ref(false);
</script>
<template>
  <v-app-bar scroll-behavior="hide" scroll-threshold="50">
    <v-img
      src="/img/banner.png"
      width="125px"
      height="50px"
      class="image-banner"
      @click="router.push('/')"
    />

    <v-spacer></v-spacer>

    <v-app-bar-nav-icon variant="text" @click="open = !drawer">
    </v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer
    v-model="open"
    location="left"
    temporary
    collapse="false"
    collapse-position="absolute"
    class="Navigation mb-lg-10 .rounded-lh"
  >
    <v-list-item
      :to="`/article/${items.id}/${items.child_page?.title}`"
      v-for="items in cleanBlock"
    >
      {{ items.child_page?.title }}
    </v-list-item>
  </v-navigation-drawer>
</template>
<style lang="scss" scoped>
.image-banner {
  width: 100% !important;
  max-width: 400px;
  height: auto;
  @media screen and (max-width: 992px) {
    width: 80%;
    max-width: 200px;
  }
}

.navbar-width {
  width: 500% !important;
  @media screen and (max-width: 992px) {
    width: 100% !important;
  }
  justify-content: flex-end;
}
</style>
