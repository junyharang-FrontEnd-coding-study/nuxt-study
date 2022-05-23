<template>
  <div>
    <header>
        <h1>{{ $route.name }}Page</h1>

        <NuxtLink to="/">Home page</NuxtLink>
        <NuxtLink to="/main">Main page</NuxtLink>
        <NuxtLink to="/product">Product page</NuxtLink>
    </header>

    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>