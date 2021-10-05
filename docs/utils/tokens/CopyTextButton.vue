<template>
	<wvui-button
		class="vp-copy-text-button"
		action="progressive"
		:quiet="true"
		@click="handleCopyText"
	>
		{{ buttonText }}
	</wvui-button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import WvuiButton from './../../../src/components/button/Button.vue';

export default defineComponent( {
	name: 'WvuiCopytext',
	components: {
		WvuiButton
	},
	props: {
		/**
		 * The text to be copied.
		 */
		copyText: {
			type: String,
			required: true
		},

		buttonText: {
			type: String,
			default: 'Copy'
		}
	},
	setup( props, { emit } ) {
		const { copyText } = toRefs( props );

		const handleCopyText = () => {
			const textarea = document.createElement( 'textarea' ),
				range = document.createRange();

			// Set the value of the textarea to our copytext.
			textarea.textContent = copyText.value;

			// Earlier iOS versions need contenteditable to be true.
			textarea.contentEditable = 'true';

			// Make sure the textarea isn't editable.
			textarea.readOnly = true;

			// Make the textarea invisible and add to the DOM.
			textarea.style.position = 'absolute';
			textarea.style.left = '-9999px';
			document.body.appendChild( textarea );

			// Use a range and a selection to grab the contents of the textarea.
			// In most modern browsers we could just do textarea.select(), but
			// iOS versions below 14 don't implement this.
			range.selectNodeContents( textarea );
			const selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange( range );
			// Set this to a huge number to make sure we're getting the entire
			// selection.
			textarea.setSelectionRange( 0, copyText.value.length );

			// Set contenteditable to false just to be safe.
			textarea.contentEditable = 'false';

			// Try to copy the text.
			let copied = true;
			try {
				copied = document.execCommand( 'copy' );
			} catch ( e ) {
				copied = false;
			}

			// TODO: error show or success message

			// Remove the textarea element.
			document.body.removeChild( textarea );
		};

		return {
			handleCopyText
		};
	}
} );
</script>

<style lang="less">
@import ( reference ) '../../../src/themes/wikimedia-ui.less';

.vp-copy-text-button {

}
</style>
