<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <title>One Piece Treasure</title>
  <main>
    <video id="video-background" muted autoplay loop>
      <source src="./assets/img/background.mp4" type="video/mp4">
    </video>
    <audio autoplay loop>
      <source src="./assets/audio/op.mp3" type="audio/mpeg">
    </audio>
  <RouterView />
  </main>
</template>

<style>
body {
  font-family: 'OnePieceFont'!important;
}
@font-face {
  font-family: 'OnePieceFont';
  src: url('./assets/fonts/OnePiece.woff');
  font-weight: bold;
  font-size: x-large;
}
#video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

#content {
  position: relative;
  z-index: 1;
}
</style>


