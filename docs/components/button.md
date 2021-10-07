---
sidebarDepth: 3
---

# Button

A button wrapping slotted content.

<a href="https://github.com/annetee/wvui-next/edit/main/docs/src/components/button/Button.md" class="docgen-edit-link"></a>

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
	}
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

## Usage

### Props

| Prop name | Description                                            | Type         | Values | Default              |
| --------- | ------------------------------------------------------ | ------------ | ------ | -------------------- |
| action    |                                                        | ButtonAction | -      | ButtonAction.Default |
| type      | Button type. See ButtonType for what each value means. | ButtonType   | -      | ButtonType.Normal    |

### Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| click      |            |

### Slots

| Name    | Description    | Bindings |
| ------- | -------------- | -------- |
| default | Button content |          |
