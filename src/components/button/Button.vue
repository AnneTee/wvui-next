<template>
	<!-- @NOTE: Click event handler has TypeSCript error: Type
	((event: Event) => any) & ((event: Event) => void)' is not assignable to type
	'MouseEventHandler<HTMLButtonElement> | undefined'.-->
	<button
		class="wvui-button"
		:class="rootClasses"
		@click="onClick"
	>
		<slot />
	</button>
</template>

<!-- eslint-disable-next-line vue/no-unsupported-features -->
<script setup lang="ts">
// @STANDARD: import stuff from Vue first.
import { reactive } from 'vue';
import { PrimaryAction } from '../../actions/PrimaryAction';

// @STANDARD: component doc block.
/**
 * A button wrapping slotted content.
 */

// @STANDARD: First props, then emits
interface Props {
	// See PrimaryAction.
	action?: PrimaryAction,
	// True if button should be less visually prominent.
	quiet?: boolean
}

const props = withDefaults( defineProps<Props>(), {
	// See PrimaryAction.
	action: PrimaryAction.Default,
	// @NOTE: current eslint config doesn't like this, but a default seems to be required.
	// True if button should be less visually prominent.
	quiet: false
} );

// @NOTE: eslint is mad about spacing here.
const emit = defineEmits<{
	( e: 'click', event: Event ): void
}>();

// @STANDARD: Grab props or context if needed. This way, it's easier to add more props
// or grab more items from context in the future.
const { action, quiet } = props;

// @STANDARD: From here, group stuff by purpose/function. Comments are helpful
// for anything nonstandard (standard stuff includes rootClasses and simple
// methods whose names explain what they do sufficiently enough).
const rootClasses = reactive( {
	'wvui-button--default': action === PrimaryAction.Default,
	'wvui-button--progressive': action === PrimaryAction.Progressive,
	'wvui-button--destructive': action === PrimaryAction.Destructive,
	'wvui-button--framed': !quiet,
	'wvui-button--quiet': quiet
} );

function onClick( event: Event ): void {
	emit( 'click', event );
}
</script>

<style lang="less">
@import ( reference ) '../../themes/wikimedia-ui.less';

.wvui-button {
	box-sizing: border-box;
	// Interactive elements have a minimum touch area.
	min-width: @min-size-base;
	min-height: @min-size-base;
	max-width: @max-width-button;
	border-width: @border-width-base;
	border-style: @border-style-base;
	border-radius: @border-radius-base;
	// Support Firefox, Safari: Normalize by removing the `margin`.
	margin: 0;
	padding-left: @padding-horizontal-base;
	padding-right: @padding-horizontal-base;
	// Support all browsers: Normalize by inheriting `font-family`.
	// Initial value depends on user-agent.
	font-family: inherit;
	// Support all browsers: Normalize by inheriting `font-size` over initial value of `none`.
	font-size: inherit;
	font-weight: bold;
	// Support Edge, Firefox, and IE: Normalize by removing the inheritance of `text-transform`.
	text-transform: none;
	// Contents are single line.
	white-space: nowrap;
	// Support IE 11: Normalize by showing `overflow`.
	overflow: visible;
	transition: border-color @transition-base, background-color @transition-base, color @transition-base, box-shadow @transition-base;

	// Support Firefox: Normalize by hiding the inner focus `border` and `padding`.
	&::-moz-focus-inner {
		border: 0;
		padding: 0;
	}

	&:focus {
		// Hide the standard focus outline. A border and box-shadow representation is added below.
		outline: 0;
	}

	&:not( [ disabled ] ) {
		color: @color-base;
		// Use hand cursor. This is nonstandard for a button but allows for a visible
		// interactivity distinction from the disabled state.
		cursor: pointer;

		&:focus {
			box-shadow: @box-shadow-base--focus;
			border-color: @color-primary--focus;
			// In Windows high contrast mode the outline becomes visible.
			outline: @outline-base--focus;
		}

		&:active {
			background-color: @background-color-framed--active;
			color: @color-base--emphasized;
			box-shadow: none;
		}
	}

	&[ disabled ] {
		border-color: transparent;
	}
}

// Normal “framed” buttons.
.wvui-button--framed {
	&:not( [ disabled ] ) {
		background-color: @background-color-framed;
		border-color: @border-color-base;

		&:hover {
			background-color: @background-color-framed--hover;
			color: @color-base--hover;
		}

		&:active {
			background-color: @background-color-framed--active;
			color: @color-base--active;
			border-color: @border-color-base--active;
		}
	}

	// Progressive normal buttons.
	&.wvui-button--progressive:not( [ disabled ] ) {
		color: @color-primary;

		&:hover {
			color: @color-primary--hover;
			border-color: @border-color-primary--hover;
		}

		&:focus {
			color: @color-primary--focus;
			border-color: @border-color-primary--focus;
			box-shadow: @box-shadow-primary--focus;
		}

		&:active {
			background-color: lighten( @color-primary--active, 60% );
			color: @color-primary--active;
			border-color: @border-color-primary--active;
			// Reset `:focus` box shadow to amplify 'interaction' feeling when pressed.
			box-shadow: none;
		}
	}

	// Destructive normal buttons.
	&.wvui-button--destructive:not( [ disabled ] ) {
		color: @color-destructive;

		&:hover {
			color: @color-destructive--hover;
			border-color: @border-color-destructive--hover;
		}

		&:focus {
			color: @color-destructive--focus;
			border-color: @border-color-destructive--focus;
			box-shadow: @box-shadow-destructive--focus;
		}

		&:active {
			background-color: lighten( @color-destructive--active, 60% );
			color: @color-destructive--active;
			border-color: @border-color-destructive--active;
			// Reset `:focus` box shadow to amplify 'interaction' feeling when pressed.
			box-shadow: none;
		}
	}

	&[ disabled ] {
		background-color: @background-color-filled--disabled;
		color: @color-filled--disabled;
	}
}

// Quiet buttons.
.wvui-button--quiet {
	background-color: transparent;
	color: @color-base;
	border-color: transparent;

	&:not( [ disabled ] ) {
		&:hover {
			background-color: @background-color-quiet--hover;
			color: @color-quiet--hover;
		}

		&:focus {
			border-color: @border-color-primary--focus;
			box-shadow: @box-shadow-primary--focus;
		}

		&:active {
			background-color: @background-color-quiet--active;
			border-color: @border-color-base--active;
			box-shadow: none;
		}
	}

	// Progressive quiet buttons.
	&.wvui-button--progressive:not( [ disabled ] ) {
		color: @color-primary;

		&:hover {
			color: @color-primary--hover;
		}

		&:focus {
			color: @color-primary--focus;
			border-color: @border-color-primary--focus;
			box-shadow: @box-shadow-primary--focus;
		}

		&:active {
			color: @color-primary--active;
			box-shadow: none;
		}
	}

	// Destructive quiet buttons.
	&.wvui-button--destructive:not( [ disabled ] ) {
		color: @color-destructive;

		&:hover {
			color: @color-destructive--hover;
		}

		&:focus {
			color: @color-destructive--focus;
			border-color: @border-color-destructive--focus;
			box-shadow: @box-shadow-destructive--focus;
		}

		&:active {
			color: @color-destructive--active;
			box-shadow: none;
		}
	}

	&[ disabled ] {
		color: @color-base--disabled;
	}
}
</style>
