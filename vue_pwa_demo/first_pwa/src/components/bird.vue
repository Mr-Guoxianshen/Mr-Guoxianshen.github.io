<template>
  <div class="bird" id="bird">
    <canvas id="cvs" width="800" height="600" style="border: 1px solid black;"></canvas>
  </div>
</template>

<script>
import Main from './js/main';
export default {
  name: 'home',
  data () {
    return {

    }
  },
  mounted(){
    var cvs = document.getElementById('cvs');
    var ctx = cvs.getContext('2d');

    // 加载图片
    var imgs = ['birds.png', 'land.png', 'pipe1.png', 'pipe2.png', 'sky.png'];

    var imgObjects = [];


    var loadCount = 0;

    function listener() {
      loadCount++;
      if ((loadCount > imgs.length) || (loadCount == imgs.length)) {
        Main.load(ctx, imgObjects); // 加载函数
      }
    }

    imgs.forEach(function (imgurl) {
      var img = new Image();
      img.addEventListener('load', listener);
      img.src = './static/images/' + imgurl;
      imgObjects.push(img);
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bird {

  }
</style>
