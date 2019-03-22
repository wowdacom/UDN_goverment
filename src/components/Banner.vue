<template>
  <div class="banner-container" :style="{'background': 'url(' + srcRWD(bannerMob, bannerWeb) + ')', 'backgroundSize':'cover'}">
    <div class="banner-title-wrapper">
      <div class="vision-logo-wrapper">
        <img :src="require('../../public/banner/logo_vision.svg')" alt="">
      </div>
      <div class="title">
        隱私網戰
      </div>
    </div>
    <div class="text-wrapper">
      聯合報系願景工程3/25起一連三天推出「隱私網戰」專題報導，由民眾對數位足跡的不在意、企業蒐集窺探你的生活，以及政府作為最大的人民個資擁有者，如何在發展大數據時兼顧個資等角度，探討台灣面臨的數位人權難題。
    </div>
    <div class="links-container">
      <div class="link-wrapper">
        <a href="https://udn.com/upf/newmedia/2019_data/digital_privacy/" target="_blank">
          <div class="link-cover">
            <img :src="require('../../public/banner/AD1.jpg')" alt="">
          </div>
          <div class="link-title">
            <span>按讚、打卡、看影音</span><br>
            <span>你的數位隱私保障了嗎？</span>
          </div>
        </a>
      </div>
      <div class="link-wrapper">
        <a href="https://udn.com/upf/newmedia/2019_data/digital_privacy/quiz/" target="_blank">
          <div class="link-cover">
            <img :src="require('../../public/banner/AD3.jpg')" alt="">
          </div>
          <div class="link-title">
            <span>你是網路透明人嗎?</span><br>
            <span>測驗你的隱私危險指數</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import srcRWD from '../mixin/srcRWD.js'

export default {
  name: 'Banner',
  mixins: [srcRWD],
  data () {
    return {
      bannerMob: require('../../public/banner/AD_BG_mob.jpg'),
      bannerWeb: require('../../public/banner/AD_BG_PC.jpg')
    }
  }
};

</script>

<style lang="scss" scoped>

  .banner-container {
    padding: 10% 5%;
    background-size: cover;
    background-image: url('~/public/banner/bg_mob.jpg');
    @media screen and (min-width: 1024px) {
      padding: 15% 15%;
      background-image: url('~/public/banner/bg_web.jpg');
    }

    .banner-title-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 10%;

      @media screen and (min-width: 1024px) {
        padding: 5% 30%;
      }

      .vision-logo-wrapper {
        width: 50%;
        img {
          width: 100%;
        }
      }
      .title {
        width: 50%;
        font-size: 26px;
        color: #f3f3f3;
        font-weight: bold;
        border-left: solid 1px;
        padding-left: 20px;
        @media screen and (min-width: 1024px) {
          padding-left: 30px;
        }
      }
    }
    .text-wrapper {
      padding: 5%;
      text-align: left;
      font-size: 18px;
      line-height: 1.78;
      color: #f3f3f3;
      @media screen and (min-width: 1024px) {
        padding: 0 5%;
      }

    }
    .links-container {
      padding: 5%;
      @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5%;
      }
      .link-wrapper {
        padding: 5% 0;
        @media screen and (min-width: 1024px) {
          width: 49%;
        }
        a {
          text-decoration: none;
        }
        .link-cover {
          &:hover {
            filter: invert(100%);
          }
          img {
            width: 100%;
          }
        }
        
        .link-title {
          margin: 5px 0;
          text-align: left;
          font-weight: bold;
          color: #f3f3f3;
          & > span { 
            border-bottom: solid 2px white;
          }
        }
        .keep {

        }
      }
    }

  }
</style>
