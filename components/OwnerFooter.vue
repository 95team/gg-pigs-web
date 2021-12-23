<template>
  <footer>
    <div class="footer-area">
      <span>&copy; {{ new Date().getFullYear() }} Pigs95team, Inc. All rights reserved</span>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: var(--bg-primary);
}
.footer-area {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 1200px;
  height: 124px;
  margin: 0 auto;

  color: var(--color-primary);
  font-size: 0.875rem;
}
</style>
