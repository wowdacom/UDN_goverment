<template>
  <div class="backtop-section" @click="clickToTop">
    <div class="backtop-btn" :class="{ 'backtop-active': isActive}" :style="{ backgroundColor: setProps('arrowBoxColor') }">
      <font-awesome-icon class="close" :icon="['fas', 'chevron-up']" size="2x"  aria-hidden="true" :style="{ color: setProps('arrowColor') }" />
    </div>
  </div>
</template>

<script>
import setProps from '@/mixin/setProps.js'
import Utils from 'udn-newmedia-utils'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas)

export default {
  name: 'BackTop',
  mixins: [ setProps ],
  data () {
    return {
      isActive: true
    }
  },
  props: {
    arrowColor: {
      type: String,
      default: '#fff'
    },
    arrowBoxColor: {
      type: String,
      default: '#E5E5E5'
    },
    jsonProps: {
      type: Object,
      default: null
    }
  },
  methods: {
    clickToTop () {
      this.isActive = true
      $('html, body').animate({ scrollTop: 0 }, 1000)
      window.ga("send", {
        "hitType": "event",
        "eventCategory": "headbar",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [點擊回到最上面]"
      })
    },
    handle_scroll () {
      let currentH = window.pageYOffset
      if (currentH > window.innerHeight && currentH > 0) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    }
  },
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  mounted () {
    window.addEventListener('scroll', this.handle_scroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handle_scroll)
  }
}
</script>

<style lang="scss" scoped>
.backtop-section{
  position: fixed;
  z-index: 50;
  right: 10px;
  bottom: 10px;
  width: 45px;
  height: 45px;
  overflow: hidden;
  opacity: .8;
  @media screen and (min-width: 1025px) {
    bottom: 3.5vh;
    right: 50%;
    margin-right: -520px;
  }
}
.backtop-btn{
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E5E5E5;
  cursor: pointer;
  transition: 333ms ease;
  transform: translate3d(0, 0, 0);
  i{
    color: #fff;
  }
}
.backtop-active{
  transform: translate3d(0, 100%, 0);
}
</style>
