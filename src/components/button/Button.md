<script setup>
import WvuiButton from '../../src/components/button/Button.vue';
</script>

## Demos

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

### Destructive

<Wrapper>
<template v-slot:demo>
<WvuiButton action="destructive">Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton action="destructive">Click me</WvuiButton>
```

</template>
</Wrapper>

### Default, quiet

<Wrapper>
<template v-slot:demo>
<WvuiButton :quiet="true">Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton :quiet="true">Click me</WvuiButton>
```

</template>
</Wrapper>

### Progressive, quiet

<Wrapper>
<template v-slot:demo>
<WvuiButton action="progressive" :quiet="true">Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton action="progressive" :quiet="true">Click me</WvuiButton>
```

</template>
</Wrapper>

### Destructive, quiet

<Wrapper>
<template v-slot:demo>
<WvuiButton action="destructive" :quiet="true">Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton action="destructive" :quiet="true">Click me</WvuiButton>
```

</template>
</Wrapper>

### Disabled

<Wrapper>
<template v-slot:demo>
<WvuiButton disabled>Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton disabled>Click me</WvuiButton>
```

</template>
</Wrapper>

### Disabled, quiet

<Wrapper>
<template v-slot:demo>
<WvuiButton :quiet="true" disabled>Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton :quiet="true" disabled>Click me</WvuiButton>
```

</template>
</Wrapper>
