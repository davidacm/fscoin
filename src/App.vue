<template>
  <div id="app" class="container">
    <div class="navbar-brand">
      <div class="navbar-item">
        <img src="./assets/logo.png" />
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-12 is-parent">
          <div class="tile is-child box" v-if="deferredPrompt">
            <button class="button is-fullwidth" @click="install">
              Instalar app
            </button>
          </div>
          <div class="tile is-child box">
            <button class="button is-fullwidth is-success" @click="coinEvent()">Coin</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bulma/css/bulma.min.css";
import { beepChoose } from "./utils"

export default {
  name: "App",
  data() {
    return {
      deferredPrompt: null,
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    coinEvent() {
      beepChoose();
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>