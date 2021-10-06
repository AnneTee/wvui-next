<template>
	<table class="vp-controls">
		<thead>
			<tr>
				<th>Name</th>
				<th>Value</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="( propControl, propName ) in propsConfig" :key="propName">
				<td class="vp-tokens-table__name">
					<pre>{{ propName }}</pre>
				</td>
				<td>
					<template v-if="propControl.type === 'radio'">
						<wvui-radio
							v-for="option in propControl.options"
							:key="option"
							v-model="wrappedPropsValues[ propName ]"
							:input-value="option"
							:name="'radio-group-' + propName"
							:inline="true"
							@update:model-value="onControlChange( propName, $event, 'prop' )"
						>
							{{ option }}
						</wvui-radio>
					</template>
					<!-- TODO: this is untested -->
					<template v-if="propControl.type === 'input'">
						<wvui-input
							:value="wrappedPropsValues[ propName ]"
							@input="onControlChange( propName, $event, 'prop' )"
						/>
					</template>
				</td>
			</tr>
			<tr v-for="( slotControl, slotName ) in slotsConfig" :key="slotName">
				<td class="vp-tokens-table__name">
					<pre>{{ slotName }}</pre>
				</td>
				<td>
					<wvui-input
						:value="wrappedSlotsValues[ slotName ]"
						@input="onControlChange( slotName, $event, 'slot' )"
					/>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
import { defineComponent, ref, toRef, reactive, WritableComputedRef } from 'vue';
import WvuiRadio from './../../src/components/radio/Radio.vue';
import WvuiInput from './../../src/components/input/Input.vue';
import useModelWrapper, { ModelValue } from './../../src/composables/useModelWrapper';

interface WrappedControlsValues {
	[ key: string ]: WritableComputedRef<ModelValue>
}

/**
 * A table of interactive controls to configure a component demo.
 */
export default defineComponent( {
	name: 'Controls',
	components: { WvuiRadio, WvuiInput },
	props: {
		propsConfig: {
			type: Object,
			default: () => {
				return {};
			}
		},
		propsValues: {
			type: Object,
			default: () => {
				return {};
			}
		},
		slotsConfig: {
			type: Object,
			default: () => {
				return {};
			}
		},
		slotsValues: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	setup( props, { emit } ) {
		/**
		 * Wrap prop values so we can use them as form element values.
		 *
		 * @param values Object of values
		 * @return Object of wrapped values
		 */
		const getWrappedControlsValues = (
			values: Record<string, string>
		): WrappedControlsValues => {
			const result = {} as WrappedControlsValues;
			Object.keys( values ).forEach( ( name ) => {
				result[ name ] = useModelWrapper( ref( values[ name ] ), emit );
			} );
			return result;
		};

		const propsValues = toRef( props, 'propsValues' );
		const wrappedPropsValues = reactive( getWrappedControlsValues( propsValues.value ) );

		const slotsValues = toRef( props, 'slotsValues' );
		const wrappedSlotsValues = reactive( getWrappedControlsValues( slotsValues.value ) );

		/**
		 * When a control changes, emit data up to the Wrapper.
		 *
		 * @param key The name of the prop/slot
		 * @param value The new value of the prop/slot
		 * @param type Whether this is a prop or a slot
		 */
		const onControlChange = ( key: string, value: string, type: string ): void => {
			emit( 'control-change', {
				name: key,
				value,
				type
			} );
		};

		return {
			wrappedPropsValues,
			wrappedSlotsValues,
			onControlChange
		};
	}
} );
</script>

<style lang="less">
@import ( reference ) '../../src/themes/wikimedia-ui.less';

.vp-controls {

}

</style>
