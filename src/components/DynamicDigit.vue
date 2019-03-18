<template>
  <div class="dynamic-digit-container" :style="{ backgroundColor: backgroundColor }">
    <div class="dynamic-digit-wrapper" :style="{ color: color }">
      <div class="dynamic-digit">
        <slot class="title" name="title"></slot><span class="number">{{count}}</span>
        <span class="digit-unit">{{unit}}</span>
      </div>
    </div>
    <div class="description">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicDigit',
  props: {
    unit: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: "#4356ff",
    },
    backgroundColor: {
      type: String,
      default: '#f6f6f6',
    },
    countNumber: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      count: 0,
      startFlag: false,
    };
  },
  methods: {
    digitIncrement() {
      let vm = this
      setInterval(() => {
        if (vm.count === vm.amount) {
          clearInterval();
        } else {
          vm.count += vm.countNumber;
        }
      }, 0.003);
    },
  },
  mounted() {
    const vm = this;
    window.addEventListener("scroll", function() {
      // 滑到才開始跑數字
      if ( window.pageYOffset >= vm.$el.offsetTop - window.innerHeight && window.pageYOffset <= vm.$el.offsetTop) {
        
        if (!vm.startFlag) {
          vm.digitIncrement();
          vm.startFlag = true;
        }
      } else {
        vm.count = 0;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
  .dynamic-digit-container {
    position: relative;
    width: 100%;
    text-align: left;
    padding: 0 15px;
    margin: 0 auto;
    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 0 100px;
    }
    @media screen and (min-width: 1024px) {
      padding: 0;
    }
  }

  .dynamic-digit-wrapper, .description {
    width: 100%;
    @media screen and (min-width: 1024px) {
      width: 800px;
      margin: 0 auto;
    }
  }
  .dynamic-digit-wrapper {
    display: flex;

    .dynamic-digit {      
      
      .number {
        font-size: 48px;
        font-weight: bold;
        @media screen and (min-width: 1024px) {
          font-size: 64px;
        }
      }
      .title {
      font-size: 18px;
      }
      .digit-unit {
        font-size: 18px;
      }
    }
    
  }

  .description {
    font-weight: bold;
    p {
      margin: 0;
    }
  }
</style>
