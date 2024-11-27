<script setup>
import { ref } from "vue";
import { VegaDropdown, VegaButtonCircle } from "@heartlandone/vega-vue";

const source = ref([
  {
    key: "opt0",
    label: "Share",
    children: [
      {
        key: "opt0-0",
        label: "Facebook",
        prefixIcon: "fab fa-facebook",
      },
      {
        key: "opt0-1",
        label: "Twitter",
        prefixIcon: "fab fa-twitter",
      },
      {
        key: "opt0-2",
        label: "Instagram",
        prefixIcon: "fab fa-instagram",
      },
    ],
  },
  {
    key: "opt1",
    label: "Settings",
    prefixIcon: "far fa-gear",
  },
  {
    key: "opt2",
    label: "Profile",
    disabled: true,
    prefixIcon: "far fa-user",
  },
  {
    key: "opt3",
    label: "Notifications",
    prefixIcon: "far fa-bell",
    count: 4,
  },
  {
    key: "opt4",
    label: "Sign Out",
    prefixIcon: "far fa-sign-out",
  },
]);
</script>

<template>
  <div class="container">
    <b>fas fa-ellipsis-vertical</b>
    <VegaDropdown :source="source">
      <VegaButtonCircle variant="secondary" icon="fas fa-ellipsis-vertical" />
    </VegaDropdown>
    <br />
    <b>vertical-menu</b>
    <VegaDropdown :source="source">
      <VegaButtonCircle variant="secondary" icon="vertical-menu" />
    </VegaDropdown>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
