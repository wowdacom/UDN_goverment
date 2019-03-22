<template>
  <div class="header-wrapper" :class="{'isShow': isShowMenu}">
    <div class="header">
      <div class="left">
        <a href="https://udn.com/upf/newmedia/2019_data/digital_privacy/" @click="handle_logoGA"><i class="udn-icon udn-icon-logo" :style="{ color: 'black' }"></i></a>
      </div>
      <div class="right" >
          <div class="menu-web">
              <ul class="lists">
                <li class="list" @click="handleGA(item.title)" v-for="item in links" :key="item.id" ><a :href="item.url" target="_blank">{{ item.title }}</a></li>
              </ul>
          </div>
          <font-awesome-icon class="hamburger" @click="controlExpand" :icon="['fas', 'bars']"  size="2x"/>
          <div class="menu" v-show="isExpand">
            <div class="close-wrapper">
              <font-awesome-icon class="close" @click="controlExpand" :icon="['fas', 'times-circle']" size="2x"/>
            </div>
            <ul class="lists">
              <li class="list" v-for="item in links" :key="item.id" >
                <a :href="item.url" target="_blank">
                  {{ item.title }}
                  <hr>
                </a>
                
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import setProps from '../mixin/setProps.js'
import Utils from 'udn-newmedia-utils'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas)

export default {
  name: 'Header',
  mixins: [setProps],
  data () {
    return {
      isExpand: false,
      isShowMenu: false
    }
  },
  props: {
    links: Array
  },
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  computed: {

  },
  mounted () {
    const vm = this
    window.addEventListener('scroll', vm.handle_scroll)
  },
  methods: {
    controlExpand () {
      this.isExpand = !this.isExpand
    },
    handle_logoGA () {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "logo",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [聯logo]]"
      })
    },
    handleGA (title) {
      console.log(title)
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "out link title",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [外連到「 " + title +  " 」]"
      })
    },
    handle_scroll () {
      let currentH = window.pageYOffset
      if (currentH < 2) {
        this.isShowMenu = false
      } else {
        this.isShowMenu = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.header-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: white;
    transform: translateY(-100%);
    transition: all 0.1s ease-in-out;
    .header {
      &::after {
        content: '';
        display: block;
        clear: both;
      }
      .left {
        float: left;
        .udn-icon-logo{
          font-size: 36px;
          color: #465362;
          transition: transform 288ms ease-in;
          transform: rotate(0deg);
          text-decoration: none;
          line-height: 58px;
          &:hover{
            transform: rotate(16deg);
          }
        }
      }
      .right {
        float: right;
        max-height: 48px;
        .menu-web {
          display: none;
          @media (min-width: 768px) {
            display: block;
            .lists {
              text-align: center;
              .list {            
                font-size: 20px;
                line-height: 1.4;
                color: inherit;
                transition: 222ms ease;
                padding: 15px;
                display: inline-block;
                a {
                  color: #465362;
                  text-decoration: none;
                  cursor: pointer;
                  &:hover {
                    color: #e2e2e2;
                  }
                }
                
              }
            }
          }
          @media screen and (min-width: 1025px){
            display: block;
          }
        }
        .menu {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: white;
          color: #acacac;
          z-index: 100;
          transition: all 1s;
          padding: 5%;
          
          .lists {
            text-align: center;
            padding-top: 100px;
            .list {
              list-style: none;
              font-size: 20px;
              line-height: 1.4;
              color: inherit;
              transition: 222ms ease;
              
              hr {
                background-color: white;
              }
              a {
                cursor: pointer;
                color: #acacac;
                text-decoration: none;
                width: 100%;
                    font-size: 24px;
                    height: calc(100vh - 58px);
              }
              
            }
          }
        }
        .hamburger, .close {
          // width: 35px;
          // height: 20px;
          color: #465362;
          margin: 5.5px;
          cursor: pointer;
          @media (min-width: 768px) {
            display: none;
          }
          @media screen and (min-width: 1025px){
            display: none;
          }
        }
        .close-wrapper {
          text-align: right;
          .close {
            
          }
        }
      }
    }
  }
  .isShow {
    transition: all 0.5s ease-in-out;
    transform: translateY(0);
  } 
</style>
