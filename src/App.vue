<template>
  <div id="app">
    <div class="loader" v-if="loading">
      <img
        class="
          animate__animated animate__bounce animate__slower animate__infinite
          infinite
        "
        src="@/assets/logo-name.png"
        alt=""
        width="90px"
      />
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods:{
        callFunction: function () {
            var _self = this;
            setTimeout(function () {
                _self.loading = false;
            }, 5000);
        }
    },
    mounted () {
      this.callFunction()
    }
};
</script>

<style>
.loader {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
