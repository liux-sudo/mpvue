<template>
  <div class="detail">
    <div class="detail_img">
      <img class="detail_img_bg" :src="detailsList.detail_img" alt="">
      <img @click="isMusicPlay" class="music" :src="isMusic ? '/static/images/music-start.png' : '/static/images/music-stop.png' "
        alt="">
    </div>
    <div class="detail_from">
      <img :src="detailsList.avatar" alt="">
      <span>{{detailsList.date}}</span>
    </div>
    <p class="detail_title">{{detailsList.title}}</p>
    <div class="detail_content">
      <div class="detail_content-img">
        <img @click="sc" :src="isSc ? '/static/images/collection.png' : '/static/images/collection-anti.png' " alt="">
        <img @click="share" src="/static/images/share.png" alt="">
      </div>
      <div class="line"></div>
    </div>
    <button class="btn" open-type="share">转发此文章</button>
    <p class="detail_footer_content">{{detailsList.detail_content}}</p>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        detailsList: {},
        isSc: false, // 是否收藏
        isMusic: false // 是否播放
      }
    },
    beforeMount() {
      let index = this.$mp.query.index
      let oldStorage = wx.getStorageSync('isSc')
      if (!oldStorage) {
        wx.setStorage({
          key: 'isSc',
          data: {}
        })
      } else {
        this.isSc = oldStorage[index] ? true : false
      }
    },
    mounted() {
      this.detailsList = this.listTem.list_data[this.$mp.query.index]
    },
    computed: {
      ...mapState(['listTem'])
    },
    methods: {
      sc: function() {
        this.isSc = !this.isSc
        let title = this.isSc ? '收藏成功' : '取消收藏'
        wx.showToast({
          title,
          icon: 'success',
          duration: 2000
        })

        let oldStorage = wx.getStorageSync('isSc')
        oldStorage[this.$mp.query.index] = this.isSc
        wx.setStorage({
          key: 'isSc',
          data: oldStorage
        })
      },
      isMusicPlay: function() {
        this.isMusic = !this.isMusic
        let {
          dataUrl,
          title
        } = this.detailsList.music
        if (this.isMusic) {
          console.log('进入',dataUrl)
          wx.playBackgroundAudio({
            dataUrl,
            title
          })
        } else {
          wx.pauseBackgroundAudio()
        }
      },
      share:function(){
        wx.showActionSheet({
          itemList: [
            '分享到朋友圈','分享给好友','转发'
          ]
        })
      }
    }
  }
</script>

<style>
  .detail_img {
    width: 100%;
    height: 400rpx;
    position: relative;
  }

  .detail_img_bg {
    width: 100%;
    height: 100%;
  }

  .music {
    position: absolute;
    width: 80rpx;
    height: 80rpx;
    left: 50%;
    top: 50%;
    margin-left: -40rpx;
    margin-top: -40rpx;
  }

  .detail_from {
    width: 100%;
    height: 80rpx;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15rpx;
  }

  .detail_from img {
    width: 50rpx;
    height: 50rpx;
    margin-right: 10rpx;
  }

  .detail_from span {
    font-size: 30rpx;
    color: #666;
  }

  .detail_title {
    font-size: 34rpx;
    font-weight: bold;
    margin-left: 20rpx;
  }

  .detail_content {
    width: 100%;
    height: 100rpx;
    position: relative;
    box-sizing: border-box;
    padding: 0 20rpx;
  }

  .line {
    width: 94%;
    height: 2rpx;
    background: #ccc;
    position: absolute;
    top: 50rpx;
    left: 50%;
    margin-left: -47%;
  }

  .detail_content-img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 20rpx;
  }

  .detail_content-img img {
    width: 80rpx;
    height: 80rpx;
    z-index: 1;
    margin-right: 20rpx;
  }

  .detail_content-img img:nth-child(2) {
    margin-right: 45rpx;
  }

  .btn {
    width: 45%;
    height: 70rpx;
    font-size: 30rpx;
    text-align: center;
    line-height: 70rpx;
    margin-bottom: 10rpx;
    color: #666;
  }

  .detail_footer_content {
    font-size: 32rpx;
    text-indent: 32rpx;
    text-align: justify;
    color: #666;
  }
</style>
