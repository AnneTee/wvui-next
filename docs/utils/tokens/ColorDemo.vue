<template>
	<div class="vp-color-demo" :style="`background-color: ${tokenValue}`" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent( {
	name: 'ColorDemo',
	props: {
		/**
		 * The value of the token we're demoing, which should be a hex value.
		 */
		tokenValue: {
			type: String,
			required: true
		}
	}
} );
</script>

<style lang="less">
@import ( reference ) '../../../src/themes/wikimedia-ui.less';

.vp-color-demo {
    border-radius: @border-radius-base * 2;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 50px;
	width: 100px;
    margin-bottom: 5px;

	@media screen and ( min-width: @width-breakpoint-tablet ) {
		width: 300px;
	}
}

</style>
