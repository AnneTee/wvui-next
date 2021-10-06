<template>
	<div
		class="wvui-input"
	>
		<input
			ref="input"
			dir="auto"
			class="wvui-input__input"
			v-bind="$attrs"
			:disabled="disabled"
			:type="type"
			:value="computedValue"
			@input="onInput"
			@change="onChange"
			@focus="onFocus"
			@blur="onBlur"
		>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRef, computed } from 'vue';
import { InputType, isInputType } from './InputType';

export default defineComponent( {
	name: 'WvuiInput',
	/**
	 * All attributes set on the components such as disabled and type are passed to the underlying
	 * input.
	 */
	inheritAttrs: false,
	props: {
		value: {
			type: [ String, Number ],
			default: ''
		},
		type: {
			type: String as PropType<InputType>,
			default: InputType.Text,
			// use arrow function for type inference of property
			validator: ( value ) => isInputType( value )
		},
		disabled: {
			type: Boolean
		}
	},
	setup( props, { emit } ) {
		const valueProp = toRef( props, 'value' );
		const newValue = ref< string | number >( valueProp.value as string | number );

		const computedValue = computed( {
			get(): string | number {
				return newValue.value;
			},
			set( value: string | number ) {
				newValue.value = value;
				emit( 'input', value );
			}
		} );

		const setCurrentValue = ( value: string | number ): void => {
			computedValue.value = value;
		};
		const onInput = ( event: InputEvent ): void => {
			const target = event.target as HTMLInputElement;
			const { value } = target;

			setCurrentValue( value );
		};
		const onChange = ( event: Event ): void => {
			emit( 'change', event );
		};
		const onFocus = ( event: FocusEvent ): void => {
			emit( 'focus', event );
		};
		const onBlur = ( event: FocusEvent ): void => {
			emit( 'blur', event );
		};

		return {
			newValue,
			computedValue,
			onInput,
			onChange,
			onFocus,
			onBlur
		};
	},

	watch: {
		// Update input value on v-model change
		value( value: string | number ): void {
			this.newValue = value;
		}
	}
} );
</script>

<style lang="less">
@import ( reference ) '../../themes/wikimedia-ui.less';

.wvui-input {
	position: relative; // For proper positioning of icons and slotted elements
	box-sizing: border-box;

	&__input {
		display: block;
		box-sizing: border-box;
		width: @size-full;
		height: @size-base;
		margin: 0;
		border-width: @border-width-base;
		border-style: @border-style-base;
		border-radius: @border-radius-base;
		padding: @padding-input-text;
		font-family: inherit;
		font-size: inherit;
		line-height: @line-height-component;

		&:not( [ disabled ] ) {
			background-color: @background-color-base;
			color: @color-base--emphasized;
			border-color: @border-color-base;
			box-shadow: @box-shadow-base;
			transition-property: border-color, box-shadow;
			transition-duration: @transition-duration-medium;

			&:hover {
				border-color: @border-color-input--hover;
			}

			&:focus {
				border-color: @border-color-base--focus;
				box-shadow: @box-shadow-base--focus;
				outline: 0;
			}

			&:focus ~ .wvui-input__start-icon,
			&:focus ~ .wvui-input__end-icon {
				opacity: 1;
			}
		}

		&[ disabled ] {
			background-color: @background-color-base--disabled;
			color: @color-placeholder;
			-webkit-text-fill-color: @color-placeholder;
			border-color: @border-color-base--disabled;
			text-shadow: @text-shadow-base--disabled;

			// stylelint-disable max-nesting-depth, no-descending-specificity
			& ~ .wvui-input__start-icon,
			& ~ .wvui-input__end-icon {
				opacity: @opacity-base--disabled;
				pointer-events: none;
			}
			// stylelint-enable, max-nesting-depth, no-descending-specificity
		}

		&::placeholder {
			color: @color-placeholder;
			opacity: 1;
		}

		// Support IE 10-11, and Edge 12+: Hide proprietary pseudo-element.
		// See https://developer.mozilla.org/en-US/docs/Web/CSS/::-ms-clear
		&::-ms-clear {
			display: none;
		}

		&[ type='search' ] {
			// Support Safari/iOS: Normalize by applying `none`,
			// Chrome would accept `textfield` as well.
			/* stylelint-disable plugin/no-unsupported-browser-features */
			/* autoprefixer: ignore next */
			-webkit-appearance: none;
			// Support Firefox.
			/* autoprefixer: ignore next */
			-moz-appearance: textfield;
			/* stylelint-enable plugin/no-unsupported-browser-features */

			// Support: Safari, Chrome (Blink).

			// stylelint-disable-next-line max-nesting-depth
			&::-webkit-search-decoration,
			&::-webkit-search-cancel-button {
				display: none;
			}
		}
	}
}
</style>
