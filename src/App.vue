<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'EventList' }">Events</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
