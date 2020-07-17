<template>
  <div class="list">
    <swiper indicator-dots="true" autoplay="true" circular="true" easing-function="linear">
      <swiper-item>
        <img src="/static/images/01.jpeg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/02.jpeg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/03.jpeg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/04.jpeg" alt="">
      </swiper-item>
    </swiper>
    <div>
      <listTem v-for="(item,index) in listTem.list_data" :item="item" :index="index" :key="index" />
    </div>
  </div>
</template>

<script>
  import listTem from '../../components/listTem/index.vue'
  import {
    mapState
  } from 'vuex'
  export default {
    beforeMount() {
      this.$store.dispatch('getList')
      console.log(this.$store)
    },
    components: {
      listTem
    },
    computed: {
      ...mapState(['listTem'])
    },
  }
</script>

<style>
  .list swiper {
    width: 100%;
    height: 400rpx;
  }

  .list swiper swiper-item img {
    width: 100%;
    height: 100%;
  }
</style>
