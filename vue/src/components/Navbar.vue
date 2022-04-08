<template>
  <div class="hello">
    <router-link to="/">Home</router-link>                       |
    <router-link to="/our-customers">Our Customers</router-link> |
    <router-link to="/our-services">Our Services</router-link>   |
    <router-link to="/about-us">About Us</router-link>           
  </div>
  <router-view />
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navbar',
    props: {
      msg: String
    }
  }
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
