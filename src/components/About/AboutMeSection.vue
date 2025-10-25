
<script setup lang="ts">
import { ref } from 'vue';
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import SkillsSection from "./SkillsSection.vue";
import ExperinceSection from "./ExperinceSection.vue";
import EducationSection from "./EducationSection.vue";

const activeTab = ref("0");

const tabs = [
  { value: "0", label: "Skills", icon: "⚡", color: "emerald" },
  { value: "1", label: "Experience", icon: "💼", color: "blue" },
  { value: "2", label: "Education", icon: "🎓", color: "purple" }
];
</script>

<template>
  <div class="aboutme-section">
    <div class="section-container">
      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Explore my skills, experience, and educational background</p>
      </div>

      <!-- Modern Tabs -->
      <div class="tabs-wrapper">
        <Tabs v-model:value="activeTab" class="modern-tabs">
          <TabList class="modern-tablist">
            <Tab 
              v-for="tab in tabs" 
              :key="tab.value"
              :value="tab.value"
              class="modern-tab"
              :data-color="tab.color"
            >
              <span class="tab-icon">{{ tab.icon }}</span>
              <span class="tab-label">{{ tab.label }}</span>
              <span class="tab-indicator"></span>
            </Tab>
          </TabList>

          <TabPanels class="modern-tabpanels">
            <TabPanel value="0" class="modern-tabpanel">
              <div class="panel-content">
                <SkillsSection />
              </div>
            </TabPanel>
            <TabPanel value="1" class="modern-tabpanel">
              <div class="panel-content">
                <ExperinceSection />
              </div>
            </TabPanel>
            <TabPanel value="2" class="modern-tabpanel">
              <div class="panel-content">
                <EducationSection />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>

    <!-- Background Effects -->
    <div class="bg-gradient-1"></div>
    <div class="bg-gradient-2"></div>
    <div class="bg-gradient-3"></div>
  </div>
</template>

    