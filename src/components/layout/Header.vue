<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="/">Astrobin VueJS</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/">Image of the day</router-link></b-nav-item>
          <b-nav-item><router-link to="/image">Image</router-link></b-nav-item>
          <b-nav-item>Images collection</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { BNavbar, BNavbarBrand, BCollapse, BNavbarNav } from "bootstrap-vue";

export default {
  name: "header",
  components: {
    BNavbar,
    BNavbarBrand,
    BCollapse,
    BNavbarNav
  }
}
</script>
