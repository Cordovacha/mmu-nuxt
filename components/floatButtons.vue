<script setup></script>
<template>
  <div class="floating-buttons">
    <AtomsTheLanguageButton
      :label="''"
      flag="/img/chile.png"
      size="sm"
      @click="$emit('languageSelection', esBlock)"
    />

    <AtomsTheLanguageButton
      :label="''"
      flag="/img/united-kingdom.png"
      size="sm"
      @click="$emit('languageSelection', enBlock)"
    />
  </div>
</template>
<style lang="scss" scoped>
.floating-buttons {
  position: fixed;
  top: 30%;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  border-radius: 5px;
}
</style>
