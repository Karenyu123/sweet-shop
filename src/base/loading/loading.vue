<template>
  <div class="loader loader-1">
    <div class="loader-outter"></div>
    <div class="loader-inner"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.loader-1 .loader-outter {
  position: absolute;
  border: 4px solid #FF8198;
  border-left-color: transparent;
  border-bottom: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  -webkit-animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
  animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
}
.loader-1 .loader-inner {
  position: absolute;
  border: 4px solid #FF8198;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  border-right: 0;
  border-top-color: transparent;
  -webkit-animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
  animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
}
@keyframes loader-1-outter {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loader-1-inner {
  0% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(225deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
</style>