<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useHotkey } from 'v-hotkey3'
import router from './router'

const navigate = (route) => {
  router.push(route)
}

useHotkey({
  'numpad1': () => {
    navigate('/1')
  },
  'numpad2': () => {
    navigate('/2')
  },
  'numpad3': () => {
    navigate('/3')
  },
  'numpad4': () => {
    navigate('/4')
  },
})
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Here you go" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/1">Page 1</RouterLink>
        <RouterLink to="/2">Page 2</RouterLink>
        <RouterLink to="/3">Page 3</RouterLink>
        <RouterLink to="/4">Page 4</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
