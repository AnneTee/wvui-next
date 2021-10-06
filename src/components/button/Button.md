<script setup>
import WvuiButton from '../../src/components/button/Button.vue';

const propsConfig = {
	action: {
		type: 'radio',
		options: [ 'default', 'progressive', 'destructive' ],
		default: 'default'
	},
	type: {
		type: 'radio',
		options: [ 'normal', 'primary', 'quiet' ],
		default: 'normal'
	},
};

const slotsConfig = {
	default: {
		default: 'Click me'
	}
};
</script>

## Demos

### Configurable

<Wrapper :props-config="propsConfig" :slots-config="slotsConfig">
<template v-slot:demo="{ propsValues, slotsValues }">
<WvuiButton v-bind="propsValues">{{ slotsValues.default }}</WvuiButton>
</template>
</Wrapper>

### Default

<Wrapper>
<template v-slot:demo>
<WvuiButton>Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton>Click me</WvuiButton>
```

</template>
</Wrapper>

### Progressive

<Wrapper>
<template v-slot:demo>
<WvuiButton action="progressive">Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton action="progressive">Click me</WvuiButton>
```

</template>
</Wrapper>

### Progressive, primary

<Wrapper>
<template v-slot:demo>
<WvuiButton action="destructive" type="primary">Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton action="destructive" type="primary">Click me</WvuiButton>
```

</template>
</Wrapper>

### Progressive, primary, disabled

<Wrapper>
<template v-slot:demo>
<WvuiButton action="progressive" type="primary" disabled>Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton action="progressive" type="primary" disabled>Click me</WvuiButton>
```

</template>
</Wrapper>
