<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  loader: {
    type: Boolean,
    required: true,
  },
});
</script>
<template>
  <v-dialog
    :modelValue="props.isOpen"
    size="md"
    persistent
    :closeOnPressEscape="false"
    :hideOnClickOutside="false"
    :showClose="false"
    width="auto"
  >
    <v-col>
      <v-card id="Language" class="text-center pr-10 pt-10 pb-10 pl-10">
        <h1 class="pb-12">Language selection</h1>

        <p class="text-center pb-2">
          Please select the language of preference.
        </p>
        <p class="text-center pb-2">
          Por favor selecciona el lenguaje de tu preferencia.
        </p>
        <div v-if="loader">
          <v-progress-circular></v-progress-circular>
        </div>
        <div v-else>
          <AtomsTheLanguageButton
            label="Español"
            flag="/img/chile.png"
            @click="$emit('languageSelection', esBlock)"
          />

          <AtomsTheLanguageButton
            label="English"
            flag="/img/united-kingdom.png"
            @click="$emit('languageSelection', enBlock)"
          />
        </div>
      </v-card>
    </v-col>
  </v-dialog>
</template>

<style lang="scss" scoped>
.dialogD {
  display: grid;
  justify-content: center;
  align-items: center;
}

.Language {
  display: grid;
  text-align: center;
  border-radius: 25px;
  background: fixed;
  background-color: black;
}
</style>
