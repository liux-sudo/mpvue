<template>
  <div class="index_content">
    <img v-if="isShow" class="userImg" :src="userInfo.avatarUrl" alt="">
    <p v-if="isShow" class="userName">{{userInfo.nickName}}</p>
    <button class="getUserInfo" v-else open-type="getUserInfo" @getuserinfo="headlerGetUserInfo">点击获取用户信息</button>
    <buttom @click="toList" class="gostudy">开启小程序之旅</buttom>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: null,
        isShow: false
      }
    },

    beforeMount() {
      this.getuserinfofn()
    },

    methods: {
      getuserinfofn: function() {
        wx.getUserInfo({
          success: (data) => {
            const userInfo = data.userInfo
            this.userInfo = userInfo
            this.isShow = true
          },
          fail: (err) => {
            console.log('获取失败：', err)
          }
        })
      },
      headlerGetUserInfo: function(data) {
        if (data.mp.detail.rawData) {
          this.getuserinfofn()
        }
      },
      toList: function(){
        wx.switchTab({
          url: '/pages/list/main'
        })
      }
    },
  }
</script>

<style>
  page {
    background: #8ed145;
  }

  .index_content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .index_content .userImg {
    width: 200rpx;
    height: 200rpx;
    border-radius: 100%;
    margin: 100rpx 0;
  }

  .getUserInfo{
    width: 300rpx;
    height: 300rpx;
    border-radius: 150rpx;
    margin: 50rpx 0;
    font-size: 28rpx;
    line-height: 300rpx;
    text-align: center;
  }

  .index_content .userName {
    font-size: 40rpx;
    font-weight: bold;
    margin-bottom: 30rpx;
  }

  .index_content .gostudy {
    width: 300rpx;
    height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1rpx solid #eee;
    margin-top: 80rpx;
    border-radius: 10rpx;
  }
</style>
