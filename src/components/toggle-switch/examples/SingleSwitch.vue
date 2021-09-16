<template>
	<div>
		<p>Toggle switch value: {{ switchValue }}</p>
		<wvui-toggle-switch
			v-model="switchValue"
			name="single-switch"
			input-value="single-switch"
			@update:model-value="onUpdate"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import WvuiToggleSwitch from '../ToggleSwitch.vue';

export default defineComponent( {
	name: 'SingleSwitch',
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

<style scoped>
p {
	font-weight: bold;
	margin-top: 0;
}
</style>
