<template>
  <div class="relative">
    <FlashMessage class="fixed top-0 left-0 right-0" />
    <h1 class="text-xl mt-20 m-5">Nuxt v3 Flash message example</h1>
    <button
      @click="showFlashMessage('this is Flash Message!', 'info', 4000)"
      class="m-5 p-2 bg-gray-300"
    >
      show flash message
    </button>
  </div>
</template>
<script lang="ts" setup>
const { flashMessage, flashMessageType, showFlashMessage, clearFlashMessage } =
  useFlashMessage();
</script>
