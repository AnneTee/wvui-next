<template>
	<table class="vp-tokens-table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Value</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="( token, key ) in flattenedTokens" :key="key">
				<td class="vp-tokens-table__name">
					<strong>{{ token.name }}</strong>
					<copy-text-button :copy-text="token.name" />
				</td>
				<td>
					<pre>{{ token.value }}</pre>
					<component
						:is="tokenDemo"
						v-if="hasTokenDemo"
						:token-value="token.value"
						:css-property="cssProperty"
					/>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue';
import BorderDemo from './BorderDemo.vue';
import ColorDemo from './ColorDemo.vue';
import CopyTextButton from './CopyTextButton.vue';

export default defineComponent( {
	name: 'TokensTable',
	components: {
		BorderDemo,
		ColorDemo,
		CopyTextButton
	},
	props: {
		/**
		 * The tokens to be displayed, one per table row.
		 */
		tokens: {
			type: Object,
			required: true
		},
		/**
		 * Token name prefix, e.g. "color-base" or "border". The rest of the
		 * token name will be appended for display.
		 *
		 * This is a temporary workaround for demo purposes; a more robust
		 * solution is needed to properly assign token names based on json
		 * structure.
		 */
		tokenPrefix: {
			type: String,
			required: true
		},
		/**
		 * Name of the Vue component used to demonstrate the value of each token.
		 */
		tokenDemo: {
			type: String,
			default: ''
		},
		cssProperty: {
			type: String,
			default: ''
		}
	},
	setup( props ) {
		const { tokens, tokenDemo, tokenPrefix } = toRefs( props );

		const hasTokenDemo = computed( () => {
			return !!tokenDemo.value;
		} );
		const getTokenName = ( tokenKey: string ): string => tokenPrefix.value + '-' + tokenKey;

		/**
		 * Inspired by something from WiKit; needs more work.
		 *
		 * @param {Object} nestedTokens
		 * @return {Array}
		 */
		const flattenTokenTree = ( nestedTokens ) => {
			return Object.keys( nestedTokens ).reduce( ( tokens, tokenKey ) => {
				if ( 'value' in nestedTokens[ tokenKey ] ) {
					return tokens.concat( {
						name: tokenPrefix.value + '-' + tokenKey,
						value: nestedTokens[ tokenKey ].value
					} );
				}

				return flattenTokenTree( nestedTokens[ tokenKey ] );
			}, [] );
		};
		const flattenedTokens = flattenTokenTree( tokens.value );

		return {
			hasTokenDemo,
			getTokenName,
			flattenedTokens
		};
	}
} );
</script>

<style lang="less">
@import ( reference ) '../../../src/themes/wikimedia-ui.less';

.vp-tokens-table {
	// Undo VitePress style.
	display: table;

	// Undo GitHub-table-style alternate row striping.
	tr:nth-child(2n) {
		background-color: @background-color-base;
	}

	&__name {
		position: relative;

		@media screen and ( min-width: @width-breakpoint-tablet ) {
			min-width: 200px;
		}

		.vp-copy-text-button {
			position: absolute;
			right: 0;
			bottom: 0;
			font-size: 0.8em;
		}
	}
}

</style>
