<script setup></script>
<template>
  <v-footer class="footer">
    <a
      href="https://happenence.com/privacy/"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      Happenence Ltd. Privacy Policy
    </a>
    <p class="margin-mobile">
      Copyright © 2011 - 2022 Happenence Ltd. All Rights Reserved.
    </p>
  </v-footer>
</template>
<style lang="scss" scoped>
.footer {
  background-color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    display: block;
    .margin-mobile {
      margin-top: 1rem;
    }
  }
}
</style>
