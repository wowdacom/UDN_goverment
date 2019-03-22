<template>
  <div class="logo-block">
    <div
      id="vision"
      class="logo"
      v-if="!yesToBoolean(setProps('useVision'))"
      @click="sendGA('願景')"
    >
      <a href="https://vision.udn.com/" target="_blank"><img width="140" src="https://udn.com/upf/newmedia/image/20180829Logo/logo_udnhope2.jpg" alt=""></a>
    </div>
    <div
      class="logo"
      @click="sendGA('新聞網')"
    >
      <a href="https://udn.com/news/index" target="_blank">
        <img src="https://udn.com/upf/newmedia/image/20180829Logo/logo_udn2.jpg">
      </a>
    </div>
    <div
      class="logo"
      @click="sendGA('經濟日報')"
    >
      <a href="https://money.udn.com/money/" target="_blank">
        <img src="../../public/logo/times.svg">
      </a>
    </div>
    <div
      class="logo"
      id="nmd"
      v-if="!yesToBoolean(setProps('useUbrand'))"
      @click="sendGA('新媒體')"
    >
      <a target="_blank">
        <img src="https://udn.com/upf/newmedia/image/20180829Logo/logo_new_media_center2.jpg">
      </a>
    </div>
  </div>
</template>

<script>
import yesToBoolean from '../mixin/yesToBoolean.js'
import setProps from '../mixin/setProps.js'
import Utils from 'udn-newmedia-utils'

export default {
  name: 'Logo',
  mixins: [setProps, yesToBoolean],
  props: {
    jsonProps: {
      type: Object,
      default: null
    },
    useVision: {
      type: String
    },
    useUbrand: {
      type: String
    }
  },
  methods: {
    sendGA(target) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "logo",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + target + "] [logo click]"
      })
    },
  },
};
</script>

<style lang="scss" scoped>
  .logo{
    width: 140px;
    margin-top: 20px;
    @media screen and (min-width: 1024px){
      margin-top: 0;
    }
    img{
      width: 100%;
      height: auto;
    }
  }
  .logo-block{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    align-items: flex-start;
  }
  .logo{
    flex-shrink: 0;
  }  
  @media (min-width: 768px) and (max-width: 1024px){
    .logo-block{
      margin-top: 32px;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: center;      
    }
    .logo{
      margin-left: 12px;
    }
  }
  @media screen and (min-width: 1025px){
    .logo-block{
      margin-top: -45px;
      justify-content: flex-end;
      align-content: flex-start;
      align-items: center;        
    }
    .logo{
      margin-left: 12px;
    }
  }
</style>
