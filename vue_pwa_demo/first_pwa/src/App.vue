<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import Vue from 'vue'

  import Common from './components/common/api.js'
  import {mapGetters} from 'vuex'
  import {Confirm, Loading, Alert, XDialog, TransferDom, ToastPlugin} from 'vux'

  Vue.directive('transfer-dom', TransferDom)
  Vue.use(ToastPlugin)
  export default {
    name: 'App',
    data() {
      return {
        loadText: '加载中..',
      }
    },
    components: {
      Confirm,
      Loading,
      Alert,
      XDialog,
    },
    computed: {
      ...mapGetters({
        transitionName: 'GET_PAGE_TRANSITION',
      })
    },
    mounted() {

    },
    methods: {

    }
  };
</script>

<style>
  html,body{
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*padding-top: .35rem;*/
    font-size: .16rem;
    /*min-height: 100%;*/
    background-color: #f2f4f7;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: 'Avenir Next', 'Lantinghei SC';
    font-smoothing: antialiased; /*字体平滑显示*/
    background-color: #f7f8fa;
  }

  .vux-toast .weui-toast {
    min-height: .3rem !important;
    min-width: 1rem !important;
  }
  .tans {
    min-height: 100%;
    background-color: #f2f4f7;
  }
  .ivu-row {
    padding: 20px 10px 0;
  }
  button.weui-btn {
    border: none;
  }
  button.weui-btn:after {
    content: '';
    display: none;
  }
  .ivu-col-span-12 {
    padding: 0 10px;
  }

  html {
    font-size: 732.4%;
  }

  @media screen and (max-width: 359px) {
    html {
      font-size: 625%;
    }
  }

  @media screen and (min-width: 360px) and (max-width: 374px) {
    html {
      font-size: 703%;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 383px) {
    html {
      font-size: 732.4%;
    }
  }

  @media screen and (min-width: 384px) and (max-width: 399px) {
    html {
      font-size: 750%;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 413px) {
    html {
      font-size: 781.25%;
    }
  }

  @media screen and (min-width: 414px) and (max-width: 431px) {
    html {
      font-size: 808.6%;
    }
  }

  @media screen and (min-width: 432px) and (max-width: 479px) {
    html {
      font-size: 843.75%;
    }
  }
</style>

<style lang="less">
@default-color:#5bd1c2;
@default-active-color:rgba(91, 209, 194,.9);
@warn-color:#f38181;
@warn-active-color:rgba(243, 129, 129,.9);
@disabled-color:#c4c4c4;

#app .weui-btn_primary {
    color: #fff;
    background-color: @default-color;
}
#app .weui-btn_primary:not(.weui-btn_disabled):active {
    color: #fff;
    background-color: @default-active-color;
}
#app .weui-btn_warn {
    color: #fff;
    background-color: @warn-color;
}
#app .weui-btn_warn:not(.weui-btn_disabled):active {
    color: #fff;
    background-color: @warn-active-color;
}
#app .weui-btn_disabled {
    color: #fff;
    background-color: @disabled-color;
}
#app .weui-mask {
  z-index: 10000;
}
#app .weui-dialog {
  z-index: 10001;
}
</style>
