<script setup lang="ts">
import { cn } from '../utils/cn'

const { text } = defineProps<{ text: string }>()
</script>

<template>
    <h1 :class="cn('bg-slate-500 text-6xl', $attrs.class)">Hello</h1>
    <p>{{ text }}</p>
</template>
