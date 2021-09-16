// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`matches the snapshot Case 0 Default: ({"disabled": undefined, "inputValue": "toggle-switch-test", "modelValue": true}) => HTML 1`] = `
<span
  class="wvui-toggle-switch"
>
  <!--v-if-->
  <input
    class="wvui-toggle-switch__input"
    id="wvui-toggle-switch-0-input"
    type="checkbox"
    value="toggle-switch-test"
  />
  <span
    class="wvui-toggle-switch__switch"
  >
    <span
      class="wvui-toggle-switch__switch__grip"
    />
  </span>
</span>
`;

exports[`matches the snapshot Case 1 With label: ({"disabled": undefined, "inputValue": "toggle-switch-test", "modelValue": true}) => HTML 1`] = `
<span
  class="wvui-toggle-switch"
>
  <label
    class="wvui-toggle-switch__label"
    for="wvui-toggle-switch-1-input"
  >
    <!-- @slot Input label content -->
    
    Label
    
  </label>
  <input
    class="wvui-toggle-switch__input"
    id="wvui-toggle-switch-1-input"
    type="checkbox"
    value="toggle-switch-test"
  />
  <span
    class="wvui-toggle-switch__switch"
  >
    <span
      class="wvui-toggle-switch__switch__grip"
    />
  </span>
</span>
`;

exports[`matches the snapshot Case 2 Disabled: ({"disabled": true, "inputValue": "toggle-switch-test", "modelValue": true}) => HTML 1`] = `
<span
  aria-disabled="true"
  class="wvui-toggle-switch"
>
  <!--v-if-->
  <input
    class="wvui-toggle-switch__input"
    disabled=""
    id="wvui-toggle-switch-2-input"
    type="checkbox"
    value="toggle-switch-test"
  />
  <span
    class="wvui-toggle-switch__switch"
  >
    <span
      class="wvui-toggle-switch__switch__grip"
    />
  </span>
</span>
`;

exports[`matches the snapshot Case 3 Disabled with label: ({"disabled": true, "inputValue": "toggle-switch-test", "modelValue": true}) => HTML 1`] = `
<span
  aria-disabled="true"
  class="wvui-toggle-switch"
>
  <label
    aria-disabled="true"
    class="wvui-toggle-switch__label"
    for="wvui-toggle-switch-3-input"
  >
    <!-- @slot Input label content -->
    
    Label
    
  </label>
  <input
    class="wvui-toggle-switch__input"
    disabled=""
    id="wvui-toggle-switch-3-input"
    type="checkbox"
    value="toggle-switch-test"
  />
  <span
    class="wvui-toggle-switch__switch"
  >
    <span
      class="wvui-toggle-switch__switch__grip"
    />
  </span>
</span>
`;
