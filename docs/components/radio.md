---
sidebarDepth: 3
---

# Radio

A binary input that always exists in a group, in which only one input can be
on at a time.

Typical use will involve using v-for to loop through an array of items and
output a Radio component for each one. Each Radio will have the same v-model
and name props, but different inputValue props and label content.

The v-model value is the inputValue of the Radio that is currently on.

<a href="https://github.com/annetee/wvui-next/edit/main/docs/src/components/radio/Radio.md" class="docgen-edit-link"></a>

<script setup>
import RadioGroup from '../../src/components/radio/examples/RadioGroup.vue';
import InlineRadios from '../../src/components/radio/examples/InlineRadios.vue';
</script>

## Demos

### Radio group

<Wrapper>
<template v-slot:demo>
<RadioGroup />
</template>

<template v-slot:code>

<<< @/../src/components/radio/examples/RadioGroup.vue

</template>
</Wrapper>

### Inline radios

<Wrapper>
<template v-slot:demo>
<InlineRadios />
</template>

<template v-slot:code>

<<< @/../src/components/radio/examples/InlineRadios.vue

</template>
</Wrapper>

## Usage

### Props

| Prop name  | Description                                                                                                                                                                                                                                                 | Type                    | Values | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------ | ------- |
| modelValue | Value provided by v-model in a parent component.<br><br>Rather than directly binding a value prop to this component, use<br>v-model to bind a string, number, or boolean value. This value<br>represents the value of the radio input that is currently on. | modelValueProp          | -      |         |
| inputValue | HTML "value" attribute to assign to the input.<br><br>Required for input groups.                                                                                                                                                                            | string\|number\|boolean | -      | false   |
| name       | HTML "name" attribute to assign to the input.<br><br>Required for input groups                                                                                                                                                                              | string                  | -      | ''      |
| disabled   | Whether the disabled attribute should be added to the input.                                                                                                                                                                                                | boolean                 | -      |         |
| inline     | Whether the component should display inline.<br><br>By default, `display: block` is set and a margin exists between<br>sibling components, for a stacked layout.                                                                                            | boolean                 | -      |         |

### Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |

### Slots

| Name    | Description         | Bindings |
| ------- | ------------------- | -------- |
| default | Input label content |          |
