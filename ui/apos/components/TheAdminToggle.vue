<template>
  <span class="ta-button" @click="toggle">
    <span>+</span>
  </span>
</template>

<script>
export default {
  name: 'AdminToggle',
  methods: {
    toggle(event) {
      const adminBar = document.querySelector('.apos-admin-bar-wrapper');
      adminBar.style.display = adminBar.style.display === 'none' ? 'block' : 'none';
    }
  }
}
</script>
<style>
.ta-button {
  position: fixed;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  font-size: 2.5em;
  line-height: 40px;
  background-color: #0c9;
  color: #fff;
  border-radius: 50px;
  text-align:center;
	box-shadow: 2px 2px 3px #999;
}

.apos-admin-bar-wrapper {
  z-index: 2000 !important;
}

</style>