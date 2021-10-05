<script setup>
import TokensTable from './../utils/tokens/TokensTable.vue';
import { color } from './../../tokens/global.json';
</script>

# Colors

## Base

<TokensTable
	:tokens="color.base"
	token-prefix="color-base"
	token-demo="ColorDemo"
/>

## Accent

<TokensTable
	:tokens="color.accent"
	token-prefix="color-accent"
	token-demo="ColorDemo"
/>

## Utility

<TokensTable
	:tokens="color.utility"
	token-prefix="color-utility"
	token-demo="ColorDemo"
/>
