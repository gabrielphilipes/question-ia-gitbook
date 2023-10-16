<script setup lang="ts">
    import { useChatStore } from '~/stores/chat'

    const store = useChatStore()
</script>

<template>
    <section class="container">
        <header>
            <button
                class="close-button"
                @click="store.changeStage()"
            >
                <icon
                    name="material-symbols:close-rounded"
                    class="text-lg"
                />
            </button>

            <div>
                [img]<br>
                Texto centralizado
            </div>
        </header>

        <div>
            <article>
                <div>
                    <p>Texto alinhado a direit</p>
                </div>
            </article>

            <form
                name="search-ai"
                class=""
            >
                <input type="text">
                <button>Perguntar</button>
            </form>
        </div>
    </section>
</template>

<style lang="postcss" scoped>
  .container {
    min-height: 400px;
    @apply fixed bottom-2 right-2 w-72 py-2 px-3 rounded-lg;
    @apply bg-amber-700 shadow-lg shadow-gray-300;

    .close-button {
      @apply absolute right-2 top-1 h-5 w-5 flex items-center justify-center rounded-md;
      @apply hover:text-amber-500;
      @apply focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 focus:text-amber-500;
    }
  }
</style>
