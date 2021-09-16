<template>
	<span class="wvui-toggle-switch" :aria-disabled="disabled">
		<label
			v-if="hasSlot"
			:for="inputId"
			class="wvui-toggle-switch__label"
			:aria-disabled="disabled"
			@click="focusInput"
		>
			<!-- @slot Input label content -->
			<slot />
		</label>

		<input
			:id="inputId"
			ref="input"
			v-model="wrappedModel"
			class="wvui-toggle-switch__input"
			type="checkbox"
			:value="inputValue"
			:disabled="disabled"
			@keydown.prevent.enter="clickInput"
		>
		<span class="wvui-toggle-switch__switch">
			<span class="wvui-toggle-switch__switch__grip" />
		</span>
	</span>
</template>

<script lang="ts">
import { defineComponent, ref, toRef, computed } from 'vue';
import useModelWrapper, { modelValueProp } from '../../composables/useModelWrapper';
import useGeneratedId from '../../composables/useGeneratedId';

/**
 * A checkbox input styled to look like a sliding on/off switch.
 *
 * Current styles support a single toggle switch with or without a label. The
 * case for not including a label is if the label is added and connected with
 * the input via the `for` attribute elsewhere (like a future Field component).
 * If you're just using this component by itself, you should include a label.
 *
 * `v-model` value will be boolean.
 */
export default defineComponent( {
	name: 'WvuiToggleSwitch',
	props: {
		/**
		 * Value provided by v-model in a parent component.
		 *
		 * Rather than directly binding a value prop to this component, use
		 * v-model on this component in the parent component.
		 */
		modelValue: modelValueProp,
		/**
		 * HTML "value" attribute to assign to the input.
		 *
		 * Required for input groups.
		 */
		inputValue: {
			type: [ String, Number, Boolean ],
			default: false
		},
		/**
		 * Whether the disabled attribute should be added to the input.
		 */
		disabled: {
			type: Boolean
		}
	},
	emits: [
		'update:modelValue'
	],
	setup( props, { emit, slots } ) {
		// Declare template refs.
		const input = ref<HTMLInputElement | undefined>();

		/**
		 * When the label is clicked, focus on the input.
		 *
		 * This doesn't happen automatically in Firefox or Safari.
		 */
		const focusInput = (): void => {
			( input.value as HTMLInputElement ).focus();
		};

		/**
		 * On enter keydown, click the input to toggle its state.
		 */
		const clickInput = (): void => {
			( input.value as HTMLInputElement ).click();
		};

		// Take the modelValue provided by the parent component via v-model and
		// generate a wrapped model that we can use for the input element in
		// this component.
		const modelValueRef = toRef( props, 'modelValue' );
		// FIXME: emit param event has changed with the addition of the `emits`
		// option; figure out what to do about this error.
		const wrappedModel = useModelWrapper( modelValueRef, emit );

		const hasSlot = ( 'default' in slots );
		const { prefixId } = useGeneratedId( 'toggle-switch' );

		return {
			input,
			focusInput,
			clickInput,
			wrappedModel,
			hasSlot,
			prefixId
		};
	},
	computed: {
		inputId(): string {
			return this.prefixId( 'input' );
		}
	}
} );
</script>

<style lang="less">
@import ( reference ) '../../themes/wikimedia-ui.less';

