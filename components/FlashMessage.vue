<template>
  <div
    v-if="flashMessage"
    :class="typeClass"
    class="m-5 p-4 mb-4 text-sm rounded-lg"
    role="alert"
  >
    {{ flashMessage }}
  </div>
</template>
<script lang="ts" setup>
const { flashMessage, flashMessageType } = useFlashMessage();

const typeClass = computed(() => {
  const classes = {
    info: {
      'text-blue-700': true,
      'bg-blue-100': true,
      'dark:text-blue-400': true,
    },
    danger: {
      'text-red-700': true,
      'bg-red-100': true,
      'dark:text-red-400': true,
    },
    success: {
      'text-green-700': true,
      'bg-green-100': true,
      'dark:text-green-400': true,
    },
    warning: {
      'text-yellow-700': true,
      'bg-yellow-100': true,
      'dark:text-yellow-300': true,
    },
    dark: {
      'text-gray-700': true,
      'bg-gray-100': true,
      'dark:text-gray-300': true,
    },
  };
  if (!flashMessageType.value) {
    return classes.info;
  }
  return classes[flashMessageType.value];
});
</script>
