<template>
	<div class="vp-border-demo" :style="style" />
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue';

export default defineComponent( {
	name: 'ColorDemo',
	props: {
		/**
		 * The value of the token we're demoing, which should be a hex value.
		 */
		tokenValue: {
			type: String,
			required: true
		},
		cssProperty: {
			type: String,
			required: true
		}
	},
	setup( props ) {
		const { tokenValue, cssProperty } = toRefs( props );
		const style = computed( () => {
			return `${cssProperty.value}: ${tokenValue.value};`;
		} );

		return {
			style
		};
	}
} );
</script>

<style lang="less">
@import ( reference ) '../../../src/themes/wikimedia-ui.less';

.vp-border-demo {
    border: @border-base;
    height: 50px;
	width: 100px;
    margin-bottom: 5px;

	@media screen and ( min-width: @width-breakpoint-tablet ) {
		width: 300px;
	}
}

</style>
