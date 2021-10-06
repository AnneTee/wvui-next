<template>
	<div class="vp-wrapper">
		<div class="vp-wrapper__demo">
			<slot
				name="demo"
				:props-values="propsValues"
				:slots-values="slotsValues"
			/>
			<wvui-button
				v-if="hasCode"
				class="vp-wrapper__demo__button"
				:quiet="true"
				@click="onClick"
			>
				{{ buttonLabel }}
			</wvui-button>
		</div>
		<div
			v-if="hasCode"
			v-show="showCode"
			class="vp-wrapper__code"
		>
			<slot name="code" />
		</div>
		<div v-if="hasControls" class="vp-wrapper__controls">
			<Controls
				:props-config="propsConfig"
				:props-values="propsValues"
				:slots-config="slotsConfig"
				:slots-values="slotsValues"
				@control-change="handleControlChange"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef, ref, computed } from 'vue';
import Controls from './Controls.vue';
import WvuiButton from '../../src/components/button/Button.vue';

interface Config {
	[key: string]: ConfigItem
}

// TODO: consider expanding to allow options other than strings
interface ConfigItem {
	type?: string,
	options?: Array<string>,
	default?: string
}

interface eventData {
	name: string,
	value: string,
	type: string
}

/**
 * Wrapper for component demos.
 *
 * Includes:
 *  - Formatting for the demo itself
 *  - Show/hide code button and functionality
 *  - Optional controls for configurable demos
 */
export default defineComponent( {
	name: 'Wrapper',
	components: { Controls, WvuiButton },
	props: {
		/**
		 * Data for configurable props.
		 */
		propsConfig: {
			type: Object,
			default: () => {
				return {};
			}
		},
		/**
		 * Data for configurable slots.
		 */
		slotsConfig: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	setup( props, { slots } ) {
		// Set up show code/hide code button.
		const hasCode = slots && slots.code;
		const showCode = ref( false );
		const buttonLabel = computed( () => {
			return showCode.value === true ? 'Hide code' : 'Show code';
		} );
		const onClick = (): void => {
			showCode.value = !showCode.value;
		};

		// Set up controls if config is provided.
		const propsConfig = toRef( props, 'propsConfig' );
		const slotsConfig = toRef( props, 'slotsConfig' );
		const hasControls = Object.keys( propsConfig.value ).length > 0 ||
			Object.keys( slotsConfig.value ).length > 0;

		/**
		 * Set up an object containing control values set to defaults.
		 *
		 * @param config Props or slots config
		 * @return Object of name + value pairs
		 */
		const getControlsValues = ( config: Config ): Record<string, string | undefined> => {
			const result = {} as Record<string, string | undefined>;
			Object.keys( config ).forEach( ( key ) => {
				result[ key ] = config[ key ].default;
			} );
			return result;
		};
		const propsValues = reactive( getControlsValues( propsConfig.value ) );
		const slotsValues = reactive( getControlsValues( slotsConfig.value ) );

		/**
		 * Store new control value so it can be passed back into the controls
		 * and to the component via the demo slot.
		 *
		 * @param data Event data
		 */
		const handleControlChange = ( data: eventData ): void => {
			if ( data.type === 'slot' ) {
				( slotsValues as Record<string, string> )[ data.name ] = data.value;
			} else {
				( propsValues as Record<string, string> )[ data.name ] = data.value;
			}
		};

		return {
			hasCode,
			showCode,
			buttonLabel,
			onClick,
			hasControls,
			propsValues,
			slotsValues,
			handleControlChange
		};
	}
} );
</script>

<style lang="less">
@import ( reference ) '../../src/themes/wikimedia-ui.less';

.vp-wrapper {
	margin-top: 16px;

	&__demo {
		border: @border-width-base @border-style-base @wmui-color-base70;
		border-radius: @border-radius-base;
		padding: 24px;
		position: relative;

		// Similar to our wikis, font size should be 1em on mobile and 0.875em
		// on larger screens.
		@media screen and ( min-width: @width-breakpoint-tablet ) {
			font-size: @font-size-base;
		}

		&__button {
			position: absolute;
			right: 0;
			bottom: 0;
		}
	}

	&__code {
		div[class*="language-"] {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			margin-top: 0;
		}
	}
}

</style>
