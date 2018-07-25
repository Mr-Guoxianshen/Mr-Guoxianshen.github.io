<template>
  <div class="home tans">
    <div class="imgBox">
      <img src="../assets/images/timg.jpg" alt="">

      <span @click="open">立即开启</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {
    open () {
      this.$router.push('/bird')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    /*  */
  }
  .imgBox {
    height: 100%;
    position: fixed;
  }
  .imgBox img {
    width: 100%;
    height: 100%;
    display: block;
  }
  span {
    position: absolute;
    display: block;
    padding: .1rem .2rem;
    top: 85%;
    left: 50%;
    border-radius: .05rem;
    transform: translateX(-50%);
    background-color: #FF6200;
    color: #fff;
  }
  span:active {
    box-shadow: 0 0.01rem 0.05rem 0.01rem rgba(130,130,130,.5);
  }
</style>
