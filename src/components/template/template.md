---
sidebarDepth: 3
---

<script setup>
// Import components here.
import WvuiButton from '../src/components/button/Button.vue';
import DemoComponent from '../src/components/template/examples/DemoComponent.vue';
</script>

**Don't forget to add your component to `docs/.vitepress/config.js`!**

# Component name

Component description

## Demos

### First Demo

The Wrapper component offers some basic styles to visually separate the demo
from the rest of the content. **Note that the whitespace around code snippets
is critical; don't omit it.**

You can add a WVUI component directly:

<Wrapper>
<template v-slot:demo>
<WvuiButton :someProp="true">Button</WvuiButton>
</template>
<template v-slot:code>

```vue
<WvuiButton :someProp="true">Button</WvuiButton>
```

</template>
</Wrapper>

Or you can add a demo component and import it as a snippet to show the code:

<Wrapper>
<template v-slot:demo>
<DemoComponent />
</template>

<template v-slot:code>

<<< @/components/template/DemoComponent.vue

</template>
</Wrapper>

### Second Demo

...would go here

## Usage

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| **propName** | Prop description | `PropType` | `defaultValue` |

### Slots

| Name | Description | Default |
| --- | --- | --- |
| **default** | Slot description | Default value (or leave blank) |

### Events

| Name | Description | Value |
| --- | --- | --- |
| **eventName** | Event description | Emitted value (or leave blank) |
