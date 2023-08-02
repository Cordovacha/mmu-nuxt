<script setup>
const loader = ref(false);
const rawText = ref("");
const title = ref("");

const route = useRoute();

const fetchData = async (newId) => {
  loader.value = true;
  const rawData = await useBLockFetch(newId);
  const { results } = rawData;
  rawText.value = results;
  loader.value = false;
};

watch(
  () => route.params.id,
  async (newId) => {
    await fetchData(newId);
    title.value = route.params.title;
  },
  { immediate: true },
);
</script>

<template>
  <AtomsTheLoaderFullScreen v-if="loader" />
  <main v-else class="plain-text-margin pt-10 mt-6">
    <h1 class="text-align-center">
      {{ title }}
    </h1>
    <div class="plain-text-margin bg-content">
      <formattedText
        v-for="content in rawText"
        :key="content.id"
        :type="content.type"
        :text="extractText(content)"
      >
      </formattedText>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.bg-content {
  background-color: #fbfaf9;
  border-radius: 4px;
  border: 0.5px solid #d1d1d1;
  justify-content: center;
}
.plain-text-margin {
  margin: 0 20%;
  padding: var(--small) var(--large);
  @media screen and (min-width: 1201px) and (max-width: 1400px) {
    margin: 0 10%;
    padding: var(--small) var(--normal);
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    margin: 0 5%;
    padding: var(--small);
  }
  @media screen and (max-width: 992px) {
    margin: 0;
    padding: var(--small);
  }
}
</style>
