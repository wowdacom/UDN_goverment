<template>
  <div class="logo">
      <ul class="logo-lists">
          <li v-for="item in links" :key="item.name" class="list" @click="handleGA(item.name)" >
              <a :href="item.link" target="_blank">
                  <img :src="item.logo" alt="">
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
import setProps from '@/mixin/setProps.js'
export default {
  name: 'logo',
  mixins: [setProps],
  data () {
      return {
          links: [
              {
                  name: '願景工程',
                  link: 'https://vision.udn.com/',
                  logo: require('../../public/logo/vision_logo.svg')
              },
              {
                  name: '聯合新聞網',
                  link: 'https://udn.com/news/index',
                  logo: 'https://udn.com/upf/newmedia/image/20180829Logo/logo_udn2.jpg'
              },
              {
                  name: '經濟日報',
                  link: 'https://udn.com/upf/newmedia/udn_newmedia/',
                  logo: require('../../public/logo/times.svg')
              },
              {
                  name: '新媒體中心',
                  link: 'https://www.facebook.com/udnNewMediaLab/',
                  logo: 'https://udn.com/upf/newmedia/image/20180829Logo/logo_new_media_center2.jpg'
              }
          ]
      }
  },
  props: {

  },
  methods: {
      handleGA (logo) {
        window.ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "out link title",
            "eventAction": "click",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [外連到「 " + logo +  " 」]"
        })
      }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.logo {
    .logo-lists {
        margin: 10px 16px;
       list-style:none;
       .list {
           display: inline-block;
           width: 128px;
           height: 37px;
           color: white;
           img {
               width: 100%;
           }
       }
    }
}
</style>
