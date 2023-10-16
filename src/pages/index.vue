<script setup lang="ts">
    import { useChatStore } from '~/stores/chat'

    const store = useChatStore()
</script>

<template>
    <ChatButton v-if="!store.showChat" />

    <ChatBox v-if="store.showChat" />
</template>

<style scoped>

</style>
