<template>
  <div class="loading-mask flex-center-center">
    <svg
      viewBox="25 25 50 50"
      class="circular"
    >
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        class="path"
      />
      <circle
        cx="50"
        cy="50"
        r="15"
        fill="none"
        class="path"
      />
      <circle
        cx="50"
        cy="50"
        r="10"
        fill="none"
        class="path"
      />
    </svg>
  </div>
</template>

<style lang="less">
.flex-center-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  .circular {
    height: 35px;
    width: 35px;
    animation: loading-rotate 2s linear infinite;
    .path {
      animation: loading-dash 1.5s ease-in-out infinite;
      stroke-dasharray: 90, 150;
      stroke-dashoffset: 0;
      stroke-width: 2;
      stroke: #852acf;
      stroke-linecap: round;
      &:nth-of-type(2) {
        stroke-dasharray: 0, 90;
      }
      &:nth-of-type(3) {
        stroke-dasharray: 180, 270;
      }
    }
  }
}

@keyframes loading-rotate {
  100% {
    transform: rotate(1turn);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 230;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>
