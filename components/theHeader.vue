<script setup></script>
<template>
  <v-container>
    <v-layout header class="header-css bg-white">
      <v-row end>
        <v-col lg="2">
          <nuxt-link to="/">
            <v-img
              src="/img/banner.png"
              width="250px"
              height="100px"
              class="image -fluid"
              alt="Fluid image"
            />
          </nuxt-link>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>
<style lang="scss" scoped>
.header-css {
  box-shadow: var(--box-shadow-offset-y) var(--box-shadow-offset-y)
    var(--box-shadow-blur-radius) var(--box-shadow-spread-radius)
    var(--box-shadow-color);
}
</style>
