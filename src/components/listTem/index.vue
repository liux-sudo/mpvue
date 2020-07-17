<template>
  <div class="listTem" @click="toDetail">
    <div class="list_content_header">
      <img :src="item.avatar" alt="">
      <span>{{item.date}}</span>
    </div>
    <p class="list_title">{{item.title}}</p>
    <img class="list_img" :src="item.detail_img" alt="">
    <p class="list_content">{{item.detail_content}}</p>
    <div class="list_footer">
      <img src="../../../static/images/icon_defaultSc.png" alt="">
      <span class="sc">{{item.love_count}}</span>
      <img src="../../../static/images/browse.png" alt="">
      <span>{{item.attention_count}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item', 'index'],
    methods: {
      toDetail: function() {
        wx.navigateTo({
          url: '/pages/detail/main?index=' + this.index
        })
      }
    }
  }
</script>

<style>
  .listTem {
    border-bottom: 1rpx solid #f2f2f2;
    box-sizing: border-box;
    padding-bottom: 10rpx;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .list_content_header {
    width: 100%;
    height: 80rpx;
    box-sizing: border-box;
    padding: 15rpx;
    display: flex;
    align-items: center;
  }

  .list_content_header img {
    width: 50rpx;
    height: 50rpx;
    border-radius: 50rpx;
    margin-right: 20rpx;
  }

  .list_title {
    font-size: 34rpx;
    font-weight: bold;
    margin-bottom: 6rpx;
  }

  .list_img {
    width: 100%;
    height: 400rpx;
  }

  .list_content {
    font-size: 30rpx;
    color: #999;
    text-indent: 30rpx;
    text-align: justify;
  }

  .list_footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 6rpx;
  }

  .list_footer img {
    width: 40rpx;
    height: 40rpx;
    margin-right: 15rpx;
  }

  .list_footer .sc {
    margin-right: 15rpx;
  }
</style>