.wvui-toggle-switch {
	display: inline-flex; /* stylelint-disable-line plugin/no-unsupported-browser-features */
	// <input> will be absolutely positioned relative to this element.
	position: relative;
	// Create a stacking context.
	z-index: 0;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;

	&__label {
		margin-right: @padding-right-toggle-switch-text;
	}

	&[ aria-disabled='true' ] {
		cursor: @cursor-base--disabled;

		.wvui-toggle-switch__label {
			color: @color-base--disabled;
		}
	}

	// The visible switch.
	&__switch {
		.force-gpu-composite-layer();
		background-color: @background-color-framed;
		display: inline-block;
		// Grip will be positioned absolutely relative to the switch.
		position: relative;
		box-sizing: border-box;
		// These sizes are relative so the toggle switch will scale with font
		// size (e.g. it's slightly larger on mobile).
		width: @size-toggle-switch-width;
		height: @size-toggle-switch-height;
		border: @border-input-binary;
		border-radius: @border-radius-toggle-switch;
		overflow: hidden;
		transition: background-color @transition-ease-medium, border-color @transition-ease-medium;

		// Focus outline.
		&:before {
			content: '';
			display: block;
			position: absolute;
			top: 1px;
			right: 1px;
			bottom: 1px;
			left: 1px;
			z-index: 1;
			border: @border-width-base @border-style-base transparent;
			border-radius: @border-radius-toggle-switch;
			transition: border-color @transition-ease-medium;
		}

		// The moving element of the switch.
		&__grip {
			position: absolute;
			// Position and size values differ on smaller screens but aren't
			// exactly scaled relative to font size, so we need separate values.
			top: @start-toggle-switch-grip--mobile;
			left: @start-toggle-switch-grip--mobile;
			box-sizing: border-box;
			width: @size-toggle-switch-grip--mobile;
			height: @size-toggle-switch-grip--mobile;
			border: @border-input-binary;
			border-radius: @border-radius-toggle-switch;
			transition: background-color @transition-ease-medium, left @transition-base, margin-left @transition-base;

			@media screen and ( min-width: @width-breakpoint-tablet ) {
				top: @start-toggle-switch-grip;
				left: @start-toggle-switch-grip;
				width: @size-base--small;
				height: @size-base--small;
			}
		}
	}

	// HTML <input> element.
	&__input {
		// The actual input is visually hidden.
		opacity: 0;
		position: absolute;
		right: 0;
		// Render "on top of" the span, so that it's still clickable.
		z-index: 2;
		width: @size-toggle-switch-width;
		height: @size-toggle-switch-height;
		margin: 0;
		font-size: inherit;
		cursor: pointer;

		// Checked styles that apply whether the input is enabled or disabled.
		&:checked {
			& + .wvui-toggle-switch__switch {
				// stylelint-disable-next-line max-nesting-depth
				.wvui-toggle-switch__switch__grip {
					background-color: @background-color-base;
					// TODO: Check in on the next 2 rules, which come from OOUI.
					// In OOUI this `left` value is `@travelDistance + 0.4em`.
					// And why the margin-left?
					left: 1.9em;
					margin-left: -2px;
					border-color: @background-color-base;
				}
			}
		}

		&:disabled {
			cursor: @cursor-base--disabled;

			& + .wvui-toggle-switch__switch {
				background-color: @background-color-filled--disabled;
				border-color: @background-color-filled--disabled;

				// stylelint-disable-next-line max-nesting-depth
				.wvui-toggle-switch__switch__grip {
					border: @border-filled--disabled;
					box-shadow: @box-shadow-filled--disabled;
				}
			}

			&:checked + .wvui-toggle-switch__switch {
				.wvui-toggle-switch__switch__grip {
					background-color: @background-color-framed;
				}
			}
		}

		&:enabled + .wvui-toggle-switch__switch {
			.wvui-toggle-switch__switch__grip {
				background-color: @background-color-framed;
			}
		}

		&:enabled:hover + .wvui-toggle-switch__switch {
			background-color: @background-color-framed--hover;
			border-color: @border-color-framed-progressive--hover;

			.wvui-toggle-switch__switch__grip {
				background-color: @background-color-framed--hover;
				border-color: @border-color-framed-progressive--hover;
			}
		}

		&:enabled:focus + .wvui-toggle-switch__switch {
			border-color: @border-color-primary;
			box-shadow: @box-shadow-base--focus;
			outline: 0;

			.oo-ui-toggleSwitchWidget-grip {
				border-color: @border-color-primary;
			}
		}

		&:enabled:active + .wvui-toggle-switch__switch {
			background-color: @background-color-input-binary--active;
			border-color: @border-color-input-binary--active;
			box-shadow: @box-shadow-input-binary--active;

			.wvui-toggle-switch__switch__grip {
				background-color: @background-color-base;
				border-color: @background-color-base;
				box-shadow: @box-shadow-input-binary;
			}
		}

		&:enabled:checked {
			& + .wvui-toggle-switch__switch {
				background-color: @background-color-input-binary--checked;
				border-color: @border-color-input-binary--checked;

				// stylelint-disable-next-line max-nesting-depth
				.wvui-toggle-switch__switch__grip {
					border-color: @background-color-base;
					box-shadow: @box-shadow-input-binary;
				}
			}

			&:hover + .wvui-toggle-switch__switch {
				background-color: @color-primary--hover;
				border-color: @border-color-framed-progressive--hover;
			}

			&:focus + .wvui-toggle-switch__switch {
				border-color: @border-color-input-binary--checked;

				&:before {
					border-color: @color-base--inverted;
				}
			}

			&:active + .wvui-toggle-switch__switch {
				background-color: @background-color-input-binary--active;
				border-color: @border-color-input-binary--active;

				&:before {
					border-color: @background-color-input-binary--active;
				}
			}
		}
	}
}
</style>
