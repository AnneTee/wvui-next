<script setup>
import TokensTable from './../utils/tokens/TokensTable.vue';
import { border } from './../../tokens/alias.json';
</script>

# Borders

## Style

<TokensTable
	:tokens="border.style"
	token-prefix="border-style"
	token-demo="BorderDemo"
	css-property="border-style"
/>

## Width

<TokensTable
	:tokens="border.width"
	token-prefix="border-width"
	token-demo="BorderDemo"
	css-property="border-width"
/>

## Color

### Base

<TokensTable
	:tokens="border.color.base"
	token-prefix="border-color"
	token-demo="BorderDemo"
	css-property="border-color"
/>

### Progressive

<TokensTable
	:tokens="border.color.progressive"
	token-prefix="border-color"
	token-demo="BorderDemo"
	css-property="border-color"
/>

### Neutral

<TokensTable
	:tokens="border.color.neutral"
	token-prefix="border-color"
	token-demo="BorderDemo"
	css-property="border-color"
/>

### Destructive

<TokensTable
	:tokens="border.color.destructive"
	token-prefix="border-color"
	token-demo="BorderDemo"
	css-property="border-color"
/>

### Feedback

<TokensTable
	:tokens="border.color.feedback"
	token-prefix="border-color"
	token-demo="BorderDemo"
	css-property="border-color"
/>
