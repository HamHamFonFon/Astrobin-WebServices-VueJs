<template>
  <!-- Navbar -->
  <LeftSidebar />

  <!-- App bar header -->
  <AppBar />

  <!-- Body -->
  <v-main class="main-container"
    v-touch="{
      left: () => (this.$store.commit('customizedTheme/setShowSideBar', false)),
      right: () => (this.$store.commit('customizedTheme/setShowSideBar', true))
    }"
  >
    <div class="d-none d-sm-block px-3">
      <PageTitle></PageTitle>
      <BreadCrumb></BreadCrumb>
    </div>

    <div class="flex-fill">
      <slot></slot>
    </div>
  </v-main>
</template>
<script>
import LeftSidebar  from '@/components/layout/LeftSidebar'
import AppBar from '@/components/layout/AppBar'
import PageTitle from "@/components/layout/PageTitle.vue";
import BreadCrumb from "@/components/layout/BreadCrumb.vue";

export default {
  name: 'PageLayout',
  components: {
    LeftSidebar,
    AppBar,
    PageTitle,
    BreadCrumb
  },
}
</script>

<style>
.main-container {
  background: #EEEEEE;
  display: flex;
  flex-direction: column;
}
</style>