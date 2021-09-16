import { shallowMount } from '@vue/test-utils';
import { ModelValue } from '../../composables/useModelWrapper';
import WvuiToggleSwitch from './ToggleSwitch.vue';

describe( 'matches the snapshot', () => {
	type Case = [ msg: string, props: Record<keyof unknown, unknown>, slot: string ];

	type InputValue = string | number | boolean;
	interface PropsObject {
		modelValue: ModelValue,
		inputValue: InputValue,
		disabled?: boolean,
	}
	const generateProps = (
		modelValue: ModelValue,
		disabled?: boolean
	): PropsObject => {
		return { modelValue, inputValue: 'toggle-switch-test', disabled };
	};

	const cases: Case[] = [
		[ 'Default', generateProps( true ), '' ],
		[ 'With label', generateProps( true ), 'Label' ],
		[ 'Disabled', generateProps( true, true ), '' ],
		[ 'Disabled with label', generateProps( true, true ), 'Label'],
	];

	test.each( cases )( 'Case %# %s: (%p) => HTML', ( _, props, slot ) => {
		const options = { propsData: props, slots: {} };
		if ( slot.length > 0 ) {
			options.slots = { default: slot };
		}
		const wrapper = shallowMount( WvuiToggleSwitch, options );
		expect( wrapper.element ).toMatchSnapshot();
	} );
} );

describe( 'ToggleSwitch', () => {
	it( 'emits update:modelValue event with value when selected', async () => {
		const props = { modelValue: false, inputValue: 'toggle-switch-test' };
		const wrapper = shallowMount( WvuiToggleSwitch, { propsData: props } );
		const input = wrapper.find( 'input' ).element as HTMLInputElement;

		input.checked = true;
		await wrapper.find( 'input' ).trigger( 'change' );

		expect( wrapper.emitted( 'update:modelValue' ) ).toBeTruthy();
		expect( wrapper.emitted( 'update:modelValue' )?.[ 0 ] ).toEqual( [ true ] );
	} );

	it( 'is on when modelValue is true', async () => {
		const props = { modelValue: true, inputValue: 'toggle-switch-test' };
		const wrapper = shallowMount( WvuiToggleSwitch, { propsData: props } );
		const input = wrapper.find( 'input' ).element as HTMLInputElement;

		expect( input.checked ).toEqual( true );
	} );

	it( 'is off when modelValue is false', async () => {
		const props = { modelValue: false, inputValue: 'toggle-switch-test' };
		const wrapper = shallowMount( WvuiToggleSwitch, { propsData: props } );
		const input = wrapper.find( 'input' ).element as HTMLInputElement;

		expect( input.checked ).toEqual( false );
	} );

	it( 'focuses on the input on label click', async () => {
		const props = { modelValue: false, inputValue: 'toggle-switch-test' };
		const wrapper = shallowMount(
			WvuiToggleSwitch,
			{ propsData: props, slots: { default: 'Label' } }
		);
		const input = wrapper.find( 'input' ).element as HTMLInputElement;
		input.focus = jest.fn();

		await wrapper.find( 'label' ).trigger( 'click' );

		expect( input.focus ).toHaveBeenCalled();
	} );

	it( 'clicks the input on enter keydown', async () => {
		const props = { modelValue: false, inputValue: 'toggle-switch-test' };
		const wrapper = shallowMount( WvuiToggleSwitch, { propsData: props } );
		const input = wrapper.find( 'input' ).element as HTMLInputElement;
		input.click = jest.fn();

		await wrapper.find( 'input' ).trigger( 'keydown.enter' );

		expect( input.click ).toHaveBeenCalled();
	} );
} );
