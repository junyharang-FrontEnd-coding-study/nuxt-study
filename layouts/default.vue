<template>
  <div>
    <header class="title">
        <NuxtLink class="logo" to="/">주니하랑의 Nuxt.js 여행기 Shopping Mall</NuxtLink>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Header 관련 Style */
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
