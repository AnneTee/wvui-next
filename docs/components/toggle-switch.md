---
sidebarDepth: 3
---

# ToggleSwitch

A checkbox input styled to look like a sliding on/off switch.

Current styles support a single toggle switch with or without a label. The
case for not including a label is if the label is added and connected with
the input via the `for` attribute elsewhere (like a future Field component).
If you're just using this component by itself, you should include a label.

`v-model` value will be boolean.

<a href="https://github.com/annetee/wvui-next/edit/main/docs/src/components/toggle-switch/ToggleSwitch.md" class="docgen-edit-link"></a>

<script setup>
import { ref } from 'vue';
import WvuiToggleSwitch from '../../src/components/toggle-switch/ToggleSwitch.vue';
import SingleSwitch from '../../src/components/toggle-switch/examples/SingleSwitch.vue';
import SingleSwitchWithLabel from '../../src/components/toggle-switch/examples/SingleSwitchWithLabel.vue';

const disabledOffValue = ref( false );
const disabledOnValue = ref( true );
</script>

## Demos

### Default

<Wrapper>
<template v-slot:demo>
<SingleSwitch />
</template>

<template v-slot:code>

<<< @/../src/components/toggle-switch/examples/SingleSwitch.vue

</template>
</Wrapper>

### With label

<Wrapper>
<template v-slot:demo>
<SingleSwitchWithLabel />
</template>

<template v-slot:code>

<<< @/../src/components/toggle-switch/examples/SingleSwitchWithLabel.vue

</template>
</Wrapper>

### Disabled, off

<Wrapper>
<template v-slot:demo>
<wvui-toggle-switch
	v-model="disabledOffValue"
	name="disabled-off-switch"
	input-value="disabled-off-switch"
	:disabled="true"
/>
</template>

<template v-slot:code>

```vue
<wvui-toggle-switch
  v-model="disabledOffValue"
  name="disabled-off-switch"
  input-value="disabled-off-switch"
  :disabled="true"
/>
```

</template>
</Wrapper>

### Disabled, on

<Wrapper>
<template v-slot:demo>
<wvui-toggle-switch
	v-model="disabledOnValue"
	name="disabled-on-switch"
	input-value="disabled-on-switch"
	:disabled="true"
/>
</template>

<template v-slot:code>

```vue
<wvui-toggle-switch
  v-model="disabledOnValue"
  name="disabled-on-switch"
  input-value="disabled-on-switch"
  :disabled="true"
/>
```

</template>
</Wrapper>

### Disabled, with label

<Wrapper>
<template v-slot:demo>
<wvui-toggle-switch
	v-model="disabledOffValue"
	name="disabled-with-label"
	input-value="disabled-with-label"
	:disabled="true"
>
	This switch is disabled
</wvui-toggle-switch>
</template>

<template v-slot:code>

```vue
<wvui-toggle-switch
  v-model="disabledOffValue"
  name="disabled-with-label"
  input-value="disabled-with-label"
  :disabled="true"
>
	This switch is disabled
</wvui-toggle-switch>
```

</template>
</Wrapper>

## Usage

### Props

| Prop name  | Description                                                                                                                                                                    | Type                    | Values | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------ | ------- |
| modelValue | Value provided by v-model in a parent component.<br><br>Rather than directly binding a value prop to this component, use<br>v-model on this component in the parent component. | modelValueProp          | -      |         |
| inputValue | HTML "value" attribute to assign to the input.<br><br>Required for input groups.                                                                                               | string\|number\|boolean | -      | false   |
| disabled   | Whether the disabled attribute should be added to the input.                                                                                                                   | boolean                 | -      |         |

### Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |

### Slots

| Name    | Description         | Bindings |
| ------- | ------------------- | -------- |
| default | Input label content |          |
