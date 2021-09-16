<template>
	<div>
		<wvui-toggle-switch
			v-model="switchValue"
			name="single-switch-with-label"
			input-value="single-switch-with-label"
			@update:model-value="onUpdate"
		>
			Show details
		</wvui-toggle-switch>
		<p v-show="switchValue">
			Here are the details
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import WvuiToggleSwitch from '../ToggleSwitch.vue';

export default defineComponent( {
	name: 'SingleSwitchWithLabel',
	components: { WvuiToggleSwitch },
	setup() {
		const switchValue = ref( false );

		const onUpdate = ( value: string ): void => {
			// eslint-disable-next-line no-console
			console.log( 'update:modelValue event: ' + value );
		};

		return {
			switchValue,
			onUpdate
		};
	}
} );
</script>
