<script setup></script>

<template>
  <ClientOnly fallback-tag="div" fallback="Loading...">
    <h1 class="text-center plain-text-margin pt-10 mt-6">Home</h1>
    <v-layout class="padding-content bg-content plain-text-margin mb-10">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aliquam
        possimus nesciunt nobis ratione optio magni! Delectus modi quisquam sunt
        adipisci animi, cupiditate nobis exercitationem nam totam, magni atque!
        Commodi.
      </p>
    </v-layout>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.bg-content {
  background-color: #fbfaf9;
  border-radius: 4px;
  border: 0.5px solid #d1d1d1;
  justify-content: center;
  margin-top: 15;
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
