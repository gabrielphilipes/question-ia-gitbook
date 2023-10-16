<script setup>
    import { useChatStore } from '~/stores/chat.ts'

    const store = useChatStore()
</script>

<template>
    <div
        class="button"
        @click="store.changeStage()"
    >
        <Icon
            name="teenyicons:chatbot-solid"
            class="text-gray-100 text-3xl"
        />
    </div>
</template>

<style lang="postcss" scoped>
  .button {
    @apply fixed bottom-2 right-2 w-16 h-16 rounded-full cursor-pointer flex justify-center items-center;
    @apply bg-amber-700 shadow-lg shadow-gray-300;
  }
</style>
