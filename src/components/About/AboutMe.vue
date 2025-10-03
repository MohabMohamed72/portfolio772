<script setup lang="ts">
import SpeedDial from "primevue/speeddial";
import { ref } from "vue";
// import { useToast } from "primevue/usetoast";
// import { useRouter } from "vue-router";
// import EducationDialog from "./Dialogs/EducationDialog.vue";

// const toast = useToast();
// const router = useRouter();
const visible = ref(false);

const items = ref([
  {
    label: "Education",
    icon: "pi pi-graduation-cap",
    command: () => {
      visible.value = true;
    },
  },
  {
    label: "Experince",
    icon: "pi pi-id-card",
  },
  {
    label: "Skills",
    icon: "pi pi-list",
  },
]);
</script>
<template>
  <div class="aboutme container">
    <h2 class="title">
      I am always eager to learn and stay updated with the latest <br />
      trends in front-end development.
    </h2>

    <div class="categories">
      <SpeedDial
        :showIcon="`pi pi-address-book`"
        :model="items"
        :radius="80"
        type="semi-circle"
        direction="up"
        style="position: absolute; left: calc(50% - 2rem); top: 50%"
      />
    </div>
  </div>
  <!-- <div>
    <Dialog
      v-model:visible="visible"
      modal
      :dismissable-mask="true"
      header="Education"
      :style="{ width: '25rem' }"
    >
      <div class="education">aaaaaaaaa</div>
    </Dialog>
  </div> -->
</template>