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